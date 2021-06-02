
$(function() {
	
	function setupResponsiveGeoBanner() {
		var $banner = $('.n123GeoBanner.n123_responsive');
		var bannerWidth = $banner.width();
		$banner.removeClass('n123_small n123_medium');
		if (bannerWidth < 430)
			$banner.addClass('n123_small');
		else if (bannerWidth < 700)
			$banner.addClass('n123_medium');
	}
	
	$(window).resize(setupResponsiveGeoBanner);
	setupResponsiveGeoBanner();
	
});
