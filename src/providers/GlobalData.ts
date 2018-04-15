import {Injectable} from '@angular/core';

@Injectable()
export class GlobalData {

    private _user:any;

    set user(_user:any) {
        this._user = _user;
    }

    get user() {
        return this._user;
    }

    get token() {
        if(this._user) {
            return this._user.token;
        }
        return null;
    }


}