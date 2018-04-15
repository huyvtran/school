webpackJsonp([28],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3PageModule", function() { return Step3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step3__ = __webpack_require__(750);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Step3PageModule = (function () {
    function Step3PageModule() {
    }
    Step3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__step3__["a" /* Step3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__step3__["a" /* Step3Page */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__step3__["a" /* Step3Page */]
            ]
        })
    ], Step3PageModule);
    return Step3PageModule;
}());

//# sourceMappingURL=step3.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3Page; });
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



var Step3Page = (function () {
    function Step3Page(navCtrl, navParams, storageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageService = storageService;
    }
    Step3Page.prototype.ionViewDidLoad = function () {
        this.storageService.remove('registerUser');
    };
    Step3Page.prototype.doRegisterFinish = function () {
        var len = this.navCtrl.length() - 1;
        if (len > 3) {
            len = len - 3;
        }
        this.navCtrl.popTo(this.navCtrl.getViews()[len]);
    };
    Step3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-step3',template:/*ion-inline-start:"D:\Ionic\school\src\pages\register\step3\step3.html"*/'<!--\n  Generated template for the Step3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>注册完成</ion-title>\n        <ion-buttons end>\n            <button ion-button tappable (click)="doRegisterFinish()">\n                完成\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div class="register-step">\n        <div class="step1 check">基本信息</div>\n        <div class="step2 check">选定身份</div>\n        <div class="step3 check">结果页面</div>\n    </div>\n\n    <div>\n        <div class="success">\n            <img src="assets/images/register/success.png" /> 恭喜你注册完成\n        </div>\n        <div class="info">您可以享受更多服务了，赶紧去吧~</div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Ionic\school\src\pages\register\step3\step3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["h" /* StorageService */]])
    ], Step3Page);
    return Step3Page;
}());

//# sourceMappingURL=step3.js.map

/***/ })

});
//# sourceMappingURL=28.js.map