var app = angular.module('miniRouting')

app.controller('productsCtrl', function($scope, $stateParams, productsService) {

	if ($stateParams.id === 'shoes') {
		$scope.productsData = productsService.shoeData;
 	} else if ($stateParams.id === 'socks') {
 		$scope.productsData = productsService.sockData;
 	}
})
