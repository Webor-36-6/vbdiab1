!function(){
    var regExp = function(name){
        return new RegExp('(^| )'+ name +'( |$)');
    };
    var forEach = function(list, fn, scope){
        for (var i = 0; i < list.length; i++){
            fn.call(scope, list[i]);
        }
    };
	function ClassList(element){
        this.element = element;
    }
	ClassList.prototype = {
        add: function(){
            forEach(arguments, function(name){
                if (!this.contains(name)) this.element.className += ' '+ name;
            }, this);
        },
        remove: function(){
            forEach(arguments, function(name){
                this.element.className = this.element.className.replace(regExp(name), '');
            }, this);
        },
        toggle: function(name){
            return this.contains(name)?(this.remove(name), false):(this.add(name), true);
        },
        contains: function(name){
            return regExp(name).test(this.element.className);
        },
        replace: function(oldName, newName){
            this.remove(oldName), this.add(newName);
        }
    };
	// IE8/9, Safari
    if (!('classList' in Element.prototype)){
        Object.defineProperty(Element.prototype, 'classList', {
            get: function(){
                return new ClassList(this);
            }
        });
    }

    // replace() support for others
    if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
        DOMTokenList.prototype.replace = ClassList.prototype.replace;
    }
}();

!function(){
	!function(){ 
		return (window.gnezdo && window.gnezdo.create) ? window.gnezdo : (window.gnezdo = {
			create: function(p){ 
				var self = this;
				self.left = 0;
				self.right = window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth || 0;
				self.top = 0;
				self.bottom = window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight || 0;
				self.fade_time = 1000;
				
				if (p && "object" == typeof p){
					if (p.containerId){
						var b = document.getElementById(p.containerId);
						if (b){
							if (b.classList.contains("gnezdo_used")){
								//console.log("Block with id '"+p.containerId+"' already used");
								if (self['reload_'+p.containerId]){
									b.innerHTML = "";
								}else{
									return false;
								}
							}else{
								b.classList.add("gnezdo_used");
							}
							
							self['rv_proc'+p.containerId] = 50;
							
							if (p.data || (p.tizerId && "number" == typeof p.tizerId)){
								var gw = b.clientWidth || 0, gh = b.clientHeight || 0;
								//self.base_domain = Math.random() > 0.5 ? "https://fcgi.gnezdo.ru" : "https://fcgi5.gnezdo.ru";
								self.base_domain = "https://fcgi5.gnezdo.ru";
								p.domain = (p.domain && "string" == typeof p.domain) ? p.domain : self.base_domain;
								if (p.domain == 'https://news.2xclick.ru') p.domain = self.base_domain;
								p.domain = p.domain.search(/^http/i) != -1 || p.domain.search(/^\/\//i) != -1 ? p.domain : "//"+p.domain;
																
								var gtid = self._getParameterByName('gnezdo_tid') || 0, gaid = 0, gtvm = self._getParameterByName('gnezdo_tvm') || '';
								if ((!gtid || gtid == p.tizerId) && gtvm && (gtvm == 'native' || gtvm == 'tizer')){
									gaid = self._getParameterByName('gnezdo_aid') || 0;
									if (gaid){
										var gaid_arr = [];
										gaid = gaid.split(',').forEach(function(id){
											id = id.replace(/\D/ig, '');
											if (id) gaid_arr.push(id);
										});
										gaid = gaid_arr.join(',');
									}
								}
								
								var ref = (self._inIframe())?escape(document.referrer):escape(window.location.href);
								if (!p.ids) p.ids = 0;
								if (!self.ids){
									self.ids = '';
								}else if (self.ids.split(",").length > 50){
									self.ids = self.ids.split(",").slice(-50).join();
								}
								
								if (p.data){
									p.data = p.data.replace(/\r\n/ig, '<br/>');
									loader(JSON.parse(p.data));
								}else{
									var xhr;
									if (window.XMLHttpRequest){
										xhr = new XMLHttpRequest();
									}else{
										xhr = new ActiveXObject("Microsoft.XMLHTTP");
									};
									xhr.withCredentials = true;
									xhr.open("GET", p.domain+"/cgi-bin/tzr.fcgi?id="+p.tizerId+"&f=2&ref="+ref+"&gw="+gw+"&gh="+gh+"&gaid="+gaid+"&gtvm="+gtvm+"&ids="+self.ids, true);
									
									var xhrTimer = setInterval(function(){
										if (!self['xhr_process']){
											self['xhr_process'] = 1;
											xhr.send();
											clearInterval(xhrTimer);
										}
									}, 50);
									
									xhr.onreadystatechange = function(){
										if (xhr.readyState != 4) return;
										if (xhr.status != 200){
											//console.log("Error loading TZR " + xhr.status + ": " + xhr.statusText);
											self['xhr_process'] = 0;
											b.classList.remove("gnezdo_used");
											return false;
										}else{
											self['xhr_process'] = 0;
											var data = xhr.responseText ? JSON.parse(xhr.responseText) : undefined;
											loader(data);
										}
									};
								};
								
								function loader(data){
									var data_origin;
									if (data){
										if(data.changeId){
											p.tizerId = data.changeId;
										}
										var iframe = document.createElement("iframe");
										iframe.id = "gc_"+p.containerId;
										iframe.scrolling = "no";
										iframe.loading = "eager";
										iframe.allow = "autoplay";
										iframe.style.width = '100%';
										iframe.style.maxWidth = '100%';
										if (data.rtb_banner || (data.native && (data.arr.length || data.adv))){
											//iframe.style.height = data.gh+'px';
											iframe.style.setProperty( 'height',  data.gh+'px', 'important' );
										}else{
											//iframe.style.height = 0;
											iframe.style.setProperty( 'height',  0, 'important' );
											iframe.style.visibility = "hidden";
										}
										iframe.style.border = "none";
										if(data.sticky){
											iframe.style.position = "fixed";
											iframe.style.bottom = "0";
											iframe.style.top = "auto";
											iframe.style.zIndex = "999";
											self['reload_'+p.containerId] = 1;
											setTimeout(function(){
												self.create(p);
											}, 15000);
										}
										
										if (p.onLoad && "function" == typeof p.onLoad) p.onLoad(b);
										
										if (data.mask_id) data.ref_param = '&m='+data.mask_id;
										if (data.mh) data.ref_param = '&mh='+data.mh;
										if (!data.ref_param) data.ref_param = '';
										if (data.alg) data.ref_param += '&alg='+data.alg;
										data.gw = gw;
										if (document.body.clientWidth < 460) data.ref_param += '&mob=1'; 
										
										data.image_domain = (data.image_domain && "string" == typeof data.image_domain) ? data.image_domain : "https://news.gnezdo.ru";
										data.image_domain = data.image_domain.search(/^http/i) != -1 || data.image_domain.search(/^\/\//i) != -1 ? data.image_domain : "//"+data.image_domain;
										
										data_origin = JSON.parse(JSON.stringify(data));
										var html = '';
										if (data.arr.length){
											for (i = 0; i < data.arr.length; i++){
												var an = data.arr[i];
												if (an.track_view){
													an.track_view.forEach(function(url){
														new Image().src = url;
													});
												}
											}
											if (data.rtb_banner){
												html = self._createContentRTBBanner(data, p) || '';
											}else if (data.native){
												html = self._createContentNative(data, p) || '';
												self['rv_proc'+p.containerId] = 60;
											}else if (data.text_img == 'slider') {
												html = self._createContentSlider(data, p) || '';
											}else if (data.adaptive){
												html = self._createContentAdaptive(data, p) || '';
											}else if (data.custom){
												html = self._createContentCustom(data, p) || '';
											}else{
												html = self._createContent(data, p) || '';
											}
											if (p.onSuccess && "function" == typeof p.onSuccess) p.onSuccess(b);
										}else if (data.adv){
											html = data.adv;
											if (p.onStub && "function" == typeof p.onStub) p.onStub(b);					
										}else{
											if (p.onEmpty && "function" == typeof p.onEmpty) p.onEmpty(b);
										};
										var getAverageRGB = function (imgEl, idoc) {
											var blockSize = 1, // only visit every 5 pixels
											defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
											canvas = idoc.createElement('canvas'),
											context = canvas.getContext && canvas.getContext('2d'),
											data, width, height,
											i = -4,
											length,
											rgb = {r:0,g:0,b:0},
											count = 0;

											if (!context) {
												return defaultRGB;
											}

											height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
											width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

											context.drawImage(imgEl, 0, 0);

											try {
												data = context.getImageData(0, 0, width, height);
											} catch(e) {
												/* security error, img on diff domain */
												return defaultRGB;
											}

											length = data.data.length;

											while ( (i += blockSize * 4) < length ) {
												++count;
												rgb.r += data.data[i];
												rgb.g += data.data[i+1];
												rgb.b += data.data[i+2];
											}
											if (rgb.r > rgb.g && rgb.r > rgb.b)
												rgb.r *= 1.1;
											else if (rgb.g > rgb.r && rgb.g > rgb.b)
												rgb.g *= 1.1;
											else if (rgb.b > rgb.r && rgb.b > rgb.g)
												rgb.b *= 1.1;

											// ~~ used to floor values
											rgb.r = ~~(rgb.r/count);
											rgb.g = ~~(rgb.g/count);
											rgb.b = ~~(rgb.b/count);
											if (rgb.r+rgb.g+rgb.b < 550) {
												rgb.r = ~~(rgb.r*1.3);
												rgb.g = ~~(rgb.g*1.3);
												rgb.b = ~~(rgb.b*1.3);
											}
											return rgb;

										}
										var o;	
										function iLoad(){
											var idocument = iframe.contentDocument || iframe.contentWindow.document, is_ie = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1, is_edge = window.navigator.userAgent.indexOf("Edge") > -1, is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), is_chrome = window.navigator.userAgent.match(/Chrome\/(\d+)\./), is_smart_tv = window.navigator.userAgent.indexOf("SmartTV") > -1;
											
											if (is_ie || is_edge || is_smart_tv || is_safari || (is_chrome && is_chrome[1] && is_chrome[1] < 30)){
												idocument.open();
												idocument.write(html);													
											}else{
												idocument.open();
												idocument.write(html);
												idocument.close();
											};
											
											if (idocument && idocument.querySelector("html")){
												
												function render(){																
													var renderCounter = 0;	
													var sliderInitialized = false;	
													var renderTimer = setInterval(function(){
														renderCounter++;
														var height = idocument.querySelector("html").scrollHeight>=idocument.querySelector("html").offsetHeight?idocument.querySelector("html").scrollHeight:idocument.querySelector("html").offsetHeight;
														if (height && height>20){
															//iframe.style.height = height+"px";
															//iframe.style.maxHeight = height+"px";
															//iframe.style.visibility = "visible";
															iframe.style.setProperty( 'height',  height+'px', 'important' );
															iframe.style.setProperty( 'max-height',  height+'px', 'important' );
															//iframe.style.setProperty( 'visibility',  'visible', 'important' );
															if (p.ch_c){
																iframe.style.setProperty( 'opacity',  0, 'important' );
																iframe.style.setProperty( 'visibility',  'visible', 'important' );
																self._fade(self.fade_time, 'in', iframe);																	
															}else{
																iframe.style.setProperty( 'visibility',  'visible', 'important' );
															}
															
															if (p.onRender && "function" == typeof p.onRender) p.onRender(b);
															
															var bird = idocument.getElementsByClassName('partner_link_bottom_wrap')[0];
															if (bird){
																try {
																	bird.style.setProperty('top', '0px', 'important');
																	bird.style.setProperty('right', '0px', 'important');
																	var bird_rect = bird.getBoundingClientRect();
																} catch (i) {};
																if (bird_rect){
																	//console.log(bird, bird_rect.top, bird_rect.right, bird.style.top.replace('px', ''), bird.style.right.replace('px', ''));
																	var offsetTop = 999999;
																	var offsetRight = 0;
																	var gnezdo_img = idocument.getElementsByClassName('gnezdo_img');
																	for (var i = 0; i < gnezdo_img.length; i++){
																		var e = gnezdo_img[i].getBoundingClientRect();
																		if (e.width && e.top < offsetTop) offsetTop = e.top;
																		if (e.width && e.right > offsetRight) offsetRight = e.right;
																		//console.log(gnezdo_img[i], e.top, e.right);
																	};
																	offsetTop = offsetTop - bird_rect.top;
																	offsetRight = bird_rect.right - offsetRight;			
																	//console.log(bird.style.top.replace('px', ''), offsetTop, bird.style.right.replace('px', ''), offsetRight);
																	if (offsetTop) bird.style.setProperty('top', offsetTop+'px', 'important');
																	if (offsetRight) bird.style.setProperty('right', offsetRight+'px', 'important');
																};
															};

															if (data.arr.length && data.adaptive){
																function resize(){
																	if (self['resize'+iframe.id]) return;
																	self['resize'+iframe.id] = true;
																	setTimeout(function(){
																		self.left = 0;
																		self.right = window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth || 0;
																		self.top = 0;
																		self.bottom = window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight || 0;
																		gw = b.clientWidth-10 || 0;
																		data.gw = gw;
																		var html_old = html;
																		html = self._createContentAdaptive(data, p) || '';
																		if (html_old != html){
																			//iframe.style.setProperty( 'visibility',  'hidden', 'important' );
																			//iframe.style.setProperty( 'height',  0, 'important' );
																			iLoad();
																		};
																		self['resize'+iframe.id] = false;												
																	}, 1000);
																}
																setTimeout(function(){
																	(iframe.contentWindow || iframe).onresize = resize;
																}, 500);
															};
															
															if (data.text_img == 'slider' && !sliderInitialized) {
																sliderInitialized = true;
																window.MG_Gallery = function ( obj ) {
																	var _obj = obj,
																	_parent = _obj.parentElement,
																	_swiper,
																	_btnPrev = _obj.parentElement.querySelector('.swiper-button-prev'),
																	_btnNext = _obj.parentElement.querySelector('.swiper-button-next'),
																	_swiperContainer = _obj.querySelector('.swiper-container');
																	
																	var _addEvents = function(){
																		_parent.addEventListener('mousemove', function(a) {
																			var offsetLeft = 0;
																			var iterator = _obj;
																			while (iterator) { 
																				offsetLeft += iterator.offsetLeft; 
																				iterator = iterator.offsetParent;
																			}
																			var b = a.pageX - offsetLeft;

																			if (b < _obj.clientWidth / 2) {
																				_obj.classList.add('MG_Gallery_left-btn');
																				_obj.classList.remove('MG_Gallery_right-btn')
																			} else {
																				_obj.classList.add('MG_Gallery_right-btn');
																				_obj.classList.remove('MG_Gallery_left-btn')
																			}
																		});
																		_parent.addEventListener('mouseleave', function() {
																			_obj.classList.remove('MG_Gallery_left-btn');
																			_obj.classList.remove('MG_Gallery_right-btn')
																		});
																	},

																	_initSwiper = function(){
																		var slides = _swiperContainer.querySelectorAll('.swiper-slide');

																		var slideWidth = slides[0].offsetWidth + 
																			parseInt(window.getComputedStyle(slides[0]).marginRight) +
																			parseInt(window.getComputedStyle(slides[0]).marginLeft);
																		
																		var slideLength = slides.length;
																		var slidesPerScroll =
																			document.clientWidth <= 460  ? 1 :
																			document.clientWidth <= 1023 ? 2 : 3;
																		var slidesVisible = Math.floor(_swiperContainer.clientWidth / slideWidth);
																		var lenta = _swiperContainer.querySelector('.swiper-wrapper-lenta');
																		lenta.parentNode.parentNode.style.height = lenta.clientHeight + 'px';
																		
																		var maxValue = slideWidth * (slides.length + 0.2) - _swiperContainer.clientWidth;

																		if (maxValue < 0)
																			maxValue = 0;
																		var scrolling = false;
																		var curXPos;

																		_btnPrev.classList.add('swiper-button-disabled');
																		
																		_btnNext.addEventListener('click', function() {
																			if (scrolling)  return false;
																			
																			var left = parseInt(lenta.style.left || 0);
																			var newValue = left - slidesPerScroll * slideWidth;
																			if (newValue < -maxValue) {
																				newValue = -maxValue;
																				_btnNext.classList.add('swiper-button-disabled');
																			} else {
																				_btnNext.classList.remove('swiper-button-disabled');
																			}
																			var step = Math.round((newValue - left) / 25);
																			
																			if (!step)
																				return false;

																			_btnPrev.classList.remove('swiper-button-disabled');
																			scrolling = true;
																			var interval = setInterval(function() {
																				left += step;
																				if (Math.abs(left - newValue) < Math.abs(step)) {
																					left = newValue;
																					clearInterval(interval);
																					scrolling = false;
																				}
																				lenta.style.left = left + 'px';
																			}, 16)
																			
																		});
																		_btnPrev.addEventListener('click', function() {
																			if (scrolling)  return false;
																		   
																			var left = parseInt(lenta.style.left || 0);
																			var newValue = left + slidesPerScroll * slideWidth;
																			if (newValue >= 0) {
																				newValue = 0;
																				_btnPrev.classList.add('swiper-button-disabled');
																			} else {
																				_btnPrev.classList.remove('swiper-button-disabled');
																			}
																			var step = Math.round((newValue - left) / 25);

																			if (!step)
																				return false;

																			_btnNext.classList.remove('swiper-button-disabled');
																			scrolling = true;
																			var interval = setInterval(function() {
																				left += step;
																				if (Math.abs(left - newValue) < Math.abs(step)) {
																					left = newValue;
																					clearInterval(interval);
																					scrolling = false;
																				}
																				lenta.style.left = left + 'px';
																			}, 16)
																		});
																	},

																	_init = function () {
																		_initSwiper();
																		_addEvents();
																	};
																		
																	_init();
																};


																new window.MG_Gallery( idocument.querySelector('.MG_Gallery') );
															}
															if (data.text_img != 'slider') {
																clearInterval(renderTimer);
															}
														}else if (renderCounter > 20){
															clearInterval(renderTimer);
														};
													}, 500);
												};
												
												if (data.rtb_banner || (!data.arr.length && data.adv)){
													render();
												}else{													
													var gnezdo_img = idocument.querySelectorAll(".gnezdo_img");
													if (!data.native && gnezdo_img.length){
														if (self._imgLoaded(gnezdo_img[gnezdo_img.length-1])){
															render();
														}else{
															gnezdo_img[gnezdo_img.length-1].addEventListener("load", function(event) {
																render();
															});
														}

														if (data.gradient) {
															gnezdo_img.forEach(function(img) {
																var oldCallback = img.onload;
																img.onload = function() {
																	if (oldCallback)
																		oldCallback();
																	var height = ~~(this.height * .3);
																	
																	var rgb = {r:255,g:255,b:255};
																	if (img.parentNode.parentNode.getAttribute('rtb') == '0') rgb = getAverageRGB(this, idocument);
																	
																	var color = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b +',1)',
																	font_collor = 'black',
																	partner_collor = '#444',
																	light = false;
																	if (1 - (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b)/255 < 0.5){
																	}else{
																		light = true;
																		font_collor = 'white';
																		partner_collor = '#cfcfcf';
																	};
																	var tizer = img.parentNode;

																	var titles = tizer.querySelectorAll('.mctitle span');
																	// title.style.backgroundColor = color;
																	titles.forEach(function(title) {
																		title.style.color = font_collor;
																		var titleContainer = title.parentNode;
																		var pureRGB = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b +')';
																		titleContainer.style.cssText = 'padding-top: ' + height + 'px; background: linear-gradient(to top, '
																		 + pureRGB + ' 0%, ' + pureRGB + ' ' + ~~(title.clientHeight*.9)+'px, transparent 100%);';
																	});
																};
															});																
														} else if (data.stickyGradient) {
															gnezdo_img.forEach(function(img) {
																var oldCallback = img.onload;
																img.onload = function() {
																	if (oldCallback)
																		oldCallback();
																	
																	var rgb = getAverageRGB(this, idocument);
																	if (data.stickyGradient == 3) {
																		img.parentNode.innerHTML += '<div style="background: linear-gradient(to right, transparent, rgb('+rgb.r+','+rgb.g+', '+rgb.b+'));"></div>';
																		idocument.querySelector('.gnezdo_main_block').style.background = 'rgb('+rgb.r+','+rgb.g+', '+rgb.b+')';
																	} else if (data.stickyGradient == 1) {
																		idocument.querySelector('.gnezdo_main_block').style.background = 'rgb('+rgb.r+','+rgb.g+', '+rgb.b+')';
																	}

																	var light = false;
																	if (1 - (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b)/255 < 0.5){
																	}else{
																		light = true;
																	};

																	idocument.querySelector('.gnezdo_block_inner a').style.color = light ? '#000' : '#fff';


																};
															});
														}
													};
												};
											};
											
											data.rv_domain = (data.rv_domain && "string" == typeof data.rv_domain) ? data.rv_domain : self.base_domain;
											data.rv_domain = data.rv_domain.search(/^http/i) != -1 || data.rv_domain.search(/^\/\//i) != -1 ? data.rv_domain : "//"+data.rv_domain;
											o = o || {
												iframe: iframe,
												start: new Date(), 
												rv_proc: self['rv_proc'+p.containerId], 
												block_in: false, 
												tizerId: p.tizerId, 
												containerId: p.containerId, 
												uid: data.uid,
												rv_domain: data.rv_domain,
												ref_param: data.ref_param,
												image_domain: data.image_domain,
												teasers_in: {},
												is_loaded: 0,
												native: data.native?1:0,
												header_bidding: data.header_bidding?1:0,
												
												visible: false, 
												invisible: false, 
												change_content_processing: false,
												visible_start: 0,
												visible_timer: 60,
												invisible_start: 0,
												invisible_timer: 120,
												invisible_duration: 0,
												change_content_delay: 3000,
											};												
											o.teasers = [];
											
											var imgs = idocument.querySelectorAll('*[aid]');
											for (var i=0;i<imgs.length;i++){
												var img_b = imgs[i].getAttribute('aid');
												if (img_b && imgs[i].parentNode){
													o.teasers.push({
														id : img_b, 
														elem: imgs[i].closest(".gnezdo_block"), 
														teaser_in: o.teasers_in[img_b]?true:false, 
														teaser_in_cnt: 0,
														gnezdo_href: (imgs[i].getAttribute('gnezdo_href') || imgs[i].parentNode.getAttribute('gnezdo_href') || imgs[i].parentNode.parentNode.getAttribute('gnezdo_href'))?true:false
													});
													
													if (o.teasers_in[img_b]){
														var links = o.teasers[o.teasers.length - 1].elem.getElementsByTagName('a');
														var attr = o.teasers[o.teasers.length - 1].gnezdo_href?'gnezdo_href':'href';															
														for(var j=0; j<links.length; j++){
															if (links[j].getAttribute(attr) && links[j].getAttribute(attr) != 'javascript:void(0)'){
																links[j].setAttribute(attr, links[j].getAttribute(attr)+'&vp='+o.teasers_in[img_b]);
															}
														}
													}
													
													if (data.arr.length) {
														for (var j = 0; j < data.arr.length; j++){
															var an = data.arr[j];
															if (an.id == img_b){
																if (an.track_view_real){
																	o.teasers[o.teasers.length - 1].track_view_real = an.track_view_real;
																}
																break;
															}
														}
													};
												};
											};
											
											if (data.arr.length && p.ids_black_list) {
												for (var j = 0; j < data.arr.length; j++){
													self.ids = self.ids+','+data.arr[j].id;
												}
											}
											
											o.cnt = o.teasers.length;
											o.invisible_cnt = o.teasers.length-Object.keys(o.teasers_in).length;
											
											//console.log(o.teasers, o.cnt, o.invisible_cnt);

											if (!o.is_loaded){
												o.is_loaded = 1;
												iAfterLoad(p, o);
											};
										};
										
										function iAfterLoad(p, o){								
											
											self['scroll_check_block'+o.iframe.id] = function(){
												self._check_block(o);
											}
											
											if (p.amp){
												self['intersection_'+o.iframe.id] = {};
												
												window.parent.postMessage({
													sentinel: 'amp',
													type: 'send-intersections'
												}, '*');
												if (window.parent !== window.top){
													window.top.postMessage({
														sentinel: 'amp',
														type: 'send-intersections'
													}, '*');
												}
												
												function ampListener(event) {																
													if ((event.source != window.parent && event.source != window.top) || event.origin == window.location.origin || !event.data || event.data.sentinel != 'amp' || event.data.type != 'intersection') return;
													
													event.data.changes.forEach(function (change) {
														if (change.boundingClientRect && change.rootBounds) self['intersection_'+o.iframe.id] = change;
													});
												}
												
												if (window.addEventListener) {
													window.addEventListener("message", ampListener, false);
												} else if (window.attachEvent) {
													window.attachEvent("onmessage", ampListener);
												}
											}else if (self._inIframe()){
												self['intersection_'+o.iframe.id] = {};
												window.parent.postMessage({
													sentinel: 'gnezdo',
													type: 'send-intersections'
												}, '*');
												if (window.parent !== window.top){
													window.top.postMessage({
														sentinel: 'gnezdo',
														type: 'send-intersections'
													}, '*');
												}
												
												function gnezdoListener(event) {
													if ((event.source != window.parent && event.source != window.top) || !event.data || event.data.sentinel != 'gnezdo' || event.data.type != 'intersection') return;
													
													self['intersection_'+o.iframe.id] = event.data.change;
												}
												
												if (window.addEventListener) {
													window.addEventListener("message", gnezdoListener, false);
												} else if (window.attachEvent) {
													window.attachEvent("onmessage", gnezdoListener);
												}
											};
											
											setTimeout(function(){
												if (self._get_proc(o, o.iframe) >= 10){
													o.block_in = true;
													self._check_teasers(o);
												}else{
													if (self._inIframe()){
														self['scroll_check_block'+o.iframe.id] = setInterval(function(){self._check_block(o)}, 2000);
													}else{
														if (window.addEventListener){
															window.addEventListener("scroll", self['scroll_check_block'+o.iframe.id]);
														}else if (window.attachEvent){ 
															window.attachEvent("onscroll", self['scroll_check_block'+o.iframe.id]);
														}else{
															self['scroll_check_block'+o.iframe.id] = setInterval(function(){self._check_block(o)}, 2000);
														};
													}
												};
											},1000);
											
											//data.ch_c = 1;
											if (data.ch_c && data.arr.length) {
												self['reload_'+p.containerId] = 1;
												check_visibility();
											}
											
											if (!self.event_tracker){
												self['event_tracker'] = function(e){
													self.window_active = true;
													if (!self.event_tracker[e.type]){
														self.event_tracker[e.type] = 1;
														
														self._track({
															event: e.type,
															time: new Date().getTime()-o.start.getTime()
														});
														
														if(window.removeEventListener){
															window.removeEventListener(e.type, self['event_tracker'], {once:true});
														}else if (window.detachEvent) {
															window.detachEvent(e.type, self['event_tracker']);
														}
													};
												}
												
												if (window.addEventListener){
													window.addEventListener("scroll", self['event_tracker'], {once:true});
													window.addEventListener("mousemove", self['event_tracker'], {once:true});
													window.addEventListener("beforeunload", self['event_tracker'], {once:true});
													window.addEventListener("click", self['event_tracker'], {once:true});
													window.addEventListener("touchmove", self['event_tracker'], {once:true});
													
													window.addEventListener("blur", function(){
														self.window_active = false;
													}, false);
													window.addEventListener("focus", function(){
														self.window_active = true;
													}, false);
													
												}else if (window.attachEvent){ 
													window.attachEvent("onscroll", self['event_tracker']);
													window.attachEvent("onmousemove", self['event_tracker']);
													window.attachEvent("onbeforeunload", self['event_tracker']);
													window.attachEvent("onclick", self['event_tracker']);
													window.attachEvent("ontouchmove", self['event_tracker']);
													
													window.attachEvent("onblur", function(){
														self.window_active = false;
													});
													window.attachEvent("onfocus", function(){
														self.window_active = true;
													});
												};
											};
											
											// cookie matching (DMP)
											if (o && o.uid){
												new Image().src = "//x01.aidata.io/0.gif?pid=6915083&id="+o.uid;
												new Image().src = "https://sync.1dmp.io/pixel.gif?cid=4619280f-7aee-412b-991e-5007b05519a2&brid=1b89b071-72bc-4c19-b96c-2ee973304856&pid=w&uid="+o.uid;
											}
											// cookie matching (openRTB)
											if (o && o.uid && data.rtb_cm_list){
												data.rtb_cm_list.forEach(function(cm_url){
													new Image().src = cm_url+o.uid;
												});									
											}
											
											return o;
										};
										
										function check_visibility(){
											if (!o.change_content_processing){
												var proc = self._get_proc(o, o.iframe);
												
												if(!o.visible){
													if(o.invisible){
														if(proc>0 && o.invisible_start && self.window_active){
															o.invisible_duration = Math.round((new Date() - o.invisible_start) / 1000);
															o.invisible_start = 0;
														};
														if(proc==0 && !o.invisible_start){
															o.invisible_start = new Date();
														};
													};
													if(proc>=50 && self.window_active){
														o.visible = true;
														
														if(!o.visible_start){
															o.visible_start = new Date();
														};
														
														if(o.invisible && o.invisible_duration >=o.invisible_timer){
															o.invisible = false;
															o.change_content_processing = true;
															o.invisible_duration = 0;
															o.invisible_start = 0;
															
															setTimeout(function(){
																self._fade(self.fade_time, 'out', iframe);
															}, o.change_content_delay-self.fade_time);
															
															setTimeout(function(){
																/*
																data = JSON.parse(JSON.stringify(data_origin));
																var j, temp;
																for(var i = data.arr.length - 1; i > 0; i--){
																	j = Math.floor(Math.random()*(i + 1));
																	temp = data.arr[j];
																	data.arr[j] = data.arr[i];
																	data.arr[i] = temp;
																}
																
																if (data.arr.length){
																	if (data.native){
																		html = self._createContentNative(data, p) || '';
																	}else if (data.text_img == 'slider') {
																		html = self._createContentSlider(data, p) || '';
																	}else if (data.adaptive){
																		html = self._createContentAdaptive(data, p) || '';
																	}else if (data.custom){
																		html = self._createContentCustom(data, p) || '';
																	}else{
																		html = self._createContent(data, p) || '';
																	}
																}
																iLoad();
																self._fade(self.fade_time, 'in', iframe);
																o.visible_start = new Date();
																o.change_content_processing = false;
																*/
																p.ids = Object.keys(o.teasers_in).join();
																p.ch_c = 1;
																b.style.setProperty( 'height',  iframe.style.height, 'important' );
																self.create(p);
															}, o.change_content_delay);
														};
													};
												}else{
													if(proc==0 || !self.window_active){
														o.visible = false;
														o.invisible = true;
														o.visible_start = 0;
														
														if(!o.invisible_start){
															o.invisible_start = new Date();
														};
													}else if (o.visible_start && (Math.round((new Date() - o.visible_start) / 1000)>=o.visible_timer)){
														o.change_content_processing = true;

														setTimeout(function(){
															self._fade(self.fade_time, 'out', iframe);
														}, o.change_content_delay-self.fade_time);
														
														setTimeout(function(){
															/*
															data = JSON.parse(JSON.stringify(data_origin));
															var j, temp;
															for(var i = data.arr.length - 1; i > 0; i--){
																j = Math.floor(Math.random()*(i + 1));
																temp = data.arr[j];
																data.arr[j] = data.arr[i];
																data.arr[i] = temp;
															}
															
															if (data.arr.length){
																if (data.native){
																	html = self._createContentNative(data, p) || '';
																}else if (data.text_img == 'slider') {
																	html = self._createContentSlider(data, p) || '';
																}else if (data.adaptive){
																	html = self._createContentAdaptive(data, p) || '';
																}else if (data.custom){
																	html = self._createContentCustom(data, p) || '';
																}else{
																	html = self._createContent(data, p) || '';
																}
															}
															iLoad();
															self._fade(self.fade_time, 'in', iframe);
															o.visible_start = new Date();
															o.change_content_processing = false;
															*/			
															p.ids = Object.keys(o.teasers_in).join();
															p.ch_c = 1;
															b.style.setProperty( 'height',  iframe.style.height, 'important' );
															self.create(p);
														}, o.change_content_delay);
														
													};
												};
											};
											//console.log('check_visibility');
											setTimeout(function(){check_visibility()}, 2000);
										}
										
										iframe.onload = iLoad;
										b.appendChild(iframe);
										self._track({
											tizerId: p.tizerId
										});
										
									}
								}
							}else{
								//console.log("Incorrect parameter tizerId");
								b.classList.remove("gnezdo_used");
								return false;
							}
						}else{
							//console.log("Block with id '"+p.containerId+"' not found");
							return false;
						}
					}else{
						//console.log("Incorrect parameter containerId");
						return false;
					};
				}else{
					//console.log("Incorrect input parameters");
					return false;
				};
			},
			_fade: function(fade_time, type, elem) {
				var isIn = type === 'in',
				opacity = isIn ? 0 : 1,
				interval = 50,
				gap = interval / fade_time;
				window.clearInterval(elem.fading);
				
				function func() {
					opacity = isIn ? opacity + gap : opacity - gap;
					elem.style.opacity = opacity;
					if(opacity <= 0 || opacity >= 1) window.clearInterval(elem.fading);
				};

				elem.fading = window.setInterval(func, interval);
			},
			_inIframe: function() {
				try {
					return window.self !== window.top;
				} catch (e) {
					return true;
				}
			},
			_getCookie: function(name) {
				var matches = document.cookie.match(new RegExp(
				"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
			  ));
			  return matches ? decodeURIComponent(matches[1]) : undefined;
			},
			_imgLoaded: function(img) {
			  return img.complete && img.naturalHeight !== 0;
			},
			_getParameterByName: function(name, url) {
				if (!url) url = window.location.href;
				name = name.replace(/[\[\]]/g, '\\$&');
				var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
				if (!results) return null;
				if (!results[2]) return '';
				return decodeURIComponent(results[2].replace(/\+/g, ' '));
			},
			_track: function(o){
				var self = this;
				if (!o.js) o.js = '';
				if (!o.event) o.event = '';
				if (!o.time) o.time = '';
				if (!o.tizerId) o.tizerId = '';
				new Image().src = self.base_domain+"/e/?dr="+escape(document.referrer)+"&du="+escape(document.URL)+(o.js?"&js="+o.js:'')+(o.event?"&e="+o.event:'')+(o.time?"&t="+o.time:'')+(o.tizerId?"&tizer_id="+o.tizerId:'')+"&r="+Math.random();
			},
			_repeat_video: function(o, video, anons_id){
				var self = this, rect = self._get_rect(o, o.iframe);
				video.classList.remove('play');
				
				if (self._get_proc(o, video, rect, true) >= o.rv_proc && anons_id) new Image().src = o.rv_domain+"/cgi-bin/video.fcgi?tizer_id="+o.tizerId+"&anons_id="+anons_id+"&mode=end&uid="+o.uid+"&r="+Math.random();
				
				var wrap = video.parentNode;
				if (!wrap.querySelectorAll('img.repeat_video').length){
					var repeat_video = document.createElement('img');
					repeat_video.classList.add('repeat_video');
					repeat_video.src = o.image_domain+'/src/repeat_video.png';
					repeat_video.style.cssText = "width: 20%;position: absolute;left: 40%;outline: none;top: 0;bottom: 0;margin: auto;z-index:3";
					repeat_video.onclick = function(){
						video.muted = false;
						video.play();
						video.classList.add('play');
						repeat_video.remove();
						return false;
					};
					wrap.appendChild(repeat_video);
				}
			},
			_get_proc: function(o, elem, rect, in_iframe){
				var self = this;
				if (!rect){
					if (self['intersection_'+o.iframe.id]){
						rect = self['intersection_'+o.iframe.id].rootBounds;
					}else{
						rect = this;
					}
				}
				var s = elem.offsetWidth*elem.offsetHeight; 
				if (!s || !rect) return 0;
				
				try {br = elem.getBoundingClientRect();} catch (i) {}
				if (!br || (navigator.userAgent.toLowerCase().indexOf("opera mini") > -1)) return s > 0 ? 100 : 0; 
				
				var top = br.top, bottom = br.bottom, left = br.left, right = br.right;
				if (self['intersection_'+o.iframe.id] && !in_iframe){
					top += self['intersection_'+o.iframe.id].boundingClientRect.top;
					bottom += self['intersection_'+o.iframe.id].boundingClientRect.top;
					left += self['intersection_'+o.iframe.id].boundingClientRect.left;
					right += self['intersection_'+o.iframe.id].boundingClientRect.left;
				};
				var proc = 0;
				if (right > rect.left && left < rect.right && bottom > rect.top && top < rect.bottom){
					var sv = ((bottom>rect.bottom?rect.bottom:bottom) - (top>rect.top?top:rect.top))*((right>rect.right?rect.right:right) - (left>rect.left?left:rect.left));
					proc = Math.round(sv/s*100);
				};
				
				return proc;
			},
			_get_rect: function(o, elem){
				var self = parent_elem = this, rect = {};
				if (self['intersection_'+o.iframe.id]){
					parent_elem = self['intersection_'+o.iframe.id].rootBounds;
				}
				
				try {var br = elem.getBoundingClientRect()}catch (i){};
				if (br && (navigator.userAgent.toLowerCase().indexOf("opera mini") < 0)){
					var top = br.top, bottom = br.bottom, left = br.left, right = br.right;
					if (self['intersection_'+o.iframe.id]){
						top += self['intersection_'+o.iframe.id].boundingClientRect.top;
						bottom += self['intersection_'+o.iframe.id].boundingClientRect.top;
						left += self['intersection_'+o.iframe.id].boundingClientRect.left;
						right += self['intersection_'+o.iframe.id].boundingClientRect.left;
					};
					if (right>parent_elem.left && left<parent_elem.right && bottom>parent_elem.top && top<parent_elem.bottom){
						rect.top = top>=parent_elem.top ? 0 : (-1)*top;
						rect.bottom = bottom<=parent_elem.bottom ? elem.offsetHeight : elem.offsetHeight-bottom+parent_elem.bottom;
						rect.left = left>=parent_elem.left ? 0 : (-1)*left;
						rect.right = right<=parent_elem.right ? elem.offsetWidth : elem.offsetWidth-right+parent_elem.right;
					};
				};		

				return rect;
			},
			_check_teasers: function(o){
				var self = this, for_send = [], rv_tizer_id = 0, rect = {};
				
				var proc = self._get_proc(o, o.iframe);				
				if (proc >= 10){
					rect = self._get_rect(o, o.iframe);					
					for (var i=0; i<o.cnt; i++){
						if (!o.teasers[i].teaser_in){	
							if (self._get_proc(o, o.teasers[i].elem, rect, true) >= o.rv_proc){
								o.teasers[i].teaser_in_cnt++;
								if (o.teasers[i].teaser_in_cnt >= (o.native?2:1)){		
									var video = o.teasers[i].elem.getElementsByTagName('video');
									var video_id = o.teasers[i].id;
									if (video.length){
										if (!video[0].classList.contains('play')){
											video[0].play();
											video[0].classList.add('play');
											if (window.addEventListener){
												video[0].addEventListener("ended", function(){
													self._repeat_video(o, this, video_id);
												});
											}else if (window.attachEvent){
												video[0].attachEvent("onended", function(){
													self._repeat_video(o, this, video_id);
												});
											}else{
												video[0].onended = function(){
													self._repeat_video(o, this, video_id);
												}; 
											};
										}
									};
									var aid = o.teasers[i].id; 
									var sec = 1+Math.round((new Date() - o.start) / 1000);
									var links = o.teasers[i].elem.querySelectorAll('a:not(.secondary_link), div.rtb_banner');
									var attr = o.teasers[i].gnezdo_href?'gnezdo_href':'href';
									if (links.length){									
										if (links[0].getAttribute('rtb') && links[0].getAttribute('rtb') != '0') aid  = 'rtb' + links[0].getAttribute('rtb') + '==';
										var res = links[0].getAttribute(attr).match(/tag_id\=(\d+)[^\d]/);
										if (res) aid  = aid + 't' + res[1];										
										var res2 = links[0].getAttribute(attr).match(/fc\=([^\&]+)/);
										if (res2) aid  = aid + 'fc.' + res2[1];
									}
									for_send.push(aid);
									for(var j=0; j<links.length; j++){
										if (links[j].getAttribute(attr) && links[j].getAttribute(attr) != 'javascript:void(0)'){
											links[j].setAttribute(attr, links[j].getAttribute(attr)+'&vp='+sec);
										}
									}
									o.teasers[i].teaser_in = true;
									o.teasers_in[o.teasers[i].id] = sec;
									o.invisible_cnt--;
									if (o.teasers[i].track_view_real){
										o.teasers[i].track_view_real.forEach(function(url){
											new Image().src = url;
										});
									}
								}
							};
						};
					};
					
					rv_tizer_id = (for_send.length/o.teasers.length).toFixed(2);
					
					if (for_send.length>0 && !o.header_bidding) new Image().src = o.rv_domain+"/cgi-bin/rv.fcgi?tizer_id="+o.tizerId+"&rv_tizer_id="+rv_tizer_id+"&anons_ids="+for_send.join(",")+o.ref_param+"&uid="+o.uid+"&r="+Math.random();
				}
				
				if (o.invisible_cnt > 0){
					setTimeout(function(){self._check_teasers(o)}, 1000);
				}else{ 
					if (self._inIframe()){
						clearInterval(self['scroll_check_block'+o.iframe.id]);
					}else{
						if (window.removeEventListener){
							window.removeEventListener("scroll", self['scroll_check_block'+o.iframe.id]);
						}else if (window.detachEvent) {
							window.detachEvent("onscroll", self['scroll_check_block'+o.iframe.id]);
						}else{
							clearInterval(self['scroll_check_block'+o.iframe.id]);
						}
					}
				}
			},
			_check_block: function(o){
				var self = this;
				
				if (self['waiting'+o.iframe.id]) return;
				self['waiting'+o.iframe.id] = true;
				
				if (!o.block_in && self._get_proc(o, o.iframe) >= 10){
					o.block_in = true;
					setTimeout(function(){self._check_teasers(o)}, 0);
				};
				
				setTimeout(function(){self['waiting'+o.iframe.id] = false}, 100);
			},
			_hideIframe: function(id){
				var self = this;
				if (id && "string" == typeof id){
					self['reload_'+id] = 0;
					document.getElementById('gc_'+id).style.display = "none";
				}
			},			
			_gnezdoClickCheck: function(e, t){
				var self = this;
				e = e || window.event;
				var code = e.keyCode || e.which;
				if (code == 1){
					if (t && t.getAttribute('gnezdo_href')){
						var img = document.createElement('img');
						img.src = t.getAttribute('gnezdo_href')+'&px=1';
					}
					t.onmousedown = '';
				}
				return true;
			},
			_createContent: function(data, p){
				if (p.css) data.css = p.css;
				var html = "<style>html,body{margin:0;padding:0;}"+(data.css?data.css:"")+"</style>", partner = '', sticky = '';
				
				if (data.sticky){
					data.stickyGradient = data.css.match(/sticky-(\d+)/)[1];
					data.css = data.css.replace(/.*@import/, '@import');
					
					html = "<style>"+(data.css?data.css:"")+"html,body{margin:0;padding:0;}</style>";
					sticky += '<div class="sticky" onclick="parent.gnezdo._hideIframe(\''+p.containerId+'\');"><img src="//news.gnezdo.ru/img/x.svg" alt="" /></div><div style="clear: both"></div>';
				} else if (data.pt){
					partner = data.pl?'<div onmouseover="this.style.marginRight=\'0\';this.style.transform=\'translateX(0)\';" onmouseout="this.style.marginRight=\'24px\';this.style.transform=\'translateX(100%)\';" style="margin: 0 24px 0 0; transition: 0.7s; transform: translateX(100%);"><a rel="nofollow noreferrer" style="text-decoration:none; margin: 0; padding: 0; font: medium normal;" target="_blank" href="'+data.pl+'"><img loading="eager" style="height: 20px; vertical-align:middle; background: none; width: auto; display: block;" src="https://news.gnezdo.ru/src/gnezdo_logo.png"></a></div>':'<a rel="nofollow noreferrer">'+data.pt+'</a>';
					partner = '<div class="partner_link_bottom_wrap" style="position: absolute; right: 0; left: auto; top:0; bottom: auto; overflow: hidden; z-index:10; font: normal medium normal;">'+partner+'</div>';
				}

				html += sticky+'<div class="gnezdo_main_block"><div class="gnezdo_header"><a rel="nofollow noreferrer" target="_blank" style="text-decoration:none;" href="https://www.gnezdo.ru/?news_id='+p.tizerId+'">'+(data.header_text?data.header_text:'')+'</a></div>'+partner+'<table '+(data.direction == 'table'?'class="gnezdo_table"':'border="0" cellpadding="0" cellspacing="0" width="100%"')+'>'+(data.direction == 'vertical'?'':'<tr>');
				
				var colls = data.cnt;
				if (data.direction == 'table' && data.table_rows) colls = data.table_rows;
				if (!colls) colls = 1;
				var w = 100/colls;
				var img_xy = data.image_size?data.image_size.split('x',2):['auto','auto'];

				for (i = 0; i < data.arr.length; i++){
					var an = data.arr[i];
					if (an.img.toString().substring(0,4)!='http' && an.img.toString().substring(0,2)!='//') an.img = data.image_domain+'/img/'+data.image_size+'/'+an.img;
					if (an.gnezdo_url) {
						an.gnezdo_url += data.ref_param;
					}else{
						an.url += data.ref_param;
					};
					an.cell_class = 'gnezdo_block gnezdo_cell';
					an.price_block = '';
					if (an.is_good){
						an.cell_class += ' gnezdo_good';
						if (an.price){
							an.price_block = '<div class="gnezdo_cell_price">';
							if (an.discount) an.price_block += '<div class="gnezdo_cell_discount"><a rel="nofollow noreferrer" href="'+an.url+'" target=_blank> -'+an.discount+'%</a></div><div class="gnezdo_cell_oldprice"><a rel="nofollow noreferrer" href="'+an.url+'" target=_blank>'+an.oldprice+'<font class="gnezdo_rub">'+an.currency+'</font></a></div>';
							an.price_block += '<a rel="nofollow noreferrer" href="'+an.url+'" target=_blank>'+an.price+'<font class="gnezdo_rub">'+an.currency+'</font></a></div>';
						}
					}
					if (an.favicon_image){
						an.favicon_image = '<div class="gnezdo_cell_favicon" style="display: inline-block; padding-right: 5px;"><a rel="nofollow noreferrer" href="'+an.url+'" target=_blank><img loading="eager" border="0" src="'+data.image_domain+'/img/original/'+an.favicon_image+'" style="width: auto; vertical-align: middle;"></a></div>';
					}else{
						an.favicon_image = '';
					};		
					
					if (!an.text) an.text = '';
					an.html = '<div class="'+an.cell_class+'"><div class="gnezdo_div_img"><a rel="nofollow noreferrer" rtb="'+(an.rtb?an.rtb:0)+'" href="'+an.url+'"'+(an.gnezdo_url?' gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')+(an.advice ? '':' target="_blank"')+'><img loading="eager" ' + (data.sticky ? ' crossorigin="anonymous" ' : '' ) +' border="0" aid="'+an.id+'" src="'+an.img+'" class="gnezdo_img" width="'+img_xy[0]+'" height="'+img_xy[1]+'" alt="'+an.title+'"></a></div><div class="gnezdo_cell_header"><a rel="nofollow noreferrer" rtb="'+(an.rtb?an.rtb:0)+'" href="'+an.url+'" '+(an.gnezdo_url?' gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')+(an.advice ? '':' target="_blank"')+'>'+an.title+'</a></div>'+(data.show_anons?'<div class="gnezdo_cell_anons"><a rel="nofollow noreferrer" rtb="'+(an.rtb?an.rtb:0)+'" href="'+an.url+'" '+(an.gnezdo_url?' gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')+(an.advice ? '':' target="_blank"')+'>'+an.text+'</a></div>':'')+an.price_block+(data.show_partner?'<div class="gnezdo_cell_partner">'+(data.show_favicon?an.favicon_image:'')+an.site+'</div>':'')+(data.readmore_text?'<div class="gnezdo_readmore"><a rel="nofollow noreferrer" rtb="'+(an.rtb?an.rtb:0)+'" href="'+an.url+'" '+(an.gnezdo_url?' gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')+(an.advice ? '':' target="_blank"')+'>'+data.readmore_text+'</a></div>':'')+'</div>';
					
					if (data.direction == 'vertical'){
						html +='<tr><td>'+an.html+'</td></tr>';
					}else{
						html +='<td width="'+w+'%" class="gnezdo_td">'+an.html+'</td>';
						if ((i+1)%colls == 0) html +='</tr><tr>';
					}
				};

				html += (data.direction == 'vertical'?'':'</tr>')+'</table></div>';
				return html;
			},
			_createContentCustom: function(data, p){
				if (p.css) data.css = p.css;
				var html = "<style>html,body{margin:0;padding:0;}"+(data.css?data.css:"")+"</style>", partner = '', sticky = '';
				
				if (data.sticky){
					data.stickyGradient = data.css.match(/sticky-(\d+)/)[1];
					data.css = data.css.replace(/.*@import/, '@import');

					html = "<style>"+(data.css?data.css:"")+"html,body{margin:0;padding:0;}</style>"
					sticky += '<div class="sticky" onclick="parent.gnezdo._hideIframe(\''+p.containerId+'\');"><img src="//news.gnezdo.ru/img/x.svg" alt="" /></div><div style="clear: both"></div>';
				} else if (data.pt){
					partner = data.pl?'<div onmouseover="this.style.marginRight=\'0\';this.style.transform=\'translateX(0)\';" onmouseout="this.style.marginRight=\'24px\';this.style.transform=\'translateX(100%)\';" style="margin: 0 24px 0 0; transition: 0.7s; transform: translateX(100%);"><a rel="nofollow noreferrer" style="text-decoration:none; margin: 0; padding: 0; font: medium normal;" target="_blank" href="'+data.pl+'"><img   ' + (data.sticky ? ' crossorigin="anonymous" ' : '' ) +' loading="eager" style="height: 20px; vertical-align:middle; background: none; width: auto; display: block;" src="https://news.gnezdo.ru/src/gnezdo_logo.png"></a></div>':'<a rel="nofollow noreferrer">'+data.pt+'</a>';
					partner = '<div class="partner_link_bottom_wrap" style="position: absolute; right: 0; left: auto; top:0; bottom: auto; overflow: hidden; z-index:10; font: normal medium normal;">'+partner+'</div>';
				}

				html += sticky+'<div class="gnezdo_main_block"><div class="gnezdo_block_container"><div class="gnezdo_header"><a rel="nofollow noreferrer" target="_blank" style="text-decoration:none;" href="https://www.gnezdo.ru/?news_id='+p.tizerId+'">'+(data.header_text?data.header_text:'')+'</a></div>'+partner;
				
				var img_xy = data.image_size?data.image_size.split('x',2):[0,0];
				var k_xy = img_xy[0] && img_xy[1] ? img_xy[0]/img_xy[1] : 0;
				
				for (i = 0; i < data.arr.length; i++){
					var an = data.arr[i];
					if (an.img.toString().substring(0,4)!='http' && an.img.toString().substring(0,2)!='//') an.img = data.image_domain+'/img/'+data.image_size+'/'+an.img;
					if (an.gnezdo_url) {
						an.gnezdo_url += data.ref_param;
					}else{
						an.url += data.ref_param;
					};
					an.cell_class = 'gnezdo_block gnezdo_block'+i;
					an.price_block = '';
					if (an.is_good){
						an.cell_class += ' gnezdo_good';
						if (an.price){
							an.price_block = '<div class="gnezdo_cell_price">';
							if (an.discount) an.price_block += '<div class="gnezdo_cell_discount">-'+an.discount+'%</div><div class="gnezdo_cell_oldprice">'+an.oldprice+'<font class="gnezdo_rub">'+an.currency+'</font></div>';
							an.price_block += an.price+'<font class="gnezdo_rub">'+an.currency+'</font></div>';
						}
					}
					if (an.favicon_image){
						an.favicon_image = '<div class="gnezdo_cell_favicon" style="display: inline-block; padding-right: 5px;"><img loading="eager" border="0" src="'+data.image_domain+'/img/original/'+an.favicon_image+'" style="width: auto; vertical-align: middle;"></div>';
					}else{
						an.favicon_image = '';
					};
					
					if (!an.text) an.text = '';
					html += '<div class="'+an.cell_class+'"><div class="gnezdo_block_inner"><a rel="nofollow noreferrer" rtb="'+(an.rtb?an.rtb:0)+'" href="'+an.url+'" '+(an.gnezdo_url?' gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')+(an.advice ? '':' target="_blank"')+'><div class="gnezdo_block_img_wrap"><img '+(an.rtb&&k_xy?'onload="this.parentElement.style.overflow=\'hidden\';this.parentElement.style.maxHeight = this.width/'+k_xy+'"':'')+(data.sticky ? ' crossorigin="anonymous" ' : '' )+' loading="eager" aid="'+an.id+'" src="'+an.img+'" class="gnezdo_img" alt="'+an.title+'"></div><div class="gnezdo_block_desc"><div class="gnezdo_block_desc_bg"></div><div class="gnezdo_block_desc_text">'+an.title+'</div>'+(data.show_anons?'<div class="gnezdo_block_desc_longtext">'+an.text+'</div>':'')+an.price_block+(data.show_partner?'<div class="gnezdo_block_partner">'+(data.show_favicon?an.favicon_image:'')+an.site+'</div>':'')+(data.readmore_text?'<div class="gnezdo_readmore">'+data.readmore_text+'</div>':'')+'</div></a></div></div>';
				}
				
				html += '</div></div>';
				return html;
			},
			_createContentAdaptive: function(data, p){
				if (p.css) data.css = p.css;
				var html = "<style>html,body{margin:0;padding:0;}.gnezdo_cont{"+((data.direction == 'vertical')?"display: block;":"display: inline-block;")+"}.gnezdo_cont_desc{position: absolute; bottom: 3%; left: 50%; -webkit-transform: translateX(-50%); transform: translateX(-50%); max-height: 25%; width: 90%; overflow: hidden; text-align: justify; background: #f9f9f9; border-radius: 10px; padding: 2%; color: black; box-shadow: 1px 1px 5px rgba(0,0,0,0.5); //font-size: 1.5vw;}</style>", partner = '', sticky = '';
				
				if (data.sticky){
					data.stickyGradient = data.css.match(/sticky-(\d+)/)[1];
					data.css = data.css.replace(/.*@import/, '@import');
					html = "<style>" + (data.css ? data.css : "") + "html,body {padding:0; margin:0}</style>";
					sticky += '<div class="sticky" onclick="parent.gnezdo._hideIframe(\''+p.containerId+'\');"><img src="//news.gnezdo.ru/img/x.svg" alt="" /></div><div style="clear: both"></div>';
				} else if (data.pt){
					partner = data.pl?'<div onmouseover="this.style.marginRight=\'0\';this.style.transform=\'translateX(0)\';" onmouseout="this.style.marginRight=\'24px\';this.style.transform=\'translateX(100%)\';" style="margin: 0 24px 0 0; transition: 0.7s; transform: translateX(100%);"><a rel="nofollow noreferrer" style="text-decoration:none; margin: 0; padding: 0; font: medium normal;" target="_blank" href="'+data.pl+'"><img  ' + (data.sticky ? ' crossorigin="anonymous" ' : '' ) +' loading="eager" style="height: 20px; vertical-align:middle; background: none; width: auto; display: block;" src="https://news.gnezdo.ru/src/gnezdo_logo.png"></a></div>':'<a rel="nofollow noreferrer">'+data.pt+'</a>';
					partner = '<div class="partner_link_bottom_wrap" style="position: absolute; right: 0; left: auto; top:0; bottom: auto; overflow: hidden; z-index:10; font: normal medium normal;">'+partner+'</div>';
				}

				html += sticky+'<div class="gnezdo_main_block"><div class="gnezdo_block_container"><div class="gnezdo_header"><a rel="nofollow noreferrer" target="_blank" style="text-decoration:none;" href="https://www.gnezdo.ru/?news_id='+p.tizerId+'">'+(data.header_text?data.header_text:'')+'</a></div>'+partner;
				
				var rows = 1;
				var cols = 1;
				var cnt = data.cnt;
				var width = '100%';
				
				var width_px = data.image_size?data.image_size.split('x',2)[0]:0;
				if (width_px && data.direction != 'vertical'){
					cols = Math.round(data.gw/width_px);
					if (cols > data.cnt) cols = data.cnt;
					if (!cols) cols = 1;					
					width = (100/cols-1+1/cols)+'%';
				}	
				cnt = cols*rows;
				var show_price = show_anons = show_partner = show_readmore = 1;
				var font_size = 1.5;
				if (width_px){
					if (data.gw/cols/width_px<0.6){
						show_price = show_anons = show_partner = show_readmore = 0;
					}else if (data.gw/cols/width_px<0.7){
						show_price = show_partner = show_readmore = 0;
					}else if (data.gw/cols/width_px<0.8){
						show_price = show_readmore = 0;
					}else if (data.gw/cols/width_px<0.9){
						show_readmore = 0;
					};
					
				};
				
				//console.log(data.gw, data.gw/cols/width_px, rows+'x'+cols, cnt, width); //delete
					
				for (i = 0; i < data.arr.length; i++){
					var an = data.arr[i], url = an.url+data.ref_param, cell_class = 'gnezdo_block gnezdo_cont gnezdo_cont'+i, img = an.img, price_block = '';
					if (img.toString().substring(0,4)!='http' && an.img.toString().substring(0,2)!='//') img = data.image_domain+'/img/'+data.image_size+'/'+img;
					price_block = '';
					if (an.is_good && show_price){
						cell_class += ' gnezdo_good';
						if (an.price){
							price_block = '<div class="gnezdo_cell_price">';
							if (an.discount) price_block += '<div class="gnezdo_cell_discount">-'+an.discount+'%</div><div class="gnezdo_cell_oldprice">'+an.oldprice+'<font class="gnezdo_rub">'+an.currency+'</font></div>';
							price_block += an.price+'<font class="gnezdo_rub">'+an.currency+'</font></div>';
						}
					}
					if (an.favicon_image){
						an.favicon_image = '<div class="gnezdo_cell_favicon" style="display: inline-block; padding-right: 5px;"><img loading="eager" border="0" src="'+data.image_domain+'/img/original/'+an.favicon_image+'" style="width: auto; vertical-align: middle;"></div>';
					}else{
						an.favicon_image = '';
					};
					
					if (!an.text) an.text = '';
					
					html += '<div class="'+cell_class+'" style="width: '+width+'; margin-right:'+(((i+1)%cols == 0)?0:1)+'%; '+(i>=cnt?"display:none;":"")+'"><div class="gnezdo_cont_inner" style="position: relative;"><a rel="nofollow noreferrer" href="'+url+'" target="_blank"><div class="gnezdo_cont_img_wrap"><img  ' + (data.sticky ? ' crossorigin="anonymous" ' : '' ) +' loading="eager" style="width: 100%;" aid="'+an.id+'" src="'+img+'" class="gnezdo_img" alt="'+an.title+'"></div><div class="gnezdo_cont_desc"><div class="gnezdo_cont_desc_text">'+an.title+'</div>'+((show_anons && data.show_anons)?'<div class="gnezdo_cont_desc_longtext">'+an.text+'</div>':'')+price_block+((show_partner && data.show_partner)?'<div class="gnezdo_cont_partner">'+(data.show_favicon?an.favicon_image:'')+an.site+'</div>':'')+((show_readmore&& data.readmore_text)?'<div class="gnezdo_readmore">'+data.readmore_text+'</div>':'')+'</div></a></div></div>';
				}

				html += '</div></div>';
				return html;
			},
			_createContentSlider: function(data, p) {
				if (p.css) data.css = p.css;
				var html = "<style>.swiper-slide-lenta {margin-right:16px; margin-bottom:2px;max-width:35%;} #gnezdoComposite { width: 100%;max-width: 700px; margin: 0 auto; height: auto; overflow: visible; } #gnezdoComposite .mgbox{height:auto;line-height:100%;margin:0 auto;position:relative;overflow:hidden;vertical-align:top;text-align:center;padding:0;border-style:solid;border-width:0}#gnezdoComposite .mgline{float:left;display:block;padding:0;opacity:1;background-color:#fff;border:none;border-radius:4px;overflow:hidden;transition:box-shadow;transition-duration:.8s;transition-property:box-shadow}#gnezdoComposite .mgoc{padding:10px 10px 10px 0;background:#fff;margin-bottom:20px;margin-top:20px}#gnezdoComposite .mgoc .swiper-container-lenta{margin:0 auto;position:relative;overflow-y:hidden;overflow-x:scroll;z-index:1}#gnezdoComposite .mgoc .swiper-wrapper-lenta{position:relative;width:100%;z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}#gnezdoComposite .mgoc .swiper-container-android .swiper-slide-lenta,#gnezdoComposite .mgoc .swiper-wrapper-lenta{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-o-transform:translate(0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}#gnezdoComposite .mgoc .mg-swiper-button-next,#gnezdoComposite .mgoc .mg-swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;-moz-background-size:27px 44px;-webkit-background-size:27px 44px;background-size:27px 44px;background-position:center;background-repeat:no-repeat}#gnezdoComposite .mgoc .mg-swiper-button-next.swiper-button-disabled,#gnezdoComposite .mgoc .mg-swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}#gnezdoComposite .mgoc .mg-swiper-button-prev,#gnezdoComposite .mgoc .swiper-container-rtl .mg-swiper-button-next{background-image:url(\"data:image\/svg+xml;charset=utf-8,<svg xmlns='http:\/\/www.w3.org\/2000\/svg' viewBox='0 0 27 44'><path d='M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z' fill='%23007aff'\/><\/svg>\");left:10px;right:auto}#gnezdoComposite .mgoc .mg-swiper-button-next,#gnezdoComposite .mgoc .swiper-container-rtl .mg-swiper-button-prev{background-image:url(\"data:image\/svg+xml;charset=utf-8,<svg xmlns='http:\/\/www.w3.org\/2000\/svg' viewBox='0 0 27 44'><path d='M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z' fill='%23007aff'\/><\/svg>\");right:10px;left:auto}#gnezdoComposite .mgoc .swiper-slide-lenta{margin-top:10px;float:left;-webkit-flex-shrink:0;-ms-flex-SR:0;flex-shrink:0;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform,-webkit-transform;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}#gnezdoComposite .mgoc .mg-swiper-button-next,#gnezdoComposite .mgoc .mg-swiper-button-prev{position:absolute;top:45%;width:42px;height:68px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;margin-top:-27px;z-index:10;text-indent:-9999px;overflow:hidden;cursor:pointer}#gnezdoComposite .mgoc .mg-swiper-button-next{background:url(\"data:image\/svg+xml,<svg width='12' height='18' xmlns='http:\/\/www.w3.org\/2000\/svg'><path d='M12 9L0 18V0z' fill='%23000' fill-rule='evenodd'\/><\/svg>\") 45% 50% no-repeat #fff;transition:right .5s ease;right:-50px}#gnezdoComposite .mgoc .mg-swiper-button-prev{background:url(\"data:image\/svg+xml,<svg width='12' height='18' xmlns='http:\/\/www.w3.org\/2000\/svg'><path d='M12 9L0 18V0z' fill='%23000' fill-rule='evenodd'\/><\/svg>\") 45% 50% no-repeat #fff;transition:left .5s ease;left:-50px;-webkit-transform:translateX(-50%) translateY(-50%) scaleX(-1);transform:translateX(-50%) translateY(0) scaleX(-1)}#gnezdoComposite .mgoc .mg-swiper-button-next.swiper-button-disabled,#gnezdoComposite .mgoc .mg-swiper-button-prev.swiper-button-disabled{opacity:0}#gnezdoComposite .mgoc .MG_Gallery_left-btn .mg-swiper-button-prev{left:35px}#gnezdoComposite .mgoc .MG_Gallery_right-btn .mg-swiper-button-next{right:15px}#gnezdoComposite .mgoc .mcimg a:before{content:'';position:absolute;left:0;right:0;bottom:0;top:0;background:transparent linear-gradient(to bottom,transparent 0,rgba(0,0,0,.1) 50%,rgba(0,0,0,.7) 100%) repeat scroll 0 0;z-index:1}#gnezdoComposite .mglogo{width:100%;text-align:left;margin-bottom:10px}#gnezdoComposite .mgline .image-with-text{display:block;width:100%;min-height:1px;margin:0 auto;position:relative}#gnezdoComposite div.mcimg{display:block!important}#gnezdoComposite img.mcimg{display:block;width:100%; height:auto}#gnezdoComposite .mctitle{margin:0;text-align:left;line-height:101px;display:block;position:absolute;left:0;right:0;bottom:0;z-index:2}#gnezdoComposite .mctitle span{color:#fff;font-family:Montserrat,Arial,Helvetica,sans-serif!important;text-decoration:none;font-style:normal!important;font-weight:700!important;font-size:11pt;text-align:left;line-height:12pt;padding:0 12px 12px 12px;display:table-cell;vertical-align:bottom;width:170px}#gnezdoComposite .mgline:hover{box-shadow:0 0 6px 0 rgba(0,0,0,.2),0 4px 22px 0 #000}#gnezdoComposite .mglogo{width:100%;position:relative;text-align:left}#gnezdoComposite div.mcimg{position:relative;display:inline-block}#gnezdoComposite .mgline .image-container{width:auto;margin:0 auto;position:relative}#gnezdoComposite .mglogo a{border:none;color:#7c758c!important;font:400 20px\/28px 'IBM Plex Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';text-decoration:none} " + data.css + '</style>';

				data.css += "body { font-family:Roboto Condensed, sans-serif; } .mcimg > a { text-decoration: none; color: #000; } #gnezdoComposite .mgoc .mg-swiper-button-next,#gnezdoComposite .mgoc .mg-swiper-button-prev{display: none;} #gnezdoComposite .mgoc .MG_Gallery_right-btn .mg-swiper-button-next,#gnezdoComposite .mgoc .MG_Gallery_left-btn .mg-swiper-button-prev{display: block;}.swiper-button-disabled { display: none } #gnezdoComposite .mgoc .mg-swiper-button-next,#gnezdoComposite .mgoc .mg-swiper-button-prev{position:absolute;top:50%;width:27px;height:44px; margin-top:-22px; z-index:10;cursor:pointer; background-size:27px 44px; background-position:center; background-repeat:no-repeat; border-radius: 5px;} #gnezdoComposite .mgoc .mg-swiper-button-next.swiper-button-disabled,#gnezdoComposite .mgoc .mg-swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none} #gnezdoComposite .mgoc .mg-swiper-button-prev,#gnezdoComposite .mgoc .swiper-container-rtl .mg-swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'><path d='M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z' fill='%23007aff'/></svg>\");left:10px;right:auto} #gnezdoComposite .mgoc .mg-swiper-button-next,#gnezdoComposite .mgoc .swiper-container-rtl .mg-swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'><path d='M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z' fill='%23007aff'/></svg>\"); right:10px;left:auto}";

				if (data.css.match(/\.custom-design/))
					html = '<style>@import url("//fonts.googleapis.com/css?family=Roboto+Condensed"); #gnezdoComposite .mgbox{height:auto;line-height:100%;margin:0 auto;position:relative;overflow:hidden;vertical-align:top;text-align:center;padding:0;border-style:solid;border-width:0} .swiper-container-lenta{margin:0 auto;position:relative;overflow-y:hidden;overflow-x:scroll;z-index:1} ' + data.css + '</style>';

				if (data.css.match(/custom-design-gradient/))
					data.gradient = 1;
				html += '<div class="gnezdo_main_block"><div class="gnezdo_block_container"><div id="gnezdoComposite" style=""><div class="mgoc"><div class="mglogo"> <a href="https://www.gnezdo.ru/?news_id=' + p.tizerId + '" target="_blank" ="nofollow noreferrer">'+(data.header_text||'')+'</a> </div><div class="mgbox MG_Gallery"><div class="swiper-container swiper-container-lenta swiper-container-horizontal"><div class="swiper-wrapper swiper-wrapper-lenta">';
				
				var img_xy = data.image_size?data.image_size.split('x',2):[0,0];
				
				html += data.arr.map(function(an) {
					if (an.img.toString().substring(0,4)!='http' && an.img.toString().substring(0,2)!='//')
						an.img = data.image_domain+'/img/'+data.image_size+'/'+an.img;
					
					//if (an.rtb) data.gradient = 0;
					if (an.gnezdo_url) {
						an.gnezdo_url += data.ref_param;
					}else{
						an.url += data.ref_param;
					};
					
					if (an.favicon_image){
						an.favicon_image = '<div class="gnezdo_favicon" style="display: inline-block; padding-right: 5px;"><img loading="eager" border="0" src="'+data.image_domain+'/img/original/'+an.favicon_image+'" style="width: auto; vertical-align: middle;"></div>';
					}else{
						an.favicon_image = '';
					};
					
					if (!an.text) an.text = '';

					return '<div class="gnezdo_block swiper-slide swiper-slide-lenta"> \
						<div class="mgline teaser- type-e"> \
						 <div class="image-with-text"> \
						 <div class="mcimg"> \
						 <a rel="nofollow noreferrer" rtb="'+(an.rtb?an.rtb:0)+'" href="'+an.url+'" '+(an.gnezdo_url?' gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')+(an.advice ? '':' target="_blank"')+'> \
						 <div class="image-container"><img '+((an.rtb && img_xy[0] && img_xy[1])?' style="object-fit: cover;" ':'')+' loading="eager"' + ((data.gradient && !an.rtb) ? ' crossorigin="anonymous"' : '') + ' class="mcimg gnezdo_img" aid="'+an.id+'" src="'+an.img+'?1" /> <div class="mctitle"><span class="gnezdo_text">'+an.title+'</span>'+(data.show_anons?'<span class="gnezdo_longtext">'+an.text+'</span>':'')+(data.show_partner?'<span class="gnezdo_partner">'+(data.show_favicon?an.favicon_image:'')+an.site+'</span>':'')+'</div></div> </a> </div> </div></div>  </div>';
				}).join('');

				html += '</div></div><div class="mg-swiper-button-next swiper-button-next"></div><div class="mg-swiper-button-prev swiper-button-prev"></div></div></div></div></div></div>';

				return html;
			},
			_createContentNative: function(data, p){
				var html = '';
				html += '<link rel="preload" href="https://news.gnezdo.ru/src/fonts/ieVl2ZhZI2eCN5jzbjEETS9weq8-19a7DRs5.woff2" as="font" type="font/woff2" crossorigin>';
				html += '<link rel="preload" href="https://news.gnezdo.ru/src/fonts/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2" as="font" type="font/woff2" crossorigin>';
				html += '<link rel="preload" href="https://news.gnezdo.ru/src/fonts/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCAYb8td.woff2" as="font" type="font/woff2" crossorigin>';
				html += '<link rel="preload" href="https://news.gnezdo.ru/src/fonts/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCQYbw.woff2" as="font" type="font/woff2" crossorigin>';
				html += '<link rel="prefetch" href="https://news.gnezdo.ru/loader_native_redraw.css" as="style" type="text/css">';
				html += '<style>@font-face { font-family: "Roboto Condensed"; font-style: normal; font-weight: 400; font-display: swap; src: url(https://news.gnezdo.ru/src/fonts/ieVl2ZhZI2eCN5jzbjEETS9weq8-19a7DRs5.woff2) format("woff2"); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; } @font-face { font-family: "Roboto Condensed"; font-style: normal; font-weight: 400; font-display: swap; src: url(https://news.gnezdo.ru/src/fonts/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2) format("woff2"); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; } @font-face { font-family: "Roboto Condensed"; font-style: normal; font-weight: 700; font-display: swap; src: url(https://news.gnezdo.ru/src/fonts/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCAYb8td.woff2) format("woff2"); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; } @font-face { font-family: "Roboto Condensed"; font-style: normal; font-weight: 700; font-display: swap; src: url(https://news.gnezdo.ru/src/fonts/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCQYbw.woff2) format("woff2"); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }</style>';
				html += '<link href="https://news.gnezdo.ru/loader_native_redraw.css" rel="stylesheet" type="text/css">';
				html += '<div id="gnezdo_ru_native" style="'+(data.native_box?'display:block;':'display:flex;')+'" data-grid="'+data.native+'" data-native_box="'+(data.native_box?1:0)+'" data-native_vertical="'+(data.vertical?1:0)+'" class="'+(data.vertical?'vertical':'')+'">';

				//data.native_modal = 1;
				
				for (i = 0; i < data.arr.length; i++){
					var an = data.arr[i];
					
					var click_zone = {};
					if (an.native_click_zone){
						an.native_click_zone.split(',').forEach(function (item) {
							click_zone[item] = 1;
						});
					}else{
						click_zone = {img:1, text:1, btn:1}
					}
					
					if (an.img.toString().substring(0,4)!='http' && an.img.toString().substring(0,2)!='//') an.img = data.image_domain+'/img/'+data.image_size+'/'+an.img;
					var image_video = '<img loading="eager" class="gz_block_img__main" aid="'+an.id+'" src="' + an.img + '" />';
					if (an.video){
						if (an.video.toString().substring(0,4)!='http' && an.video.toString().substring(0,2)!='//') an.video = data.image_domain+an.video;
						image_video = '<video class="video js-gz_block_video" playsinline onmouseover="checkMute(this, false);" onmouseout="checkMute(this, true);" muted poster="' + an.img + '"><source aid="'+an.id+'" src="' + an.video + '" type="video/mp4"></video>';
					};
					image_video += '<img class="gz_block_img__blur" src="' + an.img + '" />';
					
					an.logo_image = an.logo_image?data.image_domain+'/img/anons_logo/'+an.logo_image:'';
					an.bg_image = an.bg_image?data.image_domain+'/img/anons_bg/'+an.bg_image:'';
					
					if (!an.title) an.title = '';
					if (!an.text) an.text = '';
					if (!an.text_multi) an.text_multi = '';
					if (!an.disclaimer_add_size) an.disclaimer_add_size = 0;
					if (!an.title && !an.text && an.video) an.full_video = 1;
					
					var price_block = '';
					if (an.price){
						price_block = '<div class="gz_block_price">';
						if (an.discount){
							price_block += '<span class="discount" style="color:' + an.title_color + ';">-' + an.discount + '%</span> | <span class="price">' + an.price + ' ' + an.currency + '</span> <span class="old_price">' + an.old_price + ' ' + an.currency + '</span>';
						}else{
							price_block += '<span class="price">' + an.price + ' ' + an.currency + '</span>';
						}
						price_block += '</div>';
					}
					
					if (an.gnezdo_url) {
						an.gnezdo_url += data.ref_param;
					}else{
						an.url += data.ref_param;
					};
					
					an.url_img = an.url;
					an.url_text = an.url;
					an.url_btn = an.url;
					if (an.url.match(/\[ELEM\]/gi)){
						an.url_img = an.url_img.replace(/\[ELEM\]/gi, 'img');
						an.url_text = an.url_text.replace(/\[ELEM\]/gi, 'text');
						an.url_btn = an.url_btn.replace(/\[ELEM\]/gi, 'btn');
					}
					
					if (data.native_box){
						var width_s = 100;
						if (data.native_box && !data.vertical) width_s = width_s/(an.multis.length+1);
						
						an.html = 	
						'<div class="gnezdo_block" style="' + (an.bg_image?'background: url(' + an.bg_image + ') center center / 100%;':'') + '">' +
						'	<div class="text" ' + ((an.logo_image || an.text_multi)?'':'style="display:none;"') + '>' +
						'		<img class="gnezdo_block_desc_logo" loading="eager" ' + (an.logo_image?'src="' + an.logo_image + '"':'style="display:none;"') + '><br/><span>' + an.text_multi + '</span>' +
						'	</div>' +
						'	<a class="secondary_link gz_block_link_ext" style="top:1px;right:1px;" rel="nofollow noreferrer" target="_blank" href="' + data.pl + '"><span></span></a>' +
						'	<div style="position: relative;">' +
						'		<div class="arrow left" onclick=\'scrollSlider("left")\'></div>' +
						'		<div id="slider" class="slider">' +
						'			<div id="slider_container" class="slider_container" ' + (an.height?'style="max-height: '+an.height+'px"':'') + '>' +
						'				<div class="slide" style="width:' + width_s + '%">' +
						'					<div data-width="" data-height="" class="gz_block gz_block_size_l">' +
						'						<div class="gz_block_img">'+						
						'							<a class="link primary_link ' + (click_zone.img?'':'nopointer') + '" rel="nofollow noreferrer" ' + (click_zone.img?((data.native_modal?'onclick="show_modal(this);"':'') + ' href="' + an.url_img + '" target="_blank"'+(an.gnezdo_url?' gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')):'href="javascript:void(0)"' + (an.gnezdo_url?' gnezdo_href="javascript:void(0)"':'')) + '>' + image_video + '</a>' +	
						'						</div>' +
						'						<div class="gz_block_content">' +
						'							<a class="link primary_link ' + (click_zone.text?'':'nopointer') + '" rel="nofollow noreferrer" ' + (click_zone.text?((data.native_modal?'onclick="show_modal(this);"':'') + ' href="' + an.url_text + '" target="_blank"'+(an.gnezdo_url?' gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')):'href="javascript:void(0)"' + (an.gnezdo_url?' gnezdo_href="javascript:void(0)"':''))+'>' +	
						'								<div class="gz_block_title" style="color:' + an.title_color + ';">' + an.title + '</div>' +
						'								<div class="gz_block_text" style="color:' + an.small_text_color + ';">' + an.text + '</div>' + price_block +
						'							</a>' +	
						'							<a class="gz_block_btn primary_link ' + (click_zone.btn?'':'nopointer') + '" rel="nofollow noreferrer" ' + (click_zone.btn?((data.native_modal?'onclick="show_modal(this);"':'') + ' href="' + an.url_btn + '" target="_blank"'+(an.gnezdo_url?' gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')):'href="javascript:void(0)"' + (an.gnezdo_url?' gnezdo_href="javascript:void(0)"':''))+' style="' + (an.read_more_text?('background-color: ' + an.read_more_color + ';'):'display:none;') + '">' + an.read_more_text + '</a>' +
						'						</div>' +
						'					</div>' +
						'				</div>';
						
						for (j = 0; j < an.multis.length; j++){
							var m = an.multis[j];
							if (m.image.toString().substring(0,4)!='http' && m.image.toString().substring(0,2)!='//') m.image = data.image_domain+'/img/'+data.image_size+'/'+m.image;
							var m_image_video = '<img loading="eager" class="gz_block_img__main" src="' + m.image + '">';
							if (m.video){
								if (m.video.toString().substring(0,4)!='http' && m.video.toString().substring(0,2)!='//') m.video = data.image_domain+m.video;
								m_image_video = '<video class="video js-gz_block_video" playsinline onmouseover="checkMute(this, false);" onmouseout="checkMute(this, true);" muted poster="' + m.image + '"><source src="' + m.video + '" type="video/mp4"></video>';
							};
							m_image_video += '<img class="gz_block_img__blur" src="' + m.image + '" />';
							
							var m_price_block = '';
							if (m.price){
								m_price_block = '<div class="gz_block_price" >';
								if (m.discount){
									m_price_block += '<span class="discount" style="color:' + an.title_color + ';">-' + m.discount + '%</span> | <span class="price">' + m.price + ' ' + an.currency + '</span> <span class="old_price">' + m.old_price + ' ' + an.currency + '</span>';
								}else{
									m_price_block += '<span class="price">' + m.price + ' ' + an.currency + '</span>';
								}
								m_price_block += '</div>';
							}
							
							if (m.gnezdo_url) {
								m.gnezdo_url += data.ref_param;
							}else{
								m.url += data.ref_param;
							};
							
							m.url_img = m.url;
							m.url_text = m.url;
							m.url_btn = m.url;
							if (m.url.match(/\[ELEM\]/gi)){
								m.url_img = m.url_img.replace(/\[ELEM\]/gi, 'img');
								m.url_text = m.url_text.replace(/\[ELEM\]/gi, 'text');
								m.url_btn = m.url_btn.replace(/\[ELEM\]/gi, 'btn');
							}
							
							an.html += 
							'				<div class="slide" style="width:' + width_s + '%">' +
							'					<div data-width="" data-height="" class="gz_block gz_block_size_l">' +
							'						<div class="gz_block_img">'+						
							'							<a class="link primary_link ' + (click_zone.img?'':'nopointer') + '" rel="nofollow noreferrer" ' + (click_zone.img?((data.native_modal?'onclick="show_modal(this);"':'') + ' href="' + m.url_img + '"'+(m.gnezdo_url?' gnezdo_href="'+m.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')+' target="_blank"'):'href="javascript:void(0)"') + '>' + m_image_video + '</a>' +	
							'						</div>' +
							'						<div class="gz_block_content">' +
							'							<a class="link primary_link ' + (click_zone.text?'':'nopointer') + '" rel="nofollow noreferrer" ' + (click_zone.text?((data.native_modal?'onclick="show_modal(this);"':'') + ' href="' + m.url_text + '"'+(m.gnezdo_url?' gnezdo_href="'+m.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')+' target="_blank"'):'href="javascript:void(0)"') + '>' +	
							'								<div class="gz_block_title" style="color:' + an.title_color + ';">' + m.title + '</div>' +
							'								<div class="gz_block_text" style="color:' + an.small_text_color + ';">' + m.text + '</div>' + m_price_block +
							'							</a>' +	
							'							<a class="gz_block_btn primary_link ' + (click_zone.btn?'':'nopointer') + '" rel="nofollow noreferrer" ' + (click_zone.btn?((data.native_modal?'onclick="show_modal(this);"':'') + ' href="' + m.url_btn + '"'+(m.gnezdo_url?' gnezdo_href="'+m.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')+' target="_blank"'):'href="javascript:void(0)"') + ' style="' + (an.read_more_text?('background-color: ' + an.read_more_color + ';'):'display:none;') + '">' + an.read_more_text + '</a>' +
							'						</div>' +
							'					</div>' +
							'				</div>';
						}

						an.html += 
						'			</div>' +
						'		</div>' +
						'		<div class="arrow right" onclick=\'scrollSlider("right")\'></div>' +
						'	</div>' +
						'	<div class="gz_block_disclaimer" style="' + ((an.disclaimer || an.disclaimer_add)?'top:auto;left:50%;transform: translate(-50%, 0%);border:1px solid #d5d4d4;outline:none;bottom:1px;':'display:none;') + '">' + 
						'		<span class="main" style="' + (an.disclaimer?'':'display:none;') + '">' + an.disclaimer + '</span>' +
						'		<span class="add" style="' + (an.disclaimer_add?'':'display:none;') + ' font-size: ' + an.disclaimer_add_size + 'px;">' +
						'			' + an.disclaimer_add + 
						'		</span>' +
						'	</div>' +
						'	<div class="modal">' +
						'		<div class="modal_center">' +
						'			<span class="modal_close" onclick="close_modal(this)">&times;</span>' +
						'			<span>Вы человек?</span><br/>' +
						'			<div class="modal_button">' +
						'				<a onclick="close_modal(this)" class="modal_link yes" rel="nofollow noreferrer" target="_blank">Да</a>' +
						'				<a onclick="close_modal(this)" class="modal_link no secondary_link">Нет</a>' +
						'			</div>' +
						'		</div>' +
						'	</div>' +
						'</div>';
					}else{
						an.html = 	
							'<div data-width="" data-height="" class="gnezdo_block gz_block gz_block_size_l '+(an.full_video?'full_video':'')+'" style="' + (an.bg_image?'background: url(' + an.bg_image + ') center center / 100%;':'') + '">' +
							'	<div class="gz_block_img">'+						
							'		<a class="link primary_link ' + (click_zone.img?'':'nopointer') + '" rel="nofollow noreferrer" ' + (click_zone.img?((data.native_modal?'onclick="show_modal(this);"':'') + ' href="' + an.url_img + '" target="_blank"'+(an.gnezdo_url?' gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')):'href="javascript:void(0)"' + (an.gnezdo_url?' gnezdo_href="javascript:void(0)"':'')) + '>' + image_video + '</a>' +	
							'	</div>' +
							'	<div class="gz_block_content">' +
							'		<a class="link primary_link ' + (click_zone.text?'':'nopointer') + '" rel="nofollow noreferrer" ' + (click_zone.text?((data.native_modal?'onclick="show_modal(this);"':'') + ' href="' + an.url_text + '" target="_blank"'+(an.gnezdo_url?' gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')):'href="javascript:void(0)"' + (an.gnezdo_url?' gnezdo_href="javascript:void(0)"':'')) + '>' +	
							'			<div class="gz_block_favicon" ' + (an.logo_image?'':'style="display:none;"') + '>' +
							'				<img loading="eager" class="gnezdo_block_desc_logo"' + (an.logo_image?'src="' + an.logo_image + '"':'style="display:none;"') + ' />' +
							'			</div>' +
							'			<div class="gz_block_title" style="color:' + an.title_color + ';">' + an.title + '</div>' +
							'			<div class="gz_block_text" style="color:' + an.small_text_color + ';">' + an.text + '</div>' +
							'		</a>' +	
							'		<a class="gz_block_btn primary_link ' + (click_zone.btn?'':'nopointer') + '" rel="nofollow noreferrer" ' + (click_zone.btn?((data.native_modal?'onclick="show_modal(this);"':'') + '  href="' + an.url_btn + '" target="_blank"'+(an.gnezdo_url?' gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);"':'')):'href="javascript:void(0)"' + (an.gnezdo_url?' gnezdo_href="javascript:void(0)"':'')) + ' style="' + (an.read_more_text?('background-color: ' + an.read_more_color + ';'):'display:none;') + '">' + an.read_more_text + '</a>' +
							'		<a class="secondary_link gz_block_link_ext" rel="nofollow noreferrer" target="_blank" href="' + data.pl + '"><span></span></a>' +
							'	</div>' +
							'	<div class="gz_block_disclaimer" style="' + ((an.disclaimer || an.disclaimer_add)?'':'display:none;') + '">' +
							'		<span class="main" style="' + (an.disclaimer?'':'display:none;') + '">' + an.disclaimer + '</span>' +
							'		<span class="add" style="' + (an.disclaimer_add?'':'display:none;') + ' font-size: ' + an.disclaimer_add_size + 'px;">' +
							'			' + an.disclaimer_add + 
							'		</span>' +
							'	</div>' +
							'	<div class="modal">' +
							'		<div class="modal_center">' +
							'			<span class="modal_close" onclick="close_modal(this)">&times;</span>' +
							'			<span>Вы человек?</span><br/>' +
							'			<div class="modal_button">' +
							'				<a onclick="close_modal(this)" class="modal_link yes secondary_link" rel="nofollow noreferrer" target="_blank">Да</a>' +
							'				<a onclick="close_modal(this)" class="modal_link no secondary_link">Нет</a>' +
							'			</div>' +
							'		</div>' +
							'	</div>' +
							'</div>';
						;
					}

					html += an.html;
				};
				html += '</div>';
				html += '<script src="https://news.gnezdo.ru/loader_native_redraw.js"></script>';
				return html;
			},
			_createContentRTBBanner: function(data, p){ 
				var html = '';// '<style>iframe{pointer-events:none;}iframe.gnezdo_active{pointer-events:auto;}</style>';
				for (i = 0; i < data.arr.length; i++){
					var an = data.arr[i];
					//an.html = '<a href="https://qna.habr.com/q/441857" target="_blank"><div class="alien" style="height: 90px;">alien</div></a>';
				
					html += '<div class="gnezdo_main_block"><div class="gnezdo_block_container"><div class="gnezdo_block">'+
						'<div class="rtb_banner" aid="'+an.id+'" rtb="'+(an.rtb?an.rtb:0)+'" gnezdo_href="'+an.gnezdo_url+'" onmousedown="return parent.gnezdo._gnezdoClickCheck(event , this);">'+
							an.html+
						'</div>'+
					'</div></div></div>';
				};
				//html += '<script>document.addEventListener("click", function (e) { console.log(e, e.target)}, false);</script>';
				return html;
			}
		});
	}();
	
	function gnezdoAsyncCallbacksRun(){
		while (window['gnezdoAsyncCallbacks'].length > 0) {
			var fn = window['gnezdoAsyncCallbacks'].shift();
			if (fn && "function" == typeof fn) fn();
		}
	};
	
	window['gnezdoAsyncCallbacks'] = window['gnezdoAsyncCallbacks'] || [];
	gnezdoAsyncCallbacksRun();
	
	!function(){
		window['gnezdoAsyncCallbacks'].push = function(e){
			Array.prototype.push.call(window['gnezdoAsyncCallbacks'], e);
			gnezdoAsyncCallbacksRun();
		};
	}();
}();
