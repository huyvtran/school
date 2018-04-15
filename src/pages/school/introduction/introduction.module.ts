import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroductionPage } from './introduction';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    IntroductionPage,
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(IntroductionPage),
  ],
  exports: [
    IntroductionPage
  ]
})
export class IntroductionPageModule {}
