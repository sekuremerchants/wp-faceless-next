'use client';

import { useEffect, useRef } from 'react'
import BlazeSlider from 'blaze-slider'
import { Button } from '@/components/Button'
import Image from 'next/image'
import '@/styles/blocks/sk-content-testimonials.css'

export const TestimonialsSlider = ({block}) => {
	//console.log('TestimonialsSlider block data: ', block)

	const bgColour = block.full_width_with_background != '0' ? 'full-width-bg' : ''
	const slidesCount = block.slider - 1
	let count = 0
	let slides = []

	while(count <= slidesCount){
		let columnOne = `slider_${count}_testimonial_person_image_url`
		let columnTwo = `slider_${count}_testimonial_person_image_alt`
		let columnThree = `slider_${count}_testimonial_person_name`
		let columnFour = `slider_${count}_testimonial_person_company`
		let columnFive = `slider_${count}_testimonial_quote_text`

		let row = {
			image_url: block[columnOne],
			image_alt: block[columnTwo],
			name: block[columnThree],
			company: block[columnFour],
			quote: block[columnFive],
		}

		slides.push(row)
			
		count++
	}

	//console.log('SLIDES DATA: ', slides)

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span)\b))[^>]+>/i.test(str);
			if(content.includes('[sekure_icon ')){
				const shortcodeData = content.split(' ')
				const url = shortcodeData[1].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
				const classes = shortcodeData.at(-1).replace("classes='", '').replace("']",'')
				return `<img src='${url}' alt='icon' height='50' width='50' class='${classes}'>`
			} else if(content != '' && !hasHTML(content)){
				return `<p>${content}</p>`
			} else {
				return content.trim()
			}
		}).join('')
		return formatted
	}

	const sliderRef = useRef(null)

	useEffect(() => {
		// Initialize Blaze Slider
		const slider = new BlazeSlider(sliderRef.current, {
			all: {
				loop: true,
				slideGap: '0px',
				enableAutoplay: false,
				autoplayInterval: 3000,
				draggable: false,
				stopAutoplayOnInteraction: true,
				slidesToShow: 1,
			},
		})

		// Cleanup
		return () => {
			slider.destroy();
		}
	}, [])

	return (
		<section id={block.section_id} className={`content-block-holder sk-block sk-content-testimonials block--bsk9 ${bgColour} ${block.section_classes}`}>
			<div className='container'>
				<div className={`media-block media-${block.slider_position} content-block row gap-rows row-eq-height`}>
					<div className='left-content col-sm-12 col-lg-6 align-content-center'>

						{block.block_heading && (
							<h2 dangerouslySetInnerHTML={{__html: block.block_heading}}></h2>
						)}

						{block.content && (
							<div dangerouslySetInnerHTML={{__html: formatContent(block.content)}}></div>
						)}

						{block.cta_text != '' && (
							<div className='mt-default'>
								<Button type={block.external_link} text={block.cta_text} link={block.cta_link} popupID={block.popup} popupHeading={block.popup_title} popupDesc={block.popup_description} phone={block.phone}/>
							</div>
						)}

					</div>

					<div className='col-sm-12 col-lg-6'>
						<div className='slider-wrap d-flex justify-content-center h-100'>
							<div className='testimonial-carousel slider-container sk-slider' data-single-slide='true'>
								<div className='slider-element'>
									<div ref={sliderRef} className='blaze-container blaze-slider'>
										<div className='blaze-track-container'>
											<div className='blaze-track'>
												
												{slides.map((slide, index) => (
													<div key={index} className='slide'>
														<div className='shadow'>
															{slide.image_url && (
																<div className='person-img-wrap'>
																	<Image src={slide.image_url} alt={slide.image_alt} height='130' width='130' />
																</div>
															)}

															<div className='txt-content'>
																<div className='txt-content-inner'>
																	<div className='quote'>
																		<p className='quote-by-txt' dangerouslySetInnerHTML={{__html: slide.quote}}></p>
																		<p className='quote-by-info'>
																			{slide.name && (
																				<strong>{slide.name}</strong>
																			)}
																			{slide.company && (
																				<span className='company-name'>{slide.company}</span>
																			)}
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												))}
									
											</div>

											<div className='slider-holder'>
												<button className='slider-control blaze-prev' aria-label='previous slide'></button>
												<button className='slider-control blaze-next' aria-label='next slide'></button>
											</div>
											<div className='pagination-wrapper'>
												<div className='blaze-pagination'></div>
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