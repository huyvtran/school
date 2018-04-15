import { Component } from '@angular/core';
import { IonicPage } from "ionic-angular";

@IonicPage({
    name: 'tabs'
})
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = 'home';
    tab2Root = 'school/school';
    tab3Root = 'talk/talk';
    tab4Root = 'my/my';

    constructor(
    ) {
   
    }

    ngOnInit() {
        
    }

    ionViewDidLoad() {
        
    }
}
