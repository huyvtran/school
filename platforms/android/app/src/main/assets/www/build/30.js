webpackJsonp([30],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1PageModule", function() { return Step1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step1__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Step1PageModule = (function () {
    function Step1PageModule() {
    }
    Step1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__step1__["a" /* Step1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__step1__["a" /* Step1Page */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__step1__["a" /* Step1Page */]
            ]
        })
    ], Step1PageModule);
    return Step1PageModule;
}());

//# sourceMappingURL=step1.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step1Page; });
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



var Step1Page = (function () {
    function Step1Page(navCtrl, navParams, storage, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.codeBtnTxt = '获取';
        this.codeBtnColor = 'secondary';
    }
    Step1Page.prototype.ionViewDidLoad = function () {
        this.user = this.storage.read('registerUser', {});
    };
    Step1Page.prototype.nextStep = function () {
        var _this = this;
        if (!this.user.name) {
            this.http.showError('姓名不能为空');
            return;
        }
        if (!this.user.phone) {
            this.http.showError('手机号码不能为空');
            return;
        }
        if (!this.user.code) {
            this.http.showError('验证码不能为空');
            return;
        }
        if (!this.user.password) {
            this.http.showError('登录密码不能为空');
            return;
        }
        if (this.user.password != this.user.confirmPassword) {
            this.http.showError('登录密码与确认密码不一致');
            return;
        }
        this.loading = this.loadingCtrl.create({
            content: '正在注册...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.http.postFormData('sys/checkRegister.do', {
            phone: this.user.phone,
            code: this.user.code,
            name: this.user.name
        }).subscribe(function (data) {
            _this.storage.write('registerUser', _this.user);
            _this.navCtrl.push('register/step2');
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    Step1Page.prototype.sendCode = function () {
        var _this = this;
        if (this.codeBtnColor == 'secondary') {
            if (!this.user.phone) {
                this.http.showError('手机号码不能为空');
                return;
            }
            this.http.get('sms/vcode.do?phone=' + this.user.phone).subscribe(function (data) {
                var remainTime = data.remainTime || 120;
                _this.changeCodeBtnTxt(remainTime);
            });
        }
    };
    Step1Page.prototype.changeCodeBtnTxt = function (time) {
        var _this = this;
        if (time <= 0) {
            this.codeBtnTxt = '获取';
            this.codeBtnColor = 'secondary';
        }
        else {
            this.codeBtnTxt = time;
            this.codeBtnColor = 'light';
            setTimeout(function () {
                _this.changeCodeBtnTxt(time - 1);
            }, 1000);
        }
    };
    Step1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-step1',template:/*ion-inline-start:"D:\Ionic\school\src\pages\register\step1\step1.html"*/'<!--\n  Generated template for the Step1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>注册</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="register-step">\n        <div class="step1 check">基本信息</div>\n        <div class="step2">选定身份</div>\n        <div class="step3">结果页面</div>\n    </div>\n\n    <ion-list>\n        <ion-item>\n            <ion-label>姓名：</ion-label>\n            <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>手机号码：</ion-label>\n            <ion-input type="text" [(ngModel)]="user.phone"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>短信验证码：</ion-label>\n            <ion-input type="text" [(ngModel)]="user.code"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>登录密码：</ion-label>\n            <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>密码确认：</ion-label>\n            <ion-input type="password" [(ngModel)]="user.confirmPassword"></ion-input>\n        </ion-item>\n    </ion-list>\n    <div style="margin: 10px; overflow: hidden;">\n        <label style="float: left; display: inline-block; height: 24px; line-height: 24px;">\n            <ion-checkbox color="secondary" checked="true" style="float: left; margin-right: 5px;"></ion-checkbox>\n            我已阅读并同意\n        </label>\n        <a href="javascript:void(0);" style="float: left; display: inline-block; height: 24px; line-height: 24px; color: #2db769;">《用户协议》</a>\n    </div>\n    <button ion-button color="{{codeBtnColor}}" class="code-btn" tappable (click)="sendCode()">{{codeBtnTxt}}</button>\n    <div style="margin: 0 10px 0 10px;">\n        <button ion-button block color="secondary" tappable (click)="nextStep()">下一步</button>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\Ionic\school\src\pages\register\step1\step1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["h" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], Step1Page);
    return Step1Page;
}());

//# sourceMappingURL=step1.js.map

/***/ })

});
//# sourceMappingURL=30.js.map