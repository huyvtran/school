webpackJsonp([33],{

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMobilePageModule", function() { return UpdateMobilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_mobile__ = __webpack_require__(745);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateMobilePageModule = (function () {
    function UpdateMobilePageModule() {
    }
    UpdateMobilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_mobile__["a" /* UpdateMobilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_mobile__["a" /* UpdateMobilePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__update_mobile__["a" /* UpdateMobilePage */]
            ]
        })
    ], UpdateMobilePageModule);
    return UpdateMobilePageModule;
}());

//# sourceMappingURL=update-mobile.module.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateMobilePage; });
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
 * Generated class for the UpdateMobilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UpdateMobilePage = (function () {
    function UpdateMobilePage(navCtrl, navParams, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.model = {
            phone: '',
            code: ''
        };
        this.codeBtnTxt = '获取';
        this.codeBtnColor = 'secondary';
    }
    UpdateMobilePage.prototype.ionViewDidLoad = function () {
        this.user = this.storage.read('user');
        if (this.user) {
            this.model.phone = this.user.phone || '';
        }
    };
    UpdateMobilePage.prototype.sendCode = function () {
        var _this = this;
        if (this.codeBtnColor == 'secondary') {
            if (!this.model.phone) {
                this.http.showError('手机号码不能为空');
                return;
            }
            this.http.get('sms/vcode.do?phone=' + this.model.phone).subscribe(function (data) {
                var remainTime = data.remainTime || 120;
                _this.changeCodeBtnTxt(remainTime);
            });
        }
    };
    UpdateMobilePage.prototype.doUpdate = function () {
        var _this = this;
        this.http.postFormData('school/updateMajorMemberPhone.do', this.model).subscribe(function (data) {
            _this.user.phone = _this.model.phone;
            _this.storage.write('user', _this.user);
            _this.http.showError('更换手机号码成功');
            _this.navCtrl.pop();
        });
    };
    UpdateMobilePage.prototype.changeCodeBtnTxt = function (time) {
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
    UpdateMobilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-update-mobile',template:/*ion-inline-start:"C:\WorkSpaceCampus\school\src\pages\my\update-mobile\update-mobile.html"*/'<!--\n  Generated template for the UpdateMobilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>更换手机</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list class="mtop">\n\n        <ion-item>\n            <ion-label>手机号码</ion-label>\n            <ion-input type="text" name="phone" [(ngModel)]=\'model.phone\' placeholder="请输入您的真实有效的手机号码"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>验证码</ion-label>\n            <ion-input type="text" name="code" [(ngModel)]=\'model.code\' placeholder="请输入验证码"></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button color="{{codeBtnColor}}" class="code-btn" (click)="sendCode()">{{codeBtnTxt}}</button>\n\n    <div style="margin: 20px 10px 0 10px;">\n        <button ion-button block color="secondary" (click)="doUpdate()">确定</button>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\WorkSpaceCampus\school\src\pages\my\update-mobile\update-mobile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["h" /* StorageService */]])
    ], UpdateMobilePage);
    return UpdateMobilePage;
}());

//# sourceMappingURL=update-mobile.js.map

/***/ })

});
//# sourceMappingURL=33.js.map