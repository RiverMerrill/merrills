var app = angular.module('app', []);

app.controller('MainController', function ($scope, $http) {
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
var scene1 = new ScrollMagic.Scene({ triggerElement: "#discount" })
    // trigger a velocity opaticy animation
    .setVelocity("#discount", { translateY: -25, opacity: 100 }, { duration: 600 })
    .addTo(controller);
var scene2 = new ScrollMagic.Scene({ triggerElement: "" })