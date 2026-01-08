"use strict";
(self["webpackChunksekure_website"] = self["webpackChunksekure_website"] || []).push([["chunks/article_animations"],{

/***/ "./assets/js/src/theme/animations/article.js":
/*!***************************************************!*\
  !*** ./assets/js/src/theme/animations/article.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper */ "./assets/js/src/theme/helpers/helper.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");




var articleInitSectionAnim = function articleInitSectionAnim() {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.single-article-section').length) return;
  var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.single-article-section');
  var breadcrumbWrap = section.find('.single-article-breadcrumb');
  var articleBody = section.find('.article-body');
  var articleAuthor = section.find('.article-author');
  var relatedArticles = section.find('.related-articles');
  var breadcrumbTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(breadcrumbWrap);
    }
  });
  breadcrumbTl.fromTo(breadcrumbWrap.find('.breadcrumb-list').children(), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: .2
  }, 0);
  breadcrumbTl.fromTo(breadcrumbWrap.find('.current-page-breadcrumb-title, .back-to-all'), {
    y: 15,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    stagger: .2
  }, 0);
  var articleBodyTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(articleBody);
    },
    paused: true
  });
  articleBodyTl.to(articleBody.find('.txt-size-60 .char'), {
    y: 0,
    stagger: .02,
    opacity: 1,
    duration: .4
  }, 0);
  articleBodyTl.fromTo(articleBody.find('.article-meta').children(), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: .1
  }, .2);
  if (articleBody.find('.article-featured-img').length) {
    articleBodyTl.fromTo(articleBody.find('.article-featured-img'), {
      opacity: 0
    }, {
      opacity: 1
    }, .3);
  }
  if (articleBody.find('.photo-credit').length) {
    articleBodyTl.fromTo(articleBody.find('.photo-credit'), {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .4);
  }
  articleBodyTl.fromTo(articleBody.find('.article-share .txt-size-18'), {
    opacity: 0
  }, {
    opacity: 1
  }, .4);
  articleBodyTl.fromTo(articleBody.find('.article-share .social-item'), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: .1
  }, .5);
  if (!(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
    articleBodyTl.fromTo(articleBody.find('.article-aside .anim-translate-y'), {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: .05
    }, .6);
  } else {
    var articleAsideMobileTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
      paused: true
    });
    articleAsideMobileTl.fromTo(articleBody.find('.article-aside .anim-translate-y'), {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: .05
    }, 0);
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
      trigger: articleBody.find('.article-aside'),
      start: '0% 75%',
      end: '+=1%',
      onEnter: function onEnter() {
        return articleAsideMobileTl.timeScale(1).play();
      },
      onLeaveBack: function onLeaveBack() {
        return articleAsideMobileTl.timeScale(2).reverse();
      }
    });
  }
  articleBodyTl.fromTo(articleBody.find('.table-of-contents, .article-text'), {
    opacity: 0
  }, {
    opacity: 1,
    stagger: .2
  }, .6);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
    trigger: articleBody,
    start: '0% 75%',
    end: '+=1%',
    onEnter: function onEnter() {
      return articleBodyTl.timeScale(1).play();
    },
    onLeaveBack: function onLeaveBack() {
      return articleBodyTl.timeScale(2).reverse();
    }
  });
  var articleAuthorTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(articleAuthor);
    },
    paused: true
  });
  articleAuthorTl.fromTo(articleAuthor, {
    opacity: 0
  }, {
    opacity: 1
  }, 0);
  articleAuthorTl.fromTo(articleAuthor.find('.author-image'), {
    scale: 0
  }, {
    scale: 1,
    ease: "elastic.out(0.6, 0.4)",
    duration: 1
  }, .1);
  articleAuthorTl.to(articleAuthor.find('.txt-size-24 .char'), {
    y: 0,
    stagger: .02,
    opacity: 1,
    duration: .4
  }, .2);
  articleAuthorTl.fromTo(articleAuthor.find('.txt-size-18'), {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, .4);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
    trigger: articleAuthor,
    start: '0% 75%',
    end: '+=1%',
    onEnter: function onEnter() {
      return articleAuthorTl.timeScale(1).play();
    },
    onLeaveBack: function onLeaveBack() {
      return articleAuthorTl.timeScale(2).reverse();
    }
  });
  var relatedArticlesTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    onStart: function onStart() {
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.animationStarting)(relatedArticles);
    },
    paused: true
  });
  relatedArticlesTl.to(relatedArticles.find('.txt-size-60 .char'), {
    y: 0,
    stagger: .02,
    opacity: 1,
    duration: .4
  }, 0);
  relatedArticles.find('.related-post-item').each(function (i, e) {
    var item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e);
    relatedArticlesTl.fromTo(item.find('.related-post-item-img'), {
      opacity: 0
    }, {
      opacity: 1
    }, .15);
    relatedArticlesTl.fromTo(item.find('.related-meta').children(), {
      opacity: 0
    }, {
      opacity: 1,
      stagger: .1
    }, .3);
    relatedArticlesTl.to(item.find('.anim-translate-y'), {
      yPercent: 0,
      stagger: .1,
      opacity: 1
    }, .45);
    relatedArticlesTl.fromTo(item.find('.anim-translate-x'), {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      stagger: .2
    }, .6);
  });
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
    trigger: relatedArticles,
    start: '0% 75%',
    end: '+=1%',
    onEnter: function onEnter() {
      return relatedArticlesTl.timeScale(1).play();
    },
    onLeaveBack: function onLeaveBack() {
      return relatedArticlesTl.timeScale(2).reverse();
    }
  });
};
var init = function init() {
  articleInitSectionAnim();
};

/***/ })

}]);
//# sourceMappingURL=article_animations.js.map