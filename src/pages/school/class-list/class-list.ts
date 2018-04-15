import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpService } from '../../../providers';

/**
 * Generated class for the ClassListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: "school/classList"
})
@Component({
  selector: 'page-class-list',
  templateUrl: 'class-list.html',
})
export class ClassListPage {

    classes: any;

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private http: HttpService) {
    }

    ionViewDidLoad() {

        this.http.get('school/classList.do').subscribe((data:any) => {
            if(data.classes) {
                this.classes = data.classes;
            }
        }, err => {
        });
    }

}
