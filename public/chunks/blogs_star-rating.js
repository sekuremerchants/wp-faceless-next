"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/blogs_star-rating"],{

/***/ "./assets/js/src/theme/ui/star-rating.js":
/*!***********************************************!*\
  !*** ./assets/js/src/theme/ui/star-rating.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
var StartController = function StartController() {
  // Select all star rating containers
  var starRatingContainers = document.querySelectorAll('.sk-star-rating');
  starRatingContainers.forEach(function (container) {
    // Get the rating for this specific container
    var rating = parseFloat(container.getAttribute('data-rating'));
    // Get all star elements within this container
    var stars = container.querySelectorAll('.sk-star');
    for (var i = 0; i < stars.length; i++) {
      if (i < Math.floor(rating)) {
        stars[i].classList.add('filled');
      } else if (i === Math.floor(rating) && !Number.isInteger(rating)) {
        var fillPercent = (rating % 1 * 100).toFixed(2);
        if (fillPercent === '75.00') {
          fillPercent = '68.50';
        }
        if (fillPercent === '25.00') {
          fillPercent = '30.5';
        }
        stars[i].classList.add('partial');
        stars[i].style.setProperty('--fill-percent', fillPercent + '%');
      }
    }
  });
};
var init = function init() {
  StartController();
};

/***/ })

}]);
//# sourceMappingURL=blogs_star-rating.js.map