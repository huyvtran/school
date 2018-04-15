webpackJsonp([32],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNamePageModule", function() { return UpdateNamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_name__ = __webpack_require__(744);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateNamePageModule = (function () {
    function UpdateNamePageModule() {
    }
    UpdateNamePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_name__["a" /* UpdateNamePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_name__["a" /* UpdateNamePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__update_name__["a" /* UpdateNamePage */]
            ]
        })
    ], UpdateNamePageModule);
    return UpdateNamePageModule;
}());

//# sourceMappingURL=update-name.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateNamePage; });
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
 * Generated class for the UpdateNamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UpdateNamePage = (function () {
    function UpdateNamePage(navCtrl, navParams, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.user = {};
    }
    UpdateNamePage.prototype.ionViewDidLoad = function () {
        this.user = this.storage.read('user');
        if (this.user == null) {
            this.user = {};
        }
    };
    UpdateNamePage.prototype.doUpdate = function () {
        var _this = this;
        this.http.postFormData('school/updateMajorMemberName.do', {
            name: this.user.name
        }).subscribe(function (data) {
            _this.http.showError('更换姓名成功');
            _this.storage.write('user', _this.user);
            _this.navCtrl.pop();
        });
    };
    UpdateNamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-update-name',template:/*ion-inline-start:"D:\Ionic\school\src\pages\my\update-name\update-name.html"*/'<!--\n  Generated template for the UpdateNamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>更换姓名</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <form #form="ngForm" (ngSubmit)="doUpdate(form)" novalidate>\n        <ion-list class="mtop">\n\n            <ion-item>\n                <ion-label>姓名</ion-label>\n                <ion-input type="text" [(ngModel)]=\'user.name\' name="name" placeholder="请输入您的真实姓名"></ion-input>\n            </ion-item>\n\n        </ion-list>\n\n        <div style="margin: 20px 10px 0 10px;">\n            <button ion-button block color="secondary">确定</button>\n        </div>\n    </form>\n\n</ion-content>'/*ion-inline-end:"D:\Ionic\school\src\pages\my\update-name\update-name.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["h" /* StorageService */]])
    ], UpdateNamePage);
    return UpdateNamePage;
}());

//# sourceMappingURL=update-name.js.map

/***/ })

});
//# sourceMappingURL=32.js.map