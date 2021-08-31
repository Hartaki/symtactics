(function(){
    'use strict';
    
    app
      .controller('AppController', [
        '$log',
        '$location',
        'versionSettings',
        'EthService',
        '$scope'])
    
      .controller('AppController', function AppController($log, $location, versionSettings, EthService, $scope) {
        var self = this;
        self.versionSettings = versionSettings;
        
        console.log('AppController, versionSettings', versionSettings, self.versionSettings);


        console.log("GOt ethService", EthService);


        self.game = {}; // the frontend logic
        EthService; // 


        















        
        
        function Game() {
            this.bank = 0;
            // this.inProgress = false;
            // this.players = [];
            this.fee = .1;
            this.fees = .3;
            this.prize = 0;
            this.players = $scope.accounts;
            this.symtacticsAccount = $scope.symtacticsAccount;


            this.resolveGame = function() {
              console.log("resolving the game");

              var outcome = null;

              var random = Math.floor(Math.random() * 10);

              if (random < 3) {
                outcome = 'individual win';
              } else if (random < 7) {
                outcome = 'collective win';
              } else {
                outcome = 'universal defeat';
              }
              console.log("random outcome was", outcome);

              switch(outcome) {

                case 'individual win':

                  // identify a winning player at random
                  // give prize pool to player


                  break;

                case 'collective win':

                  // split prize pool evenly
                  // send to players

                  break;

                case 'universal defeat':

                  // send all prizemoney to symtactics account
                  var payoutAmount = this.prize;

                  EthService.payUniversalDefeat($scope.SymtacticsAccount, payoutAmount);


                  //$scope.symtacticsAccount.value = payoutAmount;






                  break;

              }
            }

          
        }

        $scope.gameInstance = new Game();

        function precisionRound(number, precision) {
          var factor = Math.pow(10, precision);
          return Math.round(number * factor) / factor;
        }
      })
    
    })();