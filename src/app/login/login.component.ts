import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.setUserName('');

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate(['signin']);
  }
}
