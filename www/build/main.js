webpackJsonp([36],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_SERVE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEFAULT_SCHOOL_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DEFAULT_SCHOOL_NAME; });
/* unused harmony export APP_DOWNLOAD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHECK_UPDATE_URL; });
/**
 * 服务器地址
 */
var APP_SERVE_URL = 'http://119.29.207.161:9000/ciwap/';
/**
 * 默认学校信息
 */
var DEFAULT_SCHOOL_CODE = '1001';
var DEFAULT_SCHOOL_NAME = '湘潭江声实验学校';
var APP_DOWNLOAD = '';
var CHECK_UPDATE_URL = 'app/version.json';
//# sourceMappingURL=Constant.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		688,
		19
	],
	"../pages/login/login.module": [
		689,
		35
	],
	"../pages/my/about/about.module": [
		691,
		18
	],
	"../pages/my/contact/contact.module": [
		690,
		34
	],
	"../pages/my/identity/identity.module": [
		692,
		17
	],
	"../pages/my/my/my.module": [
		693,
		16
	],
	"../pages/my/position/position.module": [
		694,
		15
	],
	"../pages/my/question-list/question-list.module": [
		695,
		14
	],
	"../pages/my/settings/settings.module": [
		696,
		13
	],
	"../pages/my/shortcut/shortcut.module": [
		697,
		12
	],
	"../pages/my/update-mobile/update-mobile.module": [
		698,
		33
	],
	"../pages/my/update-name/update-name.module": [
		699,
		32
	],
	"../pages/my/user-info/user-info.module": [
		700,
		11
	],
	"../pages/my/version-info/version-info.module": [
		701,
		31
	],
	"../pages/my/version-list/version-list.module": [
		703,
		10
	],
	"../pages/register/step1/step1.module": [
		702,
		30
	],
	"../pages/register/step2/step2.module": [
		704,
		29
	],
	"../pages/register/step3/step3.module": [
		705,
		28
	],
	"../pages/school/article/article.module": [
		706,
		1
	],
	"../pages/school/class-activity-list/class-activity-list.module": [
		708,
		9
	],
	"../pages/school/class-activity/class-activity.module": [
		707,
		25
	],
	"../pages/school/class-honor/class-honor.module": [
		709,
		24
	],
	"../pages/school/class-info/class-info.module": [
		710,
		8
	],
	"../pages/school/class-intro/class-intro.module": [
		711,
		23
	],
	"../pages/school/class-list/class-list.module": [
		712,
		7
	],
	"../pages/school/class-member/class-member.module": [
		713,
		6
	],
	"../pages/school/introduction/introduction.module": [
		714,
		5
	],
	"../pages/school/notice/notice.module": [
		715,
		4
	],
	"../pages/school/school-info/school-info.module": [
		716,
		3
	],
	"../pages/school/school-intro/school-intro.module": [
		717,
		22
	],
	"../pages/school/school/school.module": [
		718,
		2
	],
	"../pages/school/student-list/student-list.module": [
		720,
		0
	],
	"../pages/school/teacher-list/teacher-list.module": [
		719,
		21
	],
	"../pages/tabs/tabs.module": [
		721,
		27
	],
	"../pages/talk/chat/chat.module": [
		722,
		26
	],
	"../pages/talk/talk/talk.module": [
		723,
		20
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Constant__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__GlobalData__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__native_service_native_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__storage_service_storage_service__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HttpService = (function () {
    function HttpService(http, toastCtrl, nativeService, globalData, storageService) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.nativeService = nativeService;
        this.globalData = globalData;
        this.storageService = storageService;
    }
    HttpService_1 = HttpService;
    HttpService.prototype.request = function (url, options) {
        var _this = this;
        url = HttpService_1.replaceUrl(url);
        if (options.headers) {
            options.headers.append('Authentication', '*');
            options.headers.append('X-Requested-With', '*');
            options.headers.append('token', this.globalData.token);
        }
        else {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'token': this.globalData.token,
                'Authentication': '*',
                'X-Requested-With': '*'
            });
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
            _this.http.request(url, options).subscribe(function (res) {
                console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
                var code = res.headers.get('code');
                console.log('header==>', res.headers.toJSON());
                console.log('code===>' + code);
                if (code) {
                    if (code == '1000') {
                        _this.showError('未登录');
                    }
                    else if (code != '0') {
                        observer.error();
                        var msg = res.headers.get('msg');
                        if (msg) {
                            _this.showError(decodeURIComponent(msg));
                        }
                        else {
                            _this.showError('系统异常');
                        }
                    }
                    else {
                        observer.next(res.json());
                    }
                }
                else {
                    observer.next(res.json());
                }
            }, function (err) {
                _this.handleError(url, options, err); //处理请求失败
            });
        });
    };
    HttpService.prototype.get = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            search: HttpService_1.buildURLSearchParams(paramMap)
        }));
    };
    HttpService.prototype.post = function (url, body) {
        if (body === void 0) { body = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            body: body,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }));
    };
    HttpService.prototype.postFormData = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            params: HttpService_1.buildURLSearchParams(paramMap),
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        }));
    };
    HttpService.prototype.put = function (url, body) {
        if (body === void 0) { body = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            body: body
        }));
    };
    HttpService.prototype.delete = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }));
    };
    HttpService.prototype.patch = function (url, body) {
        if (body === void 0) { body = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            body: body
        }));
    };
    HttpService.prototype.head = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Head,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }));
    };
    HttpService.prototype.options = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Options,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }));
    };
    HttpService.prototype.handleError = function (url, options, error) {
        var status = error.status;
        var msg = null;
        console.log('handleError:status====>', status);
        if (status == 500) {
            var headers = error.headers;
            var code = headers.get('code');
            console.log('handleError:code====>', code);
            if (code && code != '0') {
                if (code == '1001') {
                    this.storageService.remove('user');
                }
                else {
                    msg = headers.get('msg');
                    if (msg) {
                        msg = decodeURIComponent(msg);
                    }
                }
            }
            if (!msg) {
                msg = '系统异常';
            }
        }
        if (msg) {
            this.showError(msg);
        }
        // let res = error.headers
        // console.log('status==>', status);
        // if (typeof res.then != 'undefined') {
        //     res.then(data => this.showError(data));
        // } else {
        //     this.showError();
        // }
    };
    HttpService.prototype.showError = function (msg) {
        if (msg === void 0) { msg = '网络不给力'; }
        this.nativeService.showToast(msg);
    };
    HttpService.replaceUrl = function (url) {
        if (url.indexOf('http://') == -1) {
            url = __WEBPACK_IMPORTED_MODULE_5__Constant__["a" /* APP_SERVE_URL */] + url;
        }
        return 'http://' + url.substring(7).replace(/\/\//g, '/');
    };
    /**
   * 将对象转为查询参数
   * @param paramMap
   * @returns {URLSearchParams}
   */
    HttpService.buildURLSearchParams = function (paramMap) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        if (!paramMap) {
            return params;
        }
        for (var key in paramMap) {
            var val = paramMap[key];
            params.set(key, val);
        }
        return params;
    };
    HttpService = HttpService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__native_service_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_6__GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_8__storage_service_storage_service__["a" /* StorageService */]])
    ], HttpService);
    return HttpService;
    var HttpService_1;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalData = (function () {
    function GlobalData() {
    }
    Object.defineProperty(GlobalData.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (_user) {
            this._user = _user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "token", {
        get: function () {
            if (this._user) {
                return this._user.token;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    GlobalData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], GlobalData);
    return GlobalData;
}());

//# sourceMappingURL=GlobalData.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.write = function (key, value) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    };
    StorageService.prototype.read = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var value = localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            return JSON.parse(value);
        }
        return defaultValue;
    };
    StorageService.prototype.readArr = function (key) {
        var value = localStorage.getItem(key);
        if (value && value != 'undefined' && value != 'null') {
            return JSON.parse(value);
        }
        return null;
    };
    StorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageService.prototype.clear = function () {
        localStorage.clear();
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage-service.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TalkPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkOperator; });
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



var TalkPage = (function () {
    function TalkPage(navCtrl, navParams, chatService, cd, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatService = chatService;
        this.cd = cd;
        this.popoverCtrl = popoverCtrl;
        this.publicTalks = [];
        this.talks = [];
        this.publicTalks = [{
                id: 'sys_1',
                image: 'assets/images/talk/msg.png',
                name: '系统消息',
                content: '今日高温补贴已发',
                time: '13:44'
            }, {
                id: 'sys_2',
                image: 'assets/images/talk/notice.png',
                name: '通知公告',
                content: '恭喜您已经注册',
                time: '13:44'
            }];
    }
    TalkPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.chatService.onReciverMsg.subscribe(function (data) {
            console.log('==============onReciverMsg===============');
            _this.updateRoomContent();
        });
        this.chatService.onConversationUpdate.subscribe(function () {
            console.log('==============onConversationUpdate===============');
            _this.updateRoomContent();
        });
        this.updateRoomContent();
    };
    TalkPage.prototype.updateRoomContent = function () {
        var _this = this;
        this.chatService.loadConversations().then(function (data) {
            console.log('loadConversations=================>' + JSON.stringify(data));
            _this.talks = _this.publicTalks.concat(data);
            _this.cd.detectChanges();
        });
    };
    /**
     * 转到聊天页面
     * @param item
     */
    TalkPage.prototype.gotoTalkPage = function (item) {
        if (item.type == 1 || item.type == 2) {
            this.navCtrl.push('talk/chat', item);
        }
    };
    TalkPage.prototype.showOperators = function (ev) {
        var popover = this.popoverCtrl.create(TalkOperator, {}, {
            cssClass: 'talk-operator-popover'
        });
        popover.present({
            ev: ev
        });
    };
    TalkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-talk',template:/*ion-inline-start:"C:\WorkSpaceCampus\school\src\pages\talk\talk\talk.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>校信</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="showOperators($event)">\n              <ion-icon name="options"></ion-icon>\n            </button>\n          </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-item *ngFor="let item of talks" tappable (click)="gotoTalkPage(item)">\n            <ion-avatar item-start>\n                <img src="{{item.image}}">\n                <span class="item-badge" *ngIf="item.unreadCount > 0">{{item.unreadCount}}</span>\n            </ion-avatar>\n            <h2>{{item.name}}</h2>\n            <p>{{item.content}}</p>\n            <ion-note item-end>\n                {{item.time}}\n            </ion-note>\n        </ion-item>\n        \n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\WorkSpaceCampus\school\src\pages\talk\talk\talk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]])
    ], TalkPage);
    return TalkPage;
}());

var TalkOperator = (function () {
    function TalkOperator() {
    }
    TalkOperator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'talk-operator',
            template: "\n        <ion-list class=\"popover-page\">\n            <ion-item tappable>\u53D1\u8D77\u5BF9\u8BDD</ion-item>\n            <ion-item tappable>\u53D1\u8D77\u7FA4\u804A</ion-item>\n        </ion-list>\n    "
        })
    ], TalkOperator);
    return TalkOperator;
}());

//# sourceMappingURL=talk.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_toast__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_minimize__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_talk_talk_talk__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_sqlite__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__jiguang_ionic_jpush__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_talk_talk_talk__["a" /* TalkOperator */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: 'true',
                    pageTransition: 'ios-transition',
                    backButtonIcon: 'arrow-back',
                    backButtonText: '',
                    mode: 'ios',
                    swipeBackEnabled: true
                }, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/contact/contact.module#ContactPageModule', name: 'my/contact', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/about/about.module#AboutPageModule', name: 'my/about', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/identity/identity.module#IdentityPageModule', name: 'my/identity', segment: 'identity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/my/my.module#MyPageModule', name: 'my/my', segment: 'my', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/position/position.module#PositionPageModule', name: 'my/position', segment: 'position', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/question-list/question-list.module#QuestionListPageModule', name: 'my/questionList', segment: 'question-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/settings/settings.module#SettingsModule', name: 'my/settings', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/shortcut/shortcut.module#ShortcutPageModule', name: 'my/shortcut', segment: 'shortcut', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/update-mobile/update-mobile.module#UpdateMobilePageModule', name: 'my/updateMobile', segment: 'update-mobile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/update-name/update-name.module#UpdateNamePageModule', name: 'my/updateName', segment: 'update-name', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/user-info/user-info.module#UserInfoModule', name: 'my/userInfo', segment: 'user-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/version-info/version-info.module#VersionInfoPageModule', name: 'my/versionInfo', segment: 'version-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/step1/step1.module#Step1PageModule', name: 'register/step1', segment: 'step1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/version-list/version-list.module#VersionListPageModule', name: 'my/versionList', segment: 'version-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/step2/step2.module#Step2PageModule', name: 'register/step2', segment: 'step2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/step3/step3.module#Step3PageModule', name: 'register/step3', segment: 'step3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/article/article.module#ArticlePageModule', name: 'school/article', segment: 'article', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/class-activity/class-activity.module#ClassActivityPageModule', name: 'school/classActivity', segment: 'class-activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/class-activity-list/class-activity-list.module#ClassActivityListPageModule', name: 'school/classActivityList', segment: 'class-activity-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/class-honor/class-honor.module#ClassHonorPageModule', name: 'school/classHonor', segment: 'class-honor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/class-info/class-info.module#ClassInfoPageModule', name: 'school/classInfo', segment: 'class-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/class-intro/class-intro.module#ClassIntroPageModule', name: 'school/classIntro', segment: 'class-intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/class-list/class-list.module#ClassListPageModule', name: 'school/classList', segment: 'class-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/class-member/class-member.module#ClassMemberPageModule', name: 'school/classMember', segment: 'class-member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/introduction/introduction.module#IntroductionPageModule', name: 'school/introduction', segment: 'introduction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/notice/notice.module#NoticePageModule', name: 'school/notice', segment: 'notice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/school-info/school-info.module#SchoolInfoPageModule', name: 'school/schoolInfo', segment: 'school-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/school-intro/school-intro.module#SchoolIntroPageModule', name: 'school/schoolIntro', segment: 'school-intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/school/school.module#SchoolPageModule', name: 'school/school', segment: 'school', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/teacher-list/teacher-list.module#TeacherListPageModule', name: 'school/teacherList', segment: 'teacher-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/student-list/student-list.module#StudentListPageModule', name: 'school/studentList', segment: 'student-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'tabs', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/talk/chat/chat.module#ChatPageModule', name: 'talk/chat', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/talk/talk/talk.module#TalkPageModule', name: 'talk/talk', segment: 'talk', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_talk_talk_talk__["a" /* TalkOperator */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_minimize__["a" /* AppMinimize */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_11__providers__["h" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_11__providers__["f" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_11__providers__["e" /* GlobalData */],
                __WEBPACK_IMPORTED_MODULE_11__providers__["g" /* NativeService */],
                __WEBPACK_IMPORTED_MODULE_11__providers__["i" /* UpdateService */],
                __WEBPACK_IMPORTED_MODULE_11__providers__["j" /* WebSocketService */],
                __WEBPACK_IMPORTED_MODULE_11__providers__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_11__providers__["d" /* DbService */],
                __WEBPACK_IMPORTED_MODULE_14__jiguang_ionic_jpush__["a" /* JPush */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service_http_service__ = __webpack_require__(214);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__http_service_http_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service_storage_service__ = __webpack_require__(315);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__storage_service_storage_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GlobalData__ = __webpack_require__(309);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__GlobalData__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Constant__ = __webpack_require__(130);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__Constant__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__Constant__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__native_service_native_service__ = __webpack_require__(80);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__native_service_native_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update_service_update_service__ = __webpack_require__(666);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__update_service_update_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__websocket_websocket__ = __webpack_require__(667);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__websocket_websocket__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_service_chat_service__ = __webpack_require__(668);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__chat_service_chat_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__db_service_db_service__ = __webpack_require__(669);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__db_service_db_service__["a"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service_http_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__native_service_native_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Constant__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateService = (function () {
    function UpdateService(http, native) {
        this.http = http;
        this.native = native;
    }
    /**
     * 检查是否需要升级
     */
    UpdateService.prototype.checkUpgrade = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__Constant__["b" /* CHECK_UPDATE_URL */]).subscribe(function (data) {
                _this.native.getVersionNumber().then(function (version) {
                    if (_this.version2Int(version) < _this.version2Int(data.version)) {
                        resolve(data);
                    }
                    else {
                        resolve(null);
                    }
                });
            }, function (err) {
                resolve(null);
            });
        });
    };
    UpdateService.prototype.version2Int = function (version) {
        if (version.indexOf(".") == -1) {
            return parseInt(version);
        }
        var values = version.split(".", -1);
        var num = 0;
        values.forEach(function (value, index) {
            num = num + parseInt(value) * Math.pow(10, (values.length - index - 1) * 2);
        });
        return num;
    };
    /**
     * 检查app是否需要升级
     */
    UpdateService.prototype.detectionUpgrade = function () {
        var _this = this;
        this.checkUpgrade().then(function (version) {
            if (version) {
                _this.native.doUpdateVersion(version.url);
            }
        });
    };
    UpdateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_service_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__native_service_native_service__["a" /* NativeService */]])
    ], UpdateService);
    return UpdateService;
}());

//# sourceMappingURL=update-service.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebSocketService = (function () {
    function WebSocketService(storage) {
        this.storage = storage;
        this.onMsgSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.onMsg = this.onMsgSubject.asObservable();
        this.stateSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](0); //0-未连接  1-正在连接  2-已连接  9-连接失败
        this.onStateChange = this.stateSubject.asObservable();
        this.host = 'ws://localhost:8080/srzx-im/wx?userId=222';
        this.user = this.storage.read('user');
    }
    WebSocketService.prototype.connect = function () {
        var _this = this;
        return new Promise(function (promise, reject) {
            _this.socket = new WebSocket(_this.host);
            _this.stateSubject.next(1);
            _this.socket.onopen = function () {
                console.log('socket链接成功');
                _this.stateSubject.next(2);
                promise();
            };
            _this.socket.onmessage = function (msg) {
                console.log('收到信息：', msg);
                if (msg && msg.data) {
                    _this.onMsgSubject.next(JSON.parse(msg.data));
                }
            };
            _this.socket.onclose = function () {
                _this.stateSubject.next(0);
                console.log('断开连接');
            };
            _this.socket.onerror = function (msg) {
                console.log('链接出现异常');
                _this.stateSubject.next(9);
            };
        });
    };
    WebSocketService.prototype.sendMsg = function (msg) {
        if (this.socket && msg) {
            this.socket.send(JSON.stringify(msg));
        }
    };
    WebSocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers__["h" /* StorageService */]])
    ], WebSocketService);
    return WebSocketService;
}());

//# sourceMappingURL=websocket.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_service_native_service__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = (function () {
    function ChatService(nativeService) {
        this.nativeService = nativeService;
        this.onReciverMsgSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.onReciverMsg = this.onReciverMsgSubject.asObservable();
        this.onConversationUpdateSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.onConversationUpdate = this.onConversationUpdateSubject.asObservable();
    }
    ChatService.prototype.login = function (user, password) {
        var _this = this;
        return new Promise(function (resolver, reject) {
            if (_this.nativeService.isMobile()) {
                Chat.login(function (data) {
                    resolver();
                }, function (data) {
                    reject(data);
                }, user, password);
            }
            else {
                resolver();
            }
        });
    };
    ChatService.prototype.registerMsgListener = function () {
        var _this = this;
        if (this.nativeService.isMobile()) {
            Chat.registerMsgListener(function (data) {
                if (data && data.type) {
                    if (data.type == 1) {
                        if (data.data && data.data.length) {
                            _this.onReciverMsgSubject.next(data.data);
                        }
                    }
                    else if (data.type == 2) {
                        _this.onConversationUpdateSubject.next();
                    }
                }
            });
        }
    };
    ChatService.prototype.loadMessages = function (user, msgId, pageSize) {
        var _this = this;
        if (pageSize === void 0) { pageSize = 20; }
        return new Promise(function (resolver) {
            if (_this.nativeService.isMobile()) {
                Chat.loadMessages(function (data) {
                    resolver(data);
                }, null, user, msgId, pageSize);
            }
        });
    };
    ChatService.prototype.getUnreadMsgCount = function (user) {
        var _this = this;
        return new Promise(function (resolver) {
            if (_this.nativeService.isMobile()) {
                Chat.getUnreadMsgCount(function (data) {
                    resolver(data || 0);
                }, null, user);
            }
        });
    };
    /**
     * 加载会话列表
     */
    ChatService.prototype.loadConversations = function () {
        var _this = this;
        return new Promise(function (resolver) {
            if (_this.nativeService.isMobile()) {
                Chat.loadConversations(function (data) {
                    resolver(data);
                }, null);
            }
        });
    };
    /**
     * 发送文本消息
     * @param user
     * @param content
     * @param type
     */
    ChatService.prototype.sendTxtMsg = function (user, content, type) {
        if (this.nativeService.isMobile()) {
            Chat.sendTxtMsg(user, content, type);
        }
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__native_service_native_service__["a" /* NativeService */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DbService = (function () {
    function DbService(sqlite) {
        this.sqlite = sqlite;
    }
    DbService.prototype.createTable = function () {
        var _this = this;
        this.sqlite.create({
            name: 'school.db',
            location: 'default'
        }).then(function (db) {
            _this.db = db;
            db.executeSql("\n                CREATE TABLE IF NOT EXISTS group_info (id BIGINT primary key, eid varchar(50), name varchar(50), image varchar(100));\n                CREATE TABLE IF NOT EXISTS user_info (id BIGINT primary key, eid varchar(50), name varchar(20), image varchar(100));\n            ", {}).then(function () {
                console.log('=====create table=====');
            }).catch(function (e) { return console.error('create table failure====>' + e, e); });
            ;
        }).catch(function (e) {
            console.log('create db failure===>' + e, e);
        });
    };
    /**
     * 更新数据库
     * @param sql
     * @param params
     */
    DbService.prototype.executeUpdate = function (sql, params) {
        if (this.db) {
            this.db.executeSql(sql, params).then();
        }
    };
    /**
     * 批量更新数据
     * @param sql
     * @param params
     */
    DbService.prototype.executeBatch = function (sql, params) {
        if (this.db) {
            var batchParams_1 = [];
            params.forEach(function (value) {
                batchParams_1.push([sql, value]);
            });
            this.db.sqlBatch(batchParams_1);
        }
    };
    /**
     * 查询数据
     * @param sql
     * @param params
     */
    DbService.prototype.executeQuery = function (sql, params) {
        var _this = this;
        return new Promise(function (resolver) {
            if (_this.db) {
                _this.db.executeSql(sql, params).then(function (rs) {
                    if (rs.rows.length == 1) {
                        resolver(rs.rows.item(0));
                    }
                    else if (rs.rows.length) {
                        var data = [];
                        for (var i = 0; i < rs.rows.length; i++) {
                            data.push(rs.rows.item(i));
                        }
                        resolver(data);
                    }
                });
            }
        });
    };
    /**
     * 根据环信编号获取用户信息
     * @param eid
     */
    DbService.prototype.getUserByEid = function (eid) {
        return this.executeQuery('select * from user_info where eid = ?', [eid]);
    };
    /**
     * 根据环信编号获取群组信息
     * @param eid
     */
    DbService.prototype.getGroupByEid = function (eid) {
        return this.executeQuery('select * from group_info where eid = ?', [eid]);
    };
    DbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DbService);
    return DbService;
}());

//# sourceMappingURL=db-service.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jiguang_ionic_jpush__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Keyboard as Keyboard2 } from '@ionic-native/keyboard';




var MyApp = (function () {
    function MyApp(platform, keyboard1, 
        //private keyboard2: Keyboard2,
        ionicApp, app, statusBar, splashScreen, nativeService, chatService, dbService, jpush) {
        var _this = this;
        this.platform = platform;
        this.keyboard1 = keyboard1;
        this.ionicApp = ionicApp;
        this.app = app;
        this.nativeService = nativeService;
        this.chatService = chatService;
        this.dbService = dbService;
        this.jpush = jpush;
        this.rootPage = "tabs";
        this.backButtonPressed = false;
        platform.ready().then(function () {
            statusBar.styleDefault();
            _this.registerExistAppOnBackBtn();
            _this.loginChat();
            _this.dbService.createTable();
            _this.initJPush();
            splashScreen.hide();
        });
    }
    /**
     * 初始化极光推送
     */
    MyApp.prototype.initJPush = function () {
        if (!this.nativeService.isMobile()) {
            return;
        }
        this.jpush.init().then();
    };
    /**
     * 注册返回按钮
     */
    MyApp.prototype.registerExistAppOnBackBtn = function () {
        var _this = this;
        if (!this.nativeService.isAndroid()) {
            return;
        }
        this.platform.registerBackButtonAction(function () {
            if (_this.keyboard1.isOpen()) {
                _this.keyboard1.close();
                return;
            }
            //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
            // this.ionicApp._toastPortal.getActive() ||this.ionicApp._loadingPortal.getActive()|| this.ionicApp._overlayPortal.getActive()
            try {
                var activePortal = _this.ionicApp._modalPortal.getActive();
                if (activePortal) {
                    activePortal.dismiss();
                    return;
                }
                if (_this.ionicApp._toastPortal.getActive()) {
                    _this.ionicApp._toastPortal.getActive().dismiss();
                    return;
                }
                if (_this.ionicApp._loadingPortal.getActive()) {
                    _this.ionicApp._loadingPortal.getActive().dismiss();
                    return;
                }
                var activeVC = _this.app.getActiveNav();
                if (activeVC.canGoBack()) {
                    return activeVC.pop();
                }
                _this.showExit();
            }
            catch (e) {
                alert('出现系统异常' + e);
            }
        }, 1);
    };
    /**
     * 退出应用
     */
    MyApp.prototype.showExit = function () {
        var _this = this;
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            this.nativeService.showToast('再按一次退出应用');
            this.backButtonPressed = true;
            setTimeout(function () { return _this.backButtonPressed = false; }, 2000); //2秒内没有再次点击返回则将触发标志标记为false
        }
    };
    MyApp.prototype.loginChat = function () {
        var _this = this;
        this.chatService.login('test', 'test').then(function () {
            _this.chatService.registerMsgListener();
        }).catch(function (data) {
            console.log('登陆失败===>' + JSON.stringify(data));
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\WorkSpaceCampus\school\src\app\app.html"*/'<ion-nav #myNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\WorkSpaceCampus\school\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["g" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_5__jiguang_ionic_jpush__["a" /* JPush */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_minimize__ = __webpack_require__(314);
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
 * Created by yanxiaojun617@163.com on 12-27.
 */








var NativeService = (function () {
    function NativeService(platform, toastCtrl, alertCtrl, statusBar, splashScreen, appVersion, toast, network, appMinimize, loadingCtrl) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.appVersion = appVersion;
        this.toast = toast;
        this.network = network;
        this.appMinimize = appMinimize;
        this.loadingCtrl = loadingCtrl;
        this.loadingIsOpen = false;
    }
    NativeService.prototype.warn = function (info) {
        console.log('%cNativeService/' + info, 'color:#e8c406');
    };
    NativeService.prototype.doUpdateVersion = function (url) {
        var _this = this;
        this.alertCtrl.create({
            title: '升级',
            subTitle: '发现新版本,是否立即升级？',
            buttons: [{ text: '取消' },
                {
                    text: '确定',
                    handler: function () {
                        _this.downloadApp(url);
                    }
                }]
        }).present();
    };
    /**
     * 下载安装app
     */
    NativeService.prototype.downloadApp = function (url) {
        if (this.isAndroid()) {
            if (window['AppUpdate']) {
                window['AppUpdate'].update(url, 'school.apk');
            }
        }
    };
    /**
     * 是否真机环境
     * @return {boolean}
     */
    NativeService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    NativeService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    NativeService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    NativeService.prototype.showToast = function (message, duration) {
        if (message === void 0) { message = '操作完成'; }
        if (duration === void 0) { duration = 2000; }
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'bottom').subscribe();
        }
        else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'middle',
                showCloseButton: false
            }).present();
        }
    };
    ;
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    NativeService.prototype.showLoading = function (content) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (!this.loadingIsOpen) {
            this.loadingIsOpen = true;
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
            setTimeout(function () {
                _this.loadingIsOpen && _this.loading.dismiss();
                _this.loadingIsOpen = false;
            }, 10000);
        }
    };
    ;
    /**
     * 关闭loading
     */
    NativeService.prototype.hideLoading = function () {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
    };
    ;
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    NativeService.prototype.getNetworkType = function () {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return this.network.type;
    };
    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    NativeService.prototype.isConnecting = function () {
        return this.getNetworkType() != 'none';
    };
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionNumber().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getVersionNumber:' + err);
            });
        });
    };
    /**
     * 获得app name,如ionic2_tabs
     * @description  对应/config.xml中name的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getAppName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getAppName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getAppName:' + err);
            });
        });
    };
    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getPackageName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getPackageName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getPackageName:' + err);
            });
        });
    };
    /**
     * 使用默认状态栏
     */
    NativeService.prototype.statusBarStyleDefault = function () {
        this.statusBar.styleDefault();
    };
    /**
     * 隐藏启动页面
     */
    NativeService.prototype.splashScreenHide = function () {
        this.splashScreen.hide();
    };
    /**
     * 调用最小化app插件
     */
    NativeService.prototype.minimize = function () {
        this.appMinimize.minimize();
    };
    NativeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_minimize__["a" /* AppMinimize */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], NativeService);
    return NativeService;
}());

//# sourceMappingURL=native-service.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map