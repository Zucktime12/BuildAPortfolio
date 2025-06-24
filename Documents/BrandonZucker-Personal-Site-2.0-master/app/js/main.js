$('.js-modal-open').on('click', function() {
  var fadeSpeed = 300,
      modalTarget = '#' + $(this).attr('data-target');
  // e.preventDefault();
  $('body').css('overflow', 'hidden');
  $('body').append('<div class="js-modal-overlay"></div>');
  $('.js-modal-overlay').fadeIn(fadeSpeed);
  $(modalTarget).fadeIn(fadeSpeed).on('click', function(e) {
    e.stopPropagation();
  });

  modalResize();

  function modalResize() {
    var x = ( $(window).width() - $(modalTarget).outerWidth() ) / 2,
        y = ( $(window).height() - $(modalTarget).outerHeight() ) / 2;
    $(modalTarget).css({
      'top': y + 'px',
      'left': x + 'px'
    });
  }

  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      modalResize();
    }, 100);
  });

  $('.js-modal-overlay, .js-modal-close').on('click', function() {
    $(modalTarget).fadeOut(fadeSpeed);
    $('.js-modal-overlay').fadeOut(fadeSpeed, function() {
    	// e.preventDefault();
		$('body').css('overflow', 'auto');
     	$(this).remove();
    });
  });
});


