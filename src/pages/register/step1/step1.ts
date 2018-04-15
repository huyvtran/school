import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { StorageService, HttpService } from '../../../providers';

@IonicPage({
    name: 'register/step1'
})
@Component({
    selector: 'page-step1',
    templateUrl: 'step1.html',
})
export class Step1Page {

    user: any = {};
    codeBtnTxt: string = '获取';
    codeBtnColor: string = 'secondary';
    loading: Loading;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private storage: StorageService,
        private http: HttpService,
        private loadingCtrl: LoadingController
    ) {
    }

    ionViewDidLoad() {
        this.user = this.storage.read('registerUser', {});
    }

    nextStep() {
        if (!this.user.name) {
            this.http.showError('姓名不能为空');
            return;
        }
        if (!this.user.phone) {
            this.http.showError('手机号码不能为空');
            return;
        }
        if (!this.user.code) {
            this.http.showError('验证码不能为空');
            return;
        }
        if (!this.user.password) {
            this.http.showError('登录密码不能为空');
            return;
        }
        if (this.user.password != this.user.confirmPassword) {
            this.http.showError('登录密码与确认密码不一致');
            return;
        }

        this.loading = this.loadingCtrl.create({
            content: '正在注册...',
            dismissOnPageChange: true
        });
        this.loading.present();

        this.http.postFormData('sys/checkRegister.do', {
            phone: this.user.phone,
            code: this.user.code,
            name: this.user.name
        }).subscribe((data:any) => {
            this.storage.write('registerUser', this.user);
            this.navCtrl.push('register/step2');
            this.loading.dismiss();
        }, err => {
            this.loading.dismiss();
        });
    }

    sendCode() {
        if(this.codeBtnColor == 'secondary') {
            if (!this.user.phone) {
                this.http.showError('手机号码不能为空');
                return;
            }
            this.http.get('sms/vcode.do?phone=' + this.user.phone).subscribe((data: any) => {
                let remainTime = data.remainTime || 120;
                this.changeCodeBtnTxt(remainTime);
            });
        }
    }

    changeCodeBtnTxt(time) {
        if (time <= 0) {
            this.codeBtnTxt = '获取';
            this.codeBtnColor = 'secondary';
        } else {
            this.codeBtnTxt = time;
            this.codeBtnColor = 'light';
            setTimeout(() => {
                this.changeCodeBtnTxt(time - 1);
            }, 1000);
        }
    }

}
