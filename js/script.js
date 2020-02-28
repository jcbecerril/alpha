$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 0) {
      $('#cm-up').slideDown(300);
    } else {
      $('#cm-up').slideUp(300);
    }
  });
  
  $('#cm-up').on('click', function(){
    $('body, html').animate({
      scrollTop: 0
    }, 700);
    return false;
  });

});