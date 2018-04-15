import { Component, ViewChild, Renderer, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import $ from 'jquery';
import { ChatService } from '../../../providers';


@IonicPage({
    name: 'talk/chat'
})
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {

    @ViewChild('input') input;
    @ViewChild(Content) contentComponent;

    name:string = '聊天';

    faceItems:Array<any> = [];

    msgList:Array<any> = [];

    ownerId:any = 'test';
    form:FormGroup;

    conversation: any;

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private renderer: Renderer,
        fb: FormBuilder,
        private chatService: ChatService,
        private cd: ChangeDetectorRef
    ) {

        this.conversation = this.navParams.data || {};
        this.name = this.conversation.name || {};

        for (var i = 100; i <= 219; i++) {
            var suffix = i < 200 ? '.gif' : '.png';
            this.faceItems.push({
                src: './assets/images/face/wechat/' + i + suffix,
                name: '表情' + i
            });
        }

        this.form = fb.group({
            content: ['', Validators.required]
        });
    }

    ionViewDidEnter () {
        this.chatService.onReciverMsg.subscribe((data: any) => {
            this.pushMsg(data);
        });
        this.chatService.loadMessages(this.conversation.id, null).then((data:any) => {
            console.log('messages=======>' + JSON.stringify(data));
            this.pushMsg(data);
        });
    }

    pushMsg(data: any) {
        for(let i = 0; i < data.length; i++) {
            this.msgList.push(Object.assign({
                image: './assets/images/user/default.png'
            }, data[i]))
        }
        this.scrollToBottom();
        this.cd.detectChanges();
    }

    insertFace(src) {
        this.input.insertImg(src, 'face');
    }

    toggleFace() {
        if($('.face-items').is(':visible')) {
            $('.face-items').hide();
        } else {
            $('.face-items').show();
        }
        this.contentComponent.resize();
    }

    hideFace() {
        $('.face-items').hide();
        this.contentComponent.resize();
    }

    scrollToBottom() {
        setTimeout(()=> {
            this.contentComponent.scrollToBottom();
        }, 200);
    }

    onSubmit() {
        let content = this.form.value.content;
        let encodeContent = this.encodeMsgContent(content);
        var msg = {
            fromUserId: 'test',
            toUserId: this.conversation.id,
            messageType: 1,
            content: encodeContent
        };
        this.msgList.push(Object.assign({
            image: 'assets/images/user/default.png'
        }, msg));
        this.chatService.sendTxtMsg(this.conversation.id, encodeContent, this.conversation.type || 1);
        this.form.controls['content'].setValue('');
        this.contentComponent.resize();
        this.scrollToBottom();
        this.setFocus();
    }

    encodeMsgContent(content = '') {
        content = content.replace(/<img\b[^<>]*?\bsrc[\s\t\r\n]*=[\s\t\r\n]*["']?[\s\t\r\n]*([^\s\t\r\n"'<>]*)[^<>]*?\/?[\s\t\r\n]*>/gi, (match, src) => {
            var faceItem = this.faceItems.filter(item => item.src == src)[0];
            if (faceItem) {
                return '[' + faceItem.name + ']';
            } else {
                return match;
            }
        });
        content = content.replace(/&nbsp;?/gi, function (match) {
            return ' ';
        });
        return content;

    }

    decodeMsgContent(content = '') {
        content = content.replace(/\s/gi, function (match) {
            return '&nbsp;';
        });
        content = content.replace(/\[([^\]]*)\]/gi, (match, name) => {
            var faceItem = this.faceItems.filter(item => item.name == name)[0];
            if (faceItem) {
                return '<img class="face" src="' + faceItem.src + '" />';
            } else {
                return match;
            }
        });
        return content;
    }

    setFocus() {
        setTimeout(() => {
            this.renderer.invokeElementMethod(this.input.input.nativeElement, 'focus');
        }, 0);
    }

    setBlur() {
        setTimeout(() => {
            this.renderer.invokeElementMethod(this.input.input.nativeElement, 'blur');
        }, 0);
    }

    onInputFocus() {
        //this.hideFace();
    }

    onInputResize() {
        this.contentComponent.resize();
    }

}
