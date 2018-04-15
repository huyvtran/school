import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassMemberPage } from './class-member';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    ClassMemberPage,
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(ClassMemberPage),
  ],
  exports: [
    ClassMemberPage
  ]
})
export class ClassMemberPageModule {}
