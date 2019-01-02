import { Card } from './card';

export const LANDMARKS: Card[] = [
	{
		id: 1138,
		name: 'Aqueduct',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a Treasure, move <b>1<img src="assets/VP.png"></b> from its pile to this. When you gain a Victory card, take the <img src="assets/VP.png"> from this.<hr>Setup: Put <b>8<img src="assets/VP.png"></b> on the Silver and Gold piles.',
		help: 'If you gain a card that is both a Treasure and a Victory card, such as Humble Castle, you can resolve the abilities in either order.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1139,
		name: 'Arena',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your Buy phase, you may discard an Action card. If you do, take <b>2<img src="assets/VP.png"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png"></b> here per player.',
		help: 'With Villa it is possible for your Buy phase to start twice or more in a turn; you can make use of Arena each time.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1140,
		name: 'Bandit Fort',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>−2<img src="assets/VP.png"></b> for each Silver and each Gold you have.',
		help: 'For example with 3 Silvers and 1 Gold, you would get −8<img src="assets/VP.png">. Scores can go negative.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1141,
		name: 'Basilica',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you buy a card, if you have <img src="assets/Coin2.png"> or more left, take <b>2<img src="assets/VP.png"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png"></b> here per player.',
		help: 'This happens each time you buy a card. For example with <img src="assets/Coin4.png"> and 3 Buys, you could buy Copper, then Copper, then Silver, taking 2<img src="assets/VP.png">, then 2<img src="assets/VP.png">, then none. If you buy a card that allows you to overpay, you may take <img src="assets/VP.png"> from Basilica if you have <img src="assets/Coin2.png"> left before you overpay.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1142,
		name: 'Baths',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you end your turn without having gained a card, take <b>2<img src="assets/VP.png"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png"></b> here per player.',
		help: 'Any way you gain a card will stop you from getting <img src="assets/VP.png"> from this that turn. On a Possession turn, the Possessor will always get 2<img src="assets/VP.png"> from this (if there are any tokens left), since the Possessed player will not have actually gained any cards, so will try to gain the 2<img src="assets/VP.png">, which will go to the Possessor instead. If a player ends the game on a turn without gaining any cards (such as by playing a Witch and emptying the Curse pile), they will still get the <img src="assets/VP.png"> from Baths, as the end-of-game check happens after the turn is ended. Similarly, if the game ends on a Possession turn with no cards gained, the Possessing player will get the <img src="assets/VP.png">.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1143,
		name: 'Battlefield',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a Victory card, take <b>2<img src="assets/VP.png"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png"></b> here per player.',
		help: 'You take the <img src="assets/VP.png"> whether you bought the Victory card or gained it another way.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1144,
		name: 'Colonnade',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you buy an Action card, if you have a copy of it in play, take <b>2<img src="assets/VP.png"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png"></b> here per player.',
		help: 'For example with Settlers in play, buying another Settlers gets you 2<img src="assets/VP.png"> from here. Cards from the same pile are not necessarily copies of each other; for example the different Knights are not copies of each other. You get 2<img src="assets/VP.png"> for each copy of the Action you buy, not for each copy you have in play. If you have successfully bought Inheritance, Estates will give you 2<img src="assets/VP.png"> when bought with an Estate in play (not a copy of whichever card your Estate token is on). A Band of Misfits or Overlord in play will count as a copy of whichever Action it is emulating (unless its emulation was prevented by an Enchantress).',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1145,
		name: 'Defiled Shrine',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you buy an Action card, move <b>1<img src="assets/VP.png"></b> from its pile to this. When you buy a Curse, take the <img src="assets/VP.png"> from this.<hr>Setup: Put <b>2<img src="assets/VP.png"></b> on each non-Gathering Action Supply pile.',
		help: 'Note that this triggers on gaining an Action, whether bought or otherwise gained, but only on buying Curse, not on gaining Curse other ways. <img src="assets/VP.png"> tokens will go on the Ruins pile (from Dominion: Dark Ages) when used, but not on Farmers’ Market, Temple, or Wild Hunt (the three Action - Gathering cards). Although Defiled Shrine itself does not place <img src="assets/VP.png"> tokens on Gathering Action Supply piles, it will still move <img src="assets/VP.png"> tokens off the supply piles when you gain an action. When you gain a Temple in a game with Defiled Shrine, you can choose which order the two on-gain effects trigger, and so can gain all of the <img src="assets/VP.png"> on the Temple pile before one is sent to the Defiled Shrine. Setup instructions should happen in an order that allows everything to happen, so an Action Bane added by Young Witch would still get 2<img src="assets/VP.png"> put on it.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1146,
		name: 'Fountain',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>15<img src="assets/VP.png"></b> if you have at least 10 Coppers.',
		help: 'You either get 15<img src="assets/VP.png"> or 0<img src="assets/VP.png">; there is no extra bonus for having 20 Coppers.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1147,
		name: 'Keep',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>5<img src="assets/VP.png"></b> per differently named Treasure you have, that you have more copies of than each other player, or tied for most.',
		help: 'This applies to each different Treasure being used in the game. If all players have the same number of copies of a Treasure, they all get the 5<img src="assets/VP.png"> for that Treasure. If at least one player Inherits Crowns, then Estates will be counted, the 5<img src="assets/VP.png"> going to the player(s) with the most Estates who have also Inherited Crowns (if the player with the most Estates has not Inherited Crowns, no <img src="assets/VP.png"> are awarded).',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1148,
		name: 'Labyrinth',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a 2nd card in one of your turns, take <b>2<img src="assets/VP.png"></b> from here.<hr>Setup: Put <b>6<img src="assets/VP.png"></b> here per player.',
		help: 'This can only happen once per turn per player. For example if you gain 4 cards in the same turn, only the second one will come with 2<img src="assets/VP.png">.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1149,
		name: 'Mountain Pass',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you are the first player to gain a Province, after that turn, each player bids once, up to <img src="assets/Debt40.png">, ending with you. High bidder gets <b>+8<img src="assets/VP.png"></b> and takes the <img src="assets/Debt.png"> they bid.',
		help: 'This only happens the first time a player gains a Province; it does not matter if the Province was bought or not, or if Provinces have left the pile earlier due to Salt the Earth. This happens between turns; Possession (from Dominion: Alchemy) will not be in effect. The player to the left of the player who got the Province bids first, then the player to their left and so on, ending with the player who got the Province. Each bid can be a pass, or a higher bid than the previous bid. Bids are in amounts of <img src="assets/Debt.png">, from <img src="assets/Debt1.png"> to <img src="assets/Debt40.png">; a bid of <img src="assets/Debt40.png"> cannot be beaten. The player who bid the highest (if any) gets +8<img src="assets/VP.png"> and takes the amount of <img src="assets/Debt.png"> of their bid. End-game conditions are checked at the end of each player’s turn. So if a player gains the first Province on the same turn a game-ending condition occurs (e.g. 3 empty piles), the Mountain Pass bidding effect will not occur.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: true
		}
	},
	{
		id: 1150,
		name: 'Museum',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>2<img src="assets/VP.png"></b> per differently named card you have.',
		help: 'Multiple cards from the same pile can score for this as long as they have different names.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1151,
		name: 'Obelisk',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>2<img src="assets/VP.png"></b> per card you have from the chosen pile.<hr>Setup: Choose a random Action Supply pile.',
		help: 'All cards from the chosen pile count, even if they have different names (such as when it is a split pile). Ruins (from Dominion: Dark Ages), when used, can be the pile.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1152,
		name: 'Orchard',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>4<img src="assets/VP.png"></b> per differently named Action card you have 3 or more copies of.',
		help: 'Having 6 or more copies of a card confers no additional bonus.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1153,
		name: 'Palace',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>3<img src="assets/VP.png"></b> per set you have of Copper - Silver - Gold.',
		help: 'For example, if you had 7 Coppers, 5 Silvers, and 2 Golds, that would be two sets of Copper - Silver - Gold, for 6<img src="assets/VP.png"> total.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1154,
		name: 'Tomb',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When you trash a card, <b>+1<img src="assets/VP.png"></b>.',
		help: 'This works even when it is not your turn, such as when you trash a card to Swindler (from Dominion: Intrigue), and works when told to trash a card that is not yours, such as with Salt the Earth.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1155,
		name: 'Tower',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>1<img src="assets/VP.png"></b> per non-Victory card you have from an empty Supply pile.',
		help: 'A Supply pile is only empty if it has no cards in it; a split pile with half of the cards gone is not empty. Victory cards do not count, but Curses do.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1156,
		name: 'Triumphal Arch',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>3<img src="assets/VP.png"></b> per copy you have of the 2nd most common Action card among your cards (if it’s a tie, count either).',
		help: 'For example, if you had 7 copies of Villa and 4 copies of Wild Hunt, you would score 12<img src="assets/VP.png">. The tie can be for either first or second place: if you had 7 copies each of Villa and Village, you would score 21<img src="assets/VP.png">. If you had 7 copies of Villa, then 4 copies each of Village and Wild Hunt, you would score 12<img src="assets/VP.png">.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1157,
		name: 'Wall',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>−1<img src="assets/VP.png"></b> per card you have after the first 15.',
		help: 'For example, if you had 27 cards in your deck, you would score −12<img src="assets/VP.png"> for Wall. Scores can go negative.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1158,
		name: 'Wolf Den',
		set: 'Empires',
		cardType: ['Landmark'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'When scoring, <b>−3<img src="assets/VP.png"></b> per card you have exactly one copy of.',
		help: 'Having no copies of a card, or two or more copies of a card, confers no penalty. Scores can go negative.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	}
];
