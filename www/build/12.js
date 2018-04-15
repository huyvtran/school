webpackJsonp([12],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortcutPageModule", function() { return ShortcutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shortcut__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives__ = __webpack_require__(724);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShortcutPageModule = (function () {
    function ShortcutPageModule() {
    }
    ShortcutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shortcut__["a" /* ShortcutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives__["a" /* DirectiveModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shortcut__["a" /* ShortcutPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__shortcut__["a" /* ShortcutPage */]
            ]
        })
    ], ShortcutPageModule);
    return ShortcutPageModule;
}());

//# sourceMappingURL=shortcut.module.js.map

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

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortcutPage; });
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
 * Generated class for the ShortcutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShortcutPage = (function () {
    function ShortcutPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.shortcutBtn = '编辑';
        this.canEditable = false;
        this.shortcutFuns = [];
        this.allFuns = [];
    }
    ShortcutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('app/function/loadAll.do').subscribe(function (data) {
            if (data.funs) {
                _this.allFuns = data.funs;
            }
            if (data.userFuns) {
                _this.shortcutFuns = data.userFuns;
            }
        });
    };
    /**
     * 设置快捷操作
     */
    ShortcutPage.prototype.doSetShortcut = function () {
        var _this = this;
        if (this.shortcutBtn == '完成') {
            this.canEditable = false;
            this.shortcutBtn = '编辑';
            var ids = [];
            for (var i = 0; i < this.allFuns.length; i++) {
                if (this.allFuns[i].isCheck && !this.allFuns[i].recommend) {
                    ids.push(this.allFuns[i].id);
                }
            }
            this.http.postFormData('app/shutcut/save.do', {
                funs: ids.join(',')
            }).subscribe(function (data) {
                for (var i = 0; i < _this.allFuns.length; i++) {
                    _this.allFuns[i].cls = '';
                }
                for (var i = 0; i < _this.shortcutFuns.length; i++) {
                    _this.shortcutFuns[i].cls = '';
                }
            });
        }
        else {
            this.canEditable = true;
            this.shortcutBtn = '完成';
            for (var i = 0; i < this.shortcutFuns.length; i++) {
                if (!this.shortcutFuns[i].recommend) {
                    this.shortcutFuns[i].cls = 'del-icon';
                }
            }
            for (var i = 0; i < this.allFuns.length; i++) {
                if (this.allFuns[i].isCheck) {
                    this.allFuns[i].cls = 'has-add-icon';
                }
                else {
                    this.allFuns[i].cls = 'no-add-icon';
                }
            }
        }
    };
    /**
     * 删除快捷操作
     * @param fun
     */
    ShortcutPage.prototype.delShortcut = function (fun) {
        if (this.shortcutBtn == '完成') {
            if (!fun.recommend) {
                for (var i = 0; i < this.allFuns.length; i++) {
                    if (this.allFuns[i].name == fun.name) {
                        this.allFuns[i].isCheck = false;
                        this.allFuns[i].cls = 'no-add-icon';
                    }
                }
                var index = -1;
                for (var i = 0; i < this.shortcutFuns.length; i++) {
                    if (this.shortcutFuns[i].name == fun.name) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    this.shortcutFuns.splice(index, 1);
                }
            }
        }
    };
    /**
     * 添加快捷操作
     * @param fun
     */
    ShortcutPage.prototype.addShortcut = function (fun) {
        if (this.shortcutBtn == '完成') {
            if (fun.cls != 'has-add-icon') {
                fun.cls = 'has-add-icon';
                fun.isCheck = true;
                this.shortcutFuns.push({
                    id: fun.id,
                    name: fun.name,
                    logo: fun.logo,
                    recommend: fun.recommend,
                    isCheck: true,
                    cls: 'del-icon'
                });
            }
        }
    };
    ShortcutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shortcut',template:/*ion-inline-start:"C:\WorkSpaceCampus\school\src\pages\my\shortcut\shortcut.html"*/'<!--\n  Generated template for the ShortcutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>快捷操作</ion-title>\n        <ion-buttons end>\n            <button ion-button tappable (click)="doSetShortcut()">\n                {{shortcutBtn}}\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div class="tool-box-label">快捷操作</div>\n    <ul class="tool-box white-bg">\n        <li *ngFor="let fun of shortcutFuns">\n            <a href="javascript:;" class="tool-icon {{fun.cls}}" (click)="delShortcut(fun)">\n                <img src="{{fun.logo}}">\n                <label>{{fun.name}}</label>\n            </a>\n        </li>\n    </ul>\n\n    <div class="tool-box-label">全部应用</div>\n    <ul class="tool-box white-bg">\n        <li *ngFor="let fun of allFuns">\n            <a href="javascript:;" class="tool-icon {{fun.cls}}" (click)="addShortcut(fun)">\n                <img src="{{fun.logo}}">\n                <label>{{fun.name}}</label>\n            </a>\n        </li>\n    </ul>\n\n</ion-content>'/*ion-inline-end:"C:\WorkSpaceCampus\school\src\pages\my\shortcut\shortcut.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* HttpService */]])
    ], ShortcutPage);
    return ShortcutPage;
}());

//# sourceMappingURL=shortcut.js.map

/***/ })

});
//# sourceMappingURL=12.js.map