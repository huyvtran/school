webpackJsonp([13],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives__ = __webpack_require__(724);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives__["a" /* DirectiveModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());

//# sourceMappingURL=settings.module.js.map

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

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
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



/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, storage, native, update, globalData, actionSheetCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.native = native;
        this.update = update;
        this.globalData = globalData;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        this.user = this.storage.read('user');
    };
    SettingsPage.prototype.logout = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [{
                    text: '退出当前账号',
                    cssClass: 'school-action-sheet-button',
                    handler: function () {
                        _this.doLogout();
                    }
                }, {
                    text: '关闭每日校信',
                    cssClass: 'school-action-sheet-button',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'school-action-sheet-button',
                    handler: function () {
                    }
                }]
        });
        actionSheet.present();
    };
    /**
     * 退出系统
     */
    SettingsPage.prototype.doLogout = function () {
        this.storage.remove('user');
        this.storage.remove('school');
        this.globalData.user = null;
        this.user = null;
        this.navCtrl.pop();
    };
    /**
     * 清空聊天记录
     */
    SettingsPage.prototype.clearTalkRecords = function () {
        this.native.showToast('聊天记录清除成功');
    };
    /**
     * 更新版本
     */
    SettingsPage.prototype.updateVersion = function () {
        var _this = this;
        this.update.checkUpgrade().then(function (version) {
            if (version) {
                _this.native.doUpdateVersion(version.url);
            }
            else {
                _this.native.showToast('这已经是最新版本');
            }
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\WorkSpaceCampus\school\src\pages\my\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>设置</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list class="mtop">\n        <ion-item tappable auth="true" link="my/shortcut">\n            快捷操作\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item tappable (click)="clearTalkRecords()">\n            清空聊天记录\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item tappable link="my/about">\n            关于\n        </ion-item>\n        <ion-item tappable (click)="updateVersion()">\n            版本更新\n        </ion-item>\n        <ion-item tappable (click)="logout()" *ngIf="user">\n            退出\n        </ion-item>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\WorkSpaceCampus\school\src\pages\my\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["h" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["g" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["i" /* UpdateService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=13.js.map