"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["/js/dist/savings-calculator"],{

/***/ "./assets/js/src/savings-calculator.js":
/*!*********************************************!*\
  !*** ./assets/js/src/savings-calculator.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_utils_smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/utils/smoothScroll */ "./assets/js/src/theme/utils/smoothScroll.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(function () {
  // Savings Calculator page
  if ($('body').hasClass('page-id-2667') || $('body').hasClass('page-id-30218')) {
    $('#header .savings-calc-btn').addClass('anchor-link').removeClass('callback-popup-btn').attr('href', '#calculator').attr('data-scroll-section-target-id', 'calculator');
    (0,_theme_utils_smoothScroll__WEBPACK_IMPORTED_MODULE_0__.anchorScroll)();
    $('#header .savings-calc-btn').on('click', function (e) {
      if ($('html').hasClass('mobile-menu-opened')) {
        $('.mobile-menu-btn').trigger('click');
      }
    });
    var analysisSection = setInterval(function () {
      $('#free-statement-analysis').attr('data-link-scroll-target-section-id', 'analysis');
      clearInterval(analysisSection);
    }, 100);
  }
  $('.calculate-values-btn').on('click', function (event) {
    $('.btn-sc-next-step').addClass('show');
  });

  // calculator formula override (TEMP UNTIL HARRY UPDATES HIS WEBPACK)
  $('.calculate-values-btn').on('click', function () {
    var monthlyProcessing = $('[name=monthly_processing_volume]');
    var monthlyFees = $('[name=monthly_fees]');
    if (monthlyProcessing.val() != '' && monthlyFees.val() != '') {
      // current processing rate
      var rate = monthlyFees.val() / monthlyProcessing.val() * 100;

      // get monthly and yearly savings
      var monthlySavings = monthlyFees.val() * 0.1;
      var rateNew = (monthlyFees.val() - monthlySavings) / monthlyProcessing.val() * 100;
      var updateRate = setInterval(function () {
        if ($('.old-effective-rate .info-row-name-value').length) {
          //$('.old-effective-rate .info-row-name-value').attr('title', rate.toFixed(2));
          $('.old-effective-rate .info-row-name-value').html(rate.toFixed(2) + '%');
        }
        setTimeout(clearInterval(updateRate), 5000);
      });
      var updateRateNew = setInterval(function () {
        if ($('.new-effective-rate .info-row-name-value').length) {
          //$('.new-effective-rate .info-row-name-value').attr('title', rateNew.toFixed(2));
          $('.new-effective-rate .info-row-name-value').html(rateNew.toFixed(2) + '%');
        }
        setTimeout(clearInterval(updateRateNew), 5000);
      });
    }
  });

  // calculator inputs override (TEMP UNTIL HARRY UPDATES HIS WEBPACK)
  setInterval(function () {
    if ($('.calc-chosen-val-wrap .js-calc-selected-value-el').length) {
      $('.calc-chosen-val-wrap .js-calc-selected-value-el').each(function (index) {
        if ($(this).attr('title').indexOf('Select') < 0) {
          $(this).html($(this).attr('title'));
        }
      });
    }
  }, 10);
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
/******/ __webpack_require__.O(0, ["/js/dist/theme-scripts/vendor"], function() { return __webpack_exec__("./assets/js/src/savings-calculator.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=savings-calculator.js.map