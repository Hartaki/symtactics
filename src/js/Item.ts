import { Area, areaMap } from './Area'

export class Item {
  name: string
  zone: Area
  label: string

  constructor(name: string, zone: Area) {
    this.name = name
    this.zone = zone
    this.label = 'Use this item to ignore the effects of events on ' + zone.name + '. Add to discard pile after use.'
  }
}

let spamFromYourInvestor = new Item('Spam from your Investor', areaMap.islands)
let liamsPortal = new Item("Liam's Portal", areaMap.islands)
let gundamBaroque = new Item('Gundam Baroque', areaMap.islands)
let granularAddressability = new Item('Granular Addressability', areaMap.mainland)
let structuralSolver = new Item('Structural Solver', areaMap.mainland)
let sniperWaffle = new Item('Sniper Waffle', areaMap.mainland)
let fishSauceUX = new Item('Fish Sauce UX', areaMap.ocean)
let bandaiSDK = new Item('Bandai SDK', areaMap.ocean)
let shamateStackdump = new Item('Shamate Stackdump', areaMap.ocean)
let augmentedFoam = new Item('Augmented Foam', areaMap.hongKong)
let minecraftPortscan = new Item('Minecraft Portscan', areaMap.hongKong)
let ancientAndroidWear = new Item('Ancient AndroidWear', areaMap.hongKong)

export let items: Item[] = [
  spamFromYourInvestor,
  liamsPortal,
  gundamBaroque,
  granularAddressability,
  structuralSolver,
  sniperWaffle,
  fishSauceUX,
  bandaiSDK,
  shamateStackdump,
  augmentedFoam,
  minecraftPortscan,
  ancientAndroidWear,
]
