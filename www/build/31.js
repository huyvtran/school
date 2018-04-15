webpackJsonp([31],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionInfoPageModule", function() { return VersionInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__version_info__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VersionInfoPageModule = (function () {
    function VersionInfoPageModule() {
    }
    VersionInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__version_info__["a" /* VersionInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__version_info__["a" /* VersionInfoPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__version_info__["a" /* VersionInfoPage */]
            ]
        })
    ], VersionInfoPageModule);
    return VersionInfoPageModule;
}());

//# sourceMappingURL=version-info.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionInfoPage; });
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
 * Generated class for the VersionInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VersionInfoPage = (function () {
    function VersionInfoPage(navCtrl, navParams, native) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.native = native;
        this.version = "1.0.0";
    }
    VersionInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.native.getVersionNumber().then(function (version) {
            _this.version = version;
        });
    };
    VersionInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-version-info',template:/*ion-inline-start:"C:\WorkSpaceCampus\school\src\pages\my\version-info\version-info.html"*/'<!--\n  Generated template for the VersionInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>版本说明</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div class="version-img">\n        <img src="assets/images/version/version.png" />\n    </div>\n\n    <div class="version-info">\n        Version:{{version}}\n    </div>\n\n    <div class="version-content article-content">\n        版本说明\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\WorkSpaceCampus\school\src\pages\my\version-info\version-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["g" /* NativeService */]])
    ], VersionInfoPage);
    return VersionInfoPage;
}());

//# sourceMappingURL=version-info.js.map

/***/ })

});
//# sourceMappingURL=31.js.map