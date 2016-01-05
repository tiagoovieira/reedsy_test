var app = angular.module('reedsy', ['ui.router', 'angularMoment', 'angularUtils.directives.dirPagination'])

app.config(function ($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/app/views/books/index.html',
      controller: 'BooksIndexController'
    })
    .state('show', {
      url: '/:id',
      templateUrl: '/app/views/books/show.html',
      controller: 'BookShowController'
    })

});