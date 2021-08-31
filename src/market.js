// not necessarily part of the MVP

// this would allow players to trade resources, pay money to inquire about
// other players holdings, etc

/*

SYMTACTICS.normal = new SYMTACTICS.Market([ ]);
SYMTACTICS.bullMarket = new SYMTACTICS.Market([SYMTACTICS.bitcoin, SYMTACTICS.oysterDust, SYMTACTICS.information]);
SYMTACTICS.techBubble = new SYMTACTICS.Market([SYMTACTICS.bitcoin, SYMTACTICS.uploads]);
SYMTACTICS.pandemic = new SYMTACTICS.Market([SYMTACTICS.antibodies]);
SYMTACTICS.bioTech = new SYMTACTICS.Market([SYMTACTICS.insectSpecies, SYMTACTICS.bamboo, SYMTACTICS.oysterDust]);

*/


var Market = {};


Market.currentWild = null; // the currently wild card


Market.transactions = [];
// a list of all the transactions that have transpired in the game
// ie. the ledger


// could be a function that you need to pay for if you didnt pay attention
// during the newspaper
Market.getCurrentWild = function() { return this.currentWild; }

Market.getPlayerResources = function(playerId) {
    // for a small payment, get what a player holds
    // not the actual cards but the number of cards only
}

Market.getLastTransactions = function(number) {
    // get a number of last transactions from the transactions queue
    // you might need to pay more to get these
}


Market.validateTrade = function(fromPlayerId, toPlayerId, resourcesToTrade) {
    // check if a trade is possible from player to player
    // i.e do they have the resources required to complete it
    // return boolean
}

Market.actionTrade = function(fromPlayerId, toPlayerId, resourcesToTrade) {
    // update player accounts
}



