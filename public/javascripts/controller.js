
//Set app module
var app = angular.module('myApp',[]);

//Set the project list controller
app.controller('ProjectListController', function($scope) {	
	$scope.projects = [
		{id:1, name:"McDonalads", description:"This is a food delivery project."},
		{id:2, name:"Coca Cola", description:"This is a food delivery project."}
	];
});

//Set the validator controller
app.controller('ValidateController', function($scope) {
    $scope.fname = ' ';
    $scope.email = ' ';
    $scope.clear = function() { $scope.fname = ""; };
    $scope.save  = function() { alert("Note Saved"); };
});