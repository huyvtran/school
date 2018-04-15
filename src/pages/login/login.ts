import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { StorageService, HttpService, GlobalData, DEFAULT_SCHOOL_NAME } from '../../providers';

@IonicPage({
    name: 'login'
})
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    user = {
        loginId: '',
        password: ''
    }

    school: any = {};

    loading: Loading;

    rememberMe: boolean = true;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public storage: StorageService,
        public httpService: HttpService,
        private globalData: GlobalData,
        private loadingCtrl: LoadingController
    ) {
    }

    ionViewDidLoad() {
        this.school = this.storage.read('school', {
            name: DEFAULT_SCHOOL_NAME
        })
        if(this.user == null) {
            this.user = {
                loginId: '',
                password: ''
            };
        }
        let loginId = this.storage.read('loginId');
        if(loginId) {
            this.user.loginId = loginId + '';
        }
    }

    /**
     * 登录
     */
    doLogin() {

        this.loading = this.loadingCtrl.create({
            content: '正在登录...',
            dismissOnPageChange: true
        });
        this.loading.present();
        if(this.rememberMe) {
            this.storage.write('loginId', this.user.loginId);
        } else {
            this.storage.remove('loginId');
        }

        this.httpService.postFormData('sys/login.do', this.user).subscribe((user: any) => {
            if (user.id) {
                this.globalData.user = user;
                this.storage.write("user", user);
                this.navCtrl.pop();
                
            }
            this.loading.dismiss();
        }, err => {
            this.loading.dismiss();
        });
    }

    /**
     * 打开注册页面
     */
    doRegister() {
        this.navCtrl.push('register/step1');
    }

}
