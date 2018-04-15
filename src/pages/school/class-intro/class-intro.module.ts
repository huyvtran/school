import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassIntroPage } from './class-intro';
import { PipeModule } from '../../../pipes';

@NgModule({
  declarations: [
    ClassIntroPage,
  ],
  imports: [
    PipeModule,
    IonicPageModule.forChild(ClassIntroPage),
  ],
  exports: [
    ClassIntroPage
  ]
})
export class ClassIntroPageModule {}
