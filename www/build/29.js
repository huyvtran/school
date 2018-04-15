webpackJsonp([29],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2PageModule", function() { return Step2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step2__ = __webpack_require__(751);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Step2PageModule = (function () {
    function Step2PageModule() {
    }
    Step2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__step2__["a" /* Step2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__step2__["a" /* Step2Page */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__step2__["a" /* Step2Page */]
            ]
        })
    ], Step2PageModule);
    return Step2PageModule;
}());

//# sourceMappingURL=step2.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2Page; });
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



var Step2Page = (function () {
    function Step2Page(navCtrl, navParams, storage, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.type = 3;
    }
    Step2Page.prototype.ionViewDidLoad = function () {
        this.user = this.storage.read('registerUser', {});
        this.members = [{
                cls: 'teacher',
                name: '教师',
                id: 3
            }, {
                cls: 'parenter',
                name: '家长',
                id: 4
            }];
    };
    Step2Page.prototype.nextStep = function () {
        var _this = this;
        if (this.members == null || this.members.length == 0) {
            this.http.showError('请选择主身份');
            return false;
        }
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].isCheck) {
                this.type = this.members[i].id;
                break;
            }
        }
        this.loading = this.loadingCtrl.create({
            content: '正在注册...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.http.postFormData('sys/register.do', {
            name: this.user.name,
            phone: this.user.phone,
            password: this.user.password,
            type: this.type
        }).subscribe(function (data) {
            _this.http.showError('注册成功');
            _this.navCtrl.push('register/step3');
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    Step2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-step2',template:/*ion-inline-start:"C:\WorkSpaceCampus\school\src\pages\register\step2\step2.html"*/'<!--\n  Generated template for the Step2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>选定身份</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div class="register-step">\n        <div class="step1 check">基本信息</div>\n        <div class="step2 check">选定身份</div>\n        <div class="step3">结果页面</div>\n    </div>\n\n    <ion-list radio-group class="role-wrap" [(ngModel)]="type">\n        <ion-item *ngFor="let member of members">\n            <ion-label>\n                <div class="role {{member.cls}}">{{member.name}}</div>\n            </ion-label>\n            <ion-radio  value="{{member.id}}"></ion-radio>\n        </ion-item>\n    </ion-list>\n\n    <div style="margin: 15px 10px 0 10px;">\n        <button ion-button block color="secondary" tappable (click)="nextStep()">下一步</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\WorkSpaceCampus\school\src\pages\register\step2\step2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["h" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], Step2Page);
    return Step2Page;
}());

//# sourceMappingURL=step2.js.map

/***/ })

});
//# sourceMappingURL=29.js.map