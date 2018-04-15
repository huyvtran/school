import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeService } from '../../../providers';

/**
 * Generated class for the VersionInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'my/versionInfo'
})
@Component({
    selector: 'page-version-info',
    templateUrl: 'version-info.html',
})
export class VersionInfoPage {

    version:string = "1.0.0";

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private native: NativeService) {
    }

    ionViewDidLoad() {
        this.native.getVersionNumber().then((version:string) => {
            this.version = version;
        });
    }

}
