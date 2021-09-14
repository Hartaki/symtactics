import { Zone, zones } from './js/Zone'

class Item {
  name: string
  zone: Zone
  label: string

  constructor(name: string, zone: Zone) {
    this.name = name
    this.zone = zone
    this.label = 'Use this item to ignore the effects of events on ' + zone.name + '. Add to discard pile after use.'
  }
}

let spamFromYourInvestor = new Item('Spam from your Investor', zones.islands)
let liamsPortal = new Item("Liam's Portal", zones.islands)
let gundamBaroque = new Item('Gundam Baroque', zones.islands)
let granularAddressability = new Item('Granular Addressability', zones.mainland)
let structuralSolver = new Item('Structural Solver', zones.mainland)
let sniperWaffle = new Item('Sniper Waffle', zones.mainland)
let fishSauceUX = new Item('Fish Sauce UX', zones.ocean)
let bandaiSDK = new Item('Bandai SDK', zones.ocean)
let shamateStackdump = new Item('Shamate Stackdump', zones.ocean)
let augmentedFoam = new Item('Augmented Foam', zones.hongKong)
let minecraftPortscan = new Item('Minecraft Portscan', zones.hongKong)
let ancientAndroidWear = new Item('Ancient AndroidWear', zones.hongKong)

export let items = []
