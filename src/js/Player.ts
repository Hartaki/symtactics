class Player {
  id: string
  name: string
  hand: any[]
  drone: boolean
  roll = roll

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
    this.hand = []
    this.drone = false
    this.roll = roll
  }
}

let p1 = new Player('p1', 'Taylor Swift')
let p2 = new Player('p2', 'Rem Koolhaas')
let p3 = new Player('p3', 'Malia Obama')
let p4 = new Player('p4', 'Young Thug')
let p5 = new Player('p5', 'The Mooch')

export default [p1, p2, p3, p4, p5]
