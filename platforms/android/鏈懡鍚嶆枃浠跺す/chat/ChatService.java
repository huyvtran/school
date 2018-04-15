package com.srzx.school.chat;

import android.util.Log;

import com.hyphenate.EMCallBack;
import com.hyphenate.EMMessageListener;
import com.hyphenate.chat.EMClient;
import com.hyphenate.chat.EMMessage;

import java.util.ArrayList;
import java.util.List;

/**
 * 聊天服务
 * Created by fqhznh on 2018/1/15.
 */

public class ChatService {

    private static ChatService instance;

    private IChatMessageListener messageListener;

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
    public void login(String user, String password) {
        EMClient.getInstance().login(user, password, new EMCallBack() {//回调
            @Override
            public void onSuccess() {

                EMClient.getInstance().groupManager().loadAllGroups();
                EMClient.getInstance().chatManager().loadAllConversations();

                Log.d("school", "登录聊天服务器成功！");
            }

            @Override
            public void onProgress(int progress, String status) {

            }

            @Override
            public void onError(int code, String message) {
                Log.d("school", "登录聊天服务器失败！");
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
     * 监听消息
     */
    public void registerMsgListener(IChatMessageListener messageListener) {
        this.messageListener = messageListener;
        EMClient.getInstance().chatManager().addMessageListener(msgListener);
    }

    private EMMessageListener msgListener = new EMMessageListener() {
        //收到消息
        @Override
        public void onMessageReceived(List<EMMessage> list) {
            if(messageListener != null && list != null && list.size() > 0) {
                List<Message> messages = new ArrayList<>();
                for(EMMessage message : list) {
                    messages.add(new Message(message));
                }
                messageListener.onReciveMessage(messages);
            }
        }

        //收到透传消息
        @Override
        public void onCmdMessageReceived(List<EMMessage> list) {
            if(messageListener != null && list != null && list.size() > 0) {
                List<Message> messages = new ArrayList<>();
                for(EMMessage message : list) {
                    messages.add(new Message(message));
                }
                messageListener.onReciveMessage(messages);
            }
        }

        //收到已读回执
        @Override
        public void onMessageRead(List<EMMessage> list) {

        }

        //收到已送达回执
        @Override
        public void onMessageDelivered(List<EMMessage> list) {

        }

        //消息被撤回
        @Override
        public void onMessageRecalled(List<EMMessage> list) {

        }

        //消息状态变动
        @Override
        public void onMessageChanged(EMMessage emMessage, Object o) {

        }
    };

}
