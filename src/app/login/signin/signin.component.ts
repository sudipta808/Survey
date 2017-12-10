import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/login/service/login.service';

@Component({
    selector: "signin",
    templateUrl: "./signin.component.html",
    styleUrls: ["./signin.component.scss"]
})

export class SigininComponent {

    private loginForm: FormGroup;
    private userCredentials: any = {
      userName: "",
      userPassword: "",
      isRemember: false
    };
    private userCredentialCopy: any;
    public static PERSONAL_INFO_EMAIL_REGEX: RegExp = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]+[a-zA-Z](?:[a-zA-Z-]*[a-zA-Z])?$/;
    protected emailRegex = SigininComponent.PERSONAL_INFO_EMAIL_REGEX;
  
    constructor(private router: Router, 
                private formBuilder: FormBuilder,
                private loginService: LoginService) {
      this.loginForm = formBuilder.group({
        userName: [{value: ""}, Validators.compose([Validators.pattern(this.emailRegex)])],
        password: [{value: ""}, Validators.compose([Validators.required, Validators.minLength(6)])],
        isRemember: [{value: false}]
      });
    }
  
    ngOnInit() {
      this.userCredentials.userName = "";
      this.userCredentials.userPassword = "";
  
      this.userCredentialCopy = Object.assign({}, this.userCredentials);
    }
  
    forgotPassword() {
      console.log("Forgot Password clicked!!");
      this.router.navigateByUrl('/forgotPassword');
    }
  
    loginButtonAction() {

      this.loginService.getLoginData().subscribe((response) => {
        console.log("Response: ", response);
      })

      if(this.loginForm.valid) {
        console.log("Updated object: ", this.userCredentials);
        this.router.navigateByUrl('/home');
      }
    }

}