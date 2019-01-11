$(function(){

	// TOPへ戻る
	var topBtn = $('.layout--foot_pagetop');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('body').addClass("scroll");
			topBtn.fadeIn();
		} else {
			$('body').removeClass("scroll");
			topBtn.fadeOut();
		}
	});

	//スクロールしてトップ
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	/* mouseover */
	$('.ov').hover(
		function(){
			$(this).animate({ opacity: 0.5},200);
		},
		function(){
			$(this).animate({ opacity: 1},200);
		}
	);

	/* mouseover */
	$('.ovv').hover(
		function(){
			$(this).animate({ opacity: 0},200);
		},
		function(){
			$(this).animate({ opacity: 1},200);
		}
	);

	/*画像切り替え*/
	var $setElem0 = $('.change_lg'),
	pcName0 = '_pc',
	spName0 = '_sp';
	$setElem0.each(function(){
		var $this = $(this);
		function imgSize(){
			if(window.innerWidth > 1200) {
				$this.attr('src',$this.attr('src').replace(spName0,pcName0)).css({visibility:'visible'});
			} else {
				$this.attr('src',$this.attr('src').replace(pcName0,spName0)).css({visibility:'visible'});
			}
		}
		$(window).resize(function(){imgSize();});
		imgSize();
	});

	var $setElem1 = $('.change_mb'),
	pcName1 = '_pc',
	spName1 = '_sp';
	$setElem1.each(function(){
		var $this = $(this);
		function imgSize(){
			if(window.innerWidth > 991) {
				$this.attr('src',$this.attr('src').replace(spName1,pcName1)).css({visibility:'visible'});
			} else {
				$this.attr('src',$this.attr('src').replace(pcName1,spName1)).css({visibility:'visible'});
			}
		}
		$(window).resize(function(){imgSize();});
		imgSize();
	});

	var $setElem2 = $('.change_sm'),
	pcName2 = '_pc',
	spName2 = '_sp';
	$setElem2.each(function(){
		var $this = $(this);
		function imgSize(){
			if(window.innerWidth > 767) {
				$this.attr('src',$this.attr('src').replace(spName2,pcName2)).css({visibility:'visible'});
			} else {
				$this.attr('src',$this.attr('src').replace(pcName2,spName2)).css({visibility:'visible'});
			}
		}
		$(window).resize(function(){imgSize();});
		imgSize();
	});

	var $setElem3 = $('.change_xs'),
	pcName3 = '_pc',
	spName3 = '_sp';
	$setElem3.each(function(){
		var $this = $(this);
		function imgSize(){
			if(window.innerWidth > 500) {
				$this.attr('src',$this.attr('src').replace(spName3,pcName3)).css({visibility:'visible'});
			} else {
				$this.attr('src',$this.attr('src').replace(pcName3,spName3)).css({visibility:'visible'});
			}
		}
		$(window).resize(function(){imgSize();});
		imgSize();
	});

	//ページ内リンクアニメーション
	 $('a[href^=#]').click(function() {
		var speed = 800;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
 	});

	//スマホ時メニュー開閉
	$('#btn_open').click(function(){
		$('#base').toggleClass('open');//ドロワー用
		$('.layout--main_navi').slideToggle();//ドロップダウン用
	});
	
	$('.layout--head_menu_back-sp').click(function(){
		$('#base').toggleClass('open');//ドロワー用
		$('#main_navi').slideToggle();//ドロップダウン用
	});
	
	

	//サブメニュー開閉
	$('.layout--main_navi .toggle').click(function() {
		$(this).parent('dt').next('dd').slideToggle();
		$(this).toggleClass('active');
	});

	//タブ
	jQuery(".tab_navi li").click(function() {
		var index = jQuery('.tab_navi .tab').index(this);
		jQuery(".tab_content .tab_page").css('display','none');
		jQuery(".tab_content .tab_page").eq(index).css('display','block');
		jQuery(".tab_navi li").removeClass('active');
		jQuery(this).addClass('active');
	});
});
//文章三点リーダー
(function($){
	$.fn.textovf = function(options) {
		// デフォルト設定
		var defaults = {
			row: 1
		};
		var opts = $.extend({}, defaults, options);
		var $target, $clone, $temp, targetHeight, _tempStr;

		// プラグインの適応開始
		this.each(function(){
			$target = $(this);
			html = $target.html();
			$clone = $target.clone();
			row = opts.row;
			$clone
			.css({
				display: 'none',
				position : 'absolute',
				overflow : 'visible'
			})
			.width($target.width())
			.height('auto');
			$target.after($clone);
			var $temp = $clone.clone();
			var _tempStr = "";
			for (var i=0; i<row; i++) {
				_tempStr += "あ<br>";
			}
			$temp.html(_tempStr);
			$target.after($temp);
			var targetHeight = $temp.height();
			$temp.remove();
			while((html.length > 0) && ($clone.height() > targetHeight)) {
				html = html.substr(0, html.length - 1);
				$clone.html($('<span>' + html + '</span>').html() + '<span>' + '...' + '</span>');
			}
			$target.html($clone.html());
			$clone.remove();
		});
	};
})(jQuery);

//高さ調整
$(function(){
	
	$(window).on('load resize',function(){
		matchHeightAction();
	});
});
function matchHeightAction(){
	$('.height-1').matchHeight();
	$('.height-2').matchHeight();
	$('.height-3').matchHeight();
	$('.height-4').matchHeight();
	$('.height-5').matchHeight();
	$('.height-6').matchHeight();
	$('.height-7').matchHeight();
	$('.height-8').matchHeight();
	$('.height-9').matchHeight();
	$('.height-10').matchHeight();
}
(function(jQuery) {
	jQuery.fn.tile = function(columns) {
		var tiles = [], max, c, last = this.length - 1;
		if(columns == null) columns = this.length;
		return this.each(function(i) {
			c = i % columns;
			tiles[c] = jQuery(this);
			if(c == 0 || tiles[c].height() > max) max = tiles[c].height();
			if(i == last || c == columns - 1) jQuery.each(tiles, function(i, t) { t.height(max); });
		});
	}
})(jQuery);
jQuery(window).on('load resize', function(){
	jQuery(".height-a-1").tile();
	jQuery(".height-a-2").tile();
	jQuery(".height-a-3").tile();
	jQuery(".height-a-4").tile();
	jQuery(".height-a-5").tile();
});

$(function(){
	var ua = navigator.userAgent;
	var os;
	var ver;
	var browser;
	var ie;

	//OS、端末判定
	if (ua.match(/Win(dows )?NT 6\.1/)) {
		os = 'win7';
	} else if (ua.match(/Win(dows )?NT 6\.0/)) {
		os = 'winVista';
	} else if (ua.match(/Win(dows )?(NT 5\.1|XP)/)) {
		os = 'winXp';
	} else if (ua.match(/Mac|PPC/) && ua.search(/iPhone|iPod|iPad/) == -1) {
		os = 'mac';
	} else if (ua.search(/iPhone/) != -1) {
		os = 'iphone';
	} else if(ua.search(/iPad/) != -1){
		os = 'ipad';
	} else if(ua.search(/Android/) != -1){
		os = 'android';
		if( ua.search(/Android 2/) != -1 ) { ver = 'ver_2'; }
		if( ua.search(/Android 3/) != -1 ) { ver = 'ver_3'; }
		if( ua.search(/Android 4/) != -1 ) { ver = 'ver_4'; }
	}
	//ブラウザ判定
	if(ua.match(/msie/i) || ua.match(/Trident/)){
			ie = "IE";

		if(ua.match(/msie 10/i)) {
			browser = "IE10";
		} else if(ua.match(/msie 9/i)) {
			browser = "IE9";
		} else if(ua.match(/msie 8/i)){
			browser = "IE8";
		} else if(ua.match(/msie 7/i)){
			browser = "IE7";
		} else if(ua.match(/msie 6/i)){
			browser = "IE6";
		}
	}else if(ua.match(/firefox/i)){
		browser = "firefox";
	} else if(ua.match(/opera/i)){
		browser = "opera";
	} else if(ua.match(/netscape/i)){
		browser = "netscape";
	} else if(ua.match(/safari/i)){
		if(ua.match(/chrome/i)){
			browser = "chrome";
		} else {
			browser = "safari";
		}
	}
	$('body').addClass(os).addClass(browser).addClass(ver);
	if(ie) $('body').addClass(ie);
});

if ((navigator.userAgent.indexOf('iPhone') > 0) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    }else{
        document.write('<meta name="viewport" content="width=1200, viewport-fit=cover">');
    }