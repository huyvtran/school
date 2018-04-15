import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { ChatService } from '../../../providers';

@IonicPage({
    name: 'talk/talk'
})
@Component({
    selector: 'page-talk',
    templateUrl: 'talk.html',
})
export class TalkPage {

    publicTalks: Array<any> = [];
    talks: Array<any> = [];

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private chatService: ChatService,
        private cd: ChangeDetectorRef,
        private popoverCtrl: PopoverController
    ) {
        this.publicTalks = [{
            id: 'sys_1',
            image: 'assets/images/talk/msg.png',
            name: '系统消息',
            content: '今日高温补贴已发',
            time: '13:44'
        }, {
            id: 'sys_2',
            image: 'assets/images/talk/notice.png',
            name: '通知公告',
            content: '恭喜您已经注册',
            time: '13:44'         
        }];
    }

    ionViewDidEnter() {
        this.chatService.onReciverMsg.subscribe((data: any) => {
            console.log('==============onReciverMsg===============');
            this.updateRoomContent();
        });
        this.chatService.onConversationUpdate.subscribe(() => {
            console.log('==============onConversationUpdate===============');
            this.updateRoomContent();
        });
        this.updateRoomContent();
    }

    updateRoomContent() {
        this.chatService.loadConversations().then((data: any) => {
            console.log('loadConversations=================>' + JSON.stringify(data));
            this.talks = this.publicTalks.concat(data);
            this.cd.detectChanges();
        });
    }

    /**
     * 转到聊天页面
     * @param item 
     */
    gotoTalkPage(item: any) {
        if(item.type == 1 || item.type == 2) { //聊天页面
            this.navCtrl.push('talk/chat', item);
        }
    }

    showOperators(ev) {
        let popover = this.popoverCtrl.create(TalkOperator, {}, {
            cssClass: 'talk-operator-popover'
        });
        popover.present({
            ev: ev
        })
    }

}

@Component({
    selector: 'talk-operator',
    template: `
        <ion-list class="popover-page">
            <ion-item tappable>发起对话</ion-item>
            <ion-item tappable>发起群聊</ion-item>
        </ion-list>
    `
})
export class TalkOperator {
    
}