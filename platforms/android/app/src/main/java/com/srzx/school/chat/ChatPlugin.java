package com.srzx.school.chat;

import com.alibaba.fastjson.JSON;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * 聊天插件
 * Created by fqhznh on 2018/1/15.
 */

public class ChatPlugin extends CordovaPlugin {


    private ExecutorService mThreadPool = Executors.newFixedThreadPool(1);

    private CallbackContext msgContext;

    @Override
    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
        mThreadPool.execute(new Runnable() {
            @Override
            public void run() {
                try {
                    if("login".equals(action)) { //登陆
                        String user = args.getString(0); //用户编号
                        String password = args.getString(1); //用户密码
                        login(user, password, callbackContext);
                    } else if("logout".equals(action)) {
                        logout();
                    } else if("sendTxtMsg".equals(action)) { //发送文本消息
                        String toUser = args.getString(0);
                        String content = args.getString(1);
                        int type = args.getInt(2);
                        sendTxtMsg(toUser, content, type);
                    } else if("registerMsgListener".equals(action)) { //监听消息
                        msgContext = callbackContext;
                        registerMsgListener(msgContext);
                    } else if("loadMessages".equals(action)) { //加载消息
                        String user = args.getString(0);
                        String msgId = args.getString(1);
                        if("null".equals(msgId)) {
                            msgId = null;
                        }
                        Integer pageSize = args.getInt(2);
                        if(pageSize == null) {
                            pageSize = 20;
                        }
                        callbackContext.success(wrapMessage(ChatService.getInstance().loadMessages(user, msgId, pageSize)));
                    } else if("getUnreadMsgCount".equals(action)) { //获取未读消息数量
                        String user = args.getString(0);
                        callbackContext.success(ChatService.getInstance().getUnreadMsgCount(user));
                    } else if("loadConversations".equals(action)) { //加载所有会话
                        callbackContext.success(wrapConversation(ChatService.getInstance().loadConversations()));
                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });

        return true;
    }

    /**
     * 登陆聊天服务器
     * @param user
     * @param password
     */
    private void login(String user, String password, CallbackContext callbackContext) {
        ChatService.getInstance().login(user, password, new IChatLoginCallback() {
            @Override
            public void onStart() {
                callbackContext.success("1");
            }

            @Override
            public void onEnd() {
                callbackContext.success("2");
            }

            @Override
            public void onError(int code, String message) {
                Map<String, Object> map = new HashMap<>();
                map.put("code", code);
                map.put("message", message);
                callbackContext.error(JSON.toJSONString(map));
            }
        });
    }

    /**
     * 发送文本消息
     * @param toUser 对方用户、群
     * @param content
     * @param type 1：单用户消息，2：群消息
     */
    private void sendTxtMsg(String toUser, String content, int type) {
        ChatService.getInstance().sendTextMsg(toUser, type, content);
    }

    /**
     * 退出
     */
    private void logout() {
        ChatService.getInstance().logout();
    }

    /**
     * 监听消息
     */
    private void registerMsgListener(final CallbackContext callbackContext) {
        ChatService.getInstance().registerMsgListener(new IChatListener() {
            @Override
            public void onReciveMessage(List<Message> messages) {
                JSONObject jsonObject = new JSONObject();
                try {
                    jsonObject.put("type", 1);
                    jsonObject.put("data", wrapMessage(messages));
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, jsonObject);
                pluginResult.setKeepCallback(true);
                callbackContext.sendPluginResult(pluginResult);
            }

            @Override
            public void onCoversationUpdate() {
                JSONObject jsonObject = new JSONObject();
                try {
                    jsonObject.put("type", 2);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, jsonObject);
                pluginResult.setKeepCallback(true);
                callbackContext.sendPluginResult(pluginResult);
            }
        });
        PluginResult pluginResult = new PluginResult(PluginResult.Status.NO_RESULT);
        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);
    }

    private JSONArray wrapMessage(List<Message> messages) {
        JSONArray jsonArr = new JSONArray();
        try {
            for (Message message : messages) {
                jsonArr.put(message.toJSON());
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jsonArr;
    }

    private JSONArray wrapConversation(List<Conversation> conversations) {
        JSONArray jsonArr = new JSONArray();
        try {
            for (Conversation conversation : conversations) {
                JSONObject json = new JSONObject();
                json.put("id", conversation.getId());
                json.put("type", conversation.getType());
                json.put("unreadCount", conversation.getUnreadCount());
                json.put("name", conversation.getName());
                if(conversation.getMessage() != null) {
                    json.put("time", conversation.getMessage().getTime());
                    json.put("content", conversation.getMessage().getFromUser() + ":" + conversation.getMessage().getContent());
                }
                jsonArr.put(json);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonArr;
    }

}
