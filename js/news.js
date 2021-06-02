
$(function() {
	
	var bodyWidth = null, bodyHeight = null;

	function setArticlesWidth()
	{
		var $rightBlock = $('.s29NewsList > .s29_right');
		
		if ($rightBlock.length == 0)
		{
			$('.s29NewsList article').each(function() {
				$(this).removeClass('s29_margin');
			});
			return;
		}
		
		var rightBlockOffset = $rightBlock.offset();
		var noMarginTop = rightBlockOffset.top + $rightBlock.outerHeight(true);
		var hasMargin = true;
		
		$('.s29NewsList article').each(function() {
			var $article = $(this);
			var articleOffset = $article.offset();
			hasMargin = articleOffset.top < noMarginTop;
			if (hasMargin)
				$article.addClass('s29_margin');
			else
				$article.removeClass('s29_margin');
		});
		
		if (hasMargin)
			$('.s29NewsList > footer').addClass('s29_margin');
	}
	
	function checkArticlesWidth()
	{
		var newBodyWidth = $('body').width();
		var newBodyHeight = $('body').height();
		if (bodyWidth != newBodyWidth || bodyHeight != newBodyHeight)
		{
			bodyWidth = newBodyWidth;
			bodyHeight = newBodyHeight;
			setArticlesWidth();
		}
	}
	
	setInterval(checkArticlesWidth, 1000);
	//$(window).resize(setArticlesWidth);

	checkArticlesWidth();

});
