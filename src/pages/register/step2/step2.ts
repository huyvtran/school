import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { StorageService, HttpService } from '../../../providers';

@IonicPage({
    name: 'register/step2'
})
@Component({
    selector: 'page-step2',
    templateUrl: 'step2.html',
})
export class Step2Page {

    user: any = {};
    members: any;
    loading: Loading;
    type: any = 3;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private storage: StorageService,
        private http: HttpService,
        private loadingCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        this.user = this.storage.read('registerUser', {});
        this.members = [{
            cls: 'teacher',
            name: '教师',
            id: 3
        }, {
            cls: 'parenter',
            name: '家长',
            id: 4
        }];
    }

    nextStep() {

        if (this.members == null || this.members.length == 0) {
            this.http.showError('请选择主身份');
            return false;
        }
        for (let i = 0; i < this.members.length; i++) {
            if (this.members[i].isCheck) {
                this.type = this.members[i].id;
                break;
            }
        }

        this.loading = this.loadingCtrl.create({
            content: '正在注册...',
            dismissOnPageChange: true
        });
        this.loading.present();


        this.http.postFormData('sys/register.do', {
            name: this.user.name,
            phone: this.user.phone,
            password: this.user.password,
            type: this.type
        }).subscribe(data => {
            this.http.showError('注册成功');
            this.navCtrl.push('register/step3');
            this.loading.dismiss();
        }, err => {
            this.loading.dismiss();
        });
    }

}
