'use strict';

angular.module('inspinia')
  .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope, $resource) {

      var Form = $resource(host+'login');


    $scope.change=function(form){
      Form.save(form);
    };
  }
