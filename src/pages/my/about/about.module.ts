import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(AboutPage),
  ],
  exports: [
    AboutPage
  ]
})
export class AboutPageModule {}
