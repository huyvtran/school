import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SafeHtmlPipe } from './safe-html/safe-html';
import { SexPipe } from './sex/sex';

@NgModule({
    declarations: [
        SafeHtmlPipe,
        SexPipe
    ],
    exports: [
        SafeHtmlPipe,
        SexPipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PipeModule { }
