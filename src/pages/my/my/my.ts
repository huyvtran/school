import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService, GlobalData } from '../../../providers'

@IonicPage({
    name: 'my/my'
})
@Component({
    selector: 'page-my',
    templateUrl: 'my.html',
})
export class MyPage {

    user:any;
    member:any;
    members:Array<Object>

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private storage:StorageService,
        private globalData: GlobalData) {
    }

    ionViewWillEnter() {
        this.user = this.storage.read('user');
        if(this.user) {
            if(!this.user.phone) {
                this.user.phone = '';
            }
            this.member = this.user.member || {};
            this.members = this.user.members || [];
            this.globalData.user = this.user;
        }
    }

}
