import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherListPage } from './teacher-list';
import { PipeModule } from '../../../pipes';

@NgModule({
  declarations: [
    TeacherListPage,
  ],
  imports: [
    PipeModule,
    IonicPageModule.forChild(TeacherListPage),
  ],
  exports: [
    TeacherListPage
  ]
})
export class TeacherListPageModule {}
