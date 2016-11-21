$(document).ready(function() {
	$('input[type="file"]').ezdz({
		text: 'перетащите фото сюда',
		validators: {
			maxWidth:  5000,
			maxHeight: 2000,
			maxNumber: 6
		}
	});
	//WELCOME-SCREEN AND SECTION SLIDER INIT
	$welcomeSlider = $('#jsWelcomeSlider');
	$sectionSlider = $('#jsSectionSlider');

	$welcomeSlider.slick ({
		//autoplay: true,
		//autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true,
		customPaging: function(slider, i) {
			return '<span class="dot"></span>';
		}
	});

	$sectionSlider.slick ({
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: false
	});


	//NEW-PRODUCTS SLIDER INIT
	$newProductsSlider = $('.new-products__slider');
	$newProductsSlider.slick ({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<svg class="new-products__slider-next-arrow"><use xlink:href="#slider-left-arrow"></use></svg>',
		nextArrow: '<svg class="new-products__slider-prev-arrow"><use xlink:href="#slider-right-arrow"></use></svg>'
	});

	//TABS INIT
	$("#jsTabs" ).tabs({
		active: 0
	});

	//PACKERY CATALOG INIT
	$mMenuGrid = $('#jsPackeryCatalog');
	$mMenuGrid.packery({
		itemSelector: '.packery-catalog-grid__item',
		transitionDuration: '0.6s'
	});
	

	//PRODUCT-GALLERY INIT
$('.sp-wrap').smoothproducts();

	//SVG-SPRITES IN LOCALSTORAGE
		function spriteCache( window, document ){
			'use strict';

			var file     = 'img/icons-sprite.html',
				revision = 17;

			if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
				return true;

			var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
				request,
				data,
				insertIT = function()
      {
        document.body.insertAdjacentHTML( 'afterbegin', data );
      },
      insert = function()
      {
        if( document.body ) insertIT();
        else document.addEventListener( 'DOMContentLoaded', insertIT );
      };

    if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
    {
      data = localStorage.getItem( 'inlineSVGdata' );
      if( data )
      {
        insert();
        return true;
      }
    }

    try
    {
      request = new XMLHttpRequest();
      request.open( 'GET', file, true );
      request.onload = function()
      {
        if( request.status >= 200 && request.status < 400 )
        {
          data = request.responseText;
          insert();
          if( isLocalStorage )
          {
            localStorage.setItem( 'inlineSVGdata',  data );
            localStorage.setItem( 'inlineSVGrev',   revision );
          }
        }
      }
      request.send();
    }
    catch( e ){}

  };

  spriteCache( window, document );
});
