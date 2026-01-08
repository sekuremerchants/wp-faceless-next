import $ from 'jquery';

// hide hidden fields parents
var formHiddenInputs = setInterval(function(){
  if($('.hbspt-form').length){
    $('.hbspt-form').find('input[type=hidden]').each(function(){
      $(this).parents('fieldset').css('display','none');
    });

    $('.hbspt-form input[name=page_url]').val(window.location.href);

    // /english-sales-jobs-in-montreal
    if($('body').hasClass('postid-38405')){
      $('input[name=utm_campaign]').val('Careers - English sales jobs in Montreal');
      $('input[name=utm_source]').val('ppc');
      $('input[name=utm_medium]').val('landing page');
      $('input[name=utm_term]').val('montreal-recruitment');
      $('input[name=utm_content]').val('form-submission');
    }

    clearInterval(formHiddenInputs);
  }
});

/*$(document).on('load', '.hbspt-form input[name=page_url]', function(){
  $('.hbspt-form input[name=page_url]').val(window.location.href);
});
*/

// hubspot submit button
var hubspotSubmitButtonStyles = setInterval(function () {
  if ($('div.hs_submit').length > 0) {
    $('div.hs_submit').addClass('hover-styles');
    $('div.hs_submit').each(function () {
      if (!$(this).parents('#footer').length && !$(this).parents('.popup').length) {
        var submitWrap = $(this).find('.actions');
        var submit = $(this).find('input[type=submit]');
        var label = submit.val();
        submit.remove();

        var bgColour = 'section-color-white';

        if (
          $(this).parents('.callback-popup-form').length ||
          $(this).parents('.talk-to-us-block-popup-form').length ||
          $(this).parents('.form--container').length ||
          $(this).parents('.popup-form').length
        ) {
          var bgColour = 'section-color-blue';
        }

        submitWrap.append(
          '<button type="submit" class="hs-button primary large btn-default size-18-txt ltr-spc-pos-0_25 c-blue-1 btn-green-1 btn-offset-10 fw-700 ' +
            bgColour +
            '" value="' +
            label +
            '"><span class="btn-bg-el"></span><span class="btn-txt">' +
            label +
            '</span></button>',
        );
      }
    });
    clearInterval(hubspotSubmitButtonStyles);
  }
}, 500);

// Add Aria Labels to Hubspot forms
var hubspotFormsAriaLabels = setInterval(function () {
  if ($('.hbspt-form form').length) {
    let form = $('.hbspt-form form');
    form.removeAttr('id');
    let inputs = form.find('input');
    let selects = form.find('select');

    inputs.each(function (index) {
      if (
        $(this).attr('type') != 'hidden' ||
        $(this).attr('name') == 'page_url' ||
        $(this).attr('name') == 'g-recaptcha-response'
      ) {
        let inputID = $(this).attr('id') + '-' + index;
        var inputName = $(this).parents('.input').siblings('label').attr('placeholder');
        if(inputName == '') {
          var inputName = $(this).attr('name') + '-' + index;
        }

        $(this)
          .parents('.input')
          .siblings('label')
          .attr('aria-label', inputName);
        $(this).parents('.input').siblings('label').removeAttr('id');
        $(this).parents('.input').siblings('label').attr('for', inputID);
        $(this).attr('id', inputID);
      }
    });

    selects.each(function (index) {
      let inputID = $(this).attr('id') + '-' + index;
      var inputName = $(this).parents('.input').siblings('label').attr('placeholder');
      if(inputName == '') {
        var inputName = $(this).attr('name') + '-' + index;
      }

      $(this)
        .parents('.input')
        .siblings('label')
        .attr('aria-label', inputName);
      $(this).parents('.input').siblings('label').removeAttr('id');
      $(this).parents('.input').siblings('label').attr('for', inputID);
      $(this).attr('id', inputID);
    });

    clearInterval(hubspotFormsAriaLabels);
    //console.log('aria labels added to hubspot forms');
  }
}, 100);

// Hubspot errors listener, updates ul role attribute to list
/*
setInterval(function () {
  if ($('.hbspt-form ul').length > 0) {
    $('.hbspt-form ul').attr('role', 'list');
    $('.hbspt-form ul[role=list] li').attr('role', 'listitem');
  }
}, 250);
*/

// edit placeholder text for subscribe form in footer
var hubspotFormSubscribeEmailField = setInterval(function () {
  if ($('footer .hbspt-form input[name=email]').length) {
    // console.log('testing for email field on mobile');
    clearInterval(hubspotFormSubscribeEmailField);
    if ($('html').attr('lang') == 'es-US') {
      $('footer .hbspt-form input[name=email]').attr(
        'placeholder',
        'Suscríbete a nuestro boletín',
      );
    } else if ($('html').attr('lang') == 'fr-CA') {
      $('footer .hbspt-form input[name=email]').attr(
        'placeholder',
        'Inscrivez-vous à notre newsletter',
      );
    } else {
      $('footer .hbspt-form input[name=email]').attr(
        'placeholder',
        'Sign up for our newsletter',
      );
    }
  }
}, 100);

// survey section download guide popup button
$('.download-open-form-btn').on('click', function(e) {
  e.preventDefault();
  if ($('.newsletter-form .hbspt-form').length) {
    $('.newsletter-form .hbspt-form')
      .detach()
      .appendTo('.download-popup-form .form-wrap');
  }
});
$('.form-popup-close-btn').on('click', function(e) {
  if ($('.download-popup-form .hbspt-form').length) {
    $('.download-popup-form .form-wrap .hbspt-form')
      .detach()
      .appendTo('.contact-block .newsletter-form');
  }
});

const listenInputChange = (el) => {
  if ($(el).is(':visible')) {
    const input = $(el).attr('for');
    // console.log($(`#${input}`));
    $(`#${input}`).on('keyup', (inpt) => {
      // console.log('change', inpt, $(`#${input}`).val());
      // console.log(inpt.target.value);
      if (inpt.target.value) {
        $(el).addClass('filled');
      } else {
        $(el).removeClass('filled');
      }
    });
  }
};

const observeFormInput = (selector, className, listenInputChange) => {
  const targetNodes = document.querySelectorAll(selector);

  targetNodes.forEach((targetNode) => {
    if (!targetNode) {
      console.error('Target node not found');
      return;
    }

    const config = { childList: true, subtree: true };

    const callback = (mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          if (!targetNode.classList.contains(className)) {
            //console.log(className);
            targetNode
              .querySelectorAll('label')
              .forEach((el) => listenInputChange(el));
            targetNode.classList.add(className);
          }
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  });
};

if ($('.home-page-form').length) {
  var formCheck = setInterval(function(){
    if($('.home-page-form .hs-input').length && $('.home-page-form .hs-input').val() != ''){
      $('.home-page-form .hs-input').each(function(i){
        if($(this).val != ''){
          $(this).parents('.input').siblings('label').addClass('filled');
        }
      });
      clearInterval(formCheck);
    }
  }, 500);
  observeFormInput(
    '.form-contact-section-home .home-page-form:not(.sk-form-hbsp-ltd)',
    'sk-form-hbsp-ltd',
    listenInputChange,
  );
}
