'use strict';

angular.module('inspinia')
  .controller('BudgetCtrl', function($scope, $resource) {
    var DocumentTypes = $resource(host + 'budget/document-stages/:stageId', {
      stageId: '@id'
    });

    var Budget = $resource(host + 'budget/:typeId', {
      typeId: '@id'
    });

    $scope.types = Budget.query(function() {
      $scope.types.documents = Budget.query({
        typeId: $scope.types[0].id
      });
    });

    $scope.getDocuments = function(type) {
      $scope.types.documents = Budget.query({
        typeId: type.id
      });
    };

    $scope.checkboxChanged = function(checkbox) {
      console.log(checkbox);
    };

    $scope.change = function(checkbox) {
      console.log(checkbox);
    };

    $scope.budgetURL = 'app/budget/_budget.html';
    $scope.budgetMonthlyURL = 'app/budget/_month.html';

    $scope.projectStages = [{
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

    $scope.documentStages = [{
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

    $scope.budget=[
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

    $scope.projectStages.all={ count: 0, checked: true};
    $scope.projectStages.forEach(function(type) {
      $scope.projectStages.all.count+=type.count;
      type.checked=true;
    });
    $scope.documentStages.all={ count: 0, checked: true};
    $scope.documentStages.forEach(function(stage) {
      $scope.documentStages.all.count+=stage.count;
      stage.checked=true;
    });

    $scope.dt = new Date();
    angular.element(document).ready(function () {
      $scope.budgetMonthly=Budget.query({year: $scope.dt.getFullYear(), month: $scope.dt.getMonth()+1});
    });

    $scope.changeAllStates=function(states){
      states.forEach(function(state){
        state.checked=states.all.checked;
      });
    };

    $scope.switchCheckbox=function(checkbox){
      checkbox.checked=!checkbox.checked;
    };
    $scope.switchProjectCheckbox=function(checkbox){
      checkbox.checked=!checkbox.checked;
      $scope.changeProjectStage();
    };
    $scope.switchAllCheckboxes=function(checkboxes){
      checkboxes.all.checked=!checkboxes.all.checked;
      $scope.changeAllStates(checkboxes);
    };

    $scope.changeProjectStage=function(){
      var checkedProjectStages=[];
      var checkedDocumentStages=[];
      $scope.projectStages.forEach(function(projectStage){
        if (projectStage.checked) {
          checkedProjectStages.push(projectStage.id);
        }
      });
      $scope.documentStages = DocumentTypes.query({projectStages: checkedProjectStages});
      $scope.budget = Budget.query({projectStages: checkedProjectStages});
      $scope.documentStages.all={ count: 0, checked: true};
      $scope.documentStages.forEach(function(documentStage) {
        $scope.documentStages.all.count+=documentStage.count;
        documentStage.checked=true;
        checkedDocumentStages.push(documentStage.id);
      });
    };

    $scope.filterDocumentStages = function(doc) {
    	var documentStageSelected = false;
      for (var s in $scope.documentStages) {
      	var stage = $scope.documentStages[s];
      	if (doc.type_id == stage.id) {
        	documentStageSelected = stage.checked;
          break;
        }
      }
    	return documentStageSelected;
    };

    $scope.changeSelect=function(dt){
      $scope.budgetMonthly=Budget.query({year: dt.getFullYear(), month: dt.getMonth()+1});
    };
  });
