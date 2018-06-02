import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { SideMenuComponent } from 'app/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { SurveyComponent } from 'app/survey/survey.component';
import { AnalyticsComponent } from 'app/analytics/analytics.component';
import { ContactComponent } from 'app/contact/contact.component';
import { BtCardComponent } from 'app/common/card-component/card.component';
import { SafePipe } from 'app/common/pipe/common.pipe';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent,
    SideMenuComponent,
    SurveyComponent,
    AnalyticsComponent,
    ContactComponent,
    BtCardComponent,
    SafePipe
  ]
})
export class DashboardModule { }
