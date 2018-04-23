$(document).ready(function() {

  $(window).scroll(function () {
      var scrollMenuTrigger = $('.header').height() - 60;
      if ($(this).scrollTop() > scrollMenuTrigger) {
          $('.nav').addClass('active');
      } else {
          $('.nav').removeClass('active');
      }
  });

  /* lazyload */
  var itemQuantity;
  if (window.matchMedia("(max-width: 980px)").matches) {
      itemQuantity = 4;
   } else {
      itemQuantity = 3;
   }
  $('.beneficial-list__item').hide();
  $('.beneficial-list__item').slice(0,itemQuantity).show();
  $('#loadMore').on('click', function(e){
    e.preventDefault();
    $('.beneficial-list__item:hidden').slice(0,itemQuantity).slideDown();
    if (!$('.beneficial-list__item:hidden').length) {
        $(this).hide();
    }
  });

  /* waypoint */
    $('.inverse-block')
    .waypoint(function(dir){
    if(dir==='down')
    $('.nav').addClass('in-active');
    } , {
    offset: 60
    })
    .waypoint(function(dir){
    if(dir==='down')
    $('.nav').removeClass('in-active');
    } , {
    offset: function() {
    return -($(this).height() - 60)
    }
    })
    .waypoint(function(dir){
    if(dir==='up')
    $('.nav').addClass('in-active');
    } , {
    offset: function() {
    return -($(this).height() - 60)
    }
    })
    .waypoint(function(dir){
    if(dir==='up')
    $('.nav').removeClass('in-active');
    } , {
    offset: -60
    });

  $('.menu-button a').on('click', function(e){
    e.preventDefault();
    $('.menu').toggleClass('active');
  });
  $('.menu a').on('click', function(e){
    $('.menu').removeClass('active');
  });

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false
  });

});