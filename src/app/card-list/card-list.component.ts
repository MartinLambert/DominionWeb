import { Component, OnInit } from '@angular/core'
import { Card } from '../card'
import { Game } from '../game'
import { CARDS } from '../cards'
import { PERMANENTS } from '../permanents'

@Component({
	selector: 'dom-card-list',
	templateUrl: './card-list.component.html',
	styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

	kingdom: Game
	supply: Game
	selectedCard: Card
	selectedSets: string[]
	selectedPromos: string[]
	sortBySet: boolean

	constructor() {
	}

	ngOnInit() {
		this.kingdom = new Game()
		this.supply = new Game()
		this.resetSupply()
		this.resetSetup()
		this.getCards()
	}

	getCards(): void {
		this.kingdom.cards = CARDS
		this.kingdom.permanents = PERMANENTS
	}

	changeSets(newSets): void {
		this.selectedSets = newSets
	}

	changePromos(newPromos): void {
		this.selectedPromos = newPromos
	}

	changeSort(bySet): void {
		this.sortBySet = bySet
	}

	resetSupply(): void {
		this.supply.cards = []
		this.supply.permanents = []
	}

	resetSetup(): void {
		this.supply.setup = {
			shelters: false,
			platCol: false,
			spoils: false,
			ruins: false,
			coins: false,
			tavernMats: false,
			journey: false,
			trashing: false,
			estate: false,
			VP: false,
			debt: false,
			potions: false,
			plusCard: false,
			plusAction: false,
			plusBuy: false,
			plusOne: false,
			minusOne: false,
			minusTwo: false,
			minusDraw: false,
			numDarkAges: 0,
			numProsperity: 0,
			prizes: false,
			bane: false,
			coffers: false,
			villagers: false,
			embargo: false,
			nativeVillage: false,
			pirateShip: false,
			island: false,
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
			bats: false,
			baneChoice: new Card(),
			obeliskChoice: new Card(),
			flag: false,
			horn: false,
			key: false,
			lantern: false,
			chest: false,
			cubes: false,
			exile: false,
			horse: false,
			mouse: false,
			mouseChoice: new Card(),
			market: false
		}
	}

	randomize(): void {
		// Generate a new set of 10 Kingdom cards, with at least one card costing 3, 4, and 5, and up to 2 permanents
		this.resetSupply()
		this.selectedCard = null

		let cardsOK = false
		while (!cardsOK) {
			while (this.supply.cards.length < 10)
				this.addCard()
			const costs = this.supply.cards.map(({cost}) => cost.coin)
			cardsOK = costs.includes(3) && costs.includes(4) && costs.includes(5)
			if (!cardsOK)
				this.supply.cards = []
		}

		// Permanents are only in Adventures, Empires, Renaissance, Menagerie, and one Promo card.
		// There is a 25% chance of no permanents, 50% chance of one, 25% chance of two.
		if (this.selectedSets.includes('Adventures') || this.selectedSets.includes('Empires') || this.selectedSets.includes('Renaissance') || this.selectedSets.includes('Menagerie') || (this.selectedSets.includes('Promo') && this.selectedPromos.includes('Summon'))) {
			let numPermanents = 0
			const theRand = Math.random()
			if (theRand > 0.25)
				numPermanents++
			if (theRand > 0.75 && (this.selectedSets.includes('Adventures') || this.selectedSets.includes('Empires') || this.selectedSets.includes('Renaissance') || this.selectedSets.includes('Menagerie')))
				numPermanents++

			while (this.supply.permanents.length < numPermanents)
				this.addPermanent()
		}

		this.doSetup()
	}

	addCard(): Card {
		// returns a card to be added to the supply as long as it isn't already there
		const newCard: Card = this.randomCard()
		let cardOK = true
		let insertIndex = 0
		for (const card of this.supply.cards) {
			if (newCard === card)
				cardOK = false
			if (this.sortBySet) {
				if (card.id < newCard.id)
					insertIndex++
			} else if (card.name < newCard.name)
				insertIndex++
		}
		if (cardOK) {
			this.supply.cards.splice(insertIndex, 0, newCard)
			return newCard
		} else
			return null
	}

	randomCard(): Card {
		// returns a single card from one of the allowed sets
		let newCard: Card
		let badCard = true
		while (badCard) {
			newCard = this.kingdom.cards[Math.floor(Math.random() * this.kingdom.cards.length)]
			badCard = !this.selectedSets.includes(newCard.set) || ((newCard.set === 'Promo') && !this.selectedPromos.includes(newCard.name))
		}
		return newCard
	}

	addPermanent(): Card {
		const newCard = this.kingdom.permanents[Math.floor(Math.random() * this.kingdom.permanents.length)]
		if (!this.selectedSets.includes(newCard.set))
			return null
		if (this.supply.permanents.length && this.supply.permanents[0] !== newCard && !(newCard.cardType.includes('Way') && this.supply.permanents[0].cardType.includes('Way')))
			(newCard.id < this.supply.permanents[0].id) ? this.supply.permanents.splice(0, 0, newCard) : this.supply.permanents.push(newCard)
		else
			this.supply.permanents[0] = newCard
		return newCard
	}

	doSetup(): void {
		this.resetSetup()
		for (const card of this.supply.cards)
			this.checkCard(card)
		for (const card of this.supply.permanents)
			this.checkCard(card)
		if (this.supply.setup.numDarkAges > Math.random() * 10)
			this.supply.setup.shelters = true
		if (this.supply.setup.numProsperity > Math.random() * 10)
			this.supply.setup.platCol = true
		if (this.supply.setup.bane)
			do {
				this.supply.setup.baneChoice = this.randomCard()
			} while (this.supply.cards.includes(this.supply.setup.baneChoice))
		if (this.supply.setup.mouse)
			do {
				this.supply.setup.mouseChoice = this.randomCard()
			} while (!this.supply.setup.mouseChoice.cardType.includes('Action') || this.supply.setup.mouseChoice.cost.coin < 2 || this.supply.setup.mouseChoice.cost.coin > 3 || this.supply.cards.includes(this.supply.setup.mouseChoice))
		do {
			this.supply.setup.obeliskChoice = this.supply.cards[Math.floor(Math.random() * 10)]
		} while (!this.supply.setup.obeliskChoice.cardType.includes('Action'))
	}

	checkCard(card): void {
		if (card.setup.VP)
			this.supply.setup.VP = true
		if (card.setup.debt)
			this.supply.setup.debt = true
		if (card.setup.spoils)
			this.supply.setup.spoils = true
		if (card.setup.ruins)
			this.supply.setup.ruins = true
		if (card.setup.coins)
			this.supply.setup.coins = true
		if (card.setup.coffers)
			this.supply.setup.coffers = true
		if (card.setup.villagers)
			this.supply.setup.villagers = true
		if (card.setup.tavernMats)
			this.supply.setup.tavernMats = true
		if (card.setup.journey)
			this.supply.setup.journey = true
		if (card.setup.plusCard)
			this.supply.setup.plusCard = true
		if (card.setup.plusAction)
			this.supply.setup.plusAction = true
		if (card.setup.plusBuy)
			this.supply.setup.plusBuy = true
		if (card.setup.plusOne)
			this.supply.setup.plusOne = true
		if (card.setup.minusOne)
			this.supply.setup.minusOne = true
		if (card.setup.minusDraw)
			this.supply.setup.minusDraw = true
		if (card.setup.exile)
			this.supply.setup.exile = true
		if (card.setup.horse)
			this.supply.setup.horse = true
		if (card.cost.potion)
			this.supply.setup.potions = true
		if (card.set.includes('Dark Ages'))
			this.supply.setup.numDarkAges++
		if (card.set.includes('Prosperity'))
			this.supply.setup.numProsperity++
		if (card.cardType.includes('Fate')) {
			this.supply.setup.boon = true
			this.supply.setup.wisp = true
		}
		if (card.cardType.includes('Doom'))
			this.supply.setup.hex = true
		if (card.cardType.includes('Project'))
			this.supply.setup.cubes = true
		if (card.id === 305)
			this.supply.setup.embargo = true
		if (card.id === 310)
			this.supply.setup.island = true
		if (card.id === 314)
			this.supply.setup.nativeVillage = true
		if (card.id === 318)
			this.supply.setup.pirateShip = true
		if (card.id === 521)
			this.supply.setup.tradeRoute = true
		if (card.id === 612)
			this.supply.setup.prizes = true
		if (card.id === 613)
			this.supply.setup.bane = true
		if (card.id === 815)
			this.supply.setup.hermit = true
		if (card.id === 833)
			this.supply.setup.urchin = true
		if (card.id === 1018)
			this.supply.setup.page = true
		if (card.id === 1019)
			this.supply.setup.peasant = true
		if (card.id === 1036)
			this.supply.setup.minusTwo = true
		if (card.id === 1037)
			this.supply.setup.estate = true
		if (card.id === 1042)
			this.supply.setup.trashing = true
		if (card.id === 1151)
			this.supply.setup.obelisk = true
		if (card.id === 1203) {
			this.supply.setup.mirror = true
			this.supply.setup.ghost = true
		}
		if (card.id === 1212) {
			this.supply.setup.wisp = true
			this.supply.setup.imp = true
			this.supply.setup.ghost = true
		}
		if (card.id === 1214)
			this.supply.setup.luckyCoin = true
		if (card.id === 1218)
			this.supply.setup.wishes = true
		if (card.id === 1220)
			this.supply.setup.zombies = true
		if (card.id === 1222)
			this.supply.setup.goat = true
		if (card.id === 1223)
			this.supply.setup.cursedGold = true
		if (card.id === 1226) {
			this.supply.setup.lamp = true
			this.supply.setup.wishes = true
		}
		if (card.id === 1227)
			this.supply.setup.pasture = true
		if (card.id === 1210 || card.id === 1229)
			this.supply.setup.imp = true
		if (card.id === 1230)
			this.supply.setup.pouch = true
		if (card.id === 1232)
			this.supply.setup.bats = true
		if (card.id === 1302) {
			this.supply.setup.horn = true
			this.supply.setup.lantern = true
		}
		if (card.id === 1306)
			this.supply.setup.flag = true
		if (card.id === 1323)
			this.supply.setup.chest = true
		if (card.id === 1324)
			this.supply.setup.key = true
		if (card.id === 1459)
			this.supply.setup.mouse = true
		if (card.id === 2001)
			this.supply.setup.market = true
	}

	onSelect(card: Card): void {
		this.selectedCard = card
	}

	swapCard(card): void {
		let newCard: Card
		if (card.cardType.includes('Permanent')) {
			this.supply.permanents.forEach((c, i) => {
				if (c === card)
					this.supply.permanents.splice(i, 1)
			})
			do {
				newCard = this.addPermanent()
			} while (!newCard)
		} else {
			this.supply.cards.forEach((c, i) => {
				if (c === card)
					this.supply.cards.splice(i, 1)
			})
			do {
				newCard = this.addCard()
			} while (!newCard)
		}
		this.selectedCard = newCard
		this.doSetup()
	}
}
