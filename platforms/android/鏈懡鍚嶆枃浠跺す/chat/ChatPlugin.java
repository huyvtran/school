package com.srzx.school.chat;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.List;

/**
 * 聊天插件
 * Created by fqhznh on 2018/1/15.
 */

public class ChatPlugin extends CordovaPlugin {

    private CallbackContext mCallbackContext;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        this.mCallbackContext = callbackContext;

        if("login".equals(action)) { //登陆
            String user = args.getString(0); //用户编号
            String password = args.getString(1); //用户密码
            login(user, password);
            return true;
        } else if("logout".equals(action)) {
            logout();
            return true;
        } else if("sendTxtMsg".equals(action)) { //发送文本消息
            String toUser = args.getString(0);
            String content = args.getString(1);
            int type = args.getInt(2);
            sendTxtMsg(toUser, content, type);
            return true;
        } else if("registerMsgListener".equals(action)) { //监听消息
            registerMsgListener();
            return true;
        }

        return false;
    }

    /**
     * 登陆聊天服务器
     * @param user
     * @param password
     */
    private void login(String user, String password) {
        ChatService.getInstance().login(user, password);
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
    private void registerMsgListener() {
        ChatService.getInstance().registerMsgListener(new IChatMessageListener() {
            @Override
            public void onReciveMessage(List<Message> messages) {
                mCallbackContext.success(new JSONArray(messages));
            }
        });
    }

}
