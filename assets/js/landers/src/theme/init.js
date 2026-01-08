import { isMobile } from './helpers/helper';
import 'is-in-viewport';

const init = () => {
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';

    //Listen for unload event. This is triggered when leaving the page.
    //Reference: https://developer.mozilla.org/en-US/docs/Web/Events/unload
    window.addEventListener('unload', function (e) {
      //set scroll position to the top of the page.
      let adjustedTopPosition = $(window).offset().top - 100;
      if (window.innerWidth > 600 && window.innerWidth < 1024) {
        adjustedTopPosition = adjustedTopPosition - 50;
      }

      $('html, body').animate({
          scrollTop: adjustedTopPosition,
      }, 100);
    });

    window.addEventListener('popstate', function (e) {
      var scrollTop = document.body.scrollTop;
      window.addEventListener('scroll', function (e) {
        document.body.scrollTop = scrollTop;
      });
    });
  }

  function loadLandingsScripts() {
    const scripts = {
      'bootstrap_css_afterload': '/wp-content/themes/sekure/assets/css/styles/bootstrap.css',
      'blocks_css_afterload': '/wp-content/themes/sekure/assets/css/styles/blocks/blocks.css',
      'landers_css_afterload': '/wp-content/themes/sekure/assets/css/styles/landers.css',
      'styles_css_afterload': '/wp-content/themes/sekure/assets/css/styles/style.css'
    };

    for (const id in scripts) {
      if (scripts.hasOwnProperty(id)) {
        const value = scripts[id];
        //console.log(`Key: ${id}, Value: ${value}`);
        var loadStyle = document.createElement('link');
        loadStyle.id = `${id}`;
        loadStyle.rel = 'stylesheet';
        loadStyle.media = 'all';
        loadStyle.href = window.location.origin + `${value}`;
        document.head.append(loadStyle);
      }
    }

    var hubspotFormScript = document.createElement('script');
    hubspotFormScript.id = 'hubspot_load_forms';
    hubspotFormScript.type = 'text/javascript';
    hubspotFormScript.src = 'https://js.hsforms.net/forms/embed/v2.js';
    document.head.append(hubspotFormScript);
  }

  function initOver(){
    if (!$('body.home').length || isMobile()) {
      $('body').css({
        paddingTop: $('#header').outerHeight(true) - 5,
      });
    }
    if (isMobile()) {
      $('.main-header .nav-wrap').css({
        paddingTop: $('#header').outerHeight(false) - 5,
      });
    } else {
      $('.main-header .nav-wrap').css({
        paddingTop: 'inherit',
      });
    }
    $('html').removeClass("init");
  }

  // load chat
  function loadChatWidget() {
    if ("https://wordpress-prod-ep.azureedge.net/cdn/" == false) return;
    ! function() {
        for (var t = ["twilio-chat.v4.min.js", "webchat-pilotConfig.js"], e = t.length - 1; e >= 0; e--) {
          var n = document.createElement("script");
          n.type = "text/javascript", n.defer = !0, n.src = "https://wordpress-prod-ep.azureedge.net/cdn/" +
              t[e];
          n.crossorigin = !0;
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(n, a)
        }
    }();
  }

  if(document.readyState !== 'loading') {
    console.log('before script loaded 1');
    loadLandingsScripts();
    setTimeout(initOver, 2500);
    // don't load chat for french pages, english careers, dev site
    if(!$('html[lang=fr-CA]').length && !$('body.page-id-2719').length && !window.location.host.includes('wordpress-dev-appsvc') && !window.location.host.includes('.local')) {
      setTimeout(loadChatWidget, 10e3);
    }
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      console.log('before script loaded 2');
      loadLandingsScripts();
      setTimeout(initOver, 2500);
      // don't load chat for french pages, english careers, dev site
      if(!$('html[lang=fr-CA]').length && !$('body.page-id-2719').length && !window.location.host.includes('wordpress-dev-appsvc') && !window.location.host.includes('.local')) {
        setTimeout(loadChatWidget, 10e3);
      }
    });
  }

  WindowType();

  $(window).on('resize', function () {
    WindowType();
  });

  window.currentVal = $('html').attr('data-window-type');

  calculateHeight();

  $('html').on('headerChanged', () => {
    calculateHeight();
  });
  $('html').on('windowTypeChanged', () => {
    setTimeout(() => {
      calculateHeight();
    }, 350);
  });

  $('.sk-block').each((i, el) => {
    $(el).addClass('sk-block-' + i);
  });

  inViewport('.sk-block', '0');
  inViewport('.sk-animated', '0');

  var position = $(window).scrollTop();

  $(window).on('scroll', function (e) {
    var scroll = $(window).scrollTop();
    var tolerance = $('#header').outerHeight(true);
    if (scroll > position) {
      tolerance = tolerance * -1 + -150;
    } else {
      tolerance += 100;
    }
    position = scroll;

    inViewport('.sk-block', tolerance);
    inViewport('.sk-animated', tolerance);
  });

  // images with no alt
  $('img:not([alt]), image:not(alt)').each((_, img) => {
    $(img).attr('alt', 'Decorative Image');
  });
};

function inViewport(target, tolerance) {
  tolerance = tolerance || '0';

  if ($(target).length !== 0) {
    $(`${target}:not(:in-viewport):visible`).each((i, el) => {
      if ($(el).hasClass('in-view') || !$(el).hasClass('not-in-view')) {
        $(el).removeClass('in-view');
        $(el).addClass('not-in-view');
        $(el).addClass('op-0');
      }
    });

    $(`${target}:in-viewport(${tolerance}):visible`).each((i, el) => {
      if (!$(el).hasClass('in-view')) {
        $(el).addClass('in-view');
        $(el).removeClass('op-0');
        $('*.op-0').removeClass('op-0');
        $(el).removeClass('not-in-view');
      }
    });
  }
}

function calculateHeight() {
  if (!$('body.home').length || isMobile()) {
    $('body').css({
      paddingTop: $('#header').outerHeight(true) - 5,
    });
  }
  if (isMobile()) {
    $('.main-header .nav-wrap').css({
      paddingTop: $('#header').outerHeight(false) - 5,
    });
  } else {
    $('.main-header .nav-wrap').css({
      paddingTop: 'inherit',
    });
  }
}

function WindowType() {
  if (window.innerWidth < 768) {
    $('html').attr('data-window-type', 'mobile');
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    $('html').attr('data-window-type', 'mobile');
  } else {
    $('html').attr('data-window-type', 'desktop');
  }

  if (window.currentVal !== $('html').attr('data-window-type')) {
    if (
      window.currentVal &&
      window.currentVal !== $('html').attr('data-window-type')
    ) {
      window.location.reload();
    }
    window.currentVal = $('html').attr('data-window-type');
  }
  // setTimeout(() => {
  $('html').trigger('windowTypeChanged');
  // }, 150);
}

export default init;
