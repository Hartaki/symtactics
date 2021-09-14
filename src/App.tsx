// @ts-nocheck
import './App.css'
import {Zone, zones} from './js/Zone'
import resources from './js/Resource'
import weather from './js/Weather'

function App() {  
  class Item {
    constructor(name, zone) {
      this.name = name
      this.zone = zone
      this.label = 'Use this item to ignore the effects of events on ' + zone.name + '. Add to discard pile after use.'
    }
  }

  let spamFromYourInvestor = new Item('Spam from your Investor', islands)
  let liamsPortal = new Item("Liam's Portal", islands)
  let gundamBaroque = new Item('Gundam Baroque', islands)
  let granularAddressability = new Item('Granular Addressability', mainland)
  let structuralSolver = new Item('Structural Solver', mainland)
  let sniperWaffle = new Item('Sniper Waffle', mainland)
  let fishSauceUX = new Item('Fish Sauce UX', ocean)
  let bandaiSDK = new Item('Bandai SDK', ocean)
  let shamateStackdump = new Item('Shamate Stackdump', ocean)
  let augmentedFoam = new Item('Augmented Foam', hongKong)
  let minecraftPortscan = new Item('Minecraft Portscan', hongKong)
  let ancientAndroidWear = new Item('Ancient AndroidWear', hongKong)

  // init newspapers
  class Market {
    constructor(id, wilds) {
      this.id = id
      this.wilds = wilds
    }
  }

  let bullMarket = new Market('Bull Market', [bitcoin])
  let normal = new Market('Normal', [])
  let pandemic = new Market('Pandemic', [antibodies])
  let bioTech = new Market('Bio Tech', [bamboo, insectSpecies])
  let techBubble = new Market('Tech Bubble', [bitcoin, information, uploads])

  // init newspapers
  class Newspaper {
    constructor(id, weather, market, event) {
      this.name = 'Hong Kong News'
      this.id = id
      this.weather = weather
      this.market = market
      this.event = event
    }
  }

  let newspaper01 = new Newspaper('01', clear, bullMarket, {
    name: 'SARS I',
    description: '',
    zone: ocean,
  })
  let newspaper02 = new Newspaper('02', clear, bullMarket, {
    name: 'Singapore Sniper!',
    description: 'Friends and family say she was a straight shooter.',
    zone: hongKong,
  })
  let newspaper03 = new Newspaper('03', clear, normal, {
    name: 'Tsunami',
    description: 'A Tidal Wave of Concerns!',
    zone: hongKong,
  })
  let newspaper04 = new Newspaper('04', heatWave, pandemic, {
    name: 'Community Workshops',
    description:
      'Pick another player - both you and that player sit out your next turns to instead report on the current tactical situation.',
    zone: islands,
  })
  let newspaper05 = new Newspaper('05', heatWave, pandemic, {
    name: 'SARS III',
    description: '',
    zone: mainland,
  })
  let newspaper06 = new Newspaper('06', heatWave, bioTech, {
    name: 'SARS Mutation',
    description: "SAR-ry, there's still no cure!",
    zone: mainland,
  })
  let newspaper07 = new Newspaper('07', heatWave, techBubble, {
    name: 'Drone Wars',
    description: 'No end in sight. #boring',
    zone: islands,
  })
  let newspaper08 = new Newspaper('08', heavyRain, bioTech, {
    name: 'VISA Shortage',
    description: 'Sources credit banks',
    zone: mainland,
  })
  let newspaper09 = new Newspaper('09', heavyRain, normal, {
    name: 'Cloning Scandal',
    description: 'The same problems all over again.',
    zone: ocean,
  })
  let newspaper10 = new Newspaper('10', heavyRain, normal, {
    name: 'Firmware Bugs!',
    description: 'City calls in the SWAT team.',
    zone: mainland,
  })
  let newspaper11 = new Newspaper('11', heavyRain, bullMarket, {
    name: 'Shamate Uprising',
    description: 'City says shay-shay but no shay-shay to shamates.',
    zone: islands,
  })
  let newspaper12 = new Newspaper('12', heavyRain, bioTech, {
    name: 'Hurrican Spime',
    description: 'iEye did not see that coming!',
    zone: hongKong,
  })
  let newspaper13 = new Newspaper('13', pollutedWind, techBubble, {
    name: 'SARS II',
    description: '',
    zone: hongKong,
  })
  let newspaper14 = new Newspaper('14', pollutedWind, bullMarket, {
    name: "Fisherman's STD",
    description: 'Officials blame hookers',
    zone: ocean,
  })
  let newspaper15 = new Newspaper('15', pollutedWind, bullMarket, {
    name: 'Driverless Traffic Jam',
    description: 'Hong Kong?  More like HONK Kong!',
    zone: mainland,
  })
  let newspaper16 = new Newspaper('16', weatherGlitch, normal, {
    name: 'Flood!',
    description: 'Water they thinking after the flood?',
    zone: mainland,
  })

  // init players
  

  // init sites
  let hongKongCentral = {
    name: 'Hong Kong Central',
    designated_resources: null,
    enter_exit: true,
    intervention: null,
    resources: null,
  }
  let oysterFarm = {
    name: 'Oyster Farm',
    designated_resources: ['Bamboo', 'Insect Species', 'Trash Piles'],
    enter_exit: true,
    intervention: false,
    current_resources: [],
  }
  let trashVortex = {
    name: 'Trash Vortex',
    designated_resources: ['Insect Species', 'Information', 'Bitcoin'],
    enter_exit: true,
    intervention: true,
    current_resources: ['Oyster Dust', 'Bitcoin', 'Uploads'],
  }

  // init hexes
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
    zones,
    players: ,
    sites: { hongKongCentral, oysterFarm, trashVortex },
    hexes: [hex000, hex001, hex002, hex003],
    resources: [],
    items: [
      spamFromYourInvestor,
      liamsPortal,
      gundamBaroque,
      granularAddressability,
      structuralSolver,
      sniperWaffle,
      fishSauceUX,
      bandaiSDK,
      shamateStackdump,
      augmentedFoam,
      minecraftPortscan,
      ancientAndroidWear,
    ],
    newspapers: [
      newspaper01,
      newspaper02,
      newspaper03,
      newspaper04,
      newspaper05,
      newspaper06,
      newspaper07,
      newspaper08,
      newspaper09,
      newspaper10,
      newspaper11,
      newspaper12,
      newspaper13,
      newspaper14,
      newspaper15,
      newspaper16,
    ],
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
