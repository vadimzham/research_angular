'use strict';

angular.module('inspinia')
  .controller('ContestsCtrl', function ($scope, $resource, $http) {
    var Contests = $resource(host+'contests/:stateId', {stateId:'@id'});

    $scope.states = Contests.query(function(){
      $scope.states.contests = Contests.query({stateId: $scope.states[0].id});
    });

    $scope.getContests = function(state) {
      $scope.states.contests = Contests.query({stateId: state.id});
    };
  });
