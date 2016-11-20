var app = angular.module('app', []);

app.controller('MainController', function ($scope, $http) {
    var config = {
        'browseNode': '',
        'category': 'HomeGarden',
        'keywords': "compost tea",
        'maximumPrice': '',
        'itemPage': 1
    }
    
    // $http.post('https://phonemines.herokuapp.com/search', config).then(function (response) {
    //     console.log(response);
    //     $scope.items = chunk(response.data.ItemSearchResponse.Items[0].Item, 3);
    //     console.log($scope.items);
    // })
    $http.get('https://api.github.com/repos/rivermerrill/merrills/events').then(function(res, err){
        console.log(res.data[0].payload.commits[0].message);
        $scope.mostRecent = res.data[0].payload.commits[0].message;
    })
})

function chunk(arr, size) {
    var newArr = [];
    for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
var controller = new ScrollMagic.Controller();

	// build scene
	var scene1 = new ScrollMagic.Scene({triggerElement: "#discount"})
					// trigger a velocity opaticy animation
					.setVelocity("#discount", {translateY: -25, opacity: 100}, {duration: 600})
					.addTo(controller);
    var scene2 = new ScrollMagic.Scene({triggerElement: ""})