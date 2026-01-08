"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/smooth-scrollbar"],{

/***/ "./assets/js/src/theme/plugins/smooth-scrollbar-init.js":
/*!**************************************************************!*\
  !*** ./assets/js/src/theme/plugins/smooth-scrollbar-init.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smooth-scrollbar */ "./node_modules/smooth-scrollbar/index.js");


var init = function init() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll-container-inner]').each(function (i, e) {
    var scrollbar = smooth_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"].init(e, {
      alwaysShowTracks: true
    });
    // console.log(scrollbar.contentEl)
  });
};

/***/ })

}]);
//# sourceMappingURL=smooth-scrollbar.js.map