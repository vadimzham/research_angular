'use strict';

angular.module('inspinia')
  .controller('MainCtrl', function($scope) {
    this.user = {
      name: 'Педро Иванов',
      position: 'Тестировщик',
      admin: true
    };
    this.helloText = 'Welcome in INSPINIA Gulp SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';
  });
