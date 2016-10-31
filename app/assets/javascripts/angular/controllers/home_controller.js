angular.module('Hive.controllers')
  .controller('HomeController', ["$scope", "$state", "Facebook", "$rootScope", "$window", "UserService",  function($scope, $state, Facebook, $rootScope, $window, UserService) {


    $scope.passcode = false
    $scope.fb = true


   $scope.submitLogin = function() {
     console.log($scope.user.password)

     data = {
       "passcode": $scope.user.password
     }

     UserService.hive(data)
      .then(function(d){
        console.log(d)

    });

    //  result = {
    //    page_id: '1779236905645324',
    //    type: 'honeypot_v0',
    //    status: 'success'
    //  }
     //
    //  if(result.type == 'honeypot_v0') {
    //    $window.open('https://cryptic-ridge-33738.herokuapp.com/login', '_self')
    //  }
   }








}]);
