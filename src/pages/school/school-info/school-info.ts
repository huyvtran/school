import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
    name: 'school/schoolInfo'
})
@Component({
    selector: 'page-school-info',
    templateUrl: 'school-info.html',
})
export class SchoolInfoPage {

    fun: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.fun = navParams.data;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SchoolInfoPage');
    }

}
