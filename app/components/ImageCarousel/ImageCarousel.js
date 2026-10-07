'use client';

import { useEffect, useRef } from 'react'
import BlazeSlider from 'blaze-slider'
import Image from 'next/image'

export const ImageCarousel = ({block}) => {
	//console.log('IMAGE CAROUSEL BLOCK DATA: ', block)

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
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

	const bgColour = block.full_width_with_background == '1' ? 'full-width-bg' : ''
	const slidesCount = block.slider - 1
	let slides = []
	let i = 0

	while(i <= slidesCount){
		let image = {
			url: block[`slider_${i}_slide_image_url`],
			alt: block[`slider_${i}_slide_image_alt`],
		}

		slides.push(image)

		i++
	}

	const sliderRef = useRef(null)

	useEffect(() => {
		// Initialize Blaze Slider
		const slider = new BlazeSlider(sliderRef.current, {
			all: {
				loop: true,
				slideGap: '30px',
				enableAutoplay: true,
				autoplayInterval: 3000,
				draggable: false,
				stopAutoplayOnInteraction: true,
				slidesToShow: 6,
				slidesToScroll: 1,
			},
			'(max-width: 1024px)': {
				slidesToShow: 4,
			},
			'(max-width: 767px)': {
				draggable: true,
				slidesToShow: 3,
			},
			'(max-width: 580px)': {
				draggable: true,
				slidesToShow: 2,
			},
		})

		// Cleanup
		return () => {
			slider.destroy();
		}
	}, [])

	const styleCode = `
		.image-carousel .sk-slider .slide {
			width:auto;
		}
	`

	//console.log("IMAGE CAROUSEL SLIDES DATA: ", slides)

	return (
		<section id={block.section_id} className={`sk-block image-carousel content-block-holder ${bgColour} ${block.section_classes}`}>
			<style>{styleCode}</style>
			<div className='container'>
				<div className='row'>
					<div className='txt-content col-sm-12'>
						{block.content != '' && (
							<div className='field--heading' dangerouslySetInnerHTML={{__html: formatContent(block.content)}}></div>
						)}

						<div className='slider-wrap fade-in-last'>
							<div className='sk-slider multi-image'>
								<div className='slider-element'>
									<div ref={sliderRef} className='blaze-container blaze-slider multi-image'>
										<div className='blaze-track-container'>
											<div className='blaze-track align-items-center justify-content-center d-flex gap-20'>

												{slides.map((element, index) => (
													<div key={index} className='slide d-flex justify-content-center align-items-center'>
														<Image src={element.url} alt={element.alt} height='150' width='150' />
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