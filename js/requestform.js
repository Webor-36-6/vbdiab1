var http = new XMLHttpRequest();
var url = 'https://c.tmyzer.com/c/?s=24309&f=34&fi=99';
http.open("GET", url, true);
http.send();
            if (window.nugg != 1) {

            function isEmpty(obj) {
            for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
            return false;
            }

            return true;
            }
            
                        // GEN

            var criteoCallback = function (data) {
            if (data && data.status === "OK") {
            sas.cmd.push(function () { sas.setPartnerId("79", data.userid); });
            }
            sas.cmd.push(function(){sas.render();});
            }

            setTimeout(criteoCallback, 200);
            var criteo_gum = document.createElement("script");
            criteo_gum.setAttribute("type", "text/javascript");
            criteo_gum.setAttribute("src", "https://gum.criteo.com/sync?c=147&r=2&j=criteoCallback");
            criteo_gum.setAttribute("async", "true");
            document.head.appendChild(criteo_gum);

            var pwidget_config = {
            publisherKey:"1sbtjc2sqopftf032cn",
            shareQuote:false
            };
            function loadScriptTemelio(url, callback) { var script = document.createElement("script");
            script.type = "text/javascript"; script.async = true;
            if (script.readyState) { script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
            script.onreadystatechange = null;
            if (callback && typeof callback === "function") { callback(); }

            } }; } else { script.onload = function () { if (callback && typeof callback === "function") { callback(); } }; }
            script.src = url;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            }
            loadScriptTemelio('https://tag.leadplace.fr/libJsLP.js', function () { libJsLeadPlace.SendtoLPbyIframe("id=MTIZ"); });
            var iframe = document.createElement("iframe");
            iframe.src = "https://onetag-sys.com/usync/?pubId=2a897e3f18e6769&cb=" + new Date().getTime();
            iframe.style.display = "none";
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.appendChild(iframe);
            var iframe = document.createElement("iframe");
            iframe.src = "https://spl.zeotap.com/?env=mWeb&uc=2&zdid=1258&eventType=map";
            iframe.style.display = "none";
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.appendChild(iframe);
            (function(win, doc) {
            var id5 = {
            partnerId : 12,
            cascades  : 9,
            hasTcfCmp : true,
            debug     : true,

            makeUrl: function() {
            var isSync = (typeof this.callType != 'undefined' && this.callType.toLowerCase() === 'sync' && this.myUid && this.myUid.length > 0);
            return 'https://id5-sync.com/'+(isSync?'s':'i')+'/'+this.partnerId+'/'+this.cascades+'.gif?'+(isSync?'puid='+encodeURIComponent(this.myUid)+'&':'')+'gdpr='+encodeURIComponent(this.gdprApplies||'')+'&gdpr_consent='+encodeURIComponent(this.consentData||'');
            },
            prepareId5Pixel: function() {
            if(doc.readyState !== 'loading') {
            this.fireId5Pixel();
            } else {
            doc.addEventListener('DOMContentLoaded', function () {
            id5.fireId5Pixel();
            });
            }
            },
            fireId5Pixel: function() {
            var url = this.makeUrl();
            this.log('Firing ID5 pixel at url:', url);
            (new Image()).src = url;
            },
            processTcfResults: function(result) {
            this.log('Received TCF result', result);
            this.gdprApplies = result.gdprApplies;
            this.consentData = result.consentData;
            },
            init: function() {
            if(this.hasTcfCmp){
            try {
            win.__cmp('getConsentData', null, function(result) {
            id5.processTcfResults(result);
            id5.prepareId5Pixel();
            });
            } catch (e) {
            id5.log('Exception received while calling TCF CMP', e);
            id5.prepareId5Pixel();
            }
            } else {
            id5.prepareId5Pixel();
            }
            },
            log: function(msg, data) {


            }
            };
            id5.init();
            })(window, document);

            // FIN GEN
            
            
            
            var tagsObject = {"26325":{"site_cmp":"2","site_cnil":"0","user_id":"15913","user_parrain":"","user_plateform":"ru","ad_id":"5","ad_triplelift_id":"MoneyTizer_Skin_HDX_1","ad_triplelift_id_doublon":"MoneyTizer_Skin_HDX_2","ad_adman":null,"ad_adman_mobile":null,"form_rtb_floor":"0.01","form_appnexus_floor":null,"form_improve_floor":null,"form_id":"44222","form_id_sticky":null,"form_ad_id":"5","form_richaudience":null,"form_richaudience_mobile":null,"form_smilewanted":null,"form_admixer":null,"form_admixer_mobile":null,"form_custom_code":null,"form_custom_var":"compatible=true","form_custom_display":"0","form_rubicon_floor":null,"form_index_floor":null,"tag_appnexus":"0","form_id_rubicon":"1078232","form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_pulsepoint":null,"form_otm":null,"form_gumgum":null,"tag_aol":null,"tag_aol_mobile":null,"tag_sovrn":null,"tag_quantum":null,"tag_sovrn_mobile":null,"tag_breal":null,"tag_criteo":null,"tag_index":null,"tag_index2":null,"tag_adyoulike":null,"tag_rhythmone":null,"tag_vertoz":null,"tag_improve":null,"tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26325","site_cmp_update":"0","site_id":"24309","site_id_smart":"279931\/1035006","site_pulsepoint":null,"part_criteo":"0","part_adman":"0","part_eplanning":"1","part_adaptmx":"1","part_rtb_house":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":"2387","site_otm_BTF":"2386","site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"d1097bfd-950a-4c95-b42e-04f79eee356e","site_responsive":"1","site_blocklist":"0","site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":"1078274","site_id_rubicon_BTF":"1078316","site_doublon":null,"site_ads_txt":"14","site_showheroes":null,"site_id_rubicon_MOBILE":"1078358","site_date_validation":"2019-01-17","site_id_rubicon_FS":"1124634","site_viewdeos":null,"site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":"21524369","site_oftmedia_BTF":"21524370","site_oftmedia_FS":"21524371","site_oftmedia_IT":null,"site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"24309-123ru-net","site_triplelift":"1","site_theme":"12","site_true_url":"https:\/\/123ru.net\/","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"2","part_triplelift":"1","site_confiant":"0"},"26324":{"site_cmp":"2","site_cnil":"0","user_id":"15913","user_parrain":"","user_plateform":"ru","ad_id":"4","ad_triplelift_id":"MoneyTizer_Sky_HDX","ad_triplelift_id_doublon":"MoneyTizer_Sky_HDX_2","ad_adman":null,"ad_adman_mobile":null,"form_rtb_floor":"0.01","form_appnexus_floor":null,"form_improve_floor":null,"form_id":"44438","form_id_sticky":null,"form_ad_id":"4","form_richaudience":"dr04jZ41ER","form_richaudience_mobile":null,"form_smilewanted":null,"form_admixer":"49de4782-668d-4c14-b6b7-879d36dbe800","form_admixer_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","form_rubicon_floor":null,"form_index_floor":null,"tag_appnexus":"14755883","form_id_rubicon":null,"form_between":"2874888","form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_pulsepoint":null,"form_otm":null,"form_gumgum":null,"tag_aol":null,"tag_aol_mobile":null,"tag_sovrn":null,"tag_quantum":null,"tag_sovrn_mobile":null,"tag_breal":null,"tag_criteo":null,"tag_index":null,"tag_index2":null,"tag_adyoulike":null,"tag_rhythmone":null,"tag_vertoz":null,"tag_improve":"22471776","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26324","site_cmp_update":"0","site_id":"24309","site_id_smart":"279931\/1035006","site_pulsepoint":null,"part_criteo":"0","part_adman":"0","part_eplanning":"1","part_adaptmx":"1","part_rtb_house":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":"2387","site_otm_BTF":"2386","site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"d1097bfd-950a-4c95-b42e-04f79eee356e","site_responsive":"1","site_blocklist":"0","site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":"1078274","site_id_rubicon_BTF":"1078316","site_doublon":null,"site_ads_txt":"14","site_showheroes":null,"site_id_rubicon_MOBILE":"1078358","site_date_validation":"2019-01-17","site_id_rubicon_FS":"1124634","site_viewdeos":null,"site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":"21524369","site_oftmedia_BTF":"21524370","site_oftmedia_FS":"21524371","site_oftmedia_IT":null,"site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"24309-123ru-net","site_triplelift":"1","site_theme":"12","site_true_url":"https:\/\/123ru.net\/","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"2","part_triplelift":"1","site_confiant":"0"},"26706":{"site_cmp":"2","site_cnil":"0","user_id":"15913","user_parrain":"","user_plateform":"ru","ad_id":"20","ad_triplelift_id":"MoneyTizer_MegaSky_HDX","ad_triplelift_id_doublon":"MoneyTizer_MegaSky_HDX_2","ad_adman":null,"ad_adman_mobile":null,"form_rtb_floor":"0.01","form_appnexus_floor":"0.04","form_improve_floor":"0.01","form_id":"27468","form_id_sticky":null,"form_ad_id":"20","form_richaudience":"dhsxq5Yags","form_richaudience_mobile":null,"form_smilewanted":null,"form_admixer":"cad37aef-f2d6-4181-9493-02a7c0d32a14","form_admixer_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","form_rubicon_floor":"0.03","form_index_floor":null,"tag_appnexus":"14755885","form_id_rubicon":null,"form_between":"2874890","form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_pulsepoint":null,"form_otm":null,"form_gumgum":null,"tag_aol":null,"tag_aol_mobile":null,"tag_sovrn":null,"tag_quantum":null,"tag_sovrn_mobile":null,"tag_breal":null,"tag_criteo":null,"tag_index":null,"tag_index2":null,"tag_adyoulike":null,"tag_rhythmone":null,"tag_vertoz":null,"tag_improve":"22471779","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26706","site_cmp_update":"0","site_id":"24309","site_id_smart":"279931\/1035006","site_pulsepoint":null,"part_criteo":"0","part_adman":"0","part_eplanning":"1","part_adaptmx":"1","part_rtb_house":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":"2387","site_otm_BTF":"2386","site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"d1097bfd-950a-4c95-b42e-04f79eee356e","site_responsive":"1","site_blocklist":"0","site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":"1078274","site_id_rubicon_BTF":"1078316","site_doublon":null,"site_ads_txt":"14","site_showheroes":null,"site_id_rubicon_MOBILE":"1078358","site_date_validation":"2019-01-17","site_id_rubicon_FS":"1124634","site_viewdeos":null,"site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":"21524369","site_oftmedia_BTF":"21524370","site_oftmedia_FS":"21524371","site_oftmedia_IT":null,"site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"24309-123ru-net","site_triplelift":"1","site_theme":"12","site_true_url":"https:\/\/123ru.net\/","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"2","part_triplelift":"1","site_confiant":"0"},"30012":{"site_cmp":"2","site_cnil":"0","user_id":"15913","user_parrain":"","user_plateform":"ru","ad_id":"28","ad_triplelift_id":"MoneyTizer_MegaBannerBasse_HDX","ad_triplelift_id_doublon":"MoneyTizer_MegaBannerBasse_HDX_2","ad_adman":null,"ad_adman_mobile":null,"form_rtb_floor":"0.01","form_appnexus_floor":"0.03","form_improve_floor":"0.02","form_id":"10061","form_id_sticky":null,"form_ad_id":"28","form_richaudience":"YBFkbPC06v","form_richaudience_mobile":"UdEuI4IDYn","form_smilewanted":null,"form_admixer":"2bce0dbf-a0fe-4a65-b877-e00a03f20e74","form_admixer_mobile":"486cc8e4-2356-4080-ab09-e042e6fdd109","form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","form_rubicon_floor":"0.05","form_index_floor":null,"tag_appnexus":"14755886","form_id_rubicon":null,"form_between":"2874891","form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_pulsepoint":null,"form_otm":null,"form_gumgum":null,"tag_aol":null,"tag_aol_mobile":null,"tag_sovrn":null,"tag_quantum":null,"tag_sovrn_mobile":null,"tag_breal":null,"tag_criteo":null,"tag_index":null,"tag_index2":null,"tag_adyoulike":null,"tag_rhythmone":null,"tag_vertoz":null,"tag_improve":"22471775","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"30012","site_cmp_update":"0","site_id":"24309","site_id_smart":"279931\/1035006","site_pulsepoint":null,"part_criteo":"0","part_adman":"0","part_eplanning":"1","part_adaptmx":"1","part_rtb_house":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":"2387","site_otm_BTF":"2386","site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"d1097bfd-950a-4c95-b42e-04f79eee356e","site_responsive":"1","site_blocklist":"0","site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":"1078274","site_id_rubicon_BTF":"1078316","site_doublon":null,"site_ads_txt":"14","site_showheroes":null,"site_id_rubicon_MOBILE":"1078358","site_date_validation":"2019-01-17","site_id_rubicon_FS":"1124634","site_viewdeos":null,"site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":"21524369","site_oftmedia_BTF":"21524370","site_oftmedia_FS":"21524371","site_oftmedia_IT":null,"site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"24309-123ru-net","site_triplelift":"1","site_theme":"12","site_true_url":"https:\/\/123ru.net\/","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"2","part_triplelift":"1","site_confiant":"0"},"39287":{"site_cmp":"2","site_cnil":"0","user_id":"15913","user_parrain":"","user_plateform":"ru","ad_id":"31","ad_triplelift_id":"MoneyTizer_Billboard_HDX","ad_triplelift_id_doublon":"MoneyTizer_Billboard_HDX_2","ad_adman":null,"ad_adman_mobile":null,"form_rtb_floor":"0.01","form_appnexus_floor":null,"form_improve_floor":null,"form_id":"2737","form_id_sticky":null,"form_ad_id":"31","form_richaudience":"pnY1VJUABg","form_richaudience_mobile":"0pXPs5l0fx","form_smilewanted":null,"form_admixer":"cae65579-a2eb-40e9-9861-8b0a01e48aaf","form_admixer_mobile":"4d8735e9-2641-49fc-90e3-65ca0d1a9a0b","form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","form_rubicon_floor":null,"form_index_floor":null,"tag_appnexus":"14755887","form_id_rubicon":null,"form_between":"2874892","form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_pulsepoint":null,"form_otm":null,"form_gumgum":null,"tag_aol":null,"tag_aol_mobile":null,"tag_sovrn":null,"tag_quantum":null,"tag_sovrn_mobile":null,"tag_breal":null,"tag_criteo":null,"tag_index":null,"tag_index2":null,"tag_adyoulike":null,"tag_rhythmone":null,"tag_vertoz":null,"tag_improve":"22471778","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"39287","site_cmp_update":"0","site_id":"24309","site_id_smart":"279931\/1035006","site_pulsepoint":null,"part_criteo":"0","part_adman":"0","part_eplanning":"1","part_adaptmx":"1","part_rtb_house":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":"2387","site_otm_BTF":"2386","site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"d1097bfd-950a-4c95-b42e-04f79eee356e","site_responsive":"1","site_blocklist":"0","site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":"1078274","site_id_rubicon_BTF":"1078316","site_doublon":null,"site_ads_txt":"14","site_showheroes":null,"site_id_rubicon_MOBILE":"1078358","site_date_validation":"2019-01-17","site_id_rubicon_FS":"1124634","site_viewdeos":null,"site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":"21524369","site_oftmedia_BTF":"21524370","site_oftmedia_FS":"21524371","site_oftmedia_IT":null,"site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"24309-123ru-net","site_triplelift":"1","site_theme":"12","site_true_url":"https:\/\/123ru.net\/","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"2","part_triplelift":"1","site_confiant":"0"},"26328":{"site_cmp":"2","site_cnil":"0","user_id":"15913","user_parrain":"","user_plateform":"ru","ad_id":"6","ad_triplelift_id":"MoneyTizer_Footer_HDX","ad_triplelift_id_doublon":"MoneyTizer_Footer_HDX_2","ad_adman":null,"ad_adman_mobile":null,"form_rtb_floor":"0.01","form_appnexus_floor":null,"form_improve_floor":null,"form_id":"34359","form_id_sticky":null,"form_ad_id":"6","form_richaudience":"SPzENRT5VX","form_richaudience_mobile":"zuNwbHlGI8","form_smilewanted":null,"form_admixer":"d144070d-cd7c-4650-867d-30db79127d57","form_admixer_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","form_rubicon_floor":null,"form_index_floor":null,"tag_appnexus":"21104180","form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_pulsepoint":null,"form_otm":null,"form_gumgum":null,"tag_aol":null,"tag_aol_mobile":null,"tag_sovrn":null,"tag_quantum":null,"tag_sovrn_mobile":null,"tag_breal":null,"tag_criteo":null,"tag_index":null,"tag_index2":null,"tag_adyoulike":null,"tag_rhythmone":null,"tag_vertoz":null,"tag_improve":"22471774","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26328","site_cmp_update":"0","site_id":"24309","site_id_smart":"279931\/1035006","site_pulsepoint":null,"part_criteo":"0","part_adman":"0","part_eplanning":"1","part_adaptmx":"1","part_rtb_house":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":"2387","site_otm_BTF":"2386","site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"d1097bfd-950a-4c95-b42e-04f79eee356e","site_responsive":"1","site_blocklist":"0","site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":"1078274","site_id_rubicon_BTF":"1078316","site_doublon":null,"site_ads_txt":"14","site_showheroes":null,"site_id_rubicon_MOBILE":"1078358","site_date_validation":"2019-01-17","site_id_rubicon_FS":"1124634","site_viewdeos":null,"site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":"21524369","site_oftmedia_BTF":"21524370","site_oftmedia_FS":"21524371","site_oftmedia_IT":null,"site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"24309-123ru-net","site_triplelift":"1","site_theme":"12","site_true_url":"https:\/\/123ru.net\/","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"2","part_triplelift":"1","site_confiant":"0"},"45111":{"site_cmp":"2","site_cnil":"0","user_id":"15913","user_parrain":"","user_plateform":"ru","ad_id":"11","ad_triplelift_id":"MoneyTizer_InText_HDX_1","ad_triplelift_id_doublon":"MoneyTizer_InText_HDX_2","ad_adman":null,"ad_adman_mobile":null,"form_rtb_floor":"0.01","form_appnexus_floor":null,"form_improve_floor":null,"form_id":"135791","form_id_sticky":"7747041","form_ad_id":"11","form_richaudience":"B64cBupIwv","form_richaudience_mobile":null,"form_smilewanted":null,"form_admixer":null,"form_admixer_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","form_rubicon_floor":null,"form_index_floor":null,"tag_appnexus":"20744722","form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_pulsepoint":null,"form_otm":null,"form_gumgum":null,"tag_aol":null,"tag_aol_mobile":null,"tag_sovrn":null,"tag_quantum":null,"tag_sovrn_mobile":null,"tag_breal":null,"tag_criteo":null,"tag_index":null,"tag_index2":null,"tag_adyoulike":null,"tag_rhythmone":null,"tag_vertoz":null,"tag_improve":"22471777","tag_lockerdome":null,"tag_spotx":"248524","tag_justpremium":null,"ad_smart_id":"45111","site_cmp_update":"0","site_id":"24309","site_id_smart":"279931\/1035006","site_pulsepoint":null,"part_criteo":"0","part_adman":"0","part_eplanning":"1","part_adaptmx":"1","part_rtb_house":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":"2387","site_otm_BTF":"2386","site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"d1097bfd-950a-4c95-b42e-04f79eee356e","site_responsive":"1","site_blocklist":"0","site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":"1078274","site_id_rubicon_BTF":"1078316","site_doublon":null,"site_ads_txt":"14","site_showheroes":null,"site_id_rubicon_MOBILE":"1078358","site_date_validation":"2019-01-17","site_id_rubicon_FS":"1124634","site_viewdeos":null,"site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":"21524369","site_oftmedia_BTF":"21524370","site_oftmedia_FS":"21524371","site_oftmedia_IT":null,"site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"24309-123ru-net","site_triplelift":"1","site_theme":"12","site_true_url":"https:\/\/123ru.net\/","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"2","part_triplelift":"1","site_confiant":"0"},"26300":{"site_cmp":"2","site_cnil":"0","user_id":"15913","user_parrain":"","user_plateform":"ru","ad_id":"2","ad_triplelift_id":"MoneyTizer_PaveHaut_HDX","ad_triplelift_id_doublon":"MoneyTizer_PaveHaut_HDX_2","ad_adman":null,"ad_adman_mobile":null,"form_rtb_floor":null,"form_appnexus_floor":null,"form_improve_floor":null,"form_id":"92818","form_id_sticky":null,"form_ad_id":"2","form_richaudience":null,"form_richaudience_mobile":null,"form_smilewanted":null,"form_admixer":"246b6661-fba0-4f7a-ae1e-6ab4c5ffd110","form_admixer_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","form_rubicon_floor":null,"form_index_floor":null,"tag_appnexus":"21283227","form_id_rubicon":null,"form_between":"4060465","form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_pulsepoint":null,"form_otm":null,"form_gumgum":null,"tag_aol":null,"tag_aol_mobile":null,"tag_sovrn":null,"tag_quantum":null,"tag_sovrn_mobile":null,"tag_breal":null,"tag_criteo":null,"tag_index":null,"tag_index2":null,"tag_adyoulike":null,"tag_rhythmone":null,"tag_vertoz":null,"tag_improve":"22471304","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26300","site_cmp_update":"0","site_id":"24309","site_id_smart":"279931\/1035006","site_pulsepoint":null,"part_criteo":"0","part_adman":"0","part_eplanning":"1","part_adaptmx":"1","part_rtb_house":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":"2387","site_otm_BTF":"2386","site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"d1097bfd-950a-4c95-b42e-04f79eee356e","site_responsive":"1","site_blocklist":"0","site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":"1078274","site_id_rubicon_BTF":"1078316","site_doublon":null,"site_ads_txt":"14","site_showheroes":null,"site_id_rubicon_MOBILE":"1078358","site_date_validation":"2019-01-17","site_id_rubicon_FS":"1124634","site_viewdeos":null,"site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":"21524369","site_oftmedia_BTF":"21524370","site_oftmedia_FS":"21524371","site_oftmedia_IT":null,"site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"24309-123ru-net","site_triplelift":"1","site_theme":"12","site_true_url":"https:\/\/123ru.net\/","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"2","part_triplelift":"1","site_confiant":"0"}};
            window._qevents = window._qevents || [];
            window.moneycaching=false;
            (function() {
            var elem = document.createElement('script');
            elem.src = "https://secure.quantserve.com/quant.js";
            elem.async = true;
            elem.type = "text/javascript";
            var scpt = document.getElementsByTagName('script')[0];
            scpt.parentNode.insertBefore(elem, scpt);
            })();

            window._qevents.push({
            qacct:"p-6Fv0cGNfc_bw8",
            labels:"Categories.news"
            });
            var website = (window.location != window.parent.location) ? document.referrer: document.location.href;
            params = {
            "cat":"news",
            "sscat":"Other"
            };
                                        (function(c,a,p,t,i,f,y){i=c.createElement(a);t=c.getElementsByTagName(a)[0];i.type='text/javascript';i.async=true;i.src=p;t.parentNode.insertBefore(i,t);})(document,'script','https://p.cpx.to/p/12761/px.js');
                                            var random = Math.floor(Math.random() * 10);
                if(random == 1){
                var pubstack = document.createElement("script");
                pubstack.setAttribute("type", "text/javascript");
                pubstack.setAttribute("src","https://boot.pbstck.com/v1/tag/d1097bfd-950a-4c95-b42e-04f79eee356e");
                pubstack.setAttribute("async", "true");
                var target = document.getElementsByTagName('head')[0];
                target.appendChild(pubstack);
                }
            

                            var notifyme = document.createElement("script");
                notifyme.setAttribute("type", "text/javascript");
                notifyme.setAttribute("src", "https://d2zur9cc2gf1tx.cloudfront.net/a96081b6-db78-48c4-9f82-b93e316fb1f7/notifyme.js");
                var target = document.getElementsByTagName('head')[0];
                target.appendChild(notifyme);

                        
            var ix_lib = document.createElement("script");
            ix_lib.setAttribute("type", "text/javascript");
            ix_lib.setAttribute("src","https://js-sec.indexww.com/ht/p/186329-261067657875242.js");
            ix_lib.setAttribute("async", "true");
            document.getElementsByTagName('head')[0].appendChild(ix_lib);
                        window.nugg = 1;
            var tmzr = (typeof tmzr != "undefined")? tmzr : {} ;
            tmzr.que = tmzr.que || [];

            var d = document, pbs = d.createElement('script');
            pbs.setAttribute("type","text/javascript");
            window.pubstack_ab = "population:0";
            var random_sw = Math.floor(Math.random() * 2);
                                                                        pbs.setAttribute("src","https://ads.themoneytizer.com/moneybid4_40/build_quantcast/dist/prebid.js");
                        pbs.setAttribute("async", "true");
            var target = document.getElementsByTagName('head')[0];
            target.insertBefore(pbs, target.firstChild);

                        var format_size = {"1":[[728,90]],"2":[[300,250]],"3":[[300,600],[300,250]],"4":[[120,600]],"19":[[300,250]],"20":[[160,600]],"26":[[300,250]],"28":[[728,90]],"15":[[250,300],[336,280],[320,50],[300,100],[320,480],[300,50],[320,100]],"31":[[970,250],[800,250],[950,250],[900,250],[970,90]],"35":[[160,600]],"11":[[640,320]]};
            var format_size_ix = {"1":[728,90],"2":[300,250],"3":[300,600],"4":[120,600],"19":[300,250],"20":[160,600],"26":[300,250],"28":[728,90],"15":[300,100],"31":[970,250],"36":[728,90],"35":[160,600],"11":[640,480],"6":[728,90],"5":[1800,1000]};
            var format_w_adform = {"1":728,"2":300,"3":300,"4":120,"19":300,"20":160,"26":300,"28":728,"15":300,"31":970,"36":728,"35":160,"11":640,"6":728,"5":1800};
            var format_h_adform = {"1":90,"2":250,"3":600,"4":600,"19":250,"20":600,"26":250,"28":90,"15":100,"31":250,"36":90,"35":600,"11":480,"6":90,"5":1000};
            var format_size_rubicon = {"26322":"2","26300":"15","26323":"10,15","26324":"8","26711":"15","26706":"9","28108":"15","30012":"2","26755":"2,43,67,44,59,117,16","39287":"57","50677":"9","26325":"68"};
            var format_criteo = {"1":"1085567","2":"1085565","3":"1095714","31":"1085641","4":"1085632","19":"1085566","20":"1085636","28":"1085567","15":"1085643"};
            var format_pulsepoint = {"1":"728x90","2":"300x250","3":"300x600","4":"120x600","19":"300x250","20":"160x600","26":"300x250","28":"728x90","15":"320x50","31":"970x250","35":"160x600"};
            var between_w = {"1":"728","2":"300","3":"300","4":"120","31":"970","20":"160","19":"300","28":"728"};
            var between_h = {"1":"90","2":"300","3":"600","4":"90","31":"250","20":"600","19":"250","28":"90"};
            function GetRichAudienceZone(format,desktop,mobile){
            if(format == 1 || format == 28 || format == 6 || format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var ra_zone = mobile;
            }else{
            var ra_zone = desktop;
            }
            }else{
            var ra_zone = desktop;
            }
            return ra_zone;
            }
            function GetAdmixerZone(format,desktop,mobile){
            if(format == 1 || format == 28 || format == 6 || format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var ra_zone = mobile;
            }else{
            var ra_zone = desktop;
            }
            }else{
            var ra_zone = desktop;
            }
            return ra_zone;
            }

            function GetmnameAdform(format,mname){
            if((format == 1 || format == 28 || format == 31 || format == 6) && ((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i))){
            var name = "f"+mname+"m";
            }else{
            var name = "f"+mname;
            }
            return name
            }
            function GetwAdform(format){
            if(format == 1 || format == 28){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = 320;
            }else{
            var my_sizes = 728;
            }
            }else if(format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = 300;
            }else{
            var my_sizes = 970;
            }
            }else if(format == 6){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = 320;
            }else{
            var my_sizes = 728;
            }
            }else{
            var my_sizes = format_w_adform[format];
            }
            return my_sizes;
            }
            function GethAdform(format){
            if(format == 1 || format == 28){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = 100;
            }else{
            var my_sizes = 90;
            }
            }else if(format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = 250;
            }else{
            var my_sizes = 250;
            }
            }else if(format == 6){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = 100;
            }else{
            var my_sizes = 90;
            }
            }else{
            var my_sizes = format_h_adform[format];
            }
            return my_sizes;
            }
            function GetsizeIndex(format){
            if(format == 1 || format == 28){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [320,50];
            }else{
            var my_sizes = [728,90];
            }
            }else if(format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [300,250];
            }else{
            var my_sizes = [970, 250];
            }
            }else if(format == 6){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [320,50];
            }else{
            var my_sizes = [728,90];
            }
            }else{
            var my_sizes = format_size_ix[format];
            }
            return my_sizes;
            }
            function Getsize(format,custom_footer){
            var custom_footer = custom_footer || 0;
            if(format == 1 || format == 28){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
                            var my_sizes = [[320,50],[300,50],[320,100],[300,100]];
                        }else{
                            var my_sizes = [[728,90],[320,50],[300,50],[320,100],[300,100]];
                        }
            }else if(format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [[300,250]];
            }else{
            var my_sizes = [[970, 250],[1000, 30],[1000, 90],[800, 250],[950, 250],[900, 250],[970, 90]];
            }
            }else if(format == 6){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [[1,1],[320,50],[300,50],[320,100],[300,100]];
            }else{
            if(custom_footer == 1){
            var my_sizes = [[1,1],[728,90],[970,90],[1000,90],[1000,30],[990,90],[950,90]];
            }else{
            var my_sizes = [[1,1],[728,90],[970,90],[1000,90],[1000,30],[990,90],[950,90],[300,250]];
            }
            }
            }else{
            var my_sizes = format_size[format];
            }
            return my_sizes;
            }
            function GetsizeRubicon(format){
            if(format == 26322 || format == 30012){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [43,67,44,59,117,16];
            return my_size
            }else{
            var my_sizes = [2,43,67,44,59,117,16];
            }
            }else if(format == 39287){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = '15';
            }else{
            var my_sizes = [15,57,55,56,116,125];
            }
            }else{
            var my_sizes = format_size_rubicon[format];
            }
            return [my_size];
            }
            function GetPulseSize(format){
            if(format == 1 || format == 28){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = '320x50';
            }else{
            var my_sizes = '728x90';
            }
            }else if(format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = '300x250';
            }else{
            var my_sizes = '970x250';
            }
            }else{
            var my_sizes = format_pulsepoint[format];
            }
            return my_sizes;
            }

            tmzr.que.push(function(){
            
            var videoAdUnit = [                    {
                    code: 'video',
                    mediaTypes: {
                    banner: {
                    sizes: [
                    [300, 250],
                    [300, 50],
                    [355, 50]
                    ]
                    },
                    video: {
                    context: 'outstream',
                    playerSize: [[640, 480]],
                    mimes: ["video/x-ms-wmv","video/mp4"],
                    protocols: [1,2,3,4,5,6,7,8],
                    maxduration : 60,
                    minduration : 1,
                    linearity: 1,
                    api : [1,2,3,4,5]
                    },
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:24309,
                    adId:11                    }
                    },
                                            {bidder: 'appnexus',
                        params:{
                        placementId: '20744722'
                        }
                        },                                                                {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '24309'
                        }
                        }
                        },
                                                                                    {
                        bidder: 'triplelift',
                        params: {
                        inventoryCode: 'MoneyTizer_InText_HDX_1',
                        floor: 0.01
                        }
                        },
                                                                                    {
                        bidder: 'richaudience',
                        params: {
                        pid:"B64cBupIwv",
                        supplyType:"site",
                        player: {
                        init: "open",
                        end: "close",
                        skin: "light"
                        }
                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "24309-11"
                        }
                        },
                                                                                                                        
                                            {
                        bidder: 'improvedigital',
                        params: {
                        placementId: '22471777'
                        }
                        },
                                                            ]},
                ]
            var nativeAdUnit = []
            var skinAdUnit = [                    {
                    code: '26325',
                    mediaTypes: {
                    banner: {
                    sizes:[[1, 1],[1800, 1000]]
                    }
                    },
                    bids: [
                                                                                                        {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '24309'
                        }
                        }
                        },
                                                                {
                        bidder: 'triplelift',
                        params: {
                        inventoryCode: 'MoneyTizer_Skin_HDX_1',
                        floor: 0.01
                        }
                        },
                                                                {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://123ru.net/',
                        inventory:{'siteid':['24309']},
                        keywords:[24309],
                        floor: 1.00
                        }
                        },
                                                                                                        {bidder: 'oftmedia',
                        params:{
                        placementId : '21524369'
                        }
                        },
                                                            ]},
                ]
            var footerAdUnit = [                    {
                    code: '26328',
                    sizes:  Getsize('6','0'),
                    mediaTypes: {
                    banner: {
                    sizes:Getsize('6','0')
                    }
                    },
                    bids: [
                                                                                                        {
                        bidder: 'admixer',
                        params: {
                        zone:GetAdmixerZone(6,"d144070d-cd7c-4650-867d-30db79127d57","")
                        }
                        },
                                                                                    {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "24309-6"
                        }
                        },
                                                                                    {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '24309-123ru-net',
                        adUnitElementId: 'sas_26328',
                        placement: '6'
                        }
                        },
                                                                                    {
                        bidder: 'triplelift',
                        params: {
                        inventoryCode: 'MoneyTizer_Footer_HDX',
                        floor: 0.01
                        }
                        },
                                                                {
                        bidder: 'appnexus',
                        params: {
                        placementId: '21104180'
                        }
                        },
                                                                {
                        bidder: 'richaudience',
                        params: {
                        pid:GetRichAudienceZone(6,"SPzENRT5VX","zuNwbHlGI8"),
                        supplyType:"site"
                        }
                        },
                                                                                    {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '24309'
                        }
                        }
                        },
                                                                                    {bidder: 'oftmedia',
                        params:{
                        placementId : '21524371'
                        }
                        },
                                                                                    {
                        bidder: 'improvedigital',
                        params: {
                        placementId: '22471774'
                        }
                        },
                                                                                    {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1124634',
                        referrer:'https://123ru.net/',
                        inventory:{'siteid':['24309']},
                        keywords:[24309],
                        floor: 0.01
                        }
                        }
                                        ]},
                ]
            isEmpty(nativeAdUnit)&&whenFormatFctDefined(window,"Adcall_48311")&&window.Adcall_48311(),isEmpty(skinAdUnit)&&whenFormatFctDefined(window,"Adcall_26325")&&window.Adcall_26325(),isEmpty(footerAdUnit)&&whenFormatFctDefined(window,"Adcall_26328")&&window.Adcall_26328(),isEmpty(videoAdUnit)&&whenFormatFctDefined(window,"Adcall_video")&&window.Adcall_video();

            window.pubstack_publica ={adServer : 'smart-rtb+',tags: [ window.pubstack_ab ]};

            if(window.moneytizergeo == "FR" || window.moneytizergeo == "US" || window.moneytizergeo == "AT" || window.moneytizergeo == "DE" || window.moneytizergeo == "CH" || window.moneytizergeo == "IT" || window.moneytizergeo == "ES" || window.moneytizergeo == "US" || window.moneytizergeo == "MQ" || window.moneytizergeo == "GP" || window.moneytizergeo == "RE" || window.moneytizergeo == "NC"){
            window.bidder_geo = window.moneytizergeo;
            }else{
            window.bidder_geo = 0;
            }

            var adUnits = [                    {
                    code: '26324',
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                    banner: {
                    sizes:
                    Getsize(4)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:24309,
                    adId:4,
                    country: window.bidder_geo
                    }
                    },
                                            {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '24309-123ru-net',
                        adUnitElementId: 'sas_26324',
                        placement: '4'
                        }
                        },
                                                                {bidder: 'improvedigital',
                        params:{
                        placementId: '22471776',
                                                }
                        },
                                                                                    {bidder: 'appnexus',
                        params:{
                        placementId: '14755883'
                        }
                        },
                                                                                            {
                            bidder: 'triplelift',
                            params: {
                            inventoryCode: 'MoneyTizer_Sky_HDX',
                            floor: 0.01
                            }
                            },
                                                                                        {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://123ru.net/',
                        inventory:{'siteid':['24309']},
                        keywords:[24309],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "24309-4"
                        }
                        },
                                                                                                                            {bidder: 'otm',
                        params: {
                        tid: "2387"
                        }
                        },
                    
                                                                {bidder: 'between',
                        params:{
                        w: 120,
                        h: 90,
                        s: 2874888,
                        cur: 'USD'
                        }
                        },
                    
                                            {
                        bidder: 'admixer',
                        params: {
                        zone:GetAdmixerZone(4,"49de4782-668d-4c14-b6b7-879d36dbe800","")
                        }
                        },
                                                                {bidder: 'oftmedia',
                        params:{
                        placementId : '21524369'
                        }
                        },
                                        
                                                                                                                                                {
                        bidder: 'richaudience',
                        params: {
                        pid:GetRichAudienceZone(4,"dr04jZ41ER",""),
                        supplyType:"site"
                        }
                        },
                                                                {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '24309'
                        }
                        }
                        },
                                                                                                    ]
                    },                    {
                    code: '26706',
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                    banner: {
                    sizes:
                    Getsize(20)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:24309,
                    adId:20,
                    country: window.bidder_geo
                    }
                    },
                                            {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '24309-123ru-net',
                        adUnitElementId: 'sas_26706',
                        placement: '20'
                        }
                        },
                                                                {bidder: 'improvedigital',
                        params:{
                        placementId: '22471779',
                                                }
                        },
                                                                                    {bidder: 'appnexus',
                        params:{
                        placementId: '14755885'
                        }
                        },
                                                                                            {
                            bidder: 'triplelift',
                            params: {
                            inventoryCode: 'MoneyTizer_MegaSky_HDX',
                            floor: 0.01
                            }
                            },
                                                                                        {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://123ru.net/',
                        inventory:{'siteid':['24309']},
                        keywords:[24309],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "24309-20"
                        }
                        },
                                                                                                                            {bidder: 'otm',
                        params: {
                        tid: "2387"
                        }
                        },
                    
                                                                {bidder: 'between',
                        params:{
                        w: 160,
                        h: 600,
                        s: 2874890,
                        cur: 'USD'
                        }
                        },
                    
                                            {
                        bidder: 'admixer',
                        params: {
                        zone:GetAdmixerZone(20,"cad37aef-f2d6-4181-9493-02a7c0d32a14","")
                        }
                        },
                                                                {bidder: 'oftmedia',
                        params:{
                        placementId : '21524369'
                        }
                        },
                                        
                                                                                                                                                {
                        bidder: 'richaudience',
                        params: {
                        pid:GetRichAudienceZone(20,"dhsxq5Yags",""),
                        supplyType:"site"
                        }
                        },
                                                                {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '24309'
                        }
                        }
                        },
                                                                                                    ]
                    },                    {
                    code: '30012',
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                    banner: {
                    sizes:
                    Getsize(28)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:24309,
                    adId:28,
                    country: window.bidder_geo
                    }
                    },
                                            {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '24309-123ru-net',
                        adUnitElementId: 'sas_30012',
                        placement: '28'
                        }
                        },
                                                                {bidder: 'improvedigital',
                        params:{
                        placementId: '22471775',
                                                }
                        },
                                                                                    {bidder: 'appnexus',
                        params:{
                        placementId: '14755886'
                        }
                        },
                                                                                            {
                            bidder: 'triplelift',
                            params: {
                            inventoryCode: 'MoneyTizer_MegaBannerBasse_HDX',
                            floor: 0.01
                            }
                            },
                                                                                        {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078316',
                        referrer:'https://123ru.net/',
                        inventory:{'siteid':['24309']},
                        keywords:[24309],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "24309-28"
                        }
                        },
                                                                                                                            {bidder: 'otm',
                        params: {
                        tid: "2386"
                        }
                        },
                    
                                                                {bidder: 'between',
                        params:{
                        w: 728,
                        h: 90,
                        s: 2874891,
                        cur: 'USD'
                        }
                        },
                    
                                            {
                        bidder: 'admixer',
                        params: {
                        zone:GetAdmixerZone(28,"2bce0dbf-a0fe-4a65-b877-e00a03f20e74","486cc8e4-2356-4080-ab09-e042e6fdd109")
                        }
                        },
                                                                {bidder: 'oftmedia',
                        params:{
                        placementId : '21524370'
                        }
                        },
                                        
                                                                                                                                                {
                        bidder: 'richaudience',
                        params: {
                        pid:GetRichAudienceZone(28,"YBFkbPC06v","UdEuI4IDYn"),
                        supplyType:"site"
                        }
                        },
                                                                {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '24309'
                        }
                        }
                        },
                                                                                                    ]
                    },                    {
                    code: '39287',
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                    banner: {
                    sizes:
                    Getsize(31)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:24309,
                    adId:31,
                    country: window.bidder_geo
                    }
                    },
                                            {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '24309-123ru-net',
                        adUnitElementId: 'sas_39287',
                        placement: '31'
                        }
                        },
                                                                {bidder: 'improvedigital',
                        params:{
                        placementId: '22471778',
                                                }
                        },
                                                                                    {bidder: 'appnexus',
                        params:{
                        placementId: '14755887'
                        }
                        },
                                                                                            {
                            bidder: 'triplelift',
                            params: {
                            inventoryCode: 'MoneyTizer_Billboard_HDX',
                            floor: 0.01
                            }
                            },
                                                                                        {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://123ru.net/',
                        inventory:{'siteid':['24309']},
                        keywords:[24309],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "24309-31"
                        }
                        },
                                                                                                                            {bidder: 'otm',
                        params: {
                        tid: "2387"
                        }
                        },
                    
                                                                {bidder: 'between',
                        params:{
                        w: 970,
                        h: 250,
                        s: 2874892,
                        cur: 'USD'
                        }
                        },
                    
                                            {
                        bidder: 'admixer',
                        params: {
                        zone:GetAdmixerZone(31,"cae65579-a2eb-40e9-9861-8b0a01e48aaf","4d8735e9-2641-49fc-90e3-65ca0d1a9a0b")
                        }
                        },
                                                                {bidder: 'oftmedia',
                        params:{
                        placementId : '21524369'
                        }
                        },
                                        
                                                                                                                                                {
                        bidder: 'richaudience',
                        params: {
                        pid:GetRichAudienceZone(31,"pnY1VJUABg","0pXPs5l0fx"),
                        supplyType:"site"
                        }
                        },
                                                                {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '24309'
                        }
                        }
                        },
                                                                                                    ]
                    },                    {
                    code: '26300',
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                    banner: {
                    sizes:
                    Getsize(2)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:24309,
                    adId:2,
                    country: window.bidder_geo
                    }
                    },
                                            {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '24309-123ru-net',
                        adUnitElementId: 'sas_26300',
                        placement: '2'
                        }
                        },
                                                                {bidder: 'improvedigital',
                        params:{
                        placementId: '22471304',
                                                }
                        },
                                                                                    {bidder: 'appnexus',
                        params:{
                        placementId: '21283227'
                        }
                        },
                                                                                            {
                            bidder: 'triplelift',
                            params: {
                            inventoryCode: 'MoneyTizer_PaveHaut_HDX',
                            floor: 0.01
                            }
                            },
                                                                                        {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://123ru.net/',
                        inventory:{'siteid':['24309']},
                        keywords:[24309],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "24309-2"
                        }
                        },
                                                                                                                            {bidder: 'otm',
                        params: {
                        tid: "2387"
                        }
                        },
                    
                                                                {bidder: 'between',
                        params:{
                        w: 300,
                        h: 300,
                        s: 4060465,
                        cur: 'USD'
                        }
                        },
                    
                                            {
                        bidder: 'admixer',
                        params: {
                        zone:GetAdmixerZone(2,"246b6661-fba0-4f7a-ae1e-6ab4c5ffd110","")
                        }
                        },
                                                                {bidder: 'oftmedia',
                        params:{
                        placementId : '21524369'
                        }
                        },
                                        
                                                                                                                                                                    {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '24309'
                        }
                        }
                        },
                                                                                                    ]
                    },];

            var format_criteo = {"1":"1228131","2":"1085565","3":"1095714","31":"1227263","4":"1085632","19":"1085566","20":"1085636","28":"1228130","15":"1085643"};
            tmzr.addAdUnits(videoAdUnit);
            tmzr.addAdUnits(nativeAdUnit);
            tmzr.addAdUnits(skinAdUnit);
            tmzr.addAdUnits(footerAdUnit);
            tmzr.addAdUnits(adUnits);
            if(window.moneytizergeo !== 'undefined' && (window.moneytizergeo == "SK" || window.moneytizergeo == "EG" || window.moneytizergeo == "EE" || window.moneytizergeo == "VN" || window.moneytizergeo == "CU" || window.moneytizergeo == "SD" || window.moneytizergeo == "HT" || window.moneytizergeo == "DZ" || window.moneytizergeo == "UY" || window.moneytizergeo == "PS" || window.moneytizergeo == "LB" || window.moneytizergeo == "AZ" || window.moneytizergeo == "MW" || window.moneytizergeo == "BW" || window.moneytizergeo == "RW" || window.moneytizergeo == "ET" || window.moneytizergeo == "LA" || window.moneytizergeo == "BI" || window.moneytizergeo == "NG" || window.moneytizergeo == "SY" || window.moneytizergeo == "MR" || window.moneytizergeo == "YE" || window.moneytizergeo == "TT" || window.moneytizergeo == "AO" || window.moneytizergeo == "ZW" || window.moneytizergeo == "LY" || window.moneytizergeo == "AF" || window.moneytizergeo == "PK" || window.moneytizergeo == "VE" || window.moneytizergeo == "IQ" || window.moneytizergeo == "BD" || window.moneytizergeo == "ML" || window.moneytizergeo == "TG" || window.moneytizergeo == "ID")){
            for (var i = 0; i < tmzr.adUnits.length; i++) {
            for(var j = tmzr.adUnits[i].bids.length -1; j >= 0 ; j--){
            if (tmzr.adUnits[i].bids[j].bidder == "improvedigital" || tmzr.adUnits[i].bids[j].bidder == "rubicon" || tmzr.adUnits[i].bids[j].bidder == "oftmedia") {
            tmzr.adUnits[i].bids.splice(j, 1);
            }
            }
            }
            }
            if(window.moneytizergeo !== 'undefined' && (window.moneytizergeo == "BR" || window.moneytizergeo == "US" || window.moneytizergeo == "RU" || window.moneytizergeo == "CA" || window.moneytizergeo == "MX" || window.moneytizergeo == "PE" || window.moneytizergeo == "CO" || window.moneytizergeo == "AR" || window.moneytizergeo == "CN" || window.moneytizergeo == "IN" || window.moneytizergeo == "ID" || window.moneytizergeo == "RS" || window.moneytizergeo == "CL" || window.moneytizergeo == "MA" || window.moneytizergeo == "TH" || window.moneytizergeo == "EC" || window.moneytizergeo == "AU" || window.moneytizergeo == "BO" || window.moneytizergeo == "VE" || window.moneytizergeo == "PH" || window.moneytizergeo == "PK" || window.moneytizergeo == "MK" || window.moneytizergeo == "MY" || window.moneytizergeo == "JP" || window.moneytizergeo == "PR" || window.moneytizergeo == "KP" || window.moneytizergeo == "GR" || window.moneytizergeo == "KZ" || window.moneytizergeo == "DZ" || window.moneytizergeo == "DO" || window.moneytizergeo == "HK" || window.moneytizergeo == "SG" || window.moneytizergeo == "BF" || window.moneytizergeo == "RE")){
            for (var i = 0; i < tmzr.adUnits.length; i++) {
            for(var j = tmzr.adUnits[i].bids.length -1; j >= 0 ; j--){
            if (tmzr.adUnits[i].bids[j].bidder == "adform") {
            tmzr.adUnits[i].bids.splice(j, 1);
            }
            }
            }
            }
            if(window.moneytizergeo !== 'undefined' && (window.moneytizergeo == "CO")){
            for (var i = 0; i < tmzr.adUnits.length; i++) {
            for(var j = tmzr.adUnits[i].bids.length -1; j >= 0 ; j--){
            if (tmzr.adUnits[i].bids[j].bidder == "connectad") {
            tmzr.adUnits[i].bids.splice(j, 1);
            }
            }
            }
            }
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            for (var i = 0; i < tmzr.adUnits.length; i++) {
            for(var j = tmzr.adUnits[i].bids.length -1; j >= 0 ; j--){
            if (tmzr.adUnits[i].bids[j].bidder == "richaudience" && tmzr.adUnits[i].code == "26325") {
            tmzr.adUnits[i].bids.splice(j, 1);
            }
            }
            }
            }
                            tmzr.enableAnalytics([{provider: 'adagio'},
                                ]);
            
            tmzr.setConfig({useBidCache: true,
                        "schain": {
            "validation": "off",
            "config": {
            "ver":"1.0",
            "complete": 1,
            "nodes": [
            {
            "asi":"themoneytizer.com",
            "sid":"24309",
            "hp":1
            }
            ]
            }
            },
            rubicon: {singleRequest: true},
            improvedigital: {singleRequest: true,usePrebidSizes:true},userSync: {
            filterSettings: {
            iframe: {
            bidders: '*',
            filter: 'include'
            },
            image: {
            bidders: '*',
            filter: 'include'
            }
            },
            userIds: [{
            name: "criteo"
            },
            {
            name: "quantcastId",
            },
            {
            name: "id5Id",
            params: {
            partner: 12
            },
            storage: {
            type: "cookie",
            name: "pbjs-id5id",
            expires: 45
            }
            },{
            name: "sharedId",
            params: {
            syncTime: 60
            },
            storage: {
            name: "sharedid",
            type: "cookie",
            expires: 28
            },
            }],syncsPerBidder: 50,syncDelay: 5000},enableSendAllBids: false, timeoutBuffer: 400 ,pubcid: {enable: true},disableAjaxTimeout: true, maxRequestsPerOrigin: 1,consentManagement: {
            gdpr: {
            cmpApi: 'iab',
            timeout: 20000,
            allowAuctionWithoutConsent: true
            }
            }});
            tmzr.bidderSettings = {
            onetag: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * 1.20*.9;
            },
            },
            otm: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * .013;
            },
            },
            oftmedia: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * .8;
            },
            },
            adform: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * .88;
            },
            },
            roix: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * .6;
            },
            },
            standard: {
            adserverTargeting: [{
            key: "hb_bidder",
            val: function(bidResponse) {
            if(bidResponse.bidderCode=="rubiconLite"){
            return "rubicon";
            }else if(bidResponse.bidderCode=="stickyadstv"){
            return "stickyads";
            }else{
            return bidResponse.bidderCode;
            }
            }
            }, {
            key: "hb_adid",
            val: function(bidResponse) {
            return bidResponse.adId;
            }
            },{
            key: "hb_height",
            val: function(bidResponse) {
            return bidResponse.height;
            }
            },
            {
            key: "hb_bid",
            val: function(bidResponse) {
            var cpm = bidResponse.cpm/1.18*1.2;
            if(bidResponse.adUnitCode == "video" || bidResponse.adUnitCode == "26328" || bidResponse.adUnitCode =="26325" || bidResponse.adUnitCode == "48311"){
            if (cpm < 0.10) {
            return (Math.floor(cpm * 50) / 50).toFixed(2);
            } else if (cpm < 5.00) {
            return (Math.floor(cpm * 20) / 20).toFixed(2);
            } else if (cpm < 10.00) {
            return (Math.floor(cpm * 2) / 2).toFixed(2);
            } else {
            return '10.00';
            }
            }else{
            return cpm;
            }
            }
            }]
            }
            };
                            tmzr.que.push(function() {

                // keep a reference to original renderAd function
                var w = window;
                w._clrm = w._clrm || {};
                if (!tmzr._r){
                //back up the original renderAd
                tmzr._r = tmzr.renderAd;
                }
                var renderAdBackup = tmzr._r || tmzr.renderAd;

                var config = w._clrm.prebid || {
                /* Enables sandboxing on a device group
                All:1 , Desktop:2, Mobile: 3, iOS: 4, Android: 5, Off: 0
                */
                sandbox: 0
                };

                if (w.confiant && w.confiant.settings) {
                config = w.confiant.settings;
                }

                var isGoogleFrame = function (c) {
                return c.tagName === 'IFRAME' && c.id && c.id.indexOf('sas_') > -1;
                }

                var shouldSandbox = function () {
                var uaToRegexMap = {
                "mobile": /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i,
                "ios": /(.+)(iPhone|iPad|iPod)(.+)OS[\s|\_](\d)\_?(\d)?[\_]?(\d)?.+/i,
                "android": /Android/i
                },
                sbStr = "" +config.sandbox;
                if (sbStr === "1") {
                // all environments
                return true;
                } else if (sbStr === "2") {
                // desktop
                return !navigator.userAgent.match(uaToRegexMap["mobile"]);
                } else if (sbStr === "3") {
                // mobile
                return navigator.userAgent.match(uaToRegexMap["mobile"]);
                } else if (sbStr === "4") {
                // ios only
                return navigator.userAgent.match(uaToRegexMap["ios"]);
                } else if (sbStr === "5") {
                // android
                return navigator.userAgent.match(uaToRegexMap["android"]);
                } else {
                return false;
                }
                }

                function appendChildOverwrite() {
                if (shouldSandbox()) {
                Node.prototype.appendChild = (function(original) {
                return function(child) {
                if (isGoogleFrame(child) && shouldSandbox() && !child.getAttribute('sandbox')) {
                                    child.setAttribute('sandbox', 'allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation');
                                child.setAttribute('data-forced-sandbox', true);
                }
                return original.call(this, child);
                };
                })(Node.prototype.appendChild);
                }
                return;
                }


                appendChildOverwrite();

                var isIEorEdge = window.navigator.userAgent.match(/(Trident\/7.0)|(edge)/i);
                // override renderAd
                tmzr.renderAd = function(doc, id) {
                if (doc && id) {
                try {

                // get tmzr bids
                var bids = [];
                var bidResponses = tmzr.getBidResponses();
                var bidResponseForAdUnit;
                for (var slot in bidResponses) {
                bids = bids.concat(bidResponses[slot].bids);
                bidResponseForAdUnit = tmzr.getBidResponsesForAdUnitCode(slot);
                for (var bidcache in bidResponseForAdUnit) {
                bids = bids.concat(bidResponseForAdUnit.bids);
                }
                }
                bids = bids.concat( tmzr.getHighestCpmBids());
                bids = tmzr.getAllWinningBids ? bids.concat( tmzr.getAllWinningBids()) : bids;
                bids = tmzr.getAllPrebidWinningBids ? bids.concat( tmzr.getAllPrebidWinningBids()) : bids;

                // lookup ad by ad Id (avoid ES6 array functions)
                var bid;
                var i;
                for (i = 0; i < bids.length; i++) {
                if (bids[i].adId === id) {
                bid = bids[i];
                break;
                }
                }

                if (!bid && tmzr.findBidByAdId) {
                bid = tmzr.findBidByAdId(id);
                }

                // Optional: list of bidders that don't need wrapping, array of strings, e.g.: ["bidder1", "bidder2"]
                var confiantExcludeBidders = ["moneytizer","criteo","teads","admixer","between"];

                // check bidder exclusion (avoid ES6 array functions)
                if (bid) {
                var excludeBidder = false;
                for (i=0; i< confiantExcludeBidders.length; i++) {
                if (bid.bidder === confiantExcludeBidders[i]) {
                excludeBidder = true;
                break;
                }
                }
                }


                if (bid && bid.ad && !excludeBidder) {
                // Neutralize document
                doc.write = doc.close = function() {};
                if (isIEorEdge) doc.open = doc.write;
                // call renderAd with our neutralized doc.write
                renderAdBackup(doc, id);
                // Restore document
                delete doc.write;
                delete doc.close;
                if (isIEorEdge) delete doc.open;
                var callback = function(blockingType, blockingId, isBlocked, wrapperId, tagId, impressionData) {
                console.log("w00t one more bad ad nixed.", arguments);
                };

                if (config.callback) {
                callback = config.callback;
                }

                var serializedCasprLayer = (function () {
                if (typeof getSerializedCaspr === 'undefined') {
                //for now both builds are supported v2(additional network call) and v3 (unified)
                return null;
                }
                return getSerializedCaspr();
                })();

                // do the actual ad serving and fall back on document.write if failure
                                    if (!confiantWrap(doc, bid, 'clarium.global.ssl.fastly.net', '6JazTGIJh-hokZ3Hzq9-29PxCyY', callback, serializedCasprLayer, config)) {
                                doc.write(bid.ad);
                doc.close();
                }

                return;
                }
                } catch (e) {
                console.error(e);
                }
                }

                // if bid.ad is not defined or if any error occurs, call renderAd to serve the creative
                renderAdBackup(doc, id);
                };

                });

            
            tmzr.requestBids({
            timeout: 3000,
            bidsBackHandler: function(bidResponses) {
            bid = tmzr.getHighestCpmBids('video')[0];
            window.vastUrl = bid && bid.vastUrl;
            window.targetingParams = tmzr.getAdserverTargeting();
            for (var property in window.targetingParams) {
            if (window.targetingParams.hasOwnProperty(property)) {
            whenFormatFctDefined(window, 'Adcall_'+property);
            }
            }

            }
            });
            });
            var counter_refresh = [];
            function Timeout(fn, interval) {
            var id = setTimeout(fn, interval);
            this.cleared = false;
            this.clear = function () {
            this.cleared = true;
            clearTimeout(id);
            };
            }
            var smart_prebid2 = {"26322":"55794","26300":"55789","26323":"55792","26324":"55798","26711":"55790","26706":"55795","30012":"55793","39287":"55791","50677":"55796","28108":"55797"};
            tmzr.getTrueHighestCpmBids = function(formatid) {
            var adid = tmzr.getAdserverTargeting(formatid)[formatid].hb_adid;
            var getBidResponsesForAdUnitCode = tmzr.getBidResponsesForAdUnitCode(formatid).bids;
            for(bid in getBidResponsesForAdUnitCode){
            if(getBidResponsesForAdUnitCode[bid].adId == adid) return [getBidResponsesForAdUnitCode[bid]];
            }
            return false;
            }
                            function refreshSlot(formatid,capping,viewability) {
                function checkBidderByName(arrayofbids,name){
                for(var i=0,l=arrayofbids.length;i<l;i++) if(arrayofbids[i].bidder="=" name) return arrayofbids[i]; null; } var arr_width="{26322:728,26300:300,26323:300,26324:120,26711:300,26706:160,28108:300,30012:728,39287:970,35:50677,51410:728,28108:300};" arr_height="{26322:90,26300:250,26323:600,26324:600,26711:250,26706:600,28108:150,30012:90,39287:250,35:50677,51410:90,28108:250};" strformatid="formatid.toString();" if(counter_refresh[formatid]="=" null ){ counter_refresh[formatid]="0;" }else{ < capping){ if(formatid="=26300" || formatid="=26711){" document.getElementById("sas_"+formatid).style.width="300px" ; document.getElementById("sas_"+formatid).style.height="250px" document.getElementById("sas_"+formatid).style.margin="auto" if((formatid="=26322" && (typeof window.md !="=" 'undefined' window.md.phone()="==" null)){ document.getElementById("sas_"+formatid).innerHTML tmzr.que.push(function() { if(window.moneytizergeo (window.moneytizergeo="=" "SK" window.moneytizergeo="=" "EG" "EE" "VN" "CU" "SD" "HT" "DZ" "UY" "PS" "LB" "AZ" "MW" "BW" "RW" "ET" "LA" "BI" "NG" "SY" "MR" "YE" "TT" "AO" "ZW" "LY" "AF" "PK" "VE" "IQ" "BD" "ML" "TG" "ID")){ for (var i="0;" tmzr.adUnits.length; i++) for(var j="tmzr.adUnits[i].bids.length" -1;>= 0 ; j--){
                if (tmzr.adUnits[i].bids[j].bidder == "improvedigital" || tmzr.adUnits[i].bids[j].bidder == "rubicon" || tmzr.adUnits[i].bids[j].bidder == "oftmedia") {
                tmzr.adUnits[i].bids.splice(j, 1);
                }
                }
                }
                }
                if(window.moneytizergeo !== 'undefined' && (window.moneytizergeo == "CO")){
                for (var i = 0; i < tmzr.adUnits.length; i++) {
                for(var j = tmzr.adUnits[i].bids.length -1; j >= 0 ; j--){
                if (tmzr.adUnits[i].bids[j].bidder == "connectad") {
                tmzr.adUnits[i].bids.splice(j, 1);
                }
                }
                }
                }
                if(window.moneytizergeo !== 'undefined' && (window.moneytizergeo == "BR" || window.moneytizergeo == "US" || window.moneytizergeo == "RU" || window.moneytizergeo == "CA" || window.moneytizergeo == "MX" || window.moneytizergeo == "PE" || window.moneytizergeo == "CO" || window.moneytizergeo == "AR" || window.moneytizergeo == "CN" || window.moneytizergeo == "IN" || window.moneytizergeo == "ID" || window.moneytizergeo == "RS" || window.moneytizergeo == "CL" || window.moneytizergeo == "MA" || window.moneytizergeo == "TH" || window.moneytizergeo == "EC" || window.moneytizergeo == "AU" || window.moneytizergeo == "BO" || window.moneytizergeo == "VE" || window.moneytizergeo == "PH" || window.moneytizergeo == "PK" || window.moneytizergeo == "MK" || window.moneytizergeo == "MY" || window.moneytizergeo == "JP" || window.moneytizergeo == "PR" || window.moneytizergeo == "KP" || window.moneytizergeo == "GR" || window.moneytizergeo == "KZ" || window.moneytizergeo == "DZ" || window.moneytizergeo == "DO" || window.moneytizergeo == "HK" || window.moneytizergeo == "SG" || window.moneytizergeo == "BF" || window.moneytizergeo == "RE")){
                for (var i = 0; i < tmzr.adUnits.length; i++) {
                for(var j = tmzr.adUnits[i].bids.length -1; j >= 0 ; j--){
                if (tmzr.adUnits[i].bids[j].bidder == "adform") {
                tmzr.adUnits[i].bids.splice(j, 1);
                }
                }
                }
                }
                if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
                for (var i = 0; i < tmzr.adUnits.length; i++) {
                for(var j = tmzr.adUnits[i].bids.length -1; j >= 0 ; j--){
                if (tmzr.adUnits[i].bids[j].bidder == "richaudience" && tmzr.adUnits[i].code == "26325") {
                tmzr.adUnits[i].bids.splice(j, 1);
                }
                }
                }
                }
                                tmzr.requestBids({
                adUnitCodes:[strformatid],
                bidsBackHandler: function() {

                                    sas.clean(formatid);
                    sas.clean(strformatid);
                    document.getElementById("sas_"+formatid).innerHTML = "";
                    var parentsas = window.parent.document.getElementById('sas_'+formatid) || window.top.document.getElementById('sas_'+formatid);

                    if(parentsas){
                    parentsas.innerHTML = "";
                    }
                                window.targetingParams = tmzr.getAdserverTargeting();
                sas.cmd.push(function() {
                tmzr.que.push(function() {
                bid = tmzr.getTrueHighestCpmBids(strformatid)[0];
                if (bid) {
                var hb_adid = window.targetingParams[strformatid].hb_adid;
                var sasBid = JSON.parse(JSON.stringify(bid));
                sasBid.cpm = window.targetingParams[strformatid].hb_bid;
                //console.log(window.targetingParams[strformatid]);
                bid.currency = bid.currency || "USD";
                }else{
                var sasBid = {};
                }
                sas.setHeaderBiddingWinner("sas_"+strformatid, sasBid);
                sas.render();

                });
                });
                if(window.targetingParams && !isEmpty(window.targetingParams[formatid]) && window.tm_getpublica == 1){
                var http = new XMLHttpRequest();
                var url = 'https://c.tmyzer.com/c/?s=24309&f='+tagsObject[formatid]['ad_id']+'&fi=2';
                http.open("GET", url, true);
                http.send();
                }
                window.targetingParams = window.targetingParams || [];
                sas.cmd.push(function() {
                sas.call("std", {
                tagId: 'sas_'+formatid,
                siteId: 279931,
                pageId: 1035006,
                formatId: formatid,
                timeout: 3000,
                schain:  "1.0,1!themoneytizer.com,24309,1,,"},
                {
                networkId: 1097, domain: "https://ww1097.smartadserver.com",onNoad: function() {
                window.targetingParams = tmzr.getAdserverTargeting();
                var myiframe = document.createElement("iframe");
                myiframe.frameBorder=0;
                myiframe.width=arr_width[formatid]+"px";
                myiframe.height=arr_height[formatid]+"px";
                myiframe.id="sas_iframe_"+formatid;
                myiframe.setAttribute("scrolling", "no");
                myiframe.setAttribute("marginheight", 0);
                myiframe.setAttribute("marginwidth", 0);
                myiframe.setAttribute("topmargin", 0);
                myiframe.setAttribute("leftmargin", 0);
                myiframe.setAttribute("allowtransparency", true);
                document.getElementById("sas_"+formatid).appendChild(myiframe);
                var hb_adid = window.targetingParams[formatid].hb_adid;
                var iframeDoc = myiframe.contentWindow.document;
                tmzr.renderAd(iframeDoc, hb_adid);

                }});
                });
                var http = new XMLHttpRequest();
                var url = 'https://c.tmyzer.com/c/?s=24309&f='+tagsObject[formatid]['ad_id']+'&fi=1';
                http.open("GET", url, true);
                http.send();
                }
                });
                });
                }
                }
                function refreshSlotFooter(formatid, capping) {
                var strformatid = formatid.toString();

                if (counter_refresh[formatid] == null) {
                counter_refresh[formatid] = 0;
                } else {
                counter_refresh[formatid] = counter_refresh[formatid] + 1;
                }
                if (counter_refresh[formatid] < capping) {
                tmzr.que.push(function () {
                tmzr.requestBids({
                adUnitCodes: [strformatid], bidsBackHandler: function () {
                document.getElementById("sas_" + formatid).innerHTML = "";
                var parentsas = window.parent.document.getElementById('sas_' + formatid) || window.top.document.getElementById('sas_' + formatid);
                if (parentsas) {
                parentsas.innerHTML = "";
                }

                window.targetingParams = tmzr.getAdserverTargeting();

                window.targetingParams[formatid] = window.targetingParams[formatid] || 0;
                if (window.targetingParams[formatid] == 0) {
                var moneybid = "";
                } else {
                var hb_adid = "hb_adid=" + window.targetingParams[formatid].hb_adid;
                var hb_pb = "hb_pb=" + window.targetingParams[formatid].hb_bid;
                var hb_bidder = "hb_bidder=" + window.targetingParams[formatid].hb_bidder;
                if (window.targetingParams[formatid].hb_height == "250") {
                var hb_format = "hb_format=" + formatid + "-1";
                } else {
                var hb_format = "hb_format=" + formatid;
                }
                var moneybid = ";" + hb_adid + ";" + hb_pb + ";" + hb_bidder + ";" + hb_format;
                }

                sas.refresh(formatid,{target:moneybid});

                var http = new XMLHttpRequest();
                var url = 'https://c.tmyzer.com/c/?s=24309&f=' + tagsObject[formatid]['ad_id'] + '&fi=1';
                http.open("GET", url, true);
                http.send();
                }
                });
                });
                }
                }
                        }
            var refreshVisibility48311 = function(){
                        var observers = [];
            var fetchAdsArea = document.querySelectorAll('*[id^="sas_"]');
            var slowBidder = 'teads';
            var adsAreaId =48311;
            var visibleRefreshRate =None;
            var invisibleRefreshRate =None;
            var adsCappingLimit = 50;
            var slowdown = 60000;
            var evt = {};
            evt.lastPos = 0;
            evt.lastTime = Date.now();
            window.adsArea48311= {};
            var visibilitySupport = false;
            if ('IntersectionObserver' in window) {
            visibilitySupport = true;
            }
            var refreshTimeTableVisible = {
            26322: 19000,
            26300: 18500,
            26323: 20000,
            26324: 21500,
            26711: 18500,
            26706: 23000,
            28108: 27000,
            30012: 23500,
            39287: 19500,
            50677: 21000,
            51410: 22000,
            26328: 45000
            };
            var refreshTimeTableInvisible = {
            26322: 36000,
            26300: 37000,
            26323: 49000,
            26324: 52000,
            26711: 47000,
            26706: 54000,
            28108: 56000,
            30012: 58000,
            39287: 60000,
            50677: 62000,
            51410: 57000,
            26328: 45000
            };

            //window.adsArea48311= el;
            window.adsArea48311.isVisible = false;
            window.adsArea48311.refreshTimer = Date.now();
            window.adsArea48311.formatId = adsAreaId;
            window.adsArea48311.refreshRate = refreshTimeTableVisible[adsAreaId];
            window.adsArea48311.capping = 1;
            window.adsArea48311.cappingLimit = adsCappingLimit;


            if (visibleRefreshRate != undefined) {
            refreshTimeTableVisible[adsAreaId] = visibleRefreshRate;
            }
            if (invisibleRefreshRate != undefined) {
            refreshTimeTableInvisible[adsAreaId] = invisibleRefreshRate;
            }

            if (visibilitySupport) {
            var option = {
            root: null,
            rootMargin: '0px',
            threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
            }
            var callback = function (entries, observer) {
            entries.forEach(entry => {
            if (Math.floor(entry.intersectionRatio * 100) > 50 && !window.adsArea48311.isVisible) {
            window.adsArea48311.isVisible = true;
            window.adsArea48311.refreshRate = refreshTimeTableVisible[adsAreaId];
            } else if (Math.floor(entry.intersectionRatio * 100) < 50 && window.adsArea48311.isVisible) {
            window.adsArea48311.isVisible = false;
            window.adsArea48311.refreshRate = refreshTimeTableInvisible[adsAreaId];
            }
            });
            };

            observers48311 = new IntersectionObserver(callback, option, true, 1000);
            observers48311.observe(document.querySelector("#sas_" + adsAreaId));

            } else {
            window.adsArea48311.lastPos = 0;
            window.adsArea48311.lastTime = Date.now();
            evt.scroll = window.addEventListener('scroll', function (e) {
            if ((Math.abs(window.adsArea48311.lastPos - window.scrollY) > 100) || (Date.now() - window.adsArea48311.lastTime > 200)) {
            window.adsArea48311.lastPos = window.scrollY;
            window.adsArea48311.lastTime = Date.now();
            var visibilitySensor = true;
            el = document.querySelector('#sas_48311')
            style = window.getComputedStyle(el);
            if (style.getPropertyValue('display') == 'none') {
            visibilitySensor = false;
            }
            if (style.getPropertyValue('opacity') < 0.8) {
            visibilitySensor = false;
            }
            if (el.parentElement) {
            style = window.getComputedStyle(el.parentElement);
            if (style.getPropertyValue('overflow') == 'hidden' || style.getPropertyValue('overflow-x') == 'hidden' || style.getPropertyValue('overflow-y') == 'hidden') {
            if (el.parentElement.getBoundingClientRect.width < el.getBoundingClientRect.width || el.parentElement.getBoundingClientRect.height < el.getBoundingClientRect.height) {
            visibilitySensor = false;
            }
            }
            }
            if (
            el.getBoundingClientRect().top + (el.getBoundingClientRect().height / 2) < 0 ||
            el.getBoundingClientRect().left < 0 ||
            el.getBoundingClientRect().right > (window.innerWidth || document.documentElement.clientWidth) ||
            el.getBoundingClientRect().bottom - (el.getBoundingClientRect().height / 2) > (window.innerHeight || document.documentElement.clientHeight)
            ) {
            visibilitySensor = false;
            }
            if (visibilitySensor && !window.adsArea48311.isVisible) {
            window.adsArea48311.isVisible = true;
            window.adsArea48311.refreshRate = refreshTimeTableVisible[adsAreaId];
            } else if (!visibilitySensor && window.adsArea48311.isVisible) {
            window.adsArea48311.isVisible = false;
            window.adsArea48311.refreshRate = refreshTimeTableInvisible[adsAreaId];
            }
            }
            observers.push(evt);
            });
            }

            refreshQueueManager48311 = function (formatId, capping) {
            window.adsArea48311.capping++;
            window.adsArea48311.refreshTimer = Date.now();
            if(formatId == 26328){
            refreshSlotFooter(48311, window.adsArea48311.capping);
            }else{
            refreshSlot(48311, window.adsArea48311.capping,window.adsArea48311.isVisible);
            }
            }
            setInterval(function(){loopChecker48311();}, 1000);
            loopChecker48311 = function() {
            el = window.adsArea48311;
            if (!isNaN(el.refreshRate) && el.capping < el.cappingLimit && el.formatId != '26328') {
            lastBidder48311 = {"bidderCode":undefined, "responseTimestamp":0};
            tmzr.getAllWinningBids().forEach(function(bid){
            if(bid.adUnitCode==el.formatId){
            if(bid.responseTimestamp > lastBidder48311.responseTimestamp){
            lastBidder48311 = bid;
            }
            }
            })
            window.adsArea48311.lastBidder = lastBidder48311;

            if ((window.adsArea48311.refreshTimer + el.refreshRate) < Date.now() && el.lastBidder.bidder !== slowBidder) {
            refreshQueueManager48311(el.formatId, el.capping);
            } else if ((el.refreshTimer + slowdown < Date.now() && el.lastBidder.bidder == slowBidder)) {
            refreshQueueManager48311(el.formatId, el.capping);
            }
            } else if (el.formatId != '26325' && el.formatId != '26328' && el.capping < el.cappingLimit) {

            lastBidder48311 = {"bidderCode":undefined, "responseTimestamp":0};
            tmzr.getAllWinningBids().forEach(function(bid){
            if(bid.adUnitCode==el.formatId){
            if(bid.responseTimestamp > lastBidder48311.responseTimestamp){
            lastBidder48311 = bid;
            }
            }
            })
            window.adsArea48311.lastBidder = lastBidder48311;

            if (window.adsArea48311.refreshTimer + 25000 < Date.now() && el.lastBidder.bidder !== slowBidder) {
            refreshQueueManager48311(el.formatId, el.capping);
            } else if ((window.adsArea48311.refreshTimer + slowdown < Date.now() && el.lastBidder.bidder == slowBidder)) {
            refreshQueueManager48311(el.formatId, el.capping);
            }
            } else if (el.formatId == '26328' && el.capping < el.cappingLimit) {

            lastBidder48311 = {"bidderCode":undefined, "responseTimestamp":0};
            tmzr.getAllWinningBids().forEach(function(bid){
            if(bid.adUnitCode==el.formatId){
            if(bid.responseTimestamp > lastBidder48311.responseTimestamp){
            lastBidder48311 = bid;
            }
            }
            })
            window.adsArea48311.lastBidder = lastBidder48311;

            if (window.adsArea48311.refreshTimer + el.refreshRate < Date.now()) {
            refreshQueueManager48311(el.formatId, el.capping);
            }
            }
            };
            }
                            if(typeof crtg_content === 'undefined'){var crtg_content = "";}
                var native_div = document.createElement("div");
                native_div.id = "sas_48311";
                setTimeout(function(){
                                    var paragraphs = document.querySelectorAll('p:not(.qc-cmp-title):not(.qc-cmp-main-messaging):not(.qc-cmp-link-text)');
                    var counter = paragraphs.length;
                    var temp = 0;
                    var myP = null;
                    var myPNumber = null;
                    var coeffFilterBegin = 0.1;
                    var coeffFilterEnd = 0.8;
                    var filterBegin = Math.ceil(coeffFilterBegin * counter);
                    var filterEnd = Math.ceil(counter - (coeffFilterEnd * counter));
                    var limitPargraphs = 4;

                    function convertHtmlToText(inputText) {
                    var regex = /(<([^>]+)>)/ig;
                    var returnText = "" + inputText;
                    returnText = returnText.replace(regex, "");
                    return returnText;
                    }

                    if (paragraphs != null && counter > limitPargraphs) {
                    for(var i = filterBegin; i < filterEnd; i++) {
                    var filteringParagraphs = convertHtmlToText(paragraphs[i].innerHTML);
                    var number = filteringParagraphs.split(' ').length;
                    if (temp </([^></l;i++)>