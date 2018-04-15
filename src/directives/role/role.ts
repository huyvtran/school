import { Component, AfterViewInit, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'role', // Attribute selector
    template: `
        <div class="role {{role.cls}}" (click)="showRoleList()" [ngClass]="{'check': role.isCheck}">{{role.name}}</div>
    `
})
export class RoleDirective implements AfterViewInit {

    @Input() role: any;

    constructor(private elm: ElementRef) {

    }

    ngAfterViewInit() {
        
    }

    public showRoleList() {
        let el = this.getParentEl();
        if (el) {
            let listBox: any = el.querySelector('.role-list-box');
            if (listBox) {
                listBox.style.display = 'block';
            }
        }
    }

    private getParentEl() {
        let el = this.elm.nativeElement;
        while (el.className.indexOf('user-wrap') == -1 && el.parentNode && el.parentNode != document) {
            el = el.parentNode;
        }
        return el;
    }

}
