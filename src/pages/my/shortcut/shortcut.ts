import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers';

/**
 * Generated class for the ShortcutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'my/shortcut'
})
@Component({
    selector: 'page-shortcut',
    templateUrl: 'shortcut.html',
})
export class ShortcutPage {

    shortcutBtn:string = '编辑';

    canEditable:boolean = false;

    shortcutFuns: any = [];
    allFuns:any = [];

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private http: HttpService) {
    }

    ionViewDidLoad() {

        this.http.get('app/function/loadAll.do').subscribe((data:any) => {
            if(data.funs) {
                this.allFuns = data.funs;
            }
            if(data.userFuns) {
                this.shortcutFuns = data.userFuns;
            }
        });

    }

    /**
     * 设置快捷操作
     */
    doSetShortcut() {
        if(this.shortcutBtn == '完成') {
            this.canEditable = false;
            this.shortcutBtn = '编辑';
            let ids:Array<any> = [];
            for(let i = 0; i < this.allFuns.length; i++) { 
                if(this.allFuns[i].isCheck && !this.allFuns[i].recommend) {
                    ids.push(this.allFuns[i].id);
                }
            }
            this.http.postFormData('app/shutcut/save.do', {
                funs: ids.join(',')
            }).subscribe((data:any) => {
                for(let i = 0; i < this.allFuns.length; i++) { 
                    this.allFuns[i].cls = '';
                }
                for(let i = 0; i < this.shortcutFuns.length; i++) {
                    this.shortcutFuns[i].cls = '';
                }
            });

        } else {
            this.canEditable = true;
            this.shortcutBtn = '完成';

            for(let i = 0; i < this.shortcutFuns.length; i++) {
                if(!this.shortcutFuns[i].recommend) {
                    this.shortcutFuns[i].cls = 'del-icon';
                }
            }

            for(let i = 0; i < this.allFuns.length; i++) {
                if(this.allFuns[i].isCheck) {
                    this.allFuns[i].cls = 'has-add-icon';
                } else {
                    this.allFuns[i].cls = 'no-add-icon';
                }
            }
        }
    }

    /**
     * 删除快捷操作
     * @param fun
     */
    delShortcut(fun:any) {
        if(this.shortcutBtn == '完成') {
            if(!fun.recommend) {
                for(let i = 0; i < this.allFuns.length; i++) {
                    if(this.allFuns[i].name == fun.name) {
                        this.allFuns[i].isCheck = false;
                        this.allFuns[i].cls = 'no-add-icon';
                    }
                }
                let index = -1;
                for(let i = 0; i < this.shortcutFuns.length; i++) {
                    if(this.shortcutFuns[i].name == fun.name) {
                        index = i;
                        break;
                    }
                }
                if(index > -1) {
                    this.shortcutFuns.splice(index, 1);
                }
            }
        }
    }

    /**
     * 添加快捷操作
     * @param fun 
     */
    addShortcut(fun:any) {
        if(this.shortcutBtn == '完成') {
            if(fun.cls != 'has-add-icon') {
                fun.cls = 'has-add-icon';
                fun.isCheck = true;
                this.shortcutFuns.push({
                    id: fun.id,
                    name: fun.name,
                    logo: fun.logo,
                    recommend: fun.recommend,
                    isCheck: true,
                    cls: 'del-icon'
                });
            }
        }
    }

}
