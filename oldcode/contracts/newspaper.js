SYMTACTICS.drawPile     = [ ];
SYMTACTICS.discardPile  = [ ];

// init newspapers
SYMTACTICS.Newspaper = function(id, weather, market, event) {
    
  this.name     = "Hong Kong News";    
  this.id       = id;
  this.weather  = weather;
  this.market   = market;
  this.event    = event;

};

SYMTACTICS.newspaper01 = new SYMTACTICS.Newspaper("01", SYMTACTICS.clear, SYMTACTICS.bullMarket, {name: "SARS I", description: "", zone: SYMTACTICS.ocean});
SYMTACTICS.newspaper02 = new SYMTACTICS.Newspaper("02", SYMTACTICS.clear, SYMTACTICS.bullMarket, {name: "Singapore Sniper!", description: "Friends and family say she was a straight shooter.", zone: SYMTACTICS.hongKong});
SYMTACTICS.newspaper03 = new SYMTACTICS.Newspaper("03", SYMTACTICS.clear, SYMTACTICS.normalMarket, {name: "Tsunami", description: "A Tidal Wave of Concerns!", zone: SYMTACTICS.hongKong});
SYMTACTICS.newspaper04 = new SYMTACTICS.Newspaper("04", SYMTACTICS.heatWave, SYMTACTICS.pandemic, {name: "Community Workshops", description: "Pick another player - both you and that player sit out your next turns to instead report on the current tactical situation.", zone: SYMTACTICS.islands});
SYMTACTICS.newspaper05 = new SYMTACTICS.Newspaper("05", SYMTACTICS.heatWave, SYMTACTICS.pandemic, {name: "SARS III", description: "", zone: SYMTACTICS.mainland});
SYMTACTICS.newspaper06 = new SYMTACTICS.Newspaper("06", SYMTACTICS.heatWave, SYMTACTICS.bioTech, {name: "SARS Mutation", description: "SAR-ry, there's still no cure!", zone: SYMTACTICS.mainland});
SYMTACTICS.newspaper07 = new SYMTACTICS.Newspaper("07", SYMTACTICS.heatWave, SYMTACTICS.techBubble, {name: "Drone Wars", description: "No end in sight. #boring", zone: SYMTACTICS.islands});
SYMTACTICS.newspaper08 = new SYMTACTICS.Newspaper("08", SYMTACTICS.heavyRain, SYMTACTICS.bioTech, {name: "VISA Shortage", description: "Sources credit banks", zone: SYMTACTICS.mainland});
SYMTACTICS.newspaper09 = new SYMTACTICS.Newspaper("09", SYMTACTICS.heavyRain, SYMTACTICS.clean, {name: "Cloning Scandal", description: "The same problems all over again.", zone: SYMTACTICS.ocean});
SYMTACTICS.newspaper10 = new SYMTACTICS.Newspaper("10", SYMTACTICS.heavyRain, SYMTACTICS.clean, {name: "Firmware Bugs!", description: "City calls in the SWAT team.", zone: SYMTACTICS.mainland});
SYMTACTICS.newspaper11 = new SYMTACTICS.Newspaper("11", SYMTACTICS.heavyRain, SYMTACTICS.bullMarket, {name: "Shamate Uprising", description: "City says shay-shay but no shay-shay to shamates.", zone: SYMTACTICS.islands});
SYMTACTICS.newspaper12 = new SYMTACTICS.Newspaper("12", SYMTACTICS.heavyRain, SYMTACTICS.bioTech, {name: "Hurrican Spime", description: "iEye did not see that coming!", zone: SYMTACTICS.hongKong});
SYMTACTICS.newspaper13 = new SYMTACTICS.Newspaper("13", SYMTACTICS.pollutedWind, SYMTACTICS.techBubble, {name: "SARS II", description: "", zone: SYMTACTICS.hongKong});
SYMTACTICS.newspaper14 = new SYMTACTICS.Newspaper("14", SYMTACTICS.pollutedWind, SYMTACTICS.bullMarket, {name: "Fisherman's STD", description: "Officials blame hookers", zone: SYMTACTICS.ocean});
SYMTACTICS.newspaper15 = new SYMTACTICS.Newspaper("15", SYMTACTICS.pollutedWind, SYMTACTICS.bullMarket, {name: "Driverless Traffic Jam", description: "Hong Kong?  More like HONK Kong!", zone: SYMTACTICS.mainland});
SYMTACTICS.newspaper16 = new SYMTACTICS.Newspaper("16", SYMTACTICS.weatherGlitch, SYMTACTICS.normalMarket, {name: "Flood!", description: "Water they thinking after the flood?", zone: SYMTACTICS.mainland});