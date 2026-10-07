'use client';

import { useEffect, useRef } from 'react'
import BlazeSlider from 'blaze-slider'

import Image from 'next/image'
import '@/styles/blocks/sk-industries-showcase.css'

export const IndustryShowcase = ({block, industries}) => {
	//console.log('INDUSTRY SHOWCASE BLOCK DATA: ', block)

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
			let hasOpen = content.includes('<span')
			let hasClose = content.includes('</span>')

			if(content.includes('[sekure_icon ')){
				const shortcodeData = content.split(' ')
				const url = shortcodeData[1].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
				const classes = shortcodeData.at(-1).replace("classes='", '').replace("']",'')
				return `<img src='${url}' alt='icon' height='50' width='50' class='${classes}'>`
			} else if(content.includes('[phone]')) {
				const newContent = content.replace(/\[phone\]/g, '<a href="tel:8667107382">(866) 710-7382</a>')
				return newContent
			} else if(content.includes('[phone-icon]')) {
				const newContent = content.replace('[phone-icon]', '<svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><g clip-path="url(#clip0_63_2933)"><path d="M23.9926 0C10.7481 0 3.05176e-05 10.7481 3.05176e-05 23.9925C3.05176e-05 37.237 10.7481 47.985 23.9926 47.985C37.237 47.985 47.9851 37.237 47.9851 23.9925C47.9851 10.7481 37.252 0 23.9926 0ZM36.9381 32.7973C36.8783 32.9019 36.8035 33.0215 36.7288 33.1411C35.9963 34.2473 34.4416 35.8916 34.4416 35.8916C32.005 37.7602 26.7431 35.1741 26.7431 35.1741C16.6229 29.9421 11.4656 20.4198 11.4656 20.4198C9.5223 16.5332 12.6914 12.4522 12.6914 12.4522C14.5002 10.2846 17.2208 12.2579 17.2208 12.2579L20.0312 14.4852C21.84 15.9801 19.9116 17.9383 19.9116 17.9383C17.3703 20.36 19.0446 22.0193 19.0446 22.0193C21.0626 24.6353 26.4591 29.1199 26.4591 29.1199C28.4771 30.0766 29.673 27.5652 29.673 27.5652C30.6596 25.9059 32.7674 27.3261 32.7674 27.3261L35.0246 28.9854C36.8035 30.4204 37.5211 31.721 36.9231 32.7973H36.9381Z" fill="#17FCC4"></path></g><defs><clipPath id="clip0_63_2933"><rect width="48" height="48" fill="white"></rect></clipPath></defs></svg>')
				return newContent
			} else if(hasOpen && hasClose) {
				return `<p>${content}</p>`
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
				draggable: true,
				stopAutoplayOnInteraction: true,
				slidesToShow: 4,
			},
			'(max-width: 767px)': {
				draggable: true,
				slidesToShow: 2,
			},
			'(max-width: 580px)': {
				draggable: true,
				slidesToShow: 1,
			},
		})

		// Cleanup
		return () => {
			slider.destroy();
		}
	}, [])
	
	const bgColour = block.full_width_with_background == '1' ? 'full-width-bg' : ''

	return (
		<section id={block.section_id} className={`content-block-holder sk-block block--sk4 op-0 ${block.section_classes} ${bgColour} ${block.post_showcase}`}>
			<div className='container'>
				<div className='row mb-5'>
					<div className='col-sm-12 d-flex flex-even gap-cols flex-column-1024'>
						{block.content_area_heading != '' && (
							<h2>{block.content_area_heading}</h2>
						)}
						{block.content_area_content != '' && (
							<div dangerouslySetInnerHTML={{__html:formatContent(block.content_area_content)}}></div>
						)}
					</div>
				</div>

				<div className='d-none d-desktop-flex row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 gap-rows text-center'>
					{industries && industries.map((element, index) => (
						element.postLanguage.contentLanguage[0] == 'en' && (
							<div key={index} className='card-col'>
								<div className='card h-100'>
									<Image src={`/media/industries/${element.industriesTemplateHomePageIcon.iconIndustry[0]}.svg`} alt={element.title} height='88' width='88' />
									<div className='card-body'>
										<p className='card-title'>{element.title}</p>
									</div>
								</div>
							</div>
						)
					))}
				</div>

				<div className='d-none d-tablet-block d-mobile-block'>
					<div className='prel slider-arrows'>
						<div className='row'>
							<div className='table-multi-block content-block multi-column-table col-xs-12'>
								<div className='mb-table-container pb-0'>
								
									<div className='mb-table mb-multi-compare mb-0'>
										<div ref={sliderRef} className='blaze-container blaze-slider'>
											<button className='slider-control blaze-prev d-none d-tablet-block d-mobile-block'>prev</button>

											<div className='blaze-track-container'>
												<div className='blaze-track'>

													{industries && industries.map((element, index) => (
														element.postLanguage.contentLanguage[0] == 'en' && (
															<div key={index} className='card-col'>
																<div className='card text-center'>
																	<Image src={`/media/industries/${element.industriesTemplateHomePageIcon.iconIndustry[0]}.svg`} alt={element.title} height='88' width='88' />
																	<div className='card-body'>
																		<p className='card-title'>{element.title}</p>
																	</div>
																</div>
															</div>
														)
													))}

												</div>
											</div>

											<button className='slider-control blaze-next d-none d-tablet-block d-mobile-block'>next</button>

											<div className='paginaiton-wrapper d-flex justify-content-center'><div className='blaze-pagination'></div></div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>

				{block.footer && block.footer != '' && (
					<div className='mt-5' dangerouslySetInnerHTML={{__html:formatContent(block.footer)}}></div>
				)}

			</div>
		</section>
	)
}