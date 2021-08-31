(function(){
    'use strict';
    
    app
      .controller('GameController', [
        '$log',
        '$location',
        'versionSettings',
        '$scope'])
    
      .controller('GameController', function GameController($log, $location, versionSettings, $scope) {
        var self = this;
        self.versionSettings = versionSettings;
        
        console.log('GameController, versionSettings', versionSettings, self.versionSettings);
    
      })
    
    })();
    