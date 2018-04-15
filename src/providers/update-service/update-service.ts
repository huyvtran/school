import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../http-service/http-service';
import { NativeService } from '../native-service/native-service';
import { CHECK_UPDATE_URL } from '../Constant';


@Injectable()
export class UpdateService {

    constructor(
        public http: HttpService,
        private native: NativeService
    ) {

    }

    /**
     * 检查是否需要升级
     */
    checkUpgrade(): Promise<any> {
        return new Promise<any>((resolve) => {
            this.http.get(CHECK_UPDATE_URL).subscribe((data: any) => {
                this.native.getVersionNumber().then((version: string) => {
                    if (this.version2Int(version) < this.version2Int(data.version)) {
                        resolve(data);
                    } else {
                        resolve(null);
                    }
                });
            }, err => {
                resolve(null);
            });
        });
    }

    version2Int(version: string) {
        if(version.indexOf(".") == -1) {
            return parseInt(version);
        }
        let values:Array<string> = version.split(".", -1);
        let num = 0;
        values.forEach((value, index) => {
            num = num + parseInt(value) * Math.pow(10, (values.length - index - 1) * 2);
        });
        return num;
    }

    /**
     * 检查app是否需要升级
     */
    detectionUpgrade(): void {
        this.checkUpgrade().then((version: any) => {
            if(version) {
                this.native.doUpdateVersion(version.url);
            }
        });
    }

}
