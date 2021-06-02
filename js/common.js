
// tooltip для списка новостей
$(function(){
	$('.s29BriefNewsList a').tooltip({ track: true, tooltipClass: 's29Tooltip' });
})


// старый вариант функции
$(function() {

	$('.s29imgFlip a').each(function() {
		if (/\_off\.png$/.exec($(this).find('img').attr('src')))
		{
			$(this).hover(
				function(){
					var src = $(this).find('img').attr("src").split("off.png")[0] + "over.png";
					$(this).find('img').attr("src",src) ;
				},
				function(){
					var src = $(this).find('img').attr("src").split("over.png")[0] + "off.png";
					$(this).find('img').attr("src",src) ;
				}
			);
		}
	});
	
	// $("a#s29InformerLink").fadeTo(0, 0);
	
});


// новый вариант функции - с прелоудингом
$(function () {
	
	$('.s29Hover').each(function() {
		
		var $hoverBlock = $(this);
		var hoverImages = Array();
		
		$hoverBlock.find('a img').each(function(){
			hoverImages[hoverImages.length] = $(this).attr('src').replace(/\.(png|jpg)$/i, '-hover.$1');
		});
		
		$.preload(hoverImages, {
				onFinish: function() {
					$hoverBlock.find('a').hover(
						function() {
							var $img = $(this).find('img');
							$img.attr('src', $img.attr('src').replace(/\.(png|jpg)$/i, '-hover.$1'));
						},
						function() {
							var $img = $(this).find('img');
							$img.attr('src', $img.attr('src').replace(/-hover\.(png|jpg)$/i, '.$1'));
						}
					)
				}
		});
	});
});


$(function() {
	$('#s29VideoBand img').each(function() {
		$(this).hide();
		$(this).after('<div style="background-image:url(' + $(this).attr('src') + '"></div>');
	});
});


function s29GetBrowserInfo()
{
    var t,v = undefined;
    
    if (window.chrome)
		t = 'Chrome';
    else if (window.opera)
		t = 'Opera';
    else if (document.all)
    {
		t = 'IE';
		var nv = navigator.appVersion;
		var s = nv.indexOf('MSIE')+5;
		v = nv.substring(s,s+1);
    }
    else if (navigator.appName)
		t = 'Netscape';
    
    return {type:t, version:v};
}


function s29AddFavourite(a)
{
	
    var url = window.document.location;
    var title = window.document.title;
    var b = s29GetBrowserInfo();
    
    if (b.type == 'IE' && 8 >= b.version && b.version >= 4)
	{
        window.external.AddFavorite(url,title);
	}
    else if (b.type == 'Opera')
    {
        a.href = url;
        a.rel = "sidebar";
        a.title = url+','+title;
        return true;
    }
	// else if (b.type == "Netscape" && window.sidebar.addPanel)
	// {
    //    window.sidebar.addPanel(title, url, "");
	// }
    else
        alert("Нажмите CTRL-D, чтобы добавить страницу в закладки.");
    
    return false;
}


function s29Popunder(url)
{
	var isMSIE = navigator.userAgent.indexOf("MSIE") != -1 ? !0 : !1,
		_parent = self,
		sOptions, popunder;
	
	if (top != self) try {
		top.document.location.toString() && (_parent = top)
	} catch (err) {}
	
	sOptions = "toolbar=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=" + screen.availWidth + ",height=" + screen.availHeight + ",screenX=0,screenY=0,left=0,top=0";
	popunder = _parent.window.open(url, "rhpop", sOptions);
	
	if (popunder) {
		popunder.blur();
		if (isMSIE) {
			window.focus();
			try {
				opener.window.focus()
			} catch (err) {}
		} else popunder.init = function (e) {
			with(e)(function () {
				if (typeof window.mozPaintCount != "undefined" || typeof navigator.webkitGetUserMedia == "function") {
					var e = window.open("about:blank");
					e.close()
				}
				try {
					opener.window.focus()
				} catch (t) {}
			})()
		}, popunder.params = {
			url: url
		}, popunder.init(popunder)
	}
}


function s29BuildPath(parts, separator)
{
   separator = separator || '/';
   var replace   = new RegExp(separator + '{1,}', 'g');
   return parts.join(separator).replace(replace, separator);
}


// Supertopline

$(function(){
	
	var superTopLineVisible = true;
	
    $(window).scroll(function(){
		if ($(window).scrollTop() > 200 && superTopLineVisible)
			$('#s29SuperTopLine').fadeIn(500);
		else
			$('#s29SuperTopLine').fadeOut(500);	
    });
	
	$('#s29CloseSuperTopLine').click(function(){
		superTopLineVisible = false;
		$('#s29SuperTopLine').fadeOut(500);
	});
});


// selector - только css селектор, jQuery-объект не допускается!
function s29GetAfter(selector, convertToNumber)
{
	if ($(selector).length == 0)
		return;
	var quotedAfter = getComputedStyle(document.querySelector(selector), ':after').getPropertyValue('content');
	var after = quotedAfter.match(/^\"?(.*?)\"?$/)[1];
	return convertToNumber ? Number(after) : after;
}
