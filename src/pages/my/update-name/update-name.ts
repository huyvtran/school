import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService, StorageService } from '../../../providers'

/**
 * Generated class for the UpdateNamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'my/updateName'
})
@Component({
    selector: 'page-update-name',
    templateUrl: 'update-name.html',
})
export class UpdateNamePage {

    private user: any = {};

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: HttpService,
        private storage: StorageService) {
    }

    ionViewDidLoad() {
        this.user = this.storage.read('user');
        if(this.user == null) {
            this.user = {};
        }
    }

    doUpdate() {
        this.http.postFormData('school/updateMajorMemberName.do', {
            name: this.user.name
        }).subscribe((data: any) => {
            this.http.showError('更换姓名成功');
            this.storage.write('user', this.user);
            this.navCtrl.pop();
        });
    }

}
