import { Card } from './card';

export const EVENTS: Card[] = [
	{
		id: 1125,
		name: 'Advance',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'You may trash an Action card from your hand. If you do, gain an Action card costing up to <img src="assets/Coin6.png">.',
		help: 'If you do not trash an Action, nothing else happens.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1031,
		name: 'Alms',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: If you have no Treasures in play, gain a card costing up to <img src="assets/Coin4.png">.',
		help: 'You can only buy this once per turn. When you do, if you have no Treasures in play, you gain a card costing up to <img src="assets/Coin4.png">. The gained card comes from the Supply and is put into your discard pile.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1126,
		name: 'Annex',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 0,
			debt: 8,
			potion: 0
		},
		text: 'Look through your discard pile. Shuffle all but up to 5 cards from it into your deck. Gain a Duchy.',
		help: 'You can do this even if the Duchy pile is empty. The chosen cards stay in your discard pile when the other cards are shuffled into your deck.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: true
		}
	},
	{
		id: 1032,
		name: 'Ball',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Take your −<img src="assets/Coin1.png"> token. Gain 2 cards each costing up to <img src="assets/Coin4.png">.',
		help: 'When you buy this, you take your −<img src="assets/Coin1.png"> token, which will cause you to get less the next time you get <img src="assets/Coin.png">. Then you gain 2 cards, each costing up to <img src="assets/Coin4.png">. They can be 2 copies of the same card, or 2 different cards. This Event may be bought more than once per turn, gaining cards each time; however, the −<img src="assets/Coin1.png"> token can only be taken once. If you’re Possessing someone and make them buy Ball, you will take their −<img src="assets/Coin1.png"> token. If they need to take it before you lose it, they take it from you, and you are no longer affected by it. This can result in you potentially having 2 −<img src="assets/Coin1.png"> tokens; resolve them one at a time when you make <img src="assets/Coin.png"> - so if you only make <img src="assets/Coin1.png">, you only lose one of the tokens (you pick which one to lose).',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: true, minusDraw: false, debt: false
		}
	},
	{
		id: 1127,
		name: 'Banquet',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Gain 2 Coppers and a non-Victory card costing up to <img src="assets/Coin5.png">.',
		help: 'You can do this even if the Copper pile is empty.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1033,
		name: 'Bonfire',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Trash up to 2 cards you have in play.',
		help: 'This only trashes cards you have in play, not cards from your hand. You can trash zero, one, or two cards. If you trash Treasures with this, this does not remove the <img src="assets/Coin.png"> you got from playing those Treasures this turn. For example, with 5 Coppers in play and two Buys, you could pay <img src="assets/Coin3.png"> for a Bonfire to trash two of the Coppers, then spend the other <img src="assets/Coin2.png"> on a Peasant.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1034,
		name: 'Borrow',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: <b>+1 Buy</b>. If your −1 Card token isn’t on your deck, put it there and <b>+<img src="assets/Coin1.png"></b>.',
		help: 'You can only buy this once per turn. The -1 Card token will cause you to draw one less card the next time you draw cards. You do not get +<img src="assets/Coin1.png"> if you buy Borrow when your -1 Card token is already on your deck.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: true, debt: false
		}
	},
	{
		id: 1128,
		name: 'Conquest',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Gain 2 Silvers.<br><b>+1<img src="assets/VP.png"></b> per Silver you’ve gained this turn.',
		help: 'This counts the two Silvers it gives you (provided that there were Silvers left to gain). For example, with <img src="assets/Coin12.png"> and 2 Buys and having gained no Silvers earlier in the turn, you could buy Conquest twice, getting two Silvers, then +2<img src="assets/VP.png">, then two more Silvers, then +4<img src="assets/VP.png">.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1129,
		name: 'Delve',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Gain a Silver.',
		help: 'Each purchase of Delve gives you back the Buy you used on it. For example, if you have <img src="assets/Coin7.png">, you can Delve, then Delve, then buy a card for <img src="assets/Coin3.png">.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1130,
		name: 'Dominate',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 14,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Province. If you do, <b>+9<img src="assets/VP.png"></b>.',
		help: 'This does nothing once the Province pile is empty.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1131,
		name: 'Donate',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 0,
			debt: 8,
			potion: 0
		},
		text: 'After this turn, put all cards from your deck and discard pile into your hand, trash any number, shuffle your hand into your deck, then draw 5 cards.',
		help: 'Effects that happen due to trashing cards (such as Rocks’) will happen before you shuffle. This happens between turns, and so Possession (from Dominion: Alchemy) will no longer be doing anything. End-game conditions are checked at the end of each player’s turn. So if a player buys Donate and then empties the Provinces, the Donate effect will not occur. Conversely, if two piles are empty and a player buys Donate, and uses its effect to trash Hunting Grounds, thus emptying the Estates, the game will not end until the end of the next player’s turn.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: true
		}
	},
	{
		id: 1035,
		name: 'Expedition',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Draw 2 extra cards for your next hand.',
		help: 'This increases the number of cards you draw in Cleanup of the same turn. It is cumulative. Normally you draw 5 cards; after an Expedition you would draw 7, after two Expeditions you would draw 9, and so on. It only applies for the turn you buy it. If you play Outpost (from Seaside), getting an extra turn with only 3 cards, and also buy Expedition, you add the 2 extra cards onto the base of 3 cards, for 5 cards total.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1036,
		name: 'Ferry',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Move your −<img src="assets/Coin2.png"> cost token to an Action Supply pile. (Cards from that pile cost <img src="assets/Coin2.png"> less on your turns, but not less than <img src="assets/Coin0.png">.)',
		help: 'Other players’ cards from the tokened pile are also reduced in cost during your turns.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1037,
		name: 'Inheritance',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 7,
			debt: 0,
			potion: 0
		},
		text: 'Once per game: Set aside a non-Victory Action card from the Supply costing up to <img src="assets/Coin4.png">. Move your Estate token to it. (Your Estates gain the abilities and types of that card.)',
		help: 'You can only buy this once per game. When you do, set aside a non-Victory Action card from the Supply that costs up to <img src="assets/Coin4.png">, and put your Estate token on it (the one depicting a house). This is not gaining a card, and does not count for things that care about gaining, such as Treasure Hunter; however at the end of the game, include the card in your deck when scoring. For the rest of the game, all of your Estates have the abilities and types of the set aside card. For example if you set aside a Port, then your Estates are Action - Victory cards, that can be played for +1 Card +2 Actions. This also changes Estates you buy or otherwise gain during the game; if you used Inheritance on a Port and then later bought an Estate, that Estate would come with a Port, just as buying a Port gains you a Port. This only affects your own Estates, not Estates of other players. An Estate is yours if either it started in your deck, or you gained it or bought it, or you were passed it with Masquerade (from Intrigue). An Estate stops being yours if you trash it, return it to the Supply, pass it with Masquerade, or are stopped from gaining it due to Possession (from Alchemy) or Trader (from Hinterlands). There are no limits on the set aside card other than being a non-Victory Action from the Supply costing up to <img src="assets/Coin4.png">; it may be a Duration card, a Reaction card, and so on. It does not have to continue costing up to <img src="assets/Coin4.png">, it only has to cost up to <img src="assets/Coin4.png"> when set aside. Your Estates are still worth 1<img src="assets/VP.png"> when scoring at the end of the game. Your Estates only copy abilities and types; they do not copy cost, name, or what pile they are from (thus they don’t trigger tokens like +1 Action on the copied pile, and are not the Bane for Young Witch from Cornucopia even if the copied pile is the Bane). Starting Estates come from the Estates pile.<br>If you Transmute an Inherited Estate, the Estate is in the trash and, thus, no longer yours when Transmute checks its type; therefore you would only get a Gold (for trashing a Victory card) and not a Duchy (since Estate cannot be an Action card in the trash). The same logic applies to when you Catapult an Inherited Estate, and thus when Catapulting an Estate Inheriting Crown, the other players do not discard down to 3, or gain a Curse. In contrast, if you Ironworks an Inherited Estate, you would get +1 Card and +1 Action. The fact that Estate inherits the abilities but not the name or cost of another card can lead to some surprising effects; as always, reading the text of the card carefully should resolve most confusions. Some examples:<br>If Estate inherits Treasure Map, then when you play an Estate, you trash it and a Treasure Map from your hand (not an Estate from your hand), but you don’t gain Gold because you didn’t “trash two Treasure Maps”.<br>If Estate inherits Crossroads, then playing an Estate can’t give you +3 Actions because it’s not “the first time you played a Crossroads this turn”. But if you play an Estate and then a Crossroads, you do get the +3 Actions from the Crossroads, since it is the first time you’ve played a Crossroads.<br>If Estate inherits Rats, then when you play Estate, you can trash another Estate (but not a Rats), and you gain an actual Rats, and not another Estate.<br>If Estate inherits Catacombs, then when you trash an Estate you must gain a card costing less than Estate, not just less than Catacombs.<br>The exception to the above, as usual, is when Estate inherits Pirate Ship: despite the wording on the Pirate Ship card, coin tokens placed on your Pirate Ship mat by playing Estate count toward the future value of your Pirate Ships (and Estates) in the same way as coin tokens placed by playing Pirate Ship itself.<br>If an Estate comes into your possession via a means not explicitly described in the Official FAQ, such as being put in your hand after being trashed as a Fortress, it is still “yours”, and still has its Inherited properties. Since Inherited Estates are not Actions until they are yours, they cannot be gained by abilities that specify gaining an Action, such as by University. Inherited Estates do count for Vineyard. Estates become yours upon the act of buying, therefore an Estate inherited as a Grand Market can be bought with Copper in play. Buying an Estate does trigger any on-buy effects of the set-aside card, e.g. if you inherited Noble Brigand, it triggers the “attack”. The Estate pile is not yours, and thus not an Action pile; it cannot have Adventures tokens put on it, and cannot be emulated by Band of Misfits or Overlord. Your Estates only look at the text of the set aside card, and do not care if there are Adventures tokens on the pile it is from. Estates Inherited as Gathering cards put <img src="assets/VP.png"> tokens on the pile they Inherited from, not the Estate pile. If you Inherit Fortress, you will not put Estates into your hand if you trash them with Salt the Earth, as Estates in the Supply are not yours.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: true, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1038,
		name: 'Lost Arts',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Move your +1 Action token to an Action Supply pile. (When you play a card from that pile, you first get <b>+1 Action</b>.)',
		help: '',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: true, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1039,
		name: 'Mission',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: If the previous turn wasn’t yours, take another turn after this one, in which you can’t buy cards.',
		help: 'You can only buy this once per turn. When you do, if the previous turn was not yours - if it was another player’s turn before this turn - you take another turn after this turn ends. The extra turn is completely normal except that you cannot buy cards during it. You can still buy Events, and play cards, and gain cards in ways other than buying them (such as gaining a Silver from Amulet), and exchange Travellers. Buying Mission during a turn granted by Mission will not give you another turn, because the previous turn was yours.<br>If you buy a Mission and play an Outpost on the same turn, both extra turn effects try to happen at the same time. If you resolve Mission’s first, your Mission turn will start with 3 cards, and you won’t get an Outpost turn (and Outpost stays in play until the Clean-up phase of the player to your left). If you resolve Outpost first, you get the normal 3-card Outpost turn, then your Mission turn, giving you three turns in a row. Buying Mission does nothing if you were Possessed on your previous turn. If the previous player played multiple Possessions, and tells you to buy a Mission on your first Possession turn, you get to decide whether to take the Mission turn first, or one of the other Possession turns; Possession does not grant control between turns, making the choice your decision.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1040,
		name: 'Pathfinding',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 8,
			debt: 0,
			potion: 0
		},
		text: 'Move your +1 Card token to an Action Supply pile. (When you play a card from that pile, you first get <b>+1 Card</b>.)',
		help: '',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: true, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1041,
		name: 'Pilgrimage',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: Turn your Journey token over (it starts face up); then if it’s face up, choose up to 3 differently named cards you have in play and gain a copy of each.',
		help: 'At the start of the game, place your Journey token (the one with the boot) face up. You can only buy this once per turn. When you do, turn your Journey token over. Then if it is face down, nothing more happens. If it is face up, choose up to 3 cards you have in play with different names and gain a copy of each. The copies you gain come from the Supply and are put into your discard pile. So, every other time you buy this, you will gain up to 3 cards. It does not matter what turned over the Journey token; you could turn it face down with Ranger, then face up with Pilgrimage. You cannot gain copies of cards not from the Supply, such as Mercenary or Disciple. The cost of the card does not matter; you can gain cards with <img src="assets/Debt.png"> or <img src="assets/Potion.png"> in their cost as long as you have a copy of it in play. Choosing happens before gaining: you can choose a Mandarin and Gold you have in play, gain the Mandarin first, then still gain the Gold, even though the original is no longer in play.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: true, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1042,
		name: 'Plan',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 3,
			debt: 0,
			potion: 0
		},
		text: 'Move your Trashing token to an Action Supply pile. (When you play a card from that pile, you may trash a card from your hand.)',
		help: '',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: true, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1043,
		name: 'Quest',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 0,
			debt: 0,
			potion: 0
		},
		text: 'You may discard an Attack, two Curses, or six cards. If you do, gain a Gold.',
		help: 'You may either discard an Attack to gain a Gold, or discard two Curses to gain a Gold, or discard any 6 cards to gain a Gold. The gained Gold is put into your discard pile. You may choose to discard 6 cards despite not having enough cards in hand; you will discard everything and not gain a Gold. You may choose to discard two Curses despite only having one; you will discard that Curse and not gain a Gold.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1044,
		name: 'Raid',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Silver per Silver you have in play. Each other player puts their –1 Card token on their deck.',
		help: 'This Event is like an Attack, but buying it is not playing an Attack, and so cannot be responded to with cards like Moat and Caravan Guard. When you buy this, you gain a Silver for each Silver you have in play; for example, with four Silvers in play, you would gain four Silvers. The Silvers go to your discard pile; if there aren’t enough left, just take what is left. Then each other player puts his -1 Card token on top of his deck, which will cause those players to draw one less card the next time they draw cards.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: true, debt: false
		}
	},
	{
		id: 1132,
		name: 'Ritual',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: 'Gain a Curse. If you do, trash a card from your hand. <b>+1<img src="assets/VP.png"></b> per <img src="assets/Coin1.png"> it cost.',
		help: 'This does nothing once the Curse pile is empty. This only gives you +1<img src="assets/VP.png"> per <img src="assets/Coin1.png"> the trashed card cost; it does not give anything for <img src="assets/Debt.png"> or <img src="assets/Potion.png"> in costs. Unlike similar cards or Events, Ritual cares about the cost of the card at the instant it is trashed, rather than checking on it later, when its cost may have changed.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1133,
		name: 'Salt the Earth',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 4,
			debt: 0,
			potion: 0
		},
		text: '<b>+1<img src="assets/VP.png"></b><br>Trash a Victory card from the Supply.',
		help: 'If the trashed card does something when trashed (such as Crumbling Castle), you do that thing.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1045,
		name: 'Save',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 1,
			debt: 0,
			potion: 0
		},
		text: 'Once per turn: <b>+1 Buy</b>. Set aside a card from your hand, and put it into your hand at end of turn (after drawing).',
		help: 'You can only buy this once per turn. When you do, you get +1 Buy (letting you buy another Event or a card afterwards), set aside a card from your hand face down (the other players do not get to see it), and put it into your hand at the end of the turn, after drawing your hand for the next turn. For example you might set aside an unplayed Copper, and then after drawing your 5 cards for next turn, add the Copper to your hand.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1046,
		name: 'Scouting Party',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+1 Buy</b><br>Look at the top 5 cards of your deck. Discard 3 and put the rest back in any order.',
		help: 'When you buy this you get +1 Buy (letting you buy another Event or a card afterwards). Then look at the top 5 cards of your deck, discarding 3 and putting the rest on top of your deck in any order. If there are fewer than 5 cards even after shuffling, you still discard 3 of them; if there are only 3 cards left between your deck and discard pile, all 3 will be discarded. Scouting Party is unaffected by the -1 Card token; if it is on top of your deck, replace it after resolving Scouting Party.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1047,
		name: 'Seaway',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain an Action card costing up to <img src="assets/Coin4.png">. Move your +1 Buy token to its pile. (When you play a card from that pile, you first get <b>+1 Buy</b>.)',
		help: 'When you buy this, first you gain an Action card costing up to <img src="assets/Coin4.png">. The Action card comes from the Supply and is put into your discard pile. Then move your +1 Buy token to the pile the Action card came from. The token gives you +1 Buy when playing a card from that pile. It only matters how much the card costs that you gain; the cost is not checked later. For example you can play Bridge Troll, then use Seaway to gain a Bridge Troll (currently costing <img src="assets/Coin4.png"> due to its own effect), and the token will stay there even when Bridge Troll costs <img src="assets/Coin5.png"> later. You can use Seaway to gain Sir Martin (from Dark Ages) when he’s on top of the Knights pile; then your +1 Buy token will be on the Knights pile, even though any remaining Knights will cost <img src="assets/Coin5.png">. You cannot use Seaway on an empty pile just to move the +1 Buy token; you have to pick a card you can gain.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: true, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1134,
		name: 'Tax',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: 'Add <img src="assets/Debt2.png"> to a Supply pile.<hr>Setup: Add <img src="assets/Debt1.png"> to each Supply pile. When a player buys a card, they take the <img src="assets/Debt.png"> from its pile.',
		help: 'Every Supply pile starts with <img src="assets/Debt1.png">, including Kingdom cards and basic cards like Silver. The Event itself, when bought, adds <img src="assets/Debt2.png"> to a single pile, whether or not that pile has any <img src="assets/Debt.png"> on it already. The <img src="assets/Debt.png"> is taken by the next player to buy a card from that pile; gaining a card without buying it leaves the <img src="assets/Debt.png"> on the pile.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: true
		}
	},
	{
		id: 1048,
		name: 'Trade',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Trash up to 2 cards from your hand.<br>Gain a Silver per card you trashed.',
		help: 'You may trash zero, one, or two cards from your hand. For each card you actually trashed, you gain a Silver, putting it into your discard pile.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1049,
		name: 'Training',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 6,
			debt: 0,
			potion: 0
		},
		text: 'Move your +<img src="assets/Coin1.png"> token to an Action Supply pile. (When you play a card from that pile, you first get <b>+<img src="assets/Coin1.png"></b>.)',
		help: '',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: true, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1050,
		name: 'Travelling Fair',
		set: 'Adventures',
		cardType: ['Event'],
		cost: {
			coin: 2,
			debt: 0,
			potion: 0
		},
		text: '<b>+2 Buys</b><br>When you gain a card this turn, you may put it onto your deck.',
		help: 'When you buy this, you get +2 Buys (letting you buy more Events or cards afterwards). Then for the rest of the turn, whenever you gain a card, you may put it on your deck. This works on cards you buy, as well as cards gained other ways, such as gaining cards with Ball. It does not work on Travellers exchanged for other cards; exchanging is not gaining. Putting the card on your deck is optional each time you gain a card that turn; you could put some on top and let the others go to your discard pile.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 1135,
		name: 'Triumph',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 0,
			debt: 5,
			potion: 0
		},
		text: 'Gain an Estate. If you did, <b>+1<img src="assets/VP.png"></b> per card you’ve gained this turn.',
		help: 'You get +1<img src="assets/VP.png"> per card you have gained, including the Estate, and any other cards bought or gained other ways; you do not get <img src="assets/VP.png"> for Events bought. Once the Estate pile is empty, this does nothing.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: true
		}
	},
	{
		id: 1136,
		name: 'Wedding',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 4,
			debt: 3,
			potion: 0
		},
		text: '<b>+1<img src="assets/VP.png"></b><br>Gain a Gold.',
		help: 'You get the <img src="assets/VP.png"> even if there are no Golds left.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: true, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: true
		}
	},
	{
		id: 1137,
		name: 'Windfall',
		set: 'Empires',
		cardType: ['Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'If your deck and discard pile are empty, gain 3 Golds.',
		help: 'If there are fewer than 3 Golds in the pile, just gain the remaining Golds.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	},
	{
		id: 2003,
		name: 'Summon',
		set: 'Promo',
		cardType: ['Event'],
		cost: {
			coin: 5,
			debt: 0,
			potion: 0
		},
		text: 'Gain an Action card costing up to <img src="assets/Coin4.png">. Set it aside. If you do, then at the start of your next turn, play it.',
		help: 'When you buy this, you gain an Action card costing up to <img src="assets/Coin4.png"> from the Supply and set it aside face up. If you did set it aside, then at the start of your next turn, play that Action card. This doesn’t use up your default Action for the turn. In order to remember to play the card on your next turn, you may want to turn it sideways or diagonally, turning it right side up when you play it. If you move the Action card after you gain it but before you set it aside (e.g. by putting it on top of your deck with Watchtower, from Dominion: Prosperity), then Summon will “lose track” of it and be unable to set it aside; in that case you will not play it at the start of your next turn. If you use Summon to gain a Nomad Camp (from Dominion: Hinterlands), Summon will know to find the Nomad Camp on your deck, so you will set it aside in that case (unless you have moved it elsewhere via another ability). The Summoned card is discarded during your Clean-up phase once its effects are resolved like a typical Action card, as it has been brought into play by the effect of Summon. Summoning a card that gains other cards when gained (such as Border Village or Death Cart) will cause the Summoned card to not be set aside, and thus not played at the start of your next turn. This is because the extra cards gained cover up the Summoned card in the discard pile (since the Summoned card is not set aside immediately), causing the Summoned card to be lost track of. This can still be the right move, however, if the card is Embargoed or under a Contraband. If you are being Possessed, and the player to your right tells you to Summon a card, they gain the card, which does not get set aside, nor played at the start of their turn, instead staying in their discard pile. If you reveal a Trader after Summoning a card, the Silver you gain is not set aside, but stays in your discard pile. If you Summon a Hireling, you will draw a card when you play it, since it will still be the start of your turn.',
		setup: {
			spoils: false, ruins: false, coins: false, tavernMats: false, journey: false, trashing: false, estate: false, VP: false, coffers: false,
			villagers: false, plusCard: false, plusAction: false, plusBuy: false, plusOne: false, minusOne: false, minusDraw: false, debt: false
		}
	}
];
