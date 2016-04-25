var bair = angular.module('bair', ['ui.router', 'ui.bootstrap', 'naif.base64']);

bair.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/main');
	$stateProvider
		.state('main', {
			url: "/main",
			templateUrl: "views/main.html",
			controller: "MainCtrl"
		})
		.state('list', {
			url: "/list/:type",
			templateUrl: "views/list.html",
			controller: "ListCtrl"
		})
		.state('insertPost', {
			url: "/insertPost",
			templateUrl: "views/insertPost.html",
			controller: "insertPostCtrl"
		});
});

