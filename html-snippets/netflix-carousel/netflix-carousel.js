const min_width = 200;

function carousel_items() {
	var carousel = $('#carousel');
	var width = carousel.width();
	var carousel_items = Math.floor(width / min_width);

	var item = $("<div class='item'><div class='item-container'><img src='https://http.cat/404'></div></div>");

	carousel.empty();
	
	for(var i = 0; i < carousel_items; i++) {
		carousel.append(item.clone());
	}
}

carousel_items();

$(window).on('resize', function() {
	carousel_items();
});
