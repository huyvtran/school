package com.srzx.school.chat;

import com.hyphenate.chat.EMMessage;
import com.hyphenate.chat.EMTextMessageBody;

import org.json.JSONException;
import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by fqhznh on 2018/1/15.
 */

public class Message {

    private String id;

    private String fromUser;

    private String toUser;

    private String content;

    private long msgTime;

    private String time;

    private String date;

    /**
     * 消息类型，1：文本，9：透传
     */
    private int type;

    private String owner;

    public Message(EMMessage message) {
        this.id = message.getMsgId();
        this.fromUser = message.getFrom();
        this.toUser = message.getTo();
        this.owner = message.getUserName();
        if(message.getType() == EMMessage.Type.TXT) {
            type = 1;
            content = ((EMTextMessageBody) message.getBody()).getMessage();
        } else if(message.getType() == EMMessage.Type.CMD) {
            type = 9;
        }
        msgTime = message.getMsgTime();
        if(msgTime != -1) {
            Date date = new Date(msgTime);
            SimpleDateFormat dateFormat = new SimpleDateFormat();
            dateFormat.applyPattern("HH:mm");
            time = dateFormat.format(date);
            dateFormat.applyPattern("yyyy-MM-dd");
            this.date = dateFormat.format(date);
        }
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

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    @Override
    public String toString() {
        return "Message{" +
                "id='" + id + '\'' +
                ", fromUser='" + fromUser + '\'' +
                ", toUser='" + toUser + '\'' +
                ", content='" + content + '\'' +
                ", owner='" + owner + '\'' +
                ", msgTime=" + msgTime +
                ", type=" + type +
                '}';
    }

    public JSONObject toJSON() throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("id", id);
        jsonObject.put("fromUser", fromUser);
        jsonObject.put("toUser", toUser);
        jsonObject.put("content", content);
        jsonObject.put("type", type);
        jsonObject.put("msgTime", msgTime);
        jsonObject.put("owner", owner);
        jsonObject.put("time", time);
        jsonObject.put("date", date);
        return jsonObject;
    }
}
