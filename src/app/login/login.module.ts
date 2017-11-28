import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'app/login/login.component';
import { ForgotPasswordComponent } from 'app/forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    ForgotPasswordComponent
  ],
  exports: [
  ]
})
export class LoginModule { }