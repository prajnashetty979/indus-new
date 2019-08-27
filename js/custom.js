$(document).ready(function() {
	var swiperH = new Swiper('.swiper-container-h', {
		spaceBetween: 50,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var swiperV = new Swiper('.swiper-container-v', {
		direction: 'vertical',
		spaceBetween: 50,
		mousewheel: true,
	});
	var body = $('body');
	var left = 0;
	// var wheel = false;
	// $("html, body").mousewheel(function(event, delta) {
	// 	this.scrollLeft -= (delta * 100);
	// 	event.preventDefault();
	// 	body.stop().animate({
	// 		scrollLeft: left
	// 	}, 1500, 'easeInOutExpo');
	// });
	function mouseWheel(dir) {
		if (dir) {
			$('.main-content, *').on("mousewheel", function(e, delta) {
				this.scrollLeft -= (delta * 100);
				console.log(delta, e);
				e.preventDefault();
				$('body').stop().animate({
					scrollLeft: left
				}, 1500, 'easeInOutExpo');
				// if(scrollStop) {
				//  console.log("scrollStop",scrollStop);
				//  $('.main').off("mousewheel");
				// }
				return dir
			});
		} else {
			$('.main-content, *').off("mousewheel");
		}
	}
	swiperV.on('reachEnd', function() {
		mouseWheel(false);
		// scrollStop= true;
	});

	swiperV.on('reachBeginning', function() {
		mouseWheel(true);
		// scrollStop= false;
	});
	mouseWheel(true);

	// var s = $(".post-5");
	// var pos = s.position();
	// $(window).mousewheel(function() {
	// 	var windowpos = $(window).scrollLeft();
	// 	if (windowpos >= pos.left) {
	// 		s.addClass("stick");
	// 	} else {
	// 		s.removeClass("stick");
	// 	}

	// });
	// $('stick').mousewheel(function(event, delta) {
	// 	this.scrollLeft = (delta.stop());
	// 	return false;
	// 	alert("hello");
	// });
});
// $(document).scroll(function() {
// 	var scroll = $(this).scrollTop();
// 	var topDist = $(".post-5").position();
// 	var aircrafttopDist = $(".fs_ls fs_ls_n").position();
// 	var bottom = $(".post-5").offset().top + $(".post-5").outerHeight(true);
// 	if (scroll >= topDist.top && scroll < bottom) {
// 		$("html, body").mousewheel(function(event, delta) {
// 			this.scrollTop -= (delta * 100);
// 		});
// 	} else {
// 		$("html, body").mousewheel(function(event, delta) {
// 			this.scrollLeft -= (delta * 100);
// 		});
// 	}
// });