$('.left').click(function(e) {
	move_left();
});

$('.right').click(function(e) {
	move_right();
});

function move_left() {
	var circles = $('.circle');	
	var changed = false;
	circles.each(function(index, element) {
		if (element.classList.contains('active')) {
			if (index <= 0 || changed) {
				return;
			}
			
			element.classList.remove('active');
			circles[index - 1].classList.add('active');
			changed = true;
		}
	});
}

function move_right() {
	var circles = $('.circle');
	var changed = false;
	circles.each(function(index, element) {
		if (element.classList.contains('active')) {
			if (index >= circles.length-1 || changed) {
				return;
			}
			
			element.classList.remove('active');
			circles[index + 1].classList.add('active');
			changed = true;
		}
	});
}