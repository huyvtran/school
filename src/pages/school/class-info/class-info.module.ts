import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassInfoPage } from './class-info';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    ClassInfoPage,
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(ClassInfoPage),
  ],
  exports: [
    ClassInfoPage
  ]
})
export class ClassInfoPageModule {}
