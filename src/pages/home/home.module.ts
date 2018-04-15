import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { RoleDirectiveModule, DirectiveModule } from '../../directives';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    RoleDirectiveModule,
    DirectiveModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
