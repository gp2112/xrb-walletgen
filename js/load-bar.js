var count = 0;
var c2 = 0;

function loadBar(e){
	if(parseFloat($('#load-bar').css('width').split('px')[0]) >= 800 && c2 == 0){
		$('#mouse-img').css('display', 'none');
		c2++;		
		$('#load-bar').css('background-color', '#00aa00');
		//$('#ready').prop('disabled', false);
		$.post('http://127.0.0.1:7076', 
			'{ "action": "deterministic_key", "seed": "'+ $('#seed').val() +'", "index": "0" }',
			function(data, status){
				$('#public').text(data.public);
				new QRCode(getId('qr-public'), data.public);
				$('#private').text(data.private);
				new QRCode(getId('qr-private'), data.private);
				$('#account').text(data.account);
				new QRCode(getId('qr-account'), data.account);
				$('.account-info').show();
			}
		);
	}else{
		if(c2 == 0){
			genNumber();
			count += 0.1;
			$('#load-bar').css('width', count + "%");
			$('.percent').text(percentBar());
		}
	}
}

function percentBar(){
	let widthBar = parseInt($('#bar').css('width').split('px')[0]);
	let widthLoaded = parseInt($('#load-bar').css('width').split('px')[0]);
	return parseInt(widthLoaded / widthBar * 100) + '%';
}
