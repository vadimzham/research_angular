'use strict';

angular.module('inspinia')
  .controller('DocumentsCtrl', function($scope, $resource) {
    var Documents = $resource(host + 'documents/:typeId', {
      typeId: '@id'
    });

    $scope.types = Documents.query(function() {
      $scope.types.documents = Documents.query({
        typeId: $scope.types[0].id
      });
    });

    $scope.getDocuments = function(type) {
      $scope.types.documents = Documents.query({
        typeId: type.id
      });
    };

    $scope.checkboxChanged = function(checkbox) {
      console.log(checkbox);
    };

    $scope.change = function(checkbox) {
      console.log(checkbox);
    };

    $scope.documentsURL = 'app/documents/_documents.html';

    $scope.types = [{
      id: 1,
      name: 'Type 1',
      count: 5
    }, {
      id: 2,
      name: 'Type 2',
      count: 10
    }, {
      id: 3,
      name: 'Type 3',
      count: 5
    }, {
      id: 4,
      name: 'Type 4',
      count: 5
    }, {
      id: 5,
      name: 'Type 5',
      count: 5
    }];

    $scope.stages = [{
      id: 1,
      name: 'Stage 1',
      count: 5,
    }, {
      id: 2,
      name: 'Stage 2',
      count: 10
    }, {
      id: 3,
      name: 'Stage 3',
      count: 5
    }, {
      id: 4,
      name: 'Stage 4',
      count: 5
    }, {
      id: 5,
      name: 'Stage 5',
      count: 5
    }];

    $scope.documents=[
      {
        number: 1,
        type: 'Тест',
        startDate: '1 января 2016г.',
        endDate: '31 января 2016г.',
        performer: 'Кто-то',
        type_id: 1,
        stage_id: 1,
        checked: true
      },
      {
        number: 2,
        type: 'Тест',
        startDate: '1 января 2016г.',
        endDate: '31 января 2016г.',
        performer: 'Кто-то',
        type_id: 1,
        stage_id: 1
      },
      {
        number: 3,
        type: 'Тест',
        startDate: '1 января 2016г.',
        endDate: '31 января 2016г.',
        performer: 'Кто-то',
        type_id: 1,
        stage_id: 2
      },
      {
        number: 4,
        type: 'Тест',
        startDate: '1 января 2016г.',
        endDate: '31 января 2016г.',
        performer: 'Кто-то',
        type_id: 1,
        stage_id: 2
      },
      {
        number: 5,
        type: 'Тест',
        startDate: '1 января 2016г.',
        endDate: '31 января 2016г.',
        performer: 'Кто-то',
        type_id: 2,
        stage_id: 1
      },
      {
        number: 6,
        type: 'Тест',
        startDate: '1 января 2016г.',
        endDate: '31 января 2016г.',
        performer: 'Кто-то',
        type_id: 2,
        stage_id: 1
      },
      {
        number: 7,
        type: 'Тест',
        startDate: '1 января 2016г.',
        endDate: '31 января 2016г.',
        performer: 'Кто-то',
        type_id: 2,
        stage_id: 1
      },
      {
        number: 8,
        type: 'Тест',
        startDate: '1 января 2016г.',
        endDate: '31 января 2016г.',
        performer: 'Кто-то',
        type_id: 2,
        stage_id: 1
      },
      {
        number: 9,
        type: 'Тест',
        startDate: '1 января 2016г.',
        endDate: '31 января 2016г.',
        performer: 'Кто-то',
        type_id: 2,
        stage_id: 2
      },
      {
        number: 10,
        type: 'Тест',
        startDate: '1 января 2016г.',
        endDate: '31 января 2016г.',
        performer: 'Кто-то',
        type_id: 2,
        stage_id: 2
      }
    ];

    $scope.types.all={ count: 0, checked: true};
    $scope.types.forEach(function(type) {
      $scope.types.all.count+=type.count;
      type.checked=true;
    });
    $scope.stages.all={ count: 0, checked: true};
    $scope.stages.forEach(function(stage) {
      $scope.stages.all.count+=stage.count;
      stage.checked=true;
    });

    $scope.changeAllStates=function(states){
      states.forEach(function(state){
        state.checked=states.all.checked;
      });
    };

    $scope.filterDocumentTypes = function(doc) {
    	var documentTypeSelected = false;
      for (var t in $scope.types) {
      	var type = $scope.types[t];
      	if (doc.type_id == type.id) {
        	documentTypeSelected = type.checked;
          break;
        }
      }
    	return documentTypeSelected;
    };

    $scope.filterDocumentStages = function(doc) {
    	var documentStageSelected = false;
      for (var s in $scope.stages) {
      	var stage = $scope.stages[s];
      	if (doc.stage_id == stage.id) {
        	documentStageSelected = stage.checked;
          break;
        }
      }
    	return documentStageSelected;
    };

    $scope.switchCheckbox=function(checkbox){
      checkbox.checked=!checkbox.checked;
    };
    $scope.switchAllCheckboxes=function(checkboxes){
      checkboxes.all.checked=!checkboxes.all.checked;
      $scope.changeAllStates(checkboxes);
    };
  });
