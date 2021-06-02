
$(function() {
	
	function setupMarketTeasers() {
		$('.s29MarketTeaser').each(function() {
			
			var $teaser = $(this);
			var width = $teaser.outerWidth();
			var targetClass;
			if ($teaser.hasClass('s29_1x'))
			{
				if (width > 540)
					targetClass = 's29_wide';
				else if (width < 320 && width >= 240)
					targetClass = 's29_narrow s29_logoontop';
				else if (width < 240)
					targetClass = 's29_narrow';	
				else
					targetClass = '';
			}
			else if ($teaser.hasClass('s29_2x'))
			{
				if (width > 720)
					targetClass = 's29_wide';
				else if (width < 480 && width >= 320)
					targetClass = 's29_logoontop';
				else if (width < 320 && width >= 240)
					targetClass = 's29_narrow s29_logoontop';
				else if (width < 240)
					targetClass = 's29_narrow';
				else
					targetClass = '';				
			}
			else if ($teaser.hasClass('s29_3x'))
			{
				if (width > 960)
					targetClass = 's29_wide';
				else if (width < 580 && width >= 480)
					targetClass = 's29_logoontop';	
				else if (width < 480 && width >= 360)
					targetClass = 's29_medium';
				else if (width < 360 && width >= 320)
					targetClass = 's29_medium s29_logoontop';
				else if (width < 320 && width >= 240)
					targetClass = 's29_narrow s29_logoontop';
				else if (width < 240)
					targetClass = 's29_narrow';
				else
					targetClass = '';				
			}
			else if ($teaser.hasClass('s29_4x'))
			{
				if (width > 1200)
					targetClass = 's29_wide';
				else if (width < 760 && width >= 520)
					targetClass = 's29_medium';
				else if (width < 520 && width >= 320 )
					targetClass = 's29_medium s29_logoontop';
				else if (width < 320 && width >= 240)
					targetClass = 's29_narrow s29_logoontop';
				else if (width < 240)
					targetClass = 's29_narrow';
				else
					targetClass = '';					
			}
			$teaser.removeClass('s29_wide s29_medium s29_narrow s29_logoontop').addClass(targetClass);
			
			$teaser.find('.s29_item').each(function() {
				var $item = $(this);
				if ($item.width() >= 280)
					$item.addClass('s29_big');
				else
					$item.removeClass('s29_big');
			});
		});
	}
	
	$(window).resize(setupMarketTeasers);
	
	setupMarketTeasers();
	
});