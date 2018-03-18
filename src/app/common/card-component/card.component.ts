import { Component, Input } from "@angular/core";

@Component({
    selector: 'bt-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.scss']
})

export class BtCardComponent {
    @Input() cardTitle: string;
    constructor() {}
}