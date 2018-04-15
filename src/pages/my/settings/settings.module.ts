import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPage } from './settings';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    SettingsPage
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(SettingsPage),
  ],
  exports: [
    SettingsPage
  ]
})
export class SettingsModule {}
