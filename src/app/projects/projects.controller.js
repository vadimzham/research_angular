'use strict';

angular.module('inspinia')
  .controller('ProjectsCtrl', function ($scope, $resource, $http) {
    // var sessionId = 0;
    // var Partner = $resource('data/data.json',
    //   {seddionid: sessionId, controller: 'partners'},
    //   {request: {method:'POST', params:{}}
    // });

    var Projects = $resource(host+'projects/:stateId', {stateId:'@id'});

    $scope.states = Projects.query(function(){
      $scope.states.projects = Projects.query({stateId: $scope.states[0].id});
    });

    $scope.getProjects = function(state) {
      $scope.states.projects = Projects.query({stateId: state.id});
    };

    $scope.projectsURL = 'app/projects/_projects.html';
  });
