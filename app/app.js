var myApp = angular.module("myApp", []);

myApp.controller("myAppController", ["$scope", function($scope){
    /* scope object */
    $scope.message = "Hello";
    $scope.cities = [
        {
            Name: "New York",
            Food: "Hot dog"
        }, {
            Name: "London",
            Food: "Fish&Chips"
        }, {
            Name: "Paris",
            Food: "Baguette"
        }, {
            Name: "Tokyo",
            Food: "Sushi"
        }, {
            Name: "HongKong",
            Food: "Roast Goose"
        }
    ];
}]);
