'use client';

import { useEffect, useRef } from 'react'
import BlazeSlider from 'blaze-slider'

import '@/styles/blocks/products.css'
import Image from 'next/image'

export const Products = ({block}) => {
	//console.log('PRODUCTS BLOCK DATA: ', block)

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
			if(content != '' && !hasHTML(content)){
				return `<p>${content}</p>`
			} else {
				return content.trim()
			}
		}).join('')
		return formatted
	}

	const bgColour = block.full_width_with_background ? 'full-width-bg' : ''
	const productsWrapClass = block.products === 1 ? 'single' : ''
	const productCount = block.products - 1;
	let count = 0;

	let products = [];

	while(count <= productCount){

		let content = `products_${count}_product_content`
		let imageURL = `products_${count}_product_image_url`
		let imageAlt = `products_${count}_product_image_alt`
		let cta = `products_${count}_product_cta_text`
		let ctaType = `products_${count}_product_cta_type` 
		let ctaInternal = `products_${count}_product_cta_internal_link` 
		let ctaExternal = `products_${count}_product_cta_external_link` 
		let id = `products_${count}_product_id`

		let row = {
			content: formatContent(block[content]),
			imageURL: block[imageURL],
			imageAlt: block[imageAlt],
			cta: block[cta],
			ctaType: block[ctaType],
			ctaInternal: block[ctaInternal],
			ctaExternal: block[ctaExternal],
			productID: block[id],
		}

		products.push(row);
			
		count++;
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
		<section id={block.section_id} className={`content-block-holder sk-block products-grid prel ov-hidden op-0 ${bgColour} ${block.section_classes}`}>
			<div className='container'>
				<div className='row'>
					<div  dangerouslySetInnerHTML={{__html:formatContent(block.content)}}></div>
				</div>

				{block.products && block.products > 0 && (
					<>
						<div className={`products-wrap large mt-default ${productsWrapClass}`}>
							{products.map((product, index) => (
								<div key={index} id={product.productID} className='product'>
									{product.imageURL && (
										<div className={`img-wrap ${block.product_image_style}`}>
											<picture><Image src={product.imageURL} alt={product.imageAlt} height='350' width='350' /></picture>
										</div>
									)}

									{product.content && (
										<div className='txt-content' dangerouslySetInnerHTML={{__html:formatContent(product.content)}}></div>
									)}
									
								</div>
							))}
						</div>

						<div className="products-wrap mobile mt-default">
							<div className='slider-wrap fade-in-last'>
								<div className='sk-slider'>
									<div className='slider-element'>
										<div ref={sliderRef} className='blaze-container blaze-slider'>
											<div className='blaze-track-container'>
												<div className='blaze-track'>
													{products.map((product, index) => (
														<div key={index} className='slide product'>
															{product.imageURL && (
																<div className={`img-wrap ${block.product_image_style}`}>
																	<picture><Image src={product.imageURL} alt={product.imageAlt} height='350' width='350' /></picture>
																</div>
															)}

															{product.content && (
																<div className='txt-content' dangerouslySetInnerHTML={{__html:formatContent(product.content)}}></div>
															)}
															
														</div>
													))}
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
							</div>
						</div>
					</>
				)}

			</div>

			
		</section>
	)
}