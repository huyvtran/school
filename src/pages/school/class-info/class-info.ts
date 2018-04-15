import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { HttpService, NativeService } from '../../../providers';

/**
 * Generated class for the ClassInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'school/classInfo'
})
@Component({ 
    selector: 'page-class-info',
    templateUrl: 'class-info.html',
})
export class ClassInfoPage {

    classInfo:any = {}; 

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private http: HttpService,
        private actionSheetCtrl: ActionSheetController,
        private nativeService: NativeService
    ) {
    }

    ionViewDidLoad() {
        this.classInfo = {};
        if(this.navParams.get('name')) {
            this.classInfo.name = this.navParams.get('name');
        }
        this.http.get('school/classInfo.do').subscribe((data: any) => {
            if(data.classInfo) {
                this.classInfo = data.classInfo;
            }
        });
    }

    doSelectClassList() {
        this.http.get('school/classList.do').subscribe((data: any) => {
            if(data.classes && data.classes.length) {
                let buttons:Array<any> = [];
                data.classes.forEach(cls => {
                    buttons.push({
                        text: cls.name + '(' + cls.code + ')',
                        cssClass: 'school-action-sheet-button',
                        handler: () => {
                            this.setClass(cls);
                        }
                    });
                });
                buttons.push({
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'school-action-sheet-button'
                });
                let actionSheet = this.actionSheetCtrl.create({
                    title: '',
                    buttons: buttons
                });
                actionSheet.present();
            } else {
                this.nativeService.showToast('您没有班级信息');
            }
        });
    }

    setClass(cls: any) {
        this.classInfo = cls;
    }

    /**
     * 班级概况
     */
    loadClassIntro() {
        if(this.classInfo.id) {
            this.navCtrl.push('school/classIntro', this.classInfo);
        } else {
            this.nativeService.showToast('您没有班级信息');
        }
    }

    /**
     * 班级成员
     */
    loadClassMember() {
        if(this.classInfo.id) {
            this.navCtrl.push('school/classMember', this.classInfo);
        } else {
            this.nativeService.showToast('您没有班级信息');
        }
    }

    /**
     * 班级荣誉
     */
    loadClassHonor() {
        if(this.classInfo.id) {
            this.navCtrl.push('school/classHonor', this.classInfo);
        } else {
            this.nativeService.showToast('您没有班级信息');
        }
    }

    /**
     * 班级活动
     */
    loadClassActivityList() {
        if(this.classInfo.id) {
            this.navCtrl.push('school/classActivityList', this.classInfo);
        } else {
            this.nativeService.showToast('您没有班级信息');
        }
    }
}
