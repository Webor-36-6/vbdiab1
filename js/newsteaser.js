if (typeof s29NewsTeaserDefined == 'undefined')
{
	$(function() {
		
		var teaserTypes = [ 'teaser', 'teaser_simple', 'teaser_mobile', 'banner', 'banner_simple' ];
		
		function adjustTeaser($teaser) {
			if ($teaser.width() < 400)
				$teaser.removeClass('s29_twoColumns s29_wide').addClass('s29_oneColumn');
			else if ($teaser.width() < 780)
				$teaser.removeClass('s29_oneColumn s29_wide').addClass('s29_twoColumns');
			else if ($teaser.width() > 1000)
				$teaser.removeClass('s29_oneColumn s29_twoColumns').addClass('s29_wide');
			else
				$teaser.removeClass('s29_oneColumn s29_twoColumns s29_wide');
		}
		
		function adjustTeasers()
		{
			$('.s29NewsTeaser').each(function() { adjustTeaser($(this)); });
		}
		
		$(window).resize(adjustTeasers);
		
		/*
		function addResizeSensor($teaser)
		{
			new ResizeSensor($teaser, function() {
				adjustTeaser($teaser);
			});
		}
		*/
		
		function activateTeasers()
		{
			var $inactiveTeasers = $('.s29NewsTeaser:not(.s29_active)');
			$inactiveTeasers.each(function () {
				var $teaser = $(this);
				$teaser.addClass('s29_active');
				adjustTeaser($teaser);
				// doesn't work on teasers loaded by ajax on hosting
				//addResizeSensor($teaser);
			});
		}
		
		function detectTeaserType($teaser)
		{
			for (var i = 0; i < teaserTypes.length; i++)
				if ($teaser.hasClass('s29_' + teaserTypes[i]))
					return teaserTypes[i];
		}
		
		$(document).on('newsTeaserLoaded', activateTeasers);
		
		var $teasers = $('.s29NewsTeaser');
		if ($teasers.length > 0)
		{
			var location = window.location;
			var topDomain = location.host.search(/\.nbk$/) != -1 ? 'nbk' : 'net';
			var url = 'https://code.29ru.' + topDomain + '/_ajax/newsteaser/';
			
			var locationCode;
			if (location.host.search(/^(?:m\.)?(?:123ru|ru24)\.(?:net|nbk)|news\-life(?:\-(?:pro|org))?\.(?:ru|nbk|pro|org)|(?:\w+\.)?russia24\.(?:pro|nbk)|russian\-city\.nbk|russian\.city$/) != -1)
			{
				var match = location.pathname.match(/^\/([^\/\?\#]+)/);
				locationCode = match ? match[1] : '';
			}
			else
				locationCode = '';
			
			var data = {
				host:		location.host,
				location:	locationCode
			};
			
			var i = 0;
			$teasers.each(function() {
				var $teaser = $(this);
				$teaser.data('index', i);
				data['type[' + i + ']'] = detectTeaserType($teaser);				
				data['target[' + i + ']'] = $teaser.data('target');
				data['width[' + i + ']'] = $teaser.data('width');
				data['height[' + i + ']'] = $teaser.data('height');				
				data['featured[' + i + ']'] = $teaser.data('featured');
				i++;
			});
			
			$.ajax(
				{
					url: url,
					data: data,
					success: function (data) {
						var teaserCodes = JSON.parse(data);
						$teasers.each(function() {
							var $teaser = $(this);
							$teaser.html(teaserCodes[$teaser.data('index')]);
						});
						activateTeasers();
					},
					crossDomain: true,
					dataType: 'html'
				}
			);
		}
	});

	s29NewsTeaserDefined = true;
}
