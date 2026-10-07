'use client';

import { useEffect, useRef } from 'react'
import BlazeSlider from 'blaze-slider'
import "@/styles/blocks/awards.css";
import Image from 'next/image'

export const Awards = ({block, awards}) => {
	//console.log('Awards BLOCK DATA: ', block)

	const bgColour = block.full_width_with_background == '1' ? 'full-width-bg' : ''
	const imgWrapClass = block.alternative == '1' ? 'img-alt' : ''

  const sliderRef = useRef(null)

  useEffect(() => {
    // Initialize Blaze Slider
    const slider = new BlazeSlider(sliderRef.current, {
      all: {
				slidesPerView: 'auto',
				speed: 800,
				autoplay: false,
				freeMode: {
					enabled: true,
					sticky: true,
					momentum: false,
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<a href="#" class="' + className + '">' + (index + 1) + '</a>'
						);
					},
				},
				grabCursor: true,
      	touchRatio: 1.25,
      },
    })

    // Cleanup
    return () => {
      slider.destroy();
    }
  }, [])

	return (
		<section id={block.section_id} className={`sk-block block--awards awards-slider media-content-block content-block-holder op-0 ov-hidden ${block.section_classes} ${bgColour}`}>
			<div className='container prel'>
				<div className={`media-block media-${block.image_position} row gap-rows`}>
					<div className='txt-content col-sm-12 col-lg-6 animated fadeIn'>
						<div className='content-wrap' dangerouslySetInnerHTML={{__html: block.text_content}}></div>
					</div>

					<div className='col-sm-12 col-lg-6'>
						<div className='slider-wrap'>
							<div className='slider-awards slider-container sk-slider'>
								<div className='slider-element'>
									<div ref={sliderRef} className='blaze-container blaze-slider awards'>
										<div className='blaze-track-container'>
											<div className='blaze-track'>
												{awards.length > 0 && awards.map((element, index) => (
													<div key={index} className='slide'>
														<Image src={element.image.node.sourceUrl.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={element.image.node.altText} width='84' height='72' className='dont-show b-lazy' />
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}