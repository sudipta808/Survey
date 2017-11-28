import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { SideMenuComponent } from 'app/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { SurveyComponent } from 'app/survey/survey.component';
import { AnalyticsComponent } from 'app/analytics/analytics.component';
import { ContactComponent } from 'app/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent,
    SideMenuComponent,
    SurveyComponent,
    AnalyticsComponent,
    ContactComponent
  ]
})
export class DashboardModule { }
