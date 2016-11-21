"use strict";
app.controller("ContactNewCtrl", function($scope, $location,itemFactory){
	$scope.newTask = {}; // newTask is assigned to a empty object

	$scope.addNewItem = function(){ // function called addNewItem with showListView set to true for display
		$scope.newTask.isCompleted = false; // new task is a empty object that is 
		itemFactory.postNewContact($scope.newTask).then(function(itemId){
			$location.url("/contacts/list");
			$scope.newTask = {};

		})
	}
});