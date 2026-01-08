"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/blogs_slider_controller"],{

/***/ "./assets/js/src/theme/ui/blogSliderController.js":
/*!********************************************************!*\
  !*** ./assets/js/src/theme/ui/blogSliderController.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blaze_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blaze-slider */ "./node_modules/blaze-slider/dist/blaze-slider.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./assets/js/src/theme/utils/utils.js");



var SliderController = function SliderController(sliderContent) {
  var sliderElements = sliderContent;
  sliderElements.forEach(function (sliderElement) {
    var itemID = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getUUID)();
    sliderElement.setAttribute('id', itemID);

    //console.log(itemID);
    //console.log(sliderElement);

    if (itemID === null) {
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

    /*
    if (!$(sliderElement).data('single-slide') && !$(sliderElement).hasClass('multi-image')) {
      // console.log(options);
      $.extend(options, {
        '(max-width: 1024px)': {
          draggable: false,
          slidesToShow: $(sliderElement).data('slides-1024') ?? 1,
        },
        '(max-width: 992px)': {
          draggable: false,
          slidesToShow: $(sliderElement).data('slides-992') ?? 1,
        },
        '(max-width: 940px)': {
          draggable: false,
          slidesToShow: $(sliderElement).data('slides-940') ?? 1,
        },
        '(max-width: 820px)': {
          draggable: false,
          slidesToShow: $(sliderElement).data('slides-820') ?? 1,
        },
        '(max-width: 767px)': {
          draggable: true,
          slidesToShow: $(sliderElement).data('slides-767') ?? 1,
        },
        '(max-width: 580px)': {
          draggable: true,
          slidesToShow: $(sliderElement).data('slides-580') ?? 1,
        },
      });
      // console.log(options);
    }
    */

    /*
    if($(sliderElement).hasClass('multi-image')){
      $.extend(options, {
        all: {
          slideGap: '30px',
          enableAutoplay: true,
          slidesToShow: 6,
        },
        '(max-width: 768px)': {
          slidesToShow: 3,
        },
        '(max-width: 640px)': {
          slidesToShow: 2,
        },
        '(max-width: 480px)': {
          slidesToShow: 1,
        },
      });
    }
    */

    /*
    if($(sliderElement).hasClass('custom-pagination')) {
      var pagination = setInterval(function(){
        if($('.blaze-pagination button').length) {
          var slides = $(sliderElement).find('.slide');
          slides.each(function(index) {
            
            var imageSRC = $(this).find('.slide-image').data('img-url');
            var output = '<img src="' + imageSRC + '" alt="pagination-img" height="40" width="40"><span class="list-title">' + $(this).find('.slide-heading').text() + '</span>';
    
            $('.blaze-pagination').find('button').each(function(i){
              var number = parseInt($(this).text()) - 1;
              if(index == number){
                $(this).empty().append(output);
              }
            });
          });
           //clearInterval(pagination);
        }
      }, 1);
       if($('.blaze-pagination button').length && window.innerWidth < 1025) {
        $(document).on('click', '.blaze-pagination button', function(){
          $([document.documentElement, document.body]).animate({
              scrollTop: $('.block--slider-cpg .blaze-track-container').offset().top - $("#header").outerHeight(),
            }, 300, 'linear',
          );
        });
      }
    }
    */

    var slider = new blaze_slider__WEBPACK_IMPORTED_MODULE_1__["default"](el, options);
    if (slider.isStatic) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".blaze-next[data-btn-for=\"".concat(itemID, "\"]")).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".blaze-prev[data-btn-for=\"".concat(itemID, "\"]")).prop('disabled', true);
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".blaze-next[data-btn-for=\"".concat(itemID, "\"]")).on('click', function (e) {
      e.preventDefault();
      slider.next();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".blaze-prev[data-btn-for=\"".concat(itemID, "\"]")).on('click', function (e) {
      e.preventDefault();
      slider.prev();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
      if (slider.isStatic) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".blaze-next[data-btn-for=\"".concat(itemID, "\"]")).prop('disabled', true);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".blaze-prev[data-btn-for=\"".concat(itemID, "\"]")).prop('disabled', true);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".blaze-next[data-btn-for=\"".concat(itemID, "\"]")).prop('disabled', false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".blaze-prev[data-btn-for=\"".concat(itemID, "\"]")).prop('disabled', false);
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('keydown', function (event) {
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

/***/ "./assets/js/src/theme/utils/utils.js":
/*!********************************************!*\
  !*** ./assets/js/src/theme/utils/utils.js ***!
  \********************************************/
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
//# sourceMappingURL=blogs_slider_controller.js.map