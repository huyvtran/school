import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShortcutPage } from './shortcut';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    ShortcutPage,
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(ShortcutPage),
  ],
  exports: [
    ShortcutPage
  ]
})
export class ShortcutPageModule {}
