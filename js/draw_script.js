function AdBlocksBuilder(s,r,d){var J;r=r||"ad_target",d=d||"https://delivery.hunterycity.com/";var K,Q,t,Y=!1,a=this,l=!0,c=[],Z=[],g=(t=!1,function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t),$=!!("ontouchstart"in window||navigator.msMaxTouchPoints||window.DocumentTouch&&document instanceof DocumentTouch),h=!0,u="nhunter_delivery_page",p="nhunter_uuid",f="nhunter_uсs",m="nh_sad_",i=14,ee=(d.indexOf("localhost"),{enabled:!0,rowsNumber:1,colsNumber:1,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,teaserWidth:100,teaserPadding:0,disposition:"center",borderSize:"0px",borderType:"solid",borderColor:"#000000",backgroundEnabled:!1,backgroundColor:"#ffffff",backgroundHoverEnabled:!1,backgroundHoverColor:"#ffffff",hoverTransitionEnabled:!1,htmlTemplateCode:"",htmlTemplateEnabled:!1,scrollEnabled:!1,scrollItemsNumber:1,scrollItemsStep:1,scrollControlsColor:"#d5d5d5",borderRadius:0,borderRadiusImageOnly:!1,showDescription:"no-description",textPosition:"under",textBlockSizing:"adaptive",textBlockFixedWidth:null,textBlockFixedHeight:null,textBlockPadding:0,textBlockPaddingImage:0,textBackgroundEnabled:!1,textBackgroundColor:"transparent",textLineHeightSize:0,imageSizing:"adaptive",imageFixedWidth:null,imageFixedHeight:null,imageAdaptiveMinSize:75,imageAdaptiveMaxSize:200,imageAspectRatio:1,imageShadow:!1,imageShadowColor:"#ffffff",imageShadowIntensity:0,textTitleSize:10,textTitleFont:"Arial",textTitleBold:"normal",textTitleColor:"#000000",textTitleAlign:"center",textDescriptionSize:10,textDescriptionFont:"Arial",textDescriptionBold:"normal",textDescriptionColor:"#000000",textDescriptionAlign:"center"});function te(e){return function(){h&&v(m+e.ad.reference,e.ad.reference,i);b(f)||v(f,"uid",1),"function"==typeof a.onHitClick&&a.onHitClick(e)}}function x(e){var t=new XMLHttpRequest;t.open("GET",e.nodes.vissenseImg.getAttribute("data-api"),!0),t.send(),"function"==typeof a.onHitImpression&&a.onHitImpression(e)}function b(e){for(var t=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var o=i[n];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null}function v(e,t,i){var n="";if(i){var o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3),n="; expires="+o.toUTCString()}document.cookie=e+"="+(t||"")+n+"; path=/"}function ie(e,t,i){var r=this;this.rows=[],this.teasers=[],this.identifier=e,this.name=t,this.config=i,this.container=void 0,this.isSliderCreated=!1,this.isBlockLoaded=!1,this.isTeasersLoaded=function(){for(var e=0;e<r.teasers.length;e++)if(!r.teasers[e].isImageLoaded)return!1;return!0},this.handleLoadedEvent=function(){r.isBlockLoaded=!0,r.container.style.visibility="visible",r.createSliders(),"function"==typeof a.onBlockRender&&a.onBlockRender(r)},this.createSliders=function(){if(r.config.scrollEnabled&&Y&&r.isBlockLoaded&&!r.isSliderCreated){r.isSliderCreated=!0;for(var e=0;e<r.rows.length;e++)r.createCarousel(r.rows[e])}},this.createCarousel=function(e){var a,s,t,i,n=tns({container:e,loop:!1,nav:!1,controls:!1,preventScrollOnTouch:"auto",items:r.config.scrollItemsNumber,slideBy:r.config.scrollItemsStep,onInit:function(e){for(var t=0;t<r.teasers.length;t++)!0!==r.config.htmlTemplateEnabled&&r.teasers[t].fixAdTextSize()}}),o=e.closest(".tns-outer");(a=document.createElement("div")).className="nh-tns-control",a.setAttribute("data-control","prev"),a.onclick=function(){n.goTo("prev")},(s=document.createElement("div")).className="nh-tns-control nh-tns-visible",s.setAttribute("data-control","next"),s.onclick=function(){n.goTo("next")},t=document.createElement("div"),i=document.createElement("div"),a.appendChild(t),s.appendChild(i),o.appendChild(a),o.appendChild(s),r.config.scrollControlsColor&&(t.style.borderColor=r.config.scrollControlsColor,i.style.borderColor=r.config.scrollControlsColor,ae(t),ae(i)),n.events.on("transitionEnd",function(e){var t=!1,i=!1,n="nh-tns-control",o="nh-tns-control";0===e.index&&(t=!0),e.index+e.items>=e.slideCount&&(i=!0),t||(n+=" nh-tns-visible"),i||(o+=" nh-tns-visible"),a.className=n,s.className=o})}}function ne(e){this.ad=void 0,this.config=e,this.isImageLoaded=!1,this.nodes={teaserWrapper:void 0,imageInner:void 0,imageImg:void 0,imageShadow:void 0,vissenseImg:void 0,textPadder:void 0};var g=this;this.handleImageLoadedEvent=function(){g.isImageLoaded=!0,g.nodes.imageInner.style.height="auto",ae(g.nodes.imageInner),g.adjustImageSizing(),g.fixAdTextSize(),g.fixShadowSize()},this.isHorizontal=function(){return"right"===g.config.textPosition||"left"===g.config.textPosition},this.isTextBlockFixed=function(){return"fixed"===g.config.textBlockSizing&&(0<g.config.textBlockFixedWidth||0<g.config.textBlockFixedHeight)},this.isImageFixed=function(){return"fixed"===g.config.imageSizing&&(0<g.config.imageFixedWidth||0<g.config.imageFixedHeight)},this.getMinImageWidth=function(){return g.isImageFixed()&&0<g.config.imageFixedWidth?0:g.config.imageAdaptiveMinSize*g.config.imageAspectRatio+"px"},this.getMaxImageWidth=function(){return g.isImageFixed()&&0<g.config.imageFixedWidth?"none":g.config.imageAdaptiveMaxSize*g.config.imageAspectRatio+"px"},this.getMaxImageHeight=function(){return g.isImageFixed()?"none":g.config.imageAdaptiveMaxSize+"px"},this.getMaxTextBlockWidth=function(){return"left"===g.config.textPosition||"right"===g.config.textPosition||g.isTextBlockFixed()&&0<g.config.textBlockFixedWidth?"none":g.config.imageAdaptiveMaxSize*g.config.imageAspectRatio+"px"},this.getImageRadius=function(){return g.config.borderRadiusImageOnly||"inside"===g.config.textPosition?g.config.borderRadius+"px":"right"===g.config.textPosition?g.config.borderRadius+"px 0 0 "+g.config.borderRadius+"px":"left"===g.config.textPosition?"0 "+g.config.borderRadius+"px "+g.config.borderRadius+"px 0":g.config.borderRadius+"px "+g.config.borderRadius+"px 0 0"},this.getTextBlockRadius=function(){return g.config.borderRadiusImageOnly?0:"right"===g.config.textPosition?"0 "+g.config.borderRadius+"px "+g.config.borderRadius+"px 0":"left"===g.config.textPosition?g.config.borderRadius+"px 0 0 "+g.config.borderRadius+"px":"0 0 "+g.config.borderRadius+"px "+g.config.borderRadius+"px"},this.getTextBgColor=function(){return g.config.textBackgroundEnabled?g.config.textBackgroundColor:"transparent"},this.getTextBlockPadding=function(){var e=g.config.textBlockPadding+"px",t=g.config.textBlockPaddingImage+"px";return"left"===g.config.textPosition?[e,t,e,e].join(" "):"right"===g.config.textPosition?[e,e,e,t].join(" "):[t,e,e,e].join(" ")},this.getBoxShadowStyle=function(e){if(!g.config.imageShadow)return"none";var t=g.config.imageShadowIntensity*(4.5*e),i=g.config.imageShadowIntensity*(2*e);return"right"===g.config.textPosition?"inset -"+t+"px 0 "+i+"px -"+i+"px "+g.config.imageShadowColor:"left"===g.config.textPosition?"inset "+t+"px 0 "+i+"px -"+i+"px "+g.config.imageShadowColor:"inset 0 -"+t+"px "+i+"px -"+i+"px "+g.config.imageShadowColor},this.calcImageWidth=function(){var e=parseInt(g.config.imageFixedWidth);return g.isImageFixed()&&0<e?e+"px":this.isHorizontal()?"auto":"100%"},this.calcImageHeight=function(){var e=parseInt(g.config.imageFixedHeight);return g.isImageFixed()&&0<e?e+"px":"auto"},this.calcTextBlockWidth=function(){var e=parseInt(g.config.textBlockFixedWidth);return g.isTextBlockFixed()&&0<e?e+"px":"100%"},this.calcTextBlockHeight=function(){var e=parseInt(g.config.textBlockFixedHeight);return g.isTextBlockFixed()&&0<e?e+"px":"auto"},this.calcTextBlockInnerHeight=function(){var e=parseInt(g.config.textBlockFixedHeight);return g.isTextBlockFixed()&&0<e?"100%":"auto"},this.adjustImageSizing=function(){var e=g.nodes.imageImg,t=e.naturalWidth||e.width,i=e.naturalHeight||e.height,n=g.isImageFixed()&&0<g.config.imageFixedWidth&&0<g.config.imageFixedHeight&&g.config.imageFixedWidth>g.config.imageFixedHeight&&t/i<g.config.imageFixedWidth/g.config.imageFixedHeight,o=!g.isImageFixed()&&t/i<g.config.imageAspectRatio;n||o?(e.style.height="auto",e.style.width="100%"):(e.style.height="100%",e.style.width="auto"),ae(e)},this.fixAdTextSize=function(){var e=parseInt(g.config.textTitleSize),t=e+6,i=parseInt(g.config.textDescriptionSize),n=i+6,o=Math.max(0,g.nodes.textPadder.offsetWidth-g.config.imageAdaptiveMinSize),a=e+.04*o,s=i+.03*o;if(a=a<t?a:t,s=s<n?s:n,0===g.config.textLineHeightSize){var r=a+4;g.nodes.textPadder.style.lineHeight=r+"px",ae(g.nodes.textPadder)}var d=g.nodes.textPadder.getElementsByTagName("a")[0];d.style.fontSize=a+"px";var l=g.nodes.textPadder.getElementsByTagName("div")[0];l.style.fontSize=s+"px";var c=g.nodes.textPadder.getElementsByTagName("span")[0];c.style.height=s/2+"px",ae(d),ae(l),ae(c)},this.fixShadowSize=function(){if(g.config.imageShadow&&!(g.isImageFixed()&&0<g.config.imageFixedWidth)&&("inside"===g.config.textPosition||"under"===g.config.textPosition)){var e=g.nodes.imageShadow,t=g.nodes.imageInner.offsetWidth/(g.config.imageAdaptiveMaxSize*g.config.imageAspectRatio);e.style.boxShadow=g.getBoxShadowStyle(t),ae(e)}},this.setInitialImageHeight=function(){var e=g.nodes.imageInner,t=g.isImageFixed()?100:100/g.config.imageAspectRatio,i=e.offsetWidth*(t/100);e.style.height=i+"px",ae(e)}}function oe(e){var t=document.createElement(e);return Z.push(t),t}function ae(e){var t=[],i=e.getAttribute("style");if(i){for(var n=i.split(";"),o=0;o<n.length;o++)n[o]&&t.push(y(n[o]));0<t.length&&e.setAttribute("style",t.join(";"))}}function se(e,t,i){var n,o,a=[],s=e.getAttribute("style");if(s)for(var r=s.split(";"),d=0;d<r.length;d++)n=r[d],o=t,n.substring(0,o.length)!==o&&a.push(r[d]);null!=i&&a.push(t+": "+i),e.setAttribute("style",a.join(";"))}function y(e){return function(e,t){return-1!==e.indexOf(t,e.length-t.length)}(e,"important")?e:e+" !important"}function w(e,t){return!!e.className&&-1<e.className.split(" ").indexOf(t)}function re(e,t,i){var n=t+"="+i;return e+=(e.split("?")[1]?"&":"?")+n}this.onBlockRender=void 0,this.onHitImpression=void 0,this.onHitClick=void 0,this.forceMobileVersion=function(){g=!0},this.parseTargetElements=function(){for(var e=[],t=[],i=document.getElementsByClassName("ad-injection-block"),n=0;n<i.length;n++){var o=i[n].id.split(r+"-");2===o.length&&""===o[0]&&-1===c.indexOf(i[n])&&(e.push(o[1]),t.push(i[n]),c.push(i[n]))}0<t.length?a.createAdBlocks(t,e):l&&window.console&&console.warn("NewsHunter: No ad blocks found at the page"),l=!1},this.createAdBlocks=function(o,O){if(0!==o.length){var q=[],e=new XMLHttpRequest,t=g?"mobile":"desktop",i=parseInt(b(u)||0),n=d+s+"/"+O.join(",")+"/?cv="+t+"&page="+i,a=b(p)||function(){var e,t,i;for(e="",i=0;i<32;i++)8!==i&&12!==i&&16!==i&&20!==i||(e+="-"),t=Math.floor(16*Math.random()).toString(16),e+=t;return e}(),G=!1;n+="&uuid="+a,l&&(n+="&u="+ +!b(p)),h&&(n+="&skip="+document.cookie.split(";").filter(function(e){return 0===e.trim().indexOf(m)}).map(function(e){return e.trim().split("=")[1]}).join(",")),b(p)||v(p,a,1),b(f)&&(G=!0);v(u,3<=i+1?0:i+1,365),e.open("GET",n,!0),e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=JSON.parse(this.responseText),t=e.ads,i=e.website,n=[];for(var o in t)t.hasOwnProperty(o)&&-1===O.indexOf(o)&&n.push(o);for(var a in 0<n.length&&window.console&&console.warn("NewsHunter: Redundant (not requested) ads found for blocks: "+n.join(",")),i.ad_blocks)if(i.ad_blocks.hasOwnProperty(a)){var s=0,r=i.ad_blocks[a];if(-1!==O.indexOf(r.blockId)){var d={};for(var o in ee)ee.hasOwnProperty(o)&&(d[o]=ee[o]);for(var o in r.blockConfig)r.blockConfig.hasOwnProperty(o)&&(d[o]=r.blockConfig[o]);if(d.enabled){if(t[r.blockId]&&0!==t[r.blockId].length){d.scrollEnabled&&!J&&(injectCss("https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/tiny-slider.css","nh-slider-css"),injectCss("https://cdn.hunterdelivery.com/css/carousel.css","nh-slider-css-controls"),(J=injectScript("https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js","nh-slider-js")).onload=function(){Y=!0;for(var e=0;e<q.length;e++)q[e].createSliders()});var l=new ie(r.blockId,r.blockName,d);q.push(l);var c=U(l.identifier);if((l.container=c).setAttribute("style","position: relative; display: flex; flex-direction: column; white-space: normal; overflow: hidden; clear: both;"),c.style.paddingTop=d.paddingTop+"px",c.style.paddingRight=d.paddingRight+"px",c.style.paddingBottom=d.paddingBottom+"px",c.style.paddingLeft=d.paddingLeft+"px",c.style.border=d.borderSize+" "+d.borderType+" "+d.borderColor,c.style.backgroundColor=d.backgroundEnabled?d.backgroundColor:"transparent",c.style.visibility="hidden",ae(c),d.scrollEnabled&&(c.className+=" nh-scrollable"),$&&(c.className+=" nh-touchable"),!0===i.show_logo){var g=oe("a");g.setAttribute("href","https://newshunter.org/"),g.setAttribute("target","_blank"),g.setAttribute("rel","nofollow noopener"),g.setAttribute("style","border: none; border-width: 0;");var h=oe("img");h.setAttribute("src","https://newshunter.ams3.cdn.digitaloceanspaces.com/resources/ad_block_logo_23x23.png"),h.setAttribute("style","position: absolute; top: 0; right: 0; width: 23px; height: 23px; margin: 0; padding: 0; border: none; box-shadow: none; z-index: 3;"),g.appendChild(h),c.appendChild(g)}for(var u=0;u<d.rowsNumber;u++){var p=oe("div");p.setAttribute("style","display: flex; overflow: hidden;"),p.style.justifyContent=d.disposition,l.rows.push(p),c.appendChild(p);for(var f=0;f<d.colsNumber;f++){var m=t[l.identifier].length>s?t[l.identifier][s]:m,x=m.images[m.images.length-1],b=Math.floor(65536*(1+Math.random())).toString(16).substring(1)+"-"+Math.floor(65536*(1+Math.random())).toString(16).substring(1),v=m.url_redirect;G&&(v=re(v,"nu","1"));var y=new ne(d);y.ad=m,l.teasers.push(y);var w=oe("div");if(w.setAttribute("data-node-role","teaser-container"),y.nodes.teaserWrapper=w,!0===d.htmlTemplateEnabled){if("string"==typeof d.htmlTemplateCode){var k=d.htmlTemplateCode;k=(k=(k=k.replace("#TITLE#",m.title)).replace("#TARGET_URL#",v)).replace("#IMAGE_URL#",x.url),w.style.position="relative",w.innerHTML=k,(z=oe("img")).setAttribute("src",""),z.setAttribute("data-api",m.url_impression),z.setAttribute("style","position: absolute; display: block; margin: 0; padding: 0; border: none; box-shadow: none; height: 1px; width: 1px;"),w.appendChild(z),y.nodes.vissenseImg=z;var I=w.querySelectorAll("a[href='"+v+"']");Array.from(I).forEach(function(e){e.onclick=te(y)});var T=w.querySelector("img[src='"+x.url+"']");T?((y.nodes.imageImg=T).onload=function(e,t){return function(){X(e,t)}}(l,y),T.complete&&X(l,y)):((T=new Image).onload=function(e,t){return function(){X(e,t)}}(l,y),T.src=x.url)}}else{w.style.display="flex",w.style.width=d.teaserWidth+"%",w.style.paddingTop=0===u?0:d.teaserPadding/2+"px",w.style.paddingRight=f!==d.colsNumber-1||d.scrollEnabled?d.teaserPadding/2+"px":0,w.style.paddingBottom=u!==d.rowsNumber-1||d.scrollEnabled?d.teaserPadding/2+"px":0,w.style.paddingLeft=0===f?0:d.teaserPadding/2+"px";var A=oe("div");A.setAttribute("style","position: relative; width: 100%; display: flex; overflow: hidden;");var S=oe("div");S.setAttribute("style","overflow: hidden;"),S.style.minWidth=y.getMinImageWidth(),S.style.maxWidth=y.getMaxImageWidth(),S.style.width=y.calcImageWidth(),S.style.borderRadius=y.getImageRadius(),d.hoverTransitionEnabled&&(S.onmouseenter=function(e){var t=e.target.getElementsByTagName("img")[0];se(t,"-webkit-transform","scale(1.1)"),se(t,"-moz-transform","scale(1.1)"),se(t,"-o-transform","scale(1.1)"),se(t,"-webkit-filter","contrast(140%)"),se(t,"-webkit-transition","all 0.4s ease"),se(t,"-o-transition","all 0.4s ease"),se(t,"transition","all 0.4s ease")},S.onmouseleave=function(e){var t=e.target.getElementsByTagName("img")[0];se(t,"-webkit-transform","scale(1)"),se(t,"-moz-transform","scale(1)"),se(t,"-o-transform","scale(1)"),se(t,"-webkit-filter","contrast(100%)")});var C=oe("div");C.setAttribute("style","width: 100%;"),C.style.maxHeight=y.getMaxImageHeight(),C.style.height=y.calcImageHeight();var B=oe("a");B.setAttribute("href",v),B.setAttribute("target","_blank"),B.setAttribute("rel","nofollow noopener"),B.setAttribute("style","position: relative; display: flex; justify-content: center; border: none; border-width: 0;"),B.setAttribute("data-node-role","image-inner"),B.style.paddingTop=100/d.imageAspectRatio+"%",B.onclick=te(y);var F=oe("div");F.setAttribute("style","position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"),F.style.boxShadow=y.getBoxShadowStyle(0);var z,E=oe("div");E.setAttribute("style","position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center;"),(z=oe("img")).setAttribute("src",""),z.setAttribute("id",b),z.setAttribute("style","position: absolute; margin: 0; padding: 0; border: none; box-shadow: none; height: 100%; width: auto; max-width: none; min-width: auto; max-height: none; min-height: auto; align-self: center; opacity: 1;"),z.onload=function(e,t){return function(){t.handleImageLoadedEvent(),e.isTeasersLoaded()&&e.handleLoadedEvent()}}(l,y);var H=x.url;if(z.setAttribute("src",H),z.setAttribute("data-api",m.url_impression),E.appendChild(z),B.appendChild(F),B.appendChild(E),C.appendChild(B),S.appendChild(C),d.imageShadow&&"inside"===d.textPosition){var P=oe("div");P.setAttribute("style","position: relative; width: 100%; height: 0; padding-top: 20%;"),P.style.backgroundColor=d.imageShadowColor,S.appendChild(P)}var R=oe("div");R.setAttribute("style","width: 100%; left: 0; right: 0; bottom: 0; overflow: hidden; z-index: 2;"),R.style.maxWidth=y.getMaxTextBlockWidth(),R.style.width=y.calcTextBlockWidth(),R.style.height=y.calcTextBlockHeight(),R.style.backgroundColor=y.getTextBgColor(),R.style.borderRadius=y.getTextBlockRadius();var W=oe("div");W.setAttribute("style","display: flex;"),W.style.height=y.calcTextBlockInnerHeight();var j=oe("div");j.setAttribute("style","width: 100%;"),j.setAttribute("data-node-role","text-padder"),j.style.textAlign=d.textTitleAlign,j.style.padding=y.getTextBlockPadding(),0<d.textLineHeightSize&&(j.style.lineHeight=d.textLineHeightSize+"px");var L=oe("a");L.setAttribute("href",v),L.setAttribute("target","_blank"),L.setAttribute("rel","nofollow noopener"),L.setAttribute("style","text-decoration-line: none; border: none; border-width: 0;"),L.style.fontFamily=d.textTitleFont,L.style.fontWeight=d.textTitleBold,L.style.color=d.textTitleColor,L.appendChild(document.createTextNode(m.title)),L.onclick=te(y);var N=oe("span"),M=oe("div");"show-description"===d.showDescription&&(N.setAttribute("style","display: block; width: 1px;"),M.style.fontFamily=d.textDescriptionFont,M.style.fontWeight=d.textDescriptionBold,M.style.color=d.textDescriptionColor,M.style.textAlign=d.textDescriptionAlign,M.appendChild(document.createTextNode(m.content))),y.nodes.imageInner=B,y.nodes.imageImg=z,y.nodes.imageShadow=F,y.nodes.vissenseImg=z,y.nodes.textPadder=j,"right"===d.textPosition&&(A.style.flexDirection="row",A.style.justifyContent="center",S.style.flex=y.isImageFixed()&&0<d.imageFixedWidth?"initial":"1",R.style.flex=y.isTextBlockFixed()&&0<d.textBlockFixedWidth?"initial":"1",R.style.position="relative",W.style.alignItems="flex-start"),"left"===d.textPosition&&(A.style.flexDirection="row-reverse",A.style.justifyContent="center",S.style.flex=y.isImageFixed()&&0<d.imageFixedWidth?"initial":"1",R.style.flex=y.isTextBlockFixed()&&0<d.textBlockFixedWidth?"initial":"1",R.style.position="relative",W.style.alignItems="flex-start"),"under"===d.textPosition&&(A.style.flexDirection="column",A.style.alignItems="center",R.style.position="relative",R.style.margin="0 auto",R.style.flex=y.isTextBlockFixed()&&0<d.textBlockFixedHeight?"initial":"1",W.style.alignItems="flex-start"),"inside"===d.textPosition&&(A.style.flexDirection="column",A.style.alignItems="center",R.style.position="absolute",R.style.margin="0 auto",R.style.flex=y.isTextBlockFixed()&&0<d.textBlockFixedHeight?"initial":"1",W.style.alignItems="flex-end"),j.appendChild(L),j.appendChild(N),j.appendChild(M),W.appendChild(j),R.appendChild(W),A.appendChild(S),A.appendChild(R),w.appendChild(A),function(e){window.addEventListener("resize",function(){e.fixAdTextSize(),e.fixShadowSize()})}(y)}p.appendChild(w),s++}}for(var _=0;_<l.teasers.length;_++)!0!==l.config.htmlTemplateEnabled&&(l.teasers[_].setInitialImageHeight(),l.teasers[_].fixAdTextSize())}}else window.console&&console.log('NewsHunter: Ad Block "'+r.blockId+'" is disabled')}}K?V():"function"==typeof require&&"function"==typeof require.specified?(require.config({paths:{vissense:"https://cdnjs.cloudflare.com/ajax/libs/vissense/0.10.0/vissense.min"}}),require(["vissense"],function(e){K=e(window),V()})):Q||((Q=injectScript("https://cdnjs.cloudflare.com/ajax/libs/vissense/0.10.0/vissense.min.js","nh-vissense-js")).onload=function(){K=VisSense,V()});for(var D=0;D<Z.length;D++)ae(Z[D])}},e.send()}function U(e){for(var t=null,i=null,n=0;n<o.length;n++)if(o[n].id===r+"-"+e){t=o[n],i=n;break}return null!==i&&o.splice(i,1),t}function V(){for(var e=0;e<q.length;e++)for(var t=0;t<q[e].teasers.length;t++)!function(i){K(i.nodes.vissenseImg).monitor({update:function(e){var t=e.state();t.visible&&.5<=t.percentage&&function(e){w(i.nodes.teaserWrapper,"tns-item")&&!w(i.nodes.teaserWrapper,"tns-slide-active")||(e.stop(),x(i))}(e)}}).start()}(q[e].teasers[t])}function X(e,t){t.isImageLoaded=!0,e.isTeasersLoaded()&&e.handleLoadedEvent()}}}function injectCss(e,t){if(!document.getElementById(t)){var i=document.getElementsByTagName("head")[0],n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=e,n.id=t,n.media="print",n.onload=function(){this.media="all"},i.appendChild(n)}}function injectScript(e,t){if(document.getElementById(t))return null;var i=document.getElementsByTagName("head")[0],n=document.createElement("script");return n.type="text/javascript",n.src=e,n.id=t,n.async=!0,n.defer=!0,i.appendChild(n),n}function drawSystemAd(e,t,i){var n=new AdBlocksBuilder(e,t,i);"complete"!==document.readyState&&"loaded"!==document.readyState&&"interactive"!==document.readyState||n.parseTargetElements(),document.addEventListener("DOMContentLoaded",function(){n.parseTargetElements()},!1),setInterval(function(){n.parseTargetElements()},1e3)}function renderDelivery(e,t,i){drawSystemAd(e,t,i)}