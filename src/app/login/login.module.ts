import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'app/login/login.component';
import { ForgotPasswordComponent } from 'app/forgot-password/forgot-password.component';
import { SigininComponent } from 'app/login/signin/signin.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from 'app/login/signup/signup.component';

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
  exports: [
  ]
})
export class LoginModule { }
