export interface IArea {
  [key: string]: Area
}
export class Area {
  name: string
  speed: number
  affected: boolean

  constructor(name: string, speed: number) {
    this.name = name
    this.speed = speed
    this.affected = false
  }
}

let hongKong = new Area('Hong Kong', 1)
let mainland = new Area('Mainland ', 1)
let islands = new Area('Islands  ', 1)
let ocean = new Area('Ocean    ', 2)

export let areaMap: IArea = { hongKong, mainland, islands, ocean }
