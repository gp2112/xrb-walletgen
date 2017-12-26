
setInterval(function(){
	if($('.percent').text() != '100%'){
		$('#mouse-img').toggleClass('left');
		$('#mouse-img').toggleClass('right');
	}
}, 500);