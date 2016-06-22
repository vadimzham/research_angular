'use strict';
var host = 'http://192.168.0.24:444/';
angular.module('inspinia', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'datatables'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "app/login/login.html"
      })
      .state('register', {
        url: "/register",
        templateUrl: "app/login/register.html"
      })
      .state('index', {
        abstract: true,
        url: "/index",
        templateUrl: "components/common/content.html",
      })
      .state('index.dashboard', {
        url: "/dashboard",
        templateUrl: "app/dashboard/dashboard.html",
        data: {
          pageTitle: 'Рабочий стол'
        }
      })
      .state('index.partners', {
        url: "/partners",
        templateUrl: "app/partners/partners.html",
        data: {
          pageTitle: 'Контрагенты'
        }
      })
      .state('index.contacts', {
        url: "/contacts",
        templateUrl: "app/contacts/contacts.html",
        data: {
          pageTitle: 'Контакты'
        }
      })
      .state('index.projects', {
        url: "/projects",
        templateUrl: "app/projects/projects.html",
        data: {
          pageTitle: 'Проекты'
        }
      })
      .state('index.answers', {
        url: "/answers",
        templateUrl: "app/answers/answers.html",
        data: {
          pageTitle: 'Ответы'
        }
      })
      .state('index.tasks', {
        url: "/tasks",
        templateUrl: "app/tasks/tasks.html",
        data: {
          pageTitle: 'Задачи'
        }
      })
      .state('index.products', {
        url: "/products",
        templateUrl: "app/products/products.html",
        data: {
          pageTitle: 'Продукты'
        }
      })
      .state('index.documents', {
        url: "/documents",
        templateUrl: "app/documents/documents.html",
        data: {
          pageTitle: 'Документы'
        }
      })
      .state('index.correspondence', {
        url: "/correspondence",
        templateUrl: "app/correspondence/correspondence.html",
        data: {
          pageTitle: 'Корреспонденция'
        }
      })
      .state('index.trips', {
        url: "/trips",
        templateUrl: "app/trips/trips.html",
        data: {
          pageTitle: 'Командировки'
        }
      })
      .state('index.budget', {
        url: "/budget",
        templateUrl: "app/budget/budget.html",
        data: {
          pageTitle: 'Бюджет'
        }
      })
      .state('index.contests', {
        url: "/contests",
        templateUrl: "app/contests/contests.html",
        data: {
          pageTitle: 'Конкурсы'
        }
      })
      .state('index.notifications', {
        url: "/notifications",
        templateUrl: "app/notifications/notifications.html",
        data: {
          pageTitle: 'Уведомления'
        }
      })
      .state('index.profile', {
        url: "/profile",
        templateUrl: "app/profile/profile.html",
        data: {
          pageTitle: 'Профиль'
        }
      })
      .state('index.admin', {
        url: "/admin",
        templateUrl: "app/admin/admin.html",
        data: {
          pageTitle: 'Панель администратора'
        }
      })

    $urlRouterProvider.otherwise('/index/dashboard');
  });
