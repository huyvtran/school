package com.srzx.school.chat;

import java.util.List;

/**
 * 消息监听接口
 * Created by fqhznh on 2018/1/15.
 */

public interface IChatMessageListener {

    public void onReciveMessage(List<Message> messages);

}
