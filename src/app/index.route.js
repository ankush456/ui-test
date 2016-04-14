(function() {
  'use strict';

  angular
    .module('uiTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
