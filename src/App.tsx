import './App.css'
import { areaMap } from './js/Area'
import { items } from './js/Item'
import { players } from './js/Player'
import { resources } from './js/Resource'
import { siteMap } from './js/Site'
import { newspapers } from './js/Newspaper'
import { hexes } from './js/Hex'
import { announce } from './utils/Announcement'
import { ISymtactics } from './js/models'

function App() {
  let SYMTACTICS: ISymtactics = {
    areaMap,
    items,
    players,
    resources,
    siteMap,
    hexes,
    newspapers,

    todaysPaper: null,
    rounds: 10,
    winCondition: 'Whoever has the drone at the end of the game wins.',
  }

  // game methods
  function playGame(SYMTACTICS: ISymtactics) {
    console.log(SYMTACTICS)
    // shuffleNewspapers(SYMTACTICS.newspapers)
    // announce.gameStart(); // EMIT EVENT

    announce.round(1) // EMIT EVENT
    playRound()
    // for (i = 1; i < SYMTACTICS.rounds + 1; i++) {
    // 	announce.round(i);
    // 	playRound();
    // }

    // announce.gameEnd();
  }

  function playRound() {
    // setNewspaper(SYMTACTICS.newspapers)
    // announce.newspaper(SYMTACTICS.todaysPaper)
    // setAffectedZone(SYMTACTICS.todaysPaper.event)
    // checkPlayersAffectedByEvent(SYMTACTICS.todaysPaper.event, SYMTACTICS.hexes)
    // announce.PlayerLocations(SYMTACTICS.hexes)
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

  //   function declareWinner(players) {
  //     var winner
  //     players.forEach(function (player) {
  //       if (player.drone) {
  //         winner = player
  //       }
  //     })
  //     return winner
  //   }

  //   function shuffleNewspapers(newspapers: Newspaper[]) {
  //     shuffle(newspapers)
  //   }

  //   function setNewspaper(newspapers: Newspaper[]) {
  //     SYMTACTICS.todaysPaper = newspapers.pop()
  //     // console.log(IN,SYMTACTICS.todaysPaper);
  //   }

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

  //   function setAffectedZone(event) {
  //     for (zone of SYMTACTICS.zones) {
  //       if (event.zone === zone) zone.under_event = true
  //       else zone.under_event = false
  //     }
  //     // console.log(IN, event.zone)
  //   }

  playGame(SYMTACTICS)

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  )
}

export default App
