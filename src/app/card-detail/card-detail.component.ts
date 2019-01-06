import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
	selector: 'dom-card-detail',
	templateUrl: './card-detail.component.html',
	styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

	@Input() card: Card;
	front = true;

	constructor() {}

	ngOnInit() {}

}
