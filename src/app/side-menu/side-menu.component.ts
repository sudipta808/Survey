import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  private isClosed: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('home/dashboard');
  }

  closeSideMenu() {
    if(this.isClosed) {
      this.isClosed = false;
    }
    else {
      this.isClosed = true;
    }
  }

}
