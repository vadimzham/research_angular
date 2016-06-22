'use strict';

angular.module('inspinia')
  .controller('AnswersCtrl', function ($scope, $resource) {
    var Answers = $resource(host+'answers/:stateId', {stateId:'@id'});

    $scope.states = Answers.query(function(){
      $scope.states.answers = Answers.query({stateId: $scope.states[0].id});
    });

    $scope.getAnswers = function(state) {
      $scope.states.answers = Answers.query({stateId: state.id});
    };

    $scope.answersURL = 'app/answers/_answers.html';
  });
