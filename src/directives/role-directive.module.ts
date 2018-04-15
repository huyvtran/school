import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RoleListBoxDirective } from './role-list-box/role-list-box';
import { RoleDirective } from './role/role';

@NgModule({
    declarations: [
        RoleListBoxDirective,
        RoleDirective
    ],
    exports: [
        RoleListBoxDirective,
        RoleDirective
    ],
    imports: [
        CommonModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoleDirectiveModule { }
