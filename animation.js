document.querySelector('.song').volume = 0.1;

$('.splashscreen').click(function(){
	$(this).fadeOut(200);
	// waits for the transition to end and then plays song
	setTimeout(() => {
		document.querySelector('.song').play();
	}, 200);
});

