import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from './card';
import { CARDS } from './cards';
import { PERMANENTS } from './permanents';

@Injectable({
	providedIn: 'root'
})
export class CardService {

	constructor() {}

	getCards(): Observable<Card[]> {
		return of(CARDS);
	}
	getPermanents(): Observable<Card[]> {
		return of(PERMANENTS);
	}
}
