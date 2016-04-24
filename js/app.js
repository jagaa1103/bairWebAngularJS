var bair = angular.module('bair', ['ui.router', 'ui.bootstrap']);

bair.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/main');
	$stateProvider
		.state('main', {
			url: "/main",
			templateUrl: "views/main.html",
			controller: "MainCtrl"
		});
});