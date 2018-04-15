import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolIntroPage } from './school-intro';
import { PipeModule } from '../../../pipes';

@NgModule({
  declarations: [
    SchoolIntroPage,
  ],
  imports: [
    PipeModule,
    IonicPageModule.forChild(SchoolIntroPage),
  ],
  exports: [
    SchoolIntroPage
  ]
})
export class SchoolIntroPageModule {}
