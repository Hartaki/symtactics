import { IArea } from './Area'
import { Item } from './Item'
import { Player } from './Player'
import { Resource } from './Resource'
import { ISite } from './Site'
import { Newspaper } from './Newspaper'
import { Hex } from './Hex'

export interface ISymtactics {
  areaMap: IArea
  items: Item[]
  players: Player[]
  resources: Resource[]
  siteMap: ISite
  hexes: Hex[]
  newspapers: Newspaper[]

  todaysPaper: Newspaper | undefined
  rounds: number
  winCondition: 'Whoever has the drone at the end of the game wins.'
}
