'use client';

import { useEffect, useRef } from 'react'
import BlazeSlider from 'blaze-slider'

import Image from 'next/image'
import '@/styles/blocks/sk-infographic.css'

export const Infographic = ({block}) => {
	//console.log('INFOGRAPHIC BLOCK DATA: ', block)

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

	const bgColour = block.full_width_with_background == '1' ? 'full-width-bg' : ''
	const infoCount = block.infographic.length - 1
	let x = 0
	let y = 0
	let infographics = []

	while(x <= infoCount){
		let row = {
			column_size: block[`infographic_${x}_col_size`],
			description: block[`infographic_${x}_description`],
			img_url: block[`infographic_${x}_svg_url`],
			img_alt: block[`infographic_${x}_svg_alt`],
			slider: []
		}

		const sliderCount = block[`infographic_${x}_slider`] - 1
		if(sliderCount > 0 && x > 0){
			y = 0
		}
		while(y <= sliderCount){
			let slide = {
				image_url: block[`infographic_${x}_slider_${y}_image_url`],
				image_alt: block[`infographic_${x}_slider_${y}_image_alt`],
			}

			row.slider.push(slide)

			y++
		}

		infographics.push(row)

		x++
	}

	//console.log('INFOGRAPHICS DATA: ', infographics)

	const infographicClass = infographics.length > 1 ? 'col-sm-12 col-lg-6' : ''
	const wrapperClass = infographics.length > 1 ? 'info-wrapper' : `col-sm-12 col-lg- info-wrapper`

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
				slidesToShow: 1,
			},
		})

		// Cleanup
		return () => {
			slider.destroy();
		}
	}, [])

	return (
		<section id={block.section_id} className={`content-block-holder sk-block sk-infographic block--psk12 op-0 ${bgColour} ${block.section_classes}`}>
			<div className='container'>
				<div className='txt-content'>
					<div className='content-wrapper'>

						{block.content != '' && (
							<div dangerouslySetInnerHTML={{__html: formatContent(block.content)}}></div>
						)}

						{infographics.length > 0 && (
							<div className={`infographic row infos-${infographics.length}`}>
								{infographics.map((row, index) => (
									<div key={index} className={infographicClass}>

										{infographics.length > 1 && (
											<div className='infographic__desc'>
												<div className='infographic__description pb-sm-3' dangerouslySetInnerHTML={{__html: formatContent(row.description)}}></div>
											</div>
										) || (
											<div className='col-sm-12 col-lg-8'><div className='infographic__description pb-sm-3' dangerouslySetInnerHTML={{__html: formatContent(row.description)}}></div></div>
										)}

										<div className={`info-wrapper`}>
											{row.img_url != '' && (
												<div className='infographic__svg d-none d-desktop-block'>
													<Image src={row.img_url} alt={row.img_alt} width={500} height={500} />
												</div>
											)}

											{row.slider.length > 0 && (
												<div className='infographic__slider d-desktop-none'>
													<div className='slider-container sk-slider mb-3'>
														<div className='slider-element'>
															<div ref={sliderRef} className='blaze-container blaze-slider'>
																<div className='blaze-track-container'>
																	<div className='blaze-track'>
																		{row.slider.map((slide, index) => (
																			<div key={index} className='slide'>
																				<div className='icons--item text-center'>
																					{slide.image_url != '' && (
																						<Image src={slide.image_url} alt={slide.image_alt} height='300' width='300' />
																					)}
																				</div>
																			</div>
																		))}
																	</div>
																</div>

																<div className='slider-holder'>
																	<button className='slider-control blaze-prev'>
																		<span className='visually-hidden'>previous</span>
																	</button>
																	<button className='slider-control blaze-next'>
																		<span className='visually-hidden'>next</span>
																	</button>
																</div>
																<div className='pagination-wrapper'>
																	<div className='blaze-pagination'></div>
																</div>

															</div>
														</div>
													</div>
												</div>
											)}
										</div>
									</div>
								))}
							</div>
						)}

						{block.footer != '' && (
							<div className='col-sm-12 col-lg-8 mt-3' dangerouslySetInnerHTML={{__html: formatContent(block.footer)}}></div>
						)}
						
					</div>
				</div>
			</div>
		</section>
	)
}