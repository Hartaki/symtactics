// @ts-nocheck
import './App.css'
import { areaMap } from './js/Area'
import { items } from '.js/Item'
import { players } from '.js/Player'
import { resources } from './js/Resource'
import { siteMap } from './js/Site'
import { newspapers } from './js/Newspaper'

function App() {
  class Hex {
    constructor(id, zone, site, players) {
      this.id = id
      this.zone = zone
      this.site = site
      this.players = players
    }
  }

  let hex000 = new Hex('000', hongKong, hongKongCentral, [p1, p2])
  let hex001 = new Hex('001', mainland, oysterFarm, [p3])
  let hex002 = new Hex('002', islands, null, [p4])
  let hex003 = new Hex('003', ocean, trashVortex, [p5])

  // game methods
  function playGame() {
    shuffleNewspapers(SYMTACTICS.newspapers)
    // announceGameStart(); // EMIT EVENT

    announceRound(1) // EMIT EVENT
    playRound()
    // for (i = 1; i < SYMTACTICS.rounds + 1; i++) {
    // 	announceRound(i);
    // 	playRound();
    // }

    // announceGameEnd();
  }

  function playRound() {
    setNewspaper(SYMTACTICS.newspapers)
    announceNewspaper(SYMTACTICS.todaysPaper)
    setAffectedZone(SYMTACTICS.todaysPaper.event)
    checkPlayersAffectedByEvent(SYMTACTICS.todaysPaper.event, SYMTACTICS.hexes)
    // announcePlayerLocations(SYMTACTICS.hexes)
    // simulatePlayers(SYMTACTICS.players);
  }

  function simulatePlayers(players) {
    players.forEach(function (player) {
      player.roll()
    })
  }

  function resetDrone(players) {
    players.forEach(function (player) {
      if (player.drone === true) {
        player.drone = false
      }
    })
  }

  function declareWinner(players) {
    var winner
    players.forEach(function (player) {
      if (player.drone) {
        winner = player
      }
    })
    return winner
  }

  function shuffleNewspapers(newspapers) {
    shuffle(newspapers)
  }

  function setNewspaper(newspapers) {
    SYMTACTICS.todaysPaper = newspapers.pop()
    // console.log(IN,SYMTACTICS.todaysPaper);
  }

  function checkPlayersAffectedByEvent(event, hexes) {
    for (hex of hexes) {
      if (hex.players.length) {
        for (player of hex.players) {
          if (event.zone.name === hex.zone.name) {
            console.log(`${IN}${player.name} is affected by ${event.name}`)
            console.log(`${IN}		pay item || pay 2 resources & move to HKC`)
            // TODO: move playersAffectedByEvent
          }
        }
      }
    }
  }

  function movePlayersAffectedByEvent(player) {}
  // announcements

  function setAffectedZone(event) {
    for (zone of SYMTACTICS.zones) {
      if (event.zone === zone) zone.under_event = true
      else zone.under_event = false
    }
    // console.log(IN, event.zone)
  }

  // simulate SYMTACTICS
  let SYMTACTICS = {
    areaMap,
    players,
    siteMap,
    hexes: [hex000, hex001, hex002, hex003],
    resources,
    items,
    newspapers,

    todaysPaper: null,
    rounds: 10,
    winCondition: 'Whoever has the drone at the end of the game wins.',
  }

  playGame()

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  )
}

export default App
