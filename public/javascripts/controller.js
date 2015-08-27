
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
    $scope.fname = 'John';
    $scope.lname = 'Jackson';
    $scope.email = 'fname.lname@example.com';
    $scope.clear = function() { $scope.fname = ""; };
    $scope.save  = function() { alert("Form Saved"); };
});

//Set the toDoList controller
app.controller('todoController', function($scope) {
    $scope.todoList = [];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:"* Name: " + $scope.todoInput1 + ",  * Description: " + $scope.todoInput2, done:false});
        $scope.todoInput1 = "";
        $scope.todoInput2 = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});

app.animation('.slide', [function() {
  return {
    // make note that other events (like addClass/removeClass)
    // have different function input parameters
    enter: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);

      // remember to call doneFn so that angular
      // knows that the animation has concluded
    },

    move: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);
    },

    leave: function(element, doneFn) {
      jQuery(element).fadeOut(1000, doneFn);
    }
  }
}]);
