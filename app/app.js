var myApp = angular.module("myApp", []);

myApp.controller("myAppController", ["$scope", function($scope){
    /* a function to handle clickEvent of remove */
    $scope.removeItem = function(item) {
        var deleteItem = $scope.cities.indexOf(item); /* get index of item */
        $scope.cities.splice(deleteItem, 1); /* remove the item from the array */
    }
    /* scope object */
    $scope.message = "Hello";
    $scope.cities = [
        {
            Name: "New York",
            Food: "Hot dog",
            Price: 5,
            display: true
        }, {
            Name: "London",
            Food: "Fish & Chips",
            Price: 8,
            display: true
        }, {
            Name: "Paris",
            Food: "Baguette",
            Price: 6,
            display: true
        }, {
            Name: "Tokyo",
            Food: "Sushi",
            Price: 12,
            display: true
        }, {
            Name: "Hong Kong",
            Food: "Roast Goose",
            Price: 30,
            display: true
        }, {
            Name: "Thailand",
            Food: "Tom Yum",
            Price: 3,
            display: true
        }, {
            Name: "Indonesia",
            Food: "Nasi Goreng",
            Price: 2,
            display: true
        }
    ];
}]);
