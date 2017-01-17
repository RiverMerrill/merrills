angular.module('app', ['ui.router', 'ngStorage'])
.run(['$state', function ($state) {
  $state.transitionTo('index');
}])
.config(function($stateProvider){
  $stateProvider
  .state('index',{
    url: '/',
    templateUrl: '/templates/index.html'
  })
  .state('store', {
    url: '/store',
    templateUrl: '/templates/store.html',
    controller: 'StoreController'
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
})
