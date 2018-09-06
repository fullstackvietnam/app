angular.module('filter.directive', []).directive("myCustomer", _filter)

function _filter() {
	return {
		template: 'Name'
	};
}
