import { hexes, Hex } from './Hex'
import { roll } from '../utils/helper'
class Player {
  id: string
  name: string
  hand: any[]
  drone: boolean
  hex: Hex
  roll: () => number

  constructor(id: string, name: string, hex: Hex) {
    this.id = id
    this.name = name
    this.hex = hex
    this.hand = []
    this.drone = false
    this.roll = roll
  }
}

let p1 = new Player('p1', 'Taylor Swift', hexes[0])
let p2 = new Player('p2', 'Rem Koolhaas', hexes[0])
let p3 = new Player('p3', 'Malia Obama', hexes[1])
let p4 = new Player('p4', 'Young Thug', hexes[2])
let p5 = new Player('p5', 'The Mooch', hexes[3])

export let players = [p1, p2, p3, p4, p5]
