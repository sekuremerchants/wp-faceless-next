"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/landers_calculator_page_ui"],{

/***/ "./assets/js/landers/src/theme/ui/calculator.js":
/*!******************************************************!*\
  !*** ./assets/js/landers/src/theme/ui/calculator.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/landers/src/theme/helpers/helper.js");
/* harmony import */ var gsap_Draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/Draggable */ "./node_modules/gsap/Draggable.js");
/* harmony import */ var gsap_InertiaPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/InertiaPlugin */ "./node_modules/gsap/InertiaPlugin.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_Draggable__WEBPACK_IMPORTED_MODULE_2__.Draggable, gsap_InertiaPlugin__WEBPACK_IMPORTED_MODULE_3__.InertiaPlugin, gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_4__.MotionPathPlugin);
var CalculatorSection = /*#__PURE__*/function () {
  function CalculatorSection() {
    _classCallCheck(this, CalculatorSection);
    this.section = $('.calculator-section');
    this.target = document.querySelector('.control-element-other');
    this.target2 = document.querySelector('.control-element-sekure');
    this.target3 = document.querySelector('.control-element-line');
    this.target4 = document.querySelector('.draggable-text');
    this.path = document.querySelector('.graphic-path-other');
    this.path2 = document.querySelector('.graphic-path-sekure');
    this.infoTopWrapTitle = this.section.find('.info-top-wrap-title');
    this.items = this.section.find('.info-bot-wrap-step');
    this.sekureInfoColTopValue = this.section.find('.sekure-info-col .info-top-wrap-col-value');
    this.startPoint = this.path.getPointAtLength(0);
    this.start2Point = this.path2.getPointAtLength(0);
    this.steps1 = [{
      x: 12.1642,
      y: 126.5268
    }, {
      x: 48,
      y: 124.715
    }, {
      x: 83.1147,
      y: 118.9935
    }, {
      x: 120.324,
      y: 109.2261
    }, {
      x: 155.8888,
      y: 93.8923
    }, {
      x: 190.5509,
      y: 68.1497
    }];
    this.steps2 = [{
      x: 12.1642,
      y: 126.5268
    }, {
      x: 48,
      y: 123.7667
    }, {
      x: 83.1147,
      y: 115.9589
    }, {
      x: 120.324,
      y: 101.618
    }, {
      x: 155.8888,
      y: 79.3309
    }, {
      x: 190.5509,
      y: 40.9864
    }];
    this.format = '#,###.00'; // you can put any format that you want... only string

    this.bind();
    this.draggableElementsHandler();
  }
  return _createClass(CalculatorSection, [{
    key: "convertNumber",
    value: function convertNumber(number, decimals, dec_point, thousands_sep) {
      // Strip all characters but numerical ones.
      number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
      var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
        dec = typeof dec_point === 'undefined' ? '.' : dec_point,
        s = '',
        toFixedFix = function toFixedFix(n, prec) {
          var k = Math.pow(10, prec);
          return '' + Math.round(n * k) / k;
        };

      // Fix for IE parseFloat(0.55).toFixed(0) = 0;
      s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
      if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
      }
      if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
      }
      return s.join(dec);
    }
  }, {
    key: "bind",
    value: function bind() {
      var _this = this;
      this.section.find('.info-txt-custom-input-btn').on('click', function (e) {
        return _this.customInputBtnHandler($(e.currentTarget));
      });
      this.section.find('.info-txt-custom-input').on('change', function (e) {
        return _this.customInputChangeHandler($(e.currentTarget));
      });
      this.section.find('.calculate-values-btn').on('click', function () {
        return _this.onCalculateBtnClick();
      });
      $(window).on('customSelectChange', function (e, val) {
        return _this.customSelectChangeHandler(val.target, val.chosenValEl);
      });
      this.section.find('.info-txt-custom-select').on('click', '.info-txt-custom-select-item', function (e) {
        return $(window).trigger('customSelectChange', {
          target: $(e.currentTarget),
          chosenValEl: $(e.currentTarget).parents('.calc-value-dropdown-wrap').find('[data-chosen-val]')
        });
      });
      /*
      $(document).on('click', '.info-txt-custom-select-item', function(e){
        $(window).trigger('customSelectChange', {
          target: $(e.currentTarget),
          chosenValEl: $(e.currentTarget)
            .parents('.calc-value-dropdown-wrap')
            .find('[data-chosen-val]'),
        });
      });
      */
      this.section.find('.calculator-info-txt').on('click', '.js-calc-selected-value-el, .dropdown-arrow-btn', function (e) {
        return _this.calcCustomDropdownHandler($(e.currentTarget));
      });
    }
  }, {
    key: "customInputBtnHandler",
    value: function customInputBtnHandler(btn) {
      this.customInputChangeHandler(btn.parent().find('input'));
    }
  }, {
    key: "customInputChangeHandler",
    value: function customInputChangeHandler(input) {
      // console.log(input[0]);
      var amount = input[0].value;
      var type = input.attr('name');
      var chosenValEl = input.parents('.calc-value-dropdown-wrap').find('[data-chosen-val]');
      // if (type !== 'monthly_processing_volume') {
      chosenValEl.attr('title', '$' + this.convertNumber(amount, 2, '.', ','));
      chosenValEl.html('$' + this.convertNumber(amount, 2, '.', ','));
      // } else {
      //     chosenValEl.attr('title', amount);
      //     chosenValEl.html(amount);
      // }
      chosenValEl.attr('data-chosen-val', amount);
      this.onClickOutsideClose();
      if (type === 'monthly_fees') {
        this.monthly_savings_amount = amount * 0.1;
        this.savingsCalculations = {
          monthly_savings: amount * 0.1,
          savings_years_1: amount * 0.1 * 12,
          savings_years_3: amount * 0.1 * 36,
          savings_years_5: amount * 0.1 * 60
        };
      }
      if (type === 'monthly_processing_volume') {
        this.monthly_processing_volume = amount;
      }
      if (type === 'monthly_fees') {
        this.monthly_fees = amount;
      }
      if (typeof this.monthly_processing_volume !== 'undefined' && typeof this.monthly_fees !== 'undefined' && typeof this.savingsCalculations !== 'undefined') {
        this.section.find('.calculate-values-btn').removeAttr('disabled');
        // this.updateGraphValuesDragChange(this.section.find('.info-bot-wrap-step.active-step').attr('data-step'));
        // this.updateSavingsValuesInputChange(this.savingsCalculations);
        // this.calculateEffectiveRate();
        // this.scrollToResultsMobile();
      }
    }
  }, {
    key: "draggableTextVisibleHandler",
    value: function draggableTextVisibleHandler(mode) {
      if (mode === 'show') {
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(this.target4, {
          opacity: 1
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(this.target4, {
          opacity: 0
        });
      }
    }
  }, {
    key: "draggableAnimHandler",
    value: function draggableAnimHandler() {
      var _this2 = this;
      var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
      this.steps1.forEach(function (pt, i) {
        tl.call(function () {
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this2.target, {
            transformOrigin: 'center',
            x: pt.x,
            y: pt.y
          });
          _this2.updateGraphValuesDragChange(i);
          _this2.setActiveStepClass(i);
        }, null, 0.4 * i);
      });
      this.steps2.forEach(function (pt, i) {
        tl.call(function () {
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this2.target4, {
            transformOrigin: 'center',
            x: pt.x,
            y: pt.y - 6
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this2.target2, {
            transformOrigin: 'center',
            x: pt.x,
            y: pt.y
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this2.target3, {
            transformOrigin: 'center',
            x: pt.x,
            y: pt.y
          });
          if (_this2.steps2.length - 1 === i) {
            _this2.draggableTextVisibleHandler('show');
          }
        }, null, 0.4 * i);
      });
    }
  }, {
    key: "handleImageChange",
    value: function handleImageChange() {
      var imageFull = this.section.find('.graphic-img');
      var svg = this.section.find('.background-graphic-paths-svg');
      if (!imageFull.parent().hasClass('img-swapped')) {
        imageFull.parent().addClass('img-swapped');
        svg.addClass('svg-show');
        this.draggableAnimHandler();
      }
    }
  }, {
    key: "onCalculateBtnClick",
    value: function onCalculateBtnClick() {
      if (typeof this.monthly_processing_volume !== 'undefined' && typeof this.monthly_fees !== 'undefined' && typeof this.savingsCalculations !== 'undefined') {
        this.updateGraphValuesDragChange(this.section.find('.info-bot-wrap-step.active-step').attr('data-step'));
        this.updateSavingsValuesInputChange(this.savingsCalculations);
        this.calculateEffectiveRate();
        this.scrollToResultsMobile();
        this.handleImageChange();
      }
    }
  }, {
    key: "scrollToResultsMobile",
    value: function scrollToResultsMobile() {
      if ((0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
          duration: 1,
          scrollTo: {
            y: this.section.find('.calculator-results-wrap .sekure-col'),
            offsetY: $('header').outerHeight() + 10
          }
        });
      }
    }
  }, {
    key: "calculateEffectiveRate",
    value: function calculateEffectiveRate() {
      var _this3 = this;
      $('.js-calculate-effective-rate-row').each(function (i, e) {
        var row = $(e);
        if (row.hasClass('old-effective-rate')) {
          var value = _this3.monthly_fees / _this3.monthly_processing_volume;
          row.find('.info-row-name-value').attr('title', value + '%').html(value + '%');
        } else {
          var _value = _this3.monthly_fees * 0.9 / _this3.monthly_processing_volume;
          row.find('.info-row-name-value').attr('title', _value + '%').html(_value + '%');
        }
      });
    }
  }, {
    key: "updateSavingsValuesInputChange",
    value: function updateSavingsValuesInputChange(savingsObj) {
      var _this4 = this;
      this.section.find('.sekure-col').find('.info-row-name-value').each(function (i, e) {
        var item = $(e);
        for (var key in savingsObj) {
          if (key === item.attr('data-row-type')) {
            var amount = savingsObj[key];
            var value = _this4.convertNumber(amount, 2, '.', ',');
            item.attr('title', value).html('$' + value);
          }
        }
      });
    }
  }, {
    key: "updateGraphValuesDragChange",
    value: function updateGraphValuesDragChange(step) {
      if (this.savingsCalculations) {
        var amount = this.savingsCalculations.monthly_savings * 12 * parseInt(step);
        this.sekureInfoColTopValue.html('$' + this.convertNumber(amount, 2, '.', ','));
      }
    }
  }, {
    key: "onClickOutsideClose",
    value: function onClickOutsideClose() {
      this.section.find('.opened-calc-js-dropdown').removeClass('opened-calc-js-dropdown');
      this.defocusInputs();
    }
  }, {
    key: "defocusInputs",
    value: function defocusInputs() {
      this.section.find('.calc-value-dropdown-wrap input').blur();
      if (this.inputTimeoutFocus) clearTimeout(this.inputTimeoutFocus);
    }
  }, {
    key: "customSelectChangeHandler",
    value: function customSelectChangeHandler(target, chosenValEl) {
      chosenValEl.attr('title', target.html());
      chosenValEl.html(target.html());
      chosenValEl.attr('data-chosen-val', target.data('val'));
      this.calcCustomDropdownHandler(chosenValEl);
    }
  }, {
    key: "calcCustomDropdownHandler",
    value: function calcCustomDropdownHandler(btn) {
      var _this5 = this;
      // console.log(btn);
      var thisWrap = btn.parents('.calc-value-dropdown-wrap');
      this.section.find('.opened-calc-js-dropdown').not(thisWrap).removeClass('opened-calc-js-dropdown');
      thisWrap.toggleClass('opened-calc-js-dropdown');
      if (thisWrap.find('input').length && thisWrap.hasClass('opened-calc-js-dropdown')) {
        this.inputTimeoutFocus = setTimeout(function () {
          thisWrap.find('input').focus();
        }, 50);
      } else {
        this.defocusInputs();
      }
      if (this.section.find('.opened-calc-js-dropdown').length) {
        $('body').off('mousedown.clickOutsideDropdown').on('mousedown.clickOutsideDropdown', function (e) {
          if (!$(e.target).hasClass('opened-calc-js-dropdown') && !$(e.target).parents('.opened-calc-js-dropdown').length) {
            // console.log('in');
            _this5.section.find('.opened-calc-js-dropdown').removeClass('opened-calc-js-dropdown');
            $('body').off('mousedown.clickOutsideDropdown');
          }
        });
      } else {
        $('body').off('mousedown.clickOutsideDropdown');
      }
    }
  }, {
    key: "setActiveStepClass",
    value: function setActiveStepClass(step) {
      step === 0 ? this.infoTopWrapTitle.html('Today') : this.infoTopWrapTitle.html(step + ' Years Saving');
      this.items.removeClass('active-step');
      this.items.each(function (i, e) {
        if (parseInt($(e).attr('data-step')) === step) {
          $(e).addClass('active-step');
        }
      });
    }
  }, {
    key: "draggableElementsHandler",
    value: function draggableElementsHandler() {
      var _this6 = this;
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.target, {
        x: this.startPoint.x,
        y: this.startPoint.y
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.target2, {
        x: this.start2Point.x,
        y: this.start2Point.y
      });
      var draggable = gsap_Draggable__WEBPACK_IMPORTED_MODULE_2__.Draggable.create(this.target, {
        liveSnap: true,
        snap: {
          points: this.steps1,
          radius: 9999
        },
        onDrag: function onDrag() {
          var data = {
            x: draggable[0].endX,
            y: draggable[0].endY
          };
          var indexOfItem = null;
          _this6.steps1.map(function (e, i) {
            if (e.x === data.x && e.y === data.y) {
              indexOfItem = i;
            }
          });
          _this6.updateGraphValuesDragChange(indexOfItem);
          _this6.setActiveStepClass(indexOfItem);
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this6.target2, {
            transformOrigin: 'center',
            x: _this6.steps2[indexOfItem].x,
            y: _this6.steps2[indexOfItem].y
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this6.target3, {
            transformOrigin: 'center',
            x: _this6.steps2[indexOfItem].x,
            y: _this6.steps2[indexOfItem].y
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this6.target4, {
            transformOrigin: 'center',
            x: _this6.steps2[indexOfItem].x,
            y: _this6.steps2[indexOfItem].y - 6
          });
        },
        onDragStart: function onDragStart() {
          return _this6.draggableTextVisibleHandler('hide');
        },
        onDragEnd: function onDragEnd() {
          return _this6.draggableTextVisibleHandler('show');
        }
      });
      var draggable2 = gsap_Draggable__WEBPACK_IMPORTED_MODULE_2__.Draggable.create(this.target2, {
        liveSnap: true,
        snap: {
          points: this.steps2,
          radius: 9999
        },
        onDrag: function onDrag() {
          var data = {
            x: draggable2[0].endX,
            y: draggable2[0].endY
          };
          var indexOfItem = null;
          _this6.steps2.map(function (e, i) {
            if (e.x === data.x && e.y === data.y) {
              indexOfItem = i;
            }
          });
          _this6.updateGraphValuesDragChange(indexOfItem);
          _this6.setActiveStepClass(indexOfItem);
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this6.target, {
            transformOrigin: 'center',
            x: _this6.steps1[indexOfItem].x,
            y: _this6.steps1[indexOfItem].y
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this6.target3, {
            transformOrigin: 'center',
            x: _this6.steps2[indexOfItem].x,
            y: _this6.steps2[indexOfItem].y
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this6.target4, {
            transformOrigin: 'center',
            x: _this6.steps2[indexOfItem].x,
            y: _this6.steps2[indexOfItem].y - 6
          });
        },
        onDragStart: function onDragStart() {
          return _this6.draggableTextVisibleHandler('hide');
        },
        onDragEnd: function onDragEnd() {
          return _this6.draggableTextVisibleHandler('show');
        }
      });
    }
  }]);
}();
var init = function init() {
  new CalculatorSection();
};

/***/ })

}]);
//# sourceMappingURL=landers_calculator_page_ui.js.map