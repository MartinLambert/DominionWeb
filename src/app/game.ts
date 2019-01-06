import { Card } from './card';

export class Game {
	cards: Card[];
	permanents: Card[];
	setup: {
		shelters: boolean, platCol: boolean, spoils: boolean, ruins: boolean, coins: boolean, tavernMats: boolean, journey: boolean, trashing: boolean, estate: boolean,
		VP: boolean, debt: boolean, potions: boolean, plusCard: boolean, plusAction: boolean, plusBuy: boolean, plusOne: boolean, minusOne: boolean, minusTwo: boolean,
		minusDraw: boolean, numDarkAges: number, numProsperity: number, prizes: boolean, bane: boolean, coffers: boolean, villagers: boolean, embargo: boolean,
		nativeVillage: boolean, pirateShip: boolean, island: boolean, tradeRoute: boolean, hermit: boolean, urchin: boolean, page: boolean, peasant: boolean,
		obelisk: boolean, mirror: boolean, lamp: boolean, goat: boolean, pasture: boolean, pouch: boolean, cursedGold: boolean, luckyCoin: boolean, wisp: boolean,
		imp: boolean, ghost: boolean, boon: boolean, hex: boolean, wishes: boolean, zombies: boolean, bats: boolean, baneChoice: Card, obeliskChoice: Card, flag: boolean,
		horn: boolean, key: boolean, lantern: boolean, chest: boolean, cubes: boolean
	};
}
