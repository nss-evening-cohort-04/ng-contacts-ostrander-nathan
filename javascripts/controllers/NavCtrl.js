"use strict";

app.controller("NavCtrl", function($scope){
	// $scope.navItems = [{name:"Logout"},{name:"All Items"},{name:"New Item"}];
	$scope.addContactView = false;
	$scope.master = {};

	$scope.toggle = function(){
		console.log("you clicked toggle");
		$scope.addContactView = !$scope.addContactView;

	};

	$scope.update = function(user){
		$scope.master = angular.copy(user);
	};
	$scope.reset = function(){
		$scope.user = angular.copy($scope.master);
	};

	$scope.reset();
	









});