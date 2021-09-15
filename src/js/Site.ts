import { resourceMap, Resource } from './Resource'

export interface ISite {
  [key: string]: Site
}
export class Site {
  name: string
  designated_resources: Resource[]
  enter_exit: boolean
  intervention: boolean | undefined
  current_resources: Resource[]

  constructor(
    name: string,
    designated_resources: Resource[],
    enter_exit: boolean,
    intervention: boolean | undefined,
    current_resources: Resource[]
  ) {
    this.name = name
    this.designated_resources = designated_resources
    this.enter_exit = enter_exit
    this.intervention = intervention
    this.current_resources = current_resources
  }
}

let hongKongCentral = new Site('Hong Kong Central', [], true, undefined, [])
let oysterFarm = new Site(
  'Oyster Farm',
  [resourceMap.bamboo, resourceMap.insectSpecies, resourceMap.trashPiles],
  true,
  false,
  []
)
let trashVortex = new Site(
  'Trash Vortex',
  [resourceMap.insectSpecies, resourceMap.information, resourceMap.bitcoin],
  true,
  true,
  [
    // resources.oysterDust,
    // resources.bitcoin,
    // resources.uploads,
  ]
)

export let siteMap: ISite = {
  hongKongCentral,
  oysterFarm,
  trashVortex,
}
