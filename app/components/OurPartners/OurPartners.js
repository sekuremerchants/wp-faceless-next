'use client';

import { useEffect, useRef } from 'react'
import BlazeSlider from 'blaze-slider'
import Image from 'next/image'
import Link from 'next/link'
import '@/styles/blocks/sk-our-partners.css'

export const OurPartners = ({block}) => {
	//console.log('OUR PARTNERS BLOCK DATA: ', block)

	const bgColour = block.full_width_with_background != '0' ? 'full-width-bg' : ''
	const logos = block.partner_logos - 1
	let count = 0
	let partners = []

	while(count <= logos){

		let columnOne = `partner_logos_${count}_logo_url`
		let columnTwo = `partner_logos_${count}_logo_alt`
		let columnThree = `partner_logos_${count}_external_link`

		let row = {
			url: block[columnOne],
			alt: block[columnTwo],
			link: block[columnThree],
		}

		partners.push(row)
			
		count++
	}

	const size = 3;

	// Create chunks of 3
	const chunks = partners.reduce((acc, _, i) => {
		if (i % size === 0) acc.push(partners.slice(i, i + size));
		return acc;
	}, []);

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<[^>]*>/i.test(str);
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
			'(max-width: 1024px)': {
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

	const styleCode = `
		@media screen and (max-width:1024px){
			.slider-arrows .blaze-prev {
				left:-64px;
			}
			.slider-arrows .blaze-next {
				right:-64px;
			}
		}
	`

	return (
		<section id={block.section_id} className={`content-block-holder sk-block sk-our-partners block--bsk3 op-0 ${bgColour} ${block.section_classes}`}>
			<style>{styleCode}</style>
			<div className='partners-section-home prel slider-arrows prel'>
				<div className='container'>
					<div className='row'>
						<div id='txt-content' className='col-sm-12 col-lg-8'>

							{block.top_heading && (
								<p className='pre-title' dangerouslySetInnerHTML={{__html: block.top_heading}}></p>
							)}

							{block.main_heading && (
								<h2 className='heading-anim' dangerouslySetInnerHTML={{__html: block.main_heading}}></h2>
							)}

							{block.content && (
								<div dangerouslySetInnerHTML={{__html: formatContent(block.content)}}></div>
							)}

						</div>
					</div>
				</div>
				<div className='container d-none d-desktop pt-4'>
					<div className='row d-flex justify-content-center align-items-start'>
						{partners.map((row, index) => (
							<Link key={index} href={row.link} rel='noopener noreferrer' target='_blank' className='partner-item col-xs-2 col-md-4 col-lg-2 py-3 px-2 text-center'><Image src={row.url} alt={row.alt} height='65' width='200' /></Link>
						))}
					</div>
				</div>
				<div className='container d-none d-tablet-block d-mobile-block pt-4'>
					<div className='table-multi-block content-block multi-column-table'>
						<div className='mb-table-container'>
							<div className='mb-table mb-partners' data-slides-767='2' data-slides-1024='4'>
								<div ref={sliderRef} className='blaze-container blaze-slider'>
                  <div className='blaze-track-container'>

										<button className='slider-control blaze-prev d-none d-tablet-block d-mobile-block'>prev</button>
              			<button className='slider-control blaze-next d-none d-tablet-block d-mobile-block'>next</button>

										<div className='blaze-track'>
											{chunks.map((chunk, index) => (
												<div key={index} className='mt-box-inner'>
													{chunk.map((partnerLogo, index) => (
														<Link key={index} href={partnerLogo.link} rel='noopener noreferrer' target='_blank' className='d-block partner-item text-center'><Image src={partnerLogo.url} alt={partnerLogo.alt} height='65' width='200' className='partner-img colored-img py-3' /></Link>
													))}
												</div>
											))}
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
		</section>
	)
}