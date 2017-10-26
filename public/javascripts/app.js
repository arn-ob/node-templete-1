// Get the app module
var app = angular.module('angularjsNodejsTutorial', []);

// Get the ng-controller
app.controller('myController', function ($scope, $http) {
    $scope.data = [];
    var request = $http.get('/data');
    request.success(function (data) {
        $scope.data = data;
    });
    request.error(function (data) {
        console.log('Error: ' + data);
    });
});