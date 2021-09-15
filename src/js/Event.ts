import { areaMap, Area } from './Area'

export interface IEvent {
  [key: string]: Event
}
export class Event {
  id: string
  description: string
  areaAffected: Area

  constructor(id: string, description: string, areaAffected: Area) {
    this.id = id
    this.description = description
    this.areaAffected = areaAffected
  }
}

let event01 = new Event('SARS I', '', areaMap.ocean)
let event02 = new Event('Singapore Sniper!', 'Friends and family say she was a straight shooter.', areaMap.hongKong)
let event03 = new Event('Tsunami', 'A Tidal Wave of Concerns!', areaMap.hongKong)
let event04 = new Event(
  'Community Workshops',
  'Pick another player - both you and that player sit out your next turns to instead report on the current tactical situation.',
  areaMap.islands
)
let event05 = new Event('SARS III', '', areaMap.mainland)
let event06 = new Event('SARS Mutation', "SAR-ry, there's still no cure!", areaMap.mainland)
let event07 = new Event('Drone Wars', 'No end in sight. #boring', areaMap.islands)
let event08 = new Event('VISA Shortage', 'Sources credit banks', areaMap.mainland)
let event09 = new Event('Cloning Scandal', 'The same problems all over again.', areaMap.ocean)
let event10 = new Event('Firmware Bugs!', 'City calls in the SWAT team.', areaMap.mainland)
let event11 = new Event('Shamate Uprising', 'City says shay-shay but no shay-shay to shamates.', areaMap.islands)
let event12 = new Event('Hurrican Spime', 'iEye did not see that coming!', areaMap.hongKong)
let event13 = new Event('SARS II', '', areaMap.hongKong)
let event14 = new Event("Fisherman's STD", 'Officials blame hookers', areaMap.ocean)
let event15 = new Event('Driverless Traffic Jam', 'Hong Kong?  More like HONK Kong!', areaMap.mainland)
let event16 = new Event('Flood!', 'Water they thinking after the flood?', areaMap.mainland)

export let eventMap: IEvent = {
  event01,
  event02,
  event03,
  event04,
  event05,
  event06,
  event07,
  event08,
  event09,
  event10,
  event11,
  event12,
  event13,
  event14,
  event15,
  event16,
}
