/* a contract to store all map-based info in the game */


var Map = {};


// properties
Map.map = {};       // an object that represents the hex grid in the game
Map.regions = [];   // an array that maps to the regions on the cards (i.e. mainland)
Map.sites = [];     // the sites that can be developed
Map.playerLocations = {}; // { playerId: 12, currentHex: 3833, travelHistory: [38373,393993]}





// public methods
Map.getDistance = function(targetHex, destinationHex) { return 'distance between'}
Map.getPlayerLocation = function(playerId) { return 'player is at hex 38383'}
Map.getCurrentlyAffectedRegion = function() { return 'based on the newspaper, currently mainland is affected (or something like that'}
Map.isHexAffected = function(hex) { return 'this hex is affected by SARS .. or not'}
Map.isSite = function(hex) { return 'yes this is the trading pit'}
Map.hasPlayer = function(hex) { return 'yes there is a player here, or not'}

Map.getWeatherCondition = function() { 
    // call up the miniNewspaper contract and get the current weather
}

Map.getPossibleMovesForPlayer = function(playerId, diceRoll) {
    var position = this.getPlayerLocation(playerId);
    // based on the dice roll return possible locations that
    // a player may move to... this is going to be complicated...
}

