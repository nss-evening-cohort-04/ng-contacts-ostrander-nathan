"use strict";

app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);

});
app.config(function($routeProvider){ /// only used for routes no DOM manipulation
	$routeProvider
		.when('/contacts/list',{
			templateUrl: 'partials/contact-list.html',
			controller: 'ContactListCtrl'
		})
		.when('/contacts/new', {
			templateUrl: 'partials/contact-new.html',
			controller: 'ContactNewCtrl'
		})
		.when('/contacts/view/:id',{ // colon tells that the id will change
			templateUrl: 'partials/contact-view.html',
			controller: 'ContactViewCtrl'
		})
		.when('/contacts/edit/:id', {
			templateUrl: 'partials/contact-new.html',
			controller: 'ContactEditCtrl'
		})
		.otherwise('/contacts/list') // redirects to what you want to direct
});