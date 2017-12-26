
function connectionTest(){
	let ip = $('#ip').val();
	let port = $('#port').val();
	let connect = false;
	$('#connect-error').show();
	$.get('http://'+ip+':'+port, function(data, status){
		if(status == 'success'){
			$('#connect-error').hide();
			$('#loadbar-info').show();
			$('#mouse-img').show();
			$('html').on('mousemove', loadBar);
		}
	});
}
