"use strict";
app.controller("ContactNewCtrl", function($scope, $location,itemFactory){
	$scope.newUser = {}; // newUser is assigned to a empty object

	$scope.addNewItem = function(){ 
		$scope.newUser.isCompleted = false; 
		itemFactory.postNewContact($scope.newUser).then(function(itemId){
			console.log("itemId",itemId );
			$location.url("/contacts/list");
			$scope.newUser = {};
		});
	};
	$scope.reset = function(){
		$scope.resetInput = "";
	};
});