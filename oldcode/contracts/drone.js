/* a contract for ASUS drone */
var Drone = {};

Drone.location = 'starting hex'; // hex
Drone.player = null; // which player has drone
Drone.used = false; // did player use the drone yet to do something?

// methods
Drone.strike = function() { return 'drone attacks someone'};
Drone.ride = function() { return 'player rides drone somewhere'};
Drone.intervention.develop = function(resources) { return 'drone develops a site'};
Drone.intervention.drain = function() { return 'drone drains a site'};
Drone.intervention.redevelop = function() { return 'drone redevelops a site'};

// some function copied from momo pseudocode
function resetDrone(players) {
  players.forEach( function (player) {
    if (player.drone === true) {
      player.drone = false;
    }
  });
}
