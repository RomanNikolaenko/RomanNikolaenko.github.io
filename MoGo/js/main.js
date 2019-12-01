// carousel
$('.carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  infinite: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false
    }
  }]
});

// accordion
var $uiAccordion = $('.service_main_accordion');

$uiAccordion.accordion({
  collapsible: true,
  heightStyle: 'content',

  activate: function activate(event, ui) {
    var newHeaderId = ui.newHeader.attr('id');

    if (newHeaderId) {
      history.pushState(null, null, '#' + newHeaderId);
    }
  },

  create: function create(event, ui) {
    var $this = $(event.target);
    var $activeAccordion = $(window.location.hash);

    if ($this.find($activeAccordion).length) {
      $this.accordion('option', 'active', $this.find($this.accordion('option', 'header')).index($activeAccordion));
    }
  }
});

$(window).on('hashchange', function (event) {
  var $activeAccordion = $(window.location.hash);
  var $parentAccordion = $activeAccordion.parents('.service_main_accordion');

  if ($activeAccordion.length) {
    $parentAccordion.accordion('option', 'active', $parentAccordion.find($uiAccordion.accordion('option', 'header')).index($activeAccordion));
  }
});

// stats
(function ($) {

  "use strict";

  var statSection = $(".stats"),
      stats = $(".stats_list_item_count");

  statSection.waypoint({

    handler: function (direction) {

      if (direction === "down") {

        stats.each(function () {
          var $this = $(this);

          $({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 4000,
            easing: 'swing',
            step: function (curValue) {
              $this.text(Math.ceil(curValue));
            }
          });
        });
      }

      this.destroy();
    },
    offset: "90%"

  });
})(jQuery);