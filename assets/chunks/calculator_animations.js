"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/calculator_animations"],{

/***/ "./assets/js/src/theme/animations/calculator.js":
/*!******************************************************!*\
  !*** ./assets/js/src/theme/animations/calculator.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");




var calculatorInitSectionAnim = function calculatorInitSectionAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.calculator-page-circle-info-section').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.calculator-page-circle-info-section');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    },
    paused: true
  });
  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
    tl.to(section.find('.txt-size-72 .char'), {
      y: 0,
      stagger: .02,
      opacity: 1,
      duration: .4
    }, 0);
    tl.fromTo(section.find('.txt-post-rtf'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, .3);
    tl.fromTo(section.find('.img-width-wrap'), {
      scale: 0
    }, {
      scale: 1,
      ease: "elastic.out(0.6, 0.4)",
      stagger: .2,
      duration: 1
    }, .3);
    tl.fromTo(section.find('.calculator-circle-blue, .calculator-circle-gray, .calculator-circle-gray-border'), {
      opacity: 0
    }, {
      opacity: 1,
      stagger: .1
    }, .6);
    tl.fromTo(section.find('.background-pattern-svg'), {
      opacity: 0
    }, {
      opacity: .15
    }, .8);
  } else {
    tl.fromTo(section.find('.img-width-wrap'), {
      scale: 0
    }, {
      scale: 1,
      ease: "elastic.out(0.6, 0.4)",
      stagger: .2,
      duration: 1
    }, 0);
    tl.to(section.find('.txt-size-72 .char'), {
      y: 0,
      stagger: .02,
      opacity: 1,
      duration: .4
    }, .3);
    tl.fromTo(section.find('.txt-post-rtf'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, .6);
  }
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
    trigger: section,
    start: '0% 75%',
    end: '+=1%',
    toggleActions: 'none none none none',
    animation: tl,
    onEnter: function onEnter() {
      return tl.timeScale(1).play();
    },
    onLeaveBack: function onLeaveBack() {
      return tl.timeScale(2).reverse();
    }
  });
};
var calculatorSectionAnim = function calculatorSectionAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.calculator-section').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.calculator-section');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    },
    paused: true
  });

  // if (!isMobile()) {
  tl.to(section.find('.txt-size-48 .char'), {
    y: 0,
    stagger: .02,
    opacity: 1,
    duration: .4
  }, 0);
  tl.fromTo(section.find('.calculator-info-txt'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, .3);
  tl.fromTo(section.find('.calculate-values-btn-wrap'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, .45);
  tl.fromTo(section.find('.calculator-graphic-wrap, .calculator-results-wrap, .btn-wrap'), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: .2
  }, .6);

  // } else {
  //     tl.fromTo(section.find('.img-width-wrap'), {
  //         scale: 0,
  //     }, {
  //         scale: 1,
  //         ease: "elastic.out(0.6, 0.4)",
  //         stagger: .2,
  //         duration: 1,
  //     }, 0)

  //     tl.to(section.find('.txt-size-72 .char'), {
  //         y: 0,
  //         stagger: .02,
  //         opacity: 1,
  //         duration: .4,
  //     }, .3);

  //     tl.fromTo(section.find('.txt-post-rtf'), {
  //         x: -10,
  //         opacity: 0
  //     }, {
  //         x: 0,
  //         opacity: 1,
  //     }, .6);
  // }

  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
    trigger: section,
    start: '0% 75%',
    end: '+=1%',
    toggleActions: 'none none none none',
    animation: tl,
    onEnter: function onEnter() {
      return tl.timeScale(1).play();
    },
    onLeaveBack: function onLeaveBack() {
      return tl.timeScale(2).reverse();
    }
  });
};
var calculatorCircleInfoSection = function calculatorCircleInfoSection() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bgr-circle-info-section').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bgr-circle-info-section');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    },
    paused: true
  });
  tl.to(section.find('.txt-size-60 .char'), {
    y: 0,
    stagger: .02,
    opacity: 1,
    duration: .4
  }, 0);
  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
    tl.fromTo(section.find('.bgr-circle-svg'), {
      scale: 0
    }, {
      scale: 1,
      ease: "elastic.out(0.6, 0.4)",
      stagger: .2,
      duration: 1
    }, .15);
  }
  tl.fromTo(section.find('.txt-post-rtf'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, .3);
  tl.fromTo(section.find('.btn-default'), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: .1
  }, .6);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
    trigger: section,
    start: '0% 75%',
    end: '+=1%',
    toggleActions: 'none none none none',
    animation: tl,
    onEnter: function onEnter() {
      return tl.timeScale(1).play();
    },
    onLeaveBack: function onLeaveBack() {
      return tl.timeScale(2).reverse();
    }
  });
};
var init = function init() {
  calculatorInitSectionAnim();
  calculatorSectionAnim();
  calculatorCircleInfoSection();
};

/***/ })

}]);
//# sourceMappingURL=calculator_animations.js.map