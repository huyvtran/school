import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, InfiniteScroll } from 'ionic-angular';
import { StorageService, HttpService, GlobalData } from '../../providers'
import { JPush, TagOptions } from '@jiguang-ionic/jpush';

@IonicPage({
    name: 'home'
})
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    school: any = {};

    @ViewChild('ionSlides')
    slides: Slides;

    infiniteScroll: InfiniteScroll;

    sliders: Array<any>
    member: any;
    members: Array<Object>
    user: any;
    funs: any = [];

    zixuns: any;

    constructor(
        public navCtrl: NavController,
        private storage: StorageService,
        private http: HttpService,
        private globalData: GlobalData,
        private jpush: JPush
    ) {
        this.sliders = ['banner01.png', 'banner02.png', 'banner03.png'];
    }

    ionViewDidLoad() {
        this.initJPush();
    }

    ionViewWillEnter() {
        //获取用户信息
        this.user = this.storage.read('user');
        this.school = {
            name: '每日校信'
        }
        if (this.user) {
            this.member = this.user.member;
            this.members = this.user.members;
            this.globalData.user = this.user;
            
            //获取学校信息
            this.school = this.storage.read('school', {});
            let schoolCode = null;
            if (this.school) {
                if (this.school.code) {
                    schoolCode = this.school.code;
                }
                if (this.school.id) {
                    this.funs = this.storage.read('home:shutcut', []);
                }
                this.http.get('school/findByUser.do').subscribe((data: any) => {
                    if (data.school) {
                        this.school = data.school;
                        this.storage.write('school', data.school);
                    }
                });
            }
        }

        if (this.school == null) {
            this.school = {
                name: '每日校信'
            }
        }

        this.http.get('app/function/loadShutcut.do').subscribe((data: any) => {
            if (data.funs) {
                this.funs = data.funs;
                this.storage.write('home:shutcut', data.funs);
            }
        });

    }

    ionViewDidEnter() {
        this.slides.autoplayDisableOnInteraction = false;
        this.slides.update();
        this.slides.startAutoplay();

        if (this.infiniteScroll != null && !this.infiniteScroll.enabled) {
            this.infiniteScroll.enable(true);
        }

        //获取教育咨询信息
        this.zixuns = this.storage.read('zixuns');
        this.http.get('school/listEducationArticle.do').subscribe((data: any) => {
            if (data.articles) {
                this.zixuns = data.articles;
                this.storage.write('zixuns', data.articles);
            }
        });

    }

    ionViewDidLeave() {
        this.slides.stopAutoplay();
    }

    doInfinite(infiniteScroll: InfiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        setTimeout(() => {
            infiniteScroll.enable(false);
        }, 1000);
    }

    initJPush() {
        let user: any = this.storage.read('user');
        if(user) {
            let tags: TagOptions = {
                sequence: 1,
                tags: ['id_' + user.id, 'schoolId_' + user.schoolId, 'memberType_' + user.member.type]
            }
            this.jpush.setTags(tags).then(() => {
                //alert('设置别名成功， 别名为：' + JSON.stringify(tags));
            }).catch((e: any) => {
                //alert('设置别名失败，错误信息：'  + JSON.stringify(e));
            });
        }
    }

}
