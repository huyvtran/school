import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionListPage } from './question-list';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    QuestionListPage,
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(QuestionListPage),
  ],
  exports: [
    QuestionListPage
  ]
})
export class QuestionListPageModule {}
