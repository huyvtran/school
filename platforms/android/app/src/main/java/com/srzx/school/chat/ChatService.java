package com.srzx.school.chat;

import android.util.Log;

import com.hyphenate.EMCallBack;
import com.hyphenate.EMClientListener;
import com.hyphenate.EMConversationListener;
import com.hyphenate.EMMessageListener;
import com.hyphenate.chat.EMClient;
import com.hyphenate.chat.EMCmdMessageBody;
import com.hyphenate.chat.EMConversation;
import com.hyphenate.chat.EMMessage;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 聊天服务
 * Created by fqhznh on 2018/1/15.
 */

public class ChatService {

    private static ChatService instance;

    private IChatListener messageListener;

    /**
     * 使用单例模式，获取实例
     * @return
     */
    public static ChatService getInstance() {
        if(instance == null) {
            instance = new ChatService();
        }
        return instance;
    }

    /**
     * 登陆聊天服务器
     * @param user
     * @param password
     */
    public void login(String user, String password, IChatLoginCallback callback) {

        Log.d("school", "======用户登录======user===>" + user + ",password===>" + password);

        EMClient.getInstance().login(user, password, new EMCallBack() {//回调
            @Override
            public void onSuccess() {

                callback.onStart();

                EMClient.getInstance().groupManager().loadAllGroups();
                EMClient.getInstance().chatManager().loadAllConversations();

                Log.d("school", "登录聊天服务器成功！");

                callback.onEnd();

            }

            @Override
            public void onProgress(int progress, String status) {

            }

            @Override
            public void onError(int code, String message) {
                callback.onError(code, message);
                Log.d("school", "登录聊天服务器失败！code===" + code + ", message====>" + message);
            }
        });
    }


    /**
     * 退出聊天服务器
     */
    public void logout() {
        EMClient.getInstance().logout(true, new EMCallBack() {
            @Override
            public void onSuccess() {
                Log.d("school", "退出成功");
            }

            @Override
            public void onError(int i, String s) {
                Log.d("scool", "退出失败");
            }

            @Override
            public void onProgress(int i, String s) {

            }
        });
    }

    /**
     * 发送消息
     * @param toUser 对方用户名、群
     * @param type 1：单用户消息，2：群消息
     * @param content
     */
    public void sendTextMsg(String toUser, int type, String content) {
        EMMessage message = EMMessage.createTxtSendMessage(content, toUser);
        if(type == 2) {
            message.setChatType(EMMessage.ChatType.GroupChat);
        }
        EMClient.getInstance().chatManager().sendMessage(message);
    }

    /**
     * 发送控制消息
     * @param toUser
     * @param type
     * @param content
     */
    public void sendCmdMsg(String toUser, int type, String content) {
        EMMessage message = EMMessage.createSendMessage(EMMessage.Type.CMD);
        EMCmdMessageBody cmdMessageBody = new EMCmdMessageBody(content);
        message.addBody(cmdMessageBody);
        message.setTo(content);
        if(type == 2) {
            message.setChatType(EMMessage.ChatType.GroupChat);
        }
        EMClient.getInstance().chatManager().sendMessage(message);
    }


    /**
     * 监听消息
     */
    public void registerMsgListener(IChatListener messageListener) {
        this.messageListener = messageListener;
        EMClient.getInstance().chatManager().addMessageListener(msgListener);
        EMClient.getInstance().chatManager().addConversationListener(conversationListener);

    }


    /**
     * 加载所有消息
     * @param user
     * @return
     */
    public List<Message> loadMessages(String user, String msgId, int pageSize) {
        EMConversation conversation = EMClient.getInstance().chatManager().getConversation(user);
        Log.d("APP", "user====>" + user + ", msgId====>" + msgId + ("," + (msgId == null) + "," + ("null".equals(msgId))) + ",pageSize===>" + pageSize + ",conversation===" + conversation);
        if(conversation != null) {
            if(msgId == null ) { //加载最新消息
                List<EMMessage> messages = conversation.getAllMessages();
                Log.d("APP","messages===>" + messages);
                if (messages.size() > 0) {
                    EMMessage message = messages.get(messages.size() - 1);
                    messages.addAll(0, conversation.loadMoreMsgFromDB(message.getMsgId(), Math.min(conversation.getAllMsgCount(), pageSize - 1)));
                }
                conversation.markAllMessagesAsRead();
                return toMessages(messages);
            } else {
                List<EMMessage> messages = conversation.loadMoreMsgFromDB(msgId, pageSize);
                return toMessages(messages);
            }

        }
        return new ArrayList<>();
    }

    /**
     * 获取所有会话
     * @return
     */
    public List<Conversation> loadConversations() {
        Map<String, EMConversation> emConversations = EMClient.getInstance().chatManager().getAllConversations();
        Log.d("APP", "emConversations=========>" + emConversations);
        List<Conversation> conversations = new ArrayList<>();
        if(emConversations != null && emConversations.size() > 0) {
            for(EMConversation emConversation : emConversations.values()) {
                conversations.add(new Conversation(emConversation));
            }
        }
        return conversations;
    }

    public int getUnreadMsgCount(String user) {
        EMConversation conversation = EMClient.getInstance().chatManager().getConversation(user);
        if(conversation != null) {
            return conversation.getUnreadMsgCount();
        }
        return 0;
    }



    private List<Message> toMessages(List<EMMessage> list) {
        List<Message> messages = new ArrayList<>();
        if(list != null && list.size() > 0) {
            for(EMMessage message : list) {
                messages.add(new Message(message));
            }
        }
        Log.d("school", "消息数目：=======>" + list.size());
        return messages;
    }

    private EMConversationListener conversationListener = new EMConversationListener() {
        @Override
        public void onCoversationUpdate() {
            if(messageListener != null) {
                messageListener.onCoversationUpdate();
            }
        }
    };

    private EMMessageListener msgListener = new EMMessageListener() {
        //收到消息
        @Override
        public void onMessageReceived(List<EMMessage> list) {
            Log.d("school", "======接受普通消息：list===>" + list);
            if(messageListener != null && list != null && list.size() > 0) {
                messageListener.onReciveMessage(toMessages(list));
            }
        }

        //收到透传消息
        @Override
        public void onCmdMessageReceived(List<EMMessage> list) {
            Log.d("school", "======接受控制消息：list===>" + list);
            if(messageListener != null && list != null && list.size() > 0) {
                messageListener.onReciveMessage(toMessages(list));
            }
        }

        //收到已读回执
        @Override
        public void onMessageRead(List<EMMessage> list) {
            Log.d("school", "======收到已读回执：list===>" + list);
        }

        //收到已送达回执
        @Override
        public void onMessageDelivered(List<EMMessage> list) {
            Log.d("school", "======收到已送达回执：list===>" + list);
        }

        //消息被撤回
        @Override
        public void onMessageRecalled(List<EMMessage> list) {
            Log.d("school", "======消息被撤回：list===>" + list);
        }

        //消息状态变动
        @Override
        public void onMessageChanged(EMMessage emMessage, Object o) {
            Log.d("school", "======消息状态变动：message===>" + emMessage);
        }
    };

}
