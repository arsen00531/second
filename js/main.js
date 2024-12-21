

'use strict';

$(window).on('load', function() {

	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	$(".main-menu").slicknav({
        appendTo: '.header-section',
		allowParentLinks: true,
		closedSymbol: '<i class="fa fa-angle-right"></i>',
		openedSymbol: '<i class="fa fa-angle-down"></i>'
	});

	$('.slicknav_nav').prepend('<li class="header-right-warp"></li>');
    $('.header-right').clone().prependTo('.slicknav_nav > .header-right-warp');


	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	/*------------------
        Magnific Popup
    --------------------*/
    $('.video-play').magnificPopup({
        type: 'iframe'
    });

	$('#lc-submit').on('click', function(e){
		var lc_price    = $('#lc-price').val();
		var lc_interest = $('#lc-interest').val();
		var lc_dpay     = $('#lc-dpay').val();
		var weeks = 52;


		lc_price = lc_price - lc_dpay;

 
		var perc = (lc_price/100) * lc_interest;


		lc_price = (lc_price + perc);


		var weekly_pay = (lc_price / weeks).toFixed(2);


		if (!isNaN(weekly_pay)) {
			$('#lc-result').text('$' + weekly_pay);
		}
	})

})(jQuery);

