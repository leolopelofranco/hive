angular.module('Hive.controllers')
  .controller('HomeController', ["$scope", "$state", "Facebook", "$rootScope",  function($scope, $state, Facebook, $rootScope) {

    $scope.fblogin = function() {
    //  From now on you can use the Facebook service just as Facebook api says
     Facebook.login(function(response) {

       $rootScope.token = response.authResponse.accessToken

       if(response.status === 'connected') {
         $state.go('https://damp-escarpment-77884.herokuapp.com/analytics/basic');
       }
       // Do something with response.
     });
   };

   getLoginStatus = function() {
     Facebook.getLoginStatus(function(response) {
       console.log(response)
       if(response.status === 'connected') {
         $scope.loggedIn = true;
       } else {
         $scope.loggedIn = false;
       }
    });


  }




   $scope.getLoginStatus = function() {
     getLoginStatus()
   };




   $scope.me = function() {
     Facebook.api('/me', function(response) {
       $scope.user = response;
       console.log($scope.user)
     });
   };


}]);
