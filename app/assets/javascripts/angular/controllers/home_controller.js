angular.module('Hive.controllers')
  .controller('HomeController', ["$scope", "$state", "Facebook", "$rootScope", '$window',  function($scope, $state, Facebook, $rootScope, $window) {


    $scope.passcode = false
    $scope.fb = true


   $scope.submitLogin = function() {
     console.log($scope.user.password)
     result = {
       page_id: '1779236905645324',
       type: 'honeypot_v0',
       status: 'success'
     }

     if(result.type == 'honeypot_v0') {
       $window.open('https://damp-escarpment-77884.herokuapp.com/analytics/basic', '_self')
     }
   }








}]);
