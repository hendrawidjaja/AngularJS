/* dependecies injection should be put inside the square brackets */
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    /* removing # sign in url*/
    /* it needs some modification on .htaccess, google it*/
    $locationProvider.html5Mode(true); /* add <base href="/" /> in index.html */

    $routeProvider
    .when("/home", {
        templateUrl: "views/home.html",
        controller: "myAppController"
    })
    .when("/directory", {
        templateUrl: "views/directory.html",
        controller: "myAppController"
    })
    .when("/guestbook", {
        templateUrl: "views/guestbook.html",
        controller: "myAppGuestbookController"
    })
    .when("/success", {
        templateUrl: "views/success.html",
        controller: "myAppGuestbookController"
    })
    .otherwise({
        redirectTo: "/home"
    });
}]);

/* function should be declared first here */
myApp.controller("myAppController", ["$scope", "$http", function($scope, $http){
    var message;
    /* scope object */
    $scope.message = message;
    console.log("orderBy: " + $scope);

    /* a function to handle clickEvent of remove */
    $scope.removeItem = function(item) {
        var deleteItem = $scope.cities.indexOf(item); /* get index of item */
        $scope.cities.splice(deleteItem, 1); /* remove the item from the array */
    },

    /* add an Item to ListItem */
    $scope.addItem = function() {

    /* push all gathered information from input tag field to array */
    $scope.cities.push({
        name: $scope.newItem.name,
        food: $scope.newItem.food,
        price: parseInt($scope.newItem.price),
        display: true
    });

        /* clear input field */
        $scope.newItem.name = "";
        $scope.newItem.food = "";
        $scope.newItem.price = "";

        /* reset form validation */
        $scope.listItemForm.$setPristine();
        $scope.listItemForm.$setUntouched();
    }

    /* Simple GET request example with promises */
    $http({
      method: "GET",
      url: "./data/cities.json"
    }).then(function successCallback(response) {
        /* this callback will be called asynchronously when the response is available */
        $scope.cities = response.data;
      }, function errorCallback(response) {
        /* called asynchronously if an error occurs or server returns response with an error status. */
        console.log("Error " + response.status + ": " + response.data)
      });
}]);

myApp.controller("myAppGuestbookController", ["$scope", "$location",  function ($scope, $location) {
    $scope.sendMessage = function() {
        $location.path("/success"); /* Link route to success.html inside views directory */
    };
}]);


/* directive */
myApp.directive("randomDirectives", [function(){
    return {
        restrict: 'E', /* E - Element, A - Attribute */
        transclude: true, /* this means anything inbetween random-directives tag will be shown by using ng-transclude*/
        scope: {
            cities: "=", /* = sign means binding the data that comes from html */
            title: "=",
        },
        templateUrl: "views/random.html",
        controller: function($scope) {
            $scope.random = Math.floor(Math.random() * 7);
        },
        replace: true /* wrapping that random-directives tag with div tag*/
    };
}]);
