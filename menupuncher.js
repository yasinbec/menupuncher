// MenuPuncher v1.0.0 for jQuery
// =============
// Author: Ali Beceren
// Created: 2/14/2011
// Date: 10/08/2014
// Website: http://www.jenaldesign.com
// Description: Jenal Design 

(function($) {

	$.fn.menupuncher = function(options) {
		
		$(this).addClass("menupuncher");
		
		// Settings
		var settings = $.extend({
			color  : '#000000',
			textcolor  : '#FFFFFF',
			opacity  : '0.8',
			hovercolor: '#FFF'
		}, options);
			
		if ( settings.color ) {
			var colorx = settings.color;			
		}
		if ( settings.hovercolor ) {
			var hovercolorx = settings.hovercolor;			
		}
		if ( settings.opacity ) {
			var opacityx = settings.opacity;
		}
		if ( settings.textcolor ) {
			var textcolorx = settings.textcolor;
		}
		$('.menupuncher').hide();
												
		$('.pusher').click(function() {	
		
				$('.pusher').toggleClass('click');
															
									
				if($('.pusher').hasClass('click')){
					$(".menupuncher").wrap("<nav class='open'><div class='bg-cover'></div></nav>");
					
					$("body").bind("touchmove",function(e){e.preventDefault();});
					
					$('.menupuncher').show();
					
					$('.open').css("background-color",colorx).css('opacity', opacityx);
					$('.open li a').css("color",textcolorx);
					
					$(".open a").mouseover(function() {
						$(this).css("background-color",hovercolorx);
						$(this).css("color",colorx);
					}).mouseout(function() {
						$(this).css("background-color","transparent");
						$(this).css("color",textcolorx);
					});					
					
				}else{
					$(".menupuncher").unwrap().unwrap();
					
					$("body").unbind("touchmove",function(e){e.preventDefault();});
					
					$('.menupuncher').hide();
					
				}
												
				return false;
			});
		
		$(window).scroll( function() {
			if ($(window).scrollTop() > $('body').offset().top)
				$('.pusher').addClass('floating');
			else
				$('.pusher').removeClass('floating');
		} );
					
	}
	
	return false;
		
}(jQuery));	
