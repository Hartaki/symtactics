import { areaMap, Area } from './Area'
import { siteMap, Site } from './Site'

export class Hex {
  id: string
  area: Area
  site: Site | null

  constructor(id: string, area: Area, site: Site | null) {
    this.id = id
    this.area = area
    this.site = site
  }
}

let hex000 = new Hex('000', areaMap.hongKong, siteMap.hongKongCentral)
let hex001 = new Hex('001', areaMap.mainland, siteMap.oysterFarm)
let hex002 = new Hex('002', areaMap.islands, null)
let hex003 = new Hex('003', areaMap.ocean, siteMap.trashVortex)

export let hexes: Hex[] = [hex000, hex001, hex002, hex003]
