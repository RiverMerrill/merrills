angular.module('app', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
    .state('index',{
      url: '/',
      templateUrl: '/templates/index.html'
    })
    .state('store', {
      url: '/store',
      templateUrl: '/templates/store.html'
    })
    .state('product', {
      url: '/product/:productId',
      templateUrl: '/templates/product.html',
      controller: 'ProductController'
    })
    .state('changes', {
      url: '/changes',
      templateUrl: '/templates/changes.html',
      controller: 'ChangesController'
    })
  // $routeProvider.when('/',{
  //   templateUrl: 'templates/index.html',
  //   controller: 'MainController'
  // })
  // .when('/store',{
  //   templateUrl: 'templates/store.html',
  // })
  // .otherwise({
  //   templateUrl: 'templates/index.html'
  // })
})
