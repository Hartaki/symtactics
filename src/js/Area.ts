export class Area {
  name: string
  speed: number
  under_event?: boolean

  constructor(name: string, speed: number) {
    this.name = name
    this.speed = speed
    this.under_event = false
  }
}

let hongKong = new Area('Hong Kong', 1)
let mainland = new Area('Mainland', 1)
let islands = new Area('Islands', 1)
let ocean = new Area('Ocean', 2)

export let areaMap = { hongKong, mainland, islands, ocean }