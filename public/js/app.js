angular.module('TopOutApp', ['mainCtrl', 'TopOutRouter', 'authService'])
	.directive('navbar', navbar)
//
function navbar(){
	var directive = {
		restrict: 'EA',
		templateUrl: 'partials/nav-bar.html'
	}
}
