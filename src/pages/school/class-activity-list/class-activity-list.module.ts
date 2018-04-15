import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassActivityListPage } from './class-activity-list';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    ClassActivityListPage,
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(ClassActivityListPage),
  ],
  exports: [
    ClassActivityListPage
  ]
})
export class ClassActivityListPageModule {}
