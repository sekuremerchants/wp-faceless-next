"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/smooth_scroll"],{

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
/* harmony import */ var locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! locomotive-scroll */ "./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @juggle/resize-observer */ "./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");



// import { ScrollTrigger } from 'gsap/ScrollTrigger';


var $ = jQuery;
gsap__WEBPACK_IMPORTED_MODULE_3__["default"].defaults({
  ease: 'power2.out',
  duration: 0.5
});
var locoScroll;
var smoothScrollHandler = function smoothScrollHandler() {
  locoScroll = false;

  // Assuming Locomotive Scroll provides a 'locoContextChanges' event (adjust if it's different)

  // const savedPosition = localStorage.getItem("scrollPosition");

  // scrollToHistory(savedPosition);
  $(window).scrollTop(0);
  $('.scroll-to-next-btn').off('click.gsapSmoothScroll').on('click.gsapSmoothScroll', function (e) {
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(window, {
      duration: 1,
      scrollTo: $(e.currentTarget).parents('section').next()[0]
    });
  });
  var resizeObserver = new _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_2__.ResizeObserver((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.debounce)(function () {
    if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
      gsap_all__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.refresh();
    }
    if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)() && !locoScroll) {
      window.location.reload(true);
      // $("html").addClass("browser-scroll");
      // setTimeout(() => {
      location.reload(true);
      // }, 500);
    }
    $(window).trigger('resizeObserverTrigger');
    // console.log('Size changed');
  }, 100));
  resizeObserver.observe($('.smooth-scroll-wrapper')[0]);
};
/* harmony default export */ __webpack_exports__["default"] = (smoothScrollHandler);
function scrollTo(target) {
  // console.log(target);
  gsap_all__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.refresh();
  gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(window, {
    duration: 1,
    scrollTo: $(target).offset().top - $('#header').outerHeight()
  });
}
function anchorScroll() {
  $('.anchor-link').each(function (index, element) {
    console.log('anchor-link', index, element);
    if (!$(element).data('listening')) {
      $(element).on('click', function (e) {
        e.preventDefault();
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
          var linkDataValue = $(e.currentTarget).data('scroll-section-target-id');
          var targetElement = $("[data-link-scroll-target-section-id=\"".concat(linkDataValue, "\"]"))[0];
          console.log(linkDataValue);

          // Adjust the scroll position to be 50 pixels before the target element
          var adjustedTopPosition = $(targetElement).offset().top - 100;
          if (window.innerWidth > 600 && window.innerWidth < 1024) {
            adjustedTopPosition = adjustedTopPosition - 50;
          }
          $('html, body').animate({
            scrollTop: adjustedTopPosition
          }, 100); // 500ms animation duration
        } else {
          var _linkDataValue = $(e.currentTarget).data('scroll-section-target-id');
          console.log(_linkDataValue);
          var target = $("[data-link-scroll-target-section-id=\"".concat(_linkDataValue, "\"]"))[0];
          if (!target) {
            target = $("[1data-scroll-section-id=\"".concat(_linkDataValue, "\"]"))[0];
          }
          if (!target) {
            target = $("#".concat(_linkDataValue))[0];
          }
          console.log(target);
          scrollTo(target);
        }
      });
      $(element).attr('data-listening', true);
    }
  });
}


/***/ })

}]);
//# sourceMappingURL=smooth_scroll.js.map