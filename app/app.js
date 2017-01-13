/* dependecies injection should be put inside the square brackets */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider
    .when("/home", {
        templateUrl: "views/home.html"
    })
    .when("/directory", {
        templateUrl: "views/directory.html",
        controller: "myAppController"
    })
    .otherwise({
        redirectTo: "/home"
    });
}]);

myApp.controller("myAppController", ["$scope", function($scope){
    var message;
    /* scope object */
    $scope.message = message;

    /* a function to handle clickEvent of remove */
    $scope.removeItem = function(item) {
        var deleteItem = $scope.cities.indexOf(item); /* get index of item */
        $scope.cities.splice(deleteItem, 1); /* remove the item from the array */
    },
    $scope.addItem = function() {
        /* push all gathered information from input tag field to array */
        $scope.cities.push({
            Name: $scope.newItem.name,
            Food: $scope.newItem.food,
            Price: parseInt($scope.newItem.price),
            display: true
        });

        /* clear input field */
        $scope.newItem.name = "";
        $scope.newItem.food = "";
        $scope.newItem.price = "";
    }

    /* scope object array */
    $scope.cities = [
        {
            Name: "New York",
            Food: "Hot dog",
            Price: 5,
            display: true,
            flag: "./content/img/united_states_of_america.png"
        }, {
            Name: "London",
            Food: "Fish & Chips",
            Price: 8,
            display: true,
            flag: "./content/img/united_kingdom.png"
        }, {
            Name: "Paris",
            Food: "Baguette",
            Price: 6,
            display: true,
            flag: "./content/img/france.png"
        }, {
            Name: "Tokyo",
            Food: "Sushi",
            Price: 12,
            display: true,
            flag: "./content/img/japan.png"
        }, {
            Name: "Hong Kong",
            Food: "Roast Goose",
            Price: 30,
            display: true,
            flag: "./content/img/hong_kong.png"
        }, {
            Name: "Thailand",
            Food: "Tom Yum",
            Price: 3,
            display: true,
            flag: "./content/img/thailand.png"
        }, {
            Name: "Indonesia",
            Food: "Nasi Goreng",
            Price: 2,
            display: true,
            flag: "./content/img/indonesia.png"
        }
    ];
}]);
