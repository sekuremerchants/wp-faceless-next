"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/careers_animations"],{

/***/ "./assets/js/src/theme/animations/careers.js":
/*!***************************************************!*\
  !*** ./assets/js/src/theme/animations/careers.js ***!
  \***************************************************/
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




var careersSliderSectionAnim = function careersSliderSectionAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(".careers-slider-section").length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".careers-slider-section");
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    },
    paused: true
  });
  tl.to(section.find(".txt-size-80 .char"), {
    y: 0,
    stagger: 0.02,
    opacity: 1,
    duration: 0.4
  }, 0);
  section.find(".swiper-slide").each(function (i, e) {
    var item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
    tl.fromTo(item.find(".testimonial-img"), {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.2
    }, 0.3);
    tl.to(item.find(".char"), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0.45);
    tl.fromTo([item.find(".quote-image-wrap"), item.find(".txt-post-rtf"), item.find(".quote-by-info")], {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.2
    }, 0.6);
  });
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
    trigger: section,
    start: "0% 75%",
    end: "+=1%",
    onEnter: function onEnter() {
      return tl.timeScale(1).play();
    },
    onLeaveBack: function onLeaveBack() {
      return tl.timeScale(2).reverse();
    }
  });
};
var benefitsSectionCareersAnim = function benefitsSectionCareersAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(".benefits-section-careers-page").length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".benefits-section-careers-page");
  var elements = !(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)() ? section.find(".txt-post-rtf h5") : section.find(".txt-post-rtf").children();
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    },
    paused: true
  });
  tl.fromTo(section.find(".bg-image"), {
    opacity: 0
  }, {
    opacity: 1
  }, 0);
  tl.to(section.find(".txt-size-100 .char"), {
    y: 0,
    stagger: 0.02,
    opacity: 1,
    duration: 0.4
  }, 0);
  tl.fromTo(section.find(".img-wrap"), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: 0.05
  }, 0.3);
  tl.fromTo(elements, {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    stagger: 0.05
  }, 0.45);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
    trigger: section,
    start: "0% 75%",
    end: "+=1%",
    onEnter: function onEnter() {
      return tl.timeScale(1).play();
    },
    onLeaveBack: function onLeaveBack() {
      return tl.timeScale(2).reverse();
    }
  });
};
var awardsSectionAnim = function awardsSectionAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(".awards-slider").length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".awards-slider");
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    },
    paused: true
  });
  tl.to(section.find(".txt-size-80 .char"), {
    y: 0,
    stagger: 0.02,
    opacity: 1,
    duration: 0.4
  }, 0);
  tl.fromTo(section.find(".txt-post-rtf"), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.2);
  tl.fromTo(section.find(".awards-right"), {
    opacity: 0
  }, {
    opacity: 1
  }, 0.4);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
    trigger: section,
    start: "0% 75%",
    end: "+=1%",
    onEnter: function onEnter() {
      return tl.timeScale(1).play();
    },
    onLeaveBack: function onLeaveBack() {
      return tl.timeScale(2).reverse();
    }
  });
};
var careersSearchJobsSectionAnim = function careersSearchJobsSectionAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(".careers-page-search-jobs-section").length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".careers-page-search-jobs-section");
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    },
    paused: true
  });
  tl.fromTo(section.find(".bg-image"), {
    opacity: 0
  }, {
    opacity: 1
  }, 0);
  tl.to(section.find(".txt-size-80 .char"), {
    y: 0,
    stagger: 0.02,
    opacity: 1,
    duration: 0.4
  }, 0);
  tl.fromTo(section.find(".txt-post-rtf"), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.3);
  tl.fromTo(section.find(".btn-default"), {
    opacity: 0
  }, {
    opacity: 1
  }, 0.6);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
    trigger: section,
    start: "0% 75%",
    end: "+=1%",
    onEnter: function onEnter() {
      return tl.timeScale(1).play();
    },
    onLeaveBack: function onLeaveBack() {
      return tl.timeScale(2).reverse();
    }
  });
};
var init = function init() {
  careersSliderSectionAnim();
  benefitsSectionCareersAnim();
  awardsSectionAnim();
  careersSearchJobsSectionAnim();
};

/***/ })

}]);
//# sourceMappingURL=careers_animations.js.map