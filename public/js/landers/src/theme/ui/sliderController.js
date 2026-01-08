import BlazeSlider from 'blaze-slider';
import { getUUID } from '../utils/utils';
import $ from 'jquery';

const SliderController = (sliderContent) => {
  const sliderElements = sliderContent;

  sliderElements.forEach((sliderElement) => {
    const itemID = getUUID();
    const sliderID = sliderElement.setAttribute('id', itemID);

    // console.log(sliderElement, sliderID);

    if (sliderID === null) {
      return;
    }

    sliderElement.querySelectorAll('.slider-control').forEach((element) => {
      element.setAttribute('data-btn-for', itemID);
    });

    sliderElement.querySelectorAll('li.slide').forEach((element) => {
      element.setAttribute('data-mh', 'slider-content-' + itemID);
    });

    const el = document.getElementById(`${itemID}`);

    const options = {
      all: {
        loop: true,
        slideGap: '0px',
        enableAutoplay: false,
        autoplayInterval: 3000,
        draggable: true,
        stopAutoplayOnInteraction: true,
        slidesToShow: 1,
      },
    };

    if (!$(sliderElement).data('single-slide') && !$(sliderElement).hasClass('multi-image')) {
      // console.log(options);
      $.extend(options, {
        '(max-width: 1024px)': {
          draggable: false,
          slidesToShow: $(sliderElement).data('slides-1024') ?? 5,
        },
        '(max-width: 992px)': {
          draggable: false,
          slidesToShow: $(sliderElement).data('slides-992') ?? 4,
        },
        '(max-width: 940px)': {
          draggable: false,
          slidesToShow: $(sliderElement).data('slides-940') ?? 3,
        },
        '(max-width: 820px)': {
          draggable: false,
          slidesToShow: $(sliderElement).data('slides-820') ?? 2,
        },
        '(max-width: 767px)': {
          draggable: false,
          slidesToShow: $(sliderElement).data('slides-767') ?? 1,
        },
        '(max-width: 580px)': {
          draggable: true,
          slidesToShow: $(sliderElement).data('slides-580') ?? 1,
        },
      });
      // console.log(options);
    }

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

    if($(sliderElement).hasClass('custom-pagination')) {
      var pagination = setInterval(function(){
        var slides = $('.sk-slider.custom-pagination').find('.slide');
        slides.each(function(index) {
          
          var imageSRC = $(this).find('.slide-image').data('img-url');
          var output = '<img src="' + imageSRC + '" alt="pagination-img" height="40" width="40"><span class="list-title">' + $(this).find('.slide-heading').text() + '</span>';
  
          $('.sk-slider.custom-pagination .blaze-pagination').find('button').each(function(i){
            var number = parseInt($(this).text()) - 1;
            if(index == number){
              $(this).empty().append(output);
            }
          });
        });

        //clearInterval(pagination);
      }, 50);
    }

    $(document).on('click', '.custom-pagination .blaze-pagination button', function(){
      if(window.innerWidth < 1025){
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.block--slider-cpg .blaze-track-container').offset().top - $("#header").outerHeight(),
          }, 300, 'linear',
        );
      }
    });

    // $(".mb-sliderElement").each(function () {

    const slider = new BlazeSlider(el, options);

    if (slider.isStatic) {
      $(`.blaze-next[data-btn-for="${sliderID}"]`).prop('disabled', true);
      $(`.blaze-prev[data-btn-for="${sliderID}"]`).prop('disabled', true);
    }

    $(document).on('click', `.blaze-next[data-btn-for="${sliderID}"]`, function (e) {
      e.preventDefault();
      slider.next();
    });

    $(document).on('click', `.blaze-prev[data-btn-for="${sliderID}"]`, function (e) {
      e.preventDefault();
      slider.prev();
    });

    window.addEventListener('resize', () => {
      if(!$(sliderElement).hasClass('custom-pagination')) {
        slider.refresh();
      }

      if (slider.isStatic) {
        $(`.blaze-next[data-btn-for="${sliderID}"]`).prop('disabled', true);
        $(`.blaze-prev[data-btn-for="${sliderID}"]`).prop('disabled', true);
      } else {
        $(`.blaze-next[data-btn-for="${sliderID}"]`).prop('disabled', false);
        $(`.blaze-prev[data-btn-for="${sliderID}"]`).prop('disabled', false);
      }
    });

    window.addEventListener('keydown', function (event) {
      const key = event.key;
      if (key === 'ArrowRight') {
        slider.next();
      }
      if (key === 'ArrowLeft') {
        slider.prev();
      }
    });
  });
};

export const init = () => {
  const sliders = document.querySelectorAll('.sk-slider');
  SliderController(sliders);
};
