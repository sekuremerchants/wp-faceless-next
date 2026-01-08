"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/sliders_init"],{

/***/ "./assets/js/src/theme/utils/sliders.js":
/*!**********************************************!*\
  !*** ./assets/js/src/theme/utils/sliders.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var swiperModules = [swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.EffectFade, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Lazy, swiper__WEBPACK_IMPORTED_MODULE_1__.Grid, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_1__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_1__.Thumbs];
var Sliders = /*#__PURE__*/function () {
  function Sliders() {
    _classCallCheck(this, Sliders);
    this.industrySlider('.inner-pages-slider-section .swiper-container');
    this.teamInfoSectionMembersSlider('.meet-team-info-section .members-hold');
    this.aboutPageCoreValuesSlider('.about-page-core-values-section .content-blocks-wrap');
    this.testimonialsSlider('.careers-testimonials .swiper-container');
    this.infoSliderSectionHome('.info-slider-section-home .swiper-container');
    this.awardsSlider('.awards-slider .swiper-container');
  }
  return _createClass(Sliders, [{
    key: "aboutPageCoreValuesSlider",
    value: function aboutPageCoreValuesSlider(el) {
      if (!$(el).length) return;
      var swiper = $(el);
      var allBtns = $('.about-page-core-values-section .step-button');
      // init swiper
      swiper.addClass('swiper-container');
      swiper.find('.animated-items-wrap').addClass('swiper-wrapper');
      swiper.find('.single-block').addClass('swiper-slide');
      swiper.find('.b-lazy').removeClass('b-lazy').addClass('swiper-lazy');
      var slides = swiper.find('.swiper-slide');
      var slider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](el, {
        init: false,
        modules: swiperModules,
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 800,
        autoplay: false,
        touchStartPreventDefault: false,
        grabCursor: true,
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNext: true,
          loadPrevNextAmount: 3
        },
        on: {
          slideChange: function slideChange(swiper) {
            allBtns.removeClass('active');
            allBtns.filter("[data-step=\"".concat(swiper.activeIndex + 1, "\"]")).addClass('active');
            $(window).trigger('mobileCoreValuesSlideChange', {
              step: swiper.activeIndex + 1
            });
          }
        }
      });
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: el,
        start: '0% 150%',
        invalidateOnRefresh: true,
        once: true,
        onEnter: function onEnter() {
          return slider.init();
        }
      });
      allBtns.on('click', function (e) {
        var clickedBtn = $(e.currentTarget);
        var clickedIndex = parseInt(clickedBtn.data('step'));
        slider.slideTo(clickedIndex - 1, 800);
        allBtns.removeClass('active');
        clickedBtn.addClass('active');
        $(window).trigger('mobileCoreValuesSlideChange', {
          step: clickedIndex
        });
      });
      $(window).on('changeSectionActiveSlide', function (e, val) {
        slider.slideTo(val.slideTo, 0);
      });
    }
  }, {
    key: "disableSwiping",
    value: function disableSwiping(swiper) {
      $('.info-slider-section-home .swiper-nav-btn').addClass('swiper-button-disabled');
      swiper.allowSlideNext = false;
      swiper.allowSlidePrev = false;
      swiper.allowTouchMove = false;
    }
  }, {
    key: "enableSwiping",
    value: function enableSwiping(swiper) {
      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      swiper.allowTouchMove = true;
      $('.info-slider-section-home .swiper-nav-btn').removeClass('swiper-button-disabled');
      this.swiperButtonDisabledHandler(swiper);
    }
  }, {
    key: "swiperButtonDisabledHandler",
    value: function swiperButtonDisabledHandler(swiper) {
      switch (swiper.activeIndex) {
        case swiper.slides.length - 1:
          $('.info-slider-section-home .swiper-next').addClass('swiper-button-disabled');
          break;
        case 0:
          $('.info-slider-section-home .swiper-prev').addClass('swiper-button-disabled');
          break;
      }
    }
  }, {
    key: "infoSliderSectionHomeSliderOut",
    value: function infoSliderSectionHomeSliderOut(slide, slides) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(slides.find('.quotes-img-wrap, .anim-translate-y, .txt-size-18'), {
        opacity: 0,
        duration: 0.3
      });
    }
  }, {
    key: "infoSliderSectionHomeSliderIn",
    value: function infoSliderSectionHomeSliderIn(slide, swiperObj) {
      var _this = this;
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(slide.find('.quotes-img-wrap'), {
        y: 15,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(slide.find('.anim-translate-y'), {
        yPercent: 100,
        opacity: 0
      }, {
        yPercent: 0,
        stagger: 0.1,
        opacity: 1,
        delay: 0.2,
        onComplete: function onComplete() {
          return _this.enableSwiping(swiperObj);
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(slide.find('.txt-size-18'), {
        x: -10,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        delay: 0.4
      });
    }
  }, {
    key: "infoSliderSectionHome",
    value: function infoSliderSectionHome(el) {
      var _this2 = this;
      if (!$(el).length) return;
      var swiper = $(el);
      // init swiper
      var section = $('.info-slider-section-home');
      swiper.find('.b-lazy').removeClass('b-lazy').addClass('swiper-lazy');
      var slides = swiper.find('.swiper-slide');
      var slider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](el, {
        init: false,
        modules: swiperModules,
        slidesPerView: 1,
        speed: 450,
        autoplay: false,
        effect: 'fade',
        simulateTouch: false,
        touchStartPreventDefault: false,
        fadeEffect: {
          crossFade: true
        },
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNext: true,
          loadPrevNextAmount: 10
        },
        on: {
          init: function init() {
            return section.find('.swiper-prev').addClass('swiper-button-disabled');
          },
          beforeTransitionStart: function beforeTransitionStart(swiperObj) {
            // console.log(swiperObj, 'beforeTransitionStart');
            _this2.disableSwiping(swiperObj);
            _this2.infoSliderSectionHomeSliderOut(swiper.find('.swiper-slide-active'), slides);
          },
          transitionEnd: function transitionEnd(swiperObj) {
            // console.log(swiperObj, 'transitionEnd');
            if (_this2.animSetTimeout) clearTimeout(_this2.animSetTimeout);
            _this2.animSetTimeout = setTimeout(function () {
              _this2.infoSliderSectionHomeSliderIn(swiper.find('.swiper-slide-active'), swiperObj);
            }, 550);
          }
        }
      });
      if (slides.length > 1) {
        var observer = new IntersectionObserver(function (entry) {
          if (entry[0].intersectionRatio > 0) {
            if (!section.hasClass('swiper-active')) {
              slider.init();
              gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(slides.not('.swiper-slide-active').find('.quotes-img-wrap, .anim-translate-y, .txt-size-18'), {
                opacity: 0
              });
              section.find('.swiper-next').on('click', function () {
                if (slider.activeIndex !== slides.length - 1) {
                  slider.slideNext(slider.passedParams.speed, true);
                }
              });
              section.find('.swiper-prev').on('click', function () {
                if (slider.activeIndex !== 0) {
                  slider.slidePrev(slider.passedParams.speed, true);
                }
              });
              section.addClass('swiper-active');
            }
          }
        }, {
          root: null,
          rootMargin: '0px',
          threshold: 0
        });
        observer.observe(section[0]);
      } else {
        section.find('.swiper-nav-btn-wrap').hide();
      }
    }
  }, {
    key: "teamInfoSectionMembersSlider",
    value: function teamInfoSectionMembersSlider(el) {
      if (!$(el).length) return;
      var swiper = $(el);
      // init swiper
      swiper.addClass('swiper-container');
      swiper.find('.member-block').addClass('swiper-slide').wrapAll('<div class="swiper-wrapper"></div>');
      swiper.find('.b-lazy').removeClass('b-lazy').addClass('swiper-lazy');
      var slides = swiper.find('.swiper-slide');
      var slider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](el, {
        init: false,
        modules: swiperModules,
        slidesPerView: 'auto',
        speed: 400,
        autoplay: false,
        touchStartPreventDefault: false,
        freeMode: {
          enabled: true,
          sticky: true,
          momentum: false
        },
        grabCursor: true,
        touchRatio: 1.75,
        navigation: {
          nextEl: el + ' .swiper-next',
          prevEl: el + ' .swiper-prev'
        },
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNext: true,
          loadPrevNextAmount: 3
        }
      });

      // if (slides.length > 1) {
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: el,
        start: '0% 150%',
        invalidateOnRefresh: true,
        once: true,
        onEnter: function onEnter() {
          return slider.init();
        }
      });
      // }
      // else {
      //     $(el).find(".swiper-nav-wrap").hide();
      // }
    }
  }, {
    key: "industrySlider",
    value: function industrySlider(el) {
      if (!$(el).length) return;
      var swiper = $(el);
      // init swiper
      // swiper.addClass('swiper-container');
      // swiper.children().addClass('swiper-slide').wrapAll('<div class="swiper-wrapper"></div>')
      swiper.find('.b-lazy').removeClass('b-lazy').addClass('swiper-lazy');
      var slides = swiper.find('.swiper-slide');
      var slider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](el, {
        init: false,
        modules: swiperModules,
        slidesPerView: 'auto',
        speed: 800,
        autoplay: false,
        touchStartPreventDefault: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return '<a href="#" class="' + className + '">' + (index + 1) + '</a>';
          }
        },
        freeMode: {
          enabled: true,
          sticky: true,
          momentum: false
        },
        grabCursor: true,
        touchRatio: 1.25,
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNext: true,
          loadPrevNextAmount: 10
        }
      });
      var section = swiper.parents('section');
      if (slides.length > 1) {
        var observer = new IntersectionObserver(function (entry) {
          if (entry[0].intersectionRatio > 0) {
            if (!section.hasClass('swiper-active')) {
              slider.init();
              section.addClass('swiper-active');
            }
          }
        }, {
          root: null,
          rootMargin: '0px',
          threshold: 0
        });
        observer.observe(section[0]);
      }
    }
  }, {
    key: "awardsSlider",
    value: function awardsSlider(el) {
      if (!$(el).length) return;
      var swiper = $(el);
      // init swiper
      // swiper.find('.b-lazy').removeClass('b-lazy').addClass('swiper-lazy');

      var slides = swiper.find('.swiper-slide');
      var slider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](el, {
        init: false,
        touchStartPreventDefault: false,
        modules: swiperModules,
        slidesPerView: 'auto',
        speed: 800,
        autoplay: false,
        freeMode: {
          enabled: true,
          sticky: true,
          momentum: false
        },
        /*
        scrollbar: {
          el: swiper.parents("section").find(".swiper-scrollbar")[0],
          draggable: true,
        },
        */
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return '<a href="#" class="' + className + '">' + (index + 1) + '</a>';
          }
        },
        // pagination: {
        //     el: ".swiper-pagination",
        //     type: "progressbar",
        // },
        grabCursor: true,
        touchRatio: 1.25,
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNext: true,
          loadPrevNextAmount: 10
        }
      });
      var section = swiper.parents('section');
      if (slides.length > 1) {
        var observer = new IntersectionObserver(function (entry) {
          if (entry[0].intersectionRatio > 0) {
            if (!section.hasClass('swiper-active')) {
              slider.init();
              section.addClass('swiper-active');
            }
          }
        }, {
          root: null,
          rootMargin: '0px',
          threshold: 0
        });
        observer.observe(section[0]);
      }
    }
  }, {
    key: "testimonialsSlider",
    value: function testimonialsSlider(el) {
      if (!$(el).length) return;
      var swiper = $(el);
      // init swiper
      // swiper.find('.b-lazy').removeClass('b-lazy').addClass('swiper-lazy');

      var slides = swiper.find('.swiper-slide');
      var slider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](el, {
        init: false,
        modules: swiperModules,
        touchStartPreventDefault: false,
        slidesPerView: 'auto',
        speed: 800,
        autoplay: false,
        freeMode: {
          enabled: true,
          sticky: true,
          momentum: false
        },
        grabCursor: true,
        touchRatio: 1.25,
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNext: true,
          loadPrevNextAmount: 10
        },
        navigation: {
          nextEl: '.swiper-nav-next'
        }
      });
      if (slides.length > 1) {
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
          trigger: el,
          start: '0% 150%',
          invalidateOnRefresh: true,
          once: true,
          onEnter: function onEnter() {
            return slider.init();
          }
        });
      } else {
        // $(el).find(".swiper-nav-wrap").hide();
      }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (Sliders);

/***/ })

}]);
//# sourceMappingURL=sliders_init.js.map