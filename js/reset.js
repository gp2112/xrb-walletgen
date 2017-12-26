
$('#reset').click(function(e){
	e.preventDefault();
	$('.account-info').css('display', 'none');
	$('.qr canvas').remove();
	$('.qr img').remove();
	resetBar();
	c2 = 0;
	count = 0;
});



function resetBar(){
	$('.percent').text('0%');
	$('#load-bar').css('width', '0');
}