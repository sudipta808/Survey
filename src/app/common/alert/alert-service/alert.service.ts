import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Alert, AlertType } from '../model/alert.model';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class AlertService {
    private subject = new Subject<Alert>();
    private keepAfterRouterChange = false;

    constructor(private router: Router) {
        router.events.subscribe((event) => {
            if(event instanceof NavigationStart) {
                if(this.keepAfterRouterChange)
                    this.keepAfterRouterChange = false;
                else 
                    this.clear();
            }
        })
    }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    alert(type: AlertType, message: string, keepAfterRouteChange = false) {
        this.keepAfterRouterChange = keepAfterRouteChange;
        this.subject.next(<Alert>{ type: type, message: message });
    }

    success(message: string, keepAfterRouterChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouterChange);
    }

    error(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }

    info(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }

    warn(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }

    clear() {
        this.subject.next();
    }
}