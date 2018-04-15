import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolPage } from './school';
import { DirectiveModule } from '../../../directives';

@NgModule({
    declarations: [
        SchoolPage,
    ],
    imports: [
        DirectiveModule,
        IonicPageModule.forChild(SchoolPage),
    ],
})
export class SchoolPageModule { }
