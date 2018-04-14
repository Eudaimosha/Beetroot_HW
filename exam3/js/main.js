$(document).ready(function () {

  // button back to top
  if ($("#button__page-up").length) {
    let scrollTrigger = 300; // px
    let backToTop = function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $("#button__page-up").addClass("is-visible");
      } else {
        $("#button__page-up").removeClass("is-visible");
      }
    };
    backToTop();
    $(window).scroll(function () { backToTop(); });
    $("#button__page-up").click(function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
          }, 700
        );
      }
    );
  }


  // open modal
  $(".video__btn--open-modal").click(function() {
    $('#modal').addClass('modal--show');
    $('body').addClass('hidden');
  });


  // close modal
  $('.modal__btn--close').click(function() {
    $('#modal').removeClass('modal--show');
    $('body').removeClass('hidden');
  });


  // close modal by clicking outside of modal content
  $(document).click(function (event) {
    if (!$(event.target).closest(".modal__wrapper, .video__btn--open-modal").length) {
      $("#modal").removeClass("modal--show");
      $('body').removeClass('hidden');
    }
  });

  // slick-slider
  $('.testimonials__slider').slick({
      dots: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      nextArrow: '<button type="button" class="slick-next"><p>вправо</p></button>',
      prevArrow: '<button type="button" class="slick-prev"> <p>вліво</p></button>',
  });

});