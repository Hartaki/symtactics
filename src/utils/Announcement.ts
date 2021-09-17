import { ISymtactics } from '../js/models'
import { Player } from '../js/Player'
import { Event } from '../js/Event'
import { Newspaper } from '../js/Newspaper'
import { Weather } from '../js/Weather'
import { Market } from '../js/Market'

// log formatting
const A_PREFIX = '%cANNOUNCEMENT				'
const IN = '							'
const BREAK = '							======================================================'

let style = {
  bold: 'font-weight: bold',
  reward: 'font-weight: bold; color: red',
  penalty: 'font-weight: bold; color: red',
  fight: 'font-weight: bold; color: red',
  drone: 'font-weight: bold; color: red',
}

function gameStart(SYMTACTICS: ISymtactics) {
  console.log(`${A_PREFIX}It's 2047 and Hong Kong is in the midst of ever-growing inequality.`, style.bold)
  console.log(`%c${IN}${SYMTACTICS.winCondition}`, style.bold)
  console.log(`%c${IN}Let the simulation game of future tactical urbanism begin.`, style.bold)
}

function state(SYMTACTICS: ISymtactics) {
  console.log(`                  STATE  `, SYMTACTICS)
}

function roll(player: Player, roll: number) {
  console.log('ANNOUNCEMENT -', player.name, '(' + player.id + ') rolled a', roll + '.')
}

function event(event: Event) {
  console.log(`%c                  EVENT 	${event.id}!  ${event.description}`, style.bold)
  console.log(`%c							${event.areaAffected.name}`, style.bold)
  console.log(`%c${IN}`, style.bold)
}

function round(round: number) {
  console.log(BREAK)
  console.log(`%cROUND ${round}`, style.bold)
  console.log(`%c${IN}`, style.bold)
}

function newspaper(newspaper: Newspaper | undefined) {
  if (!newspaper) return
  weather(newspaper.weather)
  market(newspaper.market)
  event(newspaper.event)
}

function weather(weather: Weather) {
  console.log(`%c                WEATHER 	${weather.name}`, style.bold)
  console.log(`%c							${weather.description}`, style.bold)
  console.log(`%c${IN}`, style.bold)
}

function market(market: Market) {
  let marketReport = ''
  switch (market.wilds.length) {
    case 0:
      marketReport = 'NOTHING IS WILD.'
      break
    case 1:
      for (const wild of market.wilds) {
        marketReport += wild.name
      }
      marketReport += ' IS WILD.'
      break
    case 2:
    case 3:
      for (const wild of market.wilds) {
        marketReport += wild.name + ', '
      }
      marketReport += 'ARE WILD.'
      break
  }
  console.log(`%c                MARKETS		${market.id}`, style.bold)
  console.log(`%c${IN}${marketReport}`, style.bold)
  console.log(`%c${IN}`, style.bold)
}

function playersAffectedByEvent(players: Player[], event: Event) {
  players.forEach((player: Player) => {
    console.log(`%c${IN}${player.name} is affected by ${event.id}`, style.penalty)
    // TODO: handle community workshops
    console.log(`${IN}		pay item || pay 2 resources & move to HKC`)
  })
}

function gameEnd(winner: Player | undefined) {
  console.log(BREAK)
  if (winner) {
    console.log(`${A_PREFIX}GAME OVER! ${winner.name} WINS!`, style.bold)
  } else {
    console.log(`${A_PREFIX}GAME OVER! NO WINNER`, style.bold)
  }
}

// function droneReassignment(players) {
//   players.forEach(function (player) {
//     console.log(`${A_PREFIX}drone is with ${player.name} (${player.id}), ${player.drone}`, style.bold)
//   })
// }

// function playerLocations(hexes) {
//   // check each hex for a player
//   hexes.forEach(function (hex) {
//     if (hex.players.length > 0 && hex.site) {
//       hex.players.forEach(function (player) {
//         console.log(`${IN}${player.name} (${player.id}) is in		${hex.zone.name}	at		${hex.site.name}`)
//       })
//     } else if (hex.players.length) {
//       hex.players.forEach(function (player) {
//         console.log('ANNOUNCEMENT -', player.name, '(' + player.id + ') is in', hex.zone.name + '.')
//       })
//     }
//   })
// }

export let announce = {
  gameStart,
  state,
  roll,
  round,
  newspaper,
  weather,
  market,
  event,
  gameEnd,
  playersAffectedByEvent,
}
