"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["/js/dist/theme-scripts/app"],{

/***/ "./assets/js/src/theme/ajax/phone-number-validation.js":
/*!*************************************************************!*\
  !*** ./assets/js/src/theme/ajax/phone-number-validation.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  // on contact pages load if the field is autofilled and hidden
  /*
  $('#tabs a').on('click', function(){
    if($('.hbspt-form.phone-validate input[name=phone]').val() != ''){
      $('.hbspt-form.phone-validate input[name=phone]').focus();
    }
  });
  */

  var hubspotSubmitButtonClick = setInterval(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('button.hs-button[type=submit]').length && jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=phone]').length) {
      //console.log('hubspot form phone number input');

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=phone]').parents('.hbspt-form').addClass('phone-validate');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form.phone-validate button.hs-button[type=submit]').attr('disabled', 'disabled');
      var errorMessage = '';
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('lang') == 'fr-CA') {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('page-id-32709') || jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('page-id-9388')) {
          errorMessage = 'Veuillez saisir un numéro de téléphone CA valide pour remplir le formulaire.';
        } else {
          errorMessage = 'Veuillez entrer un numéro de téléphone CA valide pour remplir le formulaire.';
        }
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('lang') == 'es-US') {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('page-id-30217') || jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('page-id-28057')) {
          errorMessage = 'Ingrese un número de teléfono de CA válido para completar el formulario.';
        } else {
          errorMessage = 'Ingrese un número de teléfono válido de US para completar el formulario.';
        }
      } else {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('page-id-2719') || jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('page-id-1526')) {
          errorMessage = 'Please enter a valid CA phone number to complete the form.';
        } else {
          errorMessage = 'Please enter a valid US phone number to complete the form.';
        }
      }
      var error = '<div class="phone-number-error submit-error mt-1"><ul class="no-list hs-error-msgs inputs-list mb-0" role="list"><li role="listitem"><label class="hs-error-msg hs-main-font-element c-green-1">' + errorMessage + '</label></li></ul></div>';

      // on page load if the field is autofilled
      /*
      if($('.hbspt-form.phone-validate input[name=phone]').val() != ''){
          $('.hbspt-form.phone-validate input[name=phone]').focus();
      }
      */

      // check the input's value
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form.phone-validate input[name=phone]').on('change input blur', function () {
        var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        $this.parent().append('<div class="loader white"></div>');

        // remove expected non numerical phone number characters
        var phone = $this.val().replace(/-/g, '').replace('(', '').replace(')', '');

        // check for test numbers
        if (phone != '5555555551' && phone != '5555555552' && phone != '5555555553' && phone != '5555555554') {
          // add country code if not entered
          if (phone.length == 10) {
            phone = '1' + phone;
          }

          // lookup full 11 digit phone number
          if (phone.length == 11) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
              url: '/wp-content/themes/sekure/partials/phone-number-check.php',
              type: 'post',
              dataType: 'html',
              data: {
                phone: phone
              },
              success: function success(response) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loader').remove();

                //console.log(response);

                // if US or Canadian number allow submit
                if (response == 'US' || response == 'CA') {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form.phone-validate button.hs-button[type=submit]').removeAttr('disabled');
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.phone-number-error').remove();
                } else {
                  if (response == 'failed') {
                    console.log('Phone number validation failed. Check API.');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form.phone-validate button.hs-button[type=submit]').removeAttr('disabled');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.phone-number-error').remove();
                  } else {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form.phone-validate button.hs-button[type=submit]').attr('disabled', 'disabled');
                    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.phone-number-error').length) {
                      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.phone-validate .hs_phone.hs-phone').append(error);
                    }
                  }
                }
              }
            });
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loader').remove();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form.phone-validate button.hs-button[type=submit]').attr('disabled', 'disabled');
            if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.phone-number-error').length && $this.parents('.hbspt-form').find('.hs-button[disabled]').length) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.phone-validate .hs_phone.hs-phone').append(error);
            }
          }
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loader').remove();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form.phone-validate button.hs-button[type=submit]').removeAttr('disabled');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.phone-number-error').remove();
        }
      });
      clearInterval(hubspotSubmitButtonClick);
    }
  }, 500);
});

/***/ }),

/***/ "./assets/js/src/theme/ajax/plugins-reload.js":
/*!****************************************************!*\
  !*** ./assets/js/src/theme/ajax/plugins-reload.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  function loadScripts() {
    console.log('loadScripts function called');
    // Hubspot loading forms script and load forms scripts
    var scriptFormsLoad = document.createElement('script');
    scriptFormsLoad.id = 'hubspot_load_forms';
    scriptFormsLoad.src = 'https://js.hsforms.net/forms/embed/v2.js';
    document.head.append(scriptFormsLoad);
    console.log('hubspot load forms script added');

    // Hotjar script
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#hotjar_reloaded').length == 0) {
      var hotjarScript = document.createElement('script');
      hotjarScript.id = 'hotjar_reloaded';
      hotjarScript.async = true;
      hotjarScript.innerHTML = "(function(h, o, t, j, a, r) {h.hj = h.hj || function() {(h.hj.q = h.hj.q || []).push(arguments)};h._hjSettings = {hjid: 3863711,hjsv: 6};a = o.getElementsByTagName('head')[0];r = o.createElement('script');r.async = 1;r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;a.appendChild(r);})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');";
      document.head.append(hotjarScript);
      console.log('hotjar script added');
    }

    // Google Tag Manager script
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#gtm_reloaded').length == 0) {
      var gtmScript = document.createElement('script');
      gtmScript.id = 'gtm_reloaded';
      gtmScript.async = true;
      gtmScript.innerHTML = "(function(w, d, s, l, i) {w[l] = w[l] || [];w[l].push({'gtm.start': new Date().getTime(),event: 'gtm.js'});var f = d.getElementsByTagName(s)[0],j = d.createElement(s),dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);})(window, document, 'script', 'dataLayer', 'G-TQK8B653YC');";
      document.head.append(gtmScript);
      console.log('GTM script added - G-TQK8B653YC');
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#gtm2_reloaded').length == 0) {
      var gtmScript = document.createElement('script');
      gtmScript.id = 'gtm2_reloaded';
      gtmScript.async = true;
      gtmScript.innerHTML = "(function(w, d, s, l, i) {w[l] = w[l] || [];w[l].push({'gtm.start': new Date().getTime(),event: 'gtm.js'});var f = d.getElementsByTagName(s)[0],j = d.createElement(s),dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);})(window, document, 'script', 'dataLayer', 'GTM-WVQLG62');";
      document.head.append(gtmScript);
      console.log('GTM script added - GTM-WVQLG62');
    }

    // Google Tag script
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#gtag_reloaded').length == 0) {
      var gtagScript = document.createElement('script');
      gtagScript.id = 'gtag_reloaded';
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-TQK8B653YC"';
      document.body.prepend(gtagScript);
      console.log('Google Tag script added - G-TQK8B653YC"');
    }
  }
  var ensSaveCheck = setInterval(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#ensSave').length) {
      console.log('ensSave exists!');
      clearInterval(ensSaveCheck);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#ensSave').on('click', function () {
        console.log('custom settings saved');
        loadScripts();
        var checkScriptFormsLoad = setInterval(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('script#hubspot_load_forms').length) {
            console.log('hubspot script loaded');
            clearInterval(checkScriptFormsLoad);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('script').each(function (index) {
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('hbspt.forms.create') != -1) {
                var scriptForm = document.createElement('script');
                scriptForm.innerHTML = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html();
                scriptForm.id = 'reloaded_script_' + index;
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().append(scriptForm);
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('head').find('.hbspt-form').length) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()('head').find('.hbspt-form').appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent());
                  console.log('form inserted');
                }
              }
            });
          }
        }, 100);

        // Trigger plugin reload
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          url: 'https://wordpress-dev-appsvc.azurewebsites.net/wp-content/themes/sekure/classes/sm-plugin-reload.php',
          type: 'post',
          success: function success(response) {
            console.log(response);
          },
          error: function error(response) {
            console.log(response);
          }
        });
      });
    }
  }, 100);
  var checkAcceptAll = setInterval(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#ensModalAcceptAll').length) {
      console.log('ensModalAcceptAll exists!');
      clearInterval(checkAcceptAll);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#ensModalAcceptAll').on('click', function () {
        console.log('all settings saved');
        loadScripts();
        var checkScriptFormsLoad = setInterval(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('script#hubspot_load_forms').length) {
            console.log('hubspot script loaded');
            clearInterval(checkScriptFormsLoad);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('script').each(function (index) {
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('hbspt.forms.create') != -1) {
                var scriptForm = document.createElement('script');
                scriptForm.innerHTML = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html();
                scriptForm.id = 'reloaded_script_' + index;
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().append(scriptForm);
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('head').find('.hbspt-form').length) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()('head').find('.hbspt-form').appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent());
                  console.log('form inserted');
                }
              }
            });
          }
        }, 100);

        // Trigger plugin reload
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          url: 'https://wordpress-dev-appsvc.azurewebsites.net/wp-content/themes/sekure/classes/sm-plugin-reload.php',
          type: 'post',
          success: function success(response) {
            console.log(response);
          },
          error: function error(response) {
            console.log(response);
          }
        });
      });
    }
  }, 100);
});

/***/ }),

/***/ "./assets/js/src/theme/ajax/surveys-submit.js":
/*!****************************************************!*\
  !*** ./assets/js/src/theme/ajax/surveys-submit.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.submit').on('click', function () {
    var survey_id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('survey-id');
    var full_submission = [];
    var user_selections = [];
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.question.current').find('input:checked').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.error-msg').removeClass('show');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions').find('.question').each(function () {
        var selection = {
          question: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.question-title').text(),
          choices: []
        };
        var selectedChoices = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked');
        selectedChoices.each(function () {
          //console.log($(this).val());
          selection.choices.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
        });
        full_submission.push(selection);
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('question-confirmation')) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('multiple')) {
            var multipleChoices = [];
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').each(function () {
              multipleChoices.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
            });
            user_selections.push(multipleChoices);
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').each(function () {
              user_selections.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
            });
          }
        }
      });

      /*
      $('.question.question-confirmation').find('.choice').each(function(){
        var input = $(this).find('input');
        if(input.is(':checked')){
            if($(this).hasClass('multiple')) {
              
            } else {
              user_selections.push(input.val());
            } 
        }
      });
      */

      //console.log(full_submission);
      //console.log(user_selections);

      if (user_selections.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          url: '/wp-content/themes/sekure/partials/survey-submit.php',
          // surveySubmitAjax.ajaxurl
          type: 'post',
          dataType: 'html',
          data: {
            survey_id: survey_id,
            user_selections: user_selections,
            full_submission: full_submission
          },
          success: function success(response) {
            //console.log(response);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions, .survey-footer').addClass('d-none');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-reset').removeClass('d-none');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-result').append(response);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()([document.documentElement, document.body]).animate({
              scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-wrap').offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()('header').outerHeight(true)
            }, 300, 'linear');
          }
        });
      }
      return false;
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.error-msg').addClass('show');
    }
  });
});

/***/ }),

/***/ "./assets/js/src/theme/ajax/toll-free-numbers.js":
/*!*******************************************************!*\
  !*** ./assets/js/src/theme/ajax/toll-free-numbers.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  // phone number formatter
  var formatPhoneNumber = function formatPhoneNumber(str) {
    //Filter only numbers from the input
    var cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct length
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    ;
    return null;
  };

  // dynamic TF numbers swap based on utm_campaign/hubspot campaign
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('single-landings')) {
    var pageLang = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').prop('lang');
    var urlParams = new URLSearchParams(window.location.search); //get all parameters
    var utm_campaign = '';
    var hsa_cam = '';
    var utm_medium = decodeURIComponent(urlParams.get('utm_medium'));

    // get utm_campaign parameter value
    if (urlParams.get('utm_campaign') && urlParams.get('utm_campaign') != '') {
      var utm_campaign = decodeURIComponent(urlParams.get('utm_campaign'));
    }
    // get hubspot campaign parameter value
    if (urlParams.get('hsa_cam') && urlParams.get('hsa_cam') != '') {
      var hsa_cam = decodeURIComponent(urlParams.get('hsa_cam'));
    }

    //console.log(utm_campaign);
    //console.log(hsa_cam);

    if (utm_campaign != '' || hsa_cam != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: '/wp-content/themes/sekure/partials/tf-numbers.php',
        type: 'post',
        dataType: 'html',
        data: {
          language: pageLang,
          utm_campaign: utm_campaign,
          hsa_cam: hsa_cam,
          utm_medium: utm_medium
        },
        success: function success(response) {
          console.log(response);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('a').each(function (index) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href').includes('tel:')) {
              var newTel = response;
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href', 'tel:' + newTel);

              // don't update text of Talk to us now button or mobile sticky call button
              //contact-section-btn $(this).text().includes('Talk')
              if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('contact-section-btn') && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent('.landing-sticky-block').length) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text(formatPhoneNumber(newTel));
              }
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./assets/js/src/theme/animations/splitText.js":
/*!*****************************************************!*\
  !*** ./assets/js/src/theme/animations/splitText.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/SplitText */ "./node_modules/gsap/SplitText.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText);
var SplitTextGSAP = /*#__PURE__*/function () {
  function SplitTextGSAP() {
    _classCallCheck(this, SplitTextGSAP);
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.splitByChars').length) {
      this.splitText(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.splitByChars'), 'chars');
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.splitByWords').length) {
      this.splitText(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.splitByWords'), 'words');
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.splitByLines').length) {
      this.splitText(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.splitByLines'), 'lines');
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.splitByLinesChars').length) {
      this.splitText(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.splitByLinesChars'), 'linesChars');
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.splitByAll').length) {
      this.splitText(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.splitByAll'), 'all');
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.linesWordsLines').length) {
      this.splitText(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.linesWordsLines'), 'linesWordsLines');
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.linesWordsLinesHover').length) {
      this.splitText(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.linesWordsLinesHover'), 'linesWordsLinesHover');
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.splitByWordsChars').length) {
      this.splitText(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.splitByWordsChars'), 'wordsChars');
    }
  }
  /*    SPLIT TEXT BY CHARDS/WORDS
   *
   *  this.splitText( $(text), 'chars' )
   *  this.splitText( $(text), 'words' )
   *
   */
  return _createClass(SplitTextGSAP, [{
    key: "splitText",
    value: function splitText(title, splitBy) {
      if (splitBy == 'lines') {
        title.each(function (i, e) {
          var mySplitTextInner = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText(title[i], {
            type: 'lines',
            linesClass: 'line-inner line++'
          });
          var mySplitTextOuter = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText(title[i], {
            type: 'lines, words',
            linesClass: 'line-outer line++'
          });
          // if (!$(e).hasClass('non-translate')) {
          //     gsap.set($(e).find('.line-inner'), {yPercent: 100});
          // } else {
          //     gsap.set($(e).find('.line-inner'), {display: 'inline-block'});
          // }
        });
        // let mySplitTextInnerLines = new SplitText(title[0], { type: "lines", linesClass: "line-inner line-inner++" });
        // let mySplitTextOuterLines = new SplitText(title[0], { type: "lines", linesClass: "line line++" });
      } else if (splitBy == 'words') {
        var _mySplitText = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText(title[0], {
          type: 'words',
          wordsClass: 'word word++'
        });
        // chars = mySplitText.chars; //an array of all the divs that wrap each character
      } else if (splitBy == 'chars') {
        title.each(function (i, e) {
          // let mySplitText = new SplitText(title[i], {
          //     type: 'chars',
          //     charsClass: 'char char++'
          // })
          var mySplitText = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText(title[i], {
            type: 'words,chars',
            wordsClass: 'word word++',
            charsClass: 'char char++'
          });
          // type: 'words,chars',
          //     wordsClass: 'word word++',
          //     charsClass: 'char char++'
          // gsap.set('.char', { opacity: 0 });
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set('.char', {
            opacity: 0,
            y: 15
          });

          //Listen for the event
          // window.addEventListener("MyEventType", evt => {
          //     console.log(evt.detail);
          // }, false);
        });

        // chars = mySplitText.chars; //an array of all the divs that wrap each character
      } else if (splitBy == 'linesChars') {
        var _mySplitText2 = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText(title[0], {
          type: 'chars,words',
          charsClass: 'char char++',
          wordsClass: 'word word++'
        });
        // chars = mySplitText.chars; //an array of all the divs that wrap each character
      } else if (splitBy == 'linesWordsLines') {
        title.each(function (i, e) {
          var mySplitTextInner = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText(title[i], {
            type: 'lines',
            linesClass: 'line-inner anim-translate-y line++'
          });
          var mySplitTextOuter = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText(title[i], {
            type: 'lines, words',
            linesClass: 'line-outer line++',
            wordsClass: 'word word++'
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set('.line-inner.anim-translate-y', {
            opacity: 0,
            yPercent: 100
          });
        });
      } else if (splitBy == 'linesWordsLinesHover') {
        title.each(function (i, e) {
          var mySplitTextInner = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText(title[i], {
            type: 'lines',
            linesClass: 'line-inner-hover line++'
          });
          var mySplitTextOuter = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText(title[i], {
            type: 'lines, words',
            linesClass: 'line-outer-hover line++',
            wordsClass: 'word word++'
          });
        });
      } else if (splitBy == 'wordsChars') {
        var mySplitText = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText(title, {
          type: 'words,chars',
          wordsClass: 'word word++',
          charsClass: 'char char++'
        });
        // chars = mySplitText.chars; //an array of all the divs that wrap each character
      }

      // if (splitBy == "words") {
      //     return mySplitText.words;
      // } else if (splitBy == "lines") {
      //     return mySplitText.lines;
      // } else {
      //     return mySplitText.chars;
      // }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (SplitTextGSAP);

/***/ }),

/***/ "./assets/js/src/theme/app.js":
/*!************************************!*\
  !*** ./assets/js/src/theme/app.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./assets/js/src/theme/init.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./assets/js/src/theme/ui.js");
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.js */ "./assets/js/src/theme/forms.js");
/* harmony import */ var _surveys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./surveys.js */ "./assets/js/src/theme/surveys.js");
/* harmony import */ var _ajax_toll_free_numbers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajax/toll-free-numbers.js */ "./assets/js/src/theme/ajax/toll-free-numbers.js");
/* harmony import */ var _ajax_phone_number_validation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajax/phone-number-validation.js */ "./assets/js/src/theme/ajax/phone-number-validation.js");
/* harmony import */ var _ajax_surveys_submit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajax/surveys-submit.js */ "./assets/js/src/theme/ajax/surveys-submit.js");
/* harmony import */ var _ajax_plugins_reload_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ajax/plugins-reload.js */ "./assets/js/src/theme/ajax/plugins-reload.js");



//import './privacy-policy.js';





//import './ajax/landings-lazy-loading.js';

__webpack_require__.p = window['_root'];
var App = function App() {
  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.UI)();
  (0,_init__WEBPACK_IMPORTED_MODULE_0__["default"])();
};
if (typeof window._loq == 'undefined') {
  window._loq = {
    push: function push() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var arg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var arg3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    }
  };
}
App();

/***/ }),

/***/ "./assets/js/src/theme/forms.js":
/*!**************************************!*\
  !*** ./assets/js/src/theme/forms.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  // hubspot fields alteration
  var hubspotFormsFields = setInterval(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form').find('input[type=hidden]').each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('fieldset').css('display', 'none');
      });
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-content-tab .hbspt-form input[type=file]').length) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-content-tab .hbspt-form input[type=file]').attr('accept', '.doc, .docx, application/pdf');
      }
      clearInterval(hubspotFormsFields);
    }
  }, 100);

  // page url field fill
  var pageUrlInput = setInterval(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=page_url]').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=page_url]').val(window.location.href);
      clearInterval(pageUrlInput);
    }
  }, 100);
  var bestDaytoCallInput = setInterval(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=best_day_to_call]').length) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=best_day_to_call]').val() != '') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=best_day_to_call]').parents('.hs-fieldtype-date').find('label').hide();
        clearInterval(bestDaytoCallInput);
      }
    }
  }, 100);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('change', '.hbspt-form input[name=best_day_to_call]', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val() != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.hs-fieldtype-date').find('label').hide();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.hs-fieldtype-date').find('label').show();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('change', '.form-content-tab .hbspt-form input[type=file]', function () {
    var file = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].files[0];
    var allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedFileTypes.includes(file.type)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.hs-form-field').append('<ul class="no-list hs-error-msgs inputs-list upload-notice" role="list"><li role="listitem"><label class="hs-error-msg hs-main-font-element">Please select a Microsoft Word or PDF file to upload.</label></li></ul>');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val('');
      console.log('pdf or word docs, file is no good');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.upload-notice').remove();
      console.log('file passed the check');
    }
  });

  // hubspot submit button
  var hubspotSubmitButtonStyles = setInterval(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.hs_submit input[type=submit]').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.hs_submit').addClass('hover-styles');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.hs_submit').each(function () {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('#footer').length && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.popup').length) {
          var submitWrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.actions');
          var submit = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input[type=submit]');
          var label = submit.val();
          submit.remove();
          var bgColour = 'section-color-white';
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.callback-popup-form').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.talk-to-us-block-popup-form').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.form--container').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.popup-form').length) {
            var bgColour = 'section-color-blue';
          }
          submitWrap.append('<button type="submit" class="hs-button primary large btn-default size-18-txt ltr-spc-pos-0_25 c-blue-1 btn-green-1 btn-offset-10 fw-700 ' + bgColour + '" value="' + label + '"><span class="btn-bg-el"></span><span class="btn-txt">' + label + '</span></button>');
        }
      });
      clearInterval(hubspotSubmitButtonStyles);
    }
  }, 500);

  // Add Aria Labels to Hubspot forms
  var hubspotFormsAriaLabels = setInterval(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form form').length) {
      var form = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form form');
      form.removeAttr('id');
      var inputs = form.find('input');
      var selects = form.find('select');
      inputs.each(function (index) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('type') != 'hidden' || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name') == 'page_url' || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name') == 'g-recaptcha-response') {
          var inputID = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id') + '-' + index;
          var inputName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.input').siblings('label').attr('placeholder');
          if (inputName == '') {
            var inputName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name') + '-' + index;
          }
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.input').siblings('label').attr('aria-label', inputName);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.input').siblings('label').removeAttr('id');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.input').siblings('label').attr('for', inputID);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id', inputID);
        }
      });
      selects.each(function (index) {
        var inputID = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id') + '-' + index;
        var inputName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.input').siblings('label').attr('placeholder');
        if (inputName == '') {
          var inputName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name') + '-' + index;
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.input').siblings('label').attr('aria-label', inputName);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.input').siblings('label').removeAttr('id');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.input').siblings('label').attr('for', inputID);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id', inputID);
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
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('footer .hbspt-form input[name=email]').length) {
      clearInterval(hubspotFormSubscribeEmailField);
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('lang') == 'es-US') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('footer .hbspt-form input[name=email]').attr('placeholder', 'Suscríbete a nuestro boletín');
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('lang') == 'fr-CA') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('footer .hbspt-form input[name=email]').attr('placeholder', 'Inscrivez-vous à notre newsletter');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('footer .hbspt-form input[name=email]').attr('placeholder', 'Sign up for our newsletter');
      }
    }
  }, 100);

  // survey section download guide popup button
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.download-open-form-btn').on('click', function (e) {
    e.preventDefault();
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.newsletter-form .hbspt-form').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.newsletter-form .hbspt-form').detach().appendTo('.download-popup-form .form-wrap');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-popup-close-btn').on('click', function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.download-popup-form .hbspt-form').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.download-popup-form .form-wrap .hbspt-form').detach().appendTo('.contact-block .newsletter-form');
    }
  });
  var listenInputChange = function listenInputChange(el) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).is(':visible')) {
      var input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).attr('for');
      var event = 'keyup';
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(input)).is('select')) {
        var event = 'click';
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(input)).on(event, function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val() != '') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).addClass('filled');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('filled');
        }
      });
    }
  };
  var observeFormInput = function observeFormInput(selector, className, listenInputChange) {
    var targetNodes = document.querySelectorAll(selector);
    targetNodes.forEach(function (targetNode) {
      if (!targetNode) {
        console.error('Target node not found');
        return;
      }
      var config = {
        childList: true,
        subtree: true
      };
      var callback = function callback(mutationsList, observer) {
        var _iterator = _createForOfIteratorHelper(mutationsList),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var mutation = _step.value;
            if (mutation.type === 'childList') {
              if (!targetNode.classList.contains(className)) {
                //console.log(className);
                targetNode.querySelectorAll('label').forEach(function (el) {
                  return listenInputChange(el);
                });
                targetNode.classList.add(className);
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };
      var observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    });
  };
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page-form').length) {
    observeFormInput('.form-contact-section-home .home-page-form:not(.sk-form-hbsp-ltd)', 'sk-form-hbsp-ltd', listenInputChange);
  }
  var blogFilterChoices = setInterval(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choices__item.choices__item--selectable:not(.choices__item--choice)').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choices__item.choices__item--selectable:not(.choices__item--choice)').each(function () {
        var text = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text();
        text = text.replace('&amp;', '&');
        text = text.replace('Remove item', '');
        var button = '<button type="button" class="choices__button" aria-label="Remove item: ' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('value') + '" data-button="">Remove item</button>';
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html(text + button);
      });
      // clearInterval(blogFilterChoices);
    }
  }, 100);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.choices__input', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choices__item.choices__item--choice').each(function () {
      var text = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text(text.replace('&amp;', '&'));
    });
  });
});

/***/ }),

/***/ "./assets/js/src/theme/helpers/helper.js":
/*!***********************************************!*\
  !*** ./assets/js/src/theme/helpers/helper.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsSafari: function() { return /* binding */ IsSafari; },
/* harmony export */   animationStarting: function() { return /* binding */ animationStarting; },
/* harmony export */   bLazy: function() { return /* binding */ bLazy; },
/* harmony export */   calculateTotalHeight: function() { return /* binding */ calculateTotalHeight; },
/* harmony export */   calculateTotalWidth: function() { return /* binding */ calculateTotalWidth; },
/* harmony export */   debounce: function() { return /* binding */ debounce; },
/* harmony export */   distance: function() { return /* binding */ distance; },
/* harmony export */   dropdownsHandler: function() { return /* binding */ dropdownsHandler; },
/* harmony export */   getMaxHeight: function() { return /* binding */ getMaxHeight; },
/* harmony export */   getMousePos: function() { return /* binding */ getMousePos; },
/* harmony export */   getRandomArbitrary: function() { return /* binding */ getRandomArbitrary; },
/* harmony export */   getRandomFloat: function() { return /* binding */ getRandomFloat; },
/* harmony export */   getTotalHeight: function() { return /* binding */ getTotalHeight; },
/* harmony export */   isDesktop: function() { return /* binding */ isDesktop; },
/* harmony export */   isMobile: function() { return /* binding */ isMobile; },
/* harmony export */   lazyLoading: function() { return /* binding */ lazyLoading; },
/* harmony export */   lerp: function() { return /* binding */ lerp; },
/* harmony export */   map: function() { return /* binding */ map; },
/* harmony export */   numberWithCommas: function() { return /* binding */ numberWithCommas; },
/* harmony export */   refreshScrollTrigger: function() { return /* binding */ refreshScrollTrigger; },
/* harmony export */   scrollToElem: function() { return /* binding */ scrollToElem; },
/* harmony export */   scrollToSectionFromAnotherPage: function() { return /* binding */ scrollToSectionFromAnotherPage; },
/* harmony export */   setItemWidths: function() { return /* binding */ setItemWidths; },
/* harmony export */   startCircleRotation: function() { return /* binding */ startCircleRotation; },
/* harmony export */   throttle: function() { return /* binding */ throttle; }
/* harmony export */ });
/* harmony import */ var blazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blazy */ "./node_modules/blazy/blazy.js");
/* harmony import */ var blazy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blazy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
// import { TweenMax, ScrollToPlugin } from 'gsap';
//





/**
 * function not be called again until a certain amount of time
     Used for : resize/scroll

    var func = debounce( function() {
        ....
    }, 250);

    window.addEventListener('resize', funx);
*/

var IsSafari = function IsSafari() {
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  return isSafari;
};
(jquery__WEBPACK_IMPORTED_MODULE_1___default().fn).clickOutside = function (callback) {
  var $me = this;
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).mouseup(function (e) {
    if (!$me.is(e.target) && $me.has(e.target).length === 0) {
      callback.apply($me);
    }
    // console.log(e);
  });
};
var getTotalHeight = function getTotalHeight(elements) {
  var totalHeight = 0;
  // console.log(elements)
  elements.each(function (i, e) {
    return totalHeight += jquery__WEBPACK_IMPORTED_MODULE_1___default()(e).outerHeight();
  });
  // console.log(totalHeight);
  return totalHeight;
};
var startCircleRotation = function startCircleRotation(circle) {
  gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(circle, {
    duration: 120,
    repeat: -1,
    ease: 'none',
    rotation: "+=".concat(360 * 5),
    scrollTrigger: {
      trigger: circle.parents('section'),
      start: '0% 100%',
      end: '100% 0%',
      invalidateOnRefresh: true,
      toggleActions: 'play pause resume pause'
    }
  });
};
var animationStarting = function animationStarting(section) {
  // console.log(section);
  if (!isMobile()) {
    section.find('.op-0').removeClass('op-0');
  } else if (isMobile() && section.find('.op-0').length) section.find('.op-0').removeClass('op-0');
};
var refreshScrollTrigger = function refreshScrollTrigger(timeout) {
  return setTimeout(function () {
    return gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.refresh(true);
  }, timeout);
};
function debounce(func, wait, immediate, param) {
  var timeout;
  // console.log("debounce")
  return function () {
    var context = this,
      args = arguments;
    var later = function later() {
      // console.log(timeout, "calll")
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/**
 * function can we called once in specific amount of time
 * Used for mousemove/touchmove / click on btn
   window.addEventListener('resize', throttle(function(e){..}, 100));
*/

function throttle(callback, limit) {
  var wait = false;
  return function () {
    if (!wait) {
      callback.apply(null, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}
var bLazy = [];
var dropdownsHandler = function dropdownsHandler(target, mode) {
  // console.log(target, target.find('.dropdown-content'))
  if (mode == 'open') {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, {
      height: target.find('.dropdown-content').outerHeight(true)
      // onComplete: () => $(window).trigger('pageHeightChangeEvent')
    });
  } else {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, {
      height: 0
      // onComplete: () => $(window).trigger('pageHeightChangeEvent')
    });
  }
};
var lazyLoading = function lazyLoading() {
  bLazy[0] = new (blazy__WEBPACK_IMPORTED_MODULE_0___default())({
    breakpoints: [{
      width: 1024,
      src: 'data-src-mobile'
    }],
    loadInvisible: true,
    offset: 300
  });
  // force load image, overflow breaks bLazy
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.force-load-img').length) bLazy[0].load(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.force-load-img'), true);
  // if ($('.parallax-img').length) bLazy[0].load($('.parallax-img'), true);
  //

  var observer = new IntersectionObserver(function (entries) {
    // console.log(entry, 'in entry')
    entries.forEach(function (entry, i) {
      if (entry.intersectionRatio > 0) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(entry.target).hasClass('blazy-triggered-load')) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(entry.target).find('.b-lazy').each(function (i, e) {
            bLazy[0].load(jquery__WEBPACK_IMPORTED_MODULE_1___default()(e), true);
          });
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(entry.target).addClass('blazy-triggered-load');
        }
      }
    });
  }, {
    root: null,
    rootMargin: '25%',
    threshold: 0
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#main-content').children().each(function (i, e) {
    // console.log(e);
    observer.observe(e);
  });

  // $('.b-lazy:not(.force-load-img):not(.parallax-img)').each((i, e) => {
  //     observer.observe(e);
  // });
};

// let calculateNewSize = (originalWidth, originalHeight, newWidth) => {
//     return {
//         calculatedHeight: ((originalHeight / originalWidth) * newWidth).toFixed(2),
//     }
// }

var setItemWidths = function setItemWidths(items) {
  items.each(function (i, e) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(e).parent().css('width', jquery__WEBPACK_IMPORTED_MODULE_1___default()(e).attr('width'));
  });
};
function scrollToElem(el, sec, offset) {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('html, body').animate({
    scrollTop: el.offset().top - offset
  }, sec);
}
function isMobile() {
  return innerWidth < 1025 ? true : false;
}
function isDesktop() {
  return !isMobile();
}
var calculateTotalWidth = function calculateTotalWidth(container) {
  var totalWidth = 0;
  container.children().each(function () {
    totalWidth += jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).outerWidth(true);
  });
  return totalWidth;
};
var calculateTotalHeight = function calculateTotalHeight(container) {
  var totalHeight = 0;
  container.children().each(function () {
    totalHeight += jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).outerHeight(true);
  });
  return totalHeight;
};
var numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Map number x from range [a, b] to [c, d]
var map = function map(x, a, b, c, d) {
  return (x - a) * (d - c) / (b - a) + c;
};

// Linear interpolation
var lerp = function lerp(a, b, n) {
  return (1 - n) * a + n * b;
};

// Gets the mouse position
var getMousePos = function getMousePos(e) {
  var posx = 0;
  var posy = 0;
  if (!e) e = window.event;
  // console.log(e.pageY, 'e.pageY');
  // console.log(e.offsetY, 'e.offsetY');
  // console.log(e.clientY, 'e.clientY');
  // if (e.pageX || e.pageY) {
  posx = e.pageX;
  posy = e.pageY;
  // }
  // else if (e.clientX || e.clientY)    {
  //     posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
  //     posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
  // }
  mousepos.x = posx;
  mousepos.y = posy;
  return {
    x: posx,
    y: posy
  };
};
var mousepos = {
  x: 0,
  y: 0
};
var distance = function distance(x1, y1, x2, y2) {
  var a = x1 - x2;
  var b = y1 - y2;

  // return Math.hypot(a,b);
  return {
    x: a,
    y: b
  };
};

// Generate a random float.
var getRandomFloat = function getRandomFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
};
var getRandomArbitrary = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};
var getMaxHeight = function getMaxHeight(el) {
  var maxHeight = 0;
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).each(function (i, e) {
    var thisH = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e).outerHeight();
    if (thisH > maxHeight) {
      maxHeight = thisH;
    }
  });
  return maxHeight;
};
var scrollToSectionFromAnotherPage = function scrollToSectionFromAnotherPage() {
  if (typeof window.location.href.split('#')[1] === 'undefined') return;
  var urlTarget = window.location.href.split('#')[1];
  var target = jquery__WEBPACK_IMPORTED_MODULE_1___default()("[data-page-scroll-id=\"".concat(urlTarget, "\"]"))[0];
  if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(target).length) return;
  scrollTo(target);
};


/***/ }),

/***/ "./assets/js/src/theme/init.js":
/*!*************************************!*\
  !*** ./assets/js/src/theme/init.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var is_in_viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-in-viewport */ "./node_modules/is-in-viewport/lib/isInViewport.es6.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


var init = function init() {
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
    if ($('body').hasClass('page-id-3152')) {
      scripts = {
        'blog_css_afterload': '/wp-content/themes/sekure/assets/css/styles/blogs.css',
        'bootstrap_css_afterload': '/wp-content/themes/sekure/assets/css/styles/bootstrap.css',
        'styles_css_afterload': '/wp-content/themes/sekure/assets/css/styles/style.css'
      };
    }
    for (var id in scripts) {
      if (scripts.hasOwnProperty(id)) {
        var value = scripts[id];
        //console.log(`Key: ${id}, Value: ${value}`);
        var loadStyle = document.createElement('link');
        loadStyle.id = "".concat(id);
        loadStyle.rel = 'stylesheet';
        loadStyle.media = 'all';
        loadStyle.href = window.location.origin + "".concat(value);
        document.head.append(loadStyle);
      }
    }
  }
  function initOver() {
    if (!$('body.home').length || (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
      $('body').css({
        paddingTop: $('#header').outerHeight(true) - 5
      });
    }
    if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
      $('.main-header .nav-wrap').css({
        paddingTop: $('#header').outerHeight(false) - 5
      });
    } else {
      $('.main-header .nav-wrap').css({
        paddingTop: 'inherit'
      });
    }
    $('html').removeClass("init");
  }
  if ($('body').hasClass('page-id-3152')) {
    if (window.innerWidth <= 1024) {
      $('.header-logo').prop('src', $('.header-logo').data('src')).addClass('b-loaded');
    }
    if (document.readyState !== 'loading') {
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
  $('html').on('headerChanged', function () {
    calculateHeight();
  });
  $('html').on('windowTypeChanged', function () {
    setTimeout(function () {
      calculateHeight();
    }, 350);
  });
  $(function () {
    $('.sk-block').each(function (i, el) {
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
    $("".concat(target, ":not(:in-viewport):visible")).each(function (i, el) {
      if ($(el).hasClass('in-view') || !$(el).hasClass('not-in-view')) {
        $(el).removeClass('in-view');
        $(el).addClass('not-in-view');
        $(el).addClass('op-0');
      }
    });
    $("".concat(target, ":in-viewport(").concat(tolerance, "):visible")).each(function (i, el) {
      if (!$(el).hasClass('in-view')) {
        $(el).addClass('in-view');
        $(el).removeClass('op-0');
        $(el).removeClass('not-in-view');
      }
    });
  }
}
function calculateHeight() {
  if (!$('body.home').length || (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
    $('body').css({
      paddingTop: $('#header').outerHeight(true) - 5
    });
  } else if ($('body.home').length) {
    $('.hero-section').css({
      paddingTop: $('#header').outerHeight(true) + 110
    });
  }
  if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
    $('.main-header .nav-wrap').css({
      paddingTop: $('#header').outerHeight(false) - 5
    });
  } else {
    $('.main-header .nav-wrap').css({
      paddingTop: 'inherit'
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
    if (window.currentVal && window.currentVal !== $('html').attr('data-window-type')) {
      window.location.reload();
    }
    window.currentVal = $('html').attr('data-window-type');
  }
  // setTimeout(() => {
  $('html').trigger('windowTypeChanged');
  // }, 150);
}
/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ "./assets/js/src/theme/surveys.js":
/*!****************************************!*\
  !*** ./assets/js/src/theme/surveys.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


// Choice selection
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choice label').on('click', function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('input').prop('checked') == true) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('input[type=radio], input[type=checkbox]').prop('checked', false);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('input').data('radio_checked', 'false');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('input[type=radio], input[type=checkbox]').prop('checked', true);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('input').data('radio_checked', 'true');
  }
});

// Buttons
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action').on('click', function () {
  // Next Button
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('next')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions').find('.question').each(function (index) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('current')) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').length) {
          // scroll to top of survey
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-wrap').offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()('header').outerHeight(true)
          }, 500);

          // hide error messages
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-footer .error-msg').removeClass('show');

          // update steps
          var stepCurrent = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-current').text()) + 1;
          var stepFinal = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-final').text());
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-current').html(stepCurrent);
          if (stepCurrent == stepFinal) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.next').addClass('d-none');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.submit').removeClass('d-none');
          }

          // equipment page survey
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('page-id-582') || jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('page-id-30214')) {
            // if user selects e-commerce or other
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').length == 1 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').val() == 'Online / eCommerce' || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').val() == 'Other') {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.next').addClass('d-none');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.submit').removeClass('d-none');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-final').html('2');
            }

            // if user selects retail
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').length == 1 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').val() == 'Retail') {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions .question:nth-of-type(2)').addClass('question-confirmation');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions .question:nth-of-type(3)').removeClass('question-confirmation');
            }

            // if user selects anything but restaurant, e-commerce, other
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions').find('input:checked').length > 1 && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions .question:first-of-type').find('input:checked').val() != 'Online / eCommerce' && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions .question:first-of-type').find('input:checked').val() != 'Other' && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions .question:first-of-type').find('input:checked').val() != 'Restaurant') {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.next').addClass('d-none');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.submit').removeClass('d-none');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-final').html('3');
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().hasClass('question-dynamic')) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input[data-dynamic-choice=true]').is(':checked')) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-final').html(parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-final').text()) + 1);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().addClass('current');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('current');
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().hasClass('question-vary')) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.vary-question').removeClass('current');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().find("[data-prev-choice='" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').val() + "']").addClass('current');
              }
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.question.question-dynamic').find('input').each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop('checked', false);
              });
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().next().addClass('current');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('current');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-final').html(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-final').data('count-initial'));
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().next().hasClass('question-vary')) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.vary-question').removeClass('current');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().next().find("[data-prev-choice='" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').val() + "']").addClass('current');
              }
            }
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().addClass('current');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('current');

            // variable question multiple selections
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().hasClass('question-vary')) {
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().find('[data-mulitple-prev-choices=yes]').length) {
                //console.log('next options that allow multiple previous choices= ' + $(this).next().find('[data-mulitple-prev-choices=yes]').length);
                //console.log('inputs checked= ' + $(this).find('input:checked').length);

                var numberOfMultipleChoices = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().find('[data-mulitple-prev-choices=yes]').length;
                var multipleQuestionChoices = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().find('[data-mulitple-prev-choices=yes]');

                // if more than one option is selected
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').length > 1) {
                  //console.log('more than one input checked');

                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').each(function (index) {
                    var checkedValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();

                    // if there are more than one option that can be triggered by multiple previous choices
                    if (numberOfMultipleChoices > 1) {
                      //console.log('multiple previous choices are allowed');

                      multipleQuestionChoices.each(function (index) {
                        var multipleChoices = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('prev-choice');

                        //console.log(multipleChoices);
                        //console.log($.inArray(checkedValue, multipleChoices));

                        // check if input value is in array
                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(checkedValue, multipleChoices) != -1) {
                          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('current');
                          return;
                        }
                      });
                    } else if (numberOfMultipleChoices == 1) {
                      var multipleChoices = multipleQuestionChoices.data('prev-choice');

                      //console.log(multipleChoices);
                      //console.log($.inArray(checkedValue, multipleChoices));

                      // check if input value is in array
                      if (jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(checkedValue, multipleChoices) != -1) {
                        multipleQuestionChoices.addClass('current');
                        return;
                      }
                    }
                  });

                  // only one option is selected
                } else {
                  //console.log('ONLY one input checked');

                  var checkedValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').val();

                  // if there are more than one option that can be triggered by multiple previous choices
                  if (numberOfMultipleChoices > 1) {
                    multipleQuestionChoices.each(function (index) {
                      var multipleChoices = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('prev-choice');

                      //console.log(multipleChoices);
                      //console.log($.inArray(checkedValue, multipleChoices));

                      // check if input value is in array
                      if (jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(checkedValue, multipleChoices) != -1) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('current');
                      }
                    });
                  } else {
                    var multipleChoices = multipleQuestionChoices.data('prev-choice');

                    //console.log(multipleChoices);
                    //console.log($.inArray(checkedValue, multipleChoices));

                    // check if input value is in array
                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(checkedValue, multipleChoices) != -1) {
                      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('current');
                    }
                  }
                }
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.vary-question').removeClass('current');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().find("[data-prev-choice='" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').val() + "']").addClass('current');
              }
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.prev').hasClass('d-none')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.prev').removeClass('d-none');
          }
          return false;
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-footer .error-msg').addClass('show');
          return false;
        }
      }
    });
  }

  // Previous Button
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('prev')) {
    var stepCurrent = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-current').text()) - 1;
    var stepFinal = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-final').text());
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-current').html(stepCurrent);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions').find('.question').each(function (index) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('current')) {
        // check for dynamic questions
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prev().hasClass('question-dynamic')) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prev().prev().find('input[data-dynamic-choice=true]').is(':checked')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prev().addClass('current');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('current');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prev().prev().addClass('current');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('current');
          }
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prev().addClass('current');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('current');
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.vary-question').length) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.vary-question').removeClass('current');
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input[type=checkbox]').prop('checked', false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input[type=radio]').prop('checked', false);
        return false;
      }
    });
    if (stepCurrent == 1) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.prev').addClass('d-none');
    }
    if (stepCurrent < stepFinal) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.next').removeClass('d-none');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.submit').addClass('d-none');
    }
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.submit').hasClass('d-none')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-action.submit').addClass('d-none');
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('page-id-582') && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions').find('input:checked').length == 1) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-final').html('5');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions .question:nth-of-type(2)').removeClass('question-confirmation');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions .question:nth-of-type(3)').addClass('question-confirmation');
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('page-id-30214') && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions').find('input:checked').length == 1) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-final').html('5');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions .question:nth-of-type(2)').removeClass('question-confirmation');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions .question:nth-of-type(3)').addClass('question-confirmation');
    }
  }
});

// Reset button
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-reset .query-button-next').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
    scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-wrap').offset().top - 200
  }, 250, 'linear');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-result').empty();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-reset, .survey-action').addClass('d-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-current').html(1);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-final').html(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-final').data('count-initial'));
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions, .survey-footer, .survey-action.next').removeClass('d-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions .question').removeClass('current');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.survey-questions .question:first-of-type').addClass('current');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[type=checkbox], input[type=radio]').prop('checked', false);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.inner-pages-quiz-section .title-wrap').css('display', 'block');
});

/***/ }),

/***/ "./assets/js/src/theme/ui.js":
/*!***********************************!*\
  !*** ./assets/js/src/theme/ui.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: function() { return /* binding */ UI; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var _animations_splitText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/splitText */ "./assets/js/src/theme/animations/splitText.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_smoothScroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/smoothScroll.js */ "./assets/js/src/theme/utils/smoothScroll.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// UI elements functionality










// register gsap plugins
gsap__WEBPACK_IMPORTED_MODULE_5__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger, gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_7__.ScrollToPlugin);

// prevent default class
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.prev-default').on('click', function (e) {
  e.preventDefault();
});

// scrollable links
jquery__WEBPACK_IMPORTED_MODULE_0___default()('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]').not('[href="#0"]').not('.lang-current').click(function (event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    // Figure out element to scroll to
    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.hash);
    target = target.length ? target : jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('scroll-to-section-btn')) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
        scrollTop: target.offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()('header').outerHeight(true)
      }, 350, 'linear', function () {
        // Callback after animation
        // Must change focus!
        var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target);
        $target.focus();
        if ($target.is(':focus')) {
          // Checking if the target was focused
          return false;
        } else {
          $target.focus(); // Set focus again
        }
      });
    }
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').trigger('headerChanged');
});
var smoothScrollHandler = function smoothScrollHandler() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-to-section-btn').on('click', function (e) {
    return scrollToSection(jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).attr('data-target'))[0]);
  });

  // arrow down button
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-to-next-btn').on('click', function (e) {
    e.preventDefault();
    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('section').next();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()([document.documentElement, document.body]).animate({
      scrollTop: target.offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()("#header").outerHeight()
    }, 350, 'linear');
  });
  var scrollToSection = function scrollToSection(target) {
    gsap__WEBPACK_IMPORTED_MODULE_5__["default"].to(window, {
      duration: 1,
      scrollTo: {
        y: target,
        offsetY: jquery__WEBPACK_IMPORTED_MODULE_0___default()('header').outerHeight(true)
      }
    });
  };
  Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./utils/smoothScroll.js */ "./assets/js/src/theme/utils/smoothScroll.js")).then(function (module) {
    module["default"]();
  });
};
var scrollToSectionFromAnotherPage = function scrollToSectionFromAnotherPage() {
  if (typeof window.location.href.split('#')[1] === 'undefined') return;
  var urlTarget = window.location.href.split('#')[1];
  var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-page-scroll-id=\"".concat(urlTarget, "\"]"))[0];
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).length) return;
  (0,_utils_smoothScroll_js__WEBPACK_IMPORTED_MODULE_4__.scrollTo)(target);
};

// Popup functionality
jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-popup-id]').on('click', function (e) {
  e.preventDefault();
  var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-popup-id]').attr('disabled', true);
  var popup_id = $this.data('popup-id');
  var form_heading = $this.data('popup-heading');
  var form_desc = $this.data('popup-desc');
  var include_form = true;
  if (popup_id == 34475 && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.newsletter-form .hbspt-form').length) {
    include_form = false;
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
    url: '/wp-content/themes/sekure/partials/popup-content.php',
    type: 'post',
    dataType: 'html',
    data: {
      popup_id: popup_id,
      form_heading: form_heading,
      form_desc: form_desc,
      include_form: include_form
    },
    beforeSend: function beforeSend() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-popup-id]').attr('disabled', true);
    },
    success: function success(response) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-popup-id]').attr('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content').empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content').append(response);
      if (popup_id == 34475 && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.newsletter-form .hbspt-form').length) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.newsletter-form .hbspt-form').detach().appendTo('.popup .popup-content');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content').addClass('download-form');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content .hbspt-form button[type=submit]').removeClass('section-color-white').addClass('section-color-blue');
      } else {
        var moveLoadedForm = setInterval(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('head .hbspt-form').length && !jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content .hbspt-form').length) {
            console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()('head .hbspt-form'));
            clearInterval(moveLoadedForm);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('head .hbspt-form').addClass('phone-validate').appendTo('.popup .popup-content');
          }
        }, 500);

        // Hubspot Hidden Inputs
        var hubspotHiddenInputs = setInterval(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup-content input[name=page_url]').length) {
            clearInterval(hubspotHiddenInputs);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup-content  input[name=page_url]').val(window.location.href);
          }
        }, 500);

        // hubspot submit button
        var hubspotSubmitButtonStyles = setInterval(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content div.hs_submit').length) {
            clearInterval(hubspotSubmitButtonStyles);
            //$('.popup .popup-content div.hs_submit').addClass('hover-styles');
            var submitWrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content div.hs_submit').find('.actions');
            var submit = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content div.hs_submit').find('input[type=submit]');
            var label = submit.val();
            submit.remove();
            if (label != undefined) {
              submitWrap.append('<button type="submit" class="hs-button primary large btn-default c-blue-1 btn-green-1 section-color-blue" value="' + label + '"><span class="btn-bg-el"></span><span class="btn-txt">' + label + '</span></button>');
            }
          }
        }, 350);
      }

      //var reloadManifestScript = document.createElement('script');
      //reloadManifestScript.id = 'manifest_js_reloaded';
      //reloadManifestScript.src = window.location.origin + '/wp-content/themes/sekure/assets/js/dist/theme-scripts/manifest.js';
      //$('body').append(reloadManifestScript);
      //var reloadVendorScript = document.createElement('script');
      //reloadVendorScript.id = 'vendor_js_reloaded';
      //reloadVendorScript.src = window.location.origin + '/wp-content/themes/sekure/assets/js/dist/theme-scripts/vendor.js';
      //$('body').append(reloadVendorScript);
      //var reloadScript = document.createElement('script');
      //reloadScript.id = 'app_js_reloaded';
      //reloadScript.src = window.location.origin + '/wp-content/themes/sekure/assets/js/dist/theme-scripts/app.js';
      //$('body').append(reloadScript);

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('open-popup');
      //$this.removeAttr('disabled');
    }
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup-close-btn').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-popup-id]').removeAttr('disabled');
  //$('#manifest_js_reloaded, #vendor_js_reloaded, #app_js_reloaded').remove();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('open-popup');
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.download-form .hbspt-form').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content .hbspt-form button[type=submit]').removeClass('section-color-blue').addClass('section-color-white');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.download-form .hbspt-form').detach().appendTo('.contact-block .newsletter-form');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content').removeClass('download-form');
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content').empty();
});

// autoplay videos if hash in url
var autoplayVideos = function autoplayVideos() {
  if (window.location.hash && window.location.hash.includes('video')) {
    var iframe = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.article-text iframe');
    var iframeSrcNew = iframe.attr('src') + '?&autoplay=1';
    iframe.attr('src', iframeSrcNew);
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.landing-video-btn').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.landing-video-btn').click();
    }
  }
};

// Youtube video embeds using the youtube embed block, mostly used on blog posts
if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wp-block-embed-youtube').length) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wp-block-embed-youtube').each(function () {
    console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.wp-block-embed__wrapper').text());
    var videoID = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.wp-block-embed__wrapper').text().split('=');
    console.log(videoID);
    var url = videoID[1].trim();
    var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '?si=fsXHquYUYbp7tIxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.wp-block-embed__wrapper').empty().append(iframe);
  });
}
var recaptchaTextareaAccessibilityFix = function recaptchaTextareaAccessibilityFix() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#g-recaptcha-response-100000').length) return;
  var textarea = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#g-recaptcha-response-100000');
  textarea[0].setAttribute('aria-hidden', 'true');
  textarea[0].setAttribute('aria-label', 'do not use');
  textarea[0].setAttribute('aria-readonly', 'true');
};
var checkForTables = function checkForTables() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.txt-post-rtf table').length) return;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.txt-post-rtf table').each(function (i, e) {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).wrap('<div data-scroll-container-inner class="table-wrapper"></div>');
  });
};
var loadRecaptchaScript = function loadRecaptchaScript() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.recaptcha-form-submit-btn').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#recaptchaScript').attr('src', jquery__WEBPACK_IMPORTED_MODULE_0___default()('#recaptchaScript').attr('data-src'));
  }
};

// A/B Testing Conversion Tracking
/*
if($('body.single-landings').length && $('script#gtag_a_b_testing').length){
  $('a').each(function(index){
    if($(this).attr('href')){
      if($(this).attr('href').includes('tel:')){
        var href = $(this).attr('href');
        $(this).attr('onclick', "return gtag_report_A_B_conversion('" + href + "');");
      }
    }
  });

  if($('button.Twilio-EntryPoint').length){
    $('button.Twilio-EntryPoint').attr('onclick', "return gtag_report_A_B_conversion('chat opened');");
  }
}

var gtagChatButton = setInterval(function(){
  if($('button.Twilio-EntryPoint').length){
    $('button.Twilio-EntryPoint').attr('onclick', "return gtag_report_A_B_conversion('chat opened');");
    clearInterval(gtagChatButton);
  }
}, 250);
*/

// Blocks grid content collapse/show toggle
if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content-collapse').length) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content-collapse').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content-collapse').removeClass('visible');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content-collapsed').css('display', 'none').addClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('visible');
    var content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.block-content').find('.content-collapsed');
    if (content.hasClass('hidden')) {
      content.slideDown().removeClass('hidden');
    } else {
      content.slideUp().addClass('hidden');
    }
  });
}
var slidersInit = function slidersInit() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.swiper-trigger').length) return;
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger.create({
    trigger: '.swiper-trigger',
    once: true,
    start: '0% 150%',
    onEnter: function onEnter() {
      Promise.all(/*! import() | chunks/sliders_init */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/sliders_init")]).then(__webpack_require__.bind(__webpack_require__, /*! ./utils/sliders.js */ "./assets/js/src/theme/utils/sliders.js")).then(function (module) {
        new module["default"]();
      });
    }
  });
};
var skSliders = function skSliders() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sk-slider').length) {
    Promise.all(/*! import() | chunks/slider_controller */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/slider_controller")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/sliderController.js */ "./assets/js/src/theme/ui/sliderController.js")).then(function (module) {
      new module.init();
    });
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mb-table').length) {
    Promise.all(/*! import() | chunks/table_controller */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/table_controller")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/responsiveTables.js */ "./assets/js/src/theme/ui/responsiveTables.js")).then(function (module) {
      new module.init();
    });
  }
};
var skTOC = function skTOC() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.table-of-contents').length) return;
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger.create({
    trigger: '.table-of-contents',
    once: true,
    start: '0% 150%',
    onEnter: function onEnter() {
      __webpack_require__.e(/*! import() | chunks/toc */ "chunks/toc").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/toc.js */ "./assets/js/src/theme/ui/toc.js")).then(function (module) {
        new module.init();
      });
    }
  });
};
var skStars = function skStars() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sk-star-rating').length) return;
  console.log('stars');
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger.create({
    trigger: '.sk-star-rating',
    once: true,
    start: '0% 150%',
    onEnter: function onEnter() {
      __webpack_require__.e(/*! import() | chunks/star-rating */ "chunks/star-rating").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/star-rating.js */ "./assets/js/src/theme/ui/star-rating.js")).then(function (module) {
        new module.init();
      });
    }
  });
};
var customSelectInit = function customSelectInit() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.select-input').length) return;
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger.create({
    trigger: '.select-input',
    once: true,
    start: '0% 150%',
    onEnter: function onEnter() {
      Promise.all(/*! import() | chunks/select2 */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/select2")]).then(__webpack_require__.bind(__webpack_require__, /*! ./plugins/select2.js */ "./assets/js/src/theme/plugins/select2.js")).then(function () {
        /* let select2 =  */
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.select-input').select2();
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.no-search-dropdown-form').length) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.no-search-dropdown-form').each(function (i, e) {
            var thisSelect = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
            thisSelect.data('select2').$dropdown.addClass('no-search-select');
          });
        }
      });
    }
  });
};
var pagesAnimationsInit = function pagesAnimationsInit() {
  var modulesArray = [];
  var modulesCount = 0;
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section').length) {
    modulesCount += 1;
    Promise.all(/*! import() | chunks/homepage_animations */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/homepage_animations")]).then(__webpack_require__.bind(__webpack_require__, /*! ./animations/home.js */ "./assets/js/src/theme/animations/home.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
    });
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.social-item').length) {
    modulesCount += 1;
    __webpack_require__.e(/*! import() | chunks/social_share */ "chunks/social_share").then(__webpack_require__.bind(__webpack_require__, /*! ./utils/socialShare.js */ "./assets/js/src/theme/utils/socialShare.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
    });
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ajax-form').length) {
    modulesCount += 1;
    __webpack_require__.e(/*! import() | chunks/ajax_forms */ "chunks/ajax_forms").then(__webpack_require__.bind(__webpack_require__, /*! ./utils/ajaxForms.js */ "./assets/js/src/theme/utils/ajaxForms.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
    });
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.case-studies').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()('.blog').length) {
    modulesCount += 1;
    Promise.all(/*! import() | chunks/blog_filters */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/blog_filters")]).then(__webpack_require__.bind(__webpack_require__, /*! ./utils/blogFilter.js */ "./assets/js/src/theme/utils/blogFilter.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
    });
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.about-page-core-values-section').length) {
    modulesCount += 1;
    Promise.all(/*! import() | chunks/about_animations */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/about_animations")]).then(__webpack_require__.bind(__webpack_require__, /*! ./animations/about.js */ "./assets/js/src/theme/animations/about.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
    });
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.equipment-landing-section').length) {
    modulesCount += 1;
    Promise.all(/*! import() | chunks/equipment_animations */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/equipment_animations")]).then(__webpack_require__.bind(__webpack_require__, /*! ./animations/equipment.js */ "./assets/js/src/theme/animations/equipment.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
    });
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.meet-payment-expert-section').length) {
    modulesCount += 1;
    Promise.all(/*! import() | chunks/equipment_animations */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/equipment_animations")]).then(__webpack_require__.bind(__webpack_require__, /*! ./animations/payment_expert.js */ "./assets/js/src/theme/animations/payment_expert.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
    });
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.savings-calculator-page-section').length) {
    modulesCount += 1;
    __webpack_require__.e(/*! import() | chunks/calculator_animations */ "chunks/calculator_animations").then(__webpack_require__.bind(__webpack_require__, /*! ./animations/calculator.js */ "./assets/js/src/theme/animations/calculator.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
    });
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.single-article-section').length) {
    modulesCount += 1;
    __webpack_require__.e(/*! import() | chunks/article_animations */ "chunks/article_animations").then(__webpack_require__.bind(__webpack_require__, /*! ./animations/article.js */ "./assets/js/src/theme/animations/article.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
    });
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.careers-page-section').length) {
    modulesCount += 1;
    __webpack_require__.e(/*! import() | chunks/careers_animations */ "chunks/careers_animations").then(__webpack_require__.bind(__webpack_require__, /*! ./animations/careers.js */ "./assets/js/src/theme/animations/careers.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
    });
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contact-page').length) {
    modulesCount += 1;
    __webpack_require__.e(/*! import() | chunks/contacts_animations */ "chunks/contacts_animations").then(__webpack_require__.bind(__webpack_require__, /*! ./animations/contacts.js */ "./assets/js/src/theme/animations/contacts.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
    });
  }

  // global anims init
  modulesCount += 1;
  Promise.all(/*! import() | chunks/global_animations */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/global_animations")]).then(__webpack_require__.bind(__webpack_require__, /*! ./animations/global.js */ "./assets/js/src/theme/animations/global.js")).then(function (module) {
    modulesArray.push({
      loaded: true,
      moduleObj: module.init
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('moduleLoadedAnim', function () {
    var loadedModulesArray = [];
    modulesArray.forEach(function (e) {
      return loadedModulesArray.push(e);
    });
    if (loadedModulesArray.length == modulesCount && loadedModulesArray.length !== 0) {
      // setTimeout(() => {
      loadedModulesArray.map(function (e) {
        return e.moduleObj();
      });
      scrollToSectionFromAnotherPage();
      // }, 250);
    }
  });
};
var pagesUserInterfaceInit = function pagesUserInterfaceInit() {
  var modulesArray = [];
  var modulesCount = 0;
  // if ($('.landing-section-home').length) {
  //     modulesCount += 1;
  //     import( /* webpackChunkName: 'chunks/homepage_ui' */ './ui/home.js').then(module => {
  //         modulesArray.push({
  //             loaded: true,
  //             moduleObj: module.init
  //         });
  //         $(window).trigger('moduleLoadedUI');
  //     })
  // }

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.calculator-section').length) {
    modulesCount += 1;
    Promise.all(/*! import() | chunks/calculator_page_ui */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/calculator_page_ui")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/calculator.js */ "./assets/js/src/theme/ui/calculator.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedUI');
    });
  }

  // french about page rework to testimonial tabs to offset no forms making space
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('page-id-32709')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tabs-nav .testimonial-content-tab').hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tabs-nav .testimonial-content-tab:first').show();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs li a').click(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tabs-nav .testimonial-content-tab').hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tabs-nav .testimonial-content-tab.' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id')).show();
    });
  }

  // if ($('[data-scroll-container-inner]').length) {
  //   modulesCount += 1;
  //   import(
  //     /* webpackChunkName: 'chunks/smooth-scrollbar' */ './plugins/smooth-scrollbar-init.js'
  //   ).then((module) => {
  //     modulesArray.push({
  //       loaded: true,
  //       moduleObj: module.init,
  //     });
  //     $(window).trigger('moduleLoadedUI');
  //   });
  // }

  // data-scroll-container

  // pages global ui init
  modulesCount += 1;
  __webpack_require__.e(/*! import() | chunks/global_ui */ "chunks/global_ui").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/global.js */ "./assets/js/src/theme/ui/global.js")).then(function (module) {
    modulesArray.push({
      loaded: true,
      moduleObj: module.init
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedUI');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('moduleLoadedUI', function () {
    var loadedModulesArray = [];
    modulesArray.forEach(function (e) {
      return loadedModulesArray.push(e);
    });
    if (loadedModulesArray.length == modulesCount && loadedModulesArray.length !== 0) {
      setTimeout(function () {
        loadedModulesArray.map(function (e) {
          return e.moduleObj();
        });
      }, 250);
    }
  });
  if (document.addEventListener) {
    window.addEventListener('pageshow', function (event) {
      if (event.persisted || performance.getEntriesByType("navigation")[0].type === 'back_forward') {
        location.reload();
      }
    }, false);
  }
};
var checkPageLocation = function checkPageLocation() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section').length && !(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('header-offset-homepage');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('header-offset-homepage');
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('header-background-color');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('header-background-color');
  }
};
var youtubeEmbedPopupHandler = function youtubeEmbedPopupHandler(target) {
  if (!target.attr('data-video-embed-id').length) return;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('show-embed-popup-wrap');
  var container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.embed-popup-wrap');
  var iframeContainer = container.find('.iframe-container');

  // console.log(target.attr('data-video-embed-id').length);

  var iframe = "\n      <iframe src=\"https://www.youtube.com/embed/".concat(target.attr('data-video-embed-id'), "?rel=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    ");
  iframeContainer.html(iframe);
  container.off('click.embedPopupClick').on('click.embedPopupClick', function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parents('.embed-content-wrap').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parents('.popup-close-btn').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('popup-close-btn')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('show-embed-popup-wrap');
      iframeContainer.empty();
    }
  });
};
var vimeoEmbedPopupHandler = function vimeoEmbedPopupHandler(target) {
  if (typeof target === 'undefined') return;
  if (!target.attr('data-vimeo-embed-id').length) return;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('show-embed-popup-wrap');
  var container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.embed-popup-wrap');
  var iframeContainer = container.find('.iframe-container');

  // console.log(target.attr('data-video-embed-id').length);

  var iframe = "\n      <iframe src=\"https://player.vimeo.com/video/".concat(target.attr('data-vimeo-embed-id'), "?rel=0&autoplay=1\" title=\"Vimeo video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    ");
  iframeContainer.html(iframe);
  container.off('click.embedPopupClick').on('click.embedPopupClick', function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parents('.embed-content-wrap').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parents('.popup-close-btn').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('popup-close-btn')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('show-embed-popup-wrap');
      iframeContainer.empty();
    }
  });
};

// Youtube video embeds
/*
if($('.wp-block-embed-youtube').length){
  $('.wp-block-embed-youtube').each(function(){
    console.log($(this));
    console.log($(this).find('.wp-block-embed__wrapper').text());
    var videoID = $(this).find('.wp-block-embed__wrapper').text().split('=');
    console.log(videoID);
    var url = videoID[1].trim();
    var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+url+'?si=fsXHquYUYbp7tIxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    $(this).find('.wp-block-embed__wrapper').empty().append(iframe);
  });
}
*/

// binds
var funcInBind = function funcInBind() {
  // YouTube
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-video-embed-id]').on('click', function (e) {
    e.preventDefault();
    youtubeEmbedPopupHandler(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
  });

  // Vimeo
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-vimeo-embed-id]').on('click', function (e) {
    e.preventDefault();
    vimeoEmbedPopupHandler(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
    recaptchaTextareaAccessibilityFix();
  });

  // show-file-error
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('form').on('change focus keydown paste input select2:open click', 'input, textarea, select', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).parents('.form-error').removeClass('form-error');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).parents('.form-row').find('.show-file-error').removeClass('show-file-error');
  });
  checkPageLocation();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resizeObserverTrigger', function () {
    checkPageLocation();
  });
  // $(window).on('resize', () => {
  // });
};

// Popup form
var popupForm = function popupForm() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contact-form-block').length > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sticky-contact').addClass('fixed-sticky');
  }
  var focusForm = function focusForm(formWrapper) {
    if (formWrapper.length) {
      if (formWrapper.find('form').length) setTimeout(function () {
        return formWrapper.find('form input').first().focus();
      }, 100);
    }
  };
  var checkPopupFormClass = function checkPopupFormClass() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form--container').length > 0) {
      var form = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form--container').detach();
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('open-popup-form') || jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('open-header-popup-form')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form--area').html(form);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-block-area').html(form);
      }
    }
  };
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.open-form-modal').each(function (_, item) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).hasClass('looking')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('open-popup-form');
        focusForm(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup-form'));
        checkPopupFormClass();
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).addClass('looking');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#form-popup').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('open-header-popup-form');
    checkPopupFormClass();
  });
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form--container').length > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form--area').html('');
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.blog-search-form').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('open-popup-form');
    focusForm(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup-blog-form'));
    checkPopupFormClass();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-open-form-btn').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('open-popup-form');
    focusForm(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup-form'));
    checkPopupFormClass();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.download-open-form-btn').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('open-download-popup-form open-popup-form');
    focusForm(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.download-popup-form'));
    checkPopupFormClass();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.callback-popup-btn').on('click', function (e) {
    e.preventDefault();
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('anchor-link')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('open-callback-popup-form open-popup-form');
      focusForm(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.callback-popup-form'));
      checkPopupFormClass();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.block-callback-popup-btn').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('open-talk-to-us-block-popup-form');
    checkPopupFormClass();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').on('click', '.form-popup-close-btn', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('open-popup-form');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('open-header-popup-form');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('open-download-popup-form');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('open-callback-popup-form');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('open-talk-to-us-block-popup-form');
    checkPopupFormClass();
  });
};

// Contacts
var contactsTabs = function contactsTabs() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs li a:not(:first)').addClass('inactive');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs li a').click(function () {
    var t = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('tab');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('inactive')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs li a').addClass('inactive');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('inactive');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tab-content .tab-content-wrap, .tabs-nav .testimonial-content-tab').removeClass('show').hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tab-content  .tab-content-wrap[data-tab=".concat(t, "]")).fadeIn('slow');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-nav .testimonial-content-tab[data-testimonial=".concat(t, "]")).fadeIn('slow');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('contactPageChangeContainer', {
        activeEl: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + t + 'C')
      });
    }
  });
};

// Comparison table
var comparisonTable = function comparisonTable() {
  //$('.accent-column:first').addClass('first-accent-column');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.accent-column:last').addClass('last-accent-column');
};

// Blog filter
var blogFilter = function blogFilter() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#filter').submit(function () {
    var filter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#filter');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      url: filter.attr('action'),
      data: filter.serialize(),
      // form data
      type: filter.attr('method'),
      // POST
      beforeSend: function beforeSend(xhr) {
        filter.find('button').text('Processing...'); // changing the button label
      },
      success: function success(data) {
        filter.find('button').text('Apply filter'); // changing the button label back
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#response').html(data); // insert data
      }
    });
    return false;
  });
};
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bg-image[data-bg-image]').each(function (_, item) {
    var src = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).data('bg-image');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).css('background-image', "url(".concat(src, ")"));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bg-image[data-bg-imageset]').each(function (_, item) {
    // console.log(item, 'item');
    var src = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).data('bg-imageset');
    // console.log(src, 'src');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).attr('style', "background-image: image-set(\"".concat(src, "\")"));
  });
});
var filterTrigger = function filterTrigger() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#filter select').on('change', function () {
    blogFilter();
  });
};

// const surveyBackBtn = () => {
//     $('body').on('click', function () {
//         $('.inner-pages-quiz-section .cta-back').on('click', function () {
//             window.location.reload();
//         });
//     });
// }

// const surveyBackBtn = () => {
//   $('.inner-pages-quiz-section').on('DOMSubtreeModified', function () {
//     if ($('.inner-pages-quiz-section .confirmation-body').length) {
//       // console.log("im here");
//       $('.survey-heading-holder').hide();
//     }
//     $('.inner-pages-quiz-section .cta-back').on('click', function () {
//       window.location.reload();
//     });
//   });
// };

// const equipmentSurveyBackBtn = () => {
//   $('.inner-pages-quiz-section-type-2').on('DOMSubtreeModified', function () {
//     if ($('.inner-pages-quiz-section-type-2 .confirmation-body').length) {
//       // console.log("im here");
//       $('.survey-heading-holder').hide();
//     }
//     $('.inner-pages-quiz-section-type-2 .cta-back').on('click', function () {
//       window.location.reload();
//     });
//   });
// };

var surveyBackBtn = function surveyBackBtn() {
  var targetNode = document.querySelector('.inner-pages-quiz-section');
  if (!targetNode) {
    // console.error('Target node not found');
    return;
  }
  var config = {
    childList: true,
    subtree: true
  };
  var callback = function callback(mutationsList, observer) {
    var _iterator = _createForOfIteratorHelper(mutationsList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;
        if (mutation.type === 'childList') {
          if (document.querySelector('.inner-pages-quiz-section .confirmation-body')) {
            document.querySelector('.survey-heading-holder').style.display = 'none';
          }
          document.querySelectorAll('.inner-pages-quiz-section .cta-back').forEach(function (btn) {
            btn.addEventListener('click', function () {
              window.location.reload();
            });
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  var observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
};
var equipmentSurveyBackBtn = function equipmentSurveyBackBtn() {
  var targetNode = document.querySelector('.inner-pages-quiz-section-type-2');
  if (!targetNode) {
    // console.error('Target node not found');
    return;
  }
  var config = {
    childList: true,
    subtree: true
  };
  var callback = function callback(mutationsList, observer) {
    var _iterator2 = _createForOfIteratorHelper(mutationsList),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var mutation = _step2.value;
        if (mutation.type === 'childList') {
          if (document.querySelector('.inner-pages-quiz-section-type-2 .confirmation-body')) {
            document.querySelector('.survey-heading-holder').style.display = 'none';
          }
          document.querySelectorAll('.inner-pages-quiz-section-type-2 .cta-back').forEach(function (btn) {
            btn.addEventListener('click', function () {
              window.location.reload();
            });
          });
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  var observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
};
var backgroundVideoHandler = function backgroundVideoHandler() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.background-video').length) {
    var videos = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.background-video');
    videos.each(function (i, e) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).on('loadeddata', function () {
        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).addClass('display-video');
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('src', jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('data-src'));
    });
    var checkSizeHandler = function checkSizeHandler(container) {
      var valueHeight = Math.round(container.outerWidth() / 1920 * 1080);
      var valueWidth = Math.round(container.outerHeight() / 1080 * 1920);

      // console.log(valueHeight, 'valueHeight');
      // console.log(valueWidth, 'valueWidth');

      if (container.outerHeight() > valueHeight) {
        gsap__WEBPACK_IMPORTED_MODULE_5__["default"].set(container.find('.background-video'), {
          height: container.outerHeight(),
          width: valueWidth
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_5__["default"].set(container.find('.background-video'), {
          width: container.outerWidth(),
          height: valueHeight
        });
      }
    };
    videos.each(function (i, e) {
      return checkSizeHandler(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).parent());
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resizeObserverTrigger', function () {
      videos.each(function (i, e) {
        return checkSizeHandler(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).parent());
      });
    });
  }
};

// load chat
function loadChatWidget() {
  if (false) {}
  !function () {
    for (var t = ["twilio-chat.v4.min.js", "webchat-pilotConfig.js"], e = t.length - 1; e >= 0; e--) {
      var n = document.createElement("script");
      n.type = "text/javascript", n.defer = !0, n.src = "https://wordpress-prod-ep.azureedge.net/cdn/" + t[e];
      n.crossorigin = !0;
      var a = document.getElementsByTagName("script")[0];
      a.parentNode.insertBefore(n, a);
    }
  }();
}
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("load", function () {
  // don't load chat for french pages, english careers, dev site
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('html[lang=fr-CA]').length && !jquery__WEBPACK_IMPORTED_MODULE_0___default()('body.page-id-2719').length && !window.location.host.includes('wordpress-dev-appsvc') && !window.location.host.includes('local')) {
    setTimeout(loadChatWidget, 10e3);
  }
});
var twilioChatHandler = function twilioChatHandler() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').on('click', '.twilio-chat-btn', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.Twilio-EntryPoint').click();
  });
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sticky-contact').length && (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)() && jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).width() <= 500) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('hide-twilio-chat-btn');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('.mobile-menu-opened');
  }
};

// chat toggle
var chatExists = setInterval(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.chat-info-welcome').length) {
    clearInterval(chatExists);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-chat-close').addClass('show');
    if (window.location.href.indexOf('/es/') > -1) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-chat-close').addClass('spanish');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sekure-connect-chat').addClass('spanish');
    }
  }
}, 100);
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-chat-close').on('click', function (event) {
  event.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sekure-connect-chat').addClass('hide-chat');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('show');
});

// ui init
var UI = function UI() {
  checkForTables();
  smoothScrollHandler();
  autoplayVideos();
  new _animations_splitText__WEBPACK_IMPORTED_MODULE_2__["default"]();
  loadRecaptchaScript();
  funcInBind();
  (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.lazyLoading)();
  slidersInit();
  skSliders();
  skTOC();
  skStars();
  backgroundVideoHandler();
  pagesUserInterfaceInit();
  pagesAnimationsInit();
  customSelectInit();
  popupForm();
  contactsTabs();
  comparisonTable();
  filterTrigger();
  surveyBackBtn();
  equipmentSurveyBackBtn();
  twilioChatHandler();
  vimeoEmbedPopupHandler();
};

/***/ }),

/***/ "./assets/js/src/theme/utils/smoothScroll.js":
/*!***************************************************!*\
  !*** ./assets/js/src/theme/utils/smoothScroll.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anchorScroll: function() { return /* binding */ anchorScroll; },
/* harmony export */   locoScroll: function() { return /* binding */ locoScroll; },
/* harmony export */   scrollTo: function() { return /* binding */ scrollTo; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);





// gsap.defaults({
//   ease: 'none',
//   duration: 0.5,
// });

var locoScroll;
var smoothScrollHandler = function smoothScrollHandler() {
  locoScroll = false;

  // Assuming Locomotive Scroll provides a 'locoContextChanges' event (adjust if it's different)

  // const savedPosition = localStorage.getItem("scrollPosition");

  // scrollToHistory(savedPosition);

  // $('.scroll-to-next-btn')
  //   .off('click.gsapSmoothScroll')
  //   .on('click.gsapSmoothScroll', (e) => {
  //     gsap.to(window, {
  //       duration: 1,
  //       scrollTo: $(e.currentTarget).parents('section').next()[0],
  //     });
  //   });

  // const resizeObserver = new ResizeObserver(
  //   debounce(() => {
  //     if (isMobile()) {
  //       ScrollTrigger.refresh();
  //     }
  //     if (!isMobile() && !locoScroll) {
  //       window.location.reload(true);
  //       // $("html").addClass("browser-scroll");
  //       // setTimeout(() => {
  //       location.reload(true);
  //       // }, 500);
  //     }
  //     $(window).trigger('resizeObserverTrigger');
  //     // console.log('Size changed');
  //   }, 100),
  // );

  // resizeObserver.observe($('#main-content')[0]);
};
/* harmony default export */ __webpack_exports__["default"] = (smoothScrollHandler);
function scrollTo(target) {
  if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
    var adjustedTopPosition = jquery__WEBPACK_IMPORTED_MODULE_1___default()(target).offset().top - 100;
    if (window.innerWidth > 600 && window.innerWidth < 1024) {
      adjustedTopPosition = adjustedTopPosition - 50;
    }
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html, body').animate({
      scrollTop: adjustedTopPosition
    }, 100);
  } else {
    gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.refresh();
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(window, {
      duration: 1,
      scrollTo: jquery__WEBPACK_IMPORTED_MODULE_1___default()(target).offset().top - jquery__WEBPACK_IMPORTED_MODULE_1___default()('#header').outerHeight()
    });
  }
}
function anchorScroll() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.anchor-link').each(function (index, element) {
    console.log('anchor-link', index, element);
    if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(element).data('listening')) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(element).on('click', function (e) {
        e.preventDefault();
        var linkDataValue = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.currentTarget).data('scroll-section-target-id');
        var targetElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()("[data-link-scroll-target-section-id=\"".concat(linkDataValue, "\"]"))[0];
        if (!targetElement) {
          targetElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()("[data-scroll-section-id=\"".concat(linkDataValue, "\"]"))[0];
        }
        if (!targetElement) {
          targetElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#".concat(linkDataValue))[0];
        }
        if (targetElement) {
          scrollTo(targetElement);
        } else {
          console.error('Element not found', targetElement, linkDataValue);
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(element).attr('data-listening', true);
    }
  });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["/js/dist/theme-scripts/vendor"], function() { return __webpack_exec__("./assets/js/src/theme/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map