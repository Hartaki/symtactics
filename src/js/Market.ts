import { resourceMap, Resource } from './Resource'

export interface IMarket {
  [key: string]: Market
}

export class Market {
  id: string
  wilds: Resource[]
  constructor(id: string, wilds: Resource[]) {
    this.id = id
    this.wilds = wilds
  }
}

let bullMarket = new Market('Bull Market', [resourceMap.bitcoin])
let normal = new Market('Normal', [])
let pandemic = new Market('Pandemic', [resourceMap.antibodies])
let bioTech = new Market('Bio Tech', [resourceMap.bamboo, resourceMap.insectSpecies])
let techBubble = new Market('Tech Bubble', [resourceMap.bitcoin, resourceMap.information, resourceMap.uploads])

export let marketMap: IMarket = { bullMarket, normal, pandemic, bioTech, techBubble }
