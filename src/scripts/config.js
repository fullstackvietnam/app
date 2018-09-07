
angular.module('app.config', []).config(["$locationProvider", function ($locationProvider) {
	$locationProvider.hashPrefix(''); // by default '!'
	$locationProvider.html5Mode(true);
}]);
