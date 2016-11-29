var app = angular.module('app', []);

app.controller('Changes', function($http){
    $http.get('https://api.github.com/repos/rivermerrill/merrills/events', function(res, err){
        $scope.changes = res;
    })

})