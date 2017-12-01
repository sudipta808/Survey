import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.router.navigate(['signin'], {relativeTo: this.route, skipLocationChange: true});
  }
}
