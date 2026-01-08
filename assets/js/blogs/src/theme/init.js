import { isMobile, lazyLoading } from './helpers/helper';
import 'is-in-viewport';

var classList = $('body').attr('class').split(/\s+/);
var pageIdClass = '';
var post_id;

$.each(classList, function(index, item) {
  if(item.includes('postid-')) {
    pageIdClass = item;
  }
});

if(pageIdClass != '') {
  var classArry = pageIdClass.split('-');
  post_id = classArry[1];
}

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

  function loadBlogScripts() {
    const scripts = {
      'blog_css_afterload': '/wp-content/themes/sekure/assets/css/styles/blogs.css',
      'bootstrap_css_afterload': '/wp-content/themes/sekure/assets/css/styles/bootstrap.css',
      'blocks_css_afterload': '/wp-content/themes/sekure/assets/css/styles/blocks/blocks.css',
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

    $.ajax({
      url : '/wp-content/themes/sekure/partials/blog-post-content.php',
      type : 'post',
      dataType : 'html',
      data : {
        post_id: post_id
      },
      success : function( response ) {
        //console.log(response);
        $('.article-content').prepend(response);
        setTimeout(function(){
          $('html').removeClass("init");
        }, 250);
      }
    });
    $.ajax({
      url : '/wp-content/themes/sekure/partials/blog-post-categories.php',
      type : 'post',
      dataType : 'html',
      data : {
        post_id: post_id
      },
      success : function( response ) {
        $('.article-aside .posts-categories').append(response);
      }
    });
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
    loadBlogScripts();

    console.log('before script loaded 1');
    
    setTimeout(function(){
      if($('#hubspot_form_js').length){
        console.log('hubspot script is present');
        $('#hubspot_form_js').prop('src', $('#hubspot_form_js').data('src'));

        $('script').each(function (index) {
          if ($(this).html().indexOf('hbspt.forms.create') != -1) {
            var scriptForm = document.createElement('script');
            scriptForm.innerHTML = $(this).html();
            scriptForm.id = 'reloaded_script_' + index;
            $(this).parent().append(scriptForm);
            if ($('head').find('.hbspt-form').length) {
              $('head').find('.hbspt-form').appendTo($(this).parent());
              console.log('form inserted');
            }
          }
        });
      } else {
        console.log('hubspot script length didnt work');
        $('#hubspot_form_js').prop('src', $('#hubspot_form_js').data('src'));

        $('script').each(function (index) {
          if ($(this).html().indexOf('hbspt.forms.create') != -1) {
            var scriptForm = document.createElement('script');
            scriptForm.innerHTML = $(this).html();
            scriptForm.id = 'reloaded_script_' + index;
            $(this).parent().append(scriptForm);
            if ($('head').find('.hbspt-form').length) {
              $('head').find('.hbspt-form').appendTo($(this).parent());
              console.log('form inserted');
            }
          }
        });
      }

      initOver();
    }, 2000);

    //setTimeout(initOver, 2500);
    // don't load chat for french pages, english careers, dev site
    if(!$('html[lang=fr-CA]').length && !$('body.page-id-2719').length && !window.location.host.includes('wordpress-dev-appsvc') && !window.location.host.includes('.local')) {
      setTimeout(loadChatWidget, 10e3);
    }
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      loadBlogScripts();

      console.log('before script loaded 2');

      setTimeout(function(){
        if($('#hubspot_form_js').length){
          console.log('hubspot script is present');
          $('#hubspot_form_js').prop('src', $('#hubspot_form_js').data('src'));

          $('script').each(function (index) {
            if ($(this).html().indexOf('hbspt.forms.create') != -1) {
              var scriptForm = document.createElement('script');
              scriptForm.innerHTML = $(this).html();
              scriptForm.id = 'reloaded_script_' + index;
              $(this).parent().append(scriptForm);
              if ($('head').find('.hbspt-form').length) {
                $('head').find('.hbspt-form').appendTo($(this).parent());
                console.log('form inserted');
              }
            }
          });
        } else {
          console.log('hubspot script length didnt work');
          $('#hubspot_form_js').prop('src', $('#hubspot_form_js').data('src'));

          $('script').each(function (index) {
            if ($(this).html().indexOf('hbspt.forms.create') != -1) {
              var scriptForm = document.createElement('script');
              scriptForm.innerHTML = $(this).html();
              scriptForm.id = 'reloaded_script_' + index;
              $(this).parent().append(scriptForm);
              if ($('head').find('.hbspt-form').length) {
                $('head').find('.hbspt-form').appendTo($(this).parent());
                console.log('form inserted');
              }
            }
          });
        }

        initOver();
      }, 2000);

      //setTimeout(initOver, 2500);
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
  inViewport('.content-block', '0');

  $('.article-content, .article-aside').addClass('in-view');
  $('.article-content, .article-aside').removeClass('op-0');
  $('.article-content, .article-aside').removeClass('not-in-view');

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
    inViewport('.author-image', tolerance);
    inViewport('.author-info', tolerance);
    inViewport('.related-articles', tolerance);
    inViewport('.content-block', tolerance);
    inViewport('.inner-pages-contact-section', tolerance);

    if($('html').scrollTop() > $('body').height() / 3.25 && !$('html').hasClass('ajax-content')) {
      $('html').addClass('ajax-content');
      $.ajax({
        url : '/wp-content/themes/sekure/partials/blog-post-related.php',
        type : 'post',
        dataType : 'html',
        data : {
          post_id: post_id
        },
        success : function( response ) {
          $('.single-article-section').append(response);
          $('.subscribe-newsletter-form script').each(function (index) {
            if ($(this).html().indexOf('hbspt.forms.create') != -1) {
              var scriptForm = document.createElement('script');
              scriptForm.innerHTML = $(this).html();
              scriptForm.id = 'reloaded_script_' + index;
              //$(this).parent().append(scriptForm);
              if ($('head').find('.hbspt-form').length) {
                $('head').find('.hbspt-form').appendTo($(this).parent());
                console.log('newsletter form inserted');
              }
            }
          });
        }
      });
      $.ajax({
        url : '/wp-content/themes/sekure/partials/blog-post-prefooter.php',
        type : 'post',
        dataType : 'html',
        data : {
          post_id: post_id
        },
        success : function( response ) {
          $('.single-article-section').after(response);
        }
      });
    }
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
    $('body').css({
      // paddingTop: 'inherit',
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

$(document).on('click', '.tldr-button', function(e){
  handleSummary(e);
});

async function handleSummary(e) {
  e.preventDefault();
  const summaryOutput = document.querySelector(".summary");
  console.log(summaryOutput);
  $('.blog-content').find('section').remove();
  $('.blog-content').find('picture').remove();
  $('.blog-content').find('.btn-default').remove();
  $('.blog-content').find('br').remove();
  $('.blog-content').find('p:empty').remove();
  var content = $('.blog-content').html();
  console.log(content);

  summaryOutput.innerHTML = "";

  try {
    const summarizer = await Summarizer.create({
      sharedContext: 'A general summary to help a user decide if the text is worth reading',
      type: 'tldr',
      length: 'short',
      format: 'markdown',
      outputLanguage: 'en',
      monitor(m) {
        m.addEventListener('downloadprogress', (e) => {
          console.log(`Downloaded ${e.loaded * 100}%`);
        });
      }
    });

    summaryOutput.textContent = "Generating summary...";

    const summary = await summarizer.summarize(content);

    summaryOutput.textContent = summary;

    $.ajax({
      url : '/wp-content/themes/sekure/partials/blog-post-summary-save.php',
      type : 'post',
      dataType : 'html',
      data : {
        post_id: post_id,
        summary: summary,
      },
      success : function( response ) {
        $('.article-tldr').append(response);
      }
    });
  } catch (e) {
    summaryOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}

export default init;
