import gsap from 'gsap';
import $ from 'jquery';
import { dropdownsHandler, isMobile, isDesktop } from '../helpers/helper';

const updateDropdownPosition = (item) => {
  if (item.length > 0) {
    const scrollTop = $(window).scrollTop();
    const headerToggeled = $('html').hasClass('header-toggled-state');

    var bottom = $(item).offset().top + $(item).outerHeight(false) - scrollTop;

    let margin = 0;
    const windowWidth = $(window).innerWidth();

    headerToggeled ? '0.9rem' : '1.2rem';

    switch (true) {
      case windowWidth > 1400:
        margin = headerToggeled ? '1rem' : '1.3rem';
        break;

      case windowWidth > 1199:
        margin = headerToggeled ? '0.9rem' : '1.2rem';
        break;
      default:
        margin = headerToggeled ? '0.7rem' : '0.8rem';
        break;
    }

    $(item)
      .parents('.header-links-content-wrap')
      .find('.dropdown-item-links')
      .css({
        top: bottom,
        marginTop: margin,
      });
  }
};

class HeaderFunctionalitiesHandler {
  constructor() {
    this.html = $('html');
    this.header = $('header');

    this.headerMobileBtnLines = $('.mobile-menu-btn .line-el');
    this.headerLinesTl;
    this.borderEl = $('.border-el');
    this.headerLinksWrap = $('.header-links-wrap');

    //this.createHeaderLinesTl();
    this.bind();
    this.headerStateHandler();
  }

  bind() {
    if (isDesktop()) {
      // Initial Position Update
      updateDropdownPosition($('.header-link-item').first());

      // Add Event Listener for Window Resize and Scroll
      $('#header').on('headerChanged', () => {
        updateDropdownPosition($('.header-link-item').first());
      });
      // $(window).on('scroll', updateDropdownPosition);
    }

    this.header.on('mouseenter', '.has-dropdown:not(.opened-dropdown)', (e) => {
      if (isDesktop()) {
        this.headerDropdownHover($(e.currentTarget), 'mouseenter');
        updateDropdownPosition($(e.currentTarget));
      }
    });
    /*
        .on('mouseleave', '.has-dropdown:not(.opened-dropdown)', (e) =>
          this.headerDropdownHover($(e.currentTarget), 'mouseleave'),
        );
        */

    this.header.on('click', '.has-dropdown', (e) => {
      if (isDesktop()) {
        e.preventDefault();

        if (!$(e.currentTarget).hasClass('opened-dropdown')) {
          this.headerDropdownHover($(e.currentTarget), 'mouseenter');
          updateDropdownPosition($(e.currentTarget));
          /*
          $('html, body').css({
            overflow: 'hidden',
            height: '100%'
          });
          */
        } else {
          this.closeHeaderDropdownsDesktop();
        }
      }
    });

    this.header.on(':focus-within', '.has-dropdown', (e) => {
      if (isDesktop()) {
        e.preventDefault();

        if (!$(e.currentTarget).hasClass('opened-dropdown')) {
          // console.log(e);
          this.headerDropdownHover($(e.currentTarget), 'mouseenter');
          updateDropdownPosition($(e.currentTarget));
          /*
          $('html, body').css({
            overflow: 'hidden',
            height: '100%'
          });
          */
        } else {
          this.closeHeaderDropdownsDesktop();
        }
      }
    });

    this.header.on(
      'mouseenter',
      '.header-logo-link, .statement-analysis-btn, .nav-extras',
      (e) => {
        if (isDesktop()) {
          this.closeHeaderDropdownsDesktop();
        }
      },
    );

    this.header.on('keydown', '.has-dropdown', (event) => {
      if (isDesktop()) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (code == 13) {
          event.preventDefault();

          if (!$(event.currentTarget).hasClass('opened-dropdown')) {
            this.headerDropdownHover($(event.currentTarget), 'mouseenter');
            updateDropdownPosition($(event.currentTarget));
          } else {
            this.closeHeaderDropdownsDesktop();
          }
        }
      }
    });

    $(document).on('keydown', (event) => {
      if (isDesktop()) {
        if (event.key == 'Escape') {
          this.closeHeaderDropdownsDesktop();
        }
      }
    });

    this.header.on('mouseleave', () => {
      if (isDesktop()) {
        this.closeHeaderDropdownsDesktop();
      }
    });

    this.header.on('click', '.has-dropdown, .js-header-dropdown-btn', (e) => {
      if (isMobile()) {
        e.preventDefault();
        this.headerDropdownItemMobileHandler(e, $(e.currentTarget));
      }
    });

    $('.mobile-menu-btn').on('click', () => {
      if (isMobile()) {
        this.mobileMenuBtnHandler();
      }
    });

    $('.header-landing .landing-template-btn').on('click', () => {
      if (isMobile()) {
        this.mobileMenuBtnHandler();
      }
    });

    $(document).on('click', '.mobile-menu-btn', function(){
      var lang = $('html').prop('lang');
      if(lang == 'fr-CA'){
        lang = 'fr';
      }
      if(lang == 'es-US'){
        lang = 'es';
      }
      var logoLink = window.location.origin + '/wp-content/themes/sekure/assets/logo/' + lang + '/logo-';

      if($(this).attr('aria-expanded') == 'false'){
        if($('html').hasClass('header-toggled-state')){
          $('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor.webp').fadeIn(200);
        } else {
          $('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor-tagline.webp').fadeIn(200);
        }
      } else {
        if($('html').hasClass('header-toggled-state')){
          $('.header-logo').fadeOut(200).prop('src', logoLink + 'blue-descriptor.webp').fadeIn(200);
        } else {
          $('.header-logo').fadeOut(200).prop('src', logoLink + 'blue-descriptor-tagline.webp').fadeIn(200);
        }
      }
    });
  }

  mobileMenuBtnHandler() {
    if (this.header.hasClass('main-header')) {
      this.html.toggleClass('mobile-menu-opened');
    }

    // this.html.toggleClass('mobile-menu-opened');
    this.html.hasClass('mobile-menu-opened')
      ? this.headerLinesTl.timeScale(1).play()
      : this.headerLinesTl.timeScale(1.25).reverse();

    $('.mobile-menu-btn').attr('aria-expanded', function (_, attr) {
      return !(attr === 'true');
    });
  }

  headerStateHandler() {
    const minScroll = isDesktop() ? 200 : 50;

    $(window).on('scroll', () => {
      var lang = $('html').prop('lang');
      if(lang == 'fr-CA'){
        lang = 'fr';
      }
      if(lang == 'es-US'){
        lang = 'es';
      }
      var logoLink = window.location.origin + '/wp-content/themes/sekure/assets/logo/' + lang + '/logo-';

      if ($(window).scrollTop() >= minScroll) {
        if (!$('html').hasClass('header-toggled-state')) {
          $('html').addClass('header-toggled-state');
          $('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor.webp').fadeIn(200);
        }
      } else {
        if ($('.header[data-header-toggled="1"]').length <= 0) {
          if ($('html').hasClass('header-toggled-state')) {
            $('html').removeClass('header-toggled-state');
            $('.header-logo').fadeOut(200).prop('src', logoLink + 'blue-descriptor-tagline.webp').fadeIn(200);
            setTimeout(() => {
              $('html').trigger('headerChanged');
            }, 355);
          }
        }
      }
    });
  }

  /*
  createHeaderLinesTl() {
    this.headerLinesTl = gsap.timeline({
      paused: true,
    });

    let translateBy = 6;

    this.headerLinesTl.to(
      this.headerMobileBtnLines[0],
      {
        y: translateBy,
        duration: 0.2,
      },
      0,
    );

    this.headerLinesTl.to(
      this.headerMobileBtnLines[1],
      {
        autoAlpha: 0,
        duration: 0.2,
      },
      0,
    );

    this.headerLinesTl.to(
      this.headerMobileBtnLines[2],
      {
        y: -translateBy,
        duration: 0.2,
      },
      0,
    );

    this.headerLinesTl.to(
      this.headerMobileBtnLines[0],
      {
        rotation: -45,
        duration: 0.2,
      },
      0.2,
    );

    this.headerLinesTl.to(
      this.headerMobileBtnLines[2],
      {
        rotation: 45,
        duration: 0.2,
      },
      0.2,
    );
  }
  */

  headerDropdownItemMobileHandler(e, btn) {
    e.stopPropagation();
    e.preventDefault();

    let item = btn.parents('.dropdown-item-wrap');
    let target = item.find('.dropdown-item-links');

    if (gsap.isTweening(target)) return;
    item.toggleClass('opened');
    if (item.hasClass('opened')) {
      gsap.to(target, { autoAlpha: 1, duration: 0.25 });
      dropdownsHandler(target, 'open');
    } else {
      gsap.to(target, { autoAlpha: 0, duration: 0.25 });
      dropdownsHandler(target, 'close');
    }
    // item.hasClass('opened') ? dropdownsHandler(target, 'open') : dropdownsHandler(target, 'close');
  }

  closeHeaderDropdownsDesktop() {
    this.header.find('.opened-dropdown').removeClass('opened-dropdown');
    this.html.removeClass('header-opened-dropdown');
    this.html.trigger('focus');

    // $(window).off('resize', this.resizeHandler);
    // $(window).off('scroll', this.scrollHandler);

    /*
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
    */

    if($('.dropdown-item-links').length){
      gsap.to('.dropdown-item-links', {
        autoAlpha: 0,
        height: 0,
      });
    }
    if($('.dropdown-item-wrap').length) {
      gsap.to('.dropdown-links-wrap', {
        autoAlpha: 0,
      });
    }
    if ($('.header-bg-el').length > 0) {
      gsap.to('.header-bg-el', {
        autoAlpha: 0,
        height: 0,
      });
    }
  }

  headerDropdownHover(item, eventType) {
    let dropdown = item.parent().find('.dropdown-item-links');
    let dropdownContent = item.parent().find('.dropdown-content');
    let dropdowns = this.header.find('.dropdown-item-links');
    let thisLinks = item.parent().find('.dropdown-links-wrap');
    let otherLinks = this.header.find('.dropdown-links-wrap').not(thisLinks);
    let bgMenu = $('.header-bg-el');
    let headerHeight = $('.main-header .content-wrap').outerHeight() / 2;

    if (this.borderEl.length > 0) {
      gsap.set(this.borderEl, {
        width: this.headerLinksWrap.width(),
      });
    }
    gsap.killTweensOf(
      this.header.find('.dropdown-links-wrap, .dropdown-item-links'),
    );

    this.header.find('.opened-dropdown').removeClass('opened-dropdown');

    item.addClass('opened-dropdown');
    item.next().addClass('opened-dropdown');
    this.html.addClass('header-opened-dropdown');

    $('.dropdown-item-links.opened-dropdown').on('mouseleave', (event) => {
      this.closeHeaderDropdownsDesktop();
    });

    if (eventType == 'mouseenter') {
      gsap.set(dropdown, {
        zIndex: 9,
      });
      gsap.set(dropdowns.not(dropdown), {
        zIndex: -1,
      });

      gsap.to(dropdown, {
        autoAlpha: 1,
        height: dropdown.children().outerHeight(true),
      });

      if (bgMenu.length > 0) {
        gsap.to(bgMenu, {
          autoAlpha: 1,
          height: dropdown.children().outerHeight(true) + headerHeight,
        });
      }

      gsap.to(otherLinks, {
        autoAlpha: 0,
      });

      gsap.fromTo(
        thisLinks,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          delay: 0.1,
        },
      );
    }
  }
}

export default HeaderFunctionalitiesHandler;
