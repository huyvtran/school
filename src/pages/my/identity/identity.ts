import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpService } from '../../../providers';


/**
 * Generated class for the IdentityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'my/identity'
})
@Component({
    selector: 'page-identity',
    templateUrl: 'identity.html',
})
export class IdentityPage {

    members: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: HttpService) {
    }

    ionViewDidLoad() {

        this.http.get('school/loadMembers.do').subscribe((data:any) => {
            if(data.members) {
                this.members = data.members;
            }
        })
    }

}
