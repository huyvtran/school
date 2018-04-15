import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { HttpService } from '../../../providers';
/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'school/article'
})
@Component({
    selector: 'page-article',
    templateUrl: 'article.html',
})
export class ArticlePage {

    article: any = {
        type: ''
    };

    loading: Loading;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: HttpService,
        private loadingCtrl: LoadingController) {

    }

    ionViewDidEnter() {

        let id = this.navParams.get('id');
        if (id) {

            this.loading = this.loadingCtrl.create({
                content: '正在拼命加载...',
                dismissOnPageChange: true
            });
            this.loading.present();

            this.http.get('school/loadArticle.do?id=' + id).subscribe((data: any) => {
                if (data.article) {
                    this.article = data.article;
                }
                this.loading.dismiss();
            }, err => {
                this.loading.dismiss();
            });
        }
    }

}
