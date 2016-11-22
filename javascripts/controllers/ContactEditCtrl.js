"use strict";
app.controller("ItemEditCtrl", function($scope, $location,$routeParams, itemFactory){

$scope.newTask = {};
	let itemId = $routeParams.id;
	console.log("itemId", itemId )

	itemFactory.getSingleItem(itemId).then(function(oneItem){
		console.log("oneItem",oneItem )
		oneItem.id = itemId;
		$scope.newTask = oneItem;
	})
	$scope.editContact = function(){
		itemFactory.editItem($scope.newTask).then(function(respose){
			$scope.newTask = {};
			$location.url("/contacts/list");
		})
	}
})