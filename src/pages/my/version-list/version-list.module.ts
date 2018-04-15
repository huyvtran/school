import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VersionListPage } from './version-list';
import { DirectiveModule } from '../../../directives';

@NgModule({
  declarations: [
    VersionListPage,
  ],
  imports: [
    DirectiveModule,
    IonicPageModule.forChild(VersionListPage),
  ],
  exports: [
    VersionListPage
  ]
})
export class VersionListPageModule {}
