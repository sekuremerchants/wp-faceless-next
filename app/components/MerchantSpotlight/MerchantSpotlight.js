'use client';

import { useEffect, useRef } from 'react'
import BlazeSlider from 'blaze-slider'

import Link from 'next/link'
import Image from 'next/image'
import '@/styles/blocks/sk-merchant-spotlight.css'

export const MerchantSpotlight = ({block, posts}) => {
	//console.log('MERCHANT SPOTLIGHT BLOCK DATA: ', posts)

	function formatContent(inputString) {
		const spanBlocks = [];

		// 1. Temporarily extract all <span>...</span> blocks
		const tokenizedString = inputString.replace(/<span\b[\s\S]*?<\/span>/gi, (match) => {
			spanBlocks.push(match);
			return `__SPAN_PLACEHOLDER_${spanBlocks.length - 1}__`;
		});

		// 2. Split by \r\n and wrap non-HTML blocks in <p> tags
		const processedLines = tokenizedString.split(/\r\n/).map(line => {
			const trimmed = line.trim();
			
			if (trimmed == '') return

			if (!trimmed) return

			const hasHtmlStart = /^<(?!a\b|span\b|strong\b|b\b)[a-zA-Z0-9]+(?:\s[^>]*)?>/.test(trimmed);
			const hasHtmlEnd = /<\/(?!a\b|span\b|strong\b|b\b)[a-zA-Z0-9]+>$/.test(trimmed);

			if ((trimmed.includes('__SPAN_PLACEHOLDER_')) && (!hasHtmlStart || !hasHtmlEnd)) {
				return `<p>${trimmed}</p>`; 
			}

			if (!hasHtmlStart || !hasHtmlEnd) {
				const indent = line.match(/^\s*/);
				return `${indent}<p>${trimmed}</p>`;
			}

			return line;
		});

		let finalResult = processedLines.join('\r\n');

		// 3. Logic Check: Replace [phone] inside span blocks, convert \r\n to <br>, and restore
		spanBlocks.forEach((originalSpan, index) => {
			let modifiedSpan = originalSpan;

			// Check if the span contains the [phone] shortcode and replace it globally
			if (modifiedSpan.includes('[phone]')) {
				modifiedSpan = modifiedSpan.replace(/\[phone\]/g, '<a href="tel:8667107382">(866) 710-7382</a>');
			}

			const spanWithBrTags = modifiedSpan.replace(/\r\n/g, '<br>');
			finalResult = finalResult.replace(`__SPAN_PLACEHOLDER_${index}__`, spanWithBrTags);
		});

		// 4. Global Fallback: Replace [phone] if it exists outside of <span> tags
		if (finalResult.includes('[phone]')) {
			finalResult = finalResult.replace(/\[phone\]/g, '<a href="tel:8667107382">(866) 710-7382</a>');
		}

		if (finalResult.includes('[img id="39329"')) {
			finalResult = finalResult.replace('[img id="39329" width="527"]', '<div class="mb-3"><img class="b-lazy img-srtcode b-loaded" alt="BBB 4.25 Google 4.25 Facebook 4.75 Trustpilot 4.25" src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2025/08/our-reviews-1.svg"></div>');
		}

		if(finalResult.includes('[newsletter-form id="0ccbe880-b086-43f1-8c61-cc0db7225181"]')) {
			finalResult = finalResult.replace('[newsletter-form id="0ccbe880-b086-43f1-8c61-cc0db7225181"]', '')
			newsletterForm = true
			newsletterFormID = "0ccbe880-b086-43f1-8c61-cc0db7225181"
		}

		if(finalResult.includes('[newsletter-form]')) {
			finalResult = finalResult.replace('[newsletter-form]', '')
			newsletterForm = true
		}

		return finalResult;
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
				slidesToShow: 2,
			},
		})

		// Cleanup
		return () => {
			slider.destroy();
		}
	}, [])
	
	return (
		<section id={block.section_id} className={`sk-block content-block-holder sk-merchant-spotlight block--bsk2 inner-pages-slider-section block-mc ${block.section_classes}`}>
			<div className='container'>
				<div className='txt-content'>
					{block.related_posts_heading_heading_text && block.related_posts_heading_heading_text != '' && (
						<h2>{block.related_posts_heading_heading_text}</h2>
					)}

					{block.description && block.description != '' && (
						<div className='block-content' dangerouslySetInnerHTML={{__html: formatContent(block.description)}}></div>
					)}

					<Link href='/blog/?content-type[]=282&search=&page=1#blog-filter' className='btn-txt-arrow fw-700 text-decoration-underline hover-text-col-blue-2'>
						<span className='btn-txt'>View all</span>
						<Image src='/media/images/pictograms/plain-txt-green-arrow.webp' alt='green arrow pointing right' width='21' height='16' className='green-arrow-icon' />
					</Link>
				</div>

				<div ref={sliderRef} className='blaze-container blaze-slider fade-in-last mt-3'>
					<div className='blaze-track-container'>
						<div className='blaze-track'>
							{posts.map((element, index) => (
								<div key={index} className='swiper-slide'>
									<picture className='d-flex mb-3'><Image src={element.featuredImage.node.sourceUrl} alt={element.featuredImage.node.altText} width='500' height='500' /></picture>
									<h3><Link href={element.uri} className='text-decoration-none'>{element.title}</Link></h3>
									<p dangerouslySetInnerHTML={{__html: element.excerpt}}></p>
									<Link href={element.uri} className='anim-translate-x btn-default size-18-txt c-blue-1 btn-green-1 section-color-white btn-offset-9 read-more-button mt-default'>
										<span className="btn-bg-el"></span>
										<span className="btn-txt">Read more</span>
									</Link>
								</div>
							))}
						</div>

						<div className='pagination-wrapper d-flex justify-content-center mt-default'>
							<div className='blaze-pagination'></div>
						</div>
					</div>
				</div>

				{/* 
				<div className='swiper-container swiper-trigger fade-in-last mt-3'>
					<div className='swiper-wrapper'>

					</div>

					<div className='swiper-pagination'></div>
				</div>
				*/}
			</div>
		</section>
	)
}