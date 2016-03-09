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
    
    $("#name").click(function() {
    	$(this).hide();
    })
	$(document).scroll(function() {
	   scroll_start = $(this).scrollTop();
	    if(scroll_start > 50 && !shrunk) {
	        $(".lin").animate({width: '5em'}, 500);
	        if ($(window).width() < 768) {
		    	$(".sm").css("display", "inline-block");
		    }
	    	shrunk = true;
	    } else if(scroll_start < 50 && shrunk) {
	    $(".lin").animate({width: '12em'}, 500);
	    	if ($(window).width() < 768) {
		    	$(".sm").css("display", "block");
		    }
	       	shrunk = false;
	    }
	});

    $(".navigation").mouseover(function() {
	    if (document.body.scrollTop > 50 && shrunk) {
		    $(".lin").animate({width: '12em'}, 500);
		    if ($(window).width() < 768) {
		    	$(".sm").css("display", "inline-block");
		    }
	        shrunk = false;
	    } 
    })
    $(".navigation").mouseleave(function() {
        if (document.body.scrollTop > 50 && !shrunk) {
		    $(".lin").animate({width: '5em'}, 500);
		    if ($(window).width() < 768) {
		    	$(".sm").css("display", "block");
		    }
	        shrunk = true;
	    } 
    })

    $("#works").hover(
        function()
        {
            $(this).attr("src", "images/works-gif.gif");
        },
        function()
        {
            $(this).attr("src", "images/works.gif");
    });
    $("#about").hover(
        function()
        {
            $(this).attr("src", "images/about-gif.gif");
        },
        function()
        {
            $(this).attr("src", "images/about.gif");
    });
})