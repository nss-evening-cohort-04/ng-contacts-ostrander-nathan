"use strict";
app.controller("ContactNewCtrl", function($scope, $location,itemFactory){
	$scope.newTask = {}; // newTask is assigned to a empty object

	$scope.addNewItem = function(){ 
		$scope.newTask.isCompleted = false; 
		itemFactory.postNewContact($scope.newTask).then(function(itemId){
			console.log("itemId",itemId );
			$location.url("/contacts/list");
			$scope.newTask = {};
		})
	}
	$scope.reset = function(){
		$scope.resetInput = "";
	}
});