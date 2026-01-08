"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["/js/landers/dist/theme-scripts/app"],{

/***/ "./assets/js/landers/src/theme/ajax/phone-number-validation.js":
/*!*********************************************************************!*\
  !*** ./assets/js/landers/src/theme/ajax/phone-number-validation.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

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
var hubspotSubmitButtonClick = setInterval(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('button.hs-button[type=submit]').length && jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=phone]').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=phone]').parents('.hbspt-form').addClass('phone-validate');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form.phone-validate button.hs-button[type=submit]').attr('disabled', 'disabled');
    clearInterval(hubspotSubmitButtonClick);
  }
}, 500);

// check the input's value
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('change input blur focus', '.hbspt-form.phone-validate input[name=phone]', function () {
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

/***/ }),

/***/ "./assets/js/landers/src/theme/ajax/plugins-reload.js":
/*!************************************************************!*\
  !*** ./assets/js/landers/src/theme/ajax/plugins-reload.js ***!
  \************************************************************/
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

/***/ "./assets/js/landers/src/theme/ajax/toll-free-numbers.js":
/*!***************************************************************!*\
  !*** ./assets/js/landers/src/theme/ajax/toll-free-numbers.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


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
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('campaign-toll-free');

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

/***/ }),

/***/ "./assets/js/landers/src/theme/app.js":
/*!********************************************!*\
  !*** ./assets/js/landers/src/theme/app.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./assets/js/landers/src/theme/init.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./assets/js/landers/src/theme/ui.js");
/* harmony import */ var _ui_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/forms.js */ "./assets/js/landers/src/theme/ui/forms.js");
/* harmony import */ var _ajax_toll_free_numbers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajax/toll-free-numbers.js */ "./assets/js/landers/src/theme/ajax/toll-free-numbers.js");
/* harmony import */ var _ajax_phone_number_validation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajax/phone-number-validation.js */ "./assets/js/landers/src/theme/ajax/phone-number-validation.js");
/* harmony import */ var _ajax_plugins_reload_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajax/plugins-reload.js */ "./assets/js/landers/src/theme/ajax/plugins-reload.js");



//import './privacy-policy.js';
//import './surveys.js';


//import './ajax/surveys-submit.js';

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

/***/ "./assets/js/landers/src/theme/helpers/helper.js":
/*!*******************************************************!*\
  !*** ./assets/js/landers/src/theme/helpers/helper.js ***!
  \*******************************************************/
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
/* harmony export */   scrollTo: function() { return /* binding */ scrollTo; },
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

/*
function scrollToElem(el, sec, offset) {
  $('html, body').animate(
    {
      scrollTop: el.offset().top - offset,
    },
    sec,
  );
}
*/

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
function scrollTo(target) {
  if (!target.length) {
    var target = jquery__WEBPACK_IMPORTED_MODULE_1___default()(target);
  }
  jquery__WEBPACK_IMPORTED_MODULE_1___default()([document.documentElement, document.body]).animate({
    scrollTop: target.offset().top - jquery__WEBPACK_IMPORTED_MODULE_1___default()("#header").outerHeight(true)
  }, 350, 'linear', function () {
    // Callback after animation
    // Must change focus!
    var $target = jquery__WEBPACK_IMPORTED_MODULE_1___default()(target);
    $target.focus();
    if ($target.is(':focus')) {
      // Checking if the target was focused
      return false;
    } else {
      $target.focus(); // Set focus again
    }
  });
}


/***/ }),

/***/ "./assets/js/landers/src/theme/init.js":
/*!*********************************************!*\
  !*** ./assets/js/landers/src/theme/init.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/helper */ "./assets/js/landers/src/theme/helpers/helper.js");
/* harmony import */ var is_in_viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-in-viewport */ "./node_modules/is-in-viewport/lib/isInViewport.es6.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


var init = function init() {
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';

    //Listen for unload event. This is triggered when leaving the page.
    //Reference: https://developer.mozilla.org/en-US/docs/Web/Events/unload
    window.addEventListener('unload', function (e) {
      //set scroll position to the top of the page.
      var adjustedTopPosition = $(window).offset().top - 100;
      if (window.innerWidth > 600 && window.innerWidth < 1024) {
        adjustedTopPosition = adjustedTopPosition - 50;
      }
      $('html, body').animate({
        scrollTop: adjustedTopPosition
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
    var scripts = {
      'bootstrap_css_afterload': '/wp-content/themes/sekure/assets/css/styles/bootstrap.css',
      'blocks_css_afterload': '/wp-content/themes/sekure/assets/css/styles/blocks/blocks.css',
      'landers_css_afterload': '/wp-content/themes/sekure/assets/css/styles/landers.css',
      'styles_css_afterload': '/wp-content/themes/sekure/assets/css/styles/style.css'
    };
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
    var hubspotFormScript = document.createElement('script');
    hubspotFormScript.id = 'hubspot_load_forms';
    hubspotFormScript.type = 'text/javascript';
    hubspotFormScript.src = 'https://js.hsforms.net/forms/embed/v2.js';
    document.head.append(hubspotFormScript);
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
  if (document.readyState !== 'loading') {
    console.log('before script loaded 1');
    loadLandingsScripts();
    setTimeout(initOver, 2500);
    // don't load chat for french pages, english careers, dev site
    if (!$('html[lang=fr-CA]').length && !$('body.page-id-2719').length && !window.location.host.includes('wordpress-dev-appsvc') && !window.location.host.includes('.local')) {
      setTimeout(loadChatWidget, 10e3);
    }
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      console.log('before script loaded 2');
      loadLandingsScripts();
      setTimeout(initOver, 2500);
      // don't load chat for french pages, english careers, dev site
      if (!$('html[lang=fr-CA]').length && !$('body.page-id-2719').length && !window.location.host.includes('wordpress-dev-appsvc') && !window.location.host.includes('.local')) {
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
  $('html').on('headerChanged', function () {
    calculateHeight();
  });
  $('html').on('windowTypeChanged', function () {
    setTimeout(function () {
      calculateHeight();
    }, 350);
  });
  $('.sk-block').each(function (i, el) {
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
  $('img:not([alt]), image:not(alt)').each(function (_, img) {
    $(img).attr('alt', 'Decorative Image');
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
        $('*.op-0').removeClass('op-0');
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

/***/ "./assets/js/landers/src/theme/ui.js":
/*!*******************************************!*\
  !*** ./assets/js/landers/src/theme/ui.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: function() { return /* binding */ UI; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/helper */ "./assets/js/landers/src/theme/helpers/helper.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_2__);
// UI elements functionality






// register gsap plugins
gsap__WEBPACK_IMPORTED_MODULE_3__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);

// scrollable links
jquery__WEBPACK_IMPORTED_MODULE_0___default()('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]').not('[href="#0"]').not('.lang-current').on('click', function (event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    // Figure out element to scroll to
    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.hash);
    target = target.length ? target : jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.scrollTo)(target);
    }
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').trigger('headerChanged');
});

// arrow down button
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.scroll-to-next-btn', function (e) {
  e.preventDefault();
  var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.sk-block').next();
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).length) {
    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('section').next();
  }
  (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.scrollTo)(target);
});
var scrollToSectionFromAnotherPage = function scrollToSectionFromAnotherPage() {
  if (typeof window.location.href.split('#')[1] === 'undefined') return;
  var urlTarget = window.location.href.split('#')[1];
  var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-page-scroll-id=\"".concat(urlTarget, "\"]"))[0];
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).length) {
    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[id=\"".concat(urlTarget, "\"]"))[0];
  }
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).length) return;
  (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.scrollTo)(target);
};

// Popup functionality
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '[data-popup-id]', function (e) {
  e.preventDefault();
  var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  $this.attr('disabled', true);
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
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content').empty();
    },
    success: function success(response) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content').append(response);
      if (popup_id == 34475 && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.newsletter-form .hbspt-form').length) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.newsletter-form .hbspt-form').detach().appendTo('.popup .popup-content');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content').addClass('download-form');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.popup .popup-content .hbspt-form button[type=submit]').removeClass('section-color-white').addClass('section-color-blue');
      } else {
        var moveLoadedForm = setInterval(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('head .hbspt-form').length) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('head .hbspt-form input[name=page_url]').val(window.location.href);

            // /english-sales-jobs-in-montreal
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('postid-38405')) {
              console.log('this is the right page');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=utm_campaign]').val('Careers - English sales jobs in Montreal');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=utm_source]').val('ppc');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=utm_medium]').val('landing page');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=utm_term]').val('montreal-recruitment');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=utm_content]').val('form-submission');
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('head .hbspt-form div.hs_submit').length) {
              var submitWrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()('head .hbspt-form div.hs_submit').find('.actions');
              var submit = jquery__WEBPACK_IMPORTED_MODULE_0___default()('head .hbspt-form div.hs_submit').find('input[type=submit]');
              var label = submit.val();
              submit.remove();
              if (label != undefined) {
                submitWrap.append('<button type="submit" class="hs-button primary large btn-default c-blue-1 btn-green-1 section-color-blue" value="' + label + '"><span class="btn-bg-el"></span><span class="btn-txt">' + label + '</span></button>');
              }
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('head .hbspt-form input[name=phone]').length) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('head .hbspt-form input[name=phone]').parents('.hbspt-form').addClass('phone-validate');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form.phone-validate button.hs-button[type=submit]').attr('disabled', 'disabled');
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('head .hbspt-form').appendTo('.popup .popup-content');
            clearInterval(moveLoadedForm);
          }
        }, 500);
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('open-popup');
      $this.removeAttr('disabled');
    }
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.popup-close-btn', function () {
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
var checkForTables = function checkForTables() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sk-block table').length) return;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sk-block table').each(function (i, e) {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).wrap('<div data-scroll-container-inner class="table-wrapper"></div>');
  });
};

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
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.swiper-trigger').length) {
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({
      trigger: '.swiper-trigger',
      once: true,
      start: '0% 150%',
      onEnter: function onEnter() {
        Promise.all(/*! import() | chunks/landers_sliders_init */[__webpack_require__.e("/js/landers/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/landers_sliders_init")]).then(__webpack_require__.bind(__webpack_require__, /*! ./utils/sliders.js */ "./assets/js/landers/src/theme/utils/sliders.js")).then(function (module) {
          new module["default"]();
        });
      }
    });
  } else {
    var count = 0;
    var slidersInitCheck = setInterval(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.swiper-trigger').length) {
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({
          trigger: '.swiper-trigger',
          once: true,
          start: '0% 150%',
          onEnter: function onEnter() {
            Promise.all(/*! import() | chunks/landers_sliders_init */[__webpack_require__.e("/js/landers/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/landers_sliders_init")]).then(__webpack_require__.bind(__webpack_require__, /*! ./utils/sliders.js */ "./assets/js/landers/src/theme/utils/sliders.js")).then(function (module) {
              new module["default"]();
            });
          }
        });
        console.log('swiper trigger found, interval cleared');
        clearInterval(slidersInitCheck);
      } else if (count >= 10) {
        console.log('swiper trigger NOT found, interval cleared');
        clearInterval(slidersInitCheck);
      }
      count++;
    }, 1000);
  }
};
var skSliders = function skSliders() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sk-slider').length) {
    Promise.all(/*! import() | chunks/landers_slider_controller */[__webpack_require__.e("/js/landers/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/landers_slider_controller")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/sliderController.js */ "./assets/js/landers/src/theme/ui/sliderController.js")).then(function (module) {
      new module.init();
    });
  } else {
    var count = 0;
    var slidersCheck = setInterval(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sk-slider').length) {
        Promise.all(/*! import() | chunks/landers_slider_controller */[__webpack_require__.e("/js/landers/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/landers_slider_controller")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/sliderController.js */ "./assets/js/landers/src/theme/ui/sliderController.js")).then(function (module) {
          new module.init();
        });
        console.log('sk slider found, interval cleared');
        clearInterval(slidersCheck);
      } else if (count >= 10) {
        console.log('sk slider NOT found, interval cleared');
        clearInterval(slidersCheck);
      }
      count++;
    }, 1000);
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mb-table').length) {
    Promise.all(/*! import() | chunks/landers_table_controller */[__webpack_require__.e("/js/landers/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/landers_table_controller")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/responsiveTables.js */ "./assets/js/landers/src/theme/ui/responsiveTables.js")).then(function (module) {
      new module.init();
    });
  } else {
    var _count = 0;
    var mobileTables = setInterval(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mb-table').length) {
        Promise.all(/*! import() | chunks/landers_table_controller */[__webpack_require__.e("/js/landers/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/landers_table_controller")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/responsiveTables.js */ "./assets/js/landers/src/theme/ui/responsiveTables.js")).then(function (module) {
          new module.init();
        });
        console.log('responsive tables found, interval cleared');
        clearInterval(mobileTables);
      } else if (_count >= 10) {
        console.log('responsive tables not found, interval cleared');
        clearInterval(mobileTables);
      }
      _count++;
    }, 1000);
  }
};
var pagesAnimationsInit = function pagesAnimationsInit() {
  var modulesArray = [];
  var modulesCount = 0;

  // global anims init
  modulesCount += 1;
  Promise.all(/*! import() | chunks/landers_animations */[__webpack_require__.e("/js/landers/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/landers_animations")]).then(__webpack_require__.bind(__webpack_require__, /*! ./animations/landers.js */ "./assets/js/landers/src/theme/animations/landers.js")).then(function (module) {
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
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.calculator-section').length) {
    modulesCount += 1;
    Promise.all(/*! import() | chunks/landers_calculator_page_ui */[__webpack_require__.e("/js/landers/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/landers_calculator_page_ui")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/calculator.js */ "./assets/js/landers/src/theme/ui/calculator.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedUI');
    });
  } else {
    var count = 0;
    var calculatorCheck = setInterval(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.calculator-section').length) {
        modulesCount += 1;
        Promise.all(/*! import() | chunks/landers_calculator_page_ui */[__webpack_require__.e("/js/landers/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/landers_calculator_page_ui")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/calculator.js */ "./assets/js/landers/src/theme/ui/calculator.js")).then(function (module) {
          modulesArray.push({
            loaded: true,
            moduleObj: module.init
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedUI');
        });
        //console.log('savings calculator exists, interval cleared');
        clearInterval(calculatorCheck);
      } else if (count >= 5) {
        //console.log('savings calculator interval cleared without existing');
        clearInterval(calculatorCheck);
      }
      count++;
    }, 1000);
  }

  // landers ui init
  modulesCount += 1;
  __webpack_require__.e(/*! import() | chunks/landers_ui */ "chunks/landers_ui").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/landers.js */ "./assets/js/landers/src/theme/ui/landers.js")).then(function (module) {
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
var videoAutoplayEnlarge = function videoAutoplayEnlarge() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.video-autoplay-enlarge').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.video-autoplay-enlarge');
  var iframeObject = section.find('.iframe-container iframe');
  var iframeSRC = iframeObject.attr('src');
  var iframe;
  if (iframeSRC.includes('vimeo')) {
    var iframe = "\n      <iframe src=\"".concat(iframeSRC, "?rel=0&autoplay=1\" title=\"Vimeo video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    ");
  } else {}
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('show-embed-popup-wrap');
  var container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.embed-popup-wrap');
  var iframeContainer = container.find('.iframe-container');
  iframeContainer.html(iframe);
  container.off('click.embedPopupClick').on('click.embedPopupClick', function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parents('.embed-content-wrap').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parents('.popup-close-btn').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('popup-close-btn')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('show-embed-popup-wrap');
      iframeContainer.empty();
    }
  });
};

// Comparison table
var comparisonTable = function comparisonTable() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.accent-column:first').addClass('first-accent-column');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.accent-column:last').addClass('last-accent-column');
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

var skStars = function skStars() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sk-star-rating').length) return;
  console.log('stars');
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({
    trigger: '.sk-star-rating',
    once: true,
    start: '0% 150%',
    onEnter: function onEnter() {
      __webpack_require__.e(/*! import() | chunks/landers-star-rating */ "chunks/landers-star-rating").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/star-rating.js */ "./assets/js/landers/src/theme/ui/star-rating.js")).then(function (module) {
        new module.init();
      });
    }
  });
};

/* CHAT
------------------------------------------------------------ */
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
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.twilio-chat-btn', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.Twilio-EntryPoint').click();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load resize', function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sticky-contact').length && (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)() && jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 550) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('hide-twilio-chat-btn');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('hide-twilio-chat-btn');
  }
});

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
}, 500);

/* BINDS
------------------------------------------------------------------ */
var funcInBind = function funcInBind() {
  // background images load
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

  // hero contact form sticky
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contact-form-block').length > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sticky-contact').addClass('fixed-sticky');
  }

  // YouTube
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '[data-video-embed-id]', function (e) {
    e.preventDefault();
    youtubeEmbedPopupHandler(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
  });

  // Vimeo
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '[data-vimeo-embed-id]', function (e) {
    e.preventDefault();
    vimeoEmbedPopupHandler(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
  });

  // close chat
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-chat-close').on('click', function (event) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sekure-connect-chat').addClass('hide-chat');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('show');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.video-autoplay-enlarge').length) {
      videoAutoplayEnlarge();
    }
  });
};

/* UI INIT
------------------------------------------------------------------ */
var UI = function UI() {
  checkForTables();
  //smoothScrollHandler();
  autoplayVideos();
  //new SplitTextGSAP();
  //loadRecaptchaScript();
  funcInBind();
  (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.lazyLoading)();
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

/***/ }),

/***/ "./assets/js/landers/src/theme/ui/forms.js":
/*!*************************************************!*\
  !*** ./assets/js/landers/src/theme/ui/forms.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


// hide hidden fields parents
var formHiddenInputs = setInterval(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form').find('input[type=hidden]').each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('fieldset').css('display', 'none');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form input[name=page_url]').val(window.location.href);

    // /english-sales-jobs-in-montreal
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('postid-38405')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=utm_campaign]').val('Careers - English sales jobs in Montreal');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=utm_source]').val('ppc');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=utm_medium]').val('landing page');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=utm_term]').val('montreal-recruitment');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=utm_content]').val('form-submission');
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
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.hs_submit').length > 0) {
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
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('footer .hbspt-form input[name=email]').length) {
    // console.log('testing for email field on mobile');
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
    // console.log($(`#${input}`));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(input)).on('keyup', function (inpt) {
      // console.log('change', inpt, $(`#${input}`).val());
      // console.log(inpt.target.value);
      if (inpt.target.value) {
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
  var formCheck = setInterval(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page-form .hs-input').length && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page-form .hs-input').val() != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page-form .hs-input').each(function (i) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val != '') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.input').siblings('label').addClass('filled');
        }
      });
      clearInterval(formCheck);
    }
  }, 500);
  observeFormInput('.form-contact-section-home .home-page-form:not(.sk-form-hbsp-ltd)', 'sk-form-hbsp-ltd', listenInputChange);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["/js/landers/dist/theme-scripts/vendor"], function() { return __webpack_exec__("./assets/js/landers/src/theme/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map