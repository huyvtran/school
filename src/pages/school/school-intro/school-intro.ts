import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { HttpService, StorageService, DEFAULT_SCHOOL_CODE } from '../../../providers';

/**
 * Generated class for the SchoolIntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'school/schoolIntro'
})
@Component({
    selector: 'page-school-intro',
    templateUrl: 'school-intro.html',
})
export class SchoolIntroPage {

    school: any;
    schoolIntro: any = {};

    loading: Loading;

    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: StorageService, private http: HttpService, private loadingCtrl: LoadingController) {
        this.school = this.storage.read('school', {
            code: DEFAULT_SCHOOL_CODE
        });
    }

    ionViewDidEnter() {
        this.schoolIntro = {};

        this.loading = this.loadingCtrl.create({
            content: '正在拼命加载...',
            dismissOnPageChange: true
        });
        this.loading.present();

        this.http.get('school/loadSchoolIntro.do?schoolCode=' + this.school.code).subscribe((data:any) => {
            if(data.schoolIntro) {
                this.schoolIntro = data.schoolIntro;
            }
            this.loading.dismiss();
        }, err => {
            this.loading.dismiss();
        });
    }

}
