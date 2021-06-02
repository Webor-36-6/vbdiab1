
(function($) {
	
	
	function setMinHeight()
	{
		var $selectCityBox = $('#s29SelectCityBox');
		if (!$selectCityBox.hasClass('s29_mobile'))
		{
			$selectCityBox.removeClass('s29_twoCols').addClass('s29_threeCols');
			var $body = $('#s29SelectCityBox .s29_body');
			$body.css('min-height', $body.innerHeight() + 'px');
			$selectCityBox.removeClass('s29_threeCols');
		}
	}
	
	
	//function setupWidth()
	//{
	//	var $selectCityBox = $('#s29SelectCityBox');
	//	var windowWidth = $(window).width();
	//	$selectCityBox.width(windowWidth - 60);
	//	$.fancybox.resize();
	//}
	
	
	function setupCols()
	{
		var $selectCityBox = $('#s29SelectCityBox');
		var width = $selectCityBox.width();
		$selectCityBox.removeClass('s29_twoCols s29_threeCols');
		if (width > 680)
			$selectCityBox.addClass('s29_threeCols');
		else if (width > 420)
			$selectCityBox.addClass('s29_twoCols');
	}
	
	
	$.fn.s29SelectCityBox = function(popup)
	{	
		const maxCitiesPerColumn = 20;
		
		if (this.length == 0)
			return;
		
		var mobile = this.hasClass('s29_mobile');
		var oneCountry = this.hasClass('s29_oneCountry');
		
		var $body = this.children('.s29_body');
		var $search = this.find('.s29_search');
		var $result = this.find('.s29_result');	
		var $countries = this.find('.s29_country');
		var $currentCountry = this.find('.s29_country.s29_current');
		var $cities = this.find('.s29_cities');
		
		var $input = $search.find('input');
		
		
		
		function setupCountry()
		{
			var singleRegion = parseInt($currentCountry.find('input[name="singleregion"]').val());
			if (singleRegion)
			{
				setupRegionCities($currentCountry.children('ul').children('li'), true);
				$currentCountry.children('ul').hide();
				$cities.children('h2, div').hide();
			}
			else
			{
				$currentCountry.children('ul').show();
				$cities.children('h2, div').show();				
			}
			
			return singleRegion;
		}
		
		
		function selectCountry()
		{
			var newCountryId = $(this).find('input[name="selectcountryid"]').val();
			$result.hide();
			$input.val('');
			$cities.fadeOut(150);
			$currentCountry.fadeOut(150, function() {
				$currentCountry.removeClass('s29_current');
				$currentCountry = $countries.find('input[name="countryid"][value="' + newCountryId + '"]').parents('.s29_country');
				if (setupCountry())
					$cities.fadeIn(150);
				$currentCountry.fadeIn(150, function() {
					$currentCountry.addClass('s29_current');
					setMinHeight();
					setupCols();
				});
			});
		}
		
		
		function setupRegionCities($region)
		{
			$cities.find('h2').text($region.children('a').text());
			var $regionCities = $region.children('ul').children('li').clone();
			
			var regionUlClass;
			if ($regionCities.length - 1 > maxCitiesPerColumn * 2)
				regionUlClass = 's29_maxThreeCols';
			else if ($regionCities.length - 1  > maxCitiesPerColumn)
				regionUlClass = 's29_maxTwoCols';
			
			$cities.find('ul').remove();
			var $ul = $('<ul></ul>').append($regionCities);
			$ul.addClass(regionUlClass);
			$ul.insertBefore($cities.children('div'));
		}
		
		
		function showRegionCities($region, singleRegion)
		{
			setupRegionCities($region);
			
			(oneCountry ? $currentCountry : $currentCountry.children('ul')).fadeOut(150, function() {
				$cities.fadeIn(150);
				if (mobile)
					$('body, html').animate({
						scrollTop: $("#s29SelectCityBox .s29_cities h2").offset().top - 10
					});
			});
		}
		
		
		function showCurrentRegionCities()
		{
			showRegionCities($(this).parent(), false);
		}
		
		
		function exitRegionCities()
		{
			$cities.fadeOut(150, function() {
				(oneCountry ? $currentCountry : $currentCountry.children('ul')).fadeIn(150);
				if (mobile)
					$('body, html').animate({
						scrollTop: $("#s29SelectCityBox .s29_country h2").offset().top - 10
					});
			});
		}
		
		
		function searchCityInCountry($country, query)
		{
			var queryRegExp = new RegExp('^' + query, 'i');
			
			var $matchesList = $('<ul></ul>');
			var $clone, region;
			
			$country.find('ul ul li').each(function() {
				if ($(this).children('a').text().match(queryRegExp))
				{
					$clone = $(this).clone();
					if ($(this).hasClass('s29_addSuffix'))
					{
						region = $($(this).parents('li')[0]).children('a').text();
						$('<br><small>' + region + '</small>').appendTo($clone);
					}
					$clone.appendTo($matchesList);
				}	
			});
			
			if ($matchesList.children().length == 0)
				return null;
			
			var matches = $matchesList.children().get();
			matches.sort(function(a, b) {
				return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
			});
			var $sortedList = $('<ul></ul>');
			$.each(matches, function(idx, itm) {
				$sortedList.append(itm);
			});
			
			var columns = 1;
			var citiesPerColumn = Math.ceil($sortedList.children().length / columns);
			
			var $countryResult = $('<div class="s29_part"><h3>' + $country.children('h2').text() + '</h3></div>');
			
			var start = 0, end = citiesPerColumn;
			var $ul;
			for (i = 0; i < columns; i++)
			{
				$ul = $('<ul></ul>').append($sortedList.children().slice(start, end).clone());
				$ul.appendTo($countryResult);
				start = end;
				end += citiesPerColumn;
			}
			$countryResult.append('<div style="clear:both;"></div>');
			
			return $countryResult;
		}
		
		
		function searchCity(event)
		{
			var query = $input.val();
			
			if (!query)
			{
				exitSearchCity();
				return;
			}
			
			if (event.type == 'keyup' && event.which == 13)
			{
				var $currentResult = $result.find('.s29_part a');
				if ($currentResult.length == 1)
				{
					var target = event.ctrlKey ? '_blank' : $currentResult.attr('target');
					if (!target)
						target = '_self';
					window.open($currentResult.attr('href'), target);
					return;
				}
			}
			
			$result.find('.s29_part').remove();
			
			var $countryResult;
			$countries.each(function() {
				$countryResult = searchCityInCountry($(this), query);
				if ($countryResult)
					$countryResult.insertBefore($result.children('.s29_back'));
			});
			
			var $foundLinks = $result.find('.s29_part a');
			
			if ($foundLinks.length == 0)
				$result.find('.s29_notFound').show();
			else
				$result.find('.s29_notFound').hide();
			
			
			if ($foundLinks.length == 1)
				$foundLinks
					.addClass('s29_bold')
					.after($('<span>Enter</span>'));
			
			$countries.fadeOut(150, function() {
				$cities.fadeOut(150, function() {
					$search.find('small').hide();
					$result.fadeIn(150);
				});
			});
		}
		
		
		function exitSearchCity()
		{
			$result.fadeOut(150, function() {
				$input.val('');
				$search.find('small').show();
				if (setupCountry())
					$cities.fadeIn(150);
				$currentCountry.fadeIn(150);
			});
		}
		
		this.find('header a')
			.click(selectCountry)
			.attr('href', 'javascript:;');
		
		this.addClass('s29_js');
		if (popup)
			this.addClass('s29_popup');
		
		$countries.find('> ul > li > span').replaceWith(function() {
			return '<a href="javascript:;">' + $(this).text() + '</a>';
		});
		
		$countries.find('> ul > li > a').click(showCurrentRegionCities);
		$cities.find('> div a').click(exitRegionCities);
		
		$input
			.keyup(searchCity)
			.focus(function() {
				if (mobile)
					$('body, html').animate({
						scrollTop: $("#s29SelectCityBox .s29_search h2").offset().top - 10
					});
			});
		
		$result.find('> div a').click(exitSearchCity);
		
		this.find('> footer a').click(function() {
			$.fancybox.close();
		});
		
		if (setupCountry())
			$cities.show();
		
		//$(window).resize(setupWidth);
		$(window).resize(setupCols);
		
		$.s29SelectCityBox.onDisplay();
	};
	
	
	$.s29SelectCityBox = function()
	{
		$('#s29SelectCityBox').s29SelectCityBox();
	}
	
	
	$.s29SelectCityBox.onDisplay = function()
	{
		setMinHeight();
		//setupWidth();
		setupCols();
		$('#s29SelectCityBox .s29_search input').focus();
	}

})(jQuery);



$(function(){
	
	$.s29SelectCityBox();
	
	$('.s29OpenSelectCityBox').click(function(event) {
		
		event.preventDefault();
		$.fancybox.showActivity();
		
		if ($(this).hasClass('s29_country'))
		{
			var matches = $(this).attr('href').match(/^(.*?)(?:\?.*)?$/);
			var path = matches[1];
			matches = path.match(/\/(\w+)\/?$/);
			var countryPart = matches[1] + '/';
		}
		var blankParam = ($(this).attr('target') == '_blank') ? '?&blank=1' : '';
		
		var ajaxUrl = $('input[name="selectCityBoxAjaxUrl"]').val();
		if (!ajaxUrl)
			ajaxUrl = window.location.protocol + '//' + window.location.host + '/selectcitybox/' + countryPart + blankParam;
		
		$.get(ajaxUrl, function(data) {
			var $boxData = $(data);
			$boxData.s29SelectCityBox(true);
			$.fancybox.hideActivity();
			$.fancybox({
				content:$boxData,
				onComplete: $.s29SelectCityBox.onDisplay,
				autoScale: false
			});
		});
	});
	
});
