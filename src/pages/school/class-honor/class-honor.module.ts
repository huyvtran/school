import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassHonorPage } from './class-honor';
import { PipeModule } from '../../../pipes';

@NgModule({
  declarations: [
    ClassHonorPage,
  ],
  imports: [
    PipeModule,
    IonicPageModule.forChild(ClassHonorPage),
  ],
  exports: [
    ClassHonorPage
  ]
})
export class ClassHonorPageModule {}
