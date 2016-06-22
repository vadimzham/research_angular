'use strict';

angular.module('inspinia')
  .controller('AdminCtrl', AdminCtrl);

    function AdminCtrl($scope, $resource, DTOptionsBuilder) {
      // $scope.dtOptions = DTOptionsBuilder.newOptions().withDOM('<"html5buttons"B>lTfgitp');

      var Employees = $resource(host+'admin/:employeeId', {employeeId:'@id'});
      $scope.employees = Employees.query();
      $scope.employees = [
        {
          checkedAdmin: true,
          checkedActive: true,
          name: 'Name 1',
          position: 'Position 1',
          email: 'E-mail 1',
          phoneMobile: 'Mobile Phone 1',
          phoneInternal: 'Internal Phone 1',
          skype: 'Skype 1',
          login: 'Login 1'
        },
        {
          checkedAdmin: false,
          checkedActive: true,
          name: 'Name 2',
          position: 'Position 2',
          email: 'E-mail 2',
          phoneMobile: 'Mobile Phone 2',
          phoneInternal: 'Internal Phone 2',
          skype: 'Skype 2',
          login: 'Login 2'
        }
      ];

    $scope.change=function(employee){
      Employees.save(employee);
    };
  }
