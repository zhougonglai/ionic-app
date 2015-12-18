// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ionic-material','ionMdInput'])

.run(["$ionicPlatform","$rootScope","$state","$stateParams",
  function($ionicPlatform,$rootScope,$state,$stateParams) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("app",{
      url:"/app",
      abstract:true,
      templateUrl:"templates/menu.html",
      controller:"MenuCtrl"
    })
    .state("app.user",{
      url:"/user",
      templateUrl:"templates/user.html",
      controller:"UserCtrl"
    })
    .state("app.user.tab1",{
      url:"/tab1",
      templateUrl:"templates/tab1.html",
      controller:"Tab1"
    })
    .state("app.draw",{
      url:"/draw",
      templateUrl:"templates/draw.html",
      controller:"Draw"
    })
    .state("app.user.tab2",{
      url:"/tab2",
      templateUrl:"templates/tab2.html",
      controller:"Tab2"
    })
    .state("app.user.tab3",{
      url:"/tab3",
      templateUrl:"templates/tab3.html",
      controller:"Tab3"
    })
    .state("app.login",{
      url:"/login",
      templateUrl:"templates/login.html",
      controller:"LoginCtrl"
    })
    .state("app.signUp",{
      url:"/signUp{userPhone:[0-9]{11,14}}",
      templateUrl:"templates/sign-up.html",
      controller:"SignUpCtrl"
    })
    .state("app.list",{
      url:"/list",
          templateUrl:"templates/list.html",
          controller:"ListCtrl"
    });
  $urlRouterProvider.otherwise('/app/login');

});
