angular.module('nadya').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($routeParams, $location, worksService) {
	this.$location = $location;
	this.currentPath = $location.path();
	this.worksService = worksService;
	this.works = this.worksService.getWorks();
	console.log(this.currentPath);
    this.headerVisible = true;
}

HomeCtrl.prototype.goToWork = function(work) {
	this.$location.path('works/' + work.ID);
}