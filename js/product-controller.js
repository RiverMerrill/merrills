(function(){
  angular
    .module('app')
    .controller('ProductController', function($scope, $stateParams){
      if($stateParams.productId === 'tea'){
        $scope.product = tea;
      }
    })
})()
