import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from './card';
import { CARDS } from './cards';
import { EVENTS } from './events';
import { LANDMARKS } from './landmarks';
import { PROJECTS } from './projects';

@Injectable({
	providedIn: 'root'
})
export class CardService {

	constructor() { }

	getCards(): Observable<Card[]> {
		return of(CARDS);
	}
	getEvents(): Observable<Card[]> {
		return of(EVENTS);
	}
	getLandmarks(): Observable<Card[]> {
		return of(LANDMARKS);
	}
	getProjects(): Observable<Card[]> {
		return of(PROJECTS);
	}
}
