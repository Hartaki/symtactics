/* a contract to represent a site */

var Site = {};


Site.resources = []; // an array of the cards on the site right now
Site.ledger = []; 
// an array that shows which player visited and when
// example entry
// { playerId: 38383, vistedOnTurn: 2, leftOnTurn: 4} // not sure: prob should have history
// of how site was developed and drained etc over time

// sample instantiation of a site
Site.name = 'Trading Pit'; // name for the site
Site.hexLocation = 38383; // for example



// check if player has the resources required and allow development or not
Site.develop = function(resources) {}

// if site has resources - give them to the player otherwise 'throw'
Site.drain = function() {}

// drain resources and allow player to draw that amount
Site.redevelop = function() {}




