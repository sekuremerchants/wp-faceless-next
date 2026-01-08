"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/homepage_animations"],{

/***/ "./assets/js/src/theme/animations/home.js":
/*!************************************************!*\
  !*** ./assets/js/src/theme/animations/home.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/DrawSVGPlugin */ "./node_modules/gsap/DrawSVGPlugin.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
/* harmony import */ var _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rive-app/canvas-single */ "./node_modules/@rive-app/canvas-single/rive.js");
/* harmony import */ var _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _arguments = typeof arguments === "undefined" ? void 0 : arguments;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_2__.RuntimeLoader.setWasmUrl(_rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_2__.riveWASMResource);
gsap__WEBPACK_IMPORTED_MODULE_3__["default"].registerPlugin(gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_4__.DrawSVGPlugin, gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_5__.MotionPathPlugin);
var drawImageProp = function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
  if (_arguments.length === 2) {
    x = y = 0;
    w = ctx.canvas.width;
    h = ctx.canvas.height;
  }

  // default offset is center
  offsetX = typeof offsetX === 'number' ? offsetX : 0.5;
  offsetY = typeof offsetY === 'number' ? offsetY : 0.5;

  // keep bounds [0.0, 1.0]
  if (offsetX < 0) offsetX = 0;
  if (offsetY < 0) offsetY = 0;
  if (offsetX > 1) offsetX = 1;
  if (offsetY > 1) offsetY = 1;
  var iw = jquery__WEBPACK_IMPORTED_MODULE_0___default()(img).is('img') ? img.width : img.videoWidth,
    ih = jquery__WEBPACK_IMPORTED_MODULE_0___default()(img).is('img') ? img.height : img.videoHeight,
    r = Math.min(w / iw, h / ih),
    nw = iw * r,
    // new prop. width
    nh = ih * r,
    // new prop. height
    cx,
    cy,
    cw,
    ch,
    ar = 1;

  // decide which gap to fill
  if (nw < w) ar = w / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh; // updated
  nw *= ar;
  nh *= ar;

  // calc source rectangle
  cw = iw / (nw / w);
  ch = ih / (nh / h);
  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;

  // make sure source rectangle is valid
  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;

  // fill image in dest. rectangle
  // console.log(img, 'img');
  // console.log(iw, 'iw');
  // console.log(cw, 'cw');
  // console.log(cx, 'cx');
  // console.log(cy, 'cy');
  // console.log(cw, 'cw');
  // console.log(ch, 'ch');
  // console.log(x, 'x');
  // console.log(y, 'y');
  // console.log(offsetX, 'offsetX');
  // console.log(w, 'w');
  // console.log(h, 'h');
  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
};
var HeroSectionIconAnimations = /*#__PURE__*/function () {
  function HeroSectionIconAnimations() {
    _classCallCheck(this, HeroSectionIconAnimations);
    this.section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section');
    this.iconsWrap = this.section.find('.hero-icons-wrap');
    this.iconsIntroTl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      paused: true
    });
    this.animationsArray = [];
    this.timers = [];
    this.createAnims();
  }
  return _createClass(HeroSectionIconAnimations, [{
    key: "playAnim",
    value: function playAnim() {
      this.iconsIntroTl.progress(0).play(0);
    }
  }, {
    key: "createAnims",
    value: function createAnims() {
      var _this = this;
      this.iconsWrap.each(function (i, e) {
        var animWrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
        var startAt = animWrap.attr('data-startAt') * 1;
        var thisRive = new _rive_app_canvas_single__WEBPACK_IMPORTED_MODULE_2__.Rive({
          src: animWrap.data('url') + animWrap.data('filename'),
          canvas: jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).find('canvas')[0]
        });
        _this.animationsArray.push(thisRive);
        thisRive.on('stop', function (event) {
          if (animWrap.hasClass('hero-icons-1')) {
            if (event.data[0] === 'animation-in') {
              setTimeout(function () {
                thisRive.play(['animation-out']);
              }, 8000);
            }
            if (event.data[0] === 'animation-out') {
              setTimeout(function () {
                thisRive.play(['animation-in']);
              }, 1000);
            }
          }
          if (animWrap.hasClass('hero-icons-2')) {
            if (event.data[0] === 'animation-in') {
              setTimeout(function () {
                thisRive.play(['animation-out']);
              }, 7000);
            }
            if (event.data[0] === 'animation-out') {
              setTimeout(function () {
                thisRive.play(['animation-in']);
              }, 1000);
            }
          }
          if (animWrap.hasClass('hero-icons-3')) {
            if (event.data[0] === 'animation-in') {
              setTimeout(function () {
                thisRive.play(['animation-out']);
              }, 7500);
            }
            if (event.data[0] === 'animation-out') {
              setTimeout(function () {
                thisRive.play(['animation-in']);
              }, 1000);
            }
          }
          if (animWrap.hasClass('hero-icons-4')) {
            if (event.data[0] === 'animation-in') {
              setTimeout(function () {
                thisRive.play(['animation-out']);
              }, 12500);
            }
            if (event.data[0] === 'animation-out') {
              setTimeout(function () {
                thisRive.play(['animation-in']);
              }, 1000);
            }
          }
          if (animWrap.hasClass('hero-icons-5')) {
            if (event.data[0] === 'animation-in') {
              setTimeout(function () {
                thisRive.play(['animation-out']);
              }, 14000);
            }
            if (event.data[0] === 'animation-out') {
              setTimeout(function () {
                thisRive.play(['animation-in']);
              }, 1000);
            }
          }
          if (animWrap.hasClass('hero-icons-6')) {
            if (event.data[0] === 'animation-in') {
              setTimeout(function () {
                thisRive.play(['animation-out']);
              }, 11500);
            }
            if (event.data[0] === 'animation-out') {
              setTimeout(function () {
                thisRive.play(['animation-in']);
              }, 1000);
            }
          }
          if (animWrap.hasClass('hero-icons-7')) {
            if (event.data[0] === 'animation-in') {
              setTimeout(function () {
                thisRive.play(['animation-in']);
              }, 15000);
            }
          }
          if (animWrap.hasClass('hero-icons-8')) {
            if (event.data[0] === 'animation-in') {
              setTimeout(function () {
                thisRive.play(['animation-in']);
              }, 7500);
            }
          }
          if (animWrap.hasClass('hero-icons-9')) {
            setTimeout(function () {
              thisRive.play(['animation-periodic']);
            }, 5000);
          }
          if (animWrap.hasClass('hero-icons-10')) {
            setTimeout(function () {
              thisRive.play(['animation-periodic']);
            }, 10000);
          }
        });
        thisRive.on('load', function () {
          _this.iconsIntroTl.call(function () {
            thisRive.play(['animation-in']);
          }, null, startAt);
          if (i == _this.iconsWrap.length - 1) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('startIconAnimations', function () {
              _this.playAnim();
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('landingSectionSourceLoaded', {
              state: 'hero-icons'
            });
          }
        });
      });
    }
  }]);
}();
var heroSectionAnimMobile = function heroSectionAnimMobile() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section').length) return;
  var heroSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section');
  var heroSectionMainImg = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section .main-img-wrap');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(heroSection);
    },
    defaults: {
      duration: 1
    }
  });
  tl.call(function () {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('headerAnimPlay');
  }, null, 0);
  tl.set(heroSection.find('.scroll-btn-border-circle'), {
    rotation: -90,
    transformOrigin: '50% 50%'
  }, 0);
  if (heroSection.find('.char').length > 0) {
    tl.to(heroSection.find('.char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0);
  }
  tl.fromTo(heroSection.find('.txt-post-rtf'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.3);
  tl.fromTo(heroSectionMainImg, {
    scale: 0.5,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1
  }, 0.3);
  tl.fromTo(heroSection.find('.btn-wrap'), {
    opacity: 0
  }, {
    opacity: 1
  }, 0.6);
  tl.fromTo(heroSection.find('.scroll-btn-border-circle'), {
    drawSVG: '0%'
  }, {
    drawSVG: "100%"
  }, 0.9);
  tl.fromTo(heroSection.find('.scroll-btn-img'), {
    opacity: 0
  }, {
    opacity: 1
  }, 1.2);
};
var heroSectionMaskAnim = function heroSectionMaskAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section');
  var positionEl = section.find('.main-img-wrap');
  var canvas = document.querySelector('.hero-section-canvas');
  var ctx = canvas.getContext('2d');
  var bgElWrap = section.find('.bg-el-wrap');
  if (!positionEl.length) return;
  var canvasWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(canvas).parent().outerWidth() * devicePixelRatio;
  var canvasHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(canvas).parent().outerHeight(true) * devicePixelRatio;
  canvas.width = Math.floor(canvasWidth);
  canvas.height = Math.floor(canvasHeight);
  canvas.style.width = "".concat(Math.floor(canvasWidth), "px");
  canvas.style.height = "".concat(Math.floor(canvasHeight), "px");
  var loadedImages = 0;
  var totalImages = 1;
  var img = new Image();

  /*
  let arcValues = {
    radiusValue: positionEl.outerHeight(true) / 2,
    xValue: positionEl.offset().left + positionEl.outerHeight(true) / 2,
    yValue:
      Math.abs(section.offset().top - positionEl.offset().top) +
      positionEl.outerHeight(true) / 2,
  };
  */

  console.log(positionEl.offset());
  var arcValues = {
    radiusValue: positionEl.outerHeight(true) / 2,
    xValue: positionEl.offset().left + positionEl.outerWidth(true) / 2,
    yValue: Math.abs(section.offset().top - positionEl.offset().top) + positionEl.outerHeight(true) / 2
  };
  img.onload = function () {
    loadedImages += 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('canvasImgLoaded');
  };
  img.src = _root + 'media/images/home/main-img-desktop_new.webp';
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('canvasImgLoaded', function () {
    if (loadedImages == totalImages) {
      requestAnimationFrame(animate);
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(bgElWrap, {
        opacity: 0
      }, {
        opacity: 1
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(arcValues, {
        radiusValue: section.outerWidth()
      }, {
        radiusValue: positionEl.outerHeight(true) / 2,
        duration: 1,
        delay: 0.5,
        onUpdate: function onUpdate() {
          return requestAnimationFrame(animate);
        }
      });
    }
  });
  function animate() {
    //console.log('in animate')
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'source-over';
    ctx.beginPath();
    ctx.arc(arcValues.xValue, arcValues.yValue, arcValues.radiusValue, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#002ea6';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-atop';
    var x = 0,
      y = 0,
      offsetX = 0.5,
      offsetY = 0;
    switch (true) {
      case window.innerWidth > 1900:
        console.info('Size is over 1900');
        x = 0;
        y = 225;
        offsetX = 0.4;
        offsetY = 0.4;
        break;
      case window.innerWidth > 1700 && window.innerWidth <= 1900:
        console.info('Size is between 1700 and 1900');
        x = 0;
        y = 60;
        offsetX = 0;
        offsetY = 0;
        break;
      case window.innerWidth > 1250 && window.innerWidth <= 1700:
        console.info('Size is between 1250 and 1700');
        x = 0;
        y = 150;
        offsetX = 0.5;
        offsetY = 0;
        break;
      case window.innerWidth > 1024 && window.innerWidth <= 1250:
        console.info('Size is between 1025 and 1250');
        x = 0;
        y = 100;
        offsetX = 0.5;
        offsetY = 1;
        break;
      default:
      //console.info('Size is under 1025');
    }

    //console.log(x, y, offsetX, offsetY);
    drawImageProp(ctx, img, x, y, innerWidth, innerHeight, offsetX, offsetY);
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resizeObserverTrigger', function () {
    canvasWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(canvas).parent().outerWidth() * devicePixelRatio;
    canvasHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(canvas).parent().outerHeight(true) * devicePixelRatio;
    canvas.width = Math.floor(canvasWidth);
    canvas.height = Math.floor(canvasHeight);
    canvas.style.width = "".concat(Math.floor(canvasWidth), "px");
    canvas.style.height = "".concat(Math.floor(canvasHeight), "px");
    arcValues = {
      radiusValue: positionEl.outerHeight(true) / 2,
      xValue: positionEl.position().left + positionEl.outerHeight(true) / 2,
      yValue: Math.abs(section.offset().top - positionEl.offset().top) + positionEl.outerHeight(true) / 2
    };
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(bgElWrap, {
      opacity: 1
    });
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(arcValues, {
      radiusValue: positionEl.outerHeight(true) / 2
    });
    requestAnimationFrame(animate);
  });

  // $(window).on('resize',
  //     debounce(() => {
  //     }, 10)
  // )
};
var heroSectionAnimDesktop = function heroSectionAnimDesktop() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section').length) return;
  var iconAnimationsLoaded = false;
  var heroSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    paused: true,
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(heroSection);
    },
    defaults: {
      duration: 1
    }
  });
  tl.set(heroSection.find('.scroll-btn-border-circle'), {
    rotation: -90,
    transformOrigin: '50% 50%'
  }, 0);
  tl.call(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('headerAnimPlay');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('startIconAnimations');
  }, null, 0.75);
  if (heroSection.find('.txt-post-rtf').length > 0) {
    tl.fromTo(heroSection.find('.txt-post-rtf'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, 0.8);
  }
  if (heroSection.find('.scroll-btn-border-circle').length > 0) {
    tl.fromTo(heroSection.find('.scroll-btn-border-circle'), {
      drawSVG: '0%'
    }, {
      drawSVG: "100%"
    }, 0.8);
  }
  if (heroSection.find('.payments-section-img').length > 0) {
    tl.fromTo(heroSection.find('.payments-section-img'), {
      yPercent: 50,
      scale: 0.75,
      opacity: 0
    }, {
      yPercent: 0,
      scale: 1,
      opacity: 1
    }, 0.5);
  }
  if (heroSection.find('.btn-wrap').length > 0) {
    tl.fromTo(heroSection.find('.btn-wrap'), {
      opacity: 0
    }, {
      opacity: 1
    }, 1.1);
  }
  tl.fromTo(heroSection.find('.scroll-btn-img'), {
    opacity: 0
  }, {
    opacity: 1
  }, 1.4);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('landingSectionSourceLoaded', function (e, val) {
    switch (val.state) {
      case 'hero-icons':
        iconAnimationsLoaded = true;
        break;
      case 'hero-image':
        heroImageLoaded = true;
        break;
    }
    if (iconAnimationsLoaded) {
      tl.play();
    }
  });
};
var paymentsSectionMaskAnim = function paymentsSectionMaskAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.payments-section-home').length) return;
  var heroSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section');
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.payments-section-home');
  var bgElWrap = section.find('.bg-el-wrap');
  var paymentsSectionImg = heroSection.find('.payments-section-position-el');
  var canvas = document.querySelector('.payments-section-canvas');
  var ctx = canvas.getContext('2d');
  var canvasWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(canvas).parent().outerWidth() * devicePixelRatio;
  var canvasHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(canvas).parent().outerHeight(true) * devicePixelRatio;
  canvas.width = Math.floor(canvasWidth);
  canvas.height = Math.floor(canvasHeight);
  canvas.style.width = "".concat(Math.floor(canvasWidth), "px");
  canvas.style.height = "".concat(Math.floor(canvasHeight), "px");
  var startingImageSize = paymentsSectionImg.outerWidth();
  var startingImageOffsetTop = Math.abs(heroSection.offset().top - paymentsSectionImg.offset().top);
  var startingImageOffsetLeft = paymentsSectionImg.offset().left;
  var animatedImageSize = {
    widthValue: paymentsSectionImg.outerWidth(),
    heightValue: paymentsSectionImg.outerHeight(true)
  };
  var animatedCircleSize = {
    radius: paymentsSectionImg.outerHeight(true)
  };
  var animatedCirclePosition = {
    xValue: startingImageOffsetLeft + startingImageSize / 2,
    yValue: startingImageOffsetTop + startingImageSize / 2
  };
  var animatedImagePosition = {
    xValue: startingImageOffsetLeft,
    yValue: startingImageOffsetTop
  };
  var loadedImages = 0;
  var totalImages = 1;
  var img = new Image();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('canvasImgLoaded', function () {
    if (loadedImages == totalImages) {
      requestAnimationFrame(animate);
      createTl();
    }
  });
  img.onload = function () {
    loadedImages += 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('canvasImgLoaded');
  };
  img.src = _root + 'media/images/home/accept-payments-section-bgr.webp';
  var tl;
  var parallaxTween;
  var pinTween;

  // anims

  var createTl = function createTl() {
    tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      paused: true,
      defaults: {
        ease: 'none'
      }
    });
    tl.call(function () {
      if (!bgElWrap.hasClass('initial-scroll')) {
        bgElWrap.addClass('initial-scroll');
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(bgElWrap, {
          opacity: 1
        });
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].killTweensOf(heroSection.find('.payments-section-img'));
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(heroSection.find('.payments-section-img'), {
          opacity: 0
        });
      }
    }, 0);
    tl.fromTo(animatedImageSize, {
      widthValue: paymentsSectionImg.outerWidth(),
      heightValue: paymentsSectionImg.outerHeight(true)
    }, {
      widthValue: function widthValue() {
        return Math.ceil(section.outerWidth());
      },
      heightValue: function heightValue() {
        return Math.ceil(section.outerHeight(true));
      }
    }, 0);
    tl.fromTo(animatedImagePosition, {
      xValue: startingImageOffsetLeft,
      yValue: startingImageOffsetTop
    }, {
      xValue: 0,
      yValue: 0
    }, 0);
    tl.fromTo(animatedCirclePosition, {
      xValue: startingImageOffsetLeft + startingImageSize / 2,
      yValue: startingImageOffsetTop + startingImageSize / 2
    }, {
      xValue: function xValue() {
        return innerWidth / 2;
      },
      yValue: function yValue() {
        return innerHeight / 2;
      }
    }, 0);
    tl.fromTo(animatedCircleSize, {
      radius: paymentsSectionImg.outerHeight(true)
    }, {
      radius: function radius() {
        return Math.ceil(section.outerHeight(true)) * 0.9;
      }
    }, 0);
    tl.fromTo(animatedCircleSize, {
      radius: function radius() {
        return Math.ceil(section.outerHeight(true)) * 0.9;
      }
    }, {
      radius: function radius() {
        return Math.ceil(section.outerWidth()) * (window.innerWidth <= 1250 ? 2.5 : 1.7);
      }
    }, 0.5);

    // ScrollTrigger.create({
    //     trigger: heroSection,
    //     start: '0% 0%',
    //     end: '0% 25%',
    //     endTrigger: section,
    //     scrub: true,
    //     animation: tl,
    // })

    pinTween = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(section.find('.section-transform-container'), {
      y: function y() {
        return -heroSection.outerHeight(true);
      }
    }, {
      y: 0,
      ease: 'none',
      paused: true
    });
    parallaxTween = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(animatedImagePosition, {
      yValue: 0
    }, {
      yValue: 200,
      ease: 'none',
      paused: true
    });
  };

  // anim controls
  var heroSectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(heroSection.prevAll('section'));
  var sectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(section.prevAll('section'));
  var heroSectionHeight = heroSection.outerHeight(true);
  var sectionHeight = section.outerHeight(true);
  var pinTweenDistance = sectionOffsetTop;
  var animationIsPlaying = true;
  var contentOffset = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').outerHeight(true) - jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').height();
  var progressTween = function progressTween() {
    if (typeof tl == 'undefined') return;
    var elPosition = window.scrollY - heroSectionOffsetTop - contentOffset;
    var durationDistance = heroSectionHeight;
    var currentProgress = elPosition / durationDistance;
    tl.progress(currentProgress);
  };
  var progressTween2 = function progressTween2() {
    if (typeof parallaxTween == 'undefined') return;
    var elPosition = window.scrollY - sectionOffsetTop - contentOffset;
    var currentProgress = elPosition / sectionHeight;
    parallaxTween.progress(currentProgress);
  };
  var progressTween3 = function progressTween3() {
    if (typeof pinTween == 'undefined') return;
    var elPosition = window.scrollY - heroSectionOffsetTop - contentOffset;
    var currentProgress = elPosition / pinTweenDistance;
    pinTween.progress(currentProgress);
  };
  var observerOptions = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
  };
  var observer = new IntersectionObserver(function (entry) {
    // console.log(window.scrollY < getTotalHeight(section.prevAll('section')), "window.scrollY < getTotalHeight(section.prevAll('section'))");
    // console.log(getTotalHeight(section.prevAll('section')), "getTotalHeight(section.prevAll('section'))");
    // console.log(window.scrollY, "window.scrollY");
    if (entry[0].intersectionRatio > 0 && window.scrollY < (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(section.prevAll('section'))) {
      if (!section.hasClass('aimating-mask-anim')) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].ticker.add(progressTween);
        section.addClass('aimating-mask-anim');
        // console.log(entry[0], 'maskanim in')
      }
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].ticker.remove(progressTween);
      section.removeClass('aimating-mask-anim');
      // console.log(entry[0], 'maskanim else')
    }
  }, observerOptions);
  observer.observe(heroSection[0]);

  //
  var observerOptions2 = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.01
  };
  var observer2 = new IntersectionObserver(function (entry) {
    if (entry[0].intersectionRatio > 0.01) {
      if (!section.hasClass('animating-parallax-img')) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].ticker.add(progressTween2);
        section.addClass('animating-parallax-img');
        animationIsPlaying = true;
        // console.log(entry[0], 'parallaxTween in')
      }
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].ticker.remove(progressTween2);
      section.removeClass('animating-parallax-img');
      if (entry[0].boundingClientRect.y < 0) animationIsPlaying = false;
      // console.log(entry[0], 'parallaxTween else')
    }
  }, observerOptions2);
  observer2.observe(section[0]);

  // animate

  function animate() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(animatedCirclePosition.xValue, animatedCirclePosition.yValue, animatedCircleSize.radius / 2, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#002ea6';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-atop';
    drawImageProp(ctx, img, animatedImagePosition.xValue, animatedImagePosition.yValue, animatedImageSize.widthValue, animatedImageSize.heightValue, 0.5, 0.5);
  }
  // $(window).on('scroll', () => {
  //$('body').on('smoothScroll', () => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
    if (!animationIsPlaying) return;
    requestAnimationFrame(animate);
    progressTween3();
  });
  // events
  // $(window).on('scroll', () => {
  //   // console.log(animationIsPlaying)
  //   if (!animationIsPlaying) return;
  //   requestAnimationFrame(animate);
  //   progressTween3();
  // });

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resizeObserverTrigger', function () {
    tl.kill();
    parallaxTween.kill();
    tl = null;
    parallaxTween = null;
    canvasWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(canvas).parent().outerWidth() * devicePixelRatio;
    canvasHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(canvas).parent().outerHeight(true) * devicePixelRatio;
    canvas.width = Math.floor(canvasWidth);
    canvas.height = Math.floor(canvasHeight);
    canvas.style.width = "".concat(Math.floor(canvasWidth), "px");
    canvas.style.height = "".concat(Math.floor(canvasHeight), "px");
    startingImageSize = paymentsSectionImg.outerWidth();
    startingImageOffsetTop = Math.abs(heroSection.offset().top - paymentsSectionImg.offset().top);
    startingImageOffsetLeft = paymentsSectionImg.offset().left;
    animatedImageSize = {
      widthValue: paymentsSectionImg.outerWidth(),
      heightValue: paymentsSectionImg.outerHeight(true)
    };
    animatedCircleSize = {
      radius: paymentsSectionImg.outerHeight(true)
    };
    animatedCirclePosition = {
      xValue: startingImageOffsetLeft + startingImageSize / 2,
      yValue: startingImageOffsetTop + startingImageSize / 2
    };
    animatedImagePosition = {
      xValue: startingImageOffsetLeft,
      yValue: startingImageOffsetTop
    };

    // const eleRect = $('[data-scroll-container]')[0].getBoundingClientRect();
    // const targetRect = heroSection[0].getBoundingClientRect();

    // // Calculate the top and left positions
    // const top = eleRect.top - targetRect.top;
    // console.log(top);

    heroSectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(heroSection.prevAll('section'));
    heroSectionHeight = heroSection.outerHeight(true);
    sectionHeight = section.outerHeight(true);
    sectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(section.prevAll('section'));
    pinTweenDistance = sectionOffsetTop;
    contentOffset = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').outerHeight(true) - jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').height();
    createTl();
    progressTween();
    progressTween2();
    progressTween3();
    requestAnimationFrame(animate);
  });

  // $(window).on('resize',
  //     debounce(() => {

  //     }, 150)
  // )
};
var paymentsSectionHomeDesktop = function paymentsSectionHomeDesktop() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.payments-section-home').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.payments-section-home');
  var heroSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section');
  var heroSectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(heroSection.prevAll('section'));
  var heroSectionHeight = heroSection.outerHeight(true);
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(section.find('.section-transform-container'), {
        pointerEvents: 'all'
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(section.find('.section-content-wrapper'), {
        opacity: 1,
        pointerEvents: 'all'
      });
    },
    onReverseComplete: function onReverseComplete() {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(section.find('.section-transform-container'), {
        pointerEvents: 'none'
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(section.find('.section-content-wrapper'), {
        opacity: 0,
        pointerEvents: 'none'
      });
    },
    paused: true
  });
  if (heroSection.find('.txt-content').length > 0) {
    tl.fromTo(heroSection.find('.txt-content'), {
      opacity: 1
    }, {
      opacity: 0
    }, 0);
  }
  if (heroSection.find('.txt-size-12').length > 0) {
    tl.fromTo(section.find('.txt-size-12'), {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, 0);
  }
  if (section.find('.char').length > 0) {
    tl.to(section.find('.char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0.3);
  }
  if (heroSection.find('.txt-post-rtf').length > 0) {
    tl.fromTo(section.find('.txt-post-rtf'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, 0.6);
  }
  if (heroSection.find('.top-left-petal').length > 0) {
    tl.fromTo(section.find('.top-left-petal'), {
      opacity: 0
    }, {
      opacity: 0.2
    }, 0.9);
  }
  if (heroSection.find('.top-right-petal').length > 0) {
    tl.fromTo(section.find('.top-right-petal'), {
      rotation: -90,
      transformOrigin: '0% 100%',
      opacity: 0
    }, {
      opacity: 1,
      rotation: 0,
      duration: 0.75,
      transformOrigin: '0% 100%'
    }, 1);
  }
  if (heroSection.find('.bottom-right-petal').length > 0) {
    tl.fromTo(section.find('.bottom-right-petal'), {
      rotation: -180,
      transformOrigin: '0% 0%',
      opacity: 0
    }, {
      opacity: 1,
      rotation: 0,
      duration: 0.75,
      transformOrigin: '0% 0%'
    }, 1.1);
  }
  if (heroSection.find('.bottom-left-petal').length > 0) {
    tl.fromTo(section.find('.bottom-left-petal'), {
      rotation: -270,
      transformOrigin: '100% 0%',
      opacity: 0
    }, {
      opacity: 0.2,
      rotation: 0,
      duration: 0.75,
      transformOrigin: '100% 0%'
    }, 1.2);
  }
  if (heroSection.find('.background-petal-svg').length > 0) {
    tl.fromTo(section.find('.background-petal-svg'), {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.2
    }, 0.9);
  }
  if (heroSection.find('.single-block').length > 0) {
    tl.fromTo(section.find('.single-block'), {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.2
    }, 0.9);
  }
  var animationsArray = [];
  section.find('.background-draw-svg').each(function (i, e) {
    var canvas = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
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
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].delayedCall(parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).data('delay')), playAnimFunc, [i]);
          });
          section.addClass('animated-in-icons');
        }
      }
      if (entry.intersectionRatio < 0.1 && entry.isIntersecting && entry.boundingClientRect.y < 0) {
        if (!section.hasClass('animated-in-icons')) {
          gsap__WEBPACK_IMPORTED_MODULE_3__["default"].killTweensOf(playAnimFunc);
          section.find('.background-draw-svg').each(function (i, e) {
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].delayedCall(parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).data('delay')), playAnimFunc, [i]);
          });
          section.addClass('animated-in-icons');
        }
      }
    });
  }, observerOptions3);
  Observer3.observe(section[0]);

  // ScrollTrigger.create({
  //     trigger: section,
  //     start: '0% 40%',
  //     end: '+=1%',
  //     toggleActions: 'none none none none',
  //     animation: tl,
  //     onEnter: () => tl.timeScale(1).play(),
  //     onLeaveBack: () => tl.timeScale(3).reverse(),
  // })

  var observerOptions2 = {
    root: null,
    threshold: 0.6
  };
  var Observer2 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0.6) {
        if (!section.hasClass('animated-in')) {
          tl.timeScale(1).play();
          section.addClass('animated-in');
        }
      } else {
        if (entry.boundingClientRect.y > 0) {
          tl.timeScale(3).reverse();
          section.removeClass('animated-in');
        }
      }
    });
  }, observerOptions2);
  Observer2.observe(section[0]);
  var parallaxTween = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(heroSection.find('.txt-content'), {
    yPercent: 0
  }, {
    yPercent: -50,
    paused: true
  });
  var parallaxTweenDistance = heroSectionHeight * 0.75;
  var contentOffset = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').outerHeight(true) - jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').height();
  var progressTween = function progressTween() {
    if (typeof tl == 'undefined') return;
    var elPosition = window.scrollY - heroSectionOffsetTop - contentOffset;
    var currentProgress = elPosition / parallaxTweenDistance;

    // if (currentProgress > 1 || currentProgress < 0) return;
    if (currentProgress > 1) currentProgress = 1;
    if (currentProgress < 0) currentProgress = 0;
    parallaxTween.progress(currentProgress);
  };
  var observerOptions = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
  };
  var observer = new IntersectionObserver(function (entry) {
    if (entry[0].intersectionRatio > 0 && window.scrollY < (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(section.prevAll('section'))) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].ticker.add(progressTween);
      // console.log(entry[0], 'parallaxTween in')
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].ticker.remove(progressTween);
      // console.log(entry[0], 'parallaxTween else')
    }
  }, observerOptions);
  observer.observe(heroSection[0]);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resizeObserverTrigger', function () {
    heroSectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(heroSection.prevAll('section'));
    heroSectionHeight = heroSection.outerHeight(true);
    parallaxTweenDistance = heroSectionHeight * 0.75;
    contentOffset = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').outerHeight(true) - jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').height();
    progressTween();
  });

  // $(window).on('resize',
  //     debounce(() => {
  //     }, 150)
  // )
};
var paymentsSectionHomeMobile = function paymentsSectionHomeMobile() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.payments-section-home').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.payments-section-home');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    },
    paused: true
  });
  tl.fromTo(section.find('.bg-el-wrap'), {
    opacity: 0
  }, {
    opacity: 1
  }, 0);
  tl.fromTo(section.find('.txt-size-12'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0);
  if (section.find('.char').length > 0) {
    tl.to(section.find('.char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0.3);
  }
  tl.fromTo(section.find('.txt-post-rtf'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.6);
  tl.fromTo(section.find('.single-block'), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: 0.2
  }, 0.9);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger.create({
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

  // const observerOptions = {
  //     root: null,
  // rootMargin: `0px 0px -25% 0px`,
  // threshold: 0,
  // };

  // const Observer = new IntersectionObserver(
  //     entries => {
  //         entries.forEach(entry => {
  //             if (entry.intersectionRatio > 0) {
  //                 if (!section.hasClass('animated-in')) {
  //                     tl.timeScale(1).play()
  //                     section.addClass('animated-in');
  //                 }
  //             } else {
  //                 if (entry.boundingClientRect.y > 0) {
  //                     tl.timeScale(2).reverse()
  //                     section.removeClass('animated-in');
  //                 }
  //             }
  //         });
  //     },
  //     observerOptions
  // );

  // Observer.observe(section[0]);
};
var SolutionsSectionHome = /*#__PURE__*/function () {
  function SolutionsSectionHome() {
    var _this2 = this;
    _classCallCheck(this, SolutionsSectionHome);
    this.section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.solutions-section-home');
    this.blocksList = this.section.find('.single-block');
    this.animationsList = [];
    this.hoverAnimationsList = [];
    this.createHovertl();
    this.createTl();
    this.sectionAnim();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resizeObserverTrigger', function () {
      var progress = 0;
      _this2.animationsList.forEach(function (e) {
        if (e.animation.progress() > 0) {
          progress = 1;
        }
      });
      _this2.killTl();
      _this2.createHovertl();
      _this2.createTl();
      if (progress > 0) {
        _this2.animationsList.forEach(function (e) {
          e.animation.progress(1);
        });
      }
    });

    // $(window).on('resize',
    //     debounce(() => {

    //     }, 10)
    // )

    // if (!isMobile()) {
    this.section.on('mouseenter focusin touchstart', '.single-block', function (e) {
      var item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
      if (!item.hasClass('animated-in')) return;
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(item.find('.txt-size-22'), {
        y: -10
      });
      _this2.section.find('.single-block').each(function (i, e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).is(item)) {
          _this2.mouseEventAnim(i, item, 'mouseenter');
        }
      });
    });
    this.section.on('mouseleave focusout touchend', '.single-block', function (e) {
      var item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(item.find('.txt-size-22'), {
        y: 0
      });
      _this2.section.find('.single-block').each(function (i, e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).is(item)) {
          _this2.mouseEventAnim(i, item, 'mouseleave');
        }
      });
    });
    // } else {

    // }
  }
  return _createClass(SolutionsSectionHome, [{
    key: "mouseEventAnim",
    value: function mouseEventAnim(index, item, eventType) {
      var anim;
      this.hoverAnimationsList.forEach(function (e, i) {
        // console.log(e, i, index)
        if (e.elIndex === index) {
          anim = e.animation;
        }
      });
      if (eventType === 'mouseenter') {
        anim.play();
      } else {
        anim.reverse();
      }
    }
  }, {
    key: "playTl",
    value: function playTl(index) {
      var anim;
      this.animationsList.forEach(function (e, i) {
        // console.log(e, i, index)
        if (e.elIndex === index) {
          anim = e.animation;
        }
      });
      anim.timeScale(1).play(0);
    }
  }, {
    key: "killTl",
    value: function killTl() {
      this.animationsList.forEach(function (e) {
        e.animation.kill();
      });
      this.animationsList = [];
      this.hoverAnimationsList.forEach(function (e) {
        e.animation.kill();
      });
      this.hoverAnimationsList = [];
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set([this.section.find('svg'), this.section.find('svg').children()], {
        clearProps: true
      });
    }
  }, {
    key: "createHovertl",
    value: function createHovertl() {
      var _this3 = this;
      this.blocksList.each(function (i, e) {
        var block = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
        var svg = block.find('svg');
        var tl;
        switch (true) {
          case svg.hasClass('retail-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            tl.fromTo(svg.find('.upper-path'), {
              yPercent: 0,
              opacity: 1
            }, {
              yPercent: 100,
              opacity: 0,
              duration: 0.75,
              ease: 'power2.inOut'
            }, 0);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('professional-services-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            tl.fromTo(svg.find('.svg-circle'), {
              yPercent: 0
            }, {
              yPercent: 100,
              duration: 0.75,
              ease: 'power2.inOut'
            }, 0);
            tl.fromTo(svg.find('.svg-bottom'), {
              yPercent: 0
            }, {
              yPercent: -90,
              duration: 0.75,
              ease: 'power2.inOut'
            }, 0);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('grocery-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            tl.fromTo(svg.find('.svg-top'), {
              yPercent: 0
            }, {
              yPercent: 100,
              duration: 0.75,
              ease: 'power2.inOut'
            }, 0);
            tl.fromTo(svg.find('.svg-bottom'), {
              yPercent: 0
            }, {
              yPercent: -100,
              duration: 0.75,
              ease: 'power2.inOut'
            }, 0);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('health-wellness-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            tl.to(svg, {
              rotation: '+=45',
              duration: 0.75,
              ease: 'power2.inOut'
            }, 0);
            tl.to(svg.find('.st0'), {
              x: -5,
              y: 5,
              ease: 'power2.inOut'
            }, 0.5);
            tl.to(svg.find('.st1'), {
              x: 5,
              y: -5,
              ease: 'power2.inOut'
            }, 0.5);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('ecommerce-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            var positionCircle2 = gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_5__.MotionPathPlugin.getRelativePosition(svg.find('.circle-2')[0], svg.find('.path-outer')[0], [0.5, 0.5], [0.5, 0.5]);
            var positionCircle3 = gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_5__.MotionPathPlugin.getRelativePosition(svg.find('.circle-3')[0], svg.find('.path-outer')[0], [0.5, 0.5], [0.5, 0.5]);
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.find('.circle-1'), {
              transformOrigin: '50% 50%'
            });
            tl.to(svg.find('.circle-3'), {
              x: '+=' + positionCircle3.x,
              y: '+=' + positionCircle3.y
            }, 0);
            tl.to(svg.find('.circle-2'), {
              x: '+=' + positionCircle2.x,
              y: '+=' + positionCircle2.y
            }, 0.1);
            tl.fromTo(svg.find('.circle-1'), {
              scale: 1
            }, {
              scale: 1.75
            }, 0.3);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('restaurant-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.find('.st1'), {
              transformOrigin: '50% 0%'
            });
            tl.fromTo(svg.find('.st1'), {
              rotation: 0
            }, {
              rotation: 180,
              ease: 'power2.inOut'
            }, 0);
            tl.fromTo(svg.find('.circle-el'), {
              scale: 1
            }, {
              scale: 1.75,
              ease: 'power2.inOut'
            }, 0.25);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('hospitality-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            var svgEl6CirclePosition = gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_5__.MotionPathPlugin.getRelativePosition(svg.find('.circle-el')[0], svg.find('.path-outer')[0], [0.5, 0.5], [0.5, 0.6]);
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.find('.circle-el'), {
              transformOrigin: '50% 50%'
            });
            tl.fromTo(svg.find('.circle-el'), {
              scale: 1
            }, {
              scale: 0.75
            }, 0);
            tl.to(svg.find('.circle-el'), {
              x: '+=' + svgEl6CirclePosition.x,
              y: '+=' + svgEl6CirclePosition.y
            }, '-=.25');
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('fashion-boutiques-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            tl.to(svg, {
              rotation: '-=45',
              duration: 0.75,
              ease: 'power2.inOut'
            }, 0);
            tl.to(svg.find('.path-bottom'), {
              x: -5,
              y: -5,
              ease: 'power2.inOut'
            }, 0.5);
            tl.to(svg.find('.path-top'), {
              x: 5,
              y: 5,
              ease: 'power2.inOut'
            }, 0.5);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('homeware-store-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            tl.fromTo(svg.find('.upper-path'), {
              yPercent: 0,
              opacity: 1
            }, {
              yPercent: 100,
              opacity: 0,
              duration: 0.75,
              ease: 'power2.inOut'
            }, 0);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('professional-services-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            tl.fromTo(block.find('.professional-services-svg.svg-bottom'), {
              rotationX: 0
            }, {
              rotationX: 180,
              duration: 0.75
            }, 0);
            tl.to(block.find('.professional-services-svg.svg-circle'), {
              yPercent: 15
            }, 0.3);
            tl.to(block.find('.professional-services-svg.svg-circle'), {
              scale: 1.25,
              ease: 'power2.inOut'
            }, 0.5);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('wholesale-icon-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            tl.to(svg, {
              rotation: '+=180',
              duration: 0.75,
              ease: 'power2.inOut'
            }, 0);
            tl.fromTo(svg.find('.circle-el'), {
              scale: 1
            }, {
              scale: 0.75,
              duration: 0.75,
              ease: 'power2.inOut'
            }, 0.5);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('beauty-salons-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            var positionPath = gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_5__.MotionPathPlugin.getRelativePosition(svg.find('circle')[0], svg.find('path')[0], [0.5, 0], [0.5, 1]);
            tl.fromTo(svg.find('circle'), {
              scale: 1
            }, {
              scale: 0.85
            }, 0);
            tl.fromTo(svg.find('path'), {
              y: 0
            }, {
              y: -positionPath.y
            }, 0.2);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('non-profit-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            var positionWave1 = gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_5__.MotionPathPlugin.getRelativePosition(svg.find('.cls-1')[0], svg[0], [1, 0.5], [1, 0.5]);
            var positionWave2 = gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_5__.MotionPathPlugin.getRelativePosition(svg.find('.cls-2')[0], svg[0], [0, 0.5], [0, 0.5]);
            tl.fromTo(svg.find('.cls-1'), {
              x: 0
            }, {
              x: positionWave1.x
            }, 0);
            tl.fromTo(svg.find('.cls-2'), {
              x: 0
            }, {
              x: positionWave2.x
            }, 0);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('hardware-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            tl.to(svg, {
              rotation: '+=90',
              duration: 0.75,
              ease: 'power2.inOut'
            }, 0);
            tl.to(svg.find('.cls-2'), {
              y: 5,
              ease: 'power2.inOut'
            }, 0.5);
            tl.to(svg.find('.cls-1'), {
              y: -5,
              ease: 'power2.inOut'
            }, 0.5);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('wellness-icon-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true
            });
            tl.to(svg, {
              rotation: '+=90',
              duration: 0.75,
              ease: 'power2.inOut'
            }, 0);
            tl.to(svg.find('.cls-2'), {
              y: 5,
              ease: 'power2.inOut'
            }, 0.5);
            tl.to(svg.find('.cls-1'), {
              y: -5,
              ease: 'power2.inOut'
            }, 0.5);
            _this3.hoverAnimationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
        }
      });
    }
  }, {
    key: "createTl",
    value: function createTl() {
      var _this4 = this;
      this.blocksList.each(function (i, e) {
        var block = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
        var svg = block.find('svg');
        var tl;
        switch (true) {
          case svg.hasClass('retail-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            tl.fromTo(svg.find('.lower-path'), {
              opacity: 0
            }, {
              opacity: 1,
              duration: 1
            });
            tl.fromTo(svg.find('.upper-path'), {
              yPercent: 100,
              opacity: 0
            }, {
              yPercent: 0,
              opacity: 1,
              duration: 1
            }, 0.5);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('health-wellness-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            tl.fromTo(svg, {
              rotation: 0,
              scale: 0,
              opacity: 0
            }, {
              rotation: 720,
              scale: 1,
              opacity: 1,
              duration: 1.2
            }, 0);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('grocery-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(block.find('.img-overlay-anim'), {
              transformOrigin: '50% 0%'
            });
            tl.fromTo(block.find('.img-overlay-anim'), {
              scaleY: 1
            }, {
              scaleY: 0
            }, 0);
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.find('.path-top'), {
              transformOrigin: '50% 100%'
            });
            tl.fromTo(svg.find('.path-top'), {
              opacity: 0,
              scale: 0.75,
              yPercent: 50,
              transformOrigin: '50% 100%'
            }, {
              opacity: 1,
              scale: 1,
              yPercent: 0,
              transformOrigin: '50% 100%'
            }, 0.5);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('ecommerce-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            var svgEl4Circle2Position = gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_5__.MotionPathPlugin.getRelativePosition(svg.find('.circle-2')[0], svg.find('.path-outer')[0], [0.5, 0.5], [0.5, 0.5]);
            var svgEl4Circle3Position = gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_5__.MotionPathPlugin.getRelativePosition(svg.find('.circle-3')[0], svg.find('.path-outer')[0], [0.5, 0.5], [0.5, 0.5]);
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.find('.path-outer'), {
              transformOrigin: '50% 50%'
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(block.find('.img-overlay-anim'), {
              transformOrigin: '0% 50%'
            });
            tl.fromTo(block.find('.img-overlay-anim'), {
              scaleX: 1
            }, {
              scaleX: 0
            }, 0);
            tl.fromTo(svg.find('.circle-el'), {
              opacity: 0
            }, {
              opacity: 1
            }, 0.3);
            tl.from(svg.find('.circle-3'), {
              x: svgEl4Circle3Position.x
            }, 0.5);
            tl.from(svg.find('.circle-2'), {
              x: svgEl4Circle2Position.x
            }, 0.6);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('restaurant-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.find('.circle-el'), {
              transformOrigin: '50% 50%'
            });
            tl.fromTo(block.find('.img-overlay-anim'), {
              scaleX: 1
            }, {
              scaleX: 0
            }, 0);
            tl.fromTo(svg.find('.circle-el'), {
              opacity: 0,
              scale: 0.75,
              yPercent: 50
            }, {
              opacity: 1,
              scale: 1,
              yPercent: 0
            }, 0.5);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('hospitality-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.find('.path-outer'), {
              transformOrigin: '50% 50%'
            });
            tl.fromTo(svg.find('.path-outer'), {
              rotation: 0,
              opacity: 0
            }, {
              rotation: 360,
              opacity: 1,
              duration: 1
            }, 0);
            tl.fromTo(svg.find('.circle-el'), {
              xPercent: -50,
              yPercent: 50,
              scale: 0.5,
              opacity: 0
            }, {
              xPercent: 0,
              yPercent: 0,
              scale: 1,
              opacity: 1,
              duration: 1
            }, 0.5);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('fashion-boutiques-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.find('.path-inner'), {
              transformOrigin: '50% 50%'
            });
            tl.fromTo(svg.find('.path-inner'), {
              rotation: 0,
              opacity: 0
            }, {
              rotation: 360,
              opacity: 1,
              duration: 1.5
            }, 0);
            tl.fromTo(svg.find('.path-outer'), {
              opacity: 0
            }, {
              opacity: 1,
              duration: 1,
              stagger: 0.1
            }, 0.75);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('homeware-store-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            tl.fromTo(svg.find('.lower-path'), {
              opacity: 0
            }, {
              opacity: 1,
              duration: 1
            }, 0);
            tl.fromTo(svg.find('.upper-path'), {
              yPercent: 100,
              opacity: 0
            }, {
              yPercent: 0,
              opacity: 1,
              duration: 1
            }, 0.5);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('professional-services-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.find('.circle-el'), {
              transformOrigin: '50% 50%'
            });
            tl.fromTo(block.find('.img-overlay-anim'), {
              scaleX: 1
            }, {
              scaleX: 0
            }, 0);
            tl.fromTo(svg.find('.circle-el'), {
              opacity: 0,
              scale: 0.75,
              yPercent: 50
            }, {
              opacity: 1,
              scale: 1,
              yPercent: 0
            }, 0.5);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('wholesale-icon-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.find('.circle-el'), {
              transformOrigin: '50% 50%'
            });
            tl.fromTo(block.find('.img-overlay-anim'), {
              scaleY: 1
            }, {
              scaleY: 0
            }, 0);
            tl.fromTo(svg.find('.circle-el'), {
              opacity: 0,
              scale: 0
            }, {
              opacity: 1,
              scale: 1
            }, 0.5);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('beauty-salons-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.find('circle'), {
              transformOrigin: '50% 50%'
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.find('path'), {
              transformOrigin: '50% 100%'
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(block.find('.img-overlay-anim'), {
              transformOrigin: '50% 100%'
            });
            tl.fromTo(block.find('.img-overlay-anim'), {
              scaleY: 1
            }, {
              scaleY: 0
            }, 0);
            tl.fromTo(svg.find('path'), {
              rotation: 180
            }, {
              rotation: 0
            }, '-=.2');
            tl.fromTo(svg.find('circle'), {
              opacity: 0,
              scale: 0
            }, {
              opacity: 1,
              scale: 1
            }, '-=.25');
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('non-profit-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(svg.children(), {
              scale: 0.85
            });
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(block.find('.img-overlay-anim'), {
              transformOrigin: '50% 100%'
            });
            var positionWave1 = gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_5__.MotionPathPlugin.getRelativePosition(svg.find('.cls-1')[0], svg[0], [0.5, 1], [0.5, 1]);
            var positionWave2 = gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_5__.MotionPathPlugin.getRelativePosition(svg.find('.cls-2')[0], svg[0], [0.5, 0], [0.5, 0]);
            tl.fromTo(block.find('.img-overlay-anim'), {
              scaleY: 1
            }, {
              scaleY: 0
            }, 0);
            tl.fromTo(svg.find('.cls-1'), {
              x: positionWave1.x,
              scale: 0.85
            }, {
              x: 0,
              scale: 1
            }, 0.4);
            tl.fromTo(svg.find('.cls-2'), {
              x: positionWave2.x,
              scale: 0.85
            }, {
              x: 0,
              scale: 1
            }, 0.4);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('hardware-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            tl.fromTo(svg, {
              rotation: 0,
              scale: 0,
              opacity: 0
            }, {
              rotation: 720,
              scale: 1,
              opacity: 1,
              duration: 1.2
            }, 0);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
          case svg.hasClass('wellness-icon-svg'):
            tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
              paused: true,
              onComplete: function onComplete() {
                return block.addClass('animated-in');
              },
              onReverseComplete: function onReverseComplete() {
                return block.removeClass('animated-in');
              }
            });
            tl.fromTo(svg, {
              rotation: 0,
              scale: 0,
              opacity: 0
            }, {
              rotation: 720,
              scale: 1,
              opacity: 1,
              duration: 1.2
            }, 0);
            _this4.animationsList.push({
              animation: tl,
              elIndex: i
            });
            break;
        }
      });
    }
  }, {
    key: "sectionAnim",
    value: function sectionAnim() {
      var _this5 = this;
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.solutions-section-home').length) return;
      var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        onStart: function onStart() {
          return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(_this5.section);
        },
        paused: true
      });
      tl.fromTo(this.section.find('.txt-size-12'), {
        y: 15,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, 0);
      if (this.section.find('.char').length > 0) {
        tl.to(this.section.find('.char'), {
          y: 0,
          stagger: 0.02,
          opacity: 1,
          duration: 0.4
        }, 0.3);
      }
      tl.fromTo(this.section.find('.txt-post-rtf'), {
        y: 15,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, 0.6);
      this.section.find('.single-block').each(function (i, e) {
        var item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
        var startAt = 0.9;
        startAt += 0.1 * i;
        tl.fromTo(item.find('.txt-size-22'), {
          y: 15,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          onStart: function onStart() {
            return _this5.playTl(i);
          }
        }, startAt);
      });

      // ScrollTrigger.create({
      //     trigger: this.section,
      //     start: '0% 75%',
      //     end: '+=1%',
      //     toggleActions: 'none none none none',
      //     animation: tl,
      //     onEnter: () => tl.timeScale(1).play(0),
      //     onLeaveBack: () => {
      //         tl.timeScale(2).reverse();
      //         this.svgTl1.timeScale(2).reverse();
      //         this.svgTl2.timeScale(2).reverse();
      //         this.svgTl3.timeScale(2).reverse();
      //         this.svgTl4.timeScale(2).reverse();
      //         this.svgTl5.timeScale(2).reverse();
      //         this.svgTl6.timeScale(2).reverse();
      //         this.svgTl7.timeScale(2).reverse();
      //         this.svgTl8.timeScale(2).reverse();
      //         this.svgTl9.timeScale(2).reverse();
      //         this.svgTl10.timeScale(2).reverse();
      //     },
      // })

      var observerOptions = {
        root: null,
        rootMargin: "0px 0px -25% 0px",
        threshold: 0
      };
      var Observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0) {
            if (!_this5.section.hasClass('animated-in')) {
              tl.timeScale(1).play(0);
              _this5.section.addClass('animated-in');
            }
          } else {
            if (entry.boundingClientRect.y > 0) {
              tl.timeScale(2).reverse();
              _this5.animationsList.forEach(function (e) {
                e.animation.timeScale(2).reverse();
              });
              _this5.section.removeClass('animated-in');
            }
          }
        });
      }, observerOptions);
      Observer.observe(this.section[0]);
    }
  }]);
}();
var ContactSectionHomeHoverAnim = /*#__PURE__*/function () {
  function ContactSectionHomeHoverAnim() {
    _classCallCheck(this, ContactSectionHomeHoverAnim);
    this.section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contact-section-home');
    this.svgEl1 = this.section.find('.msg-icon');
    this.svgEl2 = this.section.find('.email-icon.top-part-svg');
    this.svgEl3 = this.section.find('.phone-icon');
    this.createTl();
    this.bind();
  }
  return _createClass(ContactSectionHomeHoverAnim, [{
    key: "bind",
    value: function bind() {
      var _this6 = this;
      // if (!isMobile()) {
      this.section.on('mouseenter focusin touchstart', '.single-block', function (e) {
        var svgIcon = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).find('svg');
        _this6.playAnim(svgIcon, 'mouseenter');
      });
      this.section.on('mouseleave focusout touchend', '.single-block', function (e) {
        var svgIcon = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).find('svg');
        _this6.playAnim(svgIcon, 'mouseleave');
      });
      // }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resizeObserverTrigger', function () {
        _this6.killTl();
        _this6.createTl();
      });

      // $(window).on('resize',
      //     debounce(() => {
      //     }, 10)
      // )
    }
  }, {
    key: "killTl",
    value: function killTl() {
      this.svgTl1.kill();
      this.svgTl1 = null;
      this.svgTl2.kill();
      this.svgTl2 = null;
      this.svgTl3.kill();
      this.svgTl3 = null;
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set([this.svgEl1, this.svgEl2, this.svgEl3, this.svgEl1.children(), this.svgEl2.children(), this.svgEl3.children()], {
        clearProps: true
      });
    }
  }, {
    key: "createTl",
    value: function createTl() {
      this.svgTl1 = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        paused: true,
        defaults: {
          duration: 0.4,
          ease: 'none'
        }
      });
      this.svgTl2 = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        paused: true,
        defaults: {
          ease: 'power2.inOut'
        }
      });
      this.svgTl3 = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        paused: true,
        defaults: {
          duration: 0.4,
          ease: 'none'
        }
      });

      // svg tl1
      this.svgTl1.to(this.svgEl1.find('.st0'), {
        opacity: 0,
        stagger: 0.2
      }, 0);
      this.svgTl1.to(this.svgEl1.find('.st0'), {
        opacity: 1,
        stagger: 0.2
      }, 0.5);

      // svg tl2
      this.svgTl2.fromTo(this.svgEl2, {
        rotationX: 0
      }, {
        rotationX: 130
      }, 0);
      this.svgTl2.progress(0);

      // svg tl3
      this.svgTl3.to(this.svgEl3.find('.signal-path'), {
        opacity: 1,
        stagger: 0.2
      }, 0);
      this.svgTl3.to(this.svgEl3.find('.signal-path'), {
        opacity: 0,
        stagger: 0.2
      }, '-=.2');
    }
  }, {
    key: "playAnim",
    value: function playAnim(icon, eventType) {
      switch (eventType) {
        case 'mouseenter':
          gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(icon.parents('.single-block').find('.txt-size-24'), {
            y: -10
          });
          break;
        case 'mouseleave':
          gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(icon.parents('.single-block').find('.txt-size-24'), {
            y: 0
          });
          break;
      }
      switch (true) {
        case icon.hasClass('msg-icon') && eventType === 'mouseenter':
          this.svgTl1.repeat(-1).play(0);
          break;
        case icon.hasClass('msg-icon') && eventType === 'mouseleave':
          this.svgTl1.repeat(0);
          break;
        case icon.hasClass('email-icon') && eventType === 'mouseenter':
          this.svgTl2.play(0);
          break;
        case icon.hasClass('email-icon') && eventType === 'mouseleave':
          this.svgTl2.reverse();
          break;
        case icon.hasClass('phone-icon') && eventType === 'mouseenter':
          this.svgTl3.repeat(-1).play(0);
          break;
        case icon.hasClass('phone-icon') && eventType === 'mouseleave':
          this.svgTl3.repeat(0);
          break;
      }
    }
  }]);
}();
var contactSectionHomeDesktopAnim = function contactSectionHomeDesktopAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contact-section-home').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contact-section-home');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    },
    paused: true
  });
  if (section.find('.txt-size-12').length > 0) {
    tl.fromTo(section.find('.txt-size-12'), {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, 0);
  }
  if (section.find('.char').length > 0) {
    tl.to(section.find('.char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0.3);
  }
  if (section.find('.img-hold').length > 0) {
    tl.fromTo(section.find('.img-hold'), {
      scale: 0,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 1.5
    }, 0.3);
  }
  if (section.find('.txt-post-rtf, .quote-by-txt').length > 0) {
    tl.fromTo(section.find('.txt-post-rtf, .quote-by-txt'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      stagger: 0.15
    }, 0.6);
  }
  if (section.find('.svg-icon-wrap').length > 0) {
    tl.fromTo(section.find('.svg-icon-wrap'), {
      scale: 0
    }, {
      scale: 1,
      stagger: 0.15
    }, 0.9);
  }
  if (section.find('.single-block .txt-size-24').length > 0) {
    tl.fromTo(section.find('.single-block .txt-size-24'), {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.15
    }, 0.9);
  }
  if (section.find('.btn-wrap').length > 0) {
    tl.fromTo(section.find('.btn-wrap'), {
      opacity: 0
    }, {
      opacity: 1
    }, 1.2);
  }
  var observerOptions = {
    root: null,
    rootMargin: "0px 0px -25% 0px",
    threshold: 0
  };
  var Observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // console.log(entry);
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
  var animationsArray = [];
  section.find('.background-draw-svg').each(function (i, e) {
    var canvas = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
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

  var observerOptions2 = {
    root: null,
    threshold: [0, 0.4]
  };
  var Observer2 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio == 0 && !entry.isIntersecting || entry.intersectionRatio < 0.4 && entry.isIntersecting && entry.boundingClientRect.y > 0) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].killTweensOf(playAnimFunc);
        animationsArray.map(function (e) {
          e.pause();
          e.scrub('animation-draw', 0);
        });
        section.removeClass('animated-in-circles');
      }
      if (entry.intersectionRatio >= 0.4 && entry.isIntersecting) {
        if (!section.hasClass('animated-in-circles')) {
          gsap__WEBPACK_IMPORTED_MODULE_3__["default"].killTweensOf(playAnimFunc);
          section.find('.background-draw-svg').each(function (i, e) {
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].delayedCall(parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).data('delay')), playAnimFunc, [i]);
          });
          section.addClass('animated-in-circles');
        }
      }
      if (entry.intersectionRatio < 0.1 && entry.isIntersecting && entry.boundingClientRect.y < 0) {
        if (!section.hasClass('animated-in-circles')) {
          gsap__WEBPACK_IMPORTED_MODULE_3__["default"].killTweensOf(playAnimFunc);
          section.find('.background-draw-svg').each(function (i, e) {
            gsap__WEBPACK_IMPORTED_MODULE_3__["default"].delayedCall(parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).data('delay')), playAnimFunc, [i]);
          });
          section.addClass('animated-in-circles');
        }
      }
    });
  }, observerOptions2);
  Observer2.observe(section[0]);
  tl.progress(1);
  tl.progress(0);
};
var contactSectionHomeMobileAnim = function contactSectionHomeMobileAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contact-section-home').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contact-section-home');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
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
  if (section.find('.char').length > 0) {
    tl.to(section.find('.char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0.3);
  }
  tl.fromTo(section.find('.img-hold'), {
    scale: 0
  }, {
    scale: 1,
    duration: 0.6
  }, 0.3);
  tl.fromTo(section.find('.txt-post-rtf, .quote-by-txt'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    stagger: 0.15
  }, 0.6);
  tl.fromTo(section.find('.svg-icon-wrap'), {
    scale: 0
  }, {
    scale: 1,
    stagger: 0.15
  }, 0.9);
  tl.fromTo(section.find('.single-block .txt-size-24'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    stagger: 0.15
  }, 0.9);
  tl.fromTo(section.find('.btn-wrap'), {
    opacity: 0
  }, {
    opacity: 1
  }, 1.2);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger.create({
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
  tl.progress(1);
  tl.progress(0);
};
var statementAnalysisSectionDesktopAnim = function statementAnalysisSectionDesktopAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.statement-analysis-section-home').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.statement-analysis-section-home');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    },
    paused: true
  });
  tl.fromTo(section.find('.section-img-wrap'), {
    scale: 0
  }, {
    scale: 1,
    duration: 1,
    clearProps: true
  }, 0);
  tl.fromTo(section.find('.txt-size-12'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0);
  if (section.find('.char').length > 0) {
    tl.to(section.find('.char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0.3);
  }
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
    duration: 1,
    clearProps: true
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
    duration: 1,
    clearProps: true
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
var statementAnalysisSectionMobileAnim = function statementAnalysisSectionMobileAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.statement-analysis-section-home').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.statement-analysis-section-home');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
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
  if (section.find('.char').length > 0) {
    tl.to(section.find('.char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0.3);
  }
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
  tl.fromTo(section.find('.btn-wrap'), {
    opacity: 0
  }, {
    opacity: 1
  }, 0.9);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger.create({
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
var partnersSectionAnim = function partnersSectionAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners-section-home').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners-section-home');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
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
  if (section.find('.char').length > 0) {
    tl.to(section.find('.char'), {
      y: 0,
      stagger: 0.02,
      opacity: 1,
      duration: 0.4
    }, 0.3);
  }
  tl.fromTo(section.find('.partner-item'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    stagger: 0.1
  }, 0.6);
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
var resourcesSectionHomeAnim = function resourcesSectionHomeAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.resources-section-home').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.resources-section-home');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(section);
    },
    paused: true
  });
  tl.fromTo(section.find('.section-title'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0);
  section.find('.single-block').each(function (i, e) {
    var item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
    tl.to(item.find('.anim-translate-y'), {
      yPercent: 0,
      stagger: 0.1,
      opacity: 1
    }, 0.3);
    tl.fromTo(item.find('.person-wrap-img .img-wrapper'), {
      scale: 0
    }, {
      scale: 1
    }, 0.6);
    tl.fromTo(item.find('.quote-person-txt'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, 0.75);
    tl.fromTo(item.find('.block-txt'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, 0.9);
    tl.fromTo(item.find('.plain-link-btn'), {
      opacity: 0
    }, {
      opacity: 1
    }, 1.2);
  });
  var parallaxTween;
  var parallaxTweenDistance = section.outerHeight(true) + innerHeight;
  var sectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(section.prevAll('section'));
  var contentOffset = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').outerHeight(true) - jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').height();
  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
    parallaxTween = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(section.find('.background-circles-wrap'), {
      x: -section.find('.background-circles-wrap').outerWidth() * 0.05
    }, {
      x: section.find('.background-circles-wrap').outerWidth() * 0.05,
      ease: 'none',
      paused: true
      // scrollTrigger: {
      //     trigger: section.find('.background-circles-wrap'),
      //     start: '0% 100%',
      //     end: '100% 0%',
      //     scrub: true
      // }
    });
    var progressTween = function progressTween() {
      if (typeof tl == 'undefined') return;
      var elPosition = window.scrollY - sectionOffsetTop + innerHeight - contentOffset;
      var currentProgress = elPosition / parallaxTweenDistance;
      parallaxTween.progress(currentProgress);
    };
    var _observerOptions = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0
    };
    var observer = new IntersectionObserver(function (entry) {
      if (entry[0].intersectionRatio > 0 && window.scrollY < (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(section.next().prevAll('section'))) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].ticker.add(progressTween);
        // console.log(entry[0], 'parallaxTween in')
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].ticker.remove(progressTween);
        // console.log(entry[0], 'parallaxTween else')
      }
    }, _observerOptions);
    observer.observe(section[0]);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resizeObserverTrigger', function () {
      parallaxTween.kill();
      parallaxTween = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(section.find('.background-circles-wrap'), {
        x: -section.find('.background-circles-wrap').outerWidth() * 0.05
      }, {
        x: section.find('.background-circles-wrap').outerWidth() * 0.05,
        ease: 'none',
        paused: true
      });
      parallaxTweenDistance = section.outerHeight(true) + innerHeight;
      sectionOffsetTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.getTotalHeight)(section.prevAll('section'));
      contentOffset = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').outerHeight(true) - jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-content').height();
      progressTween();
    });

    // $(window).on('resize',
    //     debounce(() => {
    //     }, 150)
    // )
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
  //     toggleActions: 'play none none none',
  //     animation: tl,
  //     onEnter: () => tl.timeScale(1).play(),
  //     onLeaveBack: () => tl.timeScale(2).reverse()
  // })
};
var acceptsPaymentsFocusHandler = function acceptsPaymentsFocusHandler(scrollPos) {
  var heroSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hero-section');
  var paymentsSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.payments-section-home');
};

// const bind = () => {
//   if (!isMobile()) {
//     // $('.payments-section-home').on('focusin', function(e){
//     //     e.preventDefault();
//     //     e.stopPropagation();
//     //   });
//     //$(".payments-section-home").on(
//     //"focusin",
//     //  ".single-block:first-of-type",
//     //  () => acceptsPaymentsFocusHandler(window.scrollY),
//     //);
//   } else {
//   }
// };

var init = function init() {
  // bind();
  if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
    new HeroSectionIconAnimations();
    heroSectionMaskAnim();
    heroSectionAnimDesktop();
    paymentsSectionMaskAnim();
    paymentsSectionHomeDesktop();
    contactSectionHomeDesktopAnim();
    statementAnalysisSectionDesktopAnim();
  } else {
    heroSectionAnimMobile();
    paymentsSectionHomeMobile();
    contactSectionHomeMobileAnim();
    statementAnalysisSectionMobileAnim();
  }
  partnersSectionAnim();
  resourcesSectionHomeAnim();
  new SolutionsSectionHome();
  new ContactSectionHomeHoverAnim();
};

/***/ })

}]);
//# sourceMappingURL=homepage_animations.js.map