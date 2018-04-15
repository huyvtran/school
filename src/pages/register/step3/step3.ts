import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../../providers';

@IonicPage({
    name: 'register/step3'
})
@Component({
  selector: 'page-step3',
  templateUrl: 'step3.html',
})
export class Step3Page {

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private storageService: StorageService
    ) {
    }

    ionViewDidLoad() {
        this.storageService.remove('registerUser');
    }

    doRegisterFinish() {
        let len = this.navCtrl.length() - 1;
        if(len > 3) {
            len = len - 3;
        }
        this.navCtrl.popTo(this.navCtrl.getViews()[len]);
    }

}
