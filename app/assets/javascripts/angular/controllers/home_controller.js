angular.module('Hive.controllers')
  .controller('HomeController', ["$scope", "$state", "Facebook", "$rootScope",  function($scope, $state, Facebook, $rootScope) {

    $scope.fblogin = function() {
    //  From now on you can use the Facebook service just as Facebook api says
     Facebook.login(function(response) {

       $rootScope.token = response.authResponse.accessToken

       if(response.status === 'connected') {
         $state.go('main.subnavbar.analytics');
       }
       // Do something with response.
     });
   };

   $scope.getLoginStatus = function() {
     Facebook.getLoginStatus(function(response) {
       if(response.status === 'connected') {
         $scope.loggedIn = true;
       } else {
         $scope.loggedIn = false;
       }
     });
   };

   $scope.me = function() {
     Facebook.api('/me', function(response) {
       $scope.user = response;
       console.log($scope.user)
     });
   };
}]);
