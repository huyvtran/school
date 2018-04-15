import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassListPage } from './class-list';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    ClassListPage,
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(ClassListPage),
  ],
  exports: [
    ClassListPage
  ]
})
export class ClassListPageModule {}
