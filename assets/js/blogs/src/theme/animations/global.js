import gsap from 'gsap';
import { animationStarting, isMobile, getTotalHeight } from '../helpers/helper';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
// import lottie from 'lottie-web';

import { Rive, RuntimeLoader, riveWASMResource } from '@rive-app/canvas-single';
RuntimeLoader.setWasmUrl(riveWASMResource);

gsap.registerPlugin(DrawSVGPlugin);

const footerDesktopAnim = () => {
  const footer = $('#footer');

  const tl = gsap.timeline({
    paused: true,
    onStart: () => animationStarting(footer),
  });

  const footerLogoLink = footer.find('.footer-logo-link');
  const footerInfoColChildren = footer.find('.footer-info-col').children();
  const footerLinksHoldChildren = footer.find('.footer-links-hold').children();
  const seperatedLinksWrap = footer.find('.seperated-links-wrap');
  const reviewsWrapTitle = footer.find('.reviews-wrap .reviews-wrap-title');
  const reviewItems = footer.find('.reviews-wrap .review-item');
  const associationsWrapTitle = footer.find(
    '.associations-wrap .associations-wrap-title',
  );
  const associationsItems = footer.find(
    '.associations-wrap .associations-item',
  );
  const copyrightTxt = footer.find('.copyright-txt');
  const txtPagesListChildren = footer.find('.txt-pages-list').children();
  const siteByLink = footer.find('.site-by-link');

  if (footerLogoLink.length && footerInfoColChildren.length) {
    tl.fromTo(
      [footerLogoLink, footerInfoColChildren],
      { opacity: 0 },
      { opacity: 1, stagger: 0.1 },
      0,
    );
  }

  if (footerLinksHoldChildren.length && seperatedLinksWrap.length) {
    tl.fromTo(
      [footerLinksHoldChildren, seperatedLinksWrap],
      { opacity: 0 },
      { opacity: 1, stagger: 0.1 },
      0.3,
    );
  }

  if (reviewsWrapTitle.length) {
    tl.fromTo(reviewsWrapTitle, { opacity: 0 }, { opacity: 1 }, 0.6);
  }

  if (reviewItems.length) {
    tl.fromTo(reviewItems, { opacity: 0 }, { opacity: 1, stagger: 0.1 }, 0.9);
  }

  if (associationsWrapTitle.length) {
    tl.fromTo(associationsWrapTitle, { opacity: 0 }, { opacity: 1 }, 0.6);
  }

  if (associationsItems.length) {
    tl.fromTo(
      associationsItems,
      { opacity: 0 },
      { opacity: 1, stagger: 0.1 },
      0.9,
    );
  }

  if (copyrightTxt.length && txtPagesListChildren.length && siteByLink.length) {
    tl.fromTo(
      [copyrightTxt, txtPagesListChildren, siteByLink],
      { opacity: 0 },
      { opacity: 1, stagger: 0.1 },
      1.2,
    );
  }

  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -25% 0px',
  };

  const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!footer.hasClass('animated-in')) {
          tl.timeScale(1).play();
          footer.addClass('animated-in');
        }
      } else {
        if (entry.boundingClientRect.y > 0) {
          tl.timeScale(3).reverse();
          footer.removeClass('animated-in');
        }
      }
    });
  }, observerOptions);

  Observer.observe(footer[0]);
};

const footerMobileAnim = () => {
  const footer = $('#footer');

  const tl = gsap.timeline({
    paused: true,
    onStart: () => animationStarting(footer),
  });

  const footerLogoLink = footer.find('.footer-logo-link');
  const footerLinksColChildren = footer.find('.footer-links-col').children();
  const reviewsWrapTitle = footer.find('.reviews-wrap .reviews-wrap-title');
  const reviewItems = footer.find('.reviews-wrap .review-item');
  const associationsWrapTitle = footer.find(
    '.associations-wrap .associations-wrap-title',
  );
  const associationsItems = footer.find(
    '.associations-wrap .associations-item',
  );
  const footerMobileWrapChildren = footer
    .find('.footer-mobile-wrap')
    .children();
  const txtPagesListChildren = footer.find('.txt-pages-list').children();
  const copyrightTxt = footer.find('.copyright-txt');
  const siteByLink = footer.find('.site-by-link');

  if (footerLogoLink.length && footerLinksColChildren.length) {
    tl.fromTo(
      [footerLogoLink, footerLinksColChildren],
      { opacity: 0 },
      { opacity: 1, stagger: 0.1 },
      0,
    );
  }

  if (reviewsWrapTitle.length) {
    tl.fromTo(reviewsWrapTitle, { opacity: 0 }, { opacity: 1 }, 0.3);
  }

  if (reviewItems.length) {
    tl.fromTo(reviewItems, { opacity: 0 }, { opacity: 1, stagger: 0.1 }, 0.6);
  }

  if (associationsWrapTitle.length) {
    tl.fromTo(associationsWrapTitle, { opacity: 0 }, { opacity: 1 }, 0.3);
  }

  if (associationsItems.length) {
    tl.fromTo(
      associationsItems,
      { opacity: 0 },
      { opacity: 1, stagger: 0.1 },
      0.6,
    );
  }

  if (footerMobileWrapChildren.length) {
    tl.fromTo(footerMobileWrapChildren, { opacity: 0 }, { opacity: 1 }, 0.9);
  }

  if (txtPagesListChildren.length && copyrightTxt.length && siteByLink.length) {
    tl.fromTo(
      [txtPagesListChildren, copyrightTxt, siteByLink],
      { opacity: 0 },
      { opacity: 1, stagger: 0.1 },
      1.2,
    );
  }

  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -25% 0px',
  };

  const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!footer.hasClass('animated-in')) {
          tl.timeScale(1).play();
          footer.addClass('animated-in');
        }
      } else {
        if (entry.boundingClientRect.y > 0) {
          tl.timeScale(3).reverse();
          footer.removeClass('animated-in');
        }
      }
    });
  }, observerOptions);

  Observer.observe(footer[0]);
};

export const init = () => {
  if (!isMobile()) {
    footerDesktopAnim();
  } else {
    footerMobileAnim();
  }
};
