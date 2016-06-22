'use strict';

angular.module('inspinia')
  .controller('CorrespondenceCtrl', CorrespondenceCtrl);

    function CorrespondenceCtrl($scope, $resource, DTOptionsBuilder) {
      var Correspondence = $resource(host+'correspondence/:correspondenceId', {correspondenceId:'@id'});
      $scope.correspondenceList = Correspondence.query();
    }
