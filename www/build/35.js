webpackJsonp([35],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(736);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, storage, httpService, globalData, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.globalData = globalData;
        this.loadingCtrl = loadingCtrl;
        this.user = {
            loginId: '',
            password: ''
        };
        this.school = {};
        this.rememberMe = true;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.school = this.storage.read('school', {
            name: __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* DEFAULT_SCHOOL_NAME */]
        });
        if (this.user == null) {
            this.user = {
                loginId: '',
                password: ''
            };
        }
        var loginId = this.storage.read('loginId');
        if (loginId) {
            this.user.loginId = loginId + '';
        }
    };
    /**
     * 登录
     */
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '正在登录...',
            dismissOnPageChange: true
        });
        this.loading.present();
        if (this.rememberMe) {
            this.storage.write('loginId', this.user.loginId);
        }
        else {
            this.storage.remove('loginId');
        }
        this.httpService.postFormData('sys/login.do', this.user).subscribe(function (user) {
            if (user.id) {
                _this.globalData.user = user;
                _this.storage.write("user", user);
                _this.navCtrl.pop();
            }
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    /**
     * 打开注册页面
     */
    LoginPage.prototype.doRegister = function () {
        this.navCtrl.push('register/step1');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\WorkSpaceCampus\school\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>登录</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="school-logo-box">\n        <img src="assets/images/login/logo.png" />\n        <div class="app-info">\n            <div class="app-name">每日校信</div>\n            <div class="app-sub">智引未来<span class="app-blank"></span>慧你而来</div>\n        </div>\n    </div>\n\n    <form #form="ngForm" (ngSubmit)="doLogin(form)" novalidate>\n        <div class="login-box">\n            <ion-item>\n                <ion-icon item-start>\n                    <img src="assets/images/login/user.png" />\n                </ion-icon>\n                <ion-input type="tel" maxLength="15" [(ngModel)]="user.loginId" required name="loginId" placeholder="请输入用户名"></ion-input>\n            </ion-item>\n            <ion-item class="no-border">\n                <ion-icon item-start>\n                    <img src="assets/images/login/pwd.png" />\n                </ion-icon>\n                <ion-input type="password" maxLength="15" [(ngModel)]="user.password" name="password" placeholder="请输入密码"></ion-input>\n            </ion-item>\n        </div>\n        <div style="margin: 10px; overflow: hidden;">\n            <label style="float: left; display: inline-block; height: 24px; line-height: 27px;">\n                <ion-checkbox color="secondary" name="rememberMe" [(ngModel)]="rememberMe" style="float: left; margin-right: 5px;"></ion-checkbox>\n                记住用户\n            </label>\n            <a href="javascript:;" style="float: right; display: inline-block; height: 24px; line-height: 27px;" tappable>忘记密码</a>\n        </div>\n        <button ion-button type="submit" tappable color=secondary block>登录</button>\n        <button ion-button type="button" color=primary block style="margin-top: 10px;" tappable (click)="doRegister()">注册</button>\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\WorkSpaceCampus\school\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["h" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=35.js.map