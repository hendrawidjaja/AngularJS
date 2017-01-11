var myApp = angular.module("myApp", []);

myApp.controller("myAppController", ["$scope", function($scope){
    /* scope object */
    $scope.message = "Hello";
    $scope.cities = [
        {
            Name: "New York",
            Food: "Hot dog",
            display: true
        }, {
            Name: "London",
            Food: "Fish & Chips",
            display: true
        }, {
            Name: "Paris",
            Food: "Baguette",
            display: true
        }, {
            Name: "Tokyo",
            Food: "Sushi",
            display: false
        }, {
            Name: "HongKong",
            Food: "Roast Goose",
            display: true
        }
    ];
}]);
