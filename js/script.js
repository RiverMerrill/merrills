var app = angular.module('app', []);

app.controller('MainController', function ($scope, $http) {
  var subArr = ['It\'s all about the life in the soil.', 'Care for your plants while caring for the environment.', 'Grow nutrient rich vegetables and fruit.', 'You can be an organic farmer!', 'Plants heal themselves naturally.']
  var rand = Math.floor(Math.random() * 30) + 20;
  $scope.subSize = rand;
  rand = Math.floor(Math.random() * subArr.length - 1) + 1;
  $scope.subMessage = subArr[rand];
  $http.get('https://api.github.com/repos/rivermerrill/merrills/events').then(function (res, err) {
    $scope.mostRecent = res.data[0].payload.commits[0].message;
  })
})
jQuery(function ($) {
  $(document).ready(function () {
    $("#owl-example").owlCarousel({ items: 1 });
    $('.navbar').stickUp();
  });
});

function chunk(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}


var controller = new ScrollMagic.Controller();

// build scene
var scene1 = new ScrollMagic.Scene({ triggerElement: "#subliminal" })
// trigger a velocity opaticy animation
.setVelocity("#subliminal", { translateY: -25, opacity: 100 }, { duration: 600 })
.addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: ".leftanim"})
.setVelocity(".leftAnim", {translateX: +35, opacity: 100}, {duration: 1000})
.addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: ".rightAnim"})
.setVelocity(".rightAnim", {translateX: -35, opacity: 100}, {duration: 1000})
.addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: ".products"})
.setVelocity(".products", {opacity: 100}, {duration: 1000})
.addTo(controller);
