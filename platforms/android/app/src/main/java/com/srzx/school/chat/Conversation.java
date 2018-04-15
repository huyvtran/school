package com.srzx.school.chat;

import android.util.Log;

import com.hyphenate.chat.EMClient;
import com.hyphenate.chat.EMConversation;
import com.hyphenate.chat.EMGroup;
import com.hyphenate.chat.EMMessage;
import com.hyphenate.exceptions.HyphenateException;

/**
 * 会话
 * Created by fqhznh on 2018/1/24.
 */

public class Conversation {

    private String id;

    /**
     * 未读消息数量
     */
    private int unreadCount;

    /**
     * 最新消息
     */
    private Message message;

    /**
     * 类型，1：单聊，2：群聊
     */
    private int type;

    /**
     * 会话名称
     */
    private String name;

    public Conversation(EMConversation conversation) {
        this.unreadCount = conversation.getUnreadMsgCount();
        EMMessage emMessage = conversation.getLastMessage();
        if(emMessage != null) {
            this.message = new Message(emMessage);
        }
        this.id = conversation.conversationId();
        this.name = this.id;
        if(conversation.isGroup()) {
            this.type = 2;
            EMGroup emGroup = EMClient.getInstance().groupManager().getGroup(conversation.conversationId());
            if(emGroup == null) {
                try {
                    emGroup = EMClient.getInstance().groupManager().getGroupFromServer(conversation.conversationId());
                } catch (HyphenateException e) {
                    e.printStackTrace();
                }
            }
            if(emGroup != null) {
                this.name = emGroup.getGroupName();
            }
        } else {
            this.type = 1;
        }
        Log.d("MSG", "name=====>" + this.name);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getUnreadCount() {
        return unreadCount;
    }

    public void setUnreadCount(int unreadCount) {
        this.unreadCount = unreadCount;
    }

    public Message getMessage() {
        return message;
    }

    public void setMessage(Message message) {
        this.message = message;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
