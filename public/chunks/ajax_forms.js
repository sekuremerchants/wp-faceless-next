"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/ajax_forms"],{

/***/ "./assets/js/src/theme/utils/ajaxForms.js":
/*!************************************************!*\
  !*** ./assets/js/src/theme/utils/ajaxForms.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AjaxForm: function() { return /* binding */ AjaxForm; },
/* harmony export */   AjaxFormActions: function() { return /* binding */ AjaxFormActions; },
/* harmony export */   init: function() { return /* binding */ init; },
/* harmony export */   onRecaptchaFormSubmit: function() { return /* binding */ onRecaptchaFormSubmit; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
window.recaptchaCallback = function () {
  $('.captcha-hold').removeClass('form-error');
};
var onRecaptchaFormSubmit = function onRecaptchaFormSubmit(token, form, event) {
  // console.log(token, 'token');
  // console.log(form, 'form');
  var data = JSON.stringify(token);
  $.ajax({
    method: 'POST',
    url: _root + 'js/theme/requests/g-recaptcha-verify.json',
    data: data,
    dataType: 'JSON'
  }).done(function (data) {
    try {
      if (data.status) {
        new AjaxForm(form, event);
      } else {
        form.removeClass('form-loading');
      }
    } catch (e) {
      console.error(e);
    }
  });
};
var AjaxForm = /*#__PURE__*/function () {
  function AjaxForm(form, event) {
    _classCallCheck(this, AjaxForm);
    this.form = form;
    this.event = event;
    this.submitForm();
  }
  return _createClass(AjaxForm, [{
    key: "submitForm",
    value: function submitForm() {
      var _this = this;
      var url = this.form.data('action');
      var method = this.form.data('method');
      var data = this.form.serialize();
      $.ajax({
        method: method,
        url: url,
        data: data,
        dataType: 'JSON'
      }).done(function (data) {
        try {
          // console.log(data.status)
          if (data.status) {
            new AjaxFormActions(_this.form, null, data.success).showSuccess();
            setTimeout(function () {
              _this.form.removeClass('form-loading');
              new AjaxFormActions(_this.form, null, null).clearFields();
              $('.user-typing').length ? $('.user-typing').removeClass('user-typing') : null;
              if (data.redirect && data.redirect.length) {
                window.location = data.redirect;
              }
            }, 1000);
          } else {
            new AjaxFormActions(_this.form, data.errors, null).addErrors();
            _this.form.removeClass('form-loading');
            // new AjaxFormActions(this.form, null, null).removeErrorsOnFocus()
          }
        } catch (e) {
          console.error(e);
        }
      }).always(function (data) {
        setTimeout(function () {}, 500);

        // $('.g-recaptcha').length ? grecaptcha.reset() : null
      });
    }
  }]);
}();
var AjaxFormActions = /*#__PURE__*/function () {
  function AjaxFormActions(form, errors, success) {
    _classCallCheck(this, AjaxFormActions);
    this.form = form;
    this.errors = errors;
    this.success = success;
  }
  return _createClass(AjaxFormActions, [{
    key: "clearFields",
    value: function clearFields() {
      try {
        $('.user-typing').removeClass('user-typing');
        this.form.find('input:not([type="hidden"]):not([type="checkbox"]), textarea').val('').blur();
        this.form.find('input[type="checkbox"]').prop('checked', false);
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "addErrors",
    value: function addErrors() {
      var _this2 = this;
      $.each(this.errors, function (key, field) {
        if (key == 'g-recaptcha') {
          _this2.form.find(".".concat(key)).parent().addClass('form-error').find('.captcha-error').html(field);
        } else {
          _this2.form.find("[name='" + key + "']").parent().addClass('form-error');
          _this2.form.find("[name='" + key + "']").val('').parent().attr('data-error-txt', _this2.errors[key]).removeClass('user-typing');
        }
      });
    }
  }, {
    key: "showSuccess",
    value: function showSuccess() {
      var _this3 = this;
      this.form.find('.form-success-msg').html(this.success).addClass('show-success');
      setTimeout(function () {
        _this3.form.find('.form-success-msg').removeClass('show-success');
      }, 5000);
    }
    // removeErrorsOnFocus() {
    //     try {
    //         this.form.on('change focus keydown paste input', 'input, textarea', e =>
    //             $(e.currentTarget).parents('.form-error').removeClass('form-error')
    //         )
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }
  }]);
}();
var init = function init() {
  $('.ajax-form:not(.g-recaptcha-form)').on('submit', function (e) {
    e.preventDefault();
    $(e.currentTarget).find('.form-error').removeClass('form-error');
    $(e.currentTarget).find('.show-file-error').removeClass('show-file-error');
    if ($(e.currentTarget).hasClass('form-loading')) return;
    $(e.currentTarget).addClass('form-loading');
    new AjaxForm($(e.currentTarget), e);
  });
  $('.g-recaptcha-form').on('submit', function (e) {
    e.preventDefault();
    $(e.currentTarget).find('.form-error').removeClass('form-error');
    $(e.currentTarget).find('.show-file-error').removeClass('show-file-error');
    if (typeof grecaptcha === 'undefined' || $(e.currentTarget).hasClass('form-loading')) return;
    $(e.currentTarget).addClass('form-loading');
    grecaptcha.ready(function () {
      grecaptcha.execute(_googleAPIKey, {
        action: $(e.currentTarget).data('recaptcha-action')
      }).then(function (token) {
        onRecaptchaFormSubmit(token, $(e.currentTarget), e);
      });
    });
  });
};

/***/ })

}]);
//# sourceMappingURL=ajax_forms.js.map