import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdentityPage } from './identity';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    IdentityPage,
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(IdentityPage),
  ],
  exports: [
    IdentityPage
  ]
})
export class IdentityPageModule {}
