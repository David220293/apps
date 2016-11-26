// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('CallClima', ['$scope', function($scope) {



   $scope.Api = function() {
      $http({
        method: 'GET',
        url: 'http://api.worldweatheronline.com/premium/v1/weather.ashx '
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          alert("Si se hizo la conexion a la API");
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
            alert("No se hizo la conexion a la API");

        });
    };
     

  
}]);

