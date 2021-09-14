export class Zone {
  name: string
  speed: number
  under_event?: boolean

  constructor(name: string, speed: number) {
    this.name = name
    this.speed = speed
    this.under_event = false
  }
}

let hongKong = new Zone('Hong Kong', 1)
let mainland = new Zone('Mainland', 1)
let islands = new Zone('Islands', 1)
let ocean = new Zone('Ocean', 2)

export let zones: Zone[] = [hongKong, mainland, islands, ocean]
