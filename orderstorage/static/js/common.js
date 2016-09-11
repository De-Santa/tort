$(document).ready(function() {
  //MAIN MENU INIT
  $mMenuGrid = $('#jsMainMenu')
    $mMenuGrid.packery({
      itemSelector: '.packery-grid-item',
    });

  $mMenuGrid.hide();
  //MAIN MENU SHOW-HIDE//
  $mMenuBtn = $('#jsMenuBtn');
  $mainMenu = $('#jsMainMenu');
  
  $mMenuBtn.on('click',function(){
    if ($mMenuBtn.hasClass('active')){
      $mMenuBtn.removeClass('active');
      $mMenuGrid.hide();
    }
    else {
      $mMenuBtn.addClass('active');
      $mMenuGrid.show();     
      $mMenuGrid.packery();
    }
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
});
