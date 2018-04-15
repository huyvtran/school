/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Platform, Loading, AlertController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { Toast } from '@ionic-native/toast';
import { Network } from '@ionic-native/network';
import { AppMinimize } from "@ionic-native/app-minimize";

@Injectable()
export class NativeService {
    private loading: Loading;
    private loadingIsOpen: boolean = false;

    constructor(private platform: Platform,
        private toastCtrl: ToastController,
        private alertCtrl: AlertController,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen,
        private appVersion: AppVersion,
        private toast: Toast,
        private network: Network,
        private appMinimize: AppMinimize,
        private loadingCtrl: LoadingController
    ) {
    }

    warn(info): void {
        console.log('%cNativeService/' + info, 'color:#e8c406');
    }

    doUpdateVersion(url: string):void {
        this.alertCtrl.create({
            title: '升级',
            subTitle: '发现新版本,是否立即升级？',
            buttons: [{ text: '取消' },
            {
                text: '确定',
                handler: () => {
                    this.downloadApp(url);
                }
            }]
        }).present();
    }

    /**
     * 下载安装app
     */
    downloadApp(url: string): void {
        if (this.isAndroid()) {
            if(window['AppUpdate']) {
                window['AppUpdate'].update(url, 'school.apk');
            }
        }
    }

    /**
     * 是否真机环境
     * @return {boolean}
     */
    isMobile(): boolean {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    }

    /**
     * 是否android真机环境
     * @return {boolean}
     */
    isAndroid(): boolean {
        return this.isMobile() && this.platform.is('android');
    }

    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    isIos(): boolean {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    }

    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    showToast(message: string = '操作完成', duration: number = 2000): void {
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'bottom').subscribe();
        } else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'middle',
                showCloseButton: false
            }).present();
        }
    };


    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    showLoading(content: string = ''): void {
        if (!this.loadingIsOpen) {
            this.loadingIsOpen = true;
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
            setTimeout(() => {//最长显示10秒
                this.loadingIsOpen && this.loading.dismiss();
                this.loadingIsOpen = false;
            }, 10000);
        }
    };

    /**
     * 关闭loading
     */
    hideLoading(): void {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
    };


    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    getNetworkType(): string {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return this.network.type;
    }

    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    isConnecting(): boolean {
        return this.getNetworkType() != 'none';
    }

    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    getVersionNumber(): Promise<string> {
        return new Promise((resolve) => {
            this.appVersion.getVersionNumber().then((value: string) => {
                resolve(value);
            }).catch(err => {
                this.warn('getVersionNumber:' + err);
            });
        });
    }

    /**
     * 获得app name,如ionic2_tabs
     * @description  对应/config.xml中name的值
     * @returns {Promise<string>}
     */
    getAppName(): Promise<string> {
        return new Promise((resolve) => {
            this.appVersion.getAppName().then((value: string) => {
                resolve(value);
            }).catch(err => {
                this.warn('getAppName:' + err);
            });
        });
    }

    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     * @returns {Promise<string>}
     */
    getPackageName(): Promise<string> {
        return new Promise((resolve) => {
            this.appVersion.getPackageName().then((value: string) => {
                resolve(value);
            }).catch(err => {
                this.warn('getPackageName:' + err);
            });
        });
    }

    /**
     * 使用默认状态栏
     */
    statusBarStyleDefault() {
        this.statusBar.styleDefault();
    }

    /**
     * 隐藏启动页面
     */
    splashScreenHide() {
        this.splashScreen.hide();
    }

    /**
     * 调用最小化app插件
     */
    minimize() {
        this.appMinimize.minimize()
    }

}
