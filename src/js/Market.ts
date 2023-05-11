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

const { insectSpecies, bitcoin, antibodies, bamboo, oysterDust, information, uploads, trashPiles } = resourceMap

let normal = new Market('Normal', [])
let btcDominance = new Market('BTC Dominance', [bitcoin, uploads])
let bahamas = new Market('Bahamas', [bitcoin, oysterDust, information])
let pandemic = new Market('Pandemic', [antibodies])
let bioTech = new Market('Bio Tech', [insectSpecies, bamboo, oysterDust])

export let marketMap: IMarket = { normal, btcDominance, bahamas, pandemic, bioTech }
