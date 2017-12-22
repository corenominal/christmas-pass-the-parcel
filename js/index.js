$(document).on('ready',function()
{
	// The music audio track
	var song = new Howl(
	{
		urls: ['./sfx/LetItSnow_PeterLemongello.mp3', './sfx/LetItSnow_PeterLemongello.ogg']
	});

	// The "Stop!" audio track, provided by the fine folks of Lincoln LUG
	var stop = new Howl(
	{
		urls: ['./sfx/stop.mp3', './sfx/stop.ogg']
	});

	// The main function
	function pass_the_parcel()
	{
		// 1. Start playing the song
		song.play();

		// Notify the user to start/keep passing the parcel
		$( '#notify' ).attr( 'class', 'animated tada infinite' );
		$( '#notify' ).html( '<h1>Go go go! Pass the parcel!</h1>' );

		// Generate a random number to use as microseconds
		// within the setTimeout function
		var microseconds = Math.floor((Math.random() * 20000) + 3000);

		// Pause the song after microseconds have passed
		setTimeout(function()
		{
			song.pause(); // Pause the song
			stop.play(); // Play "Stop!" sfx
			$( '#notify' ).html( '<h1>Stop!</h1>' ); // Show stop header
			$( '#notify' ).attr( 'class', 'animated zoomInUp' ); // Animate header
			$( '#pass_the_parcel' ).html( 'Continue the game ...' ); // Adjust button text
			$( '#pass_the_parcel' ).attr( 'class', 'animated rollIn' ); // Animation and show the button
		}, microseconds );
	}

	// Butten click event - start/continue playing
	$('#pass_the_parcel').on( 'click', function()
	{
		pass_the_parcel(); // Call the main function
		$( '#pass_the_parcel' ).attr( 'class', 'animated rollOut' ); // Animate and hide the button
	});

});

