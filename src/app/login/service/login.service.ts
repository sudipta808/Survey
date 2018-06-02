import { Injectable } from '@angular/core';
import { HTTPService } from 'app/common/services/http.service';
import { Observable } from 'rxjs/Observable';
import { LoginUserModel } from '../model/login.model';

@Injectable()
export class LoginService {
    private userName;

    constructor(private _http: HTTPService){

    }

    setUserName(name: string): void {
        this.userName = name;
    }

    getUserName(): string {
        return this.userName;
    }

    public getLoginData(): Observable<any> {
        return this._http.doGETCall('LOGIN').map((data) => {
            return data.json() as LoginUserModel;
        });
    }

    public uploadProfilePic(): Observable<any> {
        return this._http.doGETCall('CATEGORY');
    }
}