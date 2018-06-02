import { Routes } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { Component } from '@angular/core/src/metadata/directives';
import { SigininComponent } from 'app/login/signin/signin.component';
import { SignupComponent } from 'app/login/signup/signup.component';

export const loginRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        children: [
            {
                path: 'signin',
                component: SigininComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            }
        ]
    }
];