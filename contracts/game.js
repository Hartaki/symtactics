// External Account
class ExternalAccount {
  address = '0xca35b7d915458ef540ade6068dfe2f44e8fa733c'; 
  forwardingAddress = {} // the Player controller associated with this external account for a game instance
  balance = 100
}
let externalAccount = new Game()

class Game {
  balance = 0
  players = []
  
  deposit = ether => Game.balance += ether

  // outcome
  end = () => outcome = [ collective, individual, universalDefeat ][Math.round(Math.random() * 3)]

  // withdraw value from Bank and deposit into Accounts 
  payout = ( outcome, account, value ) => {
    // collective  - pay([p1, p2, ], game.bank) 
    // individual  - pay(p1, game.bank)
    // universal   - pay(game, game.bank)
  }
}

let game = new Game()

// Site Account
class SiteContract {
  address = '0x08970fed061e7747cd9a38d680a601510cb659fb'
  forwardingAddress = {} // the Site controller associated with this Site Contract for a game instance
  balance
  deposit = ether => Game.Bank += ether
}

// Simulate Game
ExternalAccount.deposit(1);
SiteAccount.deposit(1);
Game.end();


// helpers
function collectiveWin ([players], [sites], gameBalance) {
  
  // TODO: deduct debts & uneven growth milestones
  gameBalance -= discardPile
  gameBalance -= unevenGrowthMilestones

  // distribute site treasuries to all players
  for (const site in sites) {
    gameBalance - site.treasury
    splitPayment(players, site.treasury)
  }
  
  // distribute remaningdrawpile to all players

}
function IndividualWin ([player, unevenGrowth], gameBalance) {}
function UniversalDefeat (game, gameBalance) {}