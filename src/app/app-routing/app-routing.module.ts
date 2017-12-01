import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { ForgotPasswordComponent } from 'app/forgot-password/forgot-password.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { dashboardRoutes } from 'app/app-routing/dashboard-routing';
import { loginRoutes } from 'app/app-routing/login-routing';

const forgotPasswordRoute: Route = {
  path: 'forgotPassword',
  component: ForgotPasswordComponent
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login/signin',
    pathMatch: 'full'
  },
  ...loginRoutes,
  forgotPasswordRoute,
  ...dashboardRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      { 
        useHash: true,
        enableTracing: true 
      },
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
