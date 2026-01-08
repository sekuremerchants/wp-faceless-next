// UI elements functionality
import gsap from 'gsap';
import $ from 'jquery';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lazyLoading, isMobile, scrollTo } from './helpers/helper';
import 'intersection-observer';

// register gsap plugins
gsap.registerPlugin(ScrollTrigger);

// scrollable links
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.not('.lang-current')
.on('click', function (event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') ==
      this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      scrollTo(target);
    }
  }
  $('html').trigger('headerChanged');
});

// arrow down button
$(document).on('click', '.scroll-to-next-btn', function (e) {
  e.preventDefault();
  var target = $(this).parents('.sk-block').next();
  if(!$(target).length) {
    var target = $(this).parents('section').next();
  }

  scrollTo(target);
});

const scrollToSectionFromAnotherPage = () => {
  if (typeof window.location.href.split('#')[1] === 'undefined') return;
  let urlTarget = window.location.href.split('#')[1];
  var target = $(`[data-page-scroll-id="${urlTarget}"]`)[0];
  if (!$(target).length) {
    var target = $(`[id="${urlTarget}"]`)[0];
  }

  if (!$(target).length) return;

  scrollTo(target);
};

// Popup functionality
$(document).on('click', '[data-popup-id]', function(e){
  e.preventDefault();
  var $this = $(this);
  $this.attr('disabled', true);
  var popup_id = $this.data('popup-id');
  var form_heading = $this.data('popup-heading');
  var form_desc = $this.data('popup-desc');
  var include_form = true;

  if(popup_id == 34475 && $('.newsletter-form .hbspt-form').length) {
    include_form = false;
  }

  $.ajax({
    url : '/wp-content/themes/sekure/partials/popup-content.php',
    type : 'post',
    dataType : 'html',
    data : {
        popup_id: popup_id,
        form_heading: form_heading,
        form_desc: form_desc,
        include_form: include_form,
    },
    beforeSend: function () {
      $('.popup .popup-content').empty();
    },
    success : function( response ) {
      $('.popup .popup-content').append(response);

      if(popup_id == 34475 && $('.newsletter-form .hbspt-form').length){
        $('.newsletter-form .hbspt-form').detach().appendTo('.popup .popup-content');
        $('.popup .popup-content').addClass('download-form');
        $('.popup .popup-content .hbspt-form button[type=submit]').removeClass('section-color-white').addClass('section-color-blue');
      } else {
        const moveLoadedForm = setInterval(function () {
          if($('head .hbspt-form').length){
            $('head .hbspt-form input[name=page_url]').val(window.location.href);

            // /english-sales-jobs-in-montreal
            if($('body').hasClass('postid-38405')){
              console.log('this is the right page');
              $('input[name=utm_campaign]').val('Careers - English sales jobs in Montreal');
              $('input[name=utm_source]').val('ppc');
              $('input[name=utm_medium]').val('landing page');
              $('input[name=utm_term]').val('montreal-recruitment');
              $('input[name=utm_content]').val('form-submission');
            }

            if ($('head .hbspt-form div.hs_submit').length) {
              var submitWrap = $('head .hbspt-form div.hs_submit').find('.actions');
              var submit = $('head .hbspt-form div.hs_submit').find('input[type=submit]');
              var label = submit.val();
              submit.remove();

              if(label != undefined) {
                submitWrap.append(
                  '<button type="submit" class="hs-button primary large btn-default c-blue-1 btn-green-1 section-color-blue" value="' +
                    label +
                    '"><span class="btn-bg-el"></span><span class="btn-txt">' +
                    label +
                    '</span></button>',
                );
              }
            }

            if($('head .hbspt-form input[name=phone]').length){
              $('head .hbspt-form input[name=phone]').parents('.hbspt-form').addClass('phone-validate');
              $('.hbspt-form.phone-validate button.hs-button[type=submit]').attr('disabled', 'disabled');
            }

            $('head .hbspt-form').appendTo('.popup .popup-content');
            clearInterval(moveLoadedForm);
          }
        }, 500);
      }

      $('html').addClass('open-popup');
      $this.removeAttr('disabled');
    }
  });
});
$(document).on('click', '.popup-close-btn', function(){
  $('html').removeClass('open-popup');
  if ($('.download-form .hbspt-form').length) {
    $('.popup .popup-content .hbspt-form button[type=submit]').removeClass('section-color-blue').addClass('section-color-white');
    $('.download-form .hbspt-form').detach().appendTo('.contact-block .newsletter-form');
    $('.popup .popup-content').removeClass('download-form');
  }
  $('.popup .popup-content').empty();
});

// autoplay videos if hash in url
const autoplayVideos = () => {
  if (window.location.hash && window.location.hash.includes('video')) {
    let iframe = $('.article-text iframe');
    let iframeSrcNew = iframe.attr('src') + '?&autoplay=1';
    iframe.attr('src', iframeSrcNew);
  
    if ($('.landing-video-btn').length) {
      $('.landing-video-btn').click();
    }
  }
};

const checkForTables = () => {
  if (!$('.sk-block table').length) return;
  $('.sk-block table').each((i, e) =>
    $(e).wrap('<div data-scroll-container-inner class="table-wrapper"></div>'),
  );
};

// Blocks grid content collapse/show toggle
if($('.content-collapse').length) {
  $('.content-collapse').on('click', function(){
    $('.content-collapse').removeClass('visible');
    $('.content-collapsed').css('display','none').addClass('hidden');
    $(this).toggleClass('visible');
    var content = $(this).parents('.block-content').find('.content-collapsed');
    if(content.hasClass('hidden')) {
      content.slideDown().removeClass('hidden');
    } else {
      content.slideUp().addClass('hidden');
    }
  });
}

const slidersInit = () => {
  if ($('.swiper-trigger').length) {
    ScrollTrigger.create({
      trigger: '.swiper-trigger',
      once: true,
      start: '0% 150%',
      onEnter: () => {
        import(
          /* webpackChunkName: 'chunks/landers_sliders_init' */ './utils/sliders.js'
        ).then((module) => {
          new module.default();
        });
      },
    });
  } else {
    let count = 0;
    var slidersInitCheck = setInterval(function(){
      if ($('.swiper-trigger').length) {
        ScrollTrigger.create({
          trigger: '.swiper-trigger',
          once: true,
          start: '0% 150%',
          onEnter: () => {
            import(
              /* webpackChunkName: 'chunks/landers_sliders_init' */ './utils/sliders.js'
            ).then((module) => {
              new module.default();
            });
          },
        });
        console.log('swiper trigger found, interval cleared');
        clearInterval(slidersInitCheck);
      } else if(count >= 10){
        console.log('swiper trigger NOT found, interval cleared');
        clearInterval(slidersInitCheck);
      }
      count++;
    }, 1000);
  }
};

const skSliders = () => {
  if ($('.sk-slider').length) {
    import(
      /* webpackChunkName: 'chunks/landers_slider_controller' */ './ui/sliderController.js'
    ).then((module) => {
      new module.init();
    });
  } else {
    let count = 0;
    var slidersCheck = setInterval(function(){
      if ($('.sk-slider').length) {
        import(
          /* webpackChunkName: 'chunks/landers_slider_controller' */ './ui/sliderController.js'
        ).then((module) => {
          new module.init();
        });
        console.log('sk slider found, interval cleared');
        clearInterval(slidersCheck);
      } else if(count >= 10){
        console.log('sk slider NOT found, interval cleared');
        clearInterval(slidersCheck);
      }
      count++;
    }, 1000);
  }

  if ($('.mb-table').length) {
    import(
      /* webpackChunkName: 'chunks/landers_table_controller' */ './ui/responsiveTables.js'
    ).then((module) => {
      new module.init();
    });
  } else {
    let count = 0;
    var mobileTables = setInterval(function(){
      if ($('.mb-table').length) {
        import(
          /* webpackChunkName: 'chunks/landers_table_controller' */ './ui/responsiveTables.js'
        ).then((module) => {
          new module.init();
        });
        console.log('responsive tables found, interval cleared');
        clearInterval(mobileTables);
      } else if(count >= 10){
        console.log('responsive tables not found, interval cleared');
        clearInterval(mobileTables);
      }
      count++;
    }, 1000);
  }
};

const pagesAnimationsInit = () => {
  const modulesArray = [];
  let modulesCount = 0;

  // global anims init
  modulesCount += 1;
  import(
    /* webpackChunkName: 'chunks/landers_animations' */ './animations/landers.js'
  ).then((module) => {
    modulesArray.push({
      loaded: true,
      moduleObj: module.init,
    });
    $(window).trigger('moduleLoadedAnim');
  });

  $(window).on('moduleLoadedAnim', () => {
    let loadedModulesArray = [];

    modulesArray.forEach((e) => loadedModulesArray.push(e));
    if (
      loadedModulesArray.length == modulesCount &&
      loadedModulesArray.length !== 0
    ) {
      // setTimeout(() => {
      loadedModulesArray.map((e) => e.moduleObj());
      scrollToSectionFromAnotherPage();
      // }, 250);
    }
  });
};

const pagesUserInterfaceInit = () => {
  const modulesArray = [];
  let modulesCount = 0;

  if ($('.calculator-section').length) {
    modulesCount += 1;
    import(
      /* webpackChunkName: 'chunks/landers_calculator_page_ui' */ './ui/calculator.js'
    ).then((module) => {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init,
      });
      $(window).trigger('moduleLoadedUI');
    });
  } else {
    let count = 0; 
    var calculatorCheck = setInterval(function(){
      if ($('.calculator-section').length) {
        modulesCount += 1;
        import(
          /* webpackChunkName: 'chunks/landers_calculator_page_ui' */ './ui/calculator.js'
        ).then((module) => {
          modulesArray.push({
            loaded: true,
            moduleObj: module.init,
          });
          $(window).trigger('moduleLoadedUI');
        });
        //console.log('savings calculator exists, interval cleared');
        clearInterval(calculatorCheck);
      } else if(count >= 5){
        //console.log('savings calculator interval cleared without existing');
        clearInterval(calculatorCheck);
      }
      count++;
    }, 1000);
  }

  // landers ui init
  modulesCount += 1;
  import(/* webpackChunkName: 'chunks/landers_ui' */ './ui/landers.js').then(
    (module) => {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init,
      });
      $(window).trigger('moduleLoadedUI');
    },
  );

  $(window).on('moduleLoadedUI', () => {
    let loadedModulesArray = [];
    modulesArray.forEach((e) => loadedModulesArray.push(e));
    if (
      loadedModulesArray.length == modulesCount &&
      loadedModulesArray.length !== 0
    ) {
      setTimeout(() => {
        loadedModulesArray.map((e) => e.moduleObj());
      }, 250);
    }
  });

  if (document.addEventListener) {
    window.addEventListener('pageshow', function (event) {
        if (event.persisted || performance.getEntriesByType("navigation")[0].type === 'back_forward') {
            location.reload();
        }
    },
    false);
  }
};

const youtubeEmbedPopupHandler = (target) => {
  if (!target.attr('data-video-embed-id').length) return;
  $('html').addClass('show-embed-popup-wrap');
  let container = $('.embed-popup-wrap');
  let iframeContainer = container.find('.iframe-container');

  // console.log(target.attr('data-video-embed-id').length);

  let iframe = `
      <iframe src="https://www.youtube.com/embed/${target.attr(
        'data-video-embed-id',
      )}?rel=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

  iframeContainer.html(iframe);

  container.off('click.embedPopupClick').on('click.embedPopupClick', (e) => {
    if (
      !$(e.target).parents('.embed-content-wrap').length ||
      $(e.target).parents('.popup-close-btn').length ||
      $(e.target).hasClass('popup-close-btn')
    ) {
      $('html').removeClass('show-embed-popup-wrap');
      iframeContainer.empty();
    }
  });
};

const vimeoEmbedPopupHandler = (target) => {
  if (typeof target === 'undefined') return;
  if (!target.attr('data-vimeo-embed-id').length) return;
  $('html').addClass('show-embed-popup-wrap');
  let container = $('.embed-popup-wrap');
  let iframeContainer = container.find('.iframe-container');

  // console.log(target.attr('data-video-embed-id').length);

  let iframe = `
      <iframe src="https://player.vimeo.com/video/${target.attr(
        'data-vimeo-embed-id',
      )}?rel=0&autoplay=1" title="Vimeo video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

  iframeContainer.html(iframe);

  container.off('click.embedPopupClick').on('click.embedPopupClick', (e) => {
    if (
      !$(e.target).parents('.embed-content-wrap').length ||
      $(e.target).parents('.popup-close-btn').length ||
      $(e.target).hasClass('popup-close-btn')
    ) {
      $('html').removeClass('show-embed-popup-wrap');
      iframeContainer.empty();
    }
  });
};

const videoAutoplayEnlarge = () => {
  if (!$('.video-autoplay-enlarge').length) return;

  let section = $('.video-autoplay-enlarge');
  let iframeObject = section.find('.iframe-container iframe');
  let iframeSRC = iframeObject.attr('src');
  var iframe;

  if(iframeSRC.includes('vimeo')) {
    var iframe = `
      <iframe src="${iframeSRC}?rel=0&autoplay=1" title="Vimeo video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
  } else {

  }

  $('html').addClass('show-embed-popup-wrap');
  let container = $('.embed-popup-wrap');
  let iframeContainer = container.find('.iframe-container');

  iframeContainer.html(iframe);

  container.off('click.embedPopupClick').on('click.embedPopupClick', (e) => {
    if (
      !$(e.target).parents('.embed-content-wrap').length ||
      $(e.target).parents('.popup-close-btn').length ||
      $(e.target).hasClass('popup-close-btn')
    ) {
      $('html').removeClass('show-embed-popup-wrap');
      iframeContainer.empty();
    }
  });
};

// Comparison table
const comparisonTable = () => {
  $('.accent-column:first').addClass('first-accent-column');
  $('.accent-column:last').addClass('last-accent-column');
};

/*
const backgroundVideoHandler = () => {
  if ($('.background-video').length) {
    const videos = $('.background-video');

    videos.each((i, e) => {
      $(e).on('loadeddata', () => $(e).addClass('display-video'));
      $(e).attr('src', $(e).attr('data-src'));
    });

    const checkSizeHandler = (container) => {
      let valueHeight = Math.round((container.outerWidth() / 1920) * 1080);
      let valueWidth = Math.round((container.outerHeight() / 1080) * 1920);

      // console.log(valueHeight, 'valueHeight');
      // console.log(valueWidth, 'valueWidth');

      if (container.outerHeight() > valueHeight) {
        gsap.set(container.find('.background-video'), {
          height: container.outerHeight(),
          width: valueWidth,
        });
      } else {
        gsap.set(container.find('.background-video'), {
          width: container.outerWidth(),
          height: valueHeight,
        });
      }
    };
    videos.each((i, e) => checkSizeHandler($(e).parent()));
    $(window).on('resizeObserverTrigger', () => {
      videos.each((i, e) => checkSizeHandler($(e).parent()));
    });
  }
};
*/

const skStars = () => {
  if (!$('.sk-star-rating').length) return;
  console.log('stars');
  ScrollTrigger.create({
    trigger: '.sk-star-rating',
    once: true,
    start: '0% 150%',
    onEnter: () => {
      import(
        /* webpackChunkName: 'chunks/landers-star-rating' */ './ui/star-rating.js'
      ).then((module) => {
        new module.init();
      });
    },
  });
};

/* CHAT
------------------------------------------------------------ */
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

$(document).on('click', '.twilio-chat-btn', (e) => {
  e.preventDefault();
  $('.Twilio-EntryPoint').click();
});

$(window).on('load resize', function(){
  if ($('.sticky-contact').length && isMobile() && $(window).width() <= 550) {
    $('html').addClass('hide-twilio-chat-btn');
  } else {
    $('html').removeClass('hide-twilio-chat-btn');
  }
});

// chat toggle
const chatExists = setInterval(function () {
  if($('.chat-info-welcome').length) {
    clearInterval(chatExists);
    $('.btn-chat-close').addClass('show');
    if(window.location.href.indexOf('/es/') > -1) {
      $('.btn-chat-close').addClass('spanish');
      $('#sekure-connect-chat').addClass('spanish');
    }
  }
}, 500);

/* BINDS
------------------------------------------------------------------ */
const funcInBind = () => {

  // background images load
  $('.bg-image[data-bg-image]').each((_, item) => {
    const src = $(item).data('bg-image');
    $(item).css('background-image', `url(${src})`);
  });
  $('.bg-image[data-bg-imageset]').each((_, item) => {
    // console.log(item, 'item');
    const src = $(item).data('bg-imageset');
    // console.log(src, 'src');
    $(item).attr('style', `background-image: image-set("${src}")`);
  });

  // hero contact form sticky
  if ($('.contact-form-block').length > 0) {
    $('.sticky-contact').addClass('fixed-sticky');
  }

  // YouTube
  $(document).on('click', '[data-video-embed-id]', (e) => {
    e.preventDefault();
    youtubeEmbedPopupHandler($(e.currentTarget));
  });

  // Vimeo
  $(document).on('click', '[data-vimeo-embed-id]', (e) => {
    e.preventDefault();
    vimeoEmbedPopupHandler($(e.currentTarget));
  });

  // close chat
  $('.btn-chat-close').on('click', function(event){
    event.preventDefault();
    $('#sekure-connect-chat').addClass('hide-chat');
    $(this).removeClass('show');
  });

  $(window).on('load', () => {
    if($('.video-autoplay-enlarge').length) {
      videoAutoplayEnlarge();
    }
  });
};


/* UI INIT
------------------------------------------------------------------ */
export const UI = () => {
  checkForTables();
  //smoothScrollHandler();
  autoplayVideos();
  //new SplitTextGSAP();
  //loadRecaptchaScript();
  funcInBind();
  lazyLoading();
  slidersInit();
  skSliders();
  //skTOC();
  skStars();
  //backgroundVideoHandler();
  pagesUserInterfaceInit();
  pagesAnimationsInit();
  //customSelectInit();
  //popupForm();
  //contactsTabs();
  comparisonTable();
  //filterTrigger();
  //surveyBackBtn();
  //equipmentSurveyBackBtn();
  //twilioChatHandler();
  vimeoEmbedPopupHandler();
};
