"use strict";
app.controller("ContactListCtrl", function($scope, itemFactory){
	$scope.items = []; // items is a empty array

	let getItems = function(){ // getItems function 
		itemFactory.getItemList().then(function(fbItems){ // calls itemfactory then find getItemList function and then receive data back
			$scope.items = fbItems; // stores fbItems in $scope.items
		})
	}
	getItems(); // call getItems function

	$scope.deleteContact = function(itemId){
		console.log("you deleted me");
		itemFactory.deleteContact(itemId).then(function(response){
			getItems();
		})
	}	
	$scope.editContact = function(itemId){
		console.log("you edited me");
		itemFactory.editItem(itemId).then(function(response){
			getItems();
		})
	}
})