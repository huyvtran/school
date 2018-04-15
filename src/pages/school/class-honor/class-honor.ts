import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { HttpService } from '../../../providers';

/**
 * Generated class for the ClassHonorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'school/classHonor'
})
@Component({
    selector: 'page-class-honor',
    templateUrl: 'class-honor.html',
})
export class ClassHonorPage {

    classInfo:any;
    classHonor:any = {};

    loading: Loading;


    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private http: HttpService,
        private loadingCtrl: LoadingController) {
            this.classInfo = this.navParams.data;
    }

    ionViewDidEnter() {
        this.classHonor = {};

        this.loading = this.loadingCtrl.create({
            content: '正在拼命加载...',
            dismissOnPageChange: true
        });
        this.loading.present();

        this.http.get('school/loadClassHonor.do?classId=' + this.classInfo.code).subscribe((data:any) => {
            if(data.classHonor) {
                this.classHonor = data.classHonor;
            }
            this.loading.dismiss();
        }, err => {
            this.loading.dismiss();
        });
    }

}
