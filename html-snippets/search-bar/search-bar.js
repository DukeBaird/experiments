$('#icon').on('click', function(e) {
	var $bar = $('#bar');
	if ($bar.css('opacity') == 0) {
  	$bar.addClass('animate');
  } else {
    $bar.removeClass('animate');
  }
});