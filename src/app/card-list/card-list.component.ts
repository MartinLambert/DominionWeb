import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { Game } from '../game';
import { CardService } from '../card.service';

@Component({
	selector: 'dom-card-list',
	templateUrl: './card-list.component.html',
	styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

	kingdom: Game;
	supply: Game;
	selectedCard: Card;
	obeliskChoice: Card;
	baneChoice: Card;
	selectedSets: string[];
	sortBySet: boolean;

	constructor(private cardService: CardService) { }

	ngOnInit() {
		this.kingdom = new Game();
		this.supply = new Game();
		this.resetSupply();
		this.resetSetup();
		this.getCards();
	}

	getCards(): void {
		this.cardService.getCards().subscribe((cards: Card[]) => this.kingdom.cards = cards);
		this.cardService.getEvents().subscribe(events => this.kingdom.events = events);
		this.cardService.getLandmarks().subscribe(landmarks => this.kingdom.landmarks = landmarks);
		this.cardService.getProjects().subscribe(projects => this.kingdom.projects = projects);
	}

	randomize(): void {
		this.resetSupply();
		this.selectedCard = null;

		let cardsOK = false;
		while (!cardsOK) {
			while (this.supply.cards.length < 10)
				this.addCard();
			const costs = this.supply.cards.map(({ cost }) => cost.coin);
			cardsOK = costs.includes(3) && costs.includes(4) && costs.includes(5);
			if (!cardsOK)
				this.supply.cards = [];
		}

		let numEvents = 0;
		let theRand = Math.random();
		// Events only occur in Adventures, Empires, and one Promo card. There is a 25% chance of having no events, 50% of one event, and 25% chance of two.
		if (this.selectedSets.includes('Adventures') || this.selectedSets.includes('Empires') || this.selectedSets.includes('Promo')) {
			if (theRand > 0.25) numEvents++;
			if ((theRand > 0.75) && (this.selectedSets.includes('Adventures') || this.selectedSets.includes('Empires')))
				numEvents++;
		}
		while (this.supply.events.length < numEvents)
			this.addEvent();

		let numLandmarks = 0;
		// Landmarks only occur in Empires. There is a 50% chance of no landmarks, 25% of one, and 25% of two.
		if (this.selectedSets.includes('Empires')) {
			theRand = Math.random();
			if (theRand > 0.5) numLandmarks++;
			if (theRand > 0.75) numLandmarks++;
		}
		while (this.supply.landmarks.length < numLandmarks)
			this.addLandmark();

		let numProjects = 0;
		// Projects only occur in Renaissance. There is a 50% chance of no projects, 25% of one, and 25% of two.
		if (this.selectedSets.includes('Renaissance')) {
			theRand = Math.random();
			if (theRand > 0.5) numProjects++;
			if (theRand > 0.75) numProjects++;
		}
		while (this.supply.projects.length < numProjects)
			this.addProject();

		this.doSetup();
	}

	randomCard(): Card {
		// returns a single random Kingdom card from one of the allowed sets
		let newCard: Card;
		let badCard = true;
		while (badCard) {
			newCard = this.kingdom.cards[Math.floor(Math.random() * this.kingdom.cards.length)];
			badCard = !this.selectedSets.includes(newCard.set);
		}
		return newCard;
	}

	addCard(): Card {
		const newCard: Card = this.randomCard();
		let cardOK = true;
		let insertIndex = 0;
		for (const card of this.supply.cards) {
			if (newCard === card) cardOK = false;
			if (this.sortBySet) {
				if (card.id < newCard.id) insertIndex++;
			} else
			if (card.name < newCard.name) insertIndex++;
		}
		if (cardOK) {
			this.supply.cards.splice(insertIndex, 0, newCard);
			return newCard;
		} else return null;
	}
	addEvent(): Card {
		const newCard: Card = this.kingdom.events[Math.floor(Math.random() * this.kingdom.events.length)];
		if (!this.selectedSets.includes(newCard.set)) return null;
		if (this.supply.events.length && this.supply.events[0] !== newCard) {
			if (newCard.name < this.supply.events[0].name)
				this.supply.events.splice(0, 0, newCard);
			else
				this.supply.events.push(newCard);
		} else
			this.supply.events[0] = newCard;
		return newCard;
	}
	addLandmark(): Card {
		const newCard: Card = this.kingdom.landmarks[Math.floor(Math.random() * this.kingdom.landmarks.length)];
		if (this.supply.landmarks.length && this.supply.landmarks[0] !== newCard) {
			if (newCard.name < this.supply.landmarks[0].name)
				this.supply.landmarks.splice(0, 0, newCard);
			else
				this.supply.landmarks.push(newCard);
		} else
			this.supply.landmarks[0] = newCard;
		return newCard;
	}
	addProject(): Card {
		const newCard: Card = this.kingdom.projects[Math.floor(Math.random() * this.kingdom.landmarks.length)];
		if (this.supply.projects.length && this.supply.projects[0] !== newCard) {
			if (newCard.name < this.supply.projects[0].name)
				this.supply.projects.splice(0, 0, newCard);
			else
				this.supply.projects.push(newCard);
		} else
			this.supply.projects[0] = newCard;
		return newCard;
	}

	swapCard(card): void {
		let newCard: Card;
		if (card.cardType[0] === 'Event') {
			this.supply.events.forEach((c, i) => {
				if (c === card) this.supply.events.splice(i, 1);
			});
			do {
				newCard = this.addEvent();
			} while (!newCard);
			this.selectedCard = newCard;
		} else if (card.cardType[0] === 'Landmark') {
			this.supply.landmarks.forEach((c, i) => {
				if (c === card) this.supply.landmarks.splice(i, 1);
			});
			this.selectedCard = this.addLandmark();
		} else if (card.cardType[0] === 'Project') {
			this.supply.projects.forEach((c, i) => {
				if (c === card) this.supply.projects.splice(i, 1);
			});
			this.selectedCard = this.addProject();
		} else {
			this.supply.cards.forEach((c, i) => {
				if (c === card) this.supply.cards.splice(i, 1);
			});
			do {
				newCard = this.addCard();
			} while (!newCard);
			this.selectedCard = newCard;
		}
		this.doSetup();
	}

	doSetup(): void {
		this.resetSetup();
		for (const card of this.supply.cards)
			this.checkCard(card);
		for (const card of this.supply.events)
			this.checkCard(card);
		for (const card of this.supply.landmarks)
			this.checkCard(card);
		for (const card of this.supply.projects)
			this.checkCard(card);
		if (this.supply.setup.numDarkAges > Math.random() * 10) this.supply.setup.shelters = true;
		if (this.supply.setup.numProsperity > Math.random() * 10) this.supply.setup.platCol = true;
		if (this.supply.setup.bane) {
			do {
				this.baneChoice = this.randomCard();
			} while (this.supply.cards.includes(this.baneChoice));
		}
		do {
			this.obeliskChoice = this.supply.cards[Math.floor(Math.random() * 10)];
		} while (!this.obeliskChoice.cardType.includes('Action'));
	}

	checkCard(card): void {
		if (card.setup.VP) this.supply.setup.VP = true;
		if (card.setup.debt) this.supply.setup.debt = true;
		if (card.setup.spoils) this.supply.setup.spoils = true;
		if (card.setup.ruins) this.supply.setup.ruins = true;
		if (card.setup.coins) this.supply.setup.coins = true;
		if (card.setup.coffers) this.supply.setup.coffers = true;
		if (card.setup.villagers) this.supply.setup.villagers = true;
		if (card.setup.tavernMats) this.supply.setup.tavernMats = true;
		if (card.setup.journey) this.supply.setup.journey = true;
		if (card.setup.trashing) this.supply.setup.trashing = true;
		if (card.setup.estate) this.supply.setup.estate = true;
		if (card.setup.plusCard) this.supply.setup.plusCard = true;
		if (card.setup.plusAction) this.supply.setup.plusAction = true;
		if (card.setup.plusBuy) this.supply.setup.plusBuy = true;
		if (card.setup.plusOne) this.supply.setup.plusOne = true;
		if (card.setup.minusOne) this.supply.setup.minusOne = true;
		if (card.setup.minusDraw) this.supply.setup.minusDraw = true;
		if (card.cost.potion) this.supply.setup.potions = true;
		if (card.set.includes('Dark Ages')) this.supply.setup.numDarkAges++;
		if (card.set.includes('Prosperity')) this.supply.setup.numProsperity++;
		if (card.id === 305) this.supply.setup.embargo = true;
		if (card.id === 310) this.supply.setup.island = true;
		if (card.id === 314) this.supply.setup.nativeVillage = true;
		if (card.id === 318) this.supply.setup.pirateShip = true;
		if (card.id === 521) this.supply.setup.tradeRoute = true;
		if (card.id === 612) this.supply.setup.prizes = true;
		if (card.id === 613) this.supply.setup.bane = true;
		if (card.id === 815) this.supply.setup.hermit = true;
		if (card.id === 833) this.supply.setup.urchin = true;
		if (card.id === 1018) this.supply.setup.page = true;
		if (card.id === 1019) this.supply.setup.peasant = true;
		if (card.id === 1036) this.supply.setup.minusTwo = true;
		if (card.id === 1203) { this.supply.setup.mirror = true; this.supply.setup.ghost = true; }
		if (card.id === 1212) { this.supply.setup.wisp = true; this.supply.setup.imp = true; this.supply.setup.ghost = true; }
		if (card.id === 1218) this.supply.setup.wishes = true;
		if (card.id === 1220) this.supply.setup.zombies = true;
		if (card.id === 1222) this.supply.setup.goat = true;
		if (card.id === 1223) this.supply.setup.cursedGold = true;
		if (card.id === 1226) this.supply.setup.lamp = true;
		if (card.id === 1227) this.supply.setup.pasture = true;
		if (card.id === 1229) this.supply.setup.imp = true;
		if (card.id === 1230) this.supply.setup.pouch = true;
		if (card.id === 1232) this.supply.setup.bats = true;
		if (card.cardType.includes('Fate')) this.supply.setup.boon = true;
		if (card.cardType.includes('Doom')) this.supply.setup.hex = true;
		if (card.id === 1151) this.supply.setup.obelisk = true;
	}

	changeSets(newSets): void {
		this.selectedSets = newSets;
	}
	changeSort(bySet): void {
		this.sortBySet = bySet;
	}

	resetSupply(): void {
		this.supply.cards = [];
		this.supply.events = [];
		this.supply.landmarks = [];
	}

	resetSetup(): void {
		this.supply.setup = {
			shelters: false,
			platCol: false,
			VP: false,
			potions: false,
			debt: false,
			spoils: false,
			ruins: false,
			coins: false,
			tavernMats: false,
			journey: false,
			trashing: false,
			estate: false,
			plusCard: false,
			plusAction: false,
			plusBuy: false,
			plusOne: false,
			minusOne: false,
			minusTwo: false,
			minusDraw: false,
			numDarkAges: 1,
			numProsperity: 2,
			prizes: false,
			bane: false,
			coffers: false,
			villagers: false,
			embargo: false,
			island: false,
			nativeVillage: false,
			pirateShip: false,
			tradeRoute: false,
			hermit: false,
			urchin: false,
			page: false,
			peasant: false,
			obelisk: false,
			mirror: false,
			lamp: false,
			goat: false,
			pasture: false,
			pouch: false,
			cursedGold: false,
			luckyCoin: false,
			wisp: false,
			imp: false,
			ghost: false,
			boon: false,
			hex: false,
			wishes: false,
			zombies: false,
			bats: false
		};
	}

	onSelect(card: Card): void {
		this.selectedCard = card;
	}
}
