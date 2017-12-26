function genNumber(){
	let randint = '';
	for(let i=0; i<64; i++){
		randint += parseInt(Math.random() * 10);
	}
	$('#seed').val(randint);
}