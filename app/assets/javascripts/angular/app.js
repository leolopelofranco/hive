var Hive = angular.module('Hive', [
  'ui.router',
  'templates',
  'Devise',
  'facebook',
  'ngCookies',
  'Hive.services',
  'Hive.directives',
  'Hive.controllers',
]);


Hive.config(['FacebookProvider', function(FacebookProvider) {
     // Set your appId through the setAppId method or
     // use the shortcut in the initialize method directly.
     FacebookProvider.init('1567078173606071');
  }])
