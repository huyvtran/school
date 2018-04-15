import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolInfoPage } from './school-info';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    SchoolInfoPage,
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(SchoolInfoPage),
  ],
  exports: [
    SchoolInfoPage
  ]
})
export class SchoolInfoPageModule {}
