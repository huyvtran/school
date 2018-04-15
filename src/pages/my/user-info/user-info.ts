import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { StorageService, HttpService } from '../../../providers';

@IonicPage({
    name: 'my/userInfo'
})
@Component({
    selector: 'page-user-info',
    templateUrl: 'user-info.html',
})
export class UserInfoPage {

    user:any = {
        member: {},
        role:{},
        members: [],
        roles: []
    };

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private storage: StorageService,
        private alertCtrl: AlertController,
        private http: HttpService ) {
    }

    ionViewWillEnter() {
        let user:any = this.storage.read("user", {member: {}});
        if(!user || !user.roles || !user.members) {
            this.http.get('sys/findUserById.do').subscribe((_user:any) => {
                if (_user.id) {
                    user = _user;
                }
            });
        }
        if(user) {
            if(!user.member) {
                user.member = {};
            }
            if(!user.role) {
                user.role = {};
            }
            this.user = user;
            this.storage.write("user", user);
        }
    }

    changePosition() {
        let alert = this.alertCtrl.create();
        alert.setTitle('岗位');
        this.user.roles.forEach(role => {
            alert.addInput({
                type: 'radio',
                label: role.name,
                value: role.id,
                checked: role.id == this.user.role.id
            });
        });
        alert.addButton('取消');
        alert.addButton({
            text: '切换',
            handler: data => {
                if(data != this.user.role.id) {
                    this.http.postFormData('school/updateMajorRole.do', {
                        roleId: data
                    }).subscribe((data: any) => {
                        this.user.role = data.role;
                        this.storage.write('user', this.user);
                        this.http.showError('主岗位切换成功');
                        alert.dismiss();
                    });
                    return false;
                }
                return true;
            }
        });
        alert.present();
    }

    changeIdentity() {
        let alert = this.alertCtrl.create();
        alert.setTitle('身份');
        this.user.members.forEach(member => {
            alert.addInput({
                type: 'radio',
                label: member.name,
                value: member.id,
                checked: member.id == this.user.member.id
            });
        });
        alert.addButton('取消');
        alert.addButton({
            text: '切换',
            handler: data => {
                if(data != this.user.member.id) {
                    this.http.postFormData('school/updateMajorMember.do', {
                        memberId: data
                    }).subscribe((data: any) => {
                        this.user.member = data.member;
                        this.storage.write('user', this.user);
                        this.http.showError('主身份切换成功');
                        alert.dismiss();
                    });
                    return false;
                }
                return true;
            }
        });
        alert.present();
    }

}
