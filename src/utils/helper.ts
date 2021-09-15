import { Item } from '../js/Item'
import { Newspaper } from '../js/Newspaper'
import { Resource } from '../js/Resource'

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

function shuffle(array: Newspaper[] | Resource[] | Item[]) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export { roll, shuffle }
