import { IArea } from './Area'
import { Item } from './Item'
import { Player } from './Player'
import { Resource } from './Resource'
import { ISite } from './Site'
import { Newspaper } from './Newspaper'
import { Hex } from './Hex'
import { Mobility } from './Weather'

export interface ISymtactics {
  // TODO web3
  players: Player[]

  hexes: Hex[]
  areaMap: IArea
  siteMap: ISite

  items: Item[]
  resources: Resource[]
  // TODO drawPile
  // TODO discardPile

  newspapers: Newspaper[]
  todaysPaper: Newspaper | undefined
  rounds: number[]
  mobility: Mobility

  winCondition: 'Whoever has the drone at the end of the game wins.'
}
