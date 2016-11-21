"use strict";

app.factory("itemFactory", function($q, $http, FIREBASE_CONFIG) {

  var getItemList = function() {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
        .success(function(response) {
          let items = [];
          Object.keys(response).forEach(function(key) {
            response[key].id = key;
            items.push(response[key])
          });
          resolve(items);
        })
        .error(function(errorResponse) {
          reject(errorResponse);
        })
    })
  }

  var postNewContact = function(newItem) {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`,
          JSON.stringify({
            name: newItem.name,
            address: newItem.address,
            isCompleted: newItem.isCompleted,
            email: newItem.email,
            phone: newItem.phone + '-' + newItem.phone1 + '-' + newItem.phone2
          })
        )
        .success(function(postResponse) {
          resolve(postResponse);
        })
        .error(function(postError) {
          reject(postError);
        })
    })
  }

  var getSingleItem = function(itemId) {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${itemId}.json`)
        .success(function(getSingleResponse) {
          resolve(getSingleResponse);
        })
        .error(function(getSingleError) {
          reject(getSingleError);
        })
    })
  };

  var deleteContact = function(itemId) {
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${itemId}.json`)
        .success(function(deleteResponse) {
          resolve(deleteResponse);
        })
        .error(function(deleteError) {
          reject(deleteError);
        })
    })
  };
  
  var editItem = function(editItem) {
    return $q((resolve, reject) => { // promise
      $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${editItem.id}.json`,
          JSON.stringify({
            name: newItem.name,
            address: newItem.address,
            isCompleted: newItem.isCompleted,
            email: newItem.email,
            phone: newItem.phone + '-' + newItem.phone1 + '-' + newItem.phone2
          })
        )
        .success(function(editResponse) {
          resolve(editResponse);
        })
        .error(function(editError) {
          reject(editError);
        })
    })
  }

  return {
    getItemList: getItemList,
    postNewContact: postNewContact,
    deleteContact: deleteContact,
    editItem: editItem,
    getSingleItem: getSingleItem
  }

})