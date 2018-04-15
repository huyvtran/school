import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassActivityPage } from './class-activity';
import { PipeModule } from '../../../pipes';

@NgModule({
  declarations: [
    ClassActivityPage,
  ],
  imports: [
    PipeModule,
    IonicPageModule.forChild(ClassActivityPage),
  ],
  exports: [
    ClassActivityPage
  ]
})
export class ClassActivityPageModule {}
