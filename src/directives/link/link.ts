import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalData } from '../../providers'

@Directive({
    selector: '[link]' // Attribute selector
})
export class LinkDirective implements OnInit {

    @Input('link') url: string;
    @Input('auth') auth: boolean;
    @Input('params') params: any;

    constructor(
        private elm: ElementRef,
        private navCtrl: NavController,
        private globalData: GlobalData) {
    }

    ngOnInit() {
        this.elm.nativeElement.addEventListener('click', this.gotoPage.bind(this));
    }

    gotoPage() {

        if (this.url) {
            if (this.auth && !this.globalData.token) {
                this.navCtrl.push('login', this.params || {}, {
                    animate: true
                });
            } else if (this.url.startsWith("http")) {
                //this.iab.create(this.url);
            } else {
                this.navCtrl.push(this.url, this.params || {}, {
                    animate: true, duration: 200
                });
            }
        }
    }

}
