"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/social_share"],{

/***/ "./assets/js/src/theme/utils/socialShare.js":
/*!**************************************************!*\
  !*** ./assets/js/src/theme/utils/socialShare.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var SocialShare = /*#__PURE__*/function () {
  function SocialShare() {
    _classCallCheck(this, SocialShare);
    this.fbShare();
    this.twitterShare();
    this.linkedShare();
  }
  return _createClass(SocialShare, [{
    key: "fbShare",
    value: function fbShare() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fb-share').on('click', function () {
        var url = window.location.href;
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'facebook-share-dialog', 'width=800,height=600');
        return false;
      });
    }
  }, {
    key: "twitterShare",
    value: function twitterShare() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.x-share').on('click', function () {
        var loc = window.location.href;
        window.open('http://twitter.com/share?url=' + loc + '&text=' + '&', 'twitterwindow', 'height=450, width=550, top=' + (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() / 2 - 225) + ', left=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
      });
    }
  }, {
    key: "linkedShare",
    value: function linkedShare() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ln-share').on('click', function () {
        var loc = window.location.href;
        window.open('http://www.linkedin.com/shareArticle?mini=true&amp;url=' + loc, '_blank', 'width=800,height=600,  top=' + (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() / 2 - 225) + ', left=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() / 2 + '');
        return false;
      });
    }
  }]);
}();
var init = function init() {
  new SocialShare();
};

/***/ })

}]);
//# sourceMappingURL=social_share.js.map