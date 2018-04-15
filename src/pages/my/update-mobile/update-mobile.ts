import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService, StorageService } from '../../../providers'

/**
 * Generated class for the UpdateMobilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'my/updateMobile'
})
@Component({
    selector: 'page-update-mobile',
    templateUrl: 'update-mobile.html',
})
export class UpdateMobilePage {

    private model: any = {
        phone: '',
        code: ''
    };

    private user: any;

    codeBtnTxt: string = '获取';
    codeBtnColor: string = 'secondary';

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private http: HttpService,
        private storage: StorageService) {
            
    }

    ionViewDidLoad() {
        this.user = this.storage.read('user');
        if(this.user) {
            this.model.phone = this.user.phone || '';
        }
    }

    sendCode() {
        if(this.codeBtnColor == 'secondary') {
            if (!this.model.phone) {
                this.http.showError('手机号码不能为空');
                return;
            }
            this.http.get('sms/vcode.do?phone=' + this.model.phone).subscribe((data: any) => {
                let remainTime = data.remainTime || 120;
                this.changeCodeBtnTxt(remainTime);
            });
        }
    }

    doUpdate() {
        this.http.postFormData('school/updateMajorMemberPhone.do', this.model).subscribe((data: any) => {
            this.user.phone = this.model.phone;
            this.storage.write('user', this.user);
            this.http.showError('更换手机号码成功');
            this.navCtrl.pop();
        });
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
