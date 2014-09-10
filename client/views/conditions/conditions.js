/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Current Conditions';

    $scope.getConditions = function(){
      var url = 'http://api.wunderground.com/api/9c76c901528c0afe/conditions/q/' + $scope.zip + '.json?callback=JSON_CALLBACK';
      $http.jsonp(url).then(function(response){
        $scope.loc = response.data.current_observation.display_location.city;
        $scope.icon = response.data.current_observation.icon_url;
        $scope.weather = response.data.current_observation.weather;
        $scope.temperature = response.data.current_observation.temp_f;
        $scope.feelslike = response.data.current_observation.feelslike_f;
        console.log(response);
      });
    };
  }]);
})();
