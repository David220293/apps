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

.controller('ControlQR', ['$scope',function($scope) {

    $scope.QR = function() {
      cordova.plugins.barcodeScanner.scan(
      function (result) {
         $scope.$apply(function () {
        $scope.contenido = "Contenido:"+result.text+"\n";
        });
          
      },
      function (error) {
          //alert("Scanning failed: " + error);
              $scope.contenido = "Scaneo Erroneo:"+result.text+"\n";

      },
      {
          "preferFrontCamera" : false, // iOS and Android
          "showFlipCameraButton" : false, // iOS and Android
          "prompt" : "Place a barcode inside the scan area", // supported on Android only
          "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
      }
   );

    };




 $scope.Barras = function() {
      cordova.plugins.barcodeScanner.scan(
      function (result) {
         $scope.$apply(function () {
        $scope.contenidoB = "Contenido:"+result.text+"\n";
        });
          
      },
      function (error) {
          //alert("Scanning failed: " + error);
              $scope.contenido = "Scaneo Erroneo:"+result.text+"\n";

      },
      {
          "preferFrontCamera" : false, // iOS and Android
          "showFlipCameraButton" : false, // iOS and Android
          "prompt" : "Place a barcode inside the scan area", // supported on Android only
          "formats" : "EAN_13,EAN_8,UPC_E,UPC_A", // default: all but PDF_417 and RSS_EXPANDED
          "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
      }
   );

    };

   
}]);
