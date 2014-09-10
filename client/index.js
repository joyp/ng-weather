(function(){
  'use strict';
  // the [] creates the module, otherwise it looks for an existing weather module
  // we already installed ngRoute, so we're injecting it into this page
  angular.module('weather', ['ngRoute'])
  // looks for the route and injects it
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    // string is URL, object is configuration
    .when('/conditions', {templateUrl:'/views/conditions/conditions.html', controller:'ConditionsController'})
    .otherwise({redirectTo:'/conditions'});
  }])

  .controller('MainController', ['$scope', function($scope){

    $scope.title = 'Weather';

  }]);
})();

