import gsap from 'gsap';
import $ from 'jquery';
import { dropdownsHandler, isMobile, isDesktop } from '../helpers/helper';
// import { GSDevTools } from 'gsap/GSDevTools';

// gsap.registerPlugin(GSDevTools)
const updateDropdownPosition = (item) => {
  if (item.length > 0) {
    const scrollTop = $(window).scrollTop();
    const headerToggeled = $('html').hasClass('header-toggled-state');

    // const linkPosition =
    //   $(item).offset().top - scrollTop + $(item).outerHeight(true) - 2;
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

    this.createHeaderLinesTl();
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
        } else {
          this.closeHeaderDropdownsDesktop();
        }
      }
    });

    this.header.on(':focus-within', '.has-dropdown', (e) => {
      if (isDesktop()) {
        e.preventDefault();

        if (!$(e.currentTarget).hasClass('opened-dropdown')) {
          this.headerDropdownHover($(e.currentTarget), 'mouseenter');
          updateDropdownPosition($(e.currentTarget));
        } else {
          this.closeHeaderDropdownsDesktop();
        }
      }
    });

    this.header.on('mouseenter', '.header-logo-link, .nav-extras, .header-link-item.no-dropdown', (e) => {
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

    /*
    this.header.on('mouseleave', () => {
      if (isDesktop()) {
        this.closeHeaderDropdownsDesktop();
      }
    });
    */

    this.header.on('click', '.has-dropdown', (e) => {
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

    // French header has links with no dropdowns
    $('.header-link-item.no-dropdown').on( "mouseenter", function(){
      $('html').removeClass('header-opened-dropdown');
      $('.header-link-item.has-dropdown, .dropdown-item-links').removeClass('opened-dropdown');
    }).on( "mouseleave", function(){});

    var popupRemoveRestaurantIndustry = setInterval(function () {
      if ($('.form-wrap.callback .hbspt-form select[name=industry]').length) {
        $('.form-wrap.callback .hbspt-form select[name=industry] option[value=Restaurant]').remove();
        clearInterval(popupRemoveRestaurantIndustry);
      }
    }, 100);

    // get a free demo form
    var hubspotSubmitFreeDemo = setInterval(function(){
      if ($("button[value='Get a free demo']").length) {
        $("button[value='Get a free demo']").on('click', function () {
          if ($('select[name=industry]').val() != '' && $('input[name=email]').val() != '') {
            if ($('select[name=industry]').val() == 'Restaurant') {
              $(this).parents('.hbspt-form').addClass('restaurant');
            } else {
              $(this).parents('.hbspt-form').addClass('other');
            }
          }
        });
        clearInterval(hubspotSubmitFreeDemo);
      }
    }, 500);

    // Header Get a free demo CTA Hubspot form submission submit message CTA
    /*
    var headerHubspotCTASub = setInterval(function () {
      // check for submission message
      if ($('#header .hbspt-form .submitted-message').length) {
        // open popup and show corresponding form based on industry
        
        $('html')
          .addClass('open-callback-popup-form')
          .addClass('open-popup-form');
        $('.callback-popup-form.nav-default-popup').css('z-index', '99999');
        

        // add open popup buttons to submission message
        if ($('#header .hbspt-form').hasClass('restaurant')) {
          $('.form-wrap.meeting').removeClass('d-none');
          $('#header .hbspt-form .submitted-message').append(
            "<br><a href='#' class='submission-btn callback-popup-btn schedule-meeting-btn btn-default c-blue-1 btn-green-1 section-color-white btn-offset-8 fw-700 mt-2'><span class='btn-bg-el'></span><span class='btn-txt'>Schedule your free demo</span></a>"
          );
        } else if ($('#header .hbspt-form').hasClass('other')) {
          $('.form-wrap.callback').removeClass('d-none');
          $('#header .hbspt-form .submitted-message').append(
            "<br><a href='#' class='submission-btn callback-popup-btn schedule-callback-btn btn-default c-blue-1 btn-green-1 section-color-white btn-offset-8 fw-700 mt-2'><span class='btn-bg-el'></span><span class='btn-txt'>Schedule your free demo</span></a>"
          );
        }
        clearInterval(headerHubspotCTASub);
      }
    }, 500);
    */

    // functionality for post form submission CTAs
    /*
    var headerHubspotFormSubCTAs = setInterval(function(){
      if($('.submission-btn').length) {
        $('.callback-popup-btn').on('click', function(){
          $('html').addClass('open-callback-popup-form').addClass('open-popup-form');
          if($(this).hasClass('schedule-meeting-btn')){
            $('.form-wrap.meeting').removeClass('d-none');
          }
          if($(this).hasClass('schedule-callback-btn')){
            $('.form-wrap.callback').removeClass('d-none');
          }
        });
        clearInterval(headerHubspotFormSubCTAs);
      }
    });
    */

    // header search icon
    /*
    $('.search-icon').on('click', function(){
      // if blog page scroll to filters/search
      if($('body.page-id-3152').length){
        $('html, body').animate({
          scrollTop: $('.blog-filter').offset().top - $('#header').outerHeight(true),
        }, 350, 'linear');
      } else{
        if($('.ajax-search').hasClass('open')){
          if($('.ajax-search').val() == ''){
            $('.ajax-search').removeClass('open');
          } else {
            $('.ajax-search-results').css('top', $('#header').outerHeight(true) + 'px');
            $('.ajax-search-results').addClass('open');
            $('#search-input').val($('.ajax-search').val());
            $('#blog-filter').trigger('submit');
            //$('.ajax-search-results button[type=submit]').click();
          }
        } else {
          $('.ajax-search').addClass('open');
          $('.ajax-search').focus();
        }
      }
    });
    $('.ajax-search-results .popup-close-btn').on('click', function(){
      $('.ajax-search-results, .ajax-search').removeClass('open');
    });
    $(".ajax-search").on('keyup', function(e){ 
      var code = e.key;
      if(code==="Enter"){
        //$('.search-icon').click();
        $('#search-input').val($('.ajax-search').val());
        $('#blog-filter').trigger('submit');
      }
    });
    $('.blog-pagination a').on('click', function(){
      $('.ajax-search-results').animate({
        scrollTop: $('.ajax-search-results').offset().top,
      }, 350, 'linear');
    });
    $('#search-input').on('keyup', function(e){
      var code = e.key;
      if(code==="Enter"){
        $(".ajax-search").val($(this).val());
      }
    });
    */

    // language toggle
    // lang current click functionality
    $('.lang-current').on('click', function (e) {
      e.preventDefault();
      var langCurrent = $(this);
      var toggle = $('#lang_toggle');

      if (langCurrent.hasClass('open')) {
        langCurrent.removeClass('open');
        toggle.css({
          visibility: 'hidden',
          height: '0px',
        });
        toggle.attr('aria-hidden', 'true');
      } else {
        toggle.removeAttr('aria-hidden');
        langCurrent.addClass('open');
        var totalHeight = 0;
        toggle.children().each(function () {
          totalHeight += parseInt(langCurrent.outerHeight(true));
        });
        //console.log(totalHeight);
        toggle.css('height', totalHeight + 'px');
        toggle.css({
          visibility: 'visible',
          height: totalHeight + 'px',
        });
      }
    });

    // close language toggle
    $('body').on('click', function (e) {
      if (!$(e.target).hasClass('lang-current')) {
        $('.lang-current').removeClass('open');
        $('#lang_toggle').css({
            visibility: 'hidden',
            height: '0px',
          })
          .attr('aria-hidden', 'true');
      }
    });

    // mobile menu functionality
    if (window.innerWidth < 1025) {
      var offset = 140;

      if (window.innerWidth < 501) {
        var offset = 500;
      }

      $(document).on('click', '.mobile-menu-btn', function(){
        var logoLink = window.location.origin + '/wp-content/themes/sekure/assets/logo/' + $('html').prop('lang') + '/logo-';

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

      $('.mobile-menu-btn').on('click', function () {
        if (
          $('#header .content-wrap .btn-default.clone').length &&
          $('.cta-parent').length
        ) {
          $('#header .content-wrap .btn-default.clone')
            .appendTo('.cta-parent')
            .removeClass('clone');
          $('#header .content-wrap .dropdown-link-cta.cta-parent').removeClass(
            'cta-parent',
          );
        }

        $(
          '.header-links-wrap, .dropdown-item-wrap, .dropdown-link-wrap',
        ).removeAttr('style');
        $('.dropdown-item-wrap').removeClass('opened');
        $('.links-column').removeClass('open-submenu');
        $('.dropdown-item-links').css({
          opacity: '0',
          visibility: 'hidden',
          height: '0px',
        });
        $('.lang-current').removeClass('open');
        $('#lang_toggle')
          .css({
            visibility: 'hidden',
            height: '0px',
          })
          .attr('aria-hidden', 'true');

        $('.main-header .nav-wrap, .main-header .header-links-wrap').animate(
          {
            scrollTop: $(this).offset().top - 120,
          },
          300,
          'linear',
        );
      });

      $('.header-link-item.has-dropdown').on('click', function () {
        $('.links-column.open-submenu .column-heading').siblings().fadeOut();
        $('.links-column').removeClass('open-submenu');
      });

      $('.column-heading').on('click', function () {
        if ($(this).parent().hasClass('open-submenu')) {
          $(this).parent().removeClass('open-submenu');
          $(this).siblings().fadeOut();
        } else {
          if ($('.links-column.open-submenu').length) {
            $('.links-column.open-submenu .column-heading').siblings().fadeOut();
            $('.links-column.open-submenu').removeClass('open-submenu');
          }
          $(this).parents('.dropdown-item-links').css('height', 'auto');
          $(this).parent().addClass('open-submenu');
          $(this).siblings().fadeIn();
        }
      });

      $('.header-link-item.has-dropdown').on('click', function () {
        if ($(this).parent().hasClass('opened')) {
          // put cta back where it belongs
          if (
            $('#header .content-wrap .btn-default.clone').length &&
            $('.cta-parent').length
          ) {
            $('#header .content-wrap .btn-default.clone')
              .appendTo('.cta-parent')
              .removeClass('clone');
            $('#header .content-wrap .dropdown-link-cta.cta-parent').removeClass(
              'cta-parent',
            );
          }

          // fade in top level links
          $(this).parents().siblings('.dropdown-item-wrap').fadeIn();

          // scroll nav to link
          $('.nav-wrap').animate(
            {
              scrollTop: $(this).offset().top - offset,
            },
            350,
            'linear',
          );
        } else {
          // cta check and move
          if ($(this).parent().find('.dropdown-link-cta').length) {
            var cta = $(this)
              .parent()
              .find('.dropdown-link-cta')
              .find('.btn-default:not(.hs-button)');
            cta.parent().addClass('cta-parent');
            cta.addClass('clone').appendTo('#header .content-wrap');
            //cta.remove();
            //$('.header-links-wrap').css('padding-bottom', cta.outerHeight() + 'px');
          }

          // fade out top level links
          $(this).parents().siblings('.dropdown-item-wrap').fadeOut();

          // scroll nav to link
          $('.nav-wrap').animate(
            {
              scrollTop: $(this).offset().top - offset,
            },
            350,
            'linear',
          );
        }
      });
    }// end of mobile functionality
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
    const minScroll = isDesktop() ? 150 : 50;

    $(window).on('scroll', () => {
      var logoLink = window.location.origin + '/wp-content/themes/sekure/assets/logo/' + $('html').prop('lang') + '/logo-';

      if ($(window).scrollTop() >= minScroll) {
        if (!$('html').hasClass('header-toggled-state')) {
          $('html').addClass('header-toggled-state');
          $('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor.webp').fadeIn(200);
          setTimeout(() => {
            $('html').trigger('headerChanged');
          }, 100);
        }
      } else {
        if ($('html').hasClass('header-toggled-state')) {
          $('html').removeClass('header-toggled-state');
          $('.header-logo').fadeOut(200).prop('src', logoLink + 'white-descriptor-tagline.webp').fadeIn(200);

          setTimeout(() => {
            $('html').trigger('headerChanged');
          }, 355);
        }
      }
    });
  }

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

    gsap.to('.dropdown-item-links', {
      autoAlpha: 0,
      height: 0,
    });
    gsap.to('.dropdown-links-wrap', {
      autoAlpha: 0,
    });

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

    /*
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
    */

    /*
    $(dropdown).on('mouseenter', (event) => {
      if (!$(event.target).hasClass('dropdown-content')) {
        this.closeHeaderDropdownsDesktop();
      }
    });
    $(thisLinks).on('mouseleave', (event) => {
      if (!$(event.target).hasClass('dropdown-content')) {
        this.closeHeaderDropdownsDesktop();
      }
    });
    $(dropdownContent).on('mouseleave', (event) => {
      if (!$(event.target).hasClass('dropdown-content')) {
        this.closeHeaderDropdownsDesktop();
      }
    });
    */

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
