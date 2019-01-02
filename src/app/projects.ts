import { Card } from './card';

export const PROJECTS: Card[] = [
	{
		id: 1326,
		name: 'Academy',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When you gain an Action card, <b>+1 Villager</b>.',
		help: 'This happens whether you gain an Action card due to buying it, or some other way.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: true, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1327,
		name: 'Barracks',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, <b>+1 Action</b>.',
		help: 'You simply have +1 Action on each of your turns.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1328,
		name: 'Canal',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'During your turns, cards cost <img src="assets/Coin1.png"> less, but not less than <img src="assets/Coin0.png">.',
		help: 'During your turns, all cards, including cards in the Supply, in hands, and in Decks, cost <img src="assets/Coin1.png"> less, but not less than <img src="assets/Coin0.png">. For example if you have Canal and play Villain, other players discard a card costing at least <img src="assets/Coin2.png">, which could not be Estate, as Estate only costs <img src="assets/Coin1.png"> on your turns.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1329,
		name: 'Capitalism',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'During your turns, Actions with +<img src="assets/Coin.png"> amounts in their text are also Treasures.',
		help: 'To be affected, a card must have a +<img src="assets/Coin.png"> amount in its text, not just a <img src="assets/Coin.png"> amount - for example, Capitalism turns Improve into a Treasure, but does not affect Inventor. Having Capitalism means you can play any number of Action cards with +<img src="assets/Coin.png"> amounts in your Buy phase (without using up Action plays). It also means that things that interact with Treasure cards also interact with those cards; for example, if you have Capitalism, you can use Treasurer to gain an Improve from the trash, since Improve is a Treasure on your turns. Any time you play an Action - Treasure card, it is both an Action and a Treasure, regardless of which phase it is. Getting +1 Action in your Buy phase does not let you play other Action cards then. Capitalism works on your turn, but affects cards everywhere; for example if you have Capitalism and play Bandit, you could trash another player\'s Improve, and it is not relevant if that player has Capitalism or not.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1330,
		name: 'Cathedral',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, trash a card from your hand.',
		help: 'Once you have claimed this ability, it is not optional. There is no way to remove your cube.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1331,
		name: 'Citadel',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 8,
			debt: 0,
			potion: 0
		},
		text: 'The first time you play an Action card during each of your turns, play it again afterward.',
		help: 'Once you\'ve claimed this ability, it is not optional. This can affect an Action card played outside of the Action phase, if it is your first Action card played that turn; for example if you also had Capitalism, you could opt to play a Flag Bearer in your Buy phase as your first play of the turn, and it would still be played twice. Citadel can cause a Duration card to be played twice; you will have to remember that on your next turn.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1332,
		name: 'City Gate',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, <b>+1 Card</b>, then put a card from your hand onto your deck.',
		help: 'First you draw a card; then you put any card from your hand onto your deck.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1333,
		name: 'Crop Rotation',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, you may discard a Victory card for <b>+2 Cards</b>.',
		help: 'If drawing causes you to shuffle, you will shuffle in the discarded Victory card.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1334,
		name: 'Exploration',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'At the end of your Buy phase, if you didn\'t buy any cards, <b>+1 Coffers</b> and <b>+1 Villager</b>.',
		help: 'This only cares if you bought a card in your Buy phase; it does not care if you gained cards other ways, or if you bought an Event (from Adventures and Empires) or Project. For example if all you buy on your turn is Exploration, you will get +1 Coffers and +1 Villager that turn. Exploration only cares if you bought cards in the Buy phase whose ending triggered Exploration; this can matter when your turn has multiple Buy phases due to Villa.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1335,
		name: 'Fair',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, <b>+1 Buy</b>.',
		help: 'You simply have +1 Buy on each of your turns.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1336,
		name: 'Fleet',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'After the game ends, there\'s an extra round of turns just for players with this.',
		help: 'The extra turns go in order starting with the next player after the one that just took a turn. Other extra turns, such as from Outpost (in Seaside) can happen in-between those turns; however after the last extra turn due to Fleet, no other extra turns can happen (since e.g. Outpost does not keep the game going after it ends). Players do not sort through their cards and add up their scores until all of the Fleet turns are done, even the players without Fleet. If the game end conditions are no longer met after Fleet turns, the game is still over.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1337,
		name: 'Guildhall',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When you gain a Treasure, <b>+1 Coffers</b>.',
		help: 'This happens whether you gain a Treasure due to buying it, or some other way.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: true,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1338,
		name: 'Innovation',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'The first time you gain an Action card in each of your turns, you may set it aside. If you do, play it.',
		help: 'This is optional, but only applies to your first Action card gained each turn; whether or not you use Innovation then, you will not be able to use it on subsequent gains that turn. This applies to cards gained due to being bought, or gained other ways. If the first Action card you gain in a turn is in your Buy phase, that means you can play that card even though it is your Buy phase. If it gives you +Actions, that will not let you play more Action cards in your Buy phase; if it draws you Treasures, you can only play them if you have not bought anything yet.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1339,
		name: 'Pageant',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'At the end of your Buy phase, you may pay <img src="assets/Coin1.png"> for <b>+1 Coffers</b>.',
		help: 'If you have at least <img src="assets/Coin1.png"> that you did not spend, you can spend <img src="assets/Coin1.png"> for +1 Coffers. This only works once per turn.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1340,
		name: 'Piazza',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, reveal the top card of your deck. If it\'s an Action, play it.',
		help: 'Once you have claimed this ability, it is not optional. If the revealed card is not an Action, return it to the top of your deck.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1341,
		name: 'Road Network',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'When another player gains a Victory card, <b>+1 Card</b>.',
		help: 'This happens every time another player gains a Victory card, whether bought or gained another way, and even if it is your turn.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1342,
		name: 'Sewers',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'When you trash a card other than with this, you may trash a card from your hand.',
		help: 'This works however you trash the card. For example it works when trashing a card to Priest, when trashing a Curse to Old Witch, when trashing Acting Troupe when playing it, and when trashing a card from the Supply with Lurker (from Intrigue). The card you trash with Sewers must be from your hand, and can be any card in your hand, even if the thing that triggered Sewers could only trash certain cards.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1343,
		name: 'Silos',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, discard any number of Coppers, revealed, and draw that many cards.',
		help: 'First you discard the Coppers, then you draw. So if drawing causes you to shuffle, you will shuffle in the Coppers.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1344,
		name: 'Sinister Plot',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'At the start of your turn, add a token here, or remove your tokens here for <b>+1 Card</b> each.',
		help: 'Each player has a separate pile of coin tokens on Sinister Plot; keep yours by your cube. Each turn you either add a token (an unused one, not one from a mat), or remove all of your tokens to draw as many cards.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1345,
		name: 'Star Chart',
		set: 'Renaissance',
		cardType: ['Project'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'When you shuffle, you may pick one of the cards to go on top.',
		help: 'Each time you shuffle, you can look through the cards and pick one to go on top. Shuffle the other cards.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	}
];
