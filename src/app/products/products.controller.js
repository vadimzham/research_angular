'use strict';

angular.module('inspinia')
  .controller('ProductsCtrl', function ($scope, $resource) {
    var Products = $resource(host+'products/:stateId', {stateId:'@id'});

    $scope.states = Products.query(function(){
      $scope.states.products = Products.query({stateId: $scope.states[0].id});
    });

    $scope.getProducts = function(state) {
      $scope.states.products = Products.query({stateId: state.id});
    };

    $scope.projectsURL = 'app/products/_products.html';
  });
