package com.srzx.school.chat;

/**
 * 初始化内容接口
 * Created by fqhznh on 2018/1/15.
 */

public interface IChatLoginCallback {

    public void onStart();

    public void onEnd();

    public void onError(int code, String message);

}
