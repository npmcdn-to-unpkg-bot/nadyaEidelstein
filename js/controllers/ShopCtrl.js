// angular.module('nadya', []).controller('ShopCtrl', function($scope){
// 	$scope.$watch('search', function() {
// 		fetch();
// 	});

// 	// $scope.search

// 	function fetch() {
// 		$http.get("https://openapi.etsy.com/v2/listings/active?api_key={1r75kid20pq9mv3vsin1vaz6}")
//         .then(function(response){ $scope.details = response.data; });
// 	}
// })

angular.module('nadya').controller('ShopCtrl', ShopCtrl);

function ShopCtrl($scope, $http) {
	    $http.get('https://openapi.etsy.com/v2/listings/active?api_key=1r75kid20pq9mv3vsin1vaz6').
        success(function(data) {
            $scope.greeting = data;
            console.log(data);
        });
}

// function ShopCtrl($routeParams, $location, worksService) {
// 	this.$location = $location;
// 	this.currentPath = $location.path();
// 	this.worksService = worksService;
// 	this.works = this.worksService.getWorks();
//     this.headerVisible = true;
// }

// ShopCtrl.prototype.goToWork = function(work) {
// 	this.$location.path('works/' + work.ID);
// }