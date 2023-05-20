import { resourceMap, Resource } from './Resource'

export interface Markets {
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

const { insectSpecies, bitcoin, antibodies, bamboo, oysterDust, information, uploads /*trashPiles*/ } = resourceMap

export let markets: Markets = {
  normal: new Market('Normal', []),
  btcDominance: new Market('BTC Dominance', [bitcoin, uploads]),
  bahamas: new Market('Bahamas', [bitcoin, oysterDust, information]),
  pandemic: new Market('Pandemic', [antibodies]),
  bioTech: new Market('Bio Tech', [insectSpecies, bamboo, oysterDust]),
}
