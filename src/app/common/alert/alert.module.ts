import { NgModule } from '@angular/core';
import { AlertComponent } from './alert-component/alert.component';
import { AlertService } from './alert-service/alert.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule ({
    imports: [
        BrowserModule
    ],
    declarations: [
        AlertComponent
    ],
    exports: [
        AlertComponent
    ],
    providers: [
        AlertService
    ]
})

export class AlertModule {}