import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private differentComponentArray: Array<any> = [
    { itemName: "Redux Application", isChecked: true },
    { itemName: "Chat Bot with overflow screen", isChecked: false },
    { itemName: "Chat window like web tab", isChecked: false },
    { itemName: "SEO integration", isChecked: false },
    { itemName: "Custom controller in formGroup", isChecked: false }
  ];

  private cardDataSource: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.differentComponentArray.forEach((item: any) => {
      this.drawCards(item);
    });
  }

  onCheckboxChange(item: any): void {
    item.isChecked = !item.isChecked;
    this.drawCards(item);
  }

  drawCards(item: any): void {
    if(item.isChecked) {
      this.cardDataSource.push(item);
    } else {
      const index: number = this.cardDataSource.indexOf(item);
      if(index != -1) {
        this.cardDataSource.splice(index, 1);
      }
    }
  }

}
