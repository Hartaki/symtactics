import './App.css'
import { areaMap } from './js/Area'
import { items } from './js/Item'
import { Player, players } from './js/Player'
import { resources } from './js/Resource'
import { siteMap } from './js/Site'
import { Newspaper, newspapers } from './js/Newspaper'
import { hexes } from './js/Hex'
import { announce } from './utils/Announcement'
import { ISymtactics } from './js/models'
import { shuffle } from './utils/helper'
import { declareWinner, setAffectedArea, handlePlayersAffectedByEvent, handleRoll } from './engine/Engine'
import { mobility } from './js/Weather'

const SIMULATION = false

function App() {
  let SYMTACTICS: ISymtactics = {
    areaMap,
    items,
    players,
    resources,
    siteMap,
    hexes,
    newspapers,
    todaysPaper: undefined,
    mobility,
    rounds: [0, 0, 0, 1, 0, 0, 0, 0, 0],
    winCondition: 'Whoever has the drone at the end of the game wins.',
  }

  console.table(SYMTACTICS.newspapers)

  shuffle(SYMTACTICS.newspapers)
  shuffle(SYMTACTICS.resources)

  function init(SYMTACTICS: ISymtactics) {
    // announce.gameStart(SYMTACTICS)

    // SIMULATE
    if (SIMULATION) {
      for (let i = 1; i < SYMTACTICS.rounds.length + 1; i++) {
        // announce.state(SYMTACTICS)
        announce.round(i)
        playRound()
      }
      announce.gameEnd(declareWinner(SYMTACTICS.players))
    }
  }

  function playRound() {
    setNewspaper(SYMTACTICS.newspapers)
    announce.newspaper(SYMTACTICS.todaysPaper)
    if (SYMTACTICS.todaysPaper) {
      // HANDLE EVENT/AFFECTED AREA
      setAffectedArea(SYMTACTICS.areaMap, SYMTACTICS.todaysPaper!.event)
      handlePlayersAffectedByEvent(SYMTACTICS.todaysPaper!.event, SYMTACTICS.players)
      announce.playerLocations(SYMTACTICS.players)
      simulatePlayers(SYMTACTICS.players)
    }
  }

  function simulatePlayers(players: Player[]) {
    players.forEach((player: Player) => {
      // player.draw()
      let roll = player.roll()
      announce.roll(player, roll)
      handleRoll(roll)

      // player does shit
    })
  }

  function setNewspaper(newspapers: Newspaper[]) {
    SYMTACTICS.todaysPaper = newspapers.pop()
  }

  init(SYMTACTICS)

  return <div className="App"></div>
}

export default App
