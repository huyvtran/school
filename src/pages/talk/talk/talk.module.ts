import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TalkPage } from './talk';
import { DirectiveModule } from '../../../directives';


@NgModule({
  declarations: [
    TalkPage
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(TalkPage)
  ],
  exports: [
    TalkPage
  ]
})
export class TalkPageModule {}
