$(function () {
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    if (scroll < 300) {
      $('#top_button').fadeOut(300);
    } else {
      $('#top_button').fadeIn(300);
    }
  }
  );

  $('#top_button').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800, 'swing');
  }
  );
});