import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/login/service/login.service';
import { AlertService } from '../../common/alert/alert-service/alert.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    providers: [CookieService]
})

export class SigininComponent {

    private loginForm: FormGroup;
    private userCredentials: any = {
      userName: '',
      userPassword: '',
      isRemember: false
    };
    private userCredentialCopy: any;
    // tslint:disable-next-line:max-line-length
    public static PERSONAL_INFO_EMAIL_REGEX: RegExp = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]+[a-zA-Z](?:[a-zA-Z-]*[a-zA-Z])?$/;
    protected emailRegex = SigininComponent.PERSONAL_INFO_EMAIL_REGEX;

    constructor(private router: Router, 
                private formBuilder: FormBuilder,
                private loginService: LoginService,
                private alertService: AlertService,
                private cookieService: CookieService) {
      this.loginForm = formBuilder.group({
        userName: [{value: ''}, Validators.compose([Validators.pattern(this.emailRegex)])],
        password: [{value: ''}, Validators.compose([Validators.required, Validators.minLength(6)])],
        isRemember: [{value: false}]
      });
    }

    ngOnInit() {
      const cookieExists: boolean = this.cookieService.check('username');
      if (cookieExists) {
        this.userCredentials.userName = this.cookieService.get('username');
        this.userCredentials.userPassword = this.cookieService.get('password');
        this.userCredentials.isRemember = this.cookieService.get('remember');
      } else {
        this.userCredentials.userName = '';
        this.userCredentials.userPassword = '';
      }

      this.userCredentialCopy = Object.assign({}, this.userCredentials);
    }

    forgotPassword() {
      console.log('Forgot Password clicked!!');
      this.router.navigateByUrl('/forgotPassword');
    }

    loginButtonAction() {
      if(this.loginForm.valid) {
        console.log('Updated object: ', this.userCredentials);
        this.loginService.getLoginData().subscribe((response) => {
          console.log('Response: ', response);
          if (response.username === this.userCredentials.userName &&
              response.Password === this.userCredentials.userPassword) {
              this.onIsRememberChange(this.userCredentials.isRemember);
              this.loginService.setUserName(response.username);
              this.router.navigateByUrl('/home/dashboard');
          } else {
            this.alertService.error('Invalid Credential, please try again.');
          }
        });
      } else {
        this.alertService.warn('Please enter login credentials');
      }
    }

    onIsRememberChange(event: any) {
      if (event) {
        this.cookieService.set('username', this.userCredentials.userName);
        this.cookieService.set('password', this.userCredentials.userPassword);
        this.cookieService.set('remember', this.userCredentials.isRemember);
      } else {
        this.cookieService.deleteAll();
      }
    }

}