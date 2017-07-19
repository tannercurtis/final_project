$(".grid").imagesLoaded( function(){
	$(".grid").masonry({
			itemSelector: '.grid-images',
			columnWidth: ".grid-images",
			percentPosition: true
	});

	$("a.gallery").featherlightGallery({
		galleryFadeIn: 0,
		galleryFadeOut: 0
	});

	$("nav a").hover(function(){
	    $("nav a").removeClass("current");
	    $(this).addClass("current");
	});
});

//https://github.com/noelboss/featherlight/wiki/Gallery:-swipe-on-touch-devices