import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpService } from '../../../providers';

/**
 * Generated class for the ClassIntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'school/classIntro'
})
@Component({
    selector: 'page-class-intro',
    templateUrl: 'class-intro.html',
})
export class ClassIntroPage {

    classIntro: any = {};
    classInfo: any;

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private http: HttpService) {
            this.classInfo = this.navParams.data;
    }

    ionViewDidEnter() {
        this.classIntro = {};

        this.http.get('school/loadClassIntro.do?classId=' + this.classInfo.code).subscribe((data:any) => {
            if(data.classIntro) {
                this.classIntro = data.classIntro;
            }
        }, err => {
        });
    }

}
