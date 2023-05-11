export interface IResource {
  [key: string]: Resource
}

export class Resource {
  name: string
  wild: boolean

  constructor(name: string) {
    this.name = name
    this.wild = false
  }
}

let insectSpecies = new Resource('Insect Species')
let bitcoin = new Resource('Bitcoin')
let antibodies = new Resource('Antibodies')
let bamboo = new Resource('Bamboo')
let oysterDust = new Resource('Oyster Dust')
let information = new Resource('Information')
let uploads = new Resource('Uploads')
let trashPiles = new Resource('Trash Piles')

export let resourceMap: IResource = {
  insectSpecies,
  bitcoin,
  antibodies,
  bamboo,
  oysterDust,
  information,
  uploads,
  trashPiles,
}

export let resources: Resource[] = [
  insectSpecies,
  bitcoin,
  antibodies,
  bamboo,
  oysterDust,
  information,
  uploads,
  trashPiles,
  insectSpecies,
  bitcoin,
  antibodies,
  bamboo,
  oysterDust,
  information,
  uploads,
  trashPiles,
  insectSpecies,
  bitcoin,
  antibodies,
  bamboo,
  oysterDust,
  information,
  uploads,
  trashPiles,
  insectSpecies,
  bitcoin,
  antibodies,
  bamboo,
  oysterDust,
  information,
  uploads,
  trashPiles,
  insectSpecies,
  bitcoin,
  antibodies,
  bamboo,
  oysterDust,
  information,
  uploads,
  trashPiles,
  insectSpecies,
  bitcoin,
  antibodies,
  bamboo,
  oysterDust,
  information,
  uploads,
  trashPiles,
  insectSpecies,
  bitcoin,
  antibodies,
  bamboo,
  oysterDust,
  information,
  uploads,
  trashPiles,
  insectSpecies,
  bitcoin,
  antibodies,
  bamboo,
  oysterDust,
  information,
  uploads,
  trashPiles,
]
