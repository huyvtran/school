import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { HttpService } from '../../../providers';

/**
 * Generated class for the ClassActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'school/classActivity'
})
@Component({
    selector: 'page-class-activity',
    templateUrl: 'class-activity.html',
})
export class ClassActivityPage {

    activity: any = {};

    loading: Loading;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: HttpService,
        private loadingCtrl: LoadingController) {
        this.activity = this.navParams.data;
    }

    ionViewDidEnter() {
        if (this.activity && this.activity.id) {

            this.loading = this.loadingCtrl.create({
                content: '正在拼命加载...',
                dismissOnPageChange: true
            });
            this.loading.present();

            this.http.get('school/loadClassActivity.do?id=' + this.activity.id).subscribe((data: any) => {
                if (data.classActivity) {
                    this.activity.content = data.classActivity.content || '';
                }
                this.loading.dismiss();
            }, err => {
                this.loading.dismiss();
            });
        }
    }

}
