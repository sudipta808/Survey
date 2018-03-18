import { Component, OnInit } from '@angular/core';
import { Alert, AlertType } from '../model/alert.model';
import { AlertService } from '../alert-service/alert.service';

@Component ({
    moduleId: module.id,
    selector: 'bt-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.scss']
})

export class AlertComponent implements OnInit {
    alerts: Alert[] = [];

    constructor(private alertService: AlertService) {

    }

    ngOnInit() {
        this.alertService.getAlert().subscribe((alert: Alert) => {
            if(!alert) {
                this.alerts = [];
                return;
            }

            this.alerts.push(alert);
        })
    }

    removeAlert(alert: Alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }

    cssClass(alert: Alert) {
        if (!alert) {
            return;
        }

        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
}