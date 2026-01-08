"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/landers_slider_controller"],{

/***/ "./assets/js/landers/src/theme/ui/sliderController.js":
/*!************************************************************!*\
  !*** ./assets/js/landers/src/theme/ui/sliderController.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var blaze_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blaze-slider */ "./node_modules/blaze-slider/dist/blaze-slider.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./assets/js/landers/src/theme/utils/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var SliderController = function SliderController(sliderContent) {
  var sliderElements = sliderContent;
  sliderElements.forEach(function (sliderElement) {
    var itemID = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getUUID)();
    var sliderID = sliderElement.setAttribute('id', itemID);

    // console.log(sliderElement, sliderID);

    if (sliderID === null) {
      return;
    }
    sliderElement.querySelectorAll('.slider-control').forEach(function (element) {
      element.setAttribute('data-btn-for', itemID);
    });
    sliderElement.querySelectorAll('li.slide').forEach(function (element) {
      element.setAttribute('data-mh', 'slider-content-' + itemID);
    });
    var el = document.getElementById("".concat(itemID));
    var options = {
      all: {
        loop: true,
        slideGap: '0px',
        enableAutoplay: false,
        autoplayInterval: 3000,
        draggable: true,
        stopAutoplayOnInteraction: true,
        slidesToShow: 1
      }
    };
    if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(sliderElement).data('single-slide') && !jquery__WEBPACK_IMPORTED_MODULE_2___default()(sliderElement).hasClass('multi-image')) {
      var _$$data, _$$data2, _$$data3, _$$data4, _$$data5, _$$data6;
      // console.log(options);
      jquery__WEBPACK_IMPORTED_MODULE_2___default().extend(options, {
        '(max-width: 1024px)': {
          draggable: false,
          slidesToShow: (_$$data = jquery__WEBPACK_IMPORTED_MODULE_2___default()(sliderElement).data('slides-1024')) !== null && _$$data !== void 0 ? _$$data : 5
        },
        '(max-width: 992px)': {
          draggable: false,
          slidesToShow: (_$$data2 = jquery__WEBPACK_IMPORTED_MODULE_2___default()(sliderElement).data('slides-992')) !== null && _$$data2 !== void 0 ? _$$data2 : 4
        },
        '(max-width: 940px)': {
          draggable: false,
          slidesToShow: (_$$data3 = jquery__WEBPACK_IMPORTED_MODULE_2___default()(sliderElement).data('slides-940')) !== null && _$$data3 !== void 0 ? _$$data3 : 3
        },
        '(max-width: 820px)': {
          draggable: false,
          slidesToShow: (_$$data4 = jquery__WEBPACK_IMPORTED_MODULE_2___default()(sliderElement).data('slides-820')) !== null && _$$data4 !== void 0 ? _$$data4 : 2
        },
        '(max-width: 767px)': {
          draggable: false,
          slidesToShow: (_$$data5 = jquery__WEBPACK_IMPORTED_MODULE_2___default()(sliderElement).data('slides-767')) !== null && _$$data5 !== void 0 ? _$$data5 : 1
        },
        '(max-width: 580px)': {
          draggable: true,
          slidesToShow: (_$$data6 = jquery__WEBPACK_IMPORTED_MODULE_2___default()(sliderElement).data('slides-580')) !== null && _$$data6 !== void 0 ? _$$data6 : 1
        }
      });
      // console.log(options);
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(sliderElement).hasClass('multi-image')) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default().extend(options, {
        all: {
          slideGap: '30px',
          enableAutoplay: true,
          slidesToShow: 6
        },
        '(max-width: 768px)': {
          slidesToShow: 3
        },
        '(max-width: 640px)': {
          slidesToShow: 2
        },
        '(max-width: 480px)': {
          slidesToShow: 1
        }
      });
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(sliderElement).hasClass('custom-pagination')) {
      var pagination = setInterval(function () {
        var slides = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.sk-slider.custom-pagination').find('.slide');
        slides.each(function (index) {
          var imageSRC = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).find('.slide-image').data('img-url');
          var output = '<img src="' + imageSRC + '" alt="pagination-img" height="40" width="40"><span class="list-title">' + jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).find('.slide-heading').text() + '</span>';
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('.sk-slider.custom-pagination .blaze-pagination').find('button').each(function (i) {
            var number = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).text()) - 1;
            if (index == number) {
              jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).empty().append(output);
            }
          });
        });

        //clearInterval(pagination);
      }, 50);
    }
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.custom-pagination .blaze-pagination button', function () {
      if (window.innerWidth < 1025) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()([document.documentElement, document.body]).animate({
          scrollTop: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.block--slider-cpg .blaze-track-container').offset().top - jquery__WEBPACK_IMPORTED_MODULE_2___default()("#header").outerHeight()
        }, 300, 'linear');
      }
    });

    // $(".mb-sliderElement").each(function () {

    var slider = new blaze_slider__WEBPACK_IMPORTED_MODULE_0__["default"](el, options);
    if (slider.isStatic) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".blaze-next[data-btn-for=\"".concat(sliderID, "\"]")).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".blaze-prev[data-btn-for=\"".concat(sliderID, "\"]")).prop('disabled', true);
    }
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', ".blaze-next[data-btn-for=\"".concat(sliderID, "\"]"), function (e) {
      e.preventDefault();
      slider.next();
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', ".blaze-prev[data-btn-for=\"".concat(sliderID, "\"]"), function (e) {
      e.preventDefault();
      slider.prev();
    });
    window.addEventListener('resize', function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(sliderElement).hasClass('custom-pagination')) {
        slider.refresh();
      }
      if (slider.isStatic) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".blaze-next[data-btn-for=\"".concat(sliderID, "\"]")).prop('disabled', true);
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".blaze-prev[data-btn-for=\"".concat(sliderID, "\"]")).prop('disabled', true);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".blaze-next[data-btn-for=\"".concat(sliderID, "\"]")).prop('disabled', false);
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".blaze-prev[data-btn-for=\"".concat(sliderID, "\"]")).prop('disabled', false);
      }
    });
    window.addEventListener('keydown', function (event) {
      var key = event.key;
      if (key === 'ArrowRight') {
        slider.next();
      }
      if (key === 'ArrowLeft') {
        slider.prev();
      }
    });
  });
};
var init = function init() {
  var sliders = document.querySelectorAll('.sk-slider');
  SliderController(sliders);
};

/***/ }),

/***/ "./assets/js/landers/src/theme/utils/utils.js":
/*!****************************************************!*\
  !*** ./assets/js/landers/src/theme/utils/utils.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUUID: function() { return /* binding */ getUUID; },
/* harmony export */   ucfirst: function() { return /* binding */ ucfirst; }
/* harmony export */ });
function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
function ucfirst(str, force) {
  str = force ? str.toLowerCase() : str;
  return str.replace(/(\b)([a-zA-Z])/, function (firstLetter) {
    return firstLetter.toUpperCase();
  });
}


/***/ })

}]);
//# sourceMappingURL=landers_slider_controller.js.map