package com.srzx.school.chat;

import com.hyphenate.chat.EMMessage;
import com.hyphenate.chat.EMTextMessageBody;

/**
 * Created by fqhznh on 2018/1/15.
 */

public class Message {

    private String id;

    private String fromUser;

    private String toUser;

    private String content;

    private long msgTime;

    /**
     * 消息类型，1：文本，9：透传
     */
    private int type;

    public Message(EMMessage message) {
        this.id = message.getMsgId();
        this.fromUser = message.getFrom();
        this.toUser = message.getTo();
        if(message.getType() == EMMessage.Type.TXT) {
            type = 1;
            content = ((EMTextMessageBody) message.getBody()).getMessage();
        } else if(message.getType() == EMMessage.Type.CMD) {
            type = 9;
        }
        msgTime = message.getMsgTime();
    }

    public String getFromUser() {
        return fromUser;
    }

    public void setFromUser(String fromUser) {
        this.fromUser = fromUser;
    }

    public String getToUser() {
        return toUser;
    }

    public void setToUser(String toUser) {
        this.toUser = toUser;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public long getMsgTime() {
        return msgTime;
    }

    public void setMsgTime(long msgTime) {
        this.msgTime = msgTime;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
