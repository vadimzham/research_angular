'use strict';

angular.module('inspinia')
  .controller('TripsCtrl', TripsCtrl);

    function TripsCtrl($scope, $resource, DTOptionsBuilder) {
      var Trips = $resource(host+'correspondence/:correspondenceId', {correspondenceId:'@id'});
      $scope.trips = Trips.query();
    }
