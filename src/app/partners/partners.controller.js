'use strict';

angular.module('inspinia')
  .controller('PartnersCtrl', function ($scope, $resource) {
    // var sessionId = 0;
    // var Partner = $resource('data/data.json',
    //   {seddionid: sessionId, controller: 'partners'},
    //   {request: {method:'POST', params:{}}
    // });

    var Data = $resource('data/data.json');
    var data = Data.get(function() {
      $scope.partners = data.partners;
      data = Data.get({partnerId: data.partners[0].id}, function(){
        $scope.partners.contacts = data.partnerContacts;
      });

      // our custom method is mapped as well.
      // partner.$request({seddionid: sessionId, controller: 'partners'});
      // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
    });

    $scope.getContacts = function(partner) {
      data = Data.get({partnerId: partner.id}, function(){
        $scope.partners.contacts = data.partnerContacts;
      });
    };

    $scope.contactsURL = 'app/partners/_contacts.html';
  });
