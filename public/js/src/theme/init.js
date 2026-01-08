import { isMobile } from './helpers/helper';
import 'is-in-viewport';

const init = () => {
  if (!$('body').hasClass('user-42')) {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';

      //Listen for unload event. This is triggered when leaving the page.
      //Reference: https://developer.mozilla.org/en-US/docs/Web/Events/unload
      window.addEventListener('unload', function (e) {
        //set scroll position to the top of the page.
        window.scrollTo(0, 0);
      });

      window.addEventListener('popstate', function (e) {
        var scrollTop = document.body.scrollTop;
        window.addEventListener('scroll', function (e) {
          document.body.scrollTop = scrollTop;
        });
      });
    }
  }

  function loadLandingsScripts() {
    var scripts = {
      'blog_css_afterload': '/wp-content/themes/sekure/assets/css/styles/blogs.css',
      'bootstrap_css_afterload': '/wp-content/themes/sekure/assets/css/styles/bootstrap.css',
      'blocks_css_afterload': '/wp-content/themes/sekure/assets/css/styles/blocks/blocks.css',
      'styles_css_afterload': '/wp-content/themes/sekure/assets/css/styles/style.css'
    };
    
    if($('body').hasClass('page-id-3152')) {
      scripts = {
        'blog_css_afterload': '/wp-content/themes/sekure/assets/css/styles/blogs.css',
        'bootstrap_css_afterload': '/wp-content/themes/sekure/assets/css/styles/bootstrap.css',
        'styles_css_afterload': '/wp-content/themes/sekure/assets/css/styles/style.css'
      };
    }

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

  if($('body').hasClass('page-id-3152')){
    if(window.innerWidth <= 1024){
      $('.header-logo').prop('src', $('.header-logo').data('src')).addClass('b-loaded');
    }
    if(document.readyState !== 'loading') {
      loadLandingsScripts();
      setTimeout(initOver, 3000);
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        loadLandingsScripts();
        setTimeout(initOver, 3000);
      });
    }
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

  $(() => {
    $('.sk-block').each((i, el) => {
      $(el).addClass('sk-block-' + i);
    });
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
  } else if ($('body.home').length) {
    $('.hero-section').css({
      paddingTop: $('#header').outerHeight(true) + 110,
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
