;(function () {
  'use strict'

  app
    .controller('EthereumController', ['$log', '$location', 'versionSettings', '$scope'])

    .controller('EthereumController', function EthereumController($log, $location, versionSettings, $scope) {
      var self = this

      $scope.account1 = new ExternalAccount('nurbs', '0x2daBb24e53B5D14980Cb9Df20d05Bcfd3A9f4b0f', 100)
      $scope.account2 = new ExternalAccount('JVM_test_1', '0x14723a09acff6d2a60dcdf7aa4aff308fddc160c', 100)
      $scope.account3 = new ExternalAccount('JVM_test_2', '0x4b0897b0513fdc7c541b6d9d7e929c4e5364d2db', 100)

      $scope.accounts = [$scope.account1, $scope.account2, $scope.account3]

      $scope.SymtacticsAccount = new ExternalAccount('symtactics', '0x2daBb24e53B5D14980Cb9Df20d05Bcfd3Adddddd0f', 0)

      function ExternalAccount(id, address, value) {
        this.id = id
        this.address = address
        this.value = value
        this.buyIn = function (value) {
          this.value -= 1
          $scope.gameInstance.bank += 1
        }
      }
    })
})()
