// UI elements functionality
import $ from 'jquery';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { dropdownsHandler, lazyLoading, isMobile, scrollTo } from './helpers/helper';
import HeaderFunctionalitiesHandler from './ui/header';
// import 'intersection-observer';
// import { init } from './animations/global';

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

const checkForTables = () => {
  if (!$('.sk-block table').length) return;
  $('.sk-block table').each((i, e) =>
    $(e).wrap('<div data-scroll-container-inner class="table-wrapper"></div>'),
  );
};

// Blocks grid content collapse/show toggle
$(document).on('click', '.content-collapse', function(){
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

// Youtube video embeds using the youtube embed block, mostly used on blog posts
if($('.wp-block-embed-youtube').length || $('.wp-block-embed').length){
  var embed = $('.wp-block-embed-youtube');

  if(!embed.length){
    embed = $('.wp-block-embed');
  }

  console.log(embed);
  $(embed).each(function(){
    console.log($(this));
    console.log($(this).find('.wp-block-embed__wrapper').text());

    var videoTxt = $(this).find('.wp-block-embed__wrapper').text();

    if(videoTxt.indexOf('youtu.be') != -1){
      var videoID = videoTxt.split('youtu.be/');
      console.log(videoID);
      var url = videoID[1].trim();
      var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+url+'?si=fsXHquYUYbp7tIxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      $(this).find('.wp-block-embed__wrapper').empty().append(iframe);
    }
    
    if(videoTxt.indexOf('=') != -1){
      var videoID = videoTxt.split('=');
      console.log(videoID);
      var url = videoID[1].trim();
      var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+url+'?si=fsXHquYUYbp7tIxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      $(this).find('.wp-block-embed__wrapper').empty().append(iframe);
    }

    if(videoTxt.indexOf('embed') != -1){
      var videoID = videoTxt.split('/embed/');
      console.log(videoID);
      var url = videoID[1].trim();
      var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+url+'?si=fsXHquYUYbp7tIxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      $(this).find('.wp-block-embed__wrapper').empty().append(iframe);
    }

  });
}

const slidersInit = () => {
  if (!$('.swiper-trigger').length) return;

  ScrollTrigger.create({
    trigger: '.swiper-trigger',
    once: true,
    start: '0% 150%',
    onEnter: () => {
      import(
        /* webpackChunkName: 'chunks/blogs_sliders_init' */ './utils/sliders.js'
      ).then((module) => {
        new module.default();
      });
    },
  });
};

const skSliders = () => {
  if ($('.sk-slider').length) {
    import(
      /* webpackChunkName: 'chunks/blogs_slider_controller' */ './ui/blogSliderController.js'
    ).then((module) => {
      new module.init();
    });
  }

  if ($('.mb-table').length) {
    import(
      /* webpackChunkName: 'chunks/blogs_table_controller' */ './ui/responsiveTables.js'
    ).then((module) => {
      new module.init();
    });
  }
};

const pagesAnimationsInit = () => {
  const modulesArray = [];
  let modulesCount = 0;

  // global anims init
  modulesCount += 1;
  import(
    /* webpackChunkName: 'chunks/blog_global_animations' */ './animations/global.js'
  ).then((module) => {
    modulesArray.push({
      loaded: true,
      moduleObj: module.init,
    });
    $(window).trigger('moduleLoadedAnim');
  });
  
  /*
  if ($('.single-article-section').length) {
    modulesCount += 1;
    import(
      // webpackChunkName: 'chunks/article_animations' // './animations/article.js'
    ).then((module) => {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init,
      });
      $(window).trigger('moduleLoadedAnim');
    });
  }
  */

  if ($('.social-item').length) {
    modulesCount += 1;
    import(
      /* webpackChunkName: 'chunks/blogs_social_share' */ './utils/socialShare.js'
    ).then((module) => {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init,
      });
      $(window).trigger('moduleLoadedAnim');
    });
  }

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
  if (typeof target === 'undefined') return;
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

const skTOC = () => {
  if (!$('.table-of-contents').length) return;

  ScrollTrigger.create({
    trigger: '.table-of-contents',
    once: true,
    start: '0% 150%',
    onEnter: () => {
      import(/* webpackChunkName: 'chunks/blogs_toc' */ './ui/toc.js').then(
        (module) => {
          new module.init();
        },
      );
    },
  });
};

const skStars = () => {
  if (!$('.sk-star-rating').length) return;
  console.log('stars');
  ScrollTrigger.create({
    trigger: '.sk-star-rating',
    once: true,
    start: '0% 150%',
    onEnter: () => {
      import(
        /* webpackChunkName: 'chunks/blogs_star-rating' */ './ui/star-rating.js'
      ).then((module) => {
        new module.init();
      });
    },
  });
};

const checkForOpenDropdownsHandler = (item) => {
  let openedItems = item.parents('.faq-block').find('.opened').not(item);
  let preopenedItems = item
    .parents('section')
    .find('.preopened-item')
    .not(item);

  if (openedItems.length) {
    openedItems.each((i, e) => {
      let item = $(e);
      let target = item.find('.dropdown-content-wrap');

      item.removeClass('opened');

      dropdownsHandler(target, 'close');
    });
  }

  if (preopenedItems.length) {
    preopenedItems.each((i, e) => {
      let item = $(e);
      let target = item.find('.dropdown-content-wrap');

      item.removeClass('opened');
      setTimeout(() => item.removeClass('preopened-item'), 500);

      dropdownsHandler(target, 'close');
    });
  }
};
const faqDropdownHandler = (e, btn) => {
  e.stopPropagation();
  e.preventDefault();

  let item = btn.parents('.faq-question');
  let target = item.find('.dropdown-content-wrap');
  let parent = item.parents('.faq-questions-wrap');

  if (gsap.isTweening(target)) return;

  if (item.hasClass('preopened-item')) {
    item.removeClass('opened');
    setTimeout(() => item.removeClass('preopened-item'), 500);
    dropdownsHandler(target, 'close');
  } else if (!item.hasClass('opened')) {
    $(parent).find('.faq-question.open').removeClass('opened');
    $(parent).find('.dropdown-content-wrap').css('height', '0');
    item.toggleClass('opened');
    item.hasClass('opened')
      ? dropdownsHandler(target, 'open')
      : dropdownsHandler(target, 'close');
    checkForOpenDropdownsHandler(item);
  } else {
    item.removeClass('opened');
    dropdownsHandler(target, 'close');
  }
};
$('.faq-question').on('click', '.faq-question-title, .js-faq-dropdown-btn', (e) => faqDropdownHandler(e, $(e.currentTarget)));

const tableImagesAlignHandler = () => {
  if ($('.table-block table').length) {
    $('.table-block table img').parent().css('vertical-align', 'middle');
  }

  // ScrollTrigger.refresh();
};

/* CHAT
------------------------------------------------------------ */
$(document).on('click', '.twilio-chat-btn', (e) => {
  e.preventDefault();
  $('.Twilio-EntryPoint').trigger('click');
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
    $('.btn-chat-close').addClass('show');
    if(window.location.href.indexOf('/es/') > -1) {
      $('.btn-chat-close').addClass('spanish');
      $('#sekure-connect-chat').addClass('spanish');
    }
    clearInterval(chatExists);
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
    const src = $(item).data('bg-imageset');
    $(item).attr('style', `background-image: image-set("${src}")`);
  });

  // YouTube
  $('[data-video-embed-id]').on('click', (e) => {
    e.preventDefault();
    youtubeEmbedPopupHandler($(e.currentTarget));
  });

  // Vimeo
  $('[data-vimeo-embed-id]').on('click', (e) => {
    e.preventDefault();
    vimeoEmbedPopupHandler($(e.currentTarget));
  });

  // close chat
  $('.btn-chat-close').on('click', function(event){
    event.preventDefault();
    $('#sekure-connect-chat').addClass('hide-chat');
    $(this).removeClass('show');
  });
};


/* UI INIT
------------------------------------------------------------------ */
export const UI = () => {
  new HeaderFunctionalitiesHandler();
  lazyLoading();
  pagesUserInterfaceInit();
  pagesAnimationsInit();
  slidersInit();
  skSliders();
  skTOC();
  skStars();
  checkForTables();
  youtubeEmbedPopupHandler();
  vimeoEmbedPopupHandler();
  funcInBind();
  tableImagesAlignHandler();
};
