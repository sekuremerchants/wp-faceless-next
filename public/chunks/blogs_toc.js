"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/blogs_toc"],{

/***/ "./assets/js/src/theme/ui/toc.js":
/*!***************************************!*\
  !*** ./assets/js/src/theme/ui/toc.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
//import { isDesktop } from '../helpers/helper';

function tocScroll() {
  var $headings = $('.blog-content').find('h2, h3, h4, h5, h6'); // Adjust if necessary

  if ($('.article-content').length > 0) {
    doTocScroll($headings);
    $(window).on('scroll', function () {
      doTocScroll($headings);
    });
  }
}
function doTocScroll($headings) {
  var activeHeading = null;
  var firstHeading = $($headings).first().offset().top;
  var headerHeight = $('#header').height();
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  $headings.each(function (index) {
    var rect = this.getBoundingClientRect();
    var offsetTop = $(this).offset().top;
    if (rect.top >= headerHeight && rect.top <= windowHeight * 0.2 + 250) {
      activeHeading = this;
      return false;
    }

    // Handle scrolling upwards
    if (scrollTop < offsetTop - headerHeight && index === 0) {
      activeHeading = this;
      return false;
    }
  });
  if (activeHeading) {
    var target = $(activeHeading).data('link-scroll-target-section-id');
    $('.table-of-contents .anchor-link').removeClass('active');
    var $activeLink = $(".table-of-contents .anchor-link[data-scroll-section-target-id=\"".concat(target, "\"]"));
    $activeLink.addClass('active');

    // if (isDesktop()) {
    //   // Ensure the active link in the TOC is visible
    //   if ($activeLink.length && !$activeLink.isInViewport()) {
    //     $activeLink.get(0).scrollIntoView({
    //       behavior: 'smooth',
    //       block: 'center',
    //     });
    //   }
    // }
  }
  if (scrollTop < firstHeading - headerHeight - 100) {
    $('.table-of-contents .anchor-link').removeClass('active');
  }
}

// Custom jQuery function to check if an element is in the viewport
$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop() + $('#header').outerHeight(true);
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};
var init = function init() {
  tocScroll();
};

/***/ })

}]);
//# sourceMappingURL=blogs_toc.js.map