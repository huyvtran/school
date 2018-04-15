import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { HttpService } from '../../../providers';

/**
 * Generated class for the StudentListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'school/studentList'
})
@Component({
    selector: 'page-student-list',
    templateUrl: 'student-list.html',
})
export class StudentListPage {

    students: any;
    classInfo:any;

    loading: Loading;

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private http: HttpService,
        private loadingCtrl: LoadingController) {
        this.classInfo = navParams.data;
    }

    ionViewDidEnter() {

        this.loading = this.loadingCtrl.create({
            content: '正在拼命加载...',
            dismissOnPageChange: true
        });
        this.loading.present();

        this.http.get('school/studentList.do?id=' + this.classInfo.id).subscribe((data:any) => {
            if(data.students) {
                this.students = data.students;
            }  
            this.loading.dismiss();      
        }, err => {
            this.loading.dismiss();
        });
    }

}
