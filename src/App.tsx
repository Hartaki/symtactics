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
import { declareWinner, setAffectedArea, handlePlayersAffectedByEvent } from './engine/Engine'

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

  function playGame(SYMTACTICS: ISymtactics) {
    shuffle(SYMTACTICS.newspapers)
    shuffle(SYMTACTICS.resources)
    announce.gameStart(SYMTACTICS)

    // SIMULATE
    if (simulation) {
      for (let i = 1; i < SYMTACTICS.rounds + 1; i++) {
        announce.state(SYMTACTICS)
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
      //   announce.PlayerLocations(SYMTACTICS.players)
      // simulatePlayers(SYMTACTICS.players);
    }
  }

  /*

  function simulatePlayers(players) {
    players.forEach(function (player) {        
        player.draw()
        player.roll()
        // announceRoll(this, myRoll)
        // player does shit
    })
  }
   */

  function setNewspaper(newspapers: Newspaper[]) {
    SYMTACTICS.todaysPaper = newspapers.pop()
  }

  playGame(SYMTACTICS)

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  )
}

export default App
