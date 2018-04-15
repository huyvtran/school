webpackJsonp([16],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPageModule", function() { return MyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives__ = __webpack_require__(724);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyPageModule = (function () {
    function MyPageModule() {
    }
    MyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my__["a" /* MyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives__["b" /* RoleDirectiveModule */],
                __WEBPACK_IMPORTED_MODULE_3__directives__["a" /* DirectiveModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my__["a" /* MyPage */]),
            ],
        })
    ], MyPageModule);
    return MyPageModule;
}());

//# sourceMappingURL=my.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__role_directive_module__ = __webpack_require__(725);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__role_directive_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive_module__ = __webpack_require__(728);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__directive_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleDirectiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_list_box_role_list_box__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_role__ = __webpack_require__(727);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RoleDirectiveModule = (function () {
    function RoleDirectiveModule() {
    }
    RoleDirectiveModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__role_list_box_role_list_box__["a" /* RoleListBoxDirective */],
                __WEBPACK_IMPORTED_MODULE_3__role_role__["a" /* RoleDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__role_list_box_role_list_box__["a" /* RoleListBoxDirective */],
                __WEBPACK_IMPORTED_MODULE_3__role_role__["a" /* RoleDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], RoleDirectiveModule);
    return RoleDirectiveModule;
}());

//# sourceMappingURL=role-directive.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleListBoxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoleListBoxDirective = (function () {
    function RoleListBoxDirective(elm) {
        this.elm = elm;
    }
    RoleListBoxDirective.prototype.ngAfterViewInit = function () {
    };
    RoleListBoxDirective.prototype.onMaskClick = function () {
        this.hideRoleList();
    };
    RoleListBoxDirective.prototype.onRoleClick = function () {
        this.hideRoleList();
    };
    RoleListBoxDirective.prototype.hideRoleList = function () {
        var listBox = this.elm.nativeElement.querySelector('.role-list-box');
        if (listBox) {
            listBox.style.display = 'none';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], RoleListBoxDirective.prototype, "roles", void 0);
    RoleListBoxDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'role-list-box',
            template: "\n    <div class=\"role-list-box\">\n        <div class=\"role-list\">\n            <div class=\"arrow_box\">\n                <div *ngFor=\"let role of roles\" (click)=\"onRoleClick()\" class=\"role {{role.cls}}\" [ngClass]=\"{'check': role.isCheck}\">{{role.name}}</div>\n            </div>\n            <div class=\"mask\" (click)=\"onMaskClick()\"></div>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], RoleListBoxDirective);
    return RoleListBoxDirective;
}());

//# sourceMappingURL=role-list-box.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoleDirective = (function () {
    function RoleDirective(elm) {
        this.elm = elm;
    }
    RoleDirective.prototype.ngAfterViewInit = function () {
    };
    RoleDirective.prototype.showRoleList = function () {
        var el = this.getParentEl();
        if (el) {
            var listBox = el.querySelector('.role-list-box');
            if (listBox) {
                listBox.style.display = 'block';
            }
        }
    };
    RoleDirective.prototype.getParentEl = function () {
        var el = this.elm.nativeElement;
        while (el.className.indexOf('user-wrap') == -1 && el.parentNode && el.parentNode != document) {
            el = el.parentNode;
        }
        return el;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RoleDirective.prototype, "role", void 0);
    RoleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'role',
            template: "\n        <div class=\"role {{role.cls}}\" (click)=\"showRoleList()\" [ngClass]=\"{'check': role.isCheck}\">{{role.name}}</div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], RoleDirective);
    return RoleDirective;
}());

//# sourceMappingURL=role.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link_link__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectiveModule = (function () {
    function DirectiveModule() {
    }
    DirectiveModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__link_link__["a" /* LinkDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__link_link__["a" /* LinkDirective */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], DirectiveModule);
    return DirectiveModule;
}());

//# sourceMappingURL=directive.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinkDirective = (function () {
    function LinkDirective(elm, navCtrl, globalData) {
        this.elm = elm;
        this.navCtrl = navCtrl;
        this.globalData = globalData;
    }
    LinkDirective.prototype.ngOnInit = function () {
        this.elm.nativeElement.addEventListener('click', this.gotoPage.bind(this));
    };
    LinkDirective.prototype.gotoPage = function () {
        if (this.url) {
            if (this.auth && !this.globalData.token) {
                this.navCtrl.push('login', this.params || {}, {
                    animate: true
                });
            }
            else if (this.url.startsWith("http")) {
                //this.iab.create(this.url);
            }
            else {
                this.navCtrl.push(this.url, this.params || {}, {
                    animate: true, duration: 200
                });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('link'),
        __metadata("design:type", String)
    ], LinkDirective.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('auth'),
        __metadata("design:type", Boolean)
    ], LinkDirective.prototype, "auth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('params'),
        __metadata("design:type", Object)
    ], LinkDirective.prototype, "params", void 0);
    LinkDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[link]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* GlobalData */]])
    ], LinkDirective);
    return LinkDirective;
}());

//# sourceMappingURL=link.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyPage = (function () {
    function MyPage(navCtrl, navParams, storage, globalData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.globalData = globalData;
    }
    MyPage.prototype.ionViewWillEnter = function () {
        this.user = this.storage.read('user');
        if (this.user) {
            if (!this.user.phone) {
                this.user.phone = '';
            }
            this.member = this.user.member || {};
            this.members = this.user.members || [];
            this.globalData.user = this.user;
        }
    };
    MyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my',template:/*ion-inline-start:"D:\Ionic\school\src\pages\my\my\my.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>我的</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="user-wrap role-wrap mtop border-top">\n        <div class="user-box">\n            <div *ngIf="user" class="user-info">\n                <a href="javascript:;" tappable auth="true" link="my/userInfo">\n                    <img src="assets/images/user/default.png" />\n                    <div class="user-name-wrap">\n                        <div class="user-name">{{user.name}}</div>\n                        <div class="user-tel">手机号码：{{user.phone}}</div>\n                    </div>\n                </a>\n            </div>\n            <div *ngIf="user==null" class="user-info">\n                <img src="assets/images/user/default.png" />\n                <div class="user-name-wrap" style="line-height: 48px;"><a href="javascript:void(0);" tappable link="login">登录</a></div>\n            </div>\n\n            <div *ngIf="user && user.member && user.member.name" class="role-info">\n                <role [role]="member"></role>\n                <div class="more"></div>\n            </div>\n        </div>\n        <role-list-box *ngIf="user && user.members" [roles]="members"></role-list-box>\n    </div>\n\n    <ion-list class="mtop">\n        <ion-item auth="true">\n            <ion-icon name="school-card">\n                <img src="assets/images/icon/icon-school-card.png" />\n            </ion-icon>\n            校园卡\n        </ion-item>\n        <ion-item tappable link="my/settings">\n            <ion-icon name="my-settings">\n                <img src="assets/images/icon/icon-settings.png" />\n            </ion-icon>\n            设置\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Ionic\school\src\pages\my\my\my.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["h" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* GlobalData */]])
    ], MyPage);
    return MyPage;
}());

//# sourceMappingURL=my.js.map

/***/ })

});
//# sourceMappingURL=16.js.map