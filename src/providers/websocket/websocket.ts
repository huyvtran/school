import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StorageService } from '../../providers'

@Injectable()
export class WebSocketService {

    private socket: any;

    private user;

    private onMsgSubject = new Subject();
    public onMsg = this.onMsgSubject.asObservable();

    private stateSubject = new BehaviorSubject<number>(0);          //0-未连接  1-正在连接  2-已连接  9-连接失败
    public onStateChange = this.stateSubject.asObservable();

    private host:string = 'ws://localhost:8080/srzx-im/wx?userId=222';

    constructor(
        private storage: StorageService
    ) {
        this.user = this.storage.read('user');
        
    }

    connect():Promise<any> {
        return new Promise<any>((promise, reject) => {
            this.socket = new WebSocket(this.host);

            this.stateSubject.next(1);

            this.socket.onopen = () => {
                console.log('socket链接成功');
                this.stateSubject.next(2);
                promise();
            }

            this.socket.onmessage = (msg) => {
                console.log('收到信息：', msg);
                if(msg && msg.data) {
                    this.onMsgSubject.next(JSON.parse(msg.data));
                }
            };

            this.socket.onclose = () => {
                this.stateSubject.next(0);
                console.log('断开连接');
            }

            this.socket.onerror = (msg) => {
                console.log('链接出现异常');
                this.stateSubject.next(9);
            }

            
        });
    }

    sendMsg(msg:any) {
        if(this.socket && msg) {
            this.socket.send(JSON.stringify(msg));
        }
    }

}