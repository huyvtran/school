import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { UserInfoPage } from './user-info';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    UserInfoPage
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(UserInfoPage),
  ],
  exports: [
    UserInfoPage
  ],
  providers: []
})
export class UserInfoModule {}
