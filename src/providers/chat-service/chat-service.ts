import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NativeService } from '../native-service/native-service';

declare var Chat;

@Injectable()
export class ChatService {

    private onReciverMsgSubject = new Subject();
    public onReciverMsg = this.onReciverMsgSubject.asObservable();

    private onConversationUpdateSubject = new Subject();
    public onConversationUpdate = this.onConversationUpdateSubject.asObservable();


    constructor(private nativeService: NativeService) {

    }


    login(user:String, password:String): Promise<any> {
        return new Promise((resolver, reject) => {
            if(this.nativeService.isMobile()) {
                Chat.login((data:any) => {
                    resolver();
                }, (data: any) => {
                    reject(data);
                }, user, password);
            } else {
                resolver();
            }
        });
        
    }

    registerMsgListener(): void {
        if(this.nativeService.isMobile()) {
            Chat.registerMsgListener((data: any) => {
                if(data && data.type) {
                    if(data.type == 1) {
                        if(data.data && data.data.length) {
                            this.onReciverMsgSubject.next(data.data);
                        }
                    } else if(data.type == 2) {
                        this.onConversationUpdateSubject.next();
                    }
                }
            });
        }
    }


    loadMessages(user: string, msgId: string, pageSize: number = 20): Promise<any> {
        return new Promise((resolver) => {
            if(this.nativeService.isMobile()) {
                Chat.loadMessages((data: any) => {
                    resolver(data);
                }, null, user, msgId, pageSize);
            }
        });
    }

    getUnreadMsgCount(user: string): Promise<any> {
        return new Promise((resolver) => {
            if(this.nativeService.isMobile()) {
                Chat.getUnreadMsgCount((data: any) => {
                    resolver(data || 0);
                }, null, user);
            }
        });
    }

    /**
     * 加载会话列表
     */
    loadConversations(): Promise<any> {
        return new Promise((resolver) => {
            if(this.nativeService.isMobile()) {
                Chat.loadConversations((data: any) => {
                    resolver(data);
                }, null);
            }
        });
    }

    /**
     * 发送文本消息
     * @param user 
     * @param content 
     * @param type 
     */
    sendTxtMsg(user: string, content: string, type: number) {
        if(this.nativeService.isMobile()) {
            Chat.sendTxtMsg(user, content, type);
        }
    }

}