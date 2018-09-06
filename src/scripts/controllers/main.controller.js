angular.module('controllers', []).controller("MainController", _mainController)

function _mainController($scope) {
	$scope.message = 'Hola!';
}
