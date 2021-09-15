function roll() {
  // roll dice
  var myRoll = Math.floor(Math.random() * 6) + 1

  // announceRoll(this, myRoll)

  // reassign drone
  // if (myRoll === 6) {
  //   resetDrone(SYMTACTICS.players)
  //   this.drone = true
  //   announceDroneReassignment(SYMTACTICS.players)
  // }

  return myRoll
}

export { roll }
