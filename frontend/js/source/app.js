"use strict";
var app = angular.module('SymtacticsFrontend', [
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
]);

app.value('versionSettings', {
    'title': 'SymtacticsBlockchain Frontend',
    'version': 'v0.1 alpha'
});


/* our wrapper to the web3 ETH service eventually */


app.factory('EthService', function($log) {

    $log.info("test");
    

    
    
    var eth = {};

    eth.pay = function(value) {
        console.log("eth service paying", value);

    }


    eth.preparePayout = function() {

        // subtract fee or something like that
        console.log("eth service, preparing payment");
    }

    // subtract game fee before these functions are called
    eth.payUniversalDefeat = function(accountId, payoutAmount) {

        //this.preparePayout();

        // call some web3

        accountId.value += payoutAmount;
        console.log("paying", payoutAmount, "to account id", accountId);
        


    }

    eth.payIndividualWin = function(accountId, payoutAmount) {

       // this.preparePayout();

        // web 3

        console.log("paying", payoutAmount, "to account id", accountId);


    }


    eth.payCollectiveWin = function(accounts, payoutAmount) {

       // this.preparePayout();

        
       
        // stub: even payout
             this.prize = precisionRound((this.bank / 3),2) - this.fee;
             // TO DO: call service to pay Ethereum accounts


    }

    return eth;

    
});

