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

const { weatherGlitch, heavyRain, clear, heatWave, pollutedWind } = weatherMap
const { normal, btcDominance, bahamas, pandemic, bioTech } = marketMap
const {
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
} = eventMap

//
let newspaper01 = new Newspaper('01', clear, bahamas, event01)
let newspaper02 = new Newspaper('02', clear, bahamas, event02)
let newspaper03 = new Newspaper('03', clear, normal, event03)
//
let newspaper04 = new Newspaper('04', heatWave, pandemic, event04)
let newspaper05 = new Newspaper('05', heatWave, pandemic, event05)
let newspaper06 = new Newspaper('06', heatWave, bioTech, event06)
let newspaper07 = new Newspaper('07', heatWave, btcDominance, event07)
//
let newspaper08 = new Newspaper('08', heavyRain, bioTech, event08)
let newspaper09 = new Newspaper('09', heavyRain, normal, event09)
let newspaper10 = new Newspaper('10', heavyRain, normal, event10)
let newspaper11 = new Newspaper('11', heavyRain, bahamas, event11)
let newspaper12 = new Newspaper('12', heavyRain, bioTech, event12)
//
let newspaper13 = new Newspaper('13', pollutedWind, btcDominance, event13)
let newspaper14 = new Newspaper('14', pollutedWind, bahamas, event14)
let newspaper15 = new Newspaper('15', pollutedWind, bioTech, event15)
//
let newspaper16 = new Newspaper('16', weatherGlitch, normal, event16)

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
