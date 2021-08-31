/* technically this is only a single six-sided die, dice is more descriptive than die though */

var Dice = {};

Dice.roll = function() {
    
    var randomRoll = null; // return random number from 1 - 6
    
    if (randomRoll == 6) {
        // call up the drone contract and activate it
        // update the current player and set drone to true
    }
}

// agent methods
function roll( ) {

  // roll dice
  var myRoll = Math.floor( Math.random() * 6) + 1;
  announceRoll(this, myRoll);

  // reassign drone
  if (myRoll === 6) {
    resetDrone(SYMTACTICS.players);
    this.drone = true;
    announceDroneReassignment(SYMTACTICS.players);
  }

  return myRoll;
};
