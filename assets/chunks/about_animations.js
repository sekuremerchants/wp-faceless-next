"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/about_animations"],{

/***/ "./assets/js/src/theme/animations/about.js":
/*!*************************************************!*\
  !*** ./assets/js/src/theme/animations/about.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rive-app/canvas-single */ "./node_modules/@rive-app/canvas-single/rive.js");
/* harmony import */ var _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__.RuntimeLoader.setWasmUrl(_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__.riveWASMResource);
var coreValuesSectionInitAnim = function coreValuesSectionInitAnim() {
  console.log('coreValuesSectionInitAnim');
  if (!$('.about-page-core-values-section').length) return;
  console.log('coreValuesSectionInitAnim 1');
  var section = $('.about-page-core-values-section');
  var firstBlock = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)() ? section.find('.single-block') : section.find('.single-block:first-of-type');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    },
    paused: true
  });
  if (firstBlock.find('.anim-translate-y').length) {
    tl.to(firstBlock.find('.anim-translate-y'), {
      yPercent: 0,
      stagger: 0.1,
      opacity: 1
    }, 0.6);
  }
  if (firstBlock.find('.single-block-txt-content, .quote-by-txt').length) {
    tl.fromTo(firstBlock.find('.single-block-txt-content, .quote-by-txt'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      stagger: 0.1
    }, 0.9);
  }
  if (section.find('.step-button.active').length) {
    tl.fromTo(section.find('.step-button.active'), {
      opacity: 0
    }, {
      opacity: 1
    }, 1.2);
  }
  if (section.find('.step-button:not(.active)').length) {
    tl.fromTo(section.find('.step-button:not(.active)'), {
      opacity: 0
    }, {
      opacity: 0.3,
      stagger: 0.1,
      onComplete: function onComplete() {
        return gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(section.find('.step-button'), {
          clearProps: true
        });
      }
    }, 1.3);
  }
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
    trigger: section,
    start: '0% 75%',
    end: '+=1%',
    toggleActions: 'none none none none',
    animation: tl,
    onEnter: function onEnter() {
      tl.timeScale(1).play();
      $(window).trigger('changeSectionActiveSlide', {
        slideTo: 0
      });
    },
    onLeaveBack: function onLeaveBack() {
      tl.timeScale(2).reverse();
      $(window).trigger('changeSectionActiveSlide', {
        slideTo: 0
      });
    }
  });
};
var CoreValuesScrollAnim = /*#__PURE__*/function () {
  function CoreValuesScrollAnim() {
    _classCallCheck(this, CoreValuesScrollAnim);
    this.section = $('.about-page-core-values-section');
    this.blocks = this.section.find('.single-block');
    this.buttons = this.section.find('.step-button');
    this.animatedItemsWrap = this.section.find('.animated-items-wrap');
    this.pinWrap = this.section.find('.pin-wrap');
    this.scrollToSection = false;
    this.riveInit();
  }
  return _createClass(CoreValuesScrollAnim, [{
    key: "mobileIconAnimHandler",
    value: function mobileIconAnimHandler(step) {
      this.mobileTl.tweenTo("afterStepLabel-".concat(step), {
        duration: 2,
        ease: 'none'
      });
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(step) {
      var scrollToVal = this.iconsTimelineDesktopTlObj.scrollTrigger.labelToScroll("iconsTimelineDesktopTlLabel-".concat(step));
      var currentStep = parseInt(this.section.find("[data-step].active").attr('data-step'));
      // console.log(currentStep, 'currentStep');
      // console.log(step, 'step');

      // /* in ms */
      var scrollDuration = Math.abs((currentStep - step) * 1000);
      $(window).scrollTo(scrollToVal, {
        duration: scrollDuration
      });
    }
  }, {
    key: "coordinateRepeaterCheck",
    value: function coordinateRepeaterCheck(nextCoord, direction) {
      var changedCoord;
      if (direction === 1) {
        switch (true) {
          case nextCoord == this.p1:
            changedCoord = this.p2;
            break;
          case nextCoord == this.p2:
            changedCoord = this.p3;
            break;
          case nextCoord == this.p3:
            changedCoord = this.p4;
            break;
          case nextCoord == this.p4:
            changedCoord = this.p5;
            break;
        }
      } else {
        switch (true) {
          // case (nextCoord == this.p1):
          //     changedCoord = this.p1;
          // break;
          case nextCoord == this.p2:
            changedCoord = this.p1;
            break;
          case nextCoord == this.p3:
            changedCoord = this.p2;
            break;
          case nextCoord == this.p4:
            changedCoord = this.p3;
            break;
          case nextCoord == this.p5:
            changedCoord = this.p4;
            break;
        }
      }
      return changedCoord;
    }
  }, {
    key: "desktopScrollBackHandler",
    value: function desktopScrollBackHandler() {
      var _this = this;
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
        trigger: this.section,
        start: '100% 0%',
        end: '+=1%',
        onEnter: function onEnter() {
          // console.log('onEnter');

          _this.desktopAnimsReset();
        } /* ,
              onEnterBack: () => console.log('onEnterBack'),
              onLeave: () => console.log('onLeave'),
              onLeaveBack: () => console.log('onLeaveBack'), */
      });
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
        trigger: this.section,
        start: '100% 100%',
        end: '+=1%',
        /* onEnter: () => {
                  console.log('onEnter');
              }, */
        onEnterBack: function onEnterBack() {
          // console.log('onEnterBack');
          if (_this.section.hasClass('scroll-anim-reset')) {
            $(window).scrollTo(_this.section[0], {
              duration: 50
            });
          }
        } /* ,
              onLeave: () => console.log('onLeave'),
              onLeaveBack: () => console.log('onLeaveBack'), */
      });

      /*
      ScrollTrigger.create({
        trigger: this.section.find('.max-w-container'),
        endTrigger: this.section,
        start: '100% 100%',
        end: '100% 100%',
        onEnter: () => {
          if (this.section.hasClass('scroll-anim-reset')) {
            this.desktopAnimsEnable();
          }
        },
      });
      */
    }
  }, {
    key: "desktopAnimsReset",
    value: function desktopAnimsReset() {
      this.iconsTimelineDesktopTlObj.scrollTrigger.disable();
      this.iconsTimelineDesktopTlObj.progress(0);
      this.desktopScrollProgressTrigger.scrollTrigger.disable();
      this.desktopScrollProgressTrigger.progress(0);
      for (var i = 1; i <= this.blocks.length - 1; i++) {
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.getById('blockTlTrigger-' + i).disable();
      }
      this.blocksDesktopTlList.forEach(function (e, i) {
        e.pause();
        // console.log(e, i);
        // console.log(e.progress());
        e.progress(0);
      });
      this.buttons.removeClass('active');
      this.section.find("[data-step=\"1\"]").addClass('active');
      this.section.addClass('scroll-anim-reset');
    }

    /*
    desktopAnimsEnable() {
      this.iconsTimelineDesktopTlObj.scrollTrigger.enable();
      for (let i = 1; i <= this.blocks.length - 1; i++) {
        ScrollTrigger.getById('blockTlTrigger-' + i).enable();
      }
        this.desktopScrollProgressTrigger.scrollTrigger.enable();
        this.section.removeClass('scroll-anim-reset');
      this.p1 = this.iconsTimelineDesktopTlObj.scrollTrigger.labelToScroll(
        'iconsTimelineDesktopTlLabel-1',
      );
      this.p2 = this.iconsTimelineDesktopTlObj.scrollTrigger.labelToScroll(
        'iconsTimelineDesktopTlLabel-2',
      );
      this.p3 = this.iconsTimelineDesktopTlObj.scrollTrigger.labelToScroll(
        'iconsTimelineDesktopTlLabel-3',
      );
      this.p4 = this.iconsTimelineDesktopTlObj.scrollTrigger.labelToScroll(
        'iconsTimelineDesktopTlLabel-4',
      );
      this.p5 = this.iconsTimelineDesktopTlObj.scrollTrigger.labelToScroll(
        'iconsTimelineDesktopTlLabel-5',
      );
    }
    */

    /*
    desktopTimeline() {
      gsap.to(this.pinWrap, {
        y: () => this.section.outerHeight(true) - this.pinWrap.outerHeight(true),
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: this.section.find('.max-w-container'),
          start: '100% 100%',
          end: '100% 100%',
          endTrigger: this.section,
          scrub: true,
          id: 'pinWrapTrigger',
          onEnter: () => (this.scrollToSection = true),
          onLeave: () => (this.scrollToSection = false),
          onEnterBack: () => (this.scrollToSection = true),
          onLeaveBack: () => (this.scrollToSection = false),
        },
      });
        this.desktopScrollProgressTrigger = gsap.fromTo(
        this.section.find('.section-progress-bar'),
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: this.section.find('.max-w-container'),
            start: '100% 100%',
            end: '100% 100%',
            endTrigger: this.section,
            scrub: true,
            id: 'progressTrigger',
            onLeave: () => {
              gsap.to(this.section.find('.section-progress-bar'), { opacity: 0 });
            },
            onEnterBack: () => {
              gsap.to(this.section.find('.section-progress-bar'), { opacity: 1 });
            },
            onEnter: () => {
              gsap.to(this.section.find('.section-progress-bar'), { opacity: 1 });
            },
          },
        },
      );
        let st = ScrollTrigger.getById('iconsTimelineDesktopTriggerID');
      this.lastP = this.p1;
        ScrollTrigger.addEventListener('scrollStart', () => {
        if (this.scrollToSection) {
          // console.log('scrollStart');
          this.scrollTimeOut ? clearTimeout(this.scrollTimeOut) : null;
        }
      });
        ScrollTrigger.addEventListener('scrollEnd', () => {
        if (this.scrollToSection) {
          // console.log('scrollEnd');
          this.scrollTimeOut = setTimeout(() => {
            if (this.scrollToSection) {
              let p =
                st.start +
                gsap.utils.snap(1 / (this.blocks.length - 1), st.progress) *
                  (st.end - st.start);
                if (this.lastP === p) {
                p = this.coordinateRepeaterCheck(p, st.direction);
              }
                this.lastP = p;
                $(window).scrollTo(p);
              // console.log(p);
            }
          }, 750);
        }
      });
        this.blocksDesktopTlList = [];
        this.blocks.each((i, e) => {
        if (i == 0) return;
        let block = $(e);
          gsap.set(block, {
          xPercent: -100 * i,
        });
          const blockTl = gsap.timeline({
          paused: true,
          onStart: () => {
            this.buttons.removeClass('active');
            this.section
              .find(`[data-step="${block.data('step-block')}"]`)
              .addClass('active');
          },
          onReverseComplete: () => {
            this.buttons.removeClass('active');
            this.section
              .find(`[data-step="${parseInt(block.data('step-block')) - 1}"]`)
              .addClass('active');
          },
        });
          blockTl.fromTo(
          this.blocks[i - 1],
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
          0,
        );
          blockTl.to(
          block.find('.char'),
          {
            y: 0,
            stagger: 0.02,
            opacity: 1,
            duration: 0.4,
          },
          0.3,
        );
          blockTl.to(
          block.find('.anim-translate-y'),
          {
            yPercent: 0,
            stagger: 0.1,
            opacity: 1,
          },
          0.6,
        );
          blockTl.fromTo(
          block.find('.single-block-txt-content, .quote-by-txt'),
          {
            x: -10,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
          },
          0.9,
        );
          this.blocksDesktopTlList.push(blockTl);
          switch (i) {
          case 1:
            ScrollTrigger.create({
              trigger: this.section.find('.max-w-container'),
              start: `100%+=${innerHeight} 100%`,
              end: '+=1%',
              endTrigger: this.section,
              id: `blockTlTrigger-${i}`,
              onEnter: () => blockTl.timeScale(1).play(),
              onLeaveBack: () => blockTl.timeScale(2).reverse(),
            });
            break;
          case 2:
            ScrollTrigger.create({
              trigger: this.section.find('.max-w-container'),
              start: `100%+=${innerHeight * 2} 100%`,
              end: '+=1%',
              endTrigger: this.section,
              id: `blockTlTrigger-${i}`,
              onEnter: () => blockTl.timeScale(1).play(),
              onLeaveBack: () => blockTl.timeScale(2).reverse(),
            });
            break;
          case 3:
            ScrollTrigger.create({
              trigger: this.section.find('.max-w-container'),
              start: `100%+=${innerHeight * 3} 100%`,
              end: '+=1%',
              endTrigger: this.section,
              id: `blockTlTrigger-${i}`,
              onEnter: () => blockTl.timeScale(1).play(),
              onLeaveBack: () => blockTl.timeScale(2).reverse(),
            });
            break;
          case 4:
            ScrollTrigger.create({
              trigger: this.section.find('.max-w-container'),
              start: `100%+=${innerHeight * 4} 100%`,
              end: '+=1%',
              endTrigger: this.section,
              id: `blockTlTrigger-${i}`,
              onEnter: () => blockTl.timeScale(1).play(),
              onLeaveBack: () => blockTl.timeScale(2).reverse(),
            });
            break;
        }
      });
    }
    */
  }, {
    key: "iconsTimelineMobile",
    value: function iconsTimelineMobile() {
      var _this2 = this;
      this.myReq;
      this.timeline = {
        currentTime: 0
      };
      this.mobileTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        defaults: {
          ease: 'none'
        },
        paused: true
      });
      this.scrubTimeline = function () {
        _this2.animation.scrub(['animation-timeline'], _this2.timeline.currentTime);
        _this2.myReq = requestAnimationFrame(_this2.scrubTimeline);
      };
      this.myReq = requestAnimationFrame(this.scrubTimeline);
      this.mobileTl.to(this.timeline, {
        currentTime: 3.3
      });
      this.mobileTl.addLabel('afterStepLabel-1', '<');
      this.mobileTl.addLabel('afterStepLabel-2', '>');
      this.mobileTl.to(this.timeline, {
        currentTime: 5.165
      });
      this.mobileTl.addLabel('afterStepLabel-3', '>');
      this.mobileTl.to(this.timeline, {
        currentTime: 7.5
      });
      this.mobileTl.addLabel('afterStepLabel-4', '>');
      this.mobileTl.to(this.timeline, {
        currentTime: 10
      });
      this.mobileTl.addLabel('afterStepLabel-5', '>');
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.timeline, {
        currentTime: 0
      });
    }
  }, {
    key: "iconsTimelineDesktop",
    value: function iconsTimelineDesktop() {
      var _this3 = this;
      this.myReq;
      this.timeline = {
        currentTime: 0
      };
      this.scrubTimeline = function () {
        // console.log(this.timeline.currentTime);
        _this3.animation.scrub(['animation-timeline'], _this3.timeline.currentTime);
        _this3.myReq = requestAnimationFrame(_this3.scrubTimeline);
      };
      this.myReq = requestAnimationFrame(this.scrubTimeline);
      this.iconsTimelineDesktopTlObj = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        defaults: {
          duration: 1,
          ease: 'none'
        }
      });
      this.iconsTimelineDesktopTlObj.fromTo(this.timeline, {
        currentTime: 0
      }, {
        currentTime: 3.3
      });
      this.iconsTimelineDesktopTlObj.addLabel('iconsTimelineDesktopTlLabel-1', '<');
      this.iconsTimelineDesktopTlObj.addLabel('iconsTimelineDesktopTlLabel-2', '>');
      this.iconsTimelineDesktopTlObj.fromTo(this.timeline, {
        currentTime: 3.3
      }, {
        currentTime: 5.165
      });
      this.iconsTimelineDesktopTlObj.addLabel('iconsTimelineDesktopTlLabel-3', '>');
      this.iconsTimelineDesktopTlObj.fromTo(this.timeline, {
        currentTime: 5.165
      }, {
        currentTime: 7.5
      });
      this.iconsTimelineDesktopTlObj.addLabel('iconsTimelineDesktopTlLabel-4', '>');
      this.iconsTimelineDesktopTlObj.fromTo(this.timeline, {
        currentTime: 7.5
      }, {
        currentTime: 10
      });
      this.iconsTimelineDesktopTlObj.addLabel('iconsTimelineDesktopTlLabel-5', '>');

      /*
      ScrollTrigger.create({
        trigger: this.section.find('.max-w-container'),
        endTrigger: this.section,
        start: '100% 100%',
        end: '100% 100%',
        animation: this.iconsTimelineDesktopTlObj,
        scrub: 0.2,
        id: 'iconsTimelineDesktopTriggerID',
        onEnter: () => {
          this.lastP = this.p1;
        },
        onLeave: () => (this.lastP = this.p5),
      });
      */

      this.p1 = this.iconsTimelineDesktopTlObj.scrollTrigger.labelToScroll('iconsTimelineDesktopTlLabel-1');
      this.p2 = this.iconsTimelineDesktopTlObj.scrollTrigger.labelToScroll('iconsTimelineDesktopTlLabel-2');
      this.p3 = this.iconsTimelineDesktopTlObj.scrollTrigger.labelToScroll('iconsTimelineDesktopTlLabel-3');
      this.p4 = this.iconsTimelineDesktopTlObj.scrollTrigger.labelToScroll('iconsTimelineDesktopTlLabel-4');
      this.p5 = this.iconsTimelineDesktopTlObj.scrollTrigger.labelToScroll('iconsTimelineDesktopTlLabel-5');
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.timeline, {
        currentTime: 0
      });
    }
  }, {
    key: "animateInAnimationHandler",
    value: function animateInAnimationHandler() {
      var _this4 = this;
      $(window).on('iconsAnimsAnimateIn', function (e, val) {
        if (val.state === 'start') {
          _this4.animation.play(['animation-in']);
        } else {
          _this4.animation.scrub(['animation-in'], 0);
        }
      });
    }
  }, {
    key: "callAnimations",
    value: function callAnimations() {
      this.animation.pause(['animation-in']);
      this.animation.pause(['animation-timeline']);
      this.animation.scrub(['animation-in'], 0);
      this.animation.scrub(['animation-timeline'], 0);
    }
  }, {
    key: "riveInit",
    value: function riveInit() {
      var _this5 = this;
      var animWrap = this.section.find('.icon-wrap');
      this.animation = new _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__.Rive({
        src: animWrap.data('url') + animWrap.data('filename'),
        canvas: animWrap.find('canvas')[0]
      });
      this.animation.on('load', function () {
        _this5.callAnimations();
        _this5.animateInAnimationHandler();
        _this5.iconsTimelineMobile();
        $(window).on('mobileCoreValuesSlideChange', function (e, val) {
          return _this5.mobileIconAnimHandler(val.step);
        });
        $(window).on('changeSectionActiveSlide', function (e) {
          return _this5.mobileTl.progress(0);
        });

        /*
        if (!isMobile()) {
          this.iconsTimelineDesktop();
          this.desktopTimeline();
          this.buttons.on("click", (e) => {
            this.scrollTo(parseInt($(e.currentTarget).data("step")));
          });
          this.desktopScrollBackHandler();
        } else {
          this.iconsTimelineMobile();
          $(window).on("mobileCoreValuesSlideChange", (e, val) =>
            this.mobileIconAnimHandler(val.step),
          );
          $(window).on("changeSectionActiveSlide", (e) =>
            this.mobileTl.progress(0),
          );
        }
        */
      });
    }
  }]);
}();
var aboutPageJoinTeamAnim = function aboutPageJoinTeamAnim() {
  if (!$('.about-page-join-team-section').length) return;
  var section = $('.about-page-join-team-section');
  var canvasWrap = section.find('.background-circles-wrap');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.animationStarting)(section);
    },
    paused: true
  });
  tl.fromTo(section.find('.bg-image'), {
    opacity: 0
  }, {
    opacity: 1
  }, 0);

  /*
  tl.to(
    section.find('.txt-size-80 .char'),
    {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4,
    },
    0,
  );
  */

  tl.fromTo(section.find('.txt-post-rtf'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.3);
  tl.fromTo(section.find('.btn-default'), {
    opacity: 0
  }, {
    opacity: 1,
    onStart: function onStart() {
      $(window).trigger('triggerCirclesAnimateIn', {
        state: 'start'
      });
    },
    onReverseComplete: function onReverseComplete() {
      $(window).trigger('triggerCirclesAnimateIn', {
        state: 'reverse'
      });
    }
  }, 0.6);
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
      tl.timeScale(2).reverse();
    }
  });
  function isElementInViewport(el) {
    // Special bonus for those using jQuery
    if (typeof jQuery === 'function' && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ && rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */;
  }
  function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
      var visible = isElementInViewport(el);
      if (visible != old_visible) {
        old_visible = visible;
        if (typeof callback == 'function') {
          callback();
        }
      }
    };
  }
  var animation = new _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_1__.Rive({
    src: canvasWrap.data('url') + canvasWrap.data('filename'),
    canvas: canvasWrap.find('canvas')[0]
  });
  animation.on('load', function () {
    onVisibilityChange($(section), function () {
      animation.play(['animation-in']);
    });
  });
};
var init = function init() {
  coreValuesSectionInitAnim();
  new CoreValuesScrollAnim();
  aboutPageJoinTeamAnim();
};

/***/ })

}]);
//# sourceMappingURL=about_animations.js.map