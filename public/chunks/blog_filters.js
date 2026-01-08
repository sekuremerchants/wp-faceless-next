"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/blog_filters"],{

/***/ "./assets/js/src/theme/utils/blogFilter.js":
/*!*************************************************!*\
  !*** ./assets/js/src/theme/utils/blogFilter.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _createChoices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createChoices.js */ "./assets/js/src/theme/utils/createChoices.js");
/* harmony import */ var _helpers_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper.js */ "./assets/js/src/theme/helpers/helper.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


//import { ScrollTrigger } from 'gsap/all';

function showError() {
  $('.blog-loading').addClass('d-none');
  var appendAlert = function appendAlert(message, type) {
    var wrapper = document.createElement('div');
    wrapper.classList.add('col-sm-12', 'py-5', 'my-5');
    wrapper.innerHTML = ["<div class=\"alert alert-".concat(type, " alert-dismissible\" role=\"alert\">"), "   <div class=\"fs-6\">".concat(message, "</div>"), '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', '</div>'].join('');
    $('#articles-wrapper').html(wrapper);
  };
  appendAlert('Something went wrong. Please reload the page and try again.', 'danger');
}
var BlogFilter = /*#__PURE__*/function () {
  function BlogFilter() {
    _classCallCheck(this, BlogFilter);
    this.bind();
    this.showHideFilter();
    this.singleArticle();
    var buttonReset = $('<a class=btn-filter-rst href=#>Clear all filters</a>').addClass('trigger-reset');
    var listChoices = $('.blog-filter .filter-checkboxes');
    var btnExists = $(listChoices).find('.btn-filter-rst');
    if (btnExists) {
      btnExists.remove();
    }
    var $category = $('[name=category\\[\\]]');
    var $businessType = $('[name=business-type\\[\\]]');
    var $contentType = $('[name=content-type\\[\\]]');
    if ($category.length > 0 && $businessType.length > 0 && $contentType.length > 0) {
      if ($($category).val().length > 0 || $($businessType).val().length > 0 || $($contentType).val().length > 0) {
        $(listChoices).append(buttonReset);
        var rstBtn = $(listChoices).find('.btn-filter-rst');
        $(rstBtn).on('click', function (e) {
          e.preventDefault();
          $(rstBtn).remove();
          _createChoices_js__WEBPACK_IMPORTED_MODULE_0__.choices.forEach(function (choice) {
            choice.clearStore();
          });
          // $("#search-input").val("");

          $('#blog-filter').trigger('submit');
        });
      }
    }
  }
  return _createClass(BlogFilter, [{
    key: "bind",
    value: function bind() {
      var _this = this;
      // $(".trigger-reset").on("click", () => {
      //   choices.forEach((choice) => {
      //     choice.clearStore();
      //   });
      //   // $("#search-input").val("");

      //   $("#blog-filter").trigger("submit");
      // });

      $('.category-filter').on('change', function (e) {
        _this.blogFilter(e);
      });
      $('#blog-filter').on('submit', function (e) {
        _this.blogFilter(e);
      });
      $('.filter-clear-all').on('click', function (e) {
        $(e.currentTarget).parent().find('.blog-filter-check').prop('checked', false);
        _this.blogFilter();
      });
      $('body').on('click', '.blog-pagination a', function (e) {
        var clicked = $(e.currentTarget);
        e.preventDefault();
        _this.blogPaginationFilter(clicked);
      });
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(target) {
      //ScrollTrigger.refresh();
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(window, {
        duration: 1,
        scrollTo: $(target).offset().top - $('#header').outerHeight()
      });
    }

    // blogFilter(e) {
    //   this.resetPagination();
    //   let formAction = $("#blog-filter").attr("action"),
    //     form = $("#blog-filter"),
    //     data = form.serialize();

    //   $.ajax({
    //     url: formAction,
    //     type: "POST",
    //     data: data,
    //     async: false,
    //     cache: false,
    //   })
    //     .done((response) => {
    //       $("#articles-wrapper").html(response);
    //       this.scrollTo(".blog-filter");
    //       localStorage.clear();
    //     })
    //     .fail(() =>  {});
    // }

    // blogSearch(e) {
    //   console.log("test");

    //   this.resetPagination();
    //   let formAction = $("#searchform").attr("action"),
    //     form = $("#searchform"),
    //     data = form.serialize();
    // }

    //
  }, {
    key: "ajaxContent",
    value: function () {
      var _ajaxContent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(formAction, data, isValid, form) {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // console.log();

              $('.btn-filter-rst').remove();
              $(form).find(':input').each(function (_, input) {
                // console.log(input);
              });
              $.ajax({
                url: formAction,
                type: 'POST',
                data: data
              }).done(function (response) {
                $('#articles-wrapper').html(response);
                $('.blog-loading').addClass('d-none');
                _this2.updateFilters();
                if (!isValid && !data) {
                  history.pushState(null, null, "/blog");
                } else if (data) {
                  history.pushState(null, null, "/blog");
                  history.pushState(null, null, "/blog?".concat(data));
                }

                // console.log(data);
                // this.scrollTo(".blog-filter");
              }).fail(function (e) {
                console.log(e);
                showError();
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function ajaxContent(_x, _x2, _x3, _x4) {
        return _ajaxContent.apply(this, arguments);
      }
      return ajaxContent;
    }()
  }, {
    key: "blogFilter",
    value: function () {
      var _blogFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
        var _this3 = this;
        var formAction, form, formz, data, pageNum, isValid;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              $('.blog-loading.d-none').removeClass('d-none');
              $('#articles-wrapper .blog-grid').remove();
              $('#articles-wrapper .blog-pagination').remove();
              e.preventDefault();
              this.resetPagination();
              formAction = $('#blog-filter').attr('action'), form = $('#blog-filter'), formz = form.find(':not([name=search_terms])'), data = formz.serialize(), pageNum = $('.blog-pagination a.active').data('page');
              if (!pageNum) {
                pageNum = 1;
              }
              isValid = !$('#blog-filter :input').filter(function () {
                return _this3.value;
              }).length;
              if (!isValid) {
                data = 'filter%5Bbusiness-type%5D=&s=';
              }
              data = data + '&page=' + pageNum;
              this.ajaxContent(formAction, data, isValid, form);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function blogFilter(_x5) {
        return _blogFilter.apply(this, arguments);
      }
      return blogFilter;
    }()
  }, {
    key: "blogPaginationFilter",
    value: function () {
      var _blogPaginationFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(clicked) {
        var _this4 = this;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.scrollTo('.blog-filter');
              setTimeout(function () {
                $('.blog-loading.d-none').removeClass('d-none');
                $('#articles-wrapper .blog-grid').remove();
                $('#articles-wrapper .blog-pagination').remove();
                var formAction = $('#blog-filter').attr('action'),
                  form = $('#blog-filter'),
                  dataVal = clicked.data('page'),
                  data = form.serialize();
                data = data + '&page=' + dataVal;
                var isValid = !!$('#blog-filter :input').filter(function () {
                  return _this4.value;
                }).length;
                _this4.ajaxContent(formAction, data, isValid, form);
              }, 800);
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function blogPaginationFilter(_x6) {
        return _blogPaginationFilter.apply(this, arguments);
      }
      return blogPaginationFilter;
    }()
  }, {
    key: "showError",
    value: function showError() {
      $('.blog-loading').addClass('d-none');
      var appendAlert = function appendAlert(message, type) {
        var wrapper = document.createElement('div');
        wrapper.classList.add('col-sm-12', 'py-5', 'my-5');
        wrapper.innerHTML = ["<div class=\"alert alert-".concat(type, " alert-dismissible\" role=\"alert\">"), "   <div class=\"fs-6\">".concat(message, "</div>"), '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', '</div>'].join('');
        $('#articles-wrapper').html(wrapper);
      };
      appendAlert('Something went wrong. Please reload the page and try again.', 'danger');
    }
  }, {
    key: "resetFilters",
    value: function resetFilters() {
      var _this5 = this;
      $('.read-more-button').on('click', function () {
        $('#blog-filter option').prop('selected', function () {
          return _this5.defaultSelected;
        });
      });
    }
  }, {
    key: "updateFilters",
    value: function () {
      var _updateFilters = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var cat, bType, cType, $category, $businessType, $contentType, $catVal, $bTypeVal, $cTypeVal, selectedVal, $search, buttonReset, listChoices, btnExists, rstBtn;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              // let cat = $("#filters-category-options").detach(),
              //   bType = $("#filters-business-type-options").detach(),
              //   cType = $("#filters-content-type-options").detach();
              cat = $('#filters-category-options').clone(), bType = $('#filters-business-type-options').clone(), cType = $('#filters-content-type-options').clone();
              $category = $('[name=category\\[\\]]');
              $businessType = $('[name=business-type\\[\\]]');
              $contentType = $('[name=content-type\\[\\]]');
              $catVal = $($category).val();
              $bTypeVal = $($businessType).val();
              $cTypeVal = $($contentType).val();
              selectedVal = [];
              _createChoices_js__WEBPACK_IMPORTED_MODULE_0__.choices.forEach(function (choice, _) {
                selectedVal[_] = choice.getValue(true);
                choice.destroy();
              });
              $('#filters-category-options').remove(), $('#filters-business-type-options').remove(), $('#filters-content-type-options').remove();
              if ($($catVal).length == 0) {
                $($category).html($(cat).html());
              }

              // $($businessType).val().length;
              if ($($bTypeVal).length == 0) {
                $($businessType).html($(bType).html());
              }

              // $($contentType).val().length;
              if ($($cTypeVal).length == 0) {
                $($contentType).html($(cType).html());
              }
              $search = $('[name=search]');
              console.log(selectedVal);
              (0,_createChoices_js__WEBPACK_IMPORTED_MODULE_0__.createChoices)(selectedVal);

              // this.filterRemover($category, 0);
              buttonReset = $('<a class=btn-filter-rst href=#>Clear all filters</a>').addClass('trigger-reset');
              listChoices = $('.blog-filter .filter-checkboxes');
              btnExists = $(listChoices).find('.btn-filter-rst');
              if (btnExists) {
                btnExists.remove();
              }
              if ($($category).val().length > 0 || $($businessType).val().length > 0 || $($contentType).val().length > 0 || $($search).val().length > 0) {
                $(listChoices).append(buttonReset);
                rstBtn = $(listChoices).find('.btn-filter-rst');
                if ($($category).val().length == 0 && $($businessType).val().length == 0 && $($contentType).val().length == 0 && $($search).val().length > 0) {
                  $('.filter-checkboxes.row').addClass('w-rst-btn');
                }
                $(rstBtn).on('click', function (e) {
                  e.preventDefault();
                  $(rstBtn).remove();
                  $('.filter-checkboxes.row').removeClass('w-rst-btn');
                  _createChoices_js__WEBPACK_IMPORTED_MODULE_0__.choices.forEach(function (choice) {
                    choice.clearStore();
                  });
                  $('#search-input').val('');
                  $('#blog-filter').trigger('submit');
                });
              }
            case 21:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function updateFilters() {
        return _updateFilters.apply(this, arguments);
      }
      return updateFilters;
    }()
  }, {
    key: "filterRemover",
    value: function filterRemover($field, $index) {
      var buttonReset = $('<a class=btn-filter-rst href=#>Remove filter</a>').addClass('trigger-reset');
      var listChoices = $field.closest('.select-wrap');
      var btnExists = $(listChoices).find('.btn-filter-rst');
      if (btnExists) {
        btnExists.remove();
      }
      var $search = $('[name=search]');
      var $category = $('[name=category\\[\\]]');
      var $businessType = $('[name=business-type\\[\\]]');
      var $contentType = $('[name=content-type\\[\\]]');
      if ($($field).val().length > 0) {
        $(listChoices).append(buttonReset);
        if ($($category).val().length == 0 && $($businessType).val().length == 0 && $($contentType).val().length == 0 && $($search).val().length > 0) {
          $('.filter-checkboxes.row').addClass('w-rst-btn');
        }
        var rstBtn = $(listChoices).find('.btn-filter-rst');
        $(rstBtn).on('click', function (e) {
          e.preventDefault();
          $(rstBtn).remove();
          $('.filter-checkboxes.row').removeClass('w-rst-btn');
          _createChoices_js__WEBPACK_IMPORTED_MODULE_0__.choices[$index].removeActiveItems();
          $('#search-input').val('');
          $('#blog-filter').trigger('submit');
        });
      }
    }
  }, {
    key: "resetPagination",
    value: function resetPagination() {
      var paginationLinks = $($('body').find('.blog-pagination')).find('a');
      $(paginationLinks).eq(0).addClass('active').siblings().removeClass('active');
    }
  }, {
    key: "showHideFilter",
    value: function showHideFilter() {
      $('#show-filters').on('click', function (e) {
        if ($('.filter-checkboxes').hasClass('opened')) {
          $('.filter-checkboxes').slideUp();
          $('.filter-checkboxes').removeClass('opened');
          $(e.currentTarget).removeClass('active');
        } else {
          $('.filter-checkboxes').slideDown();
          $('.filter-checkboxes').addClass('opened');
          $(e.currentTarget).addClass('active');
        }
      });
    }
  }, {
    key: "singleArticle",
    value: function singleArticle() {
      var _this6 = this;
      $('.anchor-link').on('click', function (e) {
        if ((0,_helpers_helper_js__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
          var linkDataValue = $(e.currentTarget).data('scroll-section-target-id');
          var targetElement = $("[data-link-scroll-target-section-id=\"".concat(linkDataValue, "\"]"))[0];

          // Adjust the scroll position to be 50 pixels before the target element
          var adjustedTopPosition = $(targetElement).offset().top - 100;
          if (window.innerWidth > 600 && window.innerWidth < 1024) {
            adjustedTopPosition = adjustedTopPosition - 50;
          }
          $('html, body').animate({
            scrollTop: adjustedTopPosition
          }, 100); // 500ms animation duration
        } else {
          var _linkDataValue = $(e.currentTarget).data('scroll-section-target-id');
          // let headingDataAttr = `data-link-scroll-target-section-id="${linkDataValue}"`;
          // console.log(headingDataAttr);
          _this6.scrollTo($("[data-link-scroll-target-section-id=\"".concat(_linkDataValue, "\"]"))[0]);
        }
      });
    }
  }]);
}();
var init = function init() {
  new BlogFilter();
  (0,_createChoices_js__WEBPACK_IMPORTED_MODULE_0__.createChoices)();
};

/***/ }),

/***/ "./assets/js/src/theme/utils/createChoices.js":
/*!****************************************************!*\
  !*** ./assets/js/src/theme/utils/createChoices.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   choices: function() { return /* binding */ choices; },
/* harmony export */   createChoices: function() { return /* binding */ createChoices; }
/* harmony export */ });
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.mjs");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var choices = [];
function createChoices() {
  var selectedVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var options = {
    silent: false,
    renderChoiceLimit: -1,
    maxItemCount: -1,
    addItems: true,
    addItemFilter: false,
    removeItems: true,
    removeItemButton: true,
    editItems: false,
    allowHTML: false,
    duplicateItemsAllowed: false,
    delimiter: ',',
    paste: false,
    searchEnabled: false,
    searchChoices: false,
    searchFields: ['value'],
    position: 'top',
    resetScrollPosition: true,
    shouldSort: true,
    shouldSortItems: true,
    placeholder: true,
    placeholderValue: null,
    searchPlaceholderValue: null,
    prependValue: null,
    appendValue: null,
    renderSelectedChoices: 'auto',
    loadingText: 'Loading...',
    noResultsText: 'No results found',
    noChoicesText: 'No choices to choose from',
    itemSelectText: 'Press to select',
    uniqueItemText: 'Only unique values can be added',
    customAddItemText: 'Only values matching specific conditions can be added',
    // addItemText: (value) => {
    //   return `Press Enter to add <b>"${value}"</b>`;
    // },
    // maxItemText: (maxItemCount) => {
    //   return `Only ${maxItemCount} values can be added`;
    // },
    // valueComparer: (value1, value2) => {
    //   return value1 === value2;
    // },
    classNames: {
      containerOuter: 'choices',
      containerInner: 'choices__inner',
      input: 'choices__input',
      inputCloned: 'choices__input--cloned',
      list: 'choices__list',
      listItems: 'choices__list--multiple',
      listSingle: 'choices__list--single',
      listDropdown: 'choices__list--dropdown',
      item: 'choices__item',
      itemSelectable: 'choices__item--selectable',
      itemDisabled: 'choices__item--disabled',
      itemChoice: 'choices__item--choice',
      placeholder: 'choices__placeholder',
      group: 'choices__group',
      groupHeading: 'choices__heading',
      button: 'choices__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-choices'
    },
    fuseOptions: {
      includeScore: false
    },
    labelId: ''
  };
  var jsChoices = $('.js-choice');
  jsChoices.each(function (index, item) {
    options = _objectSpread(_objectSpread({}, options), {}, {
      placeholderValue: $(item).attr('placeholder') ? $(item).attr('placeholder') : null,
      callbackOnInit: null,
      callbackOnCreateTemplates: null
    });
    choices[index] = new choices_js__WEBPACK_IMPORTED_MODULE_0__["default"](item, options);
    choices[index].passedElement.element.addEventListener('highlightItem', function (event) {
      $(choices[index].containerOuter.element).find('.choices__list.choices__list--dropdown').removeClass('show');
      choices[index].containerOuter.element.classList.remove('element-triggered');
    });
    $('.choices__input[role=textbox]').each(function (_, item) {
      $(item).removeAttr('role');
    });
    $(choices[index].containerOuter.element).find('.choices__list.choices__list--dropdown').addClass('hide');
    choices[index].containerOuter.element.addEventListener('hideDropdown', function (event) {
      $(choices[index].containerOuter.element).find('.choices__list.choices__list--dropdown').removeClass('show');
      choices[index].containerOuter.element.classList.remove('element-triggered');
    });
    choices[index].containerOuter.element.addEventListener('click', function (event) {
      event.preventDefault();
      if (event.target.tagName == 'input' || event.target.tagName == 'INPUT') {
        if (choices[index].containerOuter.element.classList.contains('element-triggered')) {
          choices[index].containerOuter.element.classList.remove('element-triggered');
          choices[index].hideDropdown();
          $(choices[index].containerOuter.element).find('.choices__list.choices__list--dropdown').removeClass('show');
        } else {
          choices[index].containerOuter.element.classList.add('element-triggered');
          $(choices[index].containerOuter.element).find('.choices__list.choices__list--dropdown').addClass('show');
          choices[index].showDropdown(); // Show the dropdown if it's closed
        }
      } else {
        $(choices[index].containerOuter.element).find('.choices__list.choices__list--dropdown').removeClass('show');
        choices[index].hideDropdown();
        event.stopPropagation();
      }
    });
    if (selectedVal) {
      choices[index].setChoiceByValue(selectedVal[index]);
    }
  });
  // const choices = new Choices(".js-choice", options);

  var toolbox = $('.choices__list.choices__list--dropdown');
}

/***/ })

}]);
//# sourceMappingURL=blog_filters.js.map