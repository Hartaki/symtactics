import { Player } from '../js/Player'
import { Event } from '../js/Event'
import { IArea } from '../js/Area'

function setAffectedArea(areaMap: IArea, event: Event) {
  for (let area in areaMap) {
    areaMap[area].affected = event.areaAffected.name === areaMap[area].name ? true : false
  }
}

function declareWinner(players: Player[]) {
  let winner
  // Todo: INDIVIDUAL WIN
  // Todo: COLLECTIVE WIN
  // Todo: UNIVERSAL DEFEAT

  winner = players.find((p) => p.drone)
  return winner
}

export { setAffectedArea, declareWinner }
