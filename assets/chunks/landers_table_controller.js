"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/landers_table_controller"],{

/***/ "./assets/js/landers/src/theme/ui/responsiveTables.js":
/*!************************************************************!*\
  !*** ./assets/js/landers/src/theme/ui/responsiveTables.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var blaze_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blaze-slider */ "./node_modules/blaze-slider/dist/blaze-slider.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


var MobileTable = function MobileTable(mobileTable) {
  var tables = mobileTable;
  tables.forEach(function (table) {
    var _$$data, _$$data2, _$$data3, _$$data4, _$$data5, _$$data6;
    var tableID = table.getAttribute('id');
    if (tableID === null) {
      return;
    }
    var el = document.querySelector("#".concat(tableID, " .blaze-slider"));
    //const el = $(`#${tableID} .blaze-slider`);

    var options = {
      all: {
        loop: true,
        slideGap: '0px',
        enableAutoplay: false,
        autoplayInterval: 3000,
        draggable: false,
        stopAutoplayOnInteraction: true,
        slidesToShow: 1
      },
      '(max-width: 1024px)': {
        slidesToShow: (_$$data = jquery__WEBPACK_IMPORTED_MODULE_1___default()(table).data('slides-1024')) !== null && _$$data !== void 0 ? _$$data : 5
      },
      '(max-width: 992px)': {
        slidesToShow: (_$$data2 = jquery__WEBPACK_IMPORTED_MODULE_1___default()(table).data('slides-992')) !== null && _$$data2 !== void 0 ? _$$data2 : 4
      },
      '(max-width: 940px)': {
        slidesToShow: (_$$data3 = jquery__WEBPACK_IMPORTED_MODULE_1___default()(table).data('slides-940')) !== null && _$$data3 !== void 0 ? _$$data3 : 3
      },
      '(max-width: 820px)': {
        slidesToShow: (_$$data4 = jquery__WEBPACK_IMPORTED_MODULE_1___default()(table).data('slides-820')) !== null && _$$data4 !== void 0 ? _$$data4 : 2
      },
      '(max-width: 767px)': {
        slidesToShow: (_$$data5 = jquery__WEBPACK_IMPORTED_MODULE_1___default()(table).data('slides-767')) !== null && _$$data5 !== void 0 ? _$$data5 : 1
      },
      '(max-width: 580px)': {
        draggable: true,
        slidesToShow: (_$$data6 = jquery__WEBPACK_IMPORTED_MODULE_1___default()(table).data('slides-580')) !== null && _$$data6 !== void 0 ? _$$data6 : 1
      }
    };
    updateHeaderPosition(jquery__WEBPACK_IMPORTED_MODULE_1___default()("#".concat(tableID)));
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('scroll', function () {
      updateHeaderPosition(jquery__WEBPACK_IMPORTED_MODULE_1___default()("#".concat(tableID)));
      //$('.mt-box-inner .mt-header').css('height', $('.fixed-column-inner .mt-header').outerHeight() + 'px');
    });
    var maxHeight = 0;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.mt-box-inner .mt-header').each(function () {
      var thisH = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).outerHeight(true);
      if (thisH > maxHeight) {
        maxHeight = thisH;
      }
    });
    if (maxHeight > jquery__WEBPACK_IMPORTED_MODULE_1___default()('.fixed-column-inner .mt-header').outerHeight(true)) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.mt-box-inner .mt-header, .fixed-column-inner .mt-header').height(maxHeight);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.mt-box-inner .mt-header, .fixed-column-inner .mt-header').height(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.fixed-column-inner .mt-header').outerHeight(true));
    }
    var maxHeight = 0;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.mt-box-inner .mt-ctn').each(function () {
      var thisH = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).outerHeight(true);
      if (thisH > maxHeight) {
        maxHeight = thisH;
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.mt-box-inner .mt-box, .fixed-column-inner .mt-logo').height(maxHeight);
    var slider = new blaze_slider__WEBPACK_IMPORTED_MODULE_0__["default"](el, options);
    if (slider.isStatic) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".blaze-next[data-btn-for=\"".concat(tableID, "\"]")).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".blaze-prev[data-btn-for=\"".concat(tableID, "\"]")).prop('disabled', true);
    }
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', ".blaze-next[data-btn-for=\"".concat(tableID, "\"]"), function (e) {
      e.preventDefault();
      slider.next();
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', ".blaze-prev[data-btn-for=\"".concat(tableID, "\"]"), function (e) {
      e.preventDefault();
      slider.prev();
    });
    window.addEventListener('resize', function () {
      var header = jquery__WEBPACK_IMPORTED_MODULE_1___default()(table).find('.mt-header');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).removeClass('sticky');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.mt-box-inner .mt-header').css('height', jquery__WEBPACK_IMPORTED_MODULE_1___default()('.fixed-column-inner .mt-header').outerHeight() + 'px');
      if (slider.isStatic) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".blaze-next[data-btn-for=\"".concat(tableID, "\"]")).prop('disabled', true);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".blaze-prev[data-btn-for=\"".concat(tableID, "\"]")).prop('disabled', true);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".blaze-next[data-btn-for=\"".concat(tableID, "\"]")).prop('disabled', false);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".blaze-prev[data-btn-for=\"".concat(tableID, "\"]")).prop('disabled', false);
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
/* harmony default export */ __webpack_exports__["default"] = (MobileTable);
function updateHeaderPosition(el) {
  var elID = jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).attr('id');
  var scroll = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollTop();
  var table = jquery__WEBPACK_IMPORTED_MODULE_1___default()(el);
  var headers = table.find('.mt-header');
  if (headers.length > 0) {
    var boxInner = jquery__WEBPACK_IMPORTED_MODULE_1___default()(table).find('.mt-box-inner').last().offset().top;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(headers).each(function (_, header) {
      var mainHeader = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#header'); // Replace with the selector for your main header
      var headerHeight = mainHeader.outerHeight(true); // Get the height of the main header
      var addedStylesClass = "added-styles-".concat(elID); // Create a unique class for added styles
      var mtHeaderParent = jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).parent();
      var boxes = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mtHeaderParent).find('.mt-box:not(.mt-header)');
      if (boxes.length < 3) {
        return;
      }
      var last_box = jquery__WEBPACK_IMPORTED_MODULE_1___default()(table).find('.mt-box.mt-logo.mt-second').last().offset().top;
      var anchor_top = table.offset().top - jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).height() - headerHeight / 3;
      var anchor_bottom = table.offset().top + table.height() - headerHeight;
      var $tableContainer = jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).closest('.mb-table-container');
      if (scroll >= anchor_top && scroll <= anchor_bottom) {
        var remove = 0;
        if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).parent().hasClass('fixed-column-inner')) {
          remove = 0;
        }
        var lastTop = (scroll - last_box) * -1;
        if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).hasClass(addedStylesClass)) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).addClass(addedStylesClass);
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).addClass('sticky');
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).css({
            top: headerHeight
          });
          jquery__WEBPACK_IMPORTED_MODULE_1___default()($tableContainer).find('.blaze-prev').addClass('sticky');
          jquery__WEBPACK_IMPORTED_MODULE_1___default()($tableContainer).find('.blaze-next').addClass('sticky');
        } else {
          //   // Update the top position of the existing header
          var boxH = jquery__WEBPACK_IMPORTED_MODULE_1___default()(table).find('.mt-box.mt-logo.mt-second').last().height();
          var limit = boxInner - anchor_top + headerHeight;
          if (lastTop < limit) {
            // $(header).removeClass("sticky");
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).css({
              top: -boxH
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()($tableContainer).find('.blaze-prev').removeClass('sticky');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()($tableContainer).find('.blaze-next').removeClass('sticky');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).addClass('sticky');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).css({
              top: headerHeight
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()($tableContainer).find('.blaze-prev').addClass('sticky');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()($tableContainer).find('.blaze-next').addClass('sticky');
          }
        }
      } else {
        // Remove the added styles class and reset the header position
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).removeClass(addedStylesClass);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).removeClass('sticky');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(header).css({
          top: 0
        });
        jquery__WEBPACK_IMPORTED_MODULE_1___default()($tableContainer).find('.blaze-prev').removeClass('sticky');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()($tableContainer).find('.blaze-next').removeClass('sticky');
      }
    });
  }
}
var init = function init() {
  var mobileTable = document.querySelectorAll('.mb-table');
  if (mobileTable.length) {
    MobileTable(mobileTable);
  }
};

/***/ })

}]);
//# sourceMappingURL=landers_table_controller.js.map