import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'app/login/login.component';
import { SigininComponent } from 'app/login/signin/signin.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from 'app/login/signup/signup.component';
import { ForgotPasswordComponent } from 'app/login/forgot-password/forgot-password.component';
import { LoginService } from 'app/login/service/login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    SigininComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  exports: [],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
