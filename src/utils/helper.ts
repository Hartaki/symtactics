// @ts-nocheck

// log formatting
const A_PREFIX = '%cANNOUNCEMENT				'
const IN = '							'
const BREAK = '							======================================================'
let style = 'font-weight: bold'
let style_penalty = 'font-weight: bold; color: red'

function roll() {
  // roll dice
  var myRoll = Math.floor(Math.random() * 6) + 1
  announceRoll(this, myRoll)

  // reassign drone
  if (myRoll === 6) {
    resetDrone(SYMTACTICS.players)
    this.drone = true
    announceDroneReassignment(SYMTACTICS.players)
  }

  return myRoll
}

function announceRoll(player, roll) {
  console.log('ANNOUNCEMENT -', player.name, '(' + player.id + ') rolled a', roll + '.')
}

function announceEvent(event) {
  console.log(`%cEVENT						${event.name}!  ${event.description}`, style)
  console.log(`%cAREA AFFECTED				${event.zone.name}`, style)
}

function announceGameStart() {
  console.log(`${A_PREFIX}It's 2047 and Hong Kong is in the midst of ever-growing inequality.`, style)
  console.log(`%c${IN}${SYMTACTICS.winCondition}`, style)
  console.log(`%c${IN}Let the simulation game of future tactical urbanism begin.`, style)
}

function announceRound(round) {
  console.log(BREAK)
  console.log(`%cROUND ${round}`, style)
  console.log(`%c${IN}-`, style)
}

function announceNewspaper(newspaper) {
  announceWeather(newspaper.weather)
  announceMarket(newspaper.market)
  announceEvent(newspaper.event)
}

function announceWeather(weather) {
  console.log(`%cTHE WEATHER FORECAST IS 	${weather.name}`, style)
  console.log(`%c							${weather.description}`, style)
  console.log(`%c${IN}-`, style)
}

function announceMarket(market) {
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
  console.log(`%cTHE MARKETS HAVE OPENED		${marketReport}`, style)
  console.log(`%c${IN}-`, style)
}

function announceGameEnd() {
  var winner = declareWinner(SYMTACTICS.players)
  console.log(`${A_PREFIX}GAME OVER! ${winner.name} WINS!`, style)
}

function announceDroneReassignment(players) {
  players.forEach(function (player) {
    console.log(`${A_PREFIX}drone is with ${player.name} (${player.id}), ${player.drone}`, style)
  })
}

function announcePlayerLocations(hexes) {
  // check each hex for a player
  hexes.forEach(function (hex) {
    if (hex.players.length > 0 && hex.site) {
      hex.players.forEach(function (player) {
        console.log(`${IN}${player.name} (${player.id}) is in		${hex.zone.name}	at		${hex.site.name}`)
      })
    } else if (hex.players.length) {
      hex.players.forEach(function (player) {
        console.log('ANNOUNCEMENT -', player.name, '(' + player.id + ') is in', hex.zone.name + '.')
      })
    }
  })
}

export {
  roll,
  announceGameStart,
  announceRoll,
  announceRound,
  announceNewspaper,
  announceWeather,
  announceMarket,
  announceEvent,
}
