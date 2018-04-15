import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { Observable } from "rxjs";

import 'rxjs/add/operator/toPromise';

import { APP_SERVE_URL } from '../Constant'
import { GlobalData } from "../GlobalData";
import { NativeService } from '../native-service/native-service';
import { StorageService } from '../storage-service/storage-service';

@Injectable()
export class HttpService {

    constructor(
        public http: Http,
        public toastCtrl: ToastController,
        private nativeService: NativeService,
        private globalData: GlobalData,
        private storageService: StorageService
    ) {

    }

    public request(url: string, options: RequestOptionsArgs): Observable<Response> {

        url = HttpService.replaceUrl(url);
        if (options.headers) {
            options.headers.append('Authentication', '*');
            options.headers.append('X-Requested-With', '*');
            options.headers.append('token', this.globalData.token);
        } else {
            options.headers = new Headers({
                'token': this.globalData.token,
                'Authentication': '*',
                'X-Requested-With': '*'
            });
        }
        return Observable.create((observer) => {
            console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
            this.http.request(url, options).subscribe(res => {
                console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
                let code = res.headers.get('code');
                console.log('header==>', res.headers.toJSON())
                console.log('code===>' + code);
                if (code) {
                    if (code == '1000') {
                        this.showError('未登录')
                    } else if (code != '0') {
                        observer.error();
                        let msg = res.headers.get('msg');
                        if (msg) {
                            this.showError(decodeURIComponent(msg));
                        } else {
                            this.showError('系统异常');
                        }
                    } else {
                        observer.next(res.json());
                    }
                } else {
                    observer.next(res.json());
                }
            }, err => {
                this.handleError(url, options, err);//处理请求失败
            });
        });
    }

    public get(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Get,
            search: HttpService.buildURLSearchParams(paramMap)
        }));
    }

    public post(url: string, body: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Post,
            body: body,
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }));
    }

    public postFormData(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Post,
            params: HttpService.buildURLSearchParams(paramMap),
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        }));
    }

    public put(url: string, body: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Put,
            body: body
        }));
    }

    public delete(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Delete,
            search: HttpService.buildURLSearchParams(paramMap).toString()
        }));
    }

    public patch(url: string, body: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Patch,
            body: body
        }));
    }

    public head(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Head,
            search: HttpService.buildURLSearchParams(paramMap).toString()
        }));
    }

    public options(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Options,
            search: HttpService.buildURLSearchParams(paramMap).toString()
        }));
    }


    private handleError(url: string, options: RequestOptionsArgs, error: Response) {
        let status = error.status;
        let msg = null;
        console.log('handleError:status====>', status);
        if(status == 500) {
            let headers = error.headers;
            let code = headers.get('code');
            console.log('handleError:code====>', code);
            if(code && code != '0') {
                if(code == '1001') {
                    this.storageService.remove('user');
                } else {
                    msg = headers.get('msg');
                    if (msg) {
                        msg = decodeURIComponent(msg);
                    }
                }
            }
            if(!msg) {
                msg = '系统异常';
            }
        }
        if(msg) {
            this.showError(msg);
        }
        // let res = error.headers
        // console.log('status==>', status);
        // if (typeof res.then != 'undefined') {
        //     res.then(data => this.showError(data));
        // } else {
        //     this.showError();
        // }

    }

    public showError(msg: string = '网络不给力') {
        this.nativeService.showToast(msg);
    }

    private static replaceUrl(url) {
        if (url.indexOf('http://') == -1) {
            url = APP_SERVE_URL + url;
        }
        return 'http://' + url.substring(7).replace(/\/\//g, '/');
    }

    /**
   * 将对象转为查询参数
   * @param paramMap
   * @returns {URLSearchParams}
   */
    private static buildURLSearchParams(paramMap): URLSearchParams {
        let params = new URLSearchParams();
        if (!paramMap) {
            return params;
        }
        for (let key in paramMap) {
            let val = paramMap[key];
            params.set(key, val);
        }
        return params;
    }


}
