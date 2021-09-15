import { weatherMap, Weather } from './Weather'
import { marketMap, Market } from './Market'
import { eventMap, Event } from './Event'

export class Newspaper {
  id: string
  weather: Weather
  market: Market
  event: Event

  constructor(id: string, weather: Weather, market: Market, event: Event) {
    this.id = id
    this.weather = weather
    this.market = market
    this.event = event
  }
}

let newspaper01 = new Newspaper('01', weatherMap.clear, marketMap.bullMarket, eventMap.event01)
let newspaper02 = new Newspaper('02', weatherMap.clear, marketMap.bullMarket, eventMap.event02)
let newspaper03 = new Newspaper('03', weatherMap.clear, marketMap.normal, eventMap.event03)
let newspaper04 = new Newspaper('04', weatherMap.heatWave, marketMap.pandemic, eventMap.event04)
let newspaper05 = new Newspaper('05', weatherMap.heatWave, marketMap.pandemic, eventMap.event05)
let newspaper06 = new Newspaper('06', weatherMap.heatWave, marketMap.bioTech, eventMap.event06)
let newspaper07 = new Newspaper('07', weatherMap.heatWave, marketMap.techBubble, eventMap.event07)
let newspaper08 = new Newspaper('08', weatherMap.heavyRain, marketMap.bioTech, eventMap.event08)
let newspaper09 = new Newspaper('09', weatherMap.heavyRain, marketMap.normal, eventMap.event09)
let newspaper10 = new Newspaper('10', weatherMap.heavyRain, marketMap.normal, eventMap.event10)
let newspaper11 = new Newspaper('11', weatherMap.heavyRain, marketMap.bullMarket, eventMap.event11)
let newspaper12 = new Newspaper('12', weatherMap.heavyRain, marketMap.bioTech, eventMap.event12)
let newspaper13 = new Newspaper('13', weatherMap.pollutedWind, marketMap.techBubble, eventMap.event13)
let newspaper14 = new Newspaper('14', weatherMap.pollutedWind, marketMap.bullMarket, eventMap.event14)
let newspaper15 = new Newspaper('15', weatherMap.pollutedWind, marketMap.bullMarket, eventMap.event15)
let newspaper16 = new Newspaper('16', weatherMap.weatherGlitch, marketMap.normal, eventMap.event16)

export let newspapers = [
  newspaper01,
  newspaper02,
  newspaper03,
  newspaper04,
  newspaper05,
  newspaper06,
  newspaper07,
  newspaper08,
  newspaper09,
  newspaper10,
  newspaper11,
  newspaper12,
  newspaper13,
  newspaper14,
  newspaper15,
  newspaper16,
]
