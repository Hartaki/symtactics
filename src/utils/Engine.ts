import { Player } from '../js/Player'

function declareWinner(players: Player[]) {
  let winner
  // Todo: INDIVIDUAL WIN
  // Todo: COLLECTIVE WIN
  // Todo: UNIVERSAL DEFEAT

  winner = players.find((p) => p.drone)
  return winner
}

export { declareWinner }
