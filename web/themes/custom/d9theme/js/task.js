(function($, window, document) {
  Drupal.behaviors.task = {
    attach: function (context) {

      // Slick slider implementation.
      const sliderArray = $('.tab-pane');
      sliderArray.not('.slick-initialized').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              dots: true,
              arrows: false,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots: true,
              arrows: false,
              slidesToScroll: 1
            }
          }
        ]
      });

      // Tab driver for working with slick.
      $('.nav-tabs .nav-link').once('task').on('click', function () {
        sliderArray.css('opacity', '0');
        setTimeout(function () {
          sliderArray.slick('refresh');
          sliderArray.css('opacity', '1');
        }, 200);
      });

    }
  }
})(jQuery, window, document);
