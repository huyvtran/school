import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';

@Component({
    selector: 'role-list-box', // Attribute selector
    template: `
    <div class="role-list-box">
        <div class="role-list">
            <div class="arrow_box">
                <div *ngFor="let role of roles" (click)="onRoleClick()" class="role {{role.cls}}" [ngClass]="{'check': role.isCheck}">{{role.name}}</div>
            </div>
            <div class="mask" (click)="onMaskClick()"></div>
        </div>
    </div>
    `
})
export class RoleListBoxDirective implements AfterViewInit {

    @Input() roles:Array<Object>;

    constructor(private elm:ElementRef) {}

    ngAfterViewInit() {
        
    }

    public onMaskClick() {
        this.hideRoleList();
    }

    public onRoleClick() {
        this.hideRoleList();
    }

    private hideRoleList() {
        let listBox:any = this.elm.nativeElement.querySelector('.role-list-box');
        if(listBox) {
            listBox.style.display = 'none';
        }
    }

}
