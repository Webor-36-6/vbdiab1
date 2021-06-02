
function s29LocListEvents(mParam)
{
	if (mParam)
	{
		s29LocListEvents.mParam = mParam;
		$('select[name="countryid"]').change(function() {
			s29LocList(s29LocListEvents.mParam, true);
		});
	}
	
	$('select[name="regionid"]').change(function() {
		s29LocList(s29LocListEvents.mParam, false);
	});
}


function s29LocList(mParam, countryUpdated)
{
	var $country = $('select[name="countryid"]');
	var $region = $('select[name="regionid"]');
	var $city = $('select[name="cityid"]');
	var locParam;
	var noSmiParam;
	
	$city.val('');
	$city.attr('disabled', true);
	
	if (countryUpdated)
	{
		$region.val('');
		$region.attr('disabled', true);
		if ($country.val())
			locParam = 'countryid=' + $country.val();
	}
	else if ($region.val())
		locParam = 'regionid=' + $region.val();
	
	noSmiParam = $('input[name="selectlocation_nosmi"]').val() == 1 ?
		'&nosmi=1' :
		'';
	
	if (locParam)
	{
		$.ajax({
			type: 'GET',
			url: window.location.protocol + '//' + window.location.host + '/ajax/s29_cities/?m=' + mParam + '&' + locParam + noSmiParam,
			beforeSend: function() {
				
				$((countryUpdated && $('#s29SelectRegionTr').is(':visible')) ? '#s29RegionSpinner' : '#s29CitySpinner').css('display', 'inline-block');
			},
			success: function(msg) {
				if (msg.indexOf('name="regionid"') != -1)
				{
					$region.replaceWith(msg);
					$region.attr('disabled', false);
					s29LocListEvents();
				}
				else if (msg.indexOf('name="cityid"') != -1)
				{
					$city.replaceWith(msg);
					
					$city.attr('disabled', false);
				}
				$('.s29InputSpinner, .s29InputLoader').hide();
				
				if ($region.attr('disabled'))
					$('#s29SelectRegionTr').slideUp();
				else
					$('#s29SelectRegionTr').slideDown();
			}
		});
	}
}



	
