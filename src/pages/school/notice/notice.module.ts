import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticePage } from './notice';
import { DirectiveModule } from '../../../directives';


@NgModule({
    declarations: [
        NoticePage,
    ],
    imports: [
        DirectiveModule,
        IonicPageModule.forChild(NoticePage),
    ],
    exports: [
        NoticePage
    ]
})
export class NoticePageModule { }
