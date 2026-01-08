"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/global_ui"],{

/***/ "./assets/js/src/theme/ui/global.js":
/*!******************************************!*\
  !*** ./assets/js/src/theme/ui/global.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./assets/js/src/theme/ui/header.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




/*
const focusSearch = (e) => {
  let input = e.currentTarget;
  input.value.length > 0
    ? $(input).parent().addClass('user-typing')
    : $(input).parent().removeClass('user-typing');
};
*/

var checkForOpenDropdownsHandler = function checkForOpenDropdownsHandler(item) {
  var openedItems = item.parents('.faq-block').find('.opened').not(item);
  var preopenedItems = item.parents('section').find('.preopened-item').not(item);
  if (openedItems.length) {
    openedItems.each(function (i, e) {
      var item = $(e);
      var target = item.find('.dropdown-content-wrap');
      item.removeClass('opened');
      (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.dropdownsHandler)(target, 'close');
    });
  }
  if (preopenedItems.length) {
    preopenedItems.each(function (i, e) {
      var item = $(e);
      var target = item.find('.dropdown-content-wrap');
      item.removeClass('opened');
      setTimeout(function () {
        return item.removeClass('preopened-item');
      }, 500);
      (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.dropdownsHandler)(target, 'close');
    });
  }
};
var faqDropdownHandler = function faqDropdownHandler(e, btn) {
  e.stopPropagation();
  e.preventDefault();
  var item = btn.parents('.faq-question');
  var target = item.find('.dropdown-content-wrap');
  var parent = item.parents('.faq-questions-wrap');
  if (gsap__WEBPACK_IMPORTED_MODULE_2__["default"].isTweening(target)) return;
  if (item.hasClass('preopened-item')) {
    item.removeClass('opened');
    setTimeout(function () {
      return item.removeClass('preopened-item');
    }, 500);
    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.dropdownsHandler)(target, 'close');
  } else if (!item.hasClass('opened')) {
    $(parent).find('.faq-question.open').removeClass('opened');
    $(parent).find('.dropdown-content-wrap').css('height', '0');
    item.toggleClass('opened');
    item.hasClass('opened') ? (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.dropdownsHandler)(target, 'open') : (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.dropdownsHandler)(target, 'close');
    checkForOpenDropdownsHandler(item);
  } else {
    item.removeClass('opened');
    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.dropdownsHandler)(target, 'close');
  }
};
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
var bind = function bind() {
  /*
  $('.form-input:not(select), .form-textarea').on(
    'change keydown paste input',
    focusSearch,
  );
  */
  $('.faq-question').on('click', '.faq-question-title, .js-faq-dropdown-btn', function (e) {
    return faqDropdownHandler(e, $(e.currentTarget));
  });
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

/***/ }),

/***/ "./assets/js/src/theme/ui/header.js":
/*!******************************************!*\
  !*** ./assets/js/src/theme/ui/header.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// import { GSDevTools } from 'gsap/GSDevTools';

// gsap.registerPlugin(GSDevTools)
var updateDropdownPosition = function updateDropdownPosition(item) {
  if (item.length > 0) {
    var scrollTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
    var headerToggeled = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state');

    // const linkPosition =
    //   $(item).offset().top - scrollTop + $(item).outerHeight(true) - 2;
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
    this.createHeaderLinesTl();
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
          } else {
            _this.closeHeaderDropdownsDesktop();
          }
        }
      });
      this.header.on(':focus-within', '.has-dropdown', function (e) {
        if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)()) {
          e.preventDefault();
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).hasClass('opened-dropdown')) {
            _this.headerDropdownHover(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget), 'mouseenter');
            updateDropdownPosition(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget));
          } else {
            _this.closeHeaderDropdownsDesktop();
          }
        }
      });
      this.header.on('mouseenter', '.header-logo-link, .nav-extras, .header-link-item.no-dropdown', function (e) {
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

      /*
      this.header.on('mouseleave', () => {
        if (isDesktop()) {
          this.closeHeaderDropdownsDesktop();
        }
      });
      */

      this.header.on('click', '.has-dropdown', function (e) {
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

      // French header has links with no dropdowns
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-link-item.no-dropdown').on("mouseenter", function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('header-opened-dropdown');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-link-item.has-dropdown, .dropdown-item-links').removeClass('opened-dropdown');
      }).on("mouseleave", function () {});
      var popupRemoveRestaurantIndustry = setInterval(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-wrap.callback .hbspt-form select[name=industry]').length) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-wrap.callback .hbspt-form select[name=industry] option[value=Restaurant]').remove();
          clearInterval(popupRemoveRestaurantIndustry);
        }
      }, 100);

      // get a free demo form
      var hubspotSubmitFreeDemo = setInterval(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("button[value='Get a free demo']").length) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("button[value='Get a free demo']").on('click', function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('select[name=industry]').val() != '' && jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=email]').val() != '') {
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('select[name=industry]').val() == 'Restaurant') {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.hbspt-form').addClass('restaurant');
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.hbspt-form').addClass('other');
              }
            }
          });
          clearInterval(hubspotSubmitFreeDemo);
        }
      }, 500);

      // Header Get a free demo CTA Hubspot form submission submit message CTA
      /*
      var headerHubspotCTASub = setInterval(function () {
        // check for submission message
        if ($('#header .hbspt-form .submitted-message').length) {
          // open popup and show corresponding form based on industry
          
          $('html')
            .addClass('open-callback-popup-form')
            .addClass('open-popup-form');
          $('.callback-popup-form.nav-default-popup').css('z-index', '99999');
          
            // add open popup buttons to submission message
          if ($('#header .hbspt-form').hasClass('restaurant')) {
            $('.form-wrap.meeting').removeClass('d-none');
            $('#header .hbspt-form .submitted-message').append(
              "<br><a href='#' class='submission-btn callback-popup-btn schedule-meeting-btn btn-default c-blue-1 btn-green-1 section-color-white btn-offset-8 fw-700 mt-2'><span class='btn-bg-el'></span><span class='btn-txt'>Schedule your free demo</span></a>"
            );
          } else if ($('#header .hbspt-form').hasClass('other')) {
            $('.form-wrap.callback').removeClass('d-none');
            $('#header .hbspt-form .submitted-message').append(
              "<br><a href='#' class='submission-btn callback-popup-btn schedule-callback-btn btn-default c-blue-1 btn-green-1 section-color-white btn-offset-8 fw-700 mt-2'><span class='btn-bg-el'></span><span class='btn-txt'>Schedule your free demo</span></a>"
            );
          }
          clearInterval(headerHubspotCTASub);
        }
      }, 500);
      */

      // functionality for post form submission CTAs
      /*
      var headerHubspotFormSubCTAs = setInterval(function(){
        if($('.submission-btn').length) {
          $('.callback-popup-btn').on('click', function(){
            $('html').addClass('open-callback-popup-form').addClass('open-popup-form');
            if($(this).hasClass('schedule-meeting-btn')){
              $('.form-wrap.meeting').removeClass('d-none');
            }
            if($(this).hasClass('schedule-callback-btn')){
              $('.form-wrap.callback').removeClass('d-none');
            }
          });
          clearInterval(headerHubspotFormSubCTAs);
        }
      });
      */

      // header search icon
      /*
      $('.search-icon').on('click', function(){
        // if blog page scroll to filters/search
        if($('body.page-id-3152').length){
          $('html, body').animate({
            scrollTop: $('.blog-filter').offset().top - $('#header').outerHeight(true),
          }, 350, 'linear');
        } else{
          if($('.ajax-search').hasClass('open')){
            if($('.ajax-search').val() == ''){
              $('.ajax-search').removeClass('open');
            } else {
              $('.ajax-search-results').css('top', $('#header').outerHeight(true) + 'px');
              $('.ajax-search-results').addClass('open');
              $('#search-input').val($('.ajax-search').val());
              $('#blog-filter').trigger('submit');
              //$('.ajax-search-results button[type=submit]').click();
            }
          } else {
            $('.ajax-search').addClass('open');
            $('.ajax-search').focus();
          }
        }
      });
      $('.ajax-search-results .popup-close-btn').on('click', function(){
        $('.ajax-search-results, .ajax-search').removeClass('open');
      });
      $(".ajax-search").on('keyup', function(e){ 
        var code = e.key;
        if(code==="Enter"){
          //$('.search-icon').click();
          $('#search-input').val($('.ajax-search').val());
          $('#blog-filter').trigger('submit');
        }
      });
      $('.blog-pagination a').on('click', function(){
        $('.ajax-search-results').animate({
          scrollTop: $('.ajax-search-results').offset().top,
        }, 350, 'linear');
      });
      $('#search-input').on('keyup', function(e){
        var code = e.key;
        if(code==="Enter"){
          $(".ajax-search").val($(this).val());
        }
      });
      */

      // language toggle
      // lang current click functionality
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.lang-current').on('click', function (e) {
        e.preventDefault();
        var langCurrent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var toggle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#lang_toggle');
        if (langCurrent.hasClass('open')) {
          langCurrent.removeClass('open');
          toggle.css({
            visibility: 'hidden',
            height: '0px'
          });
          toggle.attr('aria-hidden', 'true');
        } else {
          toggle.removeAttr('aria-hidden');
          langCurrent.addClass('open');
          var totalHeight = 0;
          toggle.children().each(function () {
            totalHeight += parseInt(langCurrent.outerHeight(true));
          });
          //console.log(totalHeight);
          toggle.css('height', totalHeight + 'px');
          toggle.css({
            visibility: 'visible',
            height: totalHeight + 'px'
          });
        }
      });

      // close language toggle
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', function (e) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('lang-current')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.lang-current').removeClass('open');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#lang_toggle').css({
            visibility: 'hidden',
            height: '0px'
          }).attr('aria-hidden', 'true');
        }
      });

      // mobile menu functionality
      if (window.innerWidth < 1025) {
        var offset = 140;
        if (window.innerWidth < 501) {
          var offset = 500;
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.mobile-menu-btn', function () {
          var logoLink = window.location.origin + '/wp-content/themes/sekure/assets/logo/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').prop('lang') + '/logo-';
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
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-menu-btn').on('click', function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header .content-wrap .btn-default.clone').length && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cta-parent').length) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header .content-wrap .btn-default.clone').appendTo('.cta-parent').removeClass('clone');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header .content-wrap .dropdown-link-cta.cta-parent').removeClass('cta-parent');
          }
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-links-wrap, .dropdown-item-wrap, .dropdown-link-wrap').removeAttr('style');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-item-wrap').removeClass('opened');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.links-column').removeClass('open-submenu');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-item-links').css({
            opacity: '0',
            visibility: 'hidden',
            height: '0px'
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.lang-current').removeClass('open');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#lang_toggle').css({
            visibility: 'hidden',
            height: '0px'
          }).attr('aria-hidden', 'true');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-header .nav-wrap, .main-header .header-links-wrap').animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).offset().top - 120
          }, 300, 'linear');
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-link-item.has-dropdown').on('click', function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.links-column.open-submenu .column-heading').siblings().fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.links-column').removeClass('open-submenu');
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.column-heading').on('click', function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().hasClass('open-submenu')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().removeClass('open-submenu');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings().fadeOut();
          } else {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.links-column.open-submenu').length) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.links-column.open-submenu .column-heading').siblings().fadeOut();
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.links-column.open-submenu').removeClass('open-submenu');
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.dropdown-item-links').css('height', 'auto');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().addClass('open-submenu');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings().fadeIn();
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-link-item.has-dropdown').on('click', function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().hasClass('opened')) {
            // put cta back where it belongs
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header .content-wrap .btn-default.clone').length && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cta-parent').length) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header .content-wrap .btn-default.clone').appendTo('.cta-parent').removeClass('clone');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header .content-wrap .dropdown-link-cta.cta-parent').removeClass('cta-parent');
            }

            // fade in top level links
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents().siblings('.dropdown-item-wrap').fadeIn();

            // scroll nav to link
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-wrap').animate({
              scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).offset().top - offset
            }, 350, 'linear');
          } else {
            // cta check and move
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('.dropdown-link-cta').length) {
              var cta = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('.dropdown-link-cta').find('.btn-default:not(.hs-button)');
              cta.parent().addClass('cta-parent');
              cta.addClass('clone').appendTo('#header .content-wrap');
              //cta.remove();
              //$('.header-links-wrap').css('padding-bottom', cta.outerHeight() + 'px');
            }

            // fade out top level links
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents().siblings('.dropdown-item-wrap').fadeOut();

            // scroll nav to link
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-wrap').animate({
              scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).offset().top - offset
            }, 350, 'linear');
          }
        });
      } // end of mobile functionality
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
      var minScroll = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isDesktop)() ? 150 : 50;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
        var logoLink = window.location.origin + '/wp-content/themes/sekure/assets/logo/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').prop('lang') + '/logo-';
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= minScroll) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('header-toggled-state');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor.webp').fadeIn(200);
            setTimeout(function () {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').trigger('headerChanged');
            }, 100);
          }
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('header-toggled-state')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('header-toggled-state');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor-tagline.webp').fadeIn(200);
            setTimeout(function () {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').trigger('headerChanged');
            }, 355);
          }
        }
      });
    }
  }, {
    key: "createHeaderLinesTl",
    value: function createHeaderLinesTl() {
      this.headerLinesTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        paused: true
      });
      var translateBy = 6;
      this.headerLinesTl.to(this.headerMobileBtnLines[0], {
        y: translateBy,
        duration: 0.2
      }, 0);
      this.headerLinesTl.to(this.headerMobileBtnLines[1], {
        autoAlpha: 0,
        duration: 0.2
      }, 0);
      this.headerLinesTl.to(this.headerMobileBtnLines[2], {
        y: -translateBy,
        duration: 0.2
      }, 0);
      this.headerLinesTl.to(this.headerMobileBtnLines[0], {
        rotation: -45,
        duration: 0.2
      }, 0.2);
      this.headerLinesTl.to(this.headerMobileBtnLines[2], {
        rotation: 45,
        duration: 0.2
      }, 0.2);
    }
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

      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.dropdown-item-links', {
        autoAlpha: 0,
        height: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.dropdown-links-wrap', {
        autoAlpha: 0
      });
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

      /*
      $('html, body').css({
        overflow: 'hidden',
        height: '100%'
      });
      */

      /*
      $(dropdown).on('mouseenter', (event) => {
        if (!$(event.target).hasClass('dropdown-content')) {
          this.closeHeaderDropdownsDesktop();
        }
      });
      $(thisLinks).on('mouseleave', (event) => {
        if (!$(event.target).hasClass('dropdown-content')) {
          this.closeHeaderDropdownsDesktop();
        }
      });
      $(dropdownContent).on('mouseleave', (event) => {
        if (!$(event.target).hasClass('dropdown-content')) {
          this.closeHeaderDropdownsDesktop();
        }
      });
      */

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

/***/ })

}]);
//# sourceMappingURL=global_ui.js.map