import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppVersion } from '@ionic-native/app-version';
import { Toast } from '@ionic-native/toast';
import { Network } from '@ionic-native/network';
import { AppMinimize } from '@ionic-native/app-minimize';

import { HttpModule } from '@angular/http';
import { StorageService, HttpService, GlobalData, NativeService, UpdateService, WebSocketService, ChatService, DbService} from '../providers';
import { TalkOperator } from '../pages/talk/talk/talk';
import { SQLite } from '@ionic-native/sqlite';
import { JPush } from '@jiguang-ionic/jpush';


@NgModule({
    declarations: [
        MyApp,
        TalkOperator
    ],
    imports: [
        HttpModule,
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            tabsHideOnSubPages: 'true',
            pageTransition: 'ios-transition',
            backButtonIcon: 'arrow-back',
            backButtonText: '',
            mode: 'ios',
            swipeBackEnabled: true
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TalkOperator
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        AppVersion,
        Toast,
        Network,
        AppMinimize,
        SQLite,
        StorageService,
        HttpService,
        GlobalData,
        NativeService,
        UpdateService,
        WebSocketService,
        ChatService,
        DbService,
        JPush
    ]
})
export class AppModule { }
