import { Routes, Route } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { SideMenuComponent } from 'app/side-menu/side-menu.component';
import { SurveyComponent } from 'app/survey/survey.component';
import { AnalyticsComponent } from 'app/analytics/analytics.component';
import { ContactComponent } from 'app/contact/contact.component';
import { AuthGuard } from 'app/common/guard/authGuard/auth-guard.service';

export const dashboardRoutes: Routes = [
    {
        path: 'home',
        component: SideMenuComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'survey',
                component: SurveyComponent
            },
            {
                path: 'analytics',
                component: AnalyticsComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            },
        ]
    }
];