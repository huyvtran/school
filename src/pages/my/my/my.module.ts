import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPage } from './my';
import { RoleDirectiveModule, DirectiveModule } from '../../../directives';

@NgModule({
    declarations: [
        MyPage,
    ],
    imports: [
        RoleDirectiveModule,
        DirectiveModule,
        IonicPageModule.forChild(MyPage),
    ],
})
export class MyPageModule { }
