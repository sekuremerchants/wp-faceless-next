"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/landers_animations"],{

/***/ "./assets/js/landers/src/theme/animations/landers.js":
/*!***********************************************************!*\
  !*** ./assets/js/landers/src/theme/animations/landers.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/landers/src/theme/helpers/helper.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/DrawSVGPlugin */ "./node_modules/gsap/DrawSVGPlugin.js");
/* harmony import */ var _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rive-app/canvas-single */ "./node_modules/@rive-app/canvas-single/rive.js");
/* harmony import */ var _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




//import lottie from 'lottie-web';


_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__.RuntimeLoader.setWasmUrl(_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__.riveWASMResource);
gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_3__.DrawSVGPlugin);
var innerPagesLandingSectionDesktopAnim = function innerPagesLandingSectionDesktopAnim() {
  if (!$('.inner-pages-landing-section:not(.no-landing-anims)').length) return;
  var section = $('.inner-pages-landing-section:not(.no-landing-anims)');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
    var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
  });
};
var blocksGridSectionAnim = function blocksGridSectionAnim() {
  if (!$('.blocks-grid-section').length) return;
  var section = $('.blocks-grid-section');
  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
    var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
  } else {
    section.find('.single-block').each(function (i, e) {
      var block = $(e);
      var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({
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
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
};
var txtBlocksLayoutSection = function txtBlocksLayoutSection() {
  if (!$('.txt-blocks-layout-section:not(.no-txt-blocks-section-anim)').length) return;
  var section = $('.txt-blocks-layout-section:not(.no-txt-blocks-section-anim)');
  var blocks = section.find('.container').first().find('.content-block, .table-block:not(.content-block)');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
  blocks.each(function (i, e) {
    var block = $(e);
    var blockTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
  });
};
var infoCircleTxtSectionAnim = function infoCircleTxtSectionAnim() {
  if (!$('.circle-info-section-anim').length) return;
  var sections = $('.circle-info-section-anim');
  sections.each(function (i, e) {
    var section = $(e);
    var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
  });
};
var fadeInSectionDefaultAnim = function fadeInSectionDefaultAnim() {
  if (!$('.fade-in-section-default').length) return;
  var sections = $('.fade-in-section-default');
  sections.each(function (i, e) {
    var section = $(e);
    var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
  });
};
var innerPagesContactSection = function innerPagesContactSection() {
  if (!$('.inner-pages-contact-section').length) return;
  var section = $('.inner-pages-contact-section');
  var bgImageFadeInTween = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(section.find('.bg-image'), {
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
      var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
    } else {
      var _tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
    }
  });
};
var infoSliderSectionHomeDesktop = function infoSliderSectionHomeDesktop() {
  if (!$('.info-slider-section-home').length) return;
  var section = $('.info-slider-section-home');
  var slides = section.find('.swiper-slide');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    },
    paused: true
  });
  gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(section.find('.section-heart-red-svg'), {
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
    var thisRive = new _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__.Rive({
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
  var observerOptions3 = {
    root: null,
    threshold: [0, 0.6]
  };
  var Observer3 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio == 0 && !entry.isIntersecting || entry.intersectionRatio < 0.6 && entry.isIntersecting && entry.boundingClientRect.y > 0) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].killTweensOf(playAnimFunc);
        animationsArray.map(function (e) {
          e.pause();
          e.scrub('animation-draw', 0);
        });
        section.removeClass('animated-in-icons');
      }
      if (entry.intersectionRatio >= 0.6 && entry.isIntersecting) {
        if (!section.hasClass('animated-in-icons')) {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].killTweensOf(playAnimFunc);
          section.find('.background-draw-svg').each(function (i, e) {
            gsap__WEBPACK_IMPORTED_MODULE_2__["default"].delayedCall(parseInt($(e).data('delay')), playAnimFunc, [i]);
          });
          section.addClass('animated-in-icons');
        }
      }
      if (entry.intersectionRatio < 0.1 && entry.isIntersecting && entry.boundingClientRect.y < 0) {
        if (!section.hasClass('animated-in-icons')) {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].killTweensOf(playAnimFunc);
          section.find('.background-draw-svg').each(function (i, e) {
            gsap__WEBPACK_IMPORTED_MODULE_2__["default"].delayedCall(parseInt($(e).data('delay')), playAnimFunc, [i]);
          });
          section.addClass('animated-in-icons');
        }
      }
    });
  }, observerOptions3);
  Observer3.observe(section[0]);
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
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({
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
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
};
var savingsCalculatorAnimMobile = function savingsCalculatorAnimMobile() {
  if (!$('.circle-info-blue-section').length) return;
  var section = $('.circle-info-blue-section');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({
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
  if ($('.sk-lander').length && !$('.sk-block .form--container').length && $('.sk-block').length <= 3) {
    $('.header-open-form-btn').addClass('revealed');
    $('.header-cta-btn').addClass('revealed');
  } else if ($('.sk-lander').length && $('.sk-block').length > 3) {
    var element = $('.landing-page-wrap > .sk-block:first-of-type');
    if (!element.length) {
      var element = $('.landing-page-wrap > *:first-of-type');
    }
    $(window).on('scroll', function () {
      var elementBottom = element.offset().top + element.outerHeight();
      var windowTop = $(window).scrollTop();
      if (elementBottom < windowTop) {
        $('.header-cta-btn').addClass('revealed');
      } else {
        $('.header-cta-btn').removeClass('revealed');
      }
    });
  }
};
var init = function init() {
  translateYSectionDefault();
  fadeInSectionDefaultAnim();
  landingPopupButton();
  innerPagesLandingSectionDesktopAnim();
  circleInfoSection();
  txtBlocksLayoutSection();
  blocksGridSectionAnim();
  infoCircleTxtSectionAnim();
  innerPagesContactSection();
  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
    infoSliderSectionHomeDesktop();
    savingsCalculatorAnimDesktop();
  } else {
    infoSliderSectionHomeMobile();
    savingsCalculatorAnimMobile();
  }
};

/***/ })

}]);
//# sourceMappingURL=landers_animations.js.map