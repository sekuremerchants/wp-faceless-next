"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/init_animations"],{

/***/ "./assets/js/src/theme/animations/init-loader.js":
/*!*******************************************************!*\
  !*** ./assets/js/src/theme/animations/init-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/DrawSVGPlugin */ "./node_modules/gsap/DrawSVGPlugin.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





//import { Rive, RuntimeLoader, riveWASMResource } from '@rive-app/canvas-single';
//RuntimeLoader.setWasmUrl(riveWASMResource);

gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_3__.DrawSVGPlugin);
var headerLottieAnim = function headerLottieAnim() {
  // if (!IsSafari()) {
  var containers = $('.lottie-anim-logo');
  if (!$('.header-logo-link').hasClass('lottie-anim-init')) {
    $('.header-logo-link').addClass('lottie-anim-init');
    containers.each(function (i, e) {
      var anim = lottie_web__WEBPACK_IMPORTED_MODULE_1___default().loadAnimation({
        container: e,
        // the dom element that will contain the animation
        renderer: 'canvas',
        autoplay: false,
        loop: false,
        name: $(e).attr('data-lottie-anim-name'),
        path: $(e).attr('data-url') // the path to the animation json
      });
      anim.addEventListener('complete', function () {
        return setTimeout(function () {
          return anim.goToAndPlay(0);
        }, 5000);
      });
      $(window).on('playLogoAnim', function () {
        return anim.play();
      });
    });
  }

  // }
};
var headerAnim = function headerAnim() {
  var header = $('#header');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(header);
    },
    paused: true,
    onComplete: function onComplete() {
      setTimeout(function () {
        return $(window).trigger('playLogoAnim');
      }, 1000);
    }
  });
  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
    var headerLogoLink = header.find('.header-logo-link');
    if (headerLogoLink.length) {
      tl.fromTo([headerLogoLink], {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.1
      });
    }
  } else {
    var mobileElements = header.find('.header-logo-link, .mobile-menu-btn');
    if (mobileElements.length) {
      tl.fromTo(mobileElements, {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.1
      });
    }
  }
  $(window).on('headerAnimPlay', function () {
    return tl.play(0);
  });
  if ($('.hero-section').length) return;
  $(window).trigger('headerAnimPlay');
};
var init = function init() {
  headerLottieAnim();
  headerAnim();
};

/***/ }),

/***/ "./assets/js/src/theme/helpers/helper.js":
/*!***********************************************!*\
  !*** ./assets/js/src/theme/helpers/helper.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationStarting: function() { return /* binding */ animationStarting; },
/* harmony export */   isDesktop: function() { return /* binding */ isDesktop; },
/* harmony export */   isMobile: function() { return /* binding */ isMobile; }
/* harmony export */ });
// Helper functtions

var animationStarting = function animationStarting(section) {
  // console.log(section);
  if (!isMobile()) {
    section.find('.op-0').removeClass('op-0');
  } else if (isMobile() && section.find('.op-0').length) section.find('.op-0').removeClass('op-0');
};
function isMobile() {
  return innerWidth < 1025 ? true : false;
}
function isDesktop() {
  return !isMobile();
}


/***/ })

}]);
//# sourceMappingURL=init_animations.js.map