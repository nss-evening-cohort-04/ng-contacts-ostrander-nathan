"use strict";


app.controller("TodoCtrl", function($scope, itemFactory){
	// $scope.addContactView = false;
	$scope.addGroupView = true;
	$scope.homeView = true;
	$scope.newContact = {};
	$scope.items = [];


	var formData = {
		name: "default",
		email: "default",
		phone: "default",
		address: "default"
	};

	let getItems = function(){
		itemFactory.getItemList().then(function(fbItems){
			$scope.items = fbItems;
		});
	};
	getItems();

	itemFactory.getItemList().then(function(fbItems){
		$scope.items = fbItems;
		console.log("items from controller",fbItems );
	});

	// $scope.newAddContact= function(){
	// 	console.log("you clicked new add contact");
	// 	$scope.homeView = false;
	// };

	// $scope.newGroup = function(){
	// 	$scope.addGroupView = false;
	// 	console.log("you clicked newGroup")
	// };	
	$scope.editContact = function(){
		console.log("you clicked editContact");
	};
	$scope.addGroup = function(){

	};
	
	$scope.addNewContact = function(){
		$scope.newContact.isCompleted = true;
		console.log("newContact in function",$scope.newContact );
		itemFactory.postNewContact($scope.newContact).then(function(itemId){
			getItems();
			$scope.newContact = {};
			$scope.addContactView = true; 
		});

	};
});