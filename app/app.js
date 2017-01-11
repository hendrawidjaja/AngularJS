var myApp = angular.module("myApp", []);

/* this config runs first before any other function */
myApp.config(function(){

});

myApp.run(function(){

});

myApp.controller("myAppController", ["$scope", function($scope){
    /* scope object */
    $scope.message = "Hello";
    $scope.cities = ["New York", "London", "Paris", "Tokyo", "HongKong"];
}]);
