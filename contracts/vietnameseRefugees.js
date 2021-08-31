/* A contract for Vietnamese Refugees */

let VietnameseRefugees = {};

VietnameseRefugees.location = [starting hex]; // hex
VietnameseRefugees.player = null; // which player has refugees
VietnameseRefugees.rescued = false; // refugees move discard pile cards to draw pile

// methods
VietnameseRefugees.rescue = function (player) { return 'player rescues refugees. refugees now move with player' };
VietnameseRefugees.move = function (player) { return 'refugees moves to hex with player' };
VietnameseRefugees.reset = function () {
	// move discards to draw
	Discard.pile.forEach(function (card) {
		Draw.pile.push(card);
	});
	// reset discard pile
	Discard.pile = [];
};