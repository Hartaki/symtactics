/* contract for game state */

let SYMTACTICS = {
	zones: [],
	players: [],
	sites: {},
	hexes: [],
	resources: [],
	items: [],
	newspapers: [],
	todaysPaper: null,
	rounds: 10,
	winCondition: "Whoever has the drone at the end of the game wins.",
};

class Zone {
	constructor(name, speed) {
		this.name = name;
		this.speed = speed;
		this.under_event = false;
	}
}

let hongKong = new Zone("Hong Kong", 1),
	mainland = new Zone("Mainland", 1),
	islands = new Zone("Islands", 1),
	ocean = new Zone("Ocean", 2);

SYMTACTICS.zones.push(hongKong)
SYMTACTICS.zones.push(mainland)
SYMTACTICS.zones.push(islands)
SYMTACTICS.zones.push(ocean)

class Weather {
	constructor(name, description, effect) {
		this.name = name;
		this.description = description;
		this.effect = effect;
	}
}

let weatherGlitch = new Weather("Weather Glitch", "All players may travel twice in a row.", { moves: 2 }),
	heavyRain = new Weather("Heavy Rain", "All players must travel at 1/2 of their normal speed.", { speedFactor: .5 }),
	clear = new Weather("Clear", "Travel normally.", { speedFactor: 1 }),
	heatWave = new Weather("Heat Wave", "Players may not ENTER or EXIT sites this round.", { enter_exit: false }),
	pollutedWind = new Weather("Polluted Wind", "All players must pay 2 resources if they wish to travel this round.", { resources: 2 });

class Resource {
	constructor(name) {
		this.name = name;
		this.wild = false;
	}
}

let insectSpecies = new Resource("Insect Species"),
	bitcoin = new Resource("Bitcoin"),
	antibodies = new Resource("Antibodies"),
	bamboo = new Resource("Bamboo"),
	oysterDust = new Resource("Oyster Dust"),
	information = new Resource("Information"),
	uploads = new Resource("Uploads"),
	trashPiles = new Resource("Trash Piles");


class Item {
	constructor(name, zone) {
		this.name = name;
		this.zone = zone;
		this.label = "Use this item to ignore the effects of events on " + zone.name + ". Add to discard pile after use.";
	}
}

let spamFromYourInvestor = new Item("Spam from your Investor", islands),
	liamsPortal = new Item("Liam's Portal", islands),
	gundamBaroque = new Item("Gundam Baroque", islands),
	granularAddressability = new Item("Granular Addressability", mainland),
	structuralSolver = new Item("Structural Solver", mainland),
	sniperWaffle = new Item("Sniper Waffle", mainland),
	fishSauceUX = new Item("Fish Sauce UX", ocean),
	bandaiSDK = new Item("Bandai SDK", ocean),
	shamateStackdump = new Item("Shamate Stackdump", ocean),
	augmentedFoam = new Item("Augmented Foam", hongKong),
	minecraftPortscan = new Item("Minecraft Portscan", hongKong),
	ancientAndroidWear = new Item("Ancient AndroidWear", hongKong);

items = [
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
	ancientAndroidWear
];

// init newspapers
class Market {
	constructor(id, wilds) {
		this.id = id;
		this.wilds = wilds
	}
}

let bullMarket  = new Market("Bull Market", [bitcoin]),
	normal =  new Market("Normal", []),
	pandemic = new Market("Pandemic", [antibodies]),
	bioTech = new Market("Bio Tech", [bamboo, insectSpecies]),
	techBubble = new Market("Tech Bubble", [bitcoin, information, uploads]);

// init newspapers
class Newspaper {
	constructor(id, weather, market, event) {
		this.name = "Hong Kong News";
		this.id = id;
		this.weather = weather;
		this.market = market;
		this.event = event;
	}
}

let newspaper01 = new Newspaper("01", clear, bullMarket, { name: "SARS I", description: "", zone: ocean }),
	newspaper02 = new Newspaper("02", clear, bullMarket, { name: "Singapore Sniper!", description: "Friends and family say she was a straight shooter.", zone: hongKong }),
	newspaper03 = new Newspaper("03", clear, normal, { name: "Tsunami", description: "A Tidal Wave of Concerns!", zone: hongKong }),
	newspaper04 = new Newspaper("04", heatWave, pandemic, { name: "Community Workshops", description: "Pick another player - both you and that player sit out your next turns to instead report on the current tactical situation.", zone: islands }),
	newspaper05 = new Newspaper("05", heatWave, pandemic, { name: "SARS III", description: "", zone: mainland }),
	newspaper06 = new Newspaper("06", heatWave, bioTech, { name: "SARS Mutation", description: "SAR-ry, there's still no cure!", zone: mainland }),
	newspaper07 = new Newspaper("07", heatWave, techBubble, { name: "Drone Wars", description: "No end in sight. #boring", zone: islands }),
	newspaper08 = new Newspaper("08", heavyRain, bioTech, { name: "VISA Shortage", description: "Sources credit banks", zone: mainland }),
	newspaper09 = new Newspaper("09", heavyRain, normal, { name: "Cloning Scandal", description: "The same problems all over again.", zone: ocean }),
	newspaper10 = new Newspaper("10", heavyRain, normal, { name: "Firmware Bugs!", description: "City calls in the SWAT team.", zone: mainland }),
	newspaper11 = new Newspaper("11", heavyRain, bullMarket, { name: "Shamate Uprising", description: "City says shay-shay but no shay-shay to shamates.", zone: islands }),
	newspaper12 = new Newspaper("12", heavyRain, bioTech, { name: "Hurrican Spime", description: "iEye did not see that coming!", zone: hongKong }),
	newspaper13 = new Newspaper("13", pollutedWind, techBubble, { name: "SARS II", description: "", zone: hongKong }),
	newspaper14 = new Newspaper("14", pollutedWind, bullMarket, { name: "Fisherman's STD", description: "Officials blame hookers", zone: ocean }),
	newspaper15 = new Newspaper("15", pollutedWind, bullMarket, { name: "Driverless Traffic Jam", description: "Hong Kong?  More like HONK Kong!", zone: mainland }),
	newspaper16 = new Newspaper("16", weatherGlitch, normal, { name: "Flood!", description: "Water they thinking after the flood?", zone: mainland });

SYMTACTICS.newspapers = [
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
	newspaper16
];


// init players
class Player {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		this.hand = [];
		this.drone = false;
		this.roll = roll;
	}
}

let p1 = new Player("p1", "Taylor Swift"),
	p2 = new Player("p2", "Rem Koolhaas"),
	p3 = new Player("p3", "Malia Obama"),
	p4 = new Player("p4", "Young Thug"),
	p5 = new Player("p5", "The Mooch");

SYMTACTICS.players.push(p1);
SYMTACTICS.players.push(p2);
SYMTACTICS.players.push(p3);
SYMTACTICS.players.push(p4);
SYMTACTICS.players.push(p5);

// init sites
let hongKongCentral = {
	name: "Hong Kong Central",
	designated_resources: null,
	enter_exit: true,
	intervention: null,
	resources: null
	},
	oysterFarm = {
		name: "Oyster Farm",
		designated_resources: ["Bamboo", "Insect Species", "Trash Piles"],
		enter_exit: true,
		intervention: false,
		current_resources: []
	},
	trashVortex = {
		name: "Trash Vortex",
		designated_resources: ["Insect Species", "Information", "Bitcoin"],
		enter_exit: true,
		intervention: true,
		current_resources: ["Oyster Dust", "Bitcoin", "Uploads"]
	};

SYMTACTICS.sites.hongKongCentral = hongKongCentral;
SYMTACTICS.sites.oysterFarm = oysterFarm,
SYMTACTICS.sites.trashVortex = trashVortex;

// init hexes
class Hex {
	constructor(id, zone, site, players) {
		this.id = id;
		this.zone = zone;
		this.site = site;
		this.players = players;
	}
}

let hex000 = new Hex("000", hongKong, hongKongCentral, [p1, p2]),
	hex001 = new Hex("001", mainland, oysterFarm, [p3]),
	hex002 = new Hex("002", islands, null, [p4]),
	hex003 = new Hex("003", ocean, trashVortex, [p5]);

SYMTACTICS.hexes.push(hex000);
SYMTACTICS.hexes.push(hex001);
SYMTACTICS.hexes.push(hex002);
SYMTACTICS.hexes.push(hex003);

// log formatting
const A_PREFIX = "%cANNOUNCEMENT				"; 
const IN = "							";
const BREAK = "							======================================================"
let style = "font-weight: bold";
let style_penalty = "font-weight: bold; color: red";

// agent methods
function roll() {

	// roll dice
	var myRoll = Math.floor(Math.random() * 6) + 1;
	announceRoll(this, myRoll);

	// reassign drone
	if (myRoll === 6) {
		resetDrone(SYMTACTICS.players);
		this.drone = true;
		announceDroneReassignment(SYMTACTICS.players);
	}

	return myRoll;
};


// game methods
function playGame() {

	shuffleNewspapers(SYMTACTICS.newspapers);
	// announceGameStart(); // EMIT EVENT

	announceRound(1);
	playRound();
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
		player.roll();
	});
}

function resetDrone(players) {
	players.forEach(function (player) {
		if (player.drone === true) {
			player.drone = false;
		}
	});
}

function declareWinner(players) {
	var winner;
	players.forEach(function (player) {
		if (player.drone) {
			winner = player;
		}
	});
	return winner;
}

function shuffleNewspapers(newspapers) {
	shuffle(newspapers);
}

function setNewspaper(newspapers) {
	SYMTACTICS.todaysPaper = newspapers.pop();
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

function announceGameStart() {
	console.log(`${A_PREFIX}It's 2047 and Hong Kong is in the midst of ever-growing inequality.`, style);
	console.log(`%c${IN}${SYMTACTICS.winCondition}`, style);
	console.log(`%c${IN}Let the simulation game of future tactical urbanism begin.`, style);
}

function announceRound(round) {
	console.log(BREAK);
	console.log(`%cROUND ${round}`, style);
	console.log(`%c${IN}-`, style);
}

function announceNewspaper(newspaper) {
	announceWeather(newspaper.weather);
	announceMarket(newspaper.market);
	announceEvent(newspaper.event);
}

function announceWeather(weather) {
	console.log(`%cTHE WEATHER FORECAST IS 	${weather.name}`, style);
	console.log(`%c							${weather.description}`, style);
	console.log(`%c${IN}-`, style);
}

function announceMarket(market) {
	let marketReport = "";
	switch(market.wilds.length) {
		case 0:
			marketReport = "NOTHING IS WILD."
			break
		case 1:
			for (const wild of market.wilds) {
				marketReport += wild.name
			}
			marketReport += " IS WILD."
			break
		case 2:
		case 3:	
			for (const wild of market.wilds) {
				marketReport += wild.name + ", "
			}
			marketReport += "ARE WILD."
			break
	}
	console.log(`%cTHE MARKETS HAVE OPENED		${marketReport}`, style);
	console.log(`%c${IN}-`, style);
}

function announceEvent(event) {
	console.log(`%cEVENT						${event.name}!  ${event.description}`, style);
	console.log(`%cAREA AFFECTED				${event.zone.name}`, style);
}	

function setAffectedZone(event) {
	for (zone of SYMTACTICS.zones) {
		if (event.zone === zone) zone.under_event = true 
		else zone.under_event = false 
	}
	// console.log(IN, event.zone)
}

function announceRoll(player, roll) {
	console.log("ANNOUNCEMENT -", player.name, "(" + player.id + ") rolled a", roll + ".");
}

function announceDroneReassignment(players) {
	players.forEach(function (player) {
		console.log(`${A_PREFIX}drone is with ${player.name} (${player.id}), ${player.drone}`, style);
	});
}

function announcePlayerLocations(hexes) {
	// check each hex for a player
	hexes.forEach(function (hex) {
		if (hex.players.length > 0 && hex.site) {
			hex.players.forEach(function (player) {
				console.log(`${IN}${player.name} (${player.id}) is in		${hex.zone.name}	at		${hex.site.name}`);
			});
		} else if (hex.players.length) {
			hex.players.forEach(function (player) {
				console.log("ANNOUNCEMENT -", player.name, "(" + player.id + ") is in", hex.zone.name + ".");
			});
		}
	});
}

function announceGameEnd() {
	var winner = declareWinner(SYMTACTICS.players);
	console.log(`${A_PREFIX}GAME OVER! ${winner.name} WINS!`, style);
}


// utilities
function shuffle(array) {

	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}


// simulate SYMTACTICS
playGame();