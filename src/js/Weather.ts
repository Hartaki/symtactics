export class Weather {
  name: string
  description: string
  effect?: any

  constructor(name: string, description: string, effect: any) {
    this.name = name
    this.description = description
    this.effect = effect
  }
}

let weatherGlitch = new Weather('Weather Glitch', 'All players may travel twice in a row.', { moves: 2 })
let heavyRain = new Weather('Heavy Rain', 'All players must travel at 1/2 of their normal speed.', {
  speedFactor: 0.5,
})
let clear = new Weather('Clear', 'Travel normally.', { speedFactor: 1 })
let heatWave = new Weather('Heat Wave', 'Players may not ENTER or EXIT sites this round.', { enter_exit: false })
let pollutedWind = new Weather('Polluted Wind', 'All players must pay 2 resources if they wish to travel this round.', {
  resources: 2,
})

export let weatherMap = { weatherGlitch, heavyRain, clear, heatWave, pollutedWind }
