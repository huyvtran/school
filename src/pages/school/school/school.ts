import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService, StorageService } from '../../../providers';

@IonicPage({
    name: 'school/school'
})
@Component({
    selector: 'page-school',
    templateUrl: 'school.html',
})
export class SchoolPage {

    private funs:any = [];
    private school: any;

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private storage: StorageService,
        private http: HttpService) {

        this.school = this.storage.read('school');
        if(this.school && this.school.id) {
            this.funs = this.storage.read(this.school.id + '_funs');
            if(this.funs == null) {
                this.funs = [];
            }
        }
    }

    ionViewDidLoad() {
        
        this.http.get('app/function/loadBySchool.do').subscribe((data:any) => {
            if(data.funs) {
                this.funs = data.funs;
                if(this.school && this.school.id) {
                    this.storage.write(this.school.id + '_funs', data.funs);
                }
            }
        });

    }

}
