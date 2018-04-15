import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { StorageService, UpdateService, NativeService, GlobalData } from '../../../providers';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'my/settings'
})
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    user: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private storage: StorageService,
        private native: NativeService,
        private update: UpdateService,
        private globalData: GlobalData,
        private actionSheetCtrl: ActionSheetController,
        private platform: Platform) {
    }

    ionViewDidLoad() {
        this.user = this.storage.read('user');
    }

    logout() {
        let actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [{
                text: '退出当前账号',
                cssClass: 'school-action-sheet-button',
                handler: () => {
                    this.doLogout();
                }
            }, {
                text: '关闭每日校信',
                cssClass: 'school-action-sheet-button',
                handler: () => {
                    this.platform.exitApp();
                }
            }, {
                text: '取消',
                role: 'cancel',
                cssClass: 'school-action-sheet-button',
                handler: () => {
                    
                }
            }]
        });
        actionSheet.present();
    }

    /**
     * 退出系统
     */
    doLogout() {
        this.storage.remove('user');
        this.storage.remove('school');
        this.globalData.user = null;
        this.user = null;
        this.navCtrl.pop();
    }

    /**
     * 清空聊天记录
     */
    clearTalkRecords() {
        this.native.showToast('聊天记录清除成功');
    }

    /**
     * 更新版本
     */
    updateVersion() {
        this.update.checkUpgrade().then((version:any) => {
            if(version) {
                this.native.doUpdateVersion(version.url);
            } else {
                this.native.showToast('这已经是最新版本');
            }
        });
    }

}
