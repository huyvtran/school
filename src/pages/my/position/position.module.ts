import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PositionPage } from './position';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    PositionPage,
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(PositionPage),
  ],
  exports: [
    PositionPage
  ]
})
export class PositionPageModule {}
