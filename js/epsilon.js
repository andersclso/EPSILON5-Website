$(document).ready(function() {
	let tminus = {
		days: 28,
		hours: 23,
		minutes: 28,
		seconds: 24
	}

	let totalTimeInSecs = (tminus.days * 86400) + (tminus.hours * 3600) + (tminus.minutes * 60) + tminus.seconds;

	setInterval(function() {		
		if (totalTimeInSecs) {
			$('.days').text(~~(totalTimeInSecs / 86400));
			$('.hours').text(~~(totalTimeInSecs % 86400 / 3600));
			$('.mins').text(~~(totalTimeInSecs % 3600 / 60));
			$('.secs').text(totalTimeInSecs % 60);
			totalTimeInSecs--;
		}
	}, 1000);

	let pic = 2;
	let caption;

	setInterval(function() {
		updateImage();
	}, 3000);

	function updateImage() {
		if (pic == 1) {
			caption = "GO BEYOND EARTH";
		}
		else if (pic == 2) {
			caption = "EXPLORE NEW WORLDS";
		}
		else if (pic == 3) {
			caption = "EXPERIENCE DEEP SPACE";
		}

	  	$('.pic-titles').animate({
	      	opacity: 0
	    })
	    .queue(function() {
		    $(this).text(caption);
		    $(this).dequeue();
	    })
	    .animate({
	      	opacity: 1
	    });

		$('.center').css('background-image', 'url(img/space' + pic + '.jpg');
		pic++;

		if (pic > 3) {
			pic = 1;
		}
	}
});