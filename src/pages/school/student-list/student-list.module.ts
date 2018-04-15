import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentListPage } from './student-list';
import { DirectiveModule } from '../../../directives';
import { PipeModule } from '../../../pipes';

@NgModule({
  declarations: [
    StudentListPage,
  ],
  imports: [
    DirectiveModule,
    PipeModule,
    IonicPageModule.forChild(StudentListPage),
  ],
  exports: [
    StudentListPage
  ]
})
export class StudentListPageModule {}
