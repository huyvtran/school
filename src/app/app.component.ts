import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Keyboard as Keyboard1, IonicApp, App } from 'ionic-angular';
//import { Keyboard as Keyboard2 } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NativeService, ChatService, DbService } from '../providers'
import { JPush } from '@jiguang-ionic/jpush';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild('myNav') nav: Nav;
    rootPage: any = "tabs";
    backButtonPressed: boolean = false;

    constructor(
        private platform: Platform,
        private keyboard1: Keyboard1,
        //private keyboard2: Keyboard2,
        private ionicApp: IonicApp,
        private app: App,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        private nativeService: NativeService,
        private chatService: ChatService,
        private dbService: DbService,
        private jpush: JPush
    ) {
        platform.ready().then(() => {
            statusBar.styleDefault();

            this.registerExistAppOnBackBtn();
            this.loginChat();

            this.dbService.createTable();

            this.initJPush();
            
            splashScreen.hide();
        });
    }

    /**
     * 初始化极光推送
     */
    initJPush() {
        if (!this.nativeService.isMobile()) {
            return;
        }
        this.jpush.init().then();
    }

    /**
     * 注册返回按钮
     */
    registerExistAppOnBackBtn() {
        if (!this.nativeService.isAndroid()) {
            return;
        }
        this.platform.registerBackButtonAction(() => {
            if (this.keyboard1.isOpen()) {//如果键盘开启则隐藏键盘
                this.keyboard1.close();
                return;
            }
            //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
            // this.ionicApp._toastPortal.getActive() ||this.ionicApp._loadingPortal.getActive()|| this.ionicApp._overlayPortal.getActive()
            try {
                let activePortal = this.ionicApp._modalPortal.getActive();
                if (activePortal) {
                    activePortal.dismiss();
                    return;
                }
                if(this.ionicApp._toastPortal.getActive()) {
                    this.ionicApp._toastPortal.getActive().dismiss();
                    return;
                }
                if(this.ionicApp._loadingPortal.getActive()) {
                    this.ionicApp._loadingPortal.getActive().dismiss();
                    return;
                }

                let activeVC = this.app.getActiveNav();
                if(activeVC.canGoBack()) {
                    return activeVC.pop();
                }
                this.showExit();
            }catch(e) {
                alert('出现系统异常' + e);   
            }
        }, 1);
    }

    /**
     * 退出应用
     */
    showExit() {
        if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
            this.platform.exitApp();
        } else {
            this.nativeService.showToast('再按一次退出应用');
            this.backButtonPressed = true;
            setTimeout(() => this.backButtonPressed = false, 2000);//2秒内没有再次点击返回则将触发标志标记为false
        }
    }

    loginChat() {
        this.chatService.login('test', 'test').then(() => {
            this.chatService.registerMsgListener();
        }).catch((data: any) =>{
            console.log('登陆失败===>' + JSON.stringify(data));
        });
    }
}
