angular.module('about.router', []).config(_aboutRoute)

function _aboutRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('about', {
			url: '/',
			views: {
				"@": {
					controller: 'AboutController',
					templateUrl: '/views/about.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
