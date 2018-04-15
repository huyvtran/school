import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers';

/**
 * Generated class for the ClassActivityListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'school/classActivityList'
})
@Component({
    selector: 'page-class-activity-list',
    templateUrl: 'class-activity-list.html',
})
export class ClassActivityListPage {

    classInfo:any;
    activities:any;

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private http: HttpService) {
        this.classInfo = this.navParams.data;
    }

    ionViewDidEnter() {

        this.http.get('school/loadClassActivities.do?classId=' + this.classInfo.code).subscribe((data:any) => {
            if(data.classActivities) {
                this.activities = data.classActivities;
            }
        });
    }

}
