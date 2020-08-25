export class Card {
	id: number
	name: string
	set: string
	cardType: string[]
	cost: {
		coin: number,
		debt: number,
		potion: number
	}
	text: string
	help: string
	setup: {
		spoils: boolean, ruins: boolean, coins: boolean, tavernMats: boolean, journey: boolean, VP: boolean, coffers: boolean, villagers: boolean, plusCard: boolean,
		plusAction: boolean, plusBuy: boolean, plusOne: boolean, minusOne: boolean, minusDraw: boolean, debt: boolean, exile: boolean, horse: boolean
	}
}
