import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { HttpService } from '../../../providers';

/**
 * Generated class for the TeacherListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'school/teacherList'
})
@Component({
    selector: 'page-teacher-list',
    templateUrl: 'teacher-list.html',
})
export class TeacherListPage {

    classInfo: any = {};
    courses: any;

    loading: Loading;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: HttpService,
        private loadingCtrl: LoadingController) {
        this.classInfo = navParams.data;
    }

    ionViewDidEnter() {
        if (this.classInfo.id) {
            this.loading = this.loadingCtrl.create({
                content: '正在拼命加载...',
                dismissOnPageChange: true
            });
            this.loading.present();

            this.http.get('school/courseTeacherList.do?id=' + this.classInfo.id).subscribe((data: any) => {
                if (data.courses) {
                    this.courses = data.courses;
                }
                this.loading.dismiss();
            }, err => {
                this.loading.dismiss();
            });
        }
    }

}
