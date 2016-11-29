var app = angular.module('app', []);

app.controller('MainController', function ($scope, $http) {
    $http.get('https://api.github.com/repos/rivermerrill/merrills/events').then(function (res, err) {
        console.log(res.data[0].payload.commits[0].message);
        $scope.mostRecent = res.data[0].payload.commits[0].message;
    })
})
$(document).ready(function () {

    $("#owl-example").owlCarousel({ items: 1 });

});

function chunk(arr, size) {
    var newArr = [];
    for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

$(document).ready(function () {
    //enabling stickUp on the '.navbar-wrapper' class
    $('.navbar').stickUp();
});


var controller = new ScrollMagic.Controller();

// build scene
var scene1 = new ScrollMagic.Scene({ triggerElement: "#discount" })
    // trigger a velocity opaticy animation
    .setVelocity("#discount", { translateY: -25, opacity: 100 }, { duration: 600 })
    .addTo(controller);
var scene2 = new ScrollMagic.Scene({ triggerElement: "" })