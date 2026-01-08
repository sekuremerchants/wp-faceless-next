"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/global_animations"],{

/***/ "./assets/js/src/theme/animations/global.js":
/*!**************************************************!*\
  !*** ./assets/js/src/theme/animations/global.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/DrawSVGPlugin */ "./node_modules/gsap/DrawSVGPlugin.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rive-app/canvas-single */ "./node_modules/@rive-app/canvas-single/rive.js");
/* harmony import */ var _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");






_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_2__.RuntimeLoader.setWasmUrl(_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_2__.riveWASMResource);
gsap__WEBPACK_IMPORTED_MODULE_3__["default"].registerPlugin(gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_4__.DrawSVGPlugin);
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
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
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
var footerDesktopAnim = function footerDesktopAnim() {
  var footer = $('#footer');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
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
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
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
var formContactSectionAnim = function formContactSectionAnim() {
  if (!$('.form-contact-section-home').length) return;
  var section = $('.form-contact-section-home');

  // console.log(section);
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    },
    paused: true
  });

  // tl.call(() => {
  //     section.find('.circle-full').children().attr('style', '');
  //     section.find('.background-el').attr('style', '');
  // }, 0)
  if ($(section.find('.txt-content .char').length) > 0) {
    tl.to(section.find('.txt-content .char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0);
  }
  if ($(section.find('.txt-post-rtf').length) > 0) {
    tl.fromTo(section.find('.txt-post-rtf'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, 0.3);
  }
  if ($(section.find('.circle-full').length) > 0) {
    tl.fromTo(section.find('.circle-full').children(), {
      scale: 0
    }, {
      scale: 1,
      ease: 'elastic.out(0.6, 0.4)',
      stagger: 0.1,
      duration: 1
    }, 0.3);
  }
  if ($(section.find('.form-row').length) > 0) {
    tl.fromTo(section.find('.form-row'), {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.1
    }, 0.6);
  }
  if ($(section.find('.background-el').length) > 0) {
    tl.fromTo(section.find('.background-el'), {
      scale: 0
    }, {
      scale: 1,
      duration: 1,
      ease: 'elastic.out(0.6, 0.4)'
    }, 0.9);
  }
  if ($(section.find('.form-content.char').length) > 0) {
    tl.to(section.find('.form-content .char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 1);
  }

  // if (!isMobile()) {
  //     gsap.fromTo(section.find('.inner-circles-wrap'), {
  //         y: -100
  //     }, {
  //         y: 0,
  //         ease: 'none',
  //         scrollTrigger: {
  //             trigger: section,
  //             start: '0% 100%',
  //             end: '100% 25%',
  //             scrub: true
  //         }
  //     })
  // }

  var observerOptions = {
    root: null,
    rootMargin: "0px 0px -25% 0px",
    threshold: 0
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
  $(window).on('resizeObserverTrigger', function () {
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set([section.find('.circle-full').children(), section.find('.background-el').length ? section.find('.background-el') : null], {
      scale: 0,
      clearProps: true
    });
  });

  // $(window).on('resize',
  //     debounce(() => {
  //     }, 150)
  // )

  // ScrollTrigger.create({
  //     trigger: section,
  //     start: '0% 75%',
  //     end: '+=1%',
  //     toggleActions: 'play none none none',
  //     animation: tl,
  //     onEnter: () => tl.timeScale(1).play(),
  //     onLeaveBack: () => tl.timeScale(2).reverse()
  // })
};
var innerPagesLandingSectionDesktopAnim = function innerPagesLandingSectionDesktopAnim() {
  if (!$('.inner-pages-landing-section:not(.no-landing-anims)').length) return;
  var section = $('.inner-pages-landing-section:not(.no-landing-anims)');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    }
    // paused: true,
  });
  if (section.find('.bg-image').length) {
    tl.fromTo(section.find('.bg-image'), {
      opacity: 0
    }, {
      opacity: 1
    }, 0);
  }
  if (section.find('.background-video-wrap').length) {
    tl.fromTo(section.find('.background-video-wrap'), {
      opacity: 0
    }, {
      opacity: 1
    }, 0);
  }
  if (section.find('.scroll-btn-border-circle').length) {
    tl.set(section.find('.scroll-btn-border-circle'), {
      rotation: -90,
      transformOrigin: '50% 50%'
    }, 0);
  }
  if (section.find('.background-circles-wrap').length) {
    var circlesWrap = section.find('.background-circles-wrap');
    var circleTopLeft = circlesWrap.find('.top-left');
    var circleTopRight = circlesWrap.find('.top-right');
    var circleBottomLeft = circlesWrap.find('.bottom-left');
    var circleBottomRight = circlesWrap.find('.bottom-right');
    tl.set(circleTopRight, {
      xPercent: -68
    }, 0);
    tl.set(circleBottomLeft, {
      yPercent: -74
    }, 0);
    tl.set(circleBottomRight, {
      xPercent: -68,
      yPercent: -74
    }, 0);
    tl.fromTo([circleTopLeft, circleTopRight, circleBottomLeft, circleBottomRight], {
      scale: 0
    }, {
      scale: 1
    }, 0.3);
    tl.to(circleTopRight, {
      xPercent: 0
    }, 0.6);
    tl.to(circleBottomLeft, {
      xPercent: 68
    }, 0.6);
    tl.to(circleBottomRight, {
      xPercent: 0
    }, 0.6);
    tl.to(circleBottomLeft, {
      yPercent: 0
    }, 0.9);
    tl.to(circleBottomRight, {
      yPercent: 0
    }, 0.9);
    tl.to(circleBottomLeft, {
      xPercent: 0
    }, 1.2);
  }
  if (section.find('.background-target-circle-transparent').length) {
    var circleElements = section.find('.background-target-circle-inner, .background-target-circle-transparent');
    tl.fromTo(circleElements, {
      scale: 0
    }, {
      scale: 1,
      ease: 'elastic.out(0.6, 0.4)',
      stagger: 0.2,
      duration: 1
    }, 0);
  }
  tl.fromTo(section.find('.breadcrumb-list').children(), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: 0.2
  }, 0);
  tl.fromTo(section.find('.current-page-breadcrumb-title'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0);
  if (section.find('.pre-heading').length) {
    tl.fromTo(section.find('.pre-heading'), {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, 0.15);
  }
  if (section.find('.txt-size-100 .char').length) {
    tl.to(section.find('.txt-size-100 .char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0.3);
  }
  if (section.find('.landing-video-btn').length) {
    tl.fromTo(section.find('.landing-video-btn').children(), {
      scale: 0
    }, {
      scale: 1,
      ease: 'elastic.out(0.6, 0.4)',
      stagger: 0.2,
      duration: 1
    }, 0.3);
  }
  if (section.find('.industry-template-img').length) {
    tl.fromTo(section.find('.industry-template-img'), {
      opacity: 0,
      yPercent: 50,
      scale: 0.7
    }, {
      opacity: 1,
      yPercent: 0,
      scale: 1,
      stagger: 0.2,
      duration: 1
    }, 0.3);
  }
  if (section.find('.txt-block').length) {
    section.find('.txt-block').each(function (i, e) {
      var item = $(e);
      if (item.find('.char').length) {
        tl.to(item.find('.char'), {
          y: 0,
          stagger: 0.02,
          opacity: 1,
          duration: 0.4
        }, 0.6);
      }
      tl.fromTo(item.find('.txt-post-rtf'), {
        x: -10,
        opacity: 0
      }, {
        x: 0,
        opacity: 1
      }, 0.8);
    });
  }
  if (section.find('.single-txt-block').length) {
    section.find('.single-txt-block').each(function (i, e) {
      var item = $(e);
      tl.to(item.find('.char'), {
        y: 0,
        stagger: 0.02,
        opacity: 1,
        duration: 0.4
      }, 0.6);
      tl.fromTo(item.find('.txt-post-rtf'), {
        x: -10,
        opacity: 0
      }, {
        x: 0,
        opacity: 1
      }, 0.8);
    });
  }
  if (section.find('.single-txt-block-no-title').length) {
    tl.fromTo(section.find('.single-txt-block-no-title'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, 0.6);
  }
  if (section.find('.btn-default').length) {
    tl.fromTo(section.find('.btn-default'), {
      opacity: 0
    }, {
      opacity: 1
    }, 0.8);
  }
  if (section.find('.scroll-btn-border-circle').length) {
    tl.fromTo(section.find('.scroll-btn-border-circle'), {
      drawSVG: '0%'
    }, {
      drawSVG: "100%"
    }, 1);
    tl.fromTo(section.find('.scroll-btn-img'), {
      opacity: 0
    }, {
      opacity: 1
    }, 1.2);
  }
};
var translateYSectionDefault = function translateYSectionDefault() {
  if (!$('.translate-y-section-default').length) return;
  var sections = $('.translate-y-section-default');
  sections.each(function (i, e) {
    var section = $(e);
    var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      onStart: function onStart() {
        return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
      },
      paused: true
    });
    if (section.find('.fade-in-first').length) {
      tl.fromTo(section.find('.fade-in-first'), {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.1
      }, 0);
    }
    tl.to(section.find('.char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0);
    tl.fromTo(section.find('.anim-translate-y'), {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }, 0.2);
    if (section.find('.fade-in-last').length) {
      tl.fromTo(section.find('.fade-in-last'), {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.1
      }, 0.4);
    }
    var observerOptions = {
      root: null,
      rootMargin: "0px 0px -25% 0px",
      threshold: 0
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

    // ScrollTrigger.create({
    //     trigger: section,
    //     start: '0% 75%',
    //     end: '+=1%',
    //     toggleActions: 'none none none none',
    //     animation: tl,
    //     onEnter: () => tl.timeScale(1).play(),
    //     onLeaveBack: () => tl.timeScale(2).reverse()
    // })
  });
};
var blocksGridSectionAnim = function blocksGridSectionAnim() {
  if (!$('.blocks-grid-section').length) return;
  var section = $('.blocks-grid-section');
  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
    var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      onStart: function onStart() {
        return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
      },
      paused: true
    });
    tl.fromTo(section.find('.bg-image'), {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.2
    }, 0);
    section.find('.single-block').each(function (i, e) {
      var block = $(e);
      tl.to(block.find('.char'), {
        y: 0,
        stagger: 0.02,
        opacity: 1,
        duration: 0.4
      }, 0);
      tl.fromTo(block.find('.txt-post-rtf'), {
        x: -10,
        opacity: 0
      }, {
        x: 0,
        opacity: 1
      }, 0.3);
    });
    var observerOptions = {
      root: null,
      rootMargin: "0px 0px -25% 0px",
      threshold: 0
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
    // ScrollTrigger.create({
    //     trigger: section,
    //     start: '0% 75%',
    //     end: '+=1%',
    //     toggleActions: 'none none none none',
    //     animation: tl,
    //     onEnter: () => tl.timeScale(1).play(),
    //     onLeaveBack: () => tl.timeScale(2).reverse()
    // })
  } else {
    section.find('.single-block').each(function (i, e) {
      var block = $(e);
      var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        onStart: function onStart() {
          return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
        },
        paused: true
      });
      tl.fromTo(block.find('.bg-image'), {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.1
      }, 0);
      tl.to(block.find('.char'), {
        y: 0,
        stagger: 0.02,
        opacity: 1,
        duration: 0.4
      }, 0);
      tl.fromTo(block.find('.txt-post-rtf'), {
        x: -10,
        opacity: 0
      }, {
        x: 0,
        opacity: 1
      }, 0.3);
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.create({
        trigger: block,
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
    });
  }
};
var circleInfoSection = function circleInfoSection() {
  if (!$('.circle-info-white-section').length) return;
  var section = $('.circle-info-white-section');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    },
    paused: true
  });
  tl.to(section.find('.char'), {
    y: 0,
    stagger: 0.02,
    opacity: 1,
    duration: 0.4
  }, 0);
  tl.fromTo(section.find('.anim-translate-y'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    stagger: 0.1
  }, 0.2);
  tl.fromTo(section.find('.img-wrap'), {
    scale: 0
  }, {
    scale: 1,
    duration: 1,
    ease: 'elastic.out(0.6, 0.4)'
  }, 0.4);
  tl.fromTo(section.find('.img-txt-content'), {
    xPercent: -68,
    opacity: 0
  }, {
    xPercent: 0,
    opacity: 1
  }, '-=.6');
  tl.fromTo(section.find('.img-txt-content').children(), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: 0.2
  }, '-=.2');
  tl.fromTo(section.find('.arc-border-pink, .arc-light-pink'), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: 0.2
  }, '-=.6');
  var observerOptions = {
    root: null,
    rootMargin: "0px 0px -25% 0px",
    threshold: 0
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

  // ScrollTrigger.create({
  //     trigger: section,
  //     start: '0% 75%',
  //     end: '+=1%',
  //     onEnter: () => tl.timeScale(1).play(),
  //     onLeaveBack: () => tl.timeScale(2).reverse()
  // })
};
var txtBlocksLayoutSection = function txtBlocksLayoutSection() {
  if (!$('.txt-blocks-layout-section:not(.no-txt-blocks-section-anim)').length) return;
  var section = $('.txt-blocks-layout-section:not(.no-txt-blocks-section-anim)');
  var blocks = section.find('.max-w-container').first().find('.content-block, .table-block:not(.content-block)');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    },
    paused: true
  });
  tl.fromTo(section.find('.background-svg-wrap'), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: 0.2
  });
  var observerOptions = {
    root: null,
    threshold: 0
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

  // ScrollTrigger.create({
  //     trigger: section,
  //     start: '0% 75%',
  //     end: '+=1%',
  //     onEnter: () => tl.timeScale(1).play(),
  //     onLeaveBack: () => tl.timeScale(2).reverse()
  // })

  blocks.each(function (i, e) {
    var block = $(e);
    var blockTl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      paused: true
    });
    switch (true) {
      case block.hasClass('plain-txt-block') || block.hasClass('table-block'):
        blockTl.fromTo(block.children(), {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.05
        }, 0);
        break;
      case block.hasClass('media-block'):
        blockTl.fromTo(block.find('.txt-content').children(), {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.05
        }, 0);
        blockTl.fromTo(block.find('.img-content'), {
          scale: 0
        }, {
          scale: 1,
          ease: 'elastic.out(0.6, 0.4)',
          stagger: 0.2,
          duration: 1
        }, 0.2);
        break;
      case block.hasClass('contact-form-block'):
        blockTl.fromTo([block.find('.plain-txt-block').first().children(), block.find('.person-quote-block').children(), block.find('.plain-txt-block').last().children()], {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.05
        }, 0);
        blockTl.fromTo(block.find('.right-content-form'), {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.05
        }, 0.3);
        break;
      case block.hasClass('faq-block'):
        blockTl.to(block.find('.char'), {
          y: 0,
          stagger: 0.02,
          opacity: 1,
          duration: 0.4
        }, 0);
        blockTl.fromTo(block.find('.faq-questions-wrap').children(), {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.1
        }, 0.2);
        break;
      case block.hasClass('txt-block full-width-block'):
        blockTl.fromTo(block.find('.txt-content:not(.table-block)').children(), {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.05
        }, 0);
        blockTl.fromTo(block.find('.table-block').children(), {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.05
        }, 0.2);
        break;
      case block.hasClass('images-block'):
        blockTl.fromTo(block.find('.section-title'), {
          y: 15,
          opacity: 0
        }, {
          y: 0,
          opacity: 1
        }, 0);
        blockTl.fromTo(block.find('.images-wrap').children(), {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.1
        }, 0.2);
        break;
      case block.hasClass('circle-info-white-block'):
        blockTl.to(block.find('.char'), {
          y: 0,
          stagger: 0.02,
          opacity: 1,
          duration: 0.4
        }, 0);
        blockTl.fromTo(block.find('.anim-translate-y'), {
          y: 15,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          stagger: 0.1
        }, 0.2);
        blockTl.fromTo(block.find('.img-wrap'), {
          scale: 0
        }, {
          scale: 1,
          duration: 1,
          ease: 'elastic.out(0.6, 0.4)'
        }, 0.4);
        blockTl.fromTo(block.find('.img-txt-content'), {
          xPercent: -68,
          opacity: 0
        }, {
          xPercent: 0,
          opacity: 1
        }, '-=.6');
        blockTl.fromTo(block.find('.img-txt-content').children(), {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.2
        }, '-=.2');
        blockTl.fromTo(block.find('.arc-border-pink, .arc-light-pink'), {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.2
        }, '-=.6');
        break;
      case block.hasClass('icons-content-block-vertical') || block.hasClass('icons-content-block-horizontal'):
        block.find('.icons-block-item').each(function (i, e) {
          var item = $(e);
          blockTl.fromTo(item.find('.img-wrap'), {
            y: 15,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.1
          }, 0);
          blockTl.fromTo(item.find('.txt-post-rtf').children(), {
            opacity: 0
          }, {
            opacity: 1,
            stagger: 0.1
          }, 0.2);
        });
        break;
      case block.hasClass('txt-cols-4') || block.hasClass('txt-cols-3') || block.hasClass('txt-cols-2'):
        blockTl.fromTo(block.find('.txt-size-60'), {
          y: 15,
          opacity: 0
        }, {
          y: 0,
          opacity: 1
        }, 0);
        blockTl.fromTo(block.find('.txt-blocks').children(), {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.1
        }, 0.2);
        break;
      case block.hasClass('media-list-items-block'):
        blockTl.fromTo(block.find('.list-items-content').children(), {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.1
        }, 0);
        blockTl.fromTo(block.find('.img-content'), {
          scale: 0
        }, {
          scale: 1,
          ease: 'elastic.out(0.6, 0.4)',
          duration: 1
        }, 0.2);
        break;
      case block.hasClass('person-quote-block'):
        blockTl.fromTo(block.find('.person-img-wrap'), {
          scale: 0
        }, {
          scale: 1,
          ease: 'elastic.out(0.6, 0.4)',
          duration: 1
        }, 0);
        blockTl.fromTo(block.find('.quote-img-wrap'), {
          opacity: 0
        }, {
          opacity: 1
        }, 0.15);
        blockTl.fromTo(block.find('.txt-content-inner'), {
          opacity: 0
        }, {
          opacity: 1,
          stagger: 0.1
        }, 0.3);
        break;
    }
    var observerOptions = {
      root: null,
      rootMargin: "0px 0px -25% 0px",
      threshold: 0
    };
    var Observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          if (!block.hasClass('animated-in')) {
            blockTl.timeScale(1).play();
            block.addClass('animated-in');
          }
        } else {
          if (entry.boundingClientRect.y > 0) {
            blockTl.timeScale(2).reverse();
            block.removeClass('animated-in');
          }
        }
      });
    }, observerOptions);
    Observer.observe(block[0]);

    // ScrollTrigger.create({
    //     trigger: block,
    //     start: '0% 75%',
    //     end: '+=1%',
    //     onEnter: () => blockTl.timeScale(1).play(),
    //     onLeaveBack: () => blockTl.timeScale(2).reverse()
    // })
  });
};
var infoCircleTxtSectionAnim = function infoCircleTxtSectionAnim() {
  if (!$('.circle-info-section-anim').length) return;
  var sections = $('.circle-info-section-anim');
  sections.each(function (i, e) {
    var section = $(e);
    var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      onStart: function onStart() {
        return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
      },
      paused: true
    });
    tl.to(section.find('.char'), {
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
    }, 0.3);
    if (section.find('.btn-default').length) {
      tl.fromTo(section.find('.btn-default'), {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.1
      }, 0.45);
    }
    var startAt = !(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)() ? 0.45 : 0;
    tl.fromTo(section.find('.scale-in-circle'), {
      scale: 0
    }, {
      scale: 1,
      duration: 1,
      ease: 'elastic.out(0.6, 0.4)'
    }, startAt);
    section.find('.fade-in-circle').each(function (i, e) {
      var circle = $(e);
      var opacityVal = circle.attr('data-opacity') ? circle.attr('data-opacity') * 1 : 1;
      tl.fromTo(circle, {
        opacity: 0
      }, {
        opacity: opacityVal
      }, startAt += 0.15 + 0.2 * i);
    });
    var observerOptions = {
      root: null,
      rootMargin: "0px 0px -25% 0px",
      threshold: 0
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

    // ScrollTrigger.create({
    //     trigger: section,
    //     start: '0% 75%',
    //     end: '+=1%',
    //     toggleActions: 'none none none none',
    //     animation: tl,
    //     onEnter: () => tl.timeScale(1).play(),
    //     onLeaveBack: () => tl.timeScale(2).reverse()
    // })
  });
};
var fadeInSectionDefaultAnim = function fadeInSectionDefaultAnim() {
  if (!$('.fade-in-section-default').length) return;
  var sections = $('.fade-in-section-default');
  sections.each(function (i, e) {
    var section = $(e);
    var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      onStart: function onStart() {
        return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
      },
      paused: true
    });
    var elements = section.find('.max-w-container').children();
    tl.fromTo(elements, {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.2
    }, 0);
    if (section.find('.fade-in-last').length) {
      tl.fromTo(section.find('.fade-in-last'), {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.1
      }, 0.2);
    }
    var observerOptions = {
      root: null,
      rootMargin: "0px 0px -25% 0px",
      threshold: 0
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

    // ScrollTrigger.create({
    //     trigger: section,
    //     start: '0% 75%',
    //     end: '+=1%',
    //     toggleActions: 'none none none none',
    //     animation: tl,
    //     onEnter: () => tl.timeScale(1).play(),
    //     onLeaveBack: () => tl.timeScale(2).reverse()
    // })
  });
};
var txtSectionDefaultAnim = function txtSectionDefaultAnim() {
  if (!$('.txt-section-anim').length) return;
  var sections = $('.txt-section-anim');
  sections.each(function (i, e) {
    var section = $(e);
    var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      onStart: function onStart() {
        return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
      },
      paused: true
    });
    tl.to(section.find('.char'), {
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
      opacity: 1,
      stagger: 0.2
    }, 0.2);
    if (section.find('.btn-default').length) {
      tl.fromTo(section.find('.btn-default'), {
        opacity: 0
      }, {
        opacity: 1
      }, 0.4);
    }
    var observerOptions = {
      root: null,
      rootMargin: "0px 0px -25% 0px",
      threshold: 0
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

    // ScrollTrigger.create({
    //     trigger: section,
    //     start: '0% 75%',
    //     end: '+=1%',
    //     toggleActions: 'none none none none',
    //     animation: tl,
    //     onEnter: () => tl.timeScale(1).play(),
    //     onLeaveBack: () => tl.timeScale(2).reverse()
    // })
  });
};
var innerPagesContactSection = function innerPagesContactSection() {
  if (!$('.inner-pages-contact-section').length) return;
  var section = $('.inner-pages-contact-section');
  var bgImageFadeInTween = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(section.find('.bg-image'), {
    opacity: 0
  }, {
    opacity: 1,
    ease: 'none',
    paused: true,
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    }
  });
  section.find('.single-block').each(function (i, e) {
    var item = $(e);
    if (item.hasClass('txt-content-block')) {
      var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        paused: true
      });
      tl.fromTo(item.find('.txt-size-12'), {
        y: 15,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, 0);
      tl.to(item.find('.char'), {
        y: 0,
        stagger: 0.02,
        opacity: 1,
        duration: 0.4
      }, 0.3);
      tl.fromTo(item.find('.buttons-wrap').children(), {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.1
      }, 0.6);
      if (item.find('.txt-post-rtf').length) {
        tl.fromTo(item.find('.txt-post-rtf'), {
          x: -10,
          opacity: 0
        }, {
          x: 0,
          opacity: 1
        }, 0.9);
      }
      var observerOptions = {
        root: null,
        rootMargin: "0px 0px -25% 0px",
        threshold: 0
      };
      var Observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0) {
            if (!item.hasClass('animated-in')) {
              bgImageFadeInTween.timeScale(1).play();
              tl.timeScale(1).play();
              item.addClass('animated-in');
            }
          } else {
            if (entry.boundingClientRect.y > 0) {
              tl.timeScale(2).reverse();
              bgImageFadeInTween.timeScale(2).reverse();
              item.removeClass('animated-in');
            }
          }
        });
      }, observerOptions);
      Observer.observe(item[0]);

      // ScrollTrigger.create({
      //     trigger: item,
      //     start: '0% 75%',
      //     end: '+=1%',
      //     toggleActions: 'none none none none',
      //     animation: tl,
      //     onEnter: () => tl.timeScale(1).play(),
      //     onLeaveBack: () => tl.timeScale(2).reverse()
      // })
    } else {
      var _tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        onStart: function onStart() {
          return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
        },
        paused: true
      });
      var elementsToFadeIn = item.find('.guide-form, .newsletter-form').length ? [item.find('.txt-post-rtf').children(), item.find('.guide-form, .newsletter-form')] : [item.find('.txt-post-rtf').children()];
      _tl.fromTo(item.find('.txt-size-12'), {
        y: 15,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, 0);
      _tl.to(item.find('.char'), {
        y: 0,
        stagger: 0.02,
        opacity: 1,
        duration: 0.4
      }, 0.3);
      _tl.fromTo(elementsToFadeIn, {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.1
      }, 0.6);
      var _observerOptions = {
        root: null,
        rootMargin: "0px 0px -25% 0px",
        threshold: 0
      };
      var _Observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0) {
            if (!item.hasClass('animated-in')) {
              bgImageFadeInTween.timeScale(1).play();
              _tl.timeScale(1).play();
              item.addClass('animated-in');
            }
          } else {
            if (entry.boundingClientRect.y > 0) {
              bgImageFadeInTween.timeScale(2).reverse();
              _tl.timeScale(2).reverse();
              item.removeClass('animated-in');
            }
          }
        });
      }, _observerOptions);
      _Observer.observe(item[0]);

      // ScrollTrigger.create({
      //     trigger: item,
      //     start: '0% 75%',
      //     end: '+=1%',
      //     toggleActions: 'none none none none',
      //     animation: tl,
      //     onEnter: () => tl.timeScale(1).play(),
      //     onLeaveBack: () => tl.timeScale(2).reverse()
      // })
    }
  });
};
var bind = function bind() {
  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
    $('.round-btn-submit .background-el').off('mouseenter').on('mouseenter', function (e) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(e.currentTarget, {
        scale: 3,
        ease: 'elastic.out(0.6, 0.4)'
      });
    });
    $('.round-btn-submit .background-el').off('mouseleave').on('mouseleave', function (e) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(e.currentTarget, {
        scale: 1
      });
    });
  }
};
var parallaxImages = function parallaxImages() {
  if (!$('.parallax-img').length) return;
  var images = $('.parallax-img');
  images.each(function (i, e) {
    if ($(e).hasClass('no-mobile-parallax') && (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) return;
    var img = $(e);
    var section = img.parents('section');
    var translateVal = img.hasClass('translate-100') ? 100 : 200;
    var parallaxTween;
    var parallaxTweenMobile;
    if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
      parallaxTweenMobile = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(img, {
        y: 0
      }, {
        y: -100,
        paused: true,
        ease: 'none'
      });
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.create({
        trigger: section,
        start: '0% 100%',
        end: '100% 0%',
        animation: parallaxTweenMobile,
        scrub: true
      });
    }
    if (!img.hasClass('no-negative-translate')) {
      parallaxTween = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(img, {
        y: -translateVal
      }, {
        y: 0,
        paused: true,
        ease: 'none'
      });
    }
    var parallaxTween2 = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(img, {
      y: '+=' + translateVal,
      paused: true,
      ease: 'none'
    });
    var sectionOffsetTop;
    var sectionHeight;
    var contentOffset;
    var progressTween;
    var progressTween2;
    if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
      sectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.getTotalHeight)(section.prevAll('section'));
      sectionHeight = section.outerHeight();
      contentOffset = $('#main-content').outerHeight() - $('#main-content').height();
      progressTween = function progressTween() {
        if (typeof parallaxTween == 'undefined') return;
        var elPosition = window.scrollY - sectionOffsetTop + innerHeight - contentOffset;
        var currentProgress = elPosition / sectionHeight;
        parallaxTween.progress(currentProgress);
      };
      progressTween2 = function progressTween2() {
        if (typeof parallaxTween2 == 'undefined') return;
        var elPosition = window.scrollY - sectionOffsetTop - contentOffset;
        var currentProgress = elPosition / sectionHeight;
        parallaxTween2.progress(currentProgress);
      };
      var observerOptions = {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0
      };
      var observer2 = new IntersectionObserver(function (entry) {
        if (entry[0].intersectionRatio > 0) {
          if (!section.hasClass('animating-parallax-img')) {
            sectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.getTotalHeight)(section.prevAll('section'));
            sectionHeight = section.outerHeight();
            contentOffset = $('#main-content').outerHeight() - $('#main-content').height();
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].ticker.add(progressTween2);
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].ticker.add(progressTween);
            section.addClass('animating-parallax-img');
            // console.log(entry[0], 'parallaxTween in')
          }
        } else {
          gsap__WEBPACK_IMPORTED_MODULE_3__["default"].ticker.remove(progressTween2);
          gsap__WEBPACK_IMPORTED_MODULE_3__["default"].ticker.remove(progressTween);
          section.removeClass('animating-parallax-img');
          // console.log(entry[0], 'parallaxTween else')
        }
      }, observerOptions);
      observer2.observe(section[0]);
    }
    if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
      $(window).on('resizeObserverTrigger', function () {
        sectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.getTotalHeight)(section.prevAll('section'));
        sectionHeight = section.outerHeight();
        contentOffset = $('#main-content').outerHeight() - $('#main-content').height();
        progressTween();
        progressTween2();
      });
    } else {
      $(window).on('resizeObserverTrigger', function () {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].killTweensOf(img);
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(img, {
          clearProps: true
        });
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
          parallaxTweenMobile = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(img, {
            y: 0
          }, {
            y: -100,
            paused: true,
            ease: 'none'
          });
          gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.create({
            trigger: section,
            start: '0% 100%',
            end: '100% 0%',
            animation: parallaxTweenMobile,
            scrub: true
          });
        }
      });
    }
  });
};
var aboutPageSymbolSectionAnim = function aboutPageSymbolSectionAnim() {
  if (!$('.symbol-section').length) return;
  var section = $('.symbol-section');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    },
    paused: true
  });
  tl.fromTo(section.find('.txt-size-12'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0);
  tl.fromTo(section.find('.symbol-section-svg'), {
    opacity: 0,
    scale: 0.5
  }, {
    opacity: 1,
    scale: 1,
    duration: 1
  }, 0.3);
  tl.to(section.find('.txt-size-80 .char'), {
    y: 0,
    stagger: 0.02,
    opacity: 1,
    duration: 0.4
  }, 0.3);
  tl.fromTo(section.find('.txt-post-rtf'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    stagger: 0.1
  }, 0.6);
  tl.fromTo(section.find('.btn-default'), {
    opacity: 0
  }, {
    opacity: 1
  }, 0.9);
  var observerOptions = {
    root: null,
    rootMargin: "0px 0px -25% 0px",
    threshold: 0
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

  // ScrollTrigger.create({
  //     trigger: section,
  //     start: '0% 75%',
  //     end: '+=1%',
  //     toggleActions: 'none none none none',
  //     animation: tl,
  //     onEnter: () => tl.timeScale(1).play(),
  //     onLeaveBack: () => tl.timeScale(2).reverse()
  // })
};
var infoSliderSectionHomeDesktop = function infoSliderSectionHomeDesktop() {
  if (!$('.info-slider-section-home').length) return;
  var section = $('.info-slider-section-home');
  var slides = section.find('.swiper-slide');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    },
    paused: true
  });
  gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(section.find('.section-heart-red-svg'), {
    transformOrigin: '50% 50%'
  });
  tl.fromTo(section.find('.bg-image'), {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1
  }, 0);
  tl.fromTo(section.find('.txt-size-12'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0);
  slides.each(function (i, e) {
    var slide = $(e);
    tl.fromTo(slide.find('.quotes-img-wrap'), {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, 0.15);
    tl.to(slide.find('.anim-translate-y'), {
      yPercent: 0,
      stagger: 0.1,
      opacity: 1
    }, 0.3);
    tl.fromTo(slide.find('.txt-size-18'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, 0.6);
  });
  tl.fromTo(section.find('.swiper-nav-btn-wrap'), {
    y: 10,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0.9);
  tl.fromTo(section.find('.section-heart-red-svg:not(.smaller-heart-top)'), {
    scale: 0.8,
    opacity: 0,
    xPercent: -15,
    yPercent: 15
  }, {
    scale: 1,
    opacity: 1,
    xPercent: 0,
    yPercent: 0,
    duration: 1.5
  }, 0.9);
  tl.fromTo(section.find('.smaller-heart-top'), {
    scale: 0.8,
    opacity: 0,
    xPercent: -50,
    yPercent: 50
  }, {
    scale: 1,
    opacity: 1,
    xPercent: 0,
    yPercent: 0,
    duration: 1
  }, 1.2);
  var animationsArray = [];
  section.find('.background-draw-svg').each(function (i, e) {
    var canvas = $(e);
    var thisRive = new _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_2__.Rive({
      src: canvas.data('url'),
      canvas: e,
      autoplay: false
    });
    animationsArray.push(thisRive);
  });
  var playAnimFunc = function playAnimFunc(index) {
    // console.log(index, 'in')
    animationsArray[index].play();
  };

  // ScrollTrigger.create({
  //     trigger: section,
  //     start: '0% 40%',
  //     end: '100% 0%',
  //     onEnter: () => {
  //         gsap.killTweensOf(playAnimFunc);
  //         section.find('.background-draw-svg').each((i,e) => {
  //             gsap.delayedCall(parseInt($(e).data('delay')), playAnimFunc, [i]);
  //         });
  //     },
  //     onEnterBack: () => {
  //         gsap.killTweensOf(playAnimFunc);
  //         section.find('.background-draw-svg').each((i,e) => {
  //             gsap.delayedCall(parseInt($(e).data('delay')), playAnimFunc, [i]);
  //         });
  //     },
  //     onLeave: () => {
  //         gsap.killTweensOf(playAnimFunc);
  //         animationsArray.map(e => {
  //             e.pause();
  //             e.scrub('animation-draw', 0);
  //         });
  //     },
  //     onLeaveBack: () => {
  //         gsap.killTweensOf(playAnimFunc);
  //         animationsArray.map(e => {
  //             e.pause();
  //             e.scrub('animation-draw', 0);
  //         });
  //     },
  // })

  var observerOptions3 = {
    root: null,
    threshold: [0, 0.6]
  };
  var Observer3 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio == 0 && !entry.isIntersecting || entry.intersectionRatio < 0.6 && entry.isIntersecting && entry.boundingClientRect.y > 0) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].killTweensOf(playAnimFunc);
        animationsArray.map(function (e) {
          e.pause();
          e.scrub('animation-draw', 0);
        });
        section.removeClass('animated-in-icons');
      }
      if (entry.intersectionRatio >= 0.6 && entry.isIntersecting) {
        if (!section.hasClass('animated-in-icons')) {
          gsap__WEBPACK_IMPORTED_MODULE_3__["default"].killTweensOf(playAnimFunc);
          section.find('.background-draw-svg').each(function (i, e) {
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].delayedCall(parseInt($(e).data('delay')), playAnimFunc, [i]);
          });
          section.addClass('animated-in-icons');
        }
      }
      if (entry.intersectionRatio < 0.1 && entry.isIntersecting && entry.boundingClientRect.y < 0) {
        if (!section.hasClass('animated-in-icons')) {
          gsap__WEBPACK_IMPORTED_MODULE_3__["default"].killTweensOf(playAnimFunc);
          section.find('.background-draw-svg').each(function (i, e) {
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].delayedCall(parseInt($(e).data('delay')), playAnimFunc, [i]);
          });
          section.addClass('animated-in-icons');
        }
      }
    });
  }, observerOptions3);
  Observer3.observe(section[0]);

  // ScrollTrigger.create({
  //     trigger: section,
  //     start: '0% 75%',
  //     end: '+=1%',
  //     toggleActions: 'none none none none',
  //     animation: tl,
  //     onEnter: () => tl.timeScale(1).play(),
  //     onLeaveBack: () => tl.timeScale(2).reverse()
  // })

  var observerOptions = {
    root: null,
    rootMargin: "0px 0px -25% 0px",
    threshold: 0
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
var infoSliderSectionHomeMobile = function infoSliderSectionHomeMobile() {
  if (!$('.info-slider-section-home').length) return;
  var section = $('.info-slider-section-home');
  var firstSlide = section.find('.swiper-slide').first();
  var slides = section.find('.swiper-slide');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    },
    paused: true
  });
  tl.fromTo(section.find('.bg-image'), {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1
  }, 0);
  tl.fromTo(section.find('.txt-size-12'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0);
  slides.each(function (i, e) {
    var slide = $(e);
    tl.fromTo(slide.find('.quotes-img-wrap'), {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, 0.15);
    tl.to(slide.find('.anim-translate-y'), {
      yPercent: 0,
      stagger: 0.1,
      opacity: 1
    }, 0.3);
    tl.fromTo(slide.find('.txt-size-18'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, 0.6);
  });
  tl.fromTo(section.find('.swiper-nav-btn-wrap'), {
    y: 10,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0.9);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.create({
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
var savingsCalculatorAnimDesktop = function savingsCalculatorAnimDesktop() {
  if (!$('.circle-info-blue-section').length) return;
  var section = $('.circle-info-blue-section');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    },
    paused: true
  });
  tl.fromTo(section.find('.txt-size-12'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0);
  tl.to(section.find('.char'), {
    y: 0,
    stagger: 0.02,
    opacity: 1,
    duration: 0.4
  }, 0.3);
  tl.fromTo(section.find('.txt-post-rtf'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.6);
  tl.fromTo(section.find('.inner-img-wrap'), {
    scale: 0
  }, {
    scale: 1,
    ease: 'elastic.out(0.6, 0.4)',
    stagger: 0.2,
    duration: 1
  }, 0.6);
  tl.fromTo(section.find('.border-circle'), {
    drawSVG: '0%'
  }, {
    drawSVG: "100%",
    stagger: 0.2,
    duration: 1
  }, 0.8);
  tl.fromTo([section.find('.circle-opacity').children(), section.find('.circle-full').children()], {
    scale: 0
  }, {
    scale: 1,
    ease: 'elastic.out(0.6, 0.4)',
    stagger: 0.1,
    duration: 1
  }, 1);
  tl.fromTo(section.find('.btn-wrap'), {
    opacity: 0
  }, {
    opacity: 1
  }, 0.9);
  var observerOptions = {
    root: null,
    rootMargin: "0px 0px -25% 0px",
    threshold: 0
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

  // ScrollTrigger.create({
  //     trigger: section,
  //     start: '0% 75%',
  //     end: '+=1%',
  //     toggleActions: 'none none none none',
  //     animation: tl,
  //     onEnter: () => tl.timeScale(1).play(),
  //     onLeaveBack: () => tl.timeScale(2).reverse()
  // })
};
var savingsCalculatorAnimMobile = function savingsCalculatorAnimMobile() {
  if (!$('.circle-info-blue-section').length) return;
  var section = $('.circle-info-blue-section');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    },
    paused: true
  });
  tl.fromTo(section.find('.txt-size-12'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0);
  tl.to(section.find('.char'), {
    y: 0,
    stagger: 0.02,
    opacity: 1,
    duration: 0.4
  }, 0.15);
  tl.fromTo(section.find('.txt-post-rtf'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.3);
  tl.fromTo(section.find('.inner-img-wrap'), {
    scale: 0
  }, {
    scale: 1,
    ease: 'elastic.out(0.6, 0.4)',
    stagger: 0.2,
    duration: 1
  }, 0.45);
  tl.fromTo(section.find('.btn-wrap'), {
    opacity: 0
  }, {
    opacity: 1
  }, 0.6);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.create({
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
var landingPopupButton = function landingPopupButton() {
  var $blocks = $('.sk-block');
  var $trigger;
  if ($('.contact-form-block').length) {
    $trigger = '.contact-form-block';
  } else if ($blocks[0]) {
    $trigger = $blocks[0];
  } else {
    return false;
  }
  if ($('.sk-lander').length > 0 && $('.sk-block .form--container').length == 0 && $('.sk-block').length <= 3) {
    $('.header-open-form-btn').addClass('revealed');
    $('.header-cta-btn').addClass('revealed');
  } else {
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.create({
      trigger: $trigger,
      start: 'top 10%',
      end: 'bottom 0px',
      onLeave: function onLeave() {
        $('.header-open-form-btn').addClass('revealed');
        $('.header-cta-btn').addClass('revealed');
      },
      onEnterBack: function onEnterBack() {
        $('.header-open-form-btn').removeClass('revealed');
        $('.header-cta-btn').removeClass('revealed');
      }
    });
  }
};
var removeLandingPopupButton = function removeLandingPopupButton() {
  $('.landing-template-btn').removeClass('header-open-form-btn');
  $('.landing-template-btn').removeClass('header-cta-btn');
};
var init = function init() {
  headerLottieAnim();
  headerAnim();
  formContactSectionAnim();
  txtSectionDefaultAnim();
  innerPagesLandingSectionDesktopAnim();
  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
    footerDesktopAnim();
    infoSliderSectionHomeDesktop();
    savingsCalculatorAnimDesktop();
    landingPopupButton();
  } else {
    footerMobileAnim();
    infoSliderSectionHomeMobile();
    savingsCalculatorAnimMobile();
    removeLandingPopupButton();
  }
  translateYSectionDefault();
  fadeInSectionDefaultAnim();
  circleInfoSection();
  txtBlocksLayoutSection();
  blocksGridSectionAnim();
  infoCircleTxtSectionAnim();
  innerPagesContactSection();
  bind();
  parallaxImages();
  aboutPageSymbolSectionAnim();
};

/***/ })

}]);
//# sourceMappingURL=global_animations.js.map