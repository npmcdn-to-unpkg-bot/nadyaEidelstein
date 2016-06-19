var app = angular.module('nadya', ['ngRoute']);

app.controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $routeParams, $location) {
    this.currentPath = $location.path();
    this.visible = true;
}

app.config(function($routeProvider) {
	$routeProvider
 //    .when('/welcome', {
	// 	templateUrl: 'templates/welcome.html',
	// 	controller: 'WelcomeCtrl as ctrl',
	// })
	.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl as ctrl'
	})
	.when('/works/:workId', {
		templateUrl: 'templates/description.html',
		controller: 'WorkDetailsCtrl as ctrl'
	})
    .when('/about', {
		templateUrl: 'templates/about.html',
		controller: 'AboutCtrl as ctrl'
	})
	.when('/shop', {
		templateUrl: 'templates/shop.html',
		controller: 'ShopCtrl as ctrl'
	})
	.otherwise({
		redirectTo: '/home'
	});
});

$(document).ready(function() {
	var shown = true;
    var scroll_start = 0;
	var shrunk = false;
	var startchange = $('#main');
	var offset = startchange.offset();

    var menu = $('#sliding-menu')
	var button = $('#menu-icon');
	var open = false;
	console.log(button);
	button.click(function() {
	    if (open==false) {
	    	menu.slideDown(400, function() {});
	  		open = true;
	   	} else {
	   		menu.slideUp(400, function() {});
	   		open = false;
	   	}
	})

    $("#name").click(function() {
    	$(this).hide();
    })
	$(document).scroll(function() {
	   scroll_start = $(this).scrollTop();
	    if(scroll_start > 50 && !shrunk && $(window).width() > 800) {
	        $(".lin").animate({width: '8rem'}, 500);
	        $(".navigation-container").css("padding-top", "0");
	        $(".navigation-container").css("padding-bottom", "0");
	        if ($(window).width() < 768) {
		    	$(".sm").css("display", "inline-block");
		    }
	    	shrunk = true;
	    } else if(scroll_start < 50 && shrunk && $(window).width() > 800) {
	    	$(".lin").animate({width: '11rem'}, 500);
	    	$(".navigation-container").css("padding-top", "0.5rem");
	        $(".navigation-container").css("padding-bottom", "0.5rem");
	    	if ($(window).width() < 768) {
		    	$(".sm").css("display", "block");
		    }
	       	shrunk = false;
	    }
	});

    $(".navigation").mouseover(function() {
	    if (document.body.scrollTop > 50 && shrunk && $(window).width() > 800) {
		    $(".lin").animate({width: '11rem'}, 500);
		    if ($(window).width() < 768) {
		    	$(".sm").css("display", "inline-block");
		    }
	        shrunk = false;
	    } 
    })
    $(".navigation").mouseleave(function() {
        if (document.body.scrollTop > 50 && !shrunk && $(window).width() > 800) {
		    $(".lin").animate({width: '8rem'}, 500);
		    if ($(window).width() < 768) {
		    	$(".sm").css("display", "block");
		    }
	        shrunk = true;
	    } 
    })
})