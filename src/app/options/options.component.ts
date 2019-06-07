import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CookieService} from 'ngx-cookie-service';

@Component({
	selector: 'dom-options',
	templateUrl: './options.component.html',
	styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

	@Output() changeSets = new EventEmitter<string[]>();
	@Output() changeSort = new EventEmitter<boolean>();
	@Output() changePromos = new EventEmitter<string[]>();
	allSets: string[] = ['Dominion', 'Intrigue', 'Seaside', 'Alchemy', 'Prosperity', 'Cornucopia', 'Hinterlands', 'Dark Ages', 'Guilds', 'Adventures', 'Empires', 'Nocturne', 'Renaissance', 'Promo'];
	selectedSets: string[] = ['Dominion', 'Intrigue', 'Seaside', 'Prosperity', 'Hinterlands', 'Dark Ages', 'Adventures', 'Empires', 'Nocturne', 'Renaissance', 'Promo'];
	allPromos: string[] = ['Black Market', 'Dismantle', 'Envoy', 'Governor', 'Prince', 'Sauna/Avanto', 'Stash', 'Summon', 'Walled Village'];
	selectedPromos: string[] = ['Governor', 'Sauna/Avanto', 'Summon'];
	panelOpen: boolean;
	sortBySet = true;

	constructor(private cookieService: CookieService) {
	}

	ngOnInit() {
		this.panelOpen = false;

		if (this.cookieService.check('sets'))
			this.selectedSets = this.cookieService.get('sets').split(':');
		else
			this.cookieService.set('sets', this.selectedSets.join(':'));
		this.changeSets.emit(this.selectedSets);

		if (this.cookieService.check('promos'))
			this.selectedPromos = this.cookieService.get('promos').split(':');
		else
			this.cookieService.set('promos', this.selectedPromos.join(':'));
		this.changePromos.emit(this.selectedPromos);

		if (this.cookieService.check('sort'))
			this.sortBySet = (this.cookieService.get('sort') === 'yes');
		else
			this.cookieService.set('sort', (this.sortBySet ? 'yes' : 'no'));
		this.changeSort.emit(this.sortBySet);
	}

	changeSet(setName): void {
		const i = this.selectedSets.indexOf(setName);
		if (i === -1) this.selectedSets.push(setName);
		else this.selectedSets.splice(i, 1);
		this.cookieService.set('sets', this.selectedSets.join(':'));
		this.changeSets.emit(this.selectedSets);
	}

	changePromo(cardName): void {
		const i = this.selectedPromos.indexOf(cardName);
		if (i === -1) this.selectedPromos.push(cardName);
		else this.selectedPromos.splice(i, 1);
		this.cookieService.set('promos', this.selectedPromos.join(':'));
		this.changePromos.emit(this.selectedPromos);
	}

	changeSorting(bySet: boolean): void {
		this.cookieService.set('sort', (this.sortBySet ? 'yes' : 'no'));
		this.changeSort.emit(bySet);
	}
}
