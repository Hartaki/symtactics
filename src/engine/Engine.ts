import { Player } from '../js/Player'
import { Event } from '../js/Event'
import { IArea } from '../js/Area'
import { announce } from '../utils/Announcement'

/* ==========================================
    EVENT
   ========================================== */

function setAffectedArea(areaMap: IArea, event: Event) {
  for (let area in areaMap) {
    areaMap[area].affected = event.areaAffected.name === areaMap[area].name ? true : false
  }
}

function handlePlayersAffectedByEvent(event: Event, players: Player[]) {
  let actors = getPlayersAffectedByEvent(event, players)
  announce.playersAffectedByEvent(actors, event)
  // for (let actor of actors) {
  //     if (item) {
  //       player to discard item
  //     } else {
  //       player to discard 2 resources
  //       move playersAffectedByEvent
  //     }
  // }
}

function getPlayersAffectedByEvent(event: Event, players: Player[]): Player[] {
  return players.filter((p: Player) => p.hex.area.name === event.areaAffected.name)
}

//   function movePlayersAffectedByEvent(player) {}

/* ==========================================
    DRONE
   ========================================== */

//   function resetDrone(players) {
//     players.forEach(function (player) {
//       if (player.drone === true) {
//         player.drone = false
//       }
//     })
//   }

/* ==========================================
    END
   ========================================== */

function declareWinner(players: Player[]) {
  let winner
  // Todo: INDIVIDUAL WIN
  // Todo: COLLECTIVE WIN
  // Todo: UNIVERSAL DEFEAT

  winner = players.find((p) => p.drone)
  return winner
}

export { setAffectedArea, declareWinner, handlePlayersAffectedByEvent }
