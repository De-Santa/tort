$(document).ready(function() {

  $('input[type="file"]').ezdz({
    text: 'перетащите фото сюда',
    validators: {
        maxWidth:  5000,
        maxHeight: 2000,
        maxNumber: 6
    }
  });

  //TABS INIT
  $( "#tabs" ).tabs({
    active: 0
  });

  //PACKERY CATALOG INIT
  $mMenuGrid = $('#jsPackeryCatalog')
    $mMenuGrid.packery({
      itemSelector: '.packery-catalog-grid__item',
      transitionDuration: '0.6s',
    });

  //PORTFOLIO SLIDERS INIT
	$('.portfolio-slider-left').slick({
  	infinite: true,
  	slidesToShow: 1,
  	fade: true,
		cssEase: 'linear',
    nextArrow: '<i class="fa fa-caret-right"></i>',
    prevArrow: '<i class="fa fa-caret-left"></i>',
  	asNavFor: '.portfolio-slider-left-nav, .portfolio-slider-left-text',
	});	

	$('.portfolio-slider-left-nav').slick({
  	infinite: true,
  	slidesToShow: 3,
  	focusOnSelect: true,
    arrows: false,
  	asNavFor: '.portfolio-slider-left, .portfolio-slider-left-text',
	});

	$('.portfolio-slider-right').slick({
  	infinite: true,
  	slidesToShow: 1,
		fade: true,
		cssEase: 'linear',
    nextArrow: '<i class="fa fa-caret-right"></i>',
    prevArrow: '<i class="fa fa-caret-left"></i>',
  	asNavFor: '.portfolio-slider-right-nav,.portfolio-slider-right-text',
	});
	$('.portfolio-slider-right-nav').slick({
  	infinite: true,
    arrows: false,
  	slidesToShow: 3,
  	focusOnSelect: true,
  	asNavFor: '.portfolio-slider-right,.portfolio-slider-right-text',
	});

  $('.big-descr-text').slimScroll({
        height: '272px',
        touchScrollStep: 50,
  });

//SVG-SPRITES IN LOCALSTORAGE
  function spriteCache( window, document ){
    'use strict';

    var file     = 'img/icons-sprite.html',
      revision = 5;

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
