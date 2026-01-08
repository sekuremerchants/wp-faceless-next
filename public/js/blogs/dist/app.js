(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["/js/dist/app"],{

/***/ "./assets/js/src/app.js":
/*!******************************!*\
  !*** ./assets/js/src/app.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// import './theme/utils/utils';
// import './utils/blocks';
// import './utils/lazyload';
// import { refreshScrollTrigger } from './theme/helpers/helper';
// import './utils/rating';

var APP = {
  init: function init() {
    $('[data-scroll-to-section]').each(function (_, item) {
      if (!$(item).hasClass('looking')) {
        $(item).on('click', function () {
          $(window).scrollTo($(item).data('scroll-to-section'), {
            offset: -$('#header').outerHeight()
          });
        });
        $(item).addClass('looking');
      }
    });
    if ($('.header[data-header-toggled="1"]').length > 0) {
      $('html').addClass('header-toggled-state');
      $('.sk-lander #main-content.block-builded-page').addClass('toggled-header');
    }
  }
};
document.addEventListener('DOMContentLoaded', APP.init);
(function ($) {
  $(function () {
    $('.article-main-content a:not([href^="tel:"])').each(function (_, item) {
      var text = $(item).text();
      $(item).attr('title', 'View more about: ' + text);
    });
    $('.article-main-content a[href^="tel:"]').each(function (_, item) {
      var text = $(item).text();
      $(item).attr('title', 'Call to: ' + text);
    });
    $('img:not([alt])').each(function (_, img) {
      $(img).attr('alt', 'Decorative Image');
    });
    $('image:not(alt)').each(function (_, img) {
      $(img).attr('alt', 'Decorative Image');
    });
  });
  if ($('#wp-admin-bar-edit').length > 0) {
    var currentLocation = window.location;
    if (currentLocation.host === 'sekuremerchants.com') {
      var href = $('#wp-admin-bar-edit a').attr('href');
      $('#wp-admin-bar-edit a').attr('href', href.replace('sekuremerchants.com', 'wordpress-prod-appsvc.azurewebsites.net'));
    }
  }
})(jQuery);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["/js/dist/theme-scripts/vendor"], function() { return __webpack_exec__("./assets/js/src/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map