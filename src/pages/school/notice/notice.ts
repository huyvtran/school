import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers';
import  { SegmentButton, InfiniteScroll, Refresher } from 'ionic-angular';

/**
 * Generated class for the NoticePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'school/notice'
})
@Component({
    selector: 'page-notice',
    templateUrl: 'notice.html',
})
export class NoticePage {

    newsTabs:string = "notice";

    //通知公告
    notices:any;

    //新闻
    news: any;

    fun:any;

    currentTab:string = 'notice';

    infiniteScroll: InfiniteScroll;

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private http: HttpService) {
        this.fun = navParams.data;
    } 

    ionViewDidEnter() {
        this.loadNotices(1, 30);
    }

    loadNotices(pageNo:Number, pageSize: Number) {
        this.http.get('/school/listNoticeArticle.do', {
            pageNo: pageNo,
            pageSize: pageSize
        }).subscribe((data:any) => {
            if(data.articles) {
                if(this.notices) {
                    this.notices.concat(data.articles);
                } else {
                    this.notices = data.articles;
                }
            }
            if(this.infiniteScroll) {
                this.infiniteScroll.complete();
            }
        });
    }

    loadNews(pageNo:Number, pageSize: Number) {
        this.http.get('/school/listNewsArticle.do', {
            pageNo: pageNo,
            pageSize: pageSize
        }).subscribe((data:any) => {
            if(data.articles) {
                if(this.news) {
                    this.news.concat(data.articles);
                } else {
                    this.news = data.articles;
                }
            }
            if(this.infiniteScroll) {
                this.infiniteScroll.complete();
            }
        });
    }

    loadArticles() {
        if(this.currentTab == 'notice') {
            if(this.notices == null) {
                this.loadNotices(1, 30);
            }
        } else {
            if(this.news == null) {
                this.loadNews(1, 30);
            }
        }
    }

    segmentChanged(segmentButton: SegmentButton) {
        this.currentTab = segmentButton.value;
        this.infiniteScroll = null;
        this.loadArticles();
    }

    doInfinite(infiniteScroll: InfiniteScroll) {
        // this.infiniteScroll = infiniteScroll;
        // this.loadArticles();
        setTimeout(() => {
            infiniteScroll.complete();
        }, 1000);
    }

    doRefresh(refresher:Refresher) {
        setTimeout(() => {
            refresher.complete();
        }, 1000);
    }

}
