angular.module('home.router', []).config(_homeRoute)

function _homeRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			controller: 'HomeController',
			templateUrl: '/views/home.html'	
		});
	$urlRouterProvider.otherwise('/');
}
