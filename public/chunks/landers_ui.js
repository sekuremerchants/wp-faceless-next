"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/landers_ui"],{

/***/ "./assets/js/landers/src/theme/ui/header.js":
/*!**************************************************!*\
  !*** ./assets/js/landers/src/theme/ui/header.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/landers/src/theme/helpers/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var updateDropdownPosition = function updateDropdownPosition(item) {
  if (item.length > 0) {
    var scrollTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
    var headerToggeled = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state');
    var bottom = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).offset().top + jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).outerHeight(false) - scrollTop;
    var margin = 0;
    var windowWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerWidth();
    headerToggeled ? '0.9rem' : '1.2rem';
    switch (true) {
      case windowWidth > 1400:
        margin = headerToggeled ? '1rem' : '1.3rem';
        break;
      case windowWidth > 1199:
        margin = headerToggeled ? '0.9rem' : '1.2rem';
        break;
      default:
        margin = headerToggeled ? '0.7rem' : '0.8rem';
        break;
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).parents('.header-links-content-wrap').find('.dropdown-item-links').css({
      top: bottom,
      marginTop: margin
    });
  }
};
var HeaderFunctionalitiesHandler = /*#__PURE__*/function () {
  function HeaderFunctionalitiesHandler() {
    _classCallCheck(this, HeaderFunctionalitiesHandler);
    this.html = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html');
    this.header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('header');
    this.headerMobileBtnLines = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-menu-btn .line-el');
    this.headerLinesTl;
    this.borderEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.border-el');
    this.headerLinksWrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-links-wrap');

    //this.createHeaderLinesTl();
    this.bind();
    this.headerStateHandler();
  }
  return _createClass(HeaderFunctionalitiesHandler, [{
    key: "bind",
    value: function bind() {
      var _this = this;
      if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
        // Initial Position Update
        updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-link-item').first());

        // Add Event Listener for Window Resize and Scroll
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header').on('headerChanged', function () {
          updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-link-item').first());
        });
        // $(window).on('scroll', updateDropdownPosition);
      }
      this.header.on('mouseenter', '.has-dropdown:not(.opened-dropdown)', function (e) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          _this.headerDropdownHover(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget), 'mouseenter');
          updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
        }
      });
      /*
          .on('mouseleave', '.has-dropdown:not(.opened-dropdown)', (e) =>
            this.headerDropdownHover($(e.currentTarget), 'mouseleave'),
          );
          */

      this.header.on('click', '.has-dropdown', function (e) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          e.preventDefault();
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).hasClass('opened-dropdown')) {
            _this.headerDropdownHover(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget), 'mouseenter');
            updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
            /*
            $('html, body').css({
              overflow: 'hidden',
              height: '100%'
            });
            */
          } else {
            _this.closeHeaderDropdownsDesktop();
          }
        }
      });
      this.header.on(':focus-within', '.has-dropdown', function (e) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          e.preventDefault();
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).hasClass('opened-dropdown')) {
            // console.log(e);
            _this.headerDropdownHover(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget), 'mouseenter');
            updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
            /*
            $('html, body').css({
              overflow: 'hidden',
              height: '100%'
            });
            */
          } else {
            _this.closeHeaderDropdownsDesktop();
          }
        }
      });
      this.header.on('mouseenter', '.header-logo-link, .statement-analysis-btn, .nav-extras', function (e) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          _this.closeHeaderDropdownsDesktop();
        }
      });
      this.header.on('keydown', '.has-dropdown', function (event) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          var code = e.keyCode ? e.keyCode : e.which;
          if (code == 13) {
            event.preventDefault();
            if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).hasClass('opened-dropdown')) {
              _this.headerDropdownHover(jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget), 'mouseenter');
              updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget));
            } else {
              _this.closeHeaderDropdownsDesktop();
            }
          }
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('keydown', function (event) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          if (event.key == 'Escape') {
            _this.closeHeaderDropdownsDesktop();
          }
        }
      });
      this.header.on('mouseleave', function () {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          _this.closeHeaderDropdownsDesktop();
        }
      });
      this.header.on('click', '.has-dropdown, .js-header-dropdown-btn', function (e) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
          e.preventDefault();
          _this.headerDropdownItemMobileHandler(e, jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-menu-btn').on('click', function () {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
          _this.mobileMenuBtnHandler();
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-landing .landing-template-btn').on('click', function () {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
          _this.mobileMenuBtnHandler();
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.mobile-menu-btn', function () {
        var lang = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').prop('lang');
        if (lang == 'fr-CA') {
          lang = 'fr';
        }
        if (lang == 'es-US') {
          lang = 'es';
        }
        var logoLink = window.location.origin + '/wp-content/themes/sekure/assets/logo/' + lang + '/logo-';
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-expanded') == 'false') {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor.webp').fadeIn(200);
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor-tagline.webp').fadeIn(200);
          }
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'blue-descriptor.webp').fadeIn(200);
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'blue-descriptor-tagline.webp').fadeIn(200);
          }
        }
      });
    }
  }, {
    key: "mobileMenuBtnHandler",
    value: function mobileMenuBtnHandler() {
      if (this.header.hasClass('main-header')) {
        this.html.toggleClass('mobile-menu-opened');
      }

      // this.html.toggleClass('mobile-menu-opened');
      this.html.hasClass('mobile-menu-opened') ? this.headerLinesTl.timeScale(1).play() : this.headerLinesTl.timeScale(1.25).reverse();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-menu-btn').attr('aria-expanded', function (_, attr) {
        return !(attr === 'true');
      });
    }
  }, {
    key: "headerStateHandler",
    value: function headerStateHandler() {
      var minScroll = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)() ? 200 : 50;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
        var lang = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').prop('lang');
        if (lang == 'fr-CA') {
          lang = 'fr';
        }
        if (lang == 'es-US') {
          lang = 'es';
        }
        var logoLink = window.location.origin + '/wp-content/themes/sekure/assets/logo/' + lang + '/logo-';
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= minScroll) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('header-toggled-state');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor.webp').fadeIn(200);
          }
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header[data-header-toggled="1"]').length <= 0) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state')) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('header-toggled-state');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'blue-descriptor-tagline.webp').fadeIn(200);
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').trigger('headerChanged');
              }, 355);
            }
          }
        }
      });
    }

    /*
    createHeaderLinesTl() {
      this.headerLinesTl = gsap.timeline({
        paused: true,
      });
        let translateBy = 6;
        this.headerLinesTl.to(
        this.headerMobileBtnLines[0],
        {
          y: translateBy,
          duration: 0.2,
        },
        0,
      );
        this.headerLinesTl.to(
        this.headerMobileBtnLines[1],
        {
          autoAlpha: 0,
          duration: 0.2,
        },
        0,
      );
        this.headerLinesTl.to(
        this.headerMobileBtnLines[2],
        {
          y: -translateBy,
          duration: 0.2,
        },
        0,
      );
        this.headerLinesTl.to(
        this.headerMobileBtnLines[0],
        {
          rotation: -45,
          duration: 0.2,
        },
        0.2,
      );
        this.headerLinesTl.to(
        this.headerMobileBtnLines[2],
        {
          rotation: 45,
          duration: 0.2,
        },
        0.2,
      );
    }
    */
  }, {
    key: "headerDropdownItemMobileHandler",
    value: function headerDropdownItemMobileHandler(e, btn) {
      e.stopPropagation();
      e.preventDefault();
      var item = btn.parents('.dropdown-item-wrap');
      var target = item.find('.dropdown-item-links');
      if (gsap__WEBPACK_IMPORTED_MODULE_2__["default"].isTweening(target)) return;
      item.toggleClass('opened');
      if (item.hasClass('opened')) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, {
          autoAlpha: 1,
          duration: 0.25
        });
        (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.dropdownsHandler)(target, 'open');
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, {
          autoAlpha: 0,
          duration: 0.25
        });
        (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.dropdownsHandler)(target, 'close');
      }
      // item.hasClass('opened') ? dropdownsHandler(target, 'open') : dropdownsHandler(target, 'close');
    }
  }, {
    key: "closeHeaderDropdownsDesktop",
    value: function closeHeaderDropdownsDesktop() {
      this.header.find('.opened-dropdown').removeClass('opened-dropdown');
      this.html.removeClass('header-opened-dropdown');
      this.html.trigger('focus');

      // $(window).off('resize', this.resizeHandler);
      // $(window).off('scroll', this.scrollHandler);

      /*
      $('html, body').css({
        overflow: 'auto',
        height: 'auto'
      });
      */

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-item-links').length) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.dropdown-item-links', {
          autoAlpha: 0,
          height: 0
        });
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-item-wrap').length) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.dropdown-links-wrap', {
          autoAlpha: 0
        });
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-bg-el').length > 0) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.header-bg-el', {
          autoAlpha: 0,
          height: 0
        });
      }
    }
  }, {
    key: "headerDropdownHover",
    value: function headerDropdownHover(item, eventType) {
      var _this2 = this;
      var dropdown = item.parent().find('.dropdown-item-links');
      var dropdownContent = item.parent().find('.dropdown-content');
      var dropdowns = this.header.find('.dropdown-item-links');
      var thisLinks = item.parent().find('.dropdown-links-wrap');
      var otherLinks = this.header.find('.dropdown-links-wrap').not(thisLinks);
      var bgMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-bg-el');
      var headerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-header .content-wrap').outerHeight() / 2;
      if (this.borderEl.length > 0) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.borderEl, {
          width: this.headerLinksWrap.width()
        });
      }
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].killTweensOf(this.header.find('.dropdown-links-wrap, .dropdown-item-links'));
      this.header.find('.opened-dropdown').removeClass('opened-dropdown');
      item.addClass('opened-dropdown');
      item.next().addClass('opened-dropdown');
      this.html.addClass('header-opened-dropdown');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-item-links.opened-dropdown').on('mouseleave', function (event) {
        _this2.closeHeaderDropdownsDesktop();
      });
      if (eventType == 'mouseenter') {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(dropdown, {
          zIndex: 9
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(dropdowns.not(dropdown), {
          zIndex: -1
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(dropdown, {
          autoAlpha: 1,
          height: dropdown.children().outerHeight(true)
        });
        if (bgMenu.length > 0) {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(bgMenu, {
            autoAlpha: 1,
            height: dropdown.children().outerHeight(true) + headerHeight
          });
        }
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(otherLinks, {
          autoAlpha: 0
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(thisLinks, {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          delay: 0.1
        });
      }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (HeaderFunctionalitiesHandler);

/***/ }),

/***/ "./assets/js/landers/src/theme/ui/landers.js":
/*!***************************************************!*\
  !*** ./assets/js/landers/src/theme/ui/landers.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/landers/src/theme/helpers/helper.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./assets/js/landers/src/theme/ui/header.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




/*
const checkForOpenDropdownsHandler = (item) => {
  let openedItems = item.parents('.faq-block').find('.opened').not(item);
  let preopenedItems = item
    .parents('section')
    .find('.preopened-item')
    .not(item);

  if (openedItems.length) {
    openedItems.each((i, e) => {
      let item = $(e);
      let target = item.find('.dropdown-content-wrap');

      item.removeClass('opened');

      dropdownsHandler(target, 'close');
    });
  }

  if (preopenedItems.length) {
    preopenedItems.each((i, e) => {
      let item = $(e);
      let target = item.find('.dropdown-content-wrap');

      item.removeClass('opened');
      setTimeout(() => item.removeClass('preopened-item'), 500);

      dropdownsHandler(target, 'close');
    });
  }
};


const faqDropdownHandler = (e, btn) => {
  e.stopPropagation();
  e.preventDefault();

  let item = btn.parents('.faq-question');
  let target = item.find('.dropdown-content-wrap');
  let parent = item.parents('.faq-questions-wrap');

  if (gsap.isTweening(target)) return;

  if (item.hasClass('preopened-item')) {
    item.removeClass('opened');
    setTimeout(() => item.removeClass('preopened-item'), 500);
    dropdownsHandler(target, 'close');
  } else if (!item.hasClass('opened')) {
    $(parent).find('.faq-question.open').removeClass('opened');
    $(parent).find('.dropdown-content-wrap').css('height', '0');
    item.toggleClass('opened');
    item.hasClass('opened')
      ? dropdownsHandler(target, 'open')
      : dropdownsHandler(target, 'close');
    checkForOpenDropdownsHandler(item);
  } else {
    item.removeClass('opened');
    dropdownsHandler(target, 'close');
  }
};
*/

var tableImagesAlignHandler = function tableImagesAlignHandler() {
  if ($('.table-block table').length) {
    $('.table-block table img').parent().css('vertical-align', 'middle');
  }

  // ScrollTrigger.refresh();
};
var landingVideoBtnHoverAnim = function landingVideoBtnHoverAnim(btn, eventType) {
  if (eventType == 'mouseenter') {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(btn.children(), {
      scale: 1.05,
      ease: 'elastic.out(0.6, 0.4)',
      stagger: 0.05,
      duration: 0.5
    });
  } else {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(btn.children(), {
      scale: 1,
      ease: 'elastic.out(0.6, 0.4)',
      stagger: 0.05,
      duration: 0.5
    });
  }
};
$(document).on('click', '.faq-question', function () {
  $('.dropdown-content-wrap').height(0);
  if (!$(this).hasClass('open')) {
    $('.faq-question').removeClass('open');
    $(this).addClass('open').find('.dropdown-content-wrap').height($(this).find('.dropdown-content').outerHeight(true));
  } else {
    $(this).removeClass('open').find('.dropdown-content-wrap').height(0);
  }
});
var bind = function bind() {
  /*
  $('.form-input:not(select), .form-textarea').on(
    'change keydown paste input',
    focusSearch,
  );
  
  $(document).on('click', '.faq-question, .faq-question-title, .js-faq-dropdown-btn', function(e){
    faqDropdownHandler(e, $(e.currentTarget));
  });
  */

  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
    $('.landing-video-btn').on('mouseenter', function (e) {
      return landingVideoBtnHoverAnim($(e.currentTarget), 'mouseenter');
    }).on('mouseleave', function (e) {
      return landingVideoBtnHoverAnim($(e.currentTarget), 'mouseleave');
    });
  }
};
var init = function init() {
  new _header__WEBPACK_IMPORTED_MODULE_1__["default"]();
  tableImagesAlignHandler();
  bind();
};

/***/ })

}]);
//# sourceMappingURL=landers_ui.js.map