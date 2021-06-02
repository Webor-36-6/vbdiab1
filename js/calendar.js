
$(function() {
	
	function assignEvents()
	{
		$('#s29MiniCalendar .s29_year .s29_prev').click(function() {
			getCalendar(-1, 0);
		});
		
		$('#s29MiniCalendar .s29_year .s29_next').click(function() {
			getCalendar(1, 0);
		});
		
		$('#s29MiniCalendar .s29_month .s29_prev').click(function() {
			getCalendar(0, -1);
		});
		
		$('#s29MiniCalendar .s29_month .s29_next').click(function() {
			getCalendar(0, 1);
		});
	}
	
	function getCalendar(dYear, dMonth)
	{
		var data = {};
		data.year = Number($('#s29MiniCalendar input[name="minicdr_year"]').val());
		data.month = Number($('#s29MiniCalendar input[name="minicdr_month"]').val());
		data.dyear = dYear;
		data.dmonth = dMonth;
		data.date = $('#s29MiniCalendar input[name="minicdr_date"]').val();
		
		$.ajax({
			type: 'GET',
			url: $('#s29MiniCalendar input[name="minicdr_baseurl"]').val(),
			data: data,
			beforeSend: function() {
				var $calendarBody = $('#s29MiniCalendar .s29_body');
				$('#s29MiniCalendar .s29_ajax div')
					.css('left', - ($calendarBody.width() / 2 + 10))
					.css('top', - ($calendarBody.height() / 2 + 28))
					.show();
			},
			success: function(msg) {
				$('#s29MiniCalendarAjax').hide().html(msg).fadeIn(500);
				assignEvents();
			},
			error: function(msg) {
				$('#s29MiniCalendar .s29_ajax div').hide();
			}
		});
	}
	
	assignEvents();
	
});