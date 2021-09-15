import './App.css'
import { areaMap } from './js/Area'
import { items } from './js/Item'
import { players } from './js/Player'
import { resources } from './js/Resource'
import { siteMap } from './js/Site'
import { Newspaper, newspapers } from './js/Newspaper'
import { hexes } from './js/Hex'
import { announce } from './utils/Announcement'
import { ISymtactics } from './js/models'
import { shuffle } from './utils/helper'
import { declareWinner, setAffectedArea } from './utils/Engine'

function App() {
  // init game
  let SYMTACTICS: ISymtactics = {
    areaMap,
    items,
    players,
    resources,
    siteMap,
    hexes,
    newspapers,

    todaysPaper: undefined,
    rounds: 10,
    winCondition: 'Whoever has the drone at the end of the game wins.',
  }

  let simulation = true

  // game methods
  function playGame(SYMTACTICS: ISymtactics) {
    shuffle(SYMTACTICS.newspapers)
    announce.gameStart(SYMTACTICS) // EMIT EVENT

    // SIMULATE
    if (simulation) {
      for (let i = 1; i < SYMTACTICS.rounds + 1; i++) {
        announce.gameState(SYMTACTICS)
        announce.round(i) // EMIT EVENT
        playRound()
      }
      announce.gameEnd(declareWinner(SYMTACTICS.players))
    }
  }

  function playRound() {
    setNewspaper(SYMTACTICS.newspapers)
    announce.newspaper(SYMTACTICS.todaysPaper)

    if (SYMTACTICS.todaysPaper) {
      setAffectedArea(SYMTACTICS.areaMap, SYMTACTICS.todaysPaper!.event)
      // checkPlayersAffectedByEvent(SYMTACTICS.todaysPaper.event, SYMTACTICS.hexes)
      // announce.PlayerLocations(SYMTACTICS.hexes)
    }
    // simulatePlayers(SYMTACTICS.players);
  }

  //   function simulatePlayers(players) {
  //     players.forEach(function (player) {
  //       player.roll()
  //     })
  //   }

  //   function resetDrone(players) {
  //     players.forEach(function (player) {
  //       if (player.drone === true) {
  //         player.drone = false
  //       }
  //     })
  //   }

  //   function shuffleNewspapers(newspapers: Newspaper[]) {
  //     shuffle(newspapers)
  //   }

  function setNewspaper(newspapers: Newspaper[]) {
    SYMTACTICS.todaysPaper = newspapers.pop()
  }

  //   function checkPlayersAffectedByEvent(event: Event, hexes: Hex[]) {
  // for (let hex of hexes) {
  //   if (hex.players.length) {
  //     for (player of hex.players) {
  //       if (event.zone.name === hex.zone.name) {
  //         console.log(`${IN}${player.name} is affected by ${event.name}`)
  //         console.log(`${IN}		pay item || pay 2 resources & move to HKC`)
  //         // TODO: move playersAffectedByEvent
  //       }
  //     }
  //   }
  // }
  //   }

  //   function movePlayersAffectedByEvent(player) {}

  playGame(SYMTACTICS)

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  )
}

export default App
