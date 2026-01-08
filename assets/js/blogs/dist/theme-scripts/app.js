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
/* harmony import */ var _ui_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/forms.js */ "./assets/js/src/theme/ui/forms.js");
/* harmony import */ var _ajax_phone_number_validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajax/phone-number-validation.js */ "./assets/js/src/theme/ajax/phone-number-validation.js");
/* harmony import */ var _ajax_plugins_reload_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajax/plugins-reload.js */ "./assets/js/src/theme/ajax/plugins-reload.js");



//import './privacy-policy.js';
//import './surveys.js';
//import './ajax/toll-free-numbers.js';

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
/* harmony export */   scrollTo: function() { return /* binding */ scrollTo; },
/* harmony export */   scrollToElem: function() { return /* binding */ scrollToElem; },
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
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#main-content, #header').children().each(function (i, e) {
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

/***/ "./assets/js/src/theme/init.js":
/*!*************************************!*\
  !*** ./assets/js/src/theme/init.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var is_in_viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-in-viewport */ "./node_modules/is-in-viewport/lib/isInViewport.es6.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var classList = $('body').attr('class').split(/\s+/);
var pageIdClass = '';
var post_id;
$.each(classList, function (index, item) {
  if (item.includes('postid-')) {
    pageIdClass = item;
  }
});
if (pageIdClass != '') {
  var classArry = pageIdClass.split('-');
  post_id = classArry[1];
}
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
  function loadBlogScripts() {
    var scripts = {
      'blog_css_afterload': '/wp-content/themes/sekure/assets/css/styles/blogs.css',
      'bootstrap_css_afterload': '/wp-content/themes/sekure/assets/css/styles/bootstrap.css',
      'blocks_css_afterload': '/wp-content/themes/sekure/assets/css/styles/blocks/blocks.css',
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
    $.ajax({
      url: '/wp-content/themes/sekure/partials/blog-post-content.php',
      type: 'post',
      dataType: 'html',
      data: {
        post_id: post_id
      },
      success: function success(response) {
        //console.log(response);
        $('.article-content').prepend(response);
        setTimeout(function () {
          $('html').removeClass("init");
        }, 250);
      }
    });
    $.ajax({
      url: '/wp-content/themes/sekure/partials/blog-post-categories.php',
      type: 'post',
      dataType: 'html',
      data: {
        post_id: post_id
      },
      success: function success(response) {
        $('.article-aside .posts-categories').append(response);
      }
    });
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
    loadBlogScripts();
    console.log('before script loaded 1');
    setTimeout(function () {
      if ($('#hubspot_form_js').length) {
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
    if (!$('html[lang=fr-CA]').length && !$('body.page-id-2719').length && !window.location.host.includes('wordpress-dev-appsvc') && !window.location.host.includes('.local')) {
      setTimeout(loadChatWidget, 10e3);
    }
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      loadBlogScripts();
      console.log('before script loaded 2');
      setTimeout(function () {
        if ($('#hubspot_form_js').length) {
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
    if ($('html').scrollTop() > $('body').height() / 3.25 && !$('html').hasClass('ajax-content')) {
      $('html').addClass('ajax-content');
      $.ajax({
        url: '/wp-content/themes/sekure/partials/blog-post-related.php',
        type: 'post',
        dataType: 'html',
        data: {
          post_id: post_id
        },
        success: function success(response) {
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
        url: '/wp-content/themes/sekure/partials/blog-post-prefooter.php',
        type: 'post',
        dataType: 'html',
        data: {
          post_id: post_id
        },
        success: function success(response) {
          $('.single-article-section').after(response);
        }
      });
    }
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
    $('body').css({
      // paddingTop: 'inherit',
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
$(document).on('click', '.tldr-button', function (e) {
  handleSummary(e);
});
function handleSummary(_x) {
  return _handleSummary.apply(this, arguments);
}
function _handleSummary() {
  _handleSummary = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var summaryOutput, content, summarizer, summary;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          summaryOutput = document.querySelector(".summary");
          console.log(summaryOutput);
          $('.blog-content').find('section').remove();
          $('.blog-content').find('picture').remove();
          $('.blog-content').find('.btn-default').remove();
          $('.blog-content').find('br').remove();
          $('.blog-content').find('p:empty').remove();
          content = $('.blog-content').html();
          console.log(content);
          summaryOutput.innerHTML = "";
          _context.prev = 11;
          _context.next = 14;
          return Summarizer.create({
            sharedContext: 'A general summary to help a user decide if the text is worth reading',
            type: 'tldr',
            length: 'short',
            format: 'markdown',
            outputLanguage: 'en',
            monitor: function monitor(m) {
              m.addEventListener('downloadprogress', function (e) {
                console.log("Downloaded ".concat(e.loaded * 100, "%"));
              });
            }
          });
        case 14:
          summarizer = _context.sent;
          summaryOutput.textContent = "Generating summary...";
          _context.next = 18;
          return summarizer.summarize(content);
        case 18:
          summary = _context.sent;
          summaryOutput.textContent = summary;
          $.ajax({
            url: '/wp-content/themes/sekure/partials/blog-post-summary-save.php',
            type: 'post',
            dataType: 'html',
            data: {
              post_id: post_id,
              summary: summary
            },
            success: function success(response) {
              $('.article-tldr').append(response);
            }
          });
          _context.next = 26;
          break;
        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](11);
          summaryOutput.innerHTML = "<span class=\"error\">".concat(_context.t0, "</span>");
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[11, 23]]);
  }));
  return _handleSummary.apply(this, arguments);
}
/* harmony default export */ __webpack_exports__["default"] = (init);

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/header */ "./assets/js/src/theme/ui/header.js");
// UI elements functionality





// import 'intersection-observer';
// import { init } from './animations/global';

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
var checkForTables = function checkForTables() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sk-block table').length) return;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sk-block table').each(function (i, e) {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).wrap('<div data-scroll-container-inner class="table-wrapper"></div>');
  });
};

// Blocks grid content collapse/show toggle
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.content-collapse', function () {
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

// Youtube video embeds using the youtube embed block, mostly used on blog posts
if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wp-block-embed-youtube').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wp-block-embed').length) {
  var embed = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wp-block-embed-youtube');
  if (!embed.length) {
    embed = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wp-block-embed');
  }
  console.log(embed);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(embed).each(function () {
    console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.wp-block-embed__wrapper').text());
    var videoTxt = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.wp-block-embed__wrapper').text();
    if (videoTxt.indexOf('youtu.be') != -1) {
      var videoID = videoTxt.split('youtu.be/');
      console.log(videoID);
      var url = videoID[1].trim();
      var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '?si=fsXHquYUYbp7tIxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.wp-block-embed__wrapper').empty().append(iframe);
    }
    if (videoTxt.indexOf('=') != -1) {
      var videoID = videoTxt.split('=');
      console.log(videoID);
      var url = videoID[1].trim();
      var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '?si=fsXHquYUYbp7tIxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.wp-block-embed__wrapper').empty().append(iframe);
    }
    if (videoTxt.indexOf('embed') != -1) {
      var videoID = videoTxt.split('/embed/');
      console.log(videoID);
      var url = videoID[1].trim();
      var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '?si=fsXHquYUYbp7tIxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.wp-block-embed__wrapper').empty().append(iframe);
    }
  });
}
var slidersInit = function slidersInit() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.swiper-trigger').length) return;
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({
    trigger: '.swiper-trigger',
    once: true,
    start: '0% 150%',
    onEnter: function onEnter() {
      Promise.all(/*! import() | chunks/blogs_sliders_init */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/blogs_sliders_init")]).then(__webpack_require__.bind(__webpack_require__, /*! ./utils/sliders.js */ "./assets/js/src/theme/utils/sliders.js")).then(function (module) {
        new module["default"]();
      });
    }
  });
};
var skSliders = function skSliders() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sk-slider').length) {
    Promise.all(/*! import() | chunks/blogs_slider_controller */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/blogs_slider_controller")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/blogSliderController.js */ "./assets/js/src/theme/ui/blogSliderController.js")).then(function (module) {
      new module.init();
    });
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mb-table').length) {
    Promise.all(/*! import() | chunks/blogs_table_controller */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/blogs_table_controller")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/responsiveTables.js */ "./assets/js/src/theme/ui/responsiveTables.js")).then(function (module) {
      new module.init();
    });
  }
};
var pagesAnimationsInit = function pagesAnimationsInit() {
  var modulesArray = [];
  var modulesCount = 0;

  // global anims init
  modulesCount += 1;
  Promise.all(/*! import() | chunks/blog_global_animations */[__webpack_require__.e("/js/dist/theme-scripts/vendor"), __webpack_require__.e("chunks/blog_global_animations")]).then(__webpack_require__.bind(__webpack_require__, /*! ./animations/global.js */ "./assets/js/src/theme/animations/global.js")).then(function (module) {
    modulesArray.push({
      loaded: true,
      moduleObj: module.init
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
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

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.social-item').length) {
    modulesCount += 1;
    __webpack_require__.e(/*! import() | chunks/blogs_social_share */ "chunks/blogs_social_share").then(__webpack_require__.bind(__webpack_require__, /*! ./utils/socialShare.js */ "./assets/js/src/theme/utils/socialShare.js")).then(function (module) {
      modulesArray.push({
        loaded: true,
        moduleObj: module.init
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('moduleLoadedAnim');
    });
  }
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
  if (document.addEventListener) {
    window.addEventListener('pageshow', function (event) {
      if (event.persisted || performance.getEntriesByType("navigation")[0].type === 'back_forward') {
        location.reload();
      }
    }, false);
  }
};
var youtubeEmbedPopupHandler = function youtubeEmbedPopupHandler(target) {
  if (typeof target === 'undefined') return;
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
var skTOC = function skTOC() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.table-of-contents').length) return;
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({
    trigger: '.table-of-contents',
    once: true,
    start: '0% 150%',
    onEnter: function onEnter() {
      __webpack_require__.e(/*! import() | chunks/blogs_toc */ "chunks/blogs_toc").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/toc.js */ "./assets/js/src/theme/ui/toc.js")).then(function (module) {
        new module.init();
      });
    }
  });
};
var skStars = function skStars() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sk-star-rating').length) return;
  console.log('stars');
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({
    trigger: '.sk-star-rating',
    once: true,
    start: '0% 150%',
    onEnter: function onEnter() {
      __webpack_require__.e(/*! import() | chunks/blogs_star-rating */ "chunks/blogs_star-rating").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/star-rating.js */ "./assets/js/src/theme/ui/star-rating.js")).then(function (module) {
        new module.init();
      });
    }
  });
};
var checkForOpenDropdownsHandler = function checkForOpenDropdownsHandler(item) {
  var openedItems = item.parents('.faq-block').find('.opened').not(item);
  var preopenedItems = item.parents('section').find('.preopened-item').not(item);
  if (openedItems.length) {
    openedItems.each(function (i, e) {
      var item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
      var target = item.find('.dropdown-content-wrap');
      item.removeClass('opened');
      (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.dropdownsHandler)(target, 'close');
    });
  }
  if (preopenedItems.length) {
    preopenedItems.each(function (i, e) {
      var item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
      var target = item.find('.dropdown-content-wrap');
      item.removeClass('opened');
      setTimeout(function () {
        return item.removeClass('preopened-item');
      }, 500);
      (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.dropdownsHandler)(target, 'close');
    });
  }
};
var faqDropdownHandler = function faqDropdownHandler(e, btn) {
  e.stopPropagation();
  e.preventDefault();
  var item = btn.parents('.faq-question');
  var target = item.find('.dropdown-content-wrap');
  var parent = item.parents('.faq-questions-wrap');
  if (gsap__WEBPACK_IMPORTED_MODULE_3__["default"].isTweening(target)) return;
  if (item.hasClass('preopened-item')) {
    item.removeClass('opened');
    setTimeout(function () {
      return item.removeClass('preopened-item');
    }, 500);
    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.dropdownsHandler)(target, 'close');
  } else if (!item.hasClass('opened')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).find('.faq-question.open').removeClass('opened');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).find('.dropdown-content-wrap').css('height', '0');
    item.toggleClass('opened');
    item.hasClass('opened') ? (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.dropdownsHandler)(target, 'open') : (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.dropdownsHandler)(target, 'close');
    checkForOpenDropdownsHandler(item);
  } else {
    item.removeClass('opened');
    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.dropdownsHandler)(target, 'close');
  }
};
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.faq-question').on('click', '.faq-question-title, .js-faq-dropdown-btn', function (e) {
  return faqDropdownHandler(e, jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
});
var tableImagesAlignHandler = function tableImagesAlignHandler() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.table-block table').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.table-block table img').parent().css('vertical-align', 'middle');
  }

  // ScrollTrigger.refresh();
};

/* CHAT
------------------------------------------------------------ */
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.twilio-chat-btn', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.Twilio-EntryPoint').trigger('click');
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
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-chat-close').addClass('show');
    if (window.location.href.indexOf('/es/') > -1) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-chat-close').addClass('spanish');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sekure-connect-chat').addClass('spanish');
    }
    clearInterval(chatExists);
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
    var src = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).data('bg-imageset');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).attr('style', "background-image: image-set(\"".concat(src, "\")"));
  });

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

  // close chat
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-chat-close').on('click', function (event) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sekure-connect-chat').addClass('hide-chat');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('show');
  });
};

/* UI INIT
------------------------------------------------------------------ */
var UI = function UI() {
  new _ui_header__WEBPACK_IMPORTED_MODULE_2__["default"]();
  (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.lazyLoading)();
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

/***/ }),

/***/ "./assets/js/src/theme/ui/forms.js":
/*!*****************************************!*\
  !*** ./assets/js/src/theme/ui/forms.js ***!
  \*****************************************/
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
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contacts-tab-form .hbspt-form input[type=file]').length) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contacts-tab-form .hbspt-form input[type=file]').attr('accept', '.doc, .docx, application/pdf');
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
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('change', '.contacts-tab-form .hbspt-form input[type=file]', function () {
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
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.btn-custom-text').length) {
            label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.btn-custom-text').data('custom-text');
          }
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
  setInterval(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form ul').length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form ul').attr('role', 'list');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hbspt-form ul[role=list] li').attr('role', 'listitem');
    }
  }, 100);

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
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choices__item.choices__item--choice').length) {
    console.log('choices exist');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choices__item.choices__item--choice').text().replace('&amp;', '&');
  } else {
    console.log('choices do not exist on load');
  }
});

/***/ }),

/***/ "./assets/js/src/theme/ui/header.js":
/*!******************************************!*\
  !*** ./assets/js/src/theme/ui/header.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// import { GSDevTools } from 'gsap/GSDevTools';

// gsap.registerPlugin(GSDevTools)
var updateDropdownPosition = function updateDropdownPosition(item) {
  if (item.length > 0) {
    var scrollTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
    var headerToggeled = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state');

    // const linkPosition =
    //   $(item).offset().top - scrollTop + $(item).outerHeight(true) - 2;
    var bottom = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).offset().top + jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).outerHeight(false) - scrollTop;
    var margin = 0;
    var windowWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerWidth();
    headerToggeled ? '0.9rem' : '1.2rem';
    switch (true) {
      case windowWidth > 1400:
        margin = headerToggeled ? '1rem' : '1.3rem';
        break;
      case windowWidth > 1199:
        margin = headerToggeled ? '0.9rem' : '1.2rem';
        break;
      default:
        margin = headerToggeled ? '0.7rem' : '0.8rem';
        break;
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).parents('.header-links-content-wrap').find('.dropdown-item-links').css({
      top: bottom,
      marginTop: margin
    });
  }
};
var HeaderFunctionalitiesHandler = /*#__PURE__*/function () {
  function HeaderFunctionalitiesHandler() {
    _classCallCheck(this, HeaderFunctionalitiesHandler);
    this.html = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html');
    this.header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('header');
    this.headerMobileBtnLines = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-menu-btn .line-el');
    this.headerLinesTl;
    this.borderEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.border-el');
    this.headerLinksWrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-links-wrap');
    this.createHeaderLinesTl();
    this.bind();
    this.headerStateHandler();
  }
  return _createClass(HeaderFunctionalitiesHandler, [{
    key: "bind",
    value: function bind() {
      var _this = this;
      if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
        // Initial Position Update
        updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-link-item').first());

        // Add Event Listener for Window Resize and Scroll
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header').on('headerChanged', function () {
          updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-link-item').first());
        });
        // $(window).on('scroll', updateDropdownPosition);
      }
      this.header.on('mouseenter', '.has-dropdown:not(.opened-dropdown)', function (e) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          _this.headerDropdownHover(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget), 'mouseenter');
          updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
        }
      });
      /*
          .on('mouseleave', '.has-dropdown:not(.opened-dropdown)', (e) =>
            this.headerDropdownHover($(e.currentTarget), 'mouseleave'),
          );
          */

      this.header.on('click', '.has-dropdown', function (e) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          e.preventDefault();
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).hasClass('opened-dropdown')) {
            _this.headerDropdownHover(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget), 'mouseenter');
            updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
          } else {
            _this.closeHeaderDropdownsDesktop();
          }
        }
      });
      this.header.on(':focus-within', '.has-dropdown', function (e) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          e.preventDefault();
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).hasClass('opened-dropdown')) {
            _this.headerDropdownHover(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget), 'mouseenter');
            updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
          } else {
            _this.closeHeaderDropdownsDesktop();
          }
        }
      });
      this.header.on('mouseenter', '.header-logo-link, .nav-extras, .header-link-item.no-dropdown', function (e) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          _this.closeHeaderDropdownsDesktop();
        }
      });
      this.header.on('keydown', '.has-dropdown', function (event) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          var code = e.keyCode ? e.keyCode : e.which;
          if (code == 13) {
            event.preventDefault();
            if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).hasClass('opened-dropdown')) {
              _this.headerDropdownHover(jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget), 'mouseenter');
              updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget));
            } else {
              _this.closeHeaderDropdownsDesktop();
            }
          }
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('keydown', function (event) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          if (event.key == 'Escape') {
            _this.closeHeaderDropdownsDesktop();
          }
        }
      });

      /*
      this.header.on('mouseleave', () => {
        if (isDesktop()) {
          this.closeHeaderDropdownsDesktop();
        }
      });
      */

      this.header.on('click', '.has-dropdown', function (e) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
          e.preventDefault();
          _this.headerDropdownItemMobileHandler(e, jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-menu-btn').on('click', function () {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
          _this.mobileMenuBtnHandler();
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-landing .landing-template-btn').on('click', function () {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
          _this.mobileMenuBtnHandler();
        }
      });

      // French header has links with no dropdowns
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-link-item.no-dropdown').on("mouseenter", function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('header-opened-dropdown');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-link-item.has-dropdown, .dropdown-item-links').removeClass('opened-dropdown');
      }).on("mouseleave", function () {});
      var popupRemoveRestaurantIndustry = setInterval(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-wrap.callback .hbspt-form select[name=industry]').length) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-wrap.callback .hbspt-form select[name=industry] option[value=Restaurant]').remove();
          clearInterval(popupRemoveRestaurantIndustry);
        }
      }, 100);

      // get a free demo form
      var hubspotSubmitFreeDemo = setInterval(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("button[value='Get a free demo']").length) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("button[value='Get a free demo']").on('click', function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('select[name=industry]').val() != '' && jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=email]').val() != '') {
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('select[name=industry]').val() == 'Restaurant') {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.hbspt-form').addClass('restaurant');
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.hbspt-form').addClass('other');
              }
            }
          });
          clearInterval(hubspotSubmitFreeDemo);
        }
      }, 500);

      // Header Get a free demo CTA Hubspot form submission submit message CTA
      /*
      var headerHubspotCTASub = setInterval(function () {
        // check for submission message
        if ($('#header .hbspt-form .submitted-message').length) {
          // open popup and show corresponding form based on industry
          
          $('html')
            .addClass('open-callback-popup-form')
            .addClass('open-popup-form');
          $('.callback-popup-form.nav-default-popup').css('z-index', '99999');
          
            // add open popup buttons to submission message
          if ($('#header .hbspt-form').hasClass('restaurant')) {
            $('.form-wrap.meeting').removeClass('d-none');
            $('#header .hbspt-form .submitted-message').append(
              "<br><a href='#' class='submission-btn callback-popup-btn schedule-meeting-btn btn-default c-blue-1 btn-green-1 section-color-white btn-offset-8 fw-700 mt-2'><span class='btn-bg-el'></span><span class='btn-txt'>Schedule your free demo</span></a>"
            );
          } else if ($('#header .hbspt-form').hasClass('other')) {
            $('.form-wrap.callback').removeClass('d-none');
            $('#header .hbspt-form .submitted-message').append(
              "<br><a href='#' class='submission-btn callback-popup-btn schedule-callback-btn btn-default c-blue-1 btn-green-1 section-color-white btn-offset-8 fw-700 mt-2'><span class='btn-bg-el'></span><span class='btn-txt'>Schedule your free demo</span></a>"
            );
          }
          clearInterval(headerHubspotCTASub);
        }
      }, 500);
      */

      // functionality for post form submission CTAs
      /*
      var headerHubspotFormSubCTAs = setInterval(function(){
        if($('.submission-btn').length) {
          $('.callback-popup-btn').on('click', function(){
            $('html').addClass('open-callback-popup-form').addClass('open-popup-form');
            if($(this).hasClass('schedule-meeting-btn')){
              $('.form-wrap.meeting').removeClass('d-none');
            }
            if($(this).hasClass('schedule-callback-btn')){
              $('.form-wrap.callback').removeClass('d-none');
            }
          });
          clearInterval(headerHubspotFormSubCTAs);
        }
      });
      */

      // header search icon
      /*
      $('.search-icon').on('click', function(){
        // if blog page scroll to filters/search
        if($('body.page-id-3152').length){
          $('html, body').animate({
            scrollTop: $('.blog-filter').offset().top - $('#header').outerHeight(true),
          }, 350, 'linear');
        } else{
          if($('.ajax-search').hasClass('open')){
            if($('.ajax-search').val() == ''){
              $('.ajax-search').removeClass('open');
            } else {
              $('.ajax-search-results').css('top', $('#header').outerHeight(true) + 'px');
              $('.ajax-search-results').addClass('open');
              $('#search-input').val($('.ajax-search').val());
              $('#blog-filter').trigger('submit');
              //$('.ajax-search-results button[type=submit]').click();
            }
          } else {
            $('.ajax-search').addClass('open');
            $('.ajax-search').focus();
          }
        }
      });
      $('.ajax-search-results .popup-close-btn').on('click', function(){
        $('.ajax-search-results, .ajax-search').removeClass('open');
      });
      $(".ajax-search").on('keyup', function(e){ 
        var code = e.key;
        if(code==="Enter"){
          //$('.search-icon').click();
          $('#search-input').val($('.ajax-search').val());
          $('#blog-filter').trigger('submit');
        }
      });
      $('.blog-pagination a').on('click', function(){
        $('.ajax-search-results').animate({
          scrollTop: $('.ajax-search-results').offset().top,
        }, 350, 'linear');
      });
      $('#search-input').on('keyup', function(e){
        var code = e.key;
        if(code==="Enter"){
          $(".ajax-search").val($(this).val());
        }
      });
      */

      // language toggle
      // lang current click functionality
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.lang-current').on('click', function (e) {
        e.preventDefault();
        var langCurrent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var toggle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#lang_toggle');
        if (langCurrent.hasClass('open')) {
          langCurrent.removeClass('open');
          toggle.css({
            visibility: 'hidden',
            height: '0px'
          });
          toggle.attr('aria-hidden', 'true');
        } else {
          toggle.removeAttr('aria-hidden');
          langCurrent.addClass('open');
          var totalHeight = 0;
          toggle.children().each(function () {
            totalHeight += parseInt(langCurrent.outerHeight(true));
          });
          //console.log(totalHeight);
          toggle.css('height', totalHeight + 'px');
          toggle.css({
            visibility: 'visible',
            height: totalHeight + 'px'
          });
        }
      });

      // close language toggle
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', function (e) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('lang-current')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.lang-current').removeClass('open');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#lang_toggle').css({
            visibility: 'hidden',
            height: '0px'
          }).attr('aria-hidden', 'true');
        }
      });

      // mobile menu functionality
      if (window.innerWidth < 1025) {
        var offset = 140;
        if (window.innerWidth < 501) {
          var offset = 500;
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.mobile-menu-btn', function () {
          var logoLink = window.location.origin + '/wp-content/themes/sekure/assets/logo/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').prop('lang') + '/logo-';
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-expanded') == 'false') {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state')) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor.webp').fadeIn(200);
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor-tagline.webp').fadeIn(200);
            }
          } else {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state')) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'blue-descriptor.webp').fadeIn(200);
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'blue-descriptor-tagline.webp').fadeIn(200);
            }
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-menu-btn').on('click', function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header .content-wrap .btn-default.clone').length && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cta-parent').length) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header .content-wrap .btn-default.clone').appendTo('.cta-parent').removeClass('clone');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header .content-wrap .dropdown-link-cta.cta-parent').removeClass('cta-parent');
          }
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-links-wrap, .dropdown-item-wrap, .dropdown-link-wrap').removeAttr('style');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-item-wrap').removeClass('opened');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.links-column').removeClass('open-submenu');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-item-links').css({
            opacity: '0',
            visibility: 'hidden',
            height: '0px'
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.lang-current').removeClass('open');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#lang_toggle').css({
            visibility: 'hidden',
            height: '0px'
          }).attr('aria-hidden', 'true');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-header .nav-wrap, .main-header .header-links-wrap').animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).offset().top - 120
          }, 300, 'linear');
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-link-item.has-dropdown').on('click', function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.links-column.open-submenu .column-heading').siblings().fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.links-column').removeClass('open-submenu');
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.column-heading').on('click', function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().hasClass('open-submenu')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().removeClass('open-submenu');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings().fadeOut();
          } else {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.links-column.open-submenu').length) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.links-column.open-submenu .column-heading').siblings().fadeOut();
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.links-column.open-submenu').removeClass('open-submenu');
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.dropdown-item-links').css('height', 'auto');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().addClass('open-submenu');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings().fadeIn();
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-link-item.has-dropdown').on('click', function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().hasClass('opened')) {
            // put cta back where it belongs
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header .content-wrap .btn-default.clone').length && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cta-parent').length) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header .content-wrap .btn-default.clone').appendTo('.cta-parent').removeClass('clone');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header .content-wrap .dropdown-link-cta.cta-parent').removeClass('cta-parent');
            }

            // fade in top level links
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents().siblings('.dropdown-item-wrap').fadeIn();

            // scroll nav to link
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-wrap').animate({
              scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).offset().top - offset
            }, 350, 'linear');
          } else {
            // cta check and move
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('.dropdown-link-cta').length) {
              var cta = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('.dropdown-link-cta').find('.btn-default:not(.hs-button)');
              cta.parent().addClass('cta-parent');
              cta.addClass('clone').appendTo('#header .content-wrap');
              //cta.remove();
              //$('.header-links-wrap').css('padding-bottom', cta.outerHeight() + 'px');
            }

            // fade out top level links
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents().siblings('.dropdown-item-wrap').fadeOut();

            // scroll nav to link
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-wrap').animate({
              scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).offset().top - offset
            }, 350, 'linear');
          }
        });
      } // end of mobile functionality
    }
  }, {
    key: "mobileMenuBtnHandler",
    value: function mobileMenuBtnHandler() {
      if (this.header.hasClass('main-header')) {
        this.html.toggleClass('mobile-menu-opened');
      }

      // this.html.toggleClass('mobile-menu-opened');
      this.html.hasClass('mobile-menu-opened') ? this.headerLinesTl.timeScale(1).play() : this.headerLinesTl.timeScale(1.25).reverse();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-menu-btn').attr('aria-expanded', function (_, attr) {
        return !(attr === 'true');
      });
    }
  }, {
    key: "headerStateHandler",
    value: function headerStateHandler() {
      var minScroll = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)() ? 150 : 50;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
        var logoLink = window.location.origin + '/wp-content/themes/sekure/assets/logo/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').prop('lang') + '/logo-';
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= minScroll) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('header-toggled-state');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor.webp').fadeIn(200);
            setTimeout(function () {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').trigger('headerChanged');
            }, 100);
          }
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('header-toggled-state');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor-tagline.webp').fadeIn(200);
            setTimeout(function () {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').trigger('headerChanged');
            }, 355);
          }
        }
      });
    }
  }, {
    key: "createHeaderLinesTl",
    value: function createHeaderLinesTl() {
      this.headerLinesTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        paused: true
      });
      var translateBy = 6;
      this.headerLinesTl.to(this.headerMobileBtnLines[0], {
        y: translateBy,
        duration: 0.2
      }, 0);
      this.headerLinesTl.to(this.headerMobileBtnLines[1], {
        autoAlpha: 0,
        duration: 0.2
      }, 0);
      this.headerLinesTl.to(this.headerMobileBtnLines[2], {
        y: -translateBy,
        duration: 0.2
      }, 0);
      this.headerLinesTl.to(this.headerMobileBtnLines[0], {
        rotation: -45,
        duration: 0.2
      }, 0.2);
      this.headerLinesTl.to(this.headerMobileBtnLines[2], {
        rotation: 45,
        duration: 0.2
      }, 0.2);
    }
  }, {
    key: "headerDropdownItemMobileHandler",
    value: function headerDropdownItemMobileHandler(e, btn) {
      e.stopPropagation();
      e.preventDefault();
      var item = btn.parents('.dropdown-item-wrap');
      var target = item.find('.dropdown-item-links');
      if (gsap__WEBPACK_IMPORTED_MODULE_2__["default"].isTweening(target)) return;
      item.toggleClass('opened');
      if (item.hasClass('opened')) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, {
          autoAlpha: 1,
          duration: 0.25
        });
        (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.dropdownsHandler)(target, 'open');
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, {
          autoAlpha: 0,
          duration: 0.25
        });
        (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.dropdownsHandler)(target, 'close');
      }
      // item.hasClass('opened') ? dropdownsHandler(target, 'open') : dropdownsHandler(target, 'close');
    }
  }, {
    key: "closeHeaderDropdownsDesktop",
    value: function closeHeaderDropdownsDesktop() {
      this.header.find('.opened-dropdown').removeClass('opened-dropdown');
      this.html.removeClass('header-opened-dropdown');
      this.html.trigger('focus');

      // $(window).off('resize', this.resizeHandler);
      // $(window).off('scroll', this.scrollHandler);

      /*
      $('html, body').css({
        overflow: 'auto',
        height: 'auto'
      });
      */

      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.dropdown-item-links', {
        autoAlpha: 0,
        height: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.dropdown-links-wrap', {
        autoAlpha: 0
      });
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-bg-el').length > 0) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.header-bg-el', {
          autoAlpha: 0,
          height: 0
        });
      }
    }
  }, {
    key: "headerDropdownHover",
    value: function headerDropdownHover(item, eventType) {
      var _this2 = this;
      var dropdown = item.parent().find('.dropdown-item-links');
      var dropdownContent = item.parent().find('.dropdown-content');
      var dropdowns = this.header.find('.dropdown-item-links');
      var thisLinks = item.parent().find('.dropdown-links-wrap');
      var otherLinks = this.header.find('.dropdown-links-wrap').not(thisLinks);
      var bgMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-bg-el');
      var headerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-header .content-wrap').outerHeight() / 2;
      if (this.borderEl.length > 0) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.borderEl, {
          width: this.headerLinksWrap.width()
        });
      }
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].killTweensOf(this.header.find('.dropdown-links-wrap, .dropdown-item-links'));
      this.header.find('.opened-dropdown').removeClass('opened-dropdown');
      item.addClass('opened-dropdown');
      item.next().addClass('opened-dropdown');
      this.html.addClass('header-opened-dropdown');

      /*
      $('html, body').css({
        overflow: 'hidden',
        height: '100%'
      });
      */

      /*
      $(dropdown).on('mouseenter', (event) => {
        if (!$(event.target).hasClass('dropdown-content')) {
          this.closeHeaderDropdownsDesktop();
        }
      });
      $(thisLinks).on('mouseleave', (event) => {
        if (!$(event.target).hasClass('dropdown-content')) {
          this.closeHeaderDropdownsDesktop();
        }
      });
      $(dropdownContent).on('mouseleave', (event) => {
        if (!$(event.target).hasClass('dropdown-content')) {
          this.closeHeaderDropdownsDesktop();
        }
      });
      */

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-item-links.opened-dropdown').on('mouseleave', function (event) {
        _this2.closeHeaderDropdownsDesktop();
      });
      if (eventType == 'mouseenter') {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(dropdown, {
          zIndex: 9
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(dropdowns.not(dropdown), {
          zIndex: -1
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(dropdown, {
          autoAlpha: 1,
          height: dropdown.children().outerHeight(true)
        });
        if (bgMenu.length > 0) {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(bgMenu, {
            autoAlpha: 1,
            height: dropdown.children().outerHeight(true) + headerHeight
          });
        }
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(otherLinks, {
          autoAlpha: 0
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(thisLinks, {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          delay: 0.1
        });
      }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (HeaderFunctionalitiesHandler);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["/js/dist/theme-scripts/vendor"], function() { return __webpack_exec__("./assets/js/src/theme/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map