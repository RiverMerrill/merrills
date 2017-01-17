(function(){
  angular
    .module('app')
    .controller('ProductController', function($scope, $stateParams, $localStorage, $timeout){
      $scope.add = true;
      $localStorage.test = "test";
      $scope.quantity = 1;
      $scope.product = products[$stateParams.productId];
      $scope.addToCart = function(product){
        product.quantity = $scope.quantity;
        if(!$localStorage.cart){
          $localStorage.cart = {};
          $localStorage.cart[product.productId] = product;
        } else if($localStorage.cart[product.productId]){
          $localStorage.cart[product.productId].quantity += product.quantity;
        } else{
            $localStorage.cart[product.productId] = product;
        }
        $scope.add = false;
        $scope.loading = true;
        $timeout(function(){
          $scope.loading = false;
          $scope.added = true;
        }, 1000)
      }
    })
})()
