angular.module('main.controller', []).controller("MainController", _mainController)

function _mainController($scope) {
	$scope.message = 'Hola!';
}
