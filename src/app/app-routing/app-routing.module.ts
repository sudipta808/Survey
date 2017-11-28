import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { ForgotPasswordComponent } from 'app/forgot-password/forgot-password.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { dashboardRoutes } from 'app/app-routing/dashboard-routing';

const indexRoute: Route = {
  path: 'login', 
  component: LoginComponent 
};

const forgotPasswordRoute: Route = {
  path: 'forgotPassword',
  component: ForgotPasswordComponent
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  indexRoute,
  forgotPasswordRoute,
  ...dashboardRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
