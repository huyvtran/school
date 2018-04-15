import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateMobilePage } from './update-mobile';

@NgModule({
  declarations: [
    UpdateMobilePage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateMobilePage),
  ],
  exports: [
    UpdateMobilePage
  ]
})
export class UpdateMobilePageModule {}
