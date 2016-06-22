$(document).ready(function(){
	etsy_api();
});

function images_response(data){
	console.log(data);
	// images = data.data;
	// $('#instagram-pics').html('');
	// for(image in images){
	// 	var im = images[image].images.standard_resolution.url;
	// 	console.log(images[image].images.standard_resolution.url);
	// 	$('#instagram-pics').append('<li style="background:url('+im+'); background-size:cover; background-position: center center;"></li>');
	// }
	// $('#image-container').css('top','0px');
	// clearInterval(animation);
	// animation=setInterval(scroll_images,100);
}

function etsy_api(){
	var api_key = "1r75kid20pq9mv3vsin1vaz6";
	var shop_name = "NadyasCreatures";
	var imgPadding = "15px";
	var products = '';
	$.ajax({
	    url: "https://openapi.etsy.com/v2/shops/" + shop_name + "/listings/active.js?api_key=" + api_key + "&includes=MainImage&fields=url,price,title,shop_section_id,description&limit=100",
	    data: {api_key: '1r75kid20pq9mv3vsin1vaz6'},
	    dataType: 'jsonp',
	    success: function(data){
	        console.log(data,'success');
	        console.log(data.results);
	        products = data.results;

			var output = '';
			$.each(data.results, function(key, val) {
				output += '<li class="product">' + '<a class="readMore">' + '<image src="' + val.MainImage.url_570xN + '">';
				output += '<div class="product-info">' + '<h3 class="title">' + val.title + '</h3>';
				output += '<p>' + val.price + " CAD" + '</p>' + '</div>';
				output += '</a>' + '</li>';
	        })
	        $('#products').html(output);
	        $('#products').find('.readMore').on('click', function(e) {
				e.preventDefault();
				var index = 0;
				var $description = $('#description');
				for (var i = 0; i < products.length; i++) {
					// $info.load('templates/moodject.html');
					if(products[i].title == $(this).find('h3').text()) {
						index = i;
						console.log(index);
						break;
					}
				};
				$description.html(products[index].description);
			});
	    },
		error:function(data){
			console.log(data);
		}
	});

}

	// 	$('#works').find('#readMore').on('click', function(e) {
	// 	e.preventDefault();
	// 	var $info = $('#project-container');
	// 	switch ($(this).attr('href')) {
	// 		case 'moodject.html':
	// 		console.log('yes');
	// 		$info.load('templates/moodject.html');
	// 	}
	// 	$('#project-container').load('templates/maude.html');
	// });

// 398858423
// 1r75kid20pq9mv3vsin1vaz6
// /shops/:shop_id/listings/active
// 13153644