# symtacticsBlockchain
Symtactics rough EVS implementation

## All contracts are JS psuedocode ##

SYMTACTICS

Use AR to create a virtual and physical layer to the game

Hexagonal Grids
http://www.redblobgames.com/grids/hexagons/#line-drawing


Hex
  id:
  zone:   [mainland, hong_kong, islands, ocean]
  site:   Site
  speed:  1 || 2 (water)
  players:  [ ] || [player_id…]



Site (extends Hex)
  hex_id:
  name:     “The Jungle”
  resources:  [resource, resource, resource]
  wild:     [resource, resource]
  enter_exit: true
  intervention: false
  players:    [player01, player03]



Player
  player_id:    “001”
  resources:  [ {name: “oyster_dust”, count: 2}, {name: “trash_piles”, count: 1} ]
  position:   hex_id
  moves:    rollToMove || rollToMove + 3    //
  turn:     true
  canDraw:    true              //
  canMove:    true              //
  canAttack:  true              // in the same hex as another player
  canIntervene: true
  canDrain:
  canUseDrone:  true
  drone:    true

  draw:   draw
  rollToMove: rollToMove
  rollToFight:  rollToFight
  move:   movePlayer

Fight (attacker, defender) {
  var attack  =   attacker.rollToFight( )
  var defense   =   defender.rollToFight( )

  // player attacks player
  if ( attack > defense ) {
    defender.payPenalty( resources, attacker )
    defender.move ( hong_kong_central )
    return
  }

  // drone attacks player
  if (attacker.drone) {
    var droneAttack   =   drone.rollToFight( )
    var droneDefense  =   defender.rollToFight( )

    if ( attack > defense ) {
      defender.payPenalty( resources, attacker )
      defender.move ( hong_kong_central )
      return
    }
  }

  function movePlayer(roll) {
  var moves = roll;
  if (drone) {
    moves += 3
  } 

Drone
  player:   null || player_id


Weather
  heavy_rain:     .5
  weather_glitch:
  heat_wave:    heatWave()

function heatWave( sites ) {
  sites.ForEach( function( site) {
    site.players.forEach( function(player) {
      player.canMove = false;
    }
}

Resource
  type:     "Oyster Dust"
  count:    12
  reserve:    6
  in_play:    3
  invested:   2
  debt:   1

Newspaper
- Weather
- Market
- Event
    -

Resource
- slick card scroll
- use blockchain somehow
