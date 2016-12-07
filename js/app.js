angular.module('app').controller('MainController', function ($scope, $http, $state) {
  $scope.$state = $state;
  var subArr = ['It\'s all about the life in the soil.', 'Care for your plants while caring for the environment.', 'Grow nutrient rich vegetables and fruit.', 'You can be an organic farmer!', 'Plants heal themselves naturally.']
  var rand = Math.floor(Math.random() * 30) + 20;
  $scope.subSize = rand;
  rand = Math.floor(Math.random() * subArr.length - 1) + 1;
  $scope.subMessage = subArr[rand];
  $http.get('https://api.github.com/repos/rivermerrill/merrills/events').then(function (res, err) {
    $scope.mostRecent = res.data[0].payload.commits[0].message;
  })
})
