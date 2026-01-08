jQuery(document).ready(function ($) {

  /*
  Table of Contents:
   - NAV
   - OTHER
  */

  /* NAV */
  // mobile menu fix
  $('.header-link-item.has-dropdown').on('click', function () {
    var sibling = $(this).parent().siblings('.dropdown-item-wrap');
    if (sibling.hasClass('opened')) {
      sibling.removeClass('opened');
      sibling.find('.dropdown-item-links').css({
        opacity: '0',
        visibility: 'hidden',
        height: '0px',
      });
    }
  });
  

  /* OTHER */
  // chat toggle
  const chatExists = setInterval(function () {
    if ($('.chat-info-welcome').length) {
      clearInterval(chatExists);
      $('.btn-chat-close').addClass('show');
      if (window.location.href.indexOf('/es/') > -1) {
        $('.btn-chat-close').addClass('spanish');
        $('#sekure-connect-chat').addClass('spanish');
      }
    }
  }, 100);

  $('.btn-chat-close').on('click', function (event) {
    event.preventDefault();
    $('#sekure-connect-chat').addClass('hide-chat');
    $(this).removeClass('show');
  });
  
});
