import gsap from 'gsap';
import { animationStarting, isMobile } from '../helpers/helper';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import lottie from 'lottie-web';

//import { Rive, RuntimeLoader, riveWASMResource } from '@rive-app/canvas-single';
//RuntimeLoader.setWasmUrl(riveWASMResource);

gsap.registerPlugin(DrawSVGPlugin);

const headerLottieAnim = () => {
  // if (!IsSafari()) {
  let containers = $('.lottie-anim-logo');
  if (!$('.header-logo-link').hasClass('lottie-anim-init')) {
    $('.header-logo-link').addClass('lottie-anim-init');
    containers.each((i, e) => {
      let anim = lottie.loadAnimation({
        container: e, // the dom element that will contain the animation
        renderer: 'canvas',
        autoplay: false,
        loop: false,
        name: $(e).attr('data-lottie-anim-name'),
        path: $(e).attr('data-url'), // the path to the animation json
      });
      anim.addEventListener('complete', () =>
        setTimeout(() => anim.goToAndPlay(0), 5000),
      );
      $(window).on('playLogoAnim', () => anim.play());
    });
  }

  // }
};

const headerAnim = () => {
  const header = $('#header');

  const tl = gsap.timeline({
    onStart: () => animationStarting(header),
    paused: true,
    onComplete: () => {
      setTimeout(() => $(window).trigger('playLogoAnim'), 1000);
    },
  });

  if (!isMobile()) {
    const headerLogoLink = header.find('.header-logo-link');

    if (
      headerLogoLink.length
    ) {
      tl.fromTo(
        [headerLogoLink],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.1,
        },
      );
    }
  } else {
    const mobileElements = header.find('.header-logo-link, .mobile-menu-btn');

    if (mobileElements.length) {
      tl.fromTo(
        mobileElements,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.1,
        },
      );
    }
  }

  $(window).on('headerAnimPlay', () => tl.play(0));

  if ($('.hero-section').length) return;
  $(window).trigger('headerAnimPlay');
};

export const init = () => {
  headerLottieAnim();
  headerAnim();
};
