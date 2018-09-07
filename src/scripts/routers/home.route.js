angular.module('home.router', []).config(_homeRoute)

function _homeRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			views: {
				"@": {
					controller: 'HomeController',
					templateUrl: '/views/home.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
	$urlRouterProvider.otherwise('/');
}
