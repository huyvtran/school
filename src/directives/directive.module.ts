import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LinkDirective } from './link/link';

@NgModule({
    declarations: [
        LinkDirective
    ],
    exports: [
        LinkDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DirectiveModule { }
