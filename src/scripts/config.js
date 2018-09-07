angular.module('app.config', []).config(_configApp)

function _configApp($locationProvider, $compileProvider) {
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
	$locationProvider.hashPrefix('~');
	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: false
	// });
	// Config
}
