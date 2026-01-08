"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/blog_global_animations"],{

/***/ "./assets/js/src/theme/animations/global.js":
/*!**************************************************!*\
  !*** ./assets/js/src/theme/animations/global.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/DrawSVGPlugin */ "./node_modules/gsap/DrawSVGPlugin.js");
/* harmony import */ var _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rive-app/canvas-single */ "./node_modules/@rive-app/canvas-single/rive.js");
/* harmony import */ var _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




// import lottie from 'lottie-web';


_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__.RuntimeLoader.setWasmUrl(_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__.riveWASMResource);
gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_3__.DrawSVGPlugin);
var footerDesktopAnim = function footerDesktopAnim() {
  var footer = $('#footer');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    paused: true,
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(footer);
    }
  });
  var footerLogoLink = footer.find('.footer-logo-link');
  var footerInfoColChildren = footer.find('.footer-info-col').children();
  var footerLinksHoldChildren = footer.find('.footer-links-hold').children();
  var seperatedLinksWrap = footer.find('.seperated-links-wrap');
  var reviewsWrapTitle = footer.find('.reviews-wrap .reviews-wrap-title');
  var reviewItems = footer.find('.reviews-wrap .review-item');
  var associationsWrapTitle = footer.find('.associations-wrap .associations-wrap-title');
  var associationsItems = footer.find('.associations-wrap .associations-item');
  var copyrightTxt = footer.find('.copyright-txt');
  var txtPagesListChildren = footer.find('.txt-pages-list').children();
  var siteByLink = footer.find('.site-by-link');
  if (footerLogoLink.length && footerInfoColChildren.length) {
    tl.fromTo([footerLogoLink, footerInfoColChildren], {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.1
    }, 0);
  }
  if (footerLinksHoldChildren.length && seperatedLinksWrap.length) {
    tl.fromTo([footerLinksHoldChildren, seperatedLinksWrap], {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.1
    }, 0.3);
  }
  if (reviewsWrapTitle.length) {
    tl.fromTo(reviewsWrapTitle, {
      opacity: 0
    }, {
      opacity: 1
    }, 0.6);
  }
  if (reviewItems.length) {
    tl.fromTo(reviewItems, {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.1
    }, 0.9);
  }
  if (associationsWrapTitle.length) {
    tl.fromTo(associationsWrapTitle, {
      opacity: 0
    }, {
      opacity: 1
    }, 0.6);
  }
  if (associationsItems.length) {
    tl.fromTo(associationsItems, {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.1
    }, 0.9);
  }
  if (copyrightTxt.length && txtPagesListChildren.length && siteByLink.length) {
    tl.fromTo([copyrightTxt, txtPagesListChildren, siteByLink], {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.1
    }, 1.2);
  }
  var observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -25% 0px'
  };
  var Observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        if (!footer.hasClass('animated-in')) {
          tl.timeScale(1).play();
          footer.addClass('animated-in');
        }
      } else {
        if (entry.boundingClientRect.y > 0) {
          tl.timeScale(3).reverse();
          footer.removeClass('animated-in');
        }
      }
    });
  }, observerOptions);
  Observer.observe(footer[0]);
};
var footerMobileAnim = function footerMobileAnim() {
  var footer = $('#footer');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    paused: true,
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(footer);
    }
  });
  var footerLogoLink = footer.find('.footer-logo-link');
  var footerLinksColChildren = footer.find('.footer-links-col').children();
  var reviewsWrapTitle = footer.find('.reviews-wrap .reviews-wrap-title');
  var reviewItems = footer.find('.reviews-wrap .review-item');
  var associationsWrapTitle = footer.find('.associations-wrap .associations-wrap-title');
  var associationsItems = footer.find('.associations-wrap .associations-item');
  var footerMobileWrapChildren = footer.find('.footer-mobile-wrap').children();
  var txtPagesListChildren = footer.find('.txt-pages-list').children();
  var copyrightTxt = footer.find('.copyright-txt');
  var siteByLink = footer.find('.site-by-link');
  if (footerLogoLink.length && footerLinksColChildren.length) {
    tl.fromTo([footerLogoLink, footerLinksColChildren], {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.1
    }, 0);
  }
  if (reviewsWrapTitle.length) {
    tl.fromTo(reviewsWrapTitle, {
      opacity: 0
    }, {
      opacity: 1
    }, 0.3);
  }
  if (reviewItems.length) {
    tl.fromTo(reviewItems, {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.1
    }, 0.6);
  }
  if (associationsWrapTitle.length) {
    tl.fromTo(associationsWrapTitle, {
      opacity: 0
    }, {
      opacity: 1
    }, 0.3);
  }
  if (associationsItems.length) {
    tl.fromTo(associationsItems, {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.1
    }, 0.6);
  }
  if (footerMobileWrapChildren.length) {
    tl.fromTo(footerMobileWrapChildren, {
      opacity: 0
    }, {
      opacity: 1
    }, 0.9);
  }
  if (txtPagesListChildren.length && copyrightTxt.length && siteByLink.length) {
    tl.fromTo([txtPagesListChildren, copyrightTxt, siteByLink], {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.1
    }, 1.2);
  }
  var observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -25% 0px'
  };
  var Observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        if (!footer.hasClass('animated-in')) {
          tl.timeScale(1).play();
          footer.addClass('animated-in');
        }
      } else {
        if (entry.boundingClientRect.y > 0) {
          tl.timeScale(3).reverse();
          footer.removeClass('animated-in');
        }
      }
    });
  }, observerOptions);
  Observer.observe(footer[0]);
};
var init = function init() {
  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
    footerDesktopAnim();
  } else {
    footerMobileAnim();
  }
};

/***/ })

}]);
//# sourceMappingURL=blog_global_animations.js.map