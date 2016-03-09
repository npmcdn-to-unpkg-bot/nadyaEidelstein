app.controller('AboutCtrl', AboutCtrl);

function AboutCtrl($routeParams, $location) {
	this.$location = $location;
	this.currentPath = $location.path();
	console.log(this.currentPath);
}