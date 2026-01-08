"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/contacts_animations"],{

/***/ "./assets/js/src/theme/animations/contacts.js":
/*!****************************************************!*\
  !*** ./assets/js/src/theme/animations/contacts.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");



var contactsPageHeroAnim = function contactsPageHeroAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contact-page').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contact-page');
  var elements = !(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)() ? section.find('.team-images img') : section.find('.mobile-team-images img');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    }
  });
  tl.fromTo(section.find('.background-svg-wrap'), {
    opacity: 0
  }, {
    opacity: 1
  }, 0);
  tl.to(section.find('.txt-size-80 .char'), {
    y: 0,
    stagger: 0.02,
    opacity: 1,
    duration: 0.4
  }, 0);
  tl.fromTo(section.find('.txt-post-rtf'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.2);
  tl.fromTo(elements, {
    opacity: 0
  }, {
    opacity: 1,
    stagger: 0.05
  }, 0.4);
};
var contactsPageTabSection = function contactsPageTabSection() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contacts-page-tabs-section').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contacts-page-tabs-section');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    },
    paused: true
  });
  section.find('.container').each(function (i, e) {
    var el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
    tl.fromTo(el.find('.background-svg-wrap'), {
      opacity: 0
    }, {
      opacity: 1
    }, 0);
    tl.to(el.find('.tab-content-heading .char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0);
  });
  tl.fromTo(section.find('#tabs li, .user-testimonial'), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: 0.1
  }, 0);
  tl.fromTo(section.find('.container:first-of-type .tab-subheading'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.2);
  tl.fromTo([section.find('.container:first-of-type .tab-contacts').children(), section.find('.container:first-of-type .tab-contacts-post-txt, .container:first-of-type .contacts-tab-form')], {
    opacity: 0
  }, {
    opacity: 1,
    stagger: 0.1
  }, 0.4);
  var observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -25% 0px"
  };
  var Observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        if (!section.hasClass('animated-in')) {
          tl.timeScale(1).play();
          section.addClass('animated-in');
        }
      } else {
        if (entry.boundingClientRect.y > 0) {
          tl.timeScale(2).reverse();
          section.removeClass('animated-in');
        }
      }
    });
  }, observerOptions);
  Observer.observe(section[0]);
};
var stickySidebarAnim = function stickySidebarAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contacts-page-tabs-section').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contacts-page-tabs-section');
  var parallaxTween;
  var contentHeight = section.find('#tabs').outerHeight(true) + section.find('.user-testimonial').outerHeight(true);
  var totalHeight = section.find('.tabs-nav').outerHeight();
  if (totalHeight < innerHeight) return;
  parallaxTween = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(section.find('.tabs-nav'), {
    y: 0
  }, {
    y: totalHeight - contentHeight,
    ease: 'none',
    paused: true
  });
  var sectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(section.prevAll('section'));
  var contentOffset = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').outerHeight() - jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').height();
  var progressTween = function progressTween() {
    if (typeof parallaxTween == 'undefined') return;
    var elPosition = window.scrollY - sectionOffsetTop - (section.outerHeight() - section.height() + contentOffset) + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header').outerHeight();
    var currentProgress = elPosition / (totalHeight - contentHeight);

    // console.log(currentProgress)

    parallaxTween.progress(currentProgress);
  };
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('contactPageChangeContainer', function (e, val) {
    contentHeight = section.find('#tabs').outerHeight(true) + section.find('.user-testimonial').outerHeight(true);
    totalHeight = section.find('.tabs-nav').outerHeight();
    parallaxTween = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(section.find('.tabs-nav'), {
      y: 0
    }, {
      y: totalHeight - contentHeight,
      ease: 'none',
      paused: true
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resizeObserverTrigger', function () {
    contentHeight = section.find('#tabs').outerHeight(true) + section.find('.user-testimonial').outerHeight(true);
    totalHeight = section.find('.tabs-nav').outerHeight();
    parallaxTween = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(section.find('.tabs-nav'), {
      y: 0
    }, {
      y: totalHeight - contentHeight,
      ease: 'none',
      paused: true,
      duration: 10
    });
    sectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(section.prevAll('section'));
    contentOffset = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').outerHeight() - jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').height();
    progressTween = function progressTween() {
      if (typeof parallaxTween == 'undefined') return;
      var elPosition = window.scrollY - sectionOffsetTop - (section.outerHeight() - section.height() + contentOffset) + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header').outerHeight();
      var currentProgress = elPosition / (totalHeight - contentHeight);

      // console.log(currentProgress)

      parallaxTween.progress(currentProgress);
    };
  });

  // $(window).on('resize',
  //     debounce(() => {

  //     }, 150)
  // )
};
var init = function init() {
  contactsPageHeroAnim();
  contactsPageTabSection();
  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
    stickySidebarAnim();
  }
};

/***/ })

}]);
//# sourceMappingURL=contacts_animations.js.map