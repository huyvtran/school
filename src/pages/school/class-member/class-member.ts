import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers';

/**
 * Generated class for the ClassMemberPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'school/classMember'
})
@Component({
    selector: 'page-class-member',
    templateUrl: 'class-member.html',
})
export class ClassMemberPage {

    classInfo:any;
    header:any = {};

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private http:HttpService) {
            this.classInfo = navParams.data;
    }

    ionViewDidLoad() {

        this.http.get('school/headerTeacher.do?id=' + this.classInfo.id).subscribe((data:any) => {
            if(data.header) {
                this.header = data.header;
            }
        });
    }

}
