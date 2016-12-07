(function(){
  angular
  .module('app')
  .controller('ChangesController', function($http, $scope){
    $http.get('https://api.github.com/repos/rivermerrill/merrills/events').then(function(res, err){
      console.log(res);
      $scope.changes = res.data;
    })
  })
})();
