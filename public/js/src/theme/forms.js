import $ from 'jquery';

$(() => {

  // hubspot fields alteration
  var hubspotFormsFields = setInterval(function(){
    if($('.hbspt-form').length){
      $('.hbspt-form').find('input[type=hidden]').each(function(){
        $(this).parents('fieldset').css('display','none');
      });
      if($('.form-content-tab .hbspt-form input[type=file]').length) {
        $('.form-content-tab .hbspt-form input[type=file]').attr('accept', '.doc, .docx, application/pdf');
      }
      clearInterval(hubspotFormsFields);
    }
  }, 100);

  // page url field fill
  var pageUrlInput = setInterval(function () {
    if ($('input[name=page_url]').length) {
      $('input[name=page_url]').val(window.location.href);
      clearInterval(pageUrlInput);
    }
  }, 100);

  var bestDaytoCallInput = setInterval(function () {
    if ($('input[name=best_day_to_call]').length) {
      if($('input[name=best_day_to_call]').val() != ''){
        $('input[name=best_day_to_call]').parents('.hs-fieldtype-date').find('label').hide();
        clearInterval(bestDaytoCallInput);
      }
    }
  }, 100);

  $(document).on('change', '.hbspt-form input[name=best_day_to_call]', function() {
    if($(this).val() != ''){
      $(this).parents('.hs-fieldtype-date').find('label').hide();
    } else {
      $(this).parents('.hs-fieldtype-date').find('label').show();
    }
  });

  $(document).on('change', '.form-content-tab .hbspt-form input[type=file]', function() {
    const file = $(this)[0].files[0];
    const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if(!allowedFileTypes.includes(file.type)){
      $(this).parents('.hs-form-field').append('<ul class="no-list hs-error-msgs inputs-list upload-notice" role="list"><li role="listitem"><label class="hs-error-msg hs-main-font-element">Please select a Microsoft Word or PDF file to upload.</label></li></ul>');
      $(this).val('');
      console.log('pdf or word docs, file is no good');
    } else {
      $('.upload-notice').remove();
      console.log('file passed the check');
    }
  });

  // hubspot submit button
  var hubspotSubmitButtonStyles = setInterval(function () {
    if ($('div.hs_submit input[type=submit]').length) {
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
    }
  }, 100);

  // Hubspot errors listener, updates ul role attribute to list
  /*
  setInterval(function () {
    if ($('.hbspt-form ul').length > 0) {
      $('.hbspt-form ul').attr('role', 'list');
      $('.hbspt-form ul[role=list] li').attr('role', 'listitem');
    }
  }, 100);
  */

  // edit placeholder text for subscribe form in footer
  var hubspotFormSubscribeEmailField = setInterval(function () {
    if ($('footer .hbspt-form input[name=email]').length) {
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
      var event = 'keyup';

      if($(`#${input}`).is('select')){
        var event = 'click';
      }

      $(`#${input}`).on(event, function(){
        if($(this).val() != ''){
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
    observeFormInput(
      '.form-contact-section-home .home-page-form:not(.sk-form-hbsp-ltd)',
      'sk-form-hbsp-ltd',
      listenInputChange,
    );
  }

  var blogFilterChoices = setInterval(function(){
    if($('.choices__item.choices__item--selectable:not(.choices__item--choice)').length){
      $('.choices__item.choices__item--selectable:not(.choices__item--choice)').each(function(){
        var text = $(this).text();
        text = text.replace('&amp;', '&');
        text = text.replace('Remove item', '');
        var button = '<button type="button" class="choices__button" aria-label="Remove item: '+ $(this).data('value') +'" data-button="">Remove item</button>';
        $(this).html(text + button);
      });
      // clearInterval(blogFilterChoices);
    }
  }, 100);
  
  $(document).on('click', '.choices__input', function(e){
    $('.choices__item.choices__item--choice').each(function(){
      var text = $(this).text();
      $(this).text(text.replace('&amp;', '&'));
    });
  });
});
