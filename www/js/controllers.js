angular.module('starter.controllers', [])
.controller("MenuCtrl",
  ["$scope","$ionicModal","$ionicPopover","$timeout","$location","$window",
  function($scope,$ionicModal,$ionicPopover,$timeout,$location,$window){
    $scope.loginData={};
    $scope.barPlan = false;
    $scope.setBar = function(bool){
      $scope.barPlan = bool;
    };
}])

.controller("LoginCtrl",
  ["$scope","$timeout","$stateParams","ionicMaterialInk",
  function($scope,$timeout,$stateParams,ionicMaterialInk){
    $timeout(function(){
      $scope.$parent.setBar(false);
    },0);
    $scope.forgetPassword = function(){
      alert("功能还未完善,请于PC端进行修改");
    };
    $scope.shareFrend = function(){
      alert("功能还未完善");
    };

}])
  .controller("SignUpCtrl",
    ["$scope","$timeout","$stateParams","ionicMaterialInk",
    function($scope,$timeout,$stateParams,ionicMaterialInk){

      var friendShare = function(number){
        angular.element("input#friend")
      };
      $timeout(function(){
        $scope.$parent.setBar(false);
        $scope.userPhone= $stateParams.userPhone;
        $scope.$apply($scope.userPhone);
      },300);
      $scope.forgetPassword = function(){
        alert("功能还未完善,请于PC端进行修改");
      };
      $scope.shareFrend = function(){
        alert("功能还未完善");
      };

    }])
.controller("UserCtrl",
  ["$scope","$stateParams","$timeout","ionicMaterialMotion","ionicMaterialInk",
  function($scope,$stateParams,$timeout,ionicMaterialMotion,ionicMaterialInk){
    // Set Motion
    $timeout(function() {
      ionicMaterialMotion.slideUp({
        selector: '.slide-up'
      });
    }, 300);

    $timeout(function() {
      $scope.$parent.setBar(true);
      ionicMaterialMotion.fadeSlideInRight({
        startVelocity: 3000
      });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
  }])

.controller("Tab1",
  ["$scope","$stateParams","$timeout","ionicMaterialMotion","ionicMaterialInk",
  function($scope,$stateParams,$timeout,ionicMaterialMotion,ionicMaterialInk){

    // Set Motion
    $timeout(function() {
      ionicMaterialMotion.slideUp({
        selector: '.slide-up'
      });
    }, 300);

    $timeout(function() {
      $scope.$parent.$parent.setBar(true);
      ionicMaterialMotion.fadeSlideInRight({
        startVelocity: 3000
      });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
  }])
  .controller("Draw",
    ["$scope","$stateParams","$timeout","ionicMaterialMotion","ionicMaterialInk",
      function($scope,$stateParams,$timeout,ionicMaterialMotion,ionicMaterialInk){
        // Set Motion
        $timeout(function() {
          ionicMaterialMotion.slideUp({
            selector: '.slide-up'
          });
        }, 300);

        $timeout(function() {
          $scope.$parent.$parent.setBar(true);
          ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
          });
        }, 700);
        // Set Ink
        ionicMaterialInk.displayEffect();
      }])

  .controller("Tab2",
    ["$scope","$stateParams","$timeout","ionicMaterialMotion","ionicMaterialInk",
    function($scope,$stateParams,$timeout,ionicMaterialMotion,ionicMaterialInk){

      // Set Motion
      $timeout(function() {
        ionicMaterialMotion.slideUp({
          selector: '.slide-up'
        });
      }, 300);

      $timeout(function() {
        $scope.$parent.$parent.setBar(true);
        ionicMaterialMotion.fadeSlideInRight({
          startVelocity: 3000
        });
      }, 700);

      // Set Ink
      ionicMaterialInk.displayEffect();
    }])
  .controller("Tab3",
    ["$scope","$stateParams","$timeout","ionicMaterialMotion","ionicMaterialInk",
    function($scope,$stateParams,$timeout,ionicMaterialMotion,ionicMaterialInk){

      // Set Motion
      $timeout(function() {
        ionicMaterialMotion.slideUp({
          selector: '.slide-up'
        });
      }, 300);

      $timeout(function() {
        $scope.$parent.$parent.setBar(true);
        ionicMaterialMotion.fadeSlideInRight({
          startVelocity: 3000
        });
      }, 700);

      // Set Ink
      ionicMaterialInk.displayEffect();
    }])

.controller("ListCtrl",
  ["$scope","$stateParams","$timeout","ionicMaterialMotion","ionicMaterialInk",
  function($scope,$stateParams,$timeout,ionicMaterialMotion,ionicMaterialInk){
    $scope.$parent.setBar(true);
    // Set Motion
    $timeout(function() {
      ionicMaterialMotion.slideUp({
        selector: '.slide-up'
      });
    }, 300);

    $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
        startVelocity: 3000
      });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
}]);
