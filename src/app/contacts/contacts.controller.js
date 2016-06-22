'use strict';

angular.module('inspinia')
  .controller('ContactsCtrl', ContactsCtrl);

    function ContactsCtrl($scope, $resource, DTOptionsBuilder) {
      // $scope.dtOptions = DTOptionsBuilder.newOptions().withDOM('<"html5buttons"B>lTfgitp');
      // $scope.contacts = [
      //   {
      //     name: 'ФИО 1',
      //     partner: 'Контагент 1',
      //     phone: 'Телефон 1',
      //     phoneAdd: 'Добавочный 1',
      //     phoneMobile: 'Мобильный 1',
      //     email: 'E-mail 1',
      //     author: 'Автор 1'
      //   },
      //   {
      //     name: 'ФИО 2',
      //     partner: 'Контагент 2',
      //     phone: 'Телефон 2',
      //     phoneAdd: 'Добавочный 2',
      //     phoneMobile: 'Мобильный 2',
      //     email: 'E-mail 2',
      //     author: 'Автор 2'
      //   }
      // ];

      var Contacts = $resource(host+'contacts/:contactId', {contactId:'@id'});
      $scope.contacts = Contacts.query();
    }
