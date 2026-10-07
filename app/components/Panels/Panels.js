import "@/styles/blocks/sk-panel-video.css"
import Image from 'next/image'
import { Button } from '@/components/Button'
import { HubspotForm } from '@/components/HubspotForm'

export const Panels = ({block}) => {
	//console.log('PANELS BLOCK DATA: ', block)

	function formatTextAndReplacePhone(inputString) {
		const spanBlocks = [];
		
		// 1. Temporarily extract all <span>...</span> blocks
		const tokenizedString = inputString.replace(/<span\b[\s\S]*?<\/span>/gi, (match) => {
			spanBlocks.push(match);
			return `__SPAN_PLACEHOLDER_${spanBlocks.length - 1}__`;
		});

		// 2. Split by \r\n and wrap non-HTML blocks in <p> tags
		const processedLines = tokenizedString.split(/\r\n/).map(line => {
			const trimmed = line.trim();
			if (!trimmed) return line;

			if (trimmed.includes('__SPAN_PLACEHOLDER_')) {
				return line; 
			}

			const hasHtmlStart = /^<[a-zA-Z0-9]+(?:\s[^>]*)?>/.test(trimmed);
			const hasHtmlEnd = /<\/[a-zA-Z0-9]+>$/.test(trimmed);

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

		return finalResult;
	}

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

	const design = block.design
	const containerType = (design == 'ab' || (design == 'ad' && block.video_area_background == false) ? 'container' : 'container-fw')
	const rowFlex = block.imagevideo_leftright == 'left' ? 'flex-row-reverse' : ''
	const rowGap = (design == 'ad' && block.video_area.background != true) ? 'gap-rows' : ''
	const columnClasses = ((design == 'aa' || design == 'ad') ? '' : 'col-md-10')
	const innerColumn = ((design != 'ac' || design != 'aa') ? 'py-0 column-inner sk-sticky' : 'pm-md-5 py-0 column-inner sk-sticky')
	const mediaType = (design == 'ad' ? 'video' : 'image')
	const videoType = ((design == 'ad' && block.video_area_background == false) ? 'video-img' : 'video-bg')

	const bgImage = (block.background_image_url != '' && design == 'ab') ? true : false

	// second column
	const secondColumnClasses = design == 'aa' ? '' : 'col-md-6'
	const designADvideoClass = (design == 'ad' && block.video_area_background_url && block.video_area_background_url != '') ? 'video-bg' : 'video-img'
	const designADvideoBg = (design == 'ad' && block.video_area_background_url && block.video_area_background_url != '') ? `${block.video_area_background_url}` : ''

	const ctaFormShortcode = (block.content_area_cta_cta_text && block.content_area_cta_cta_text.includes('[form id="c0a53948-726c-4e3b-85f2-e4eea9564bb8"]')) ? true : false

  return (
    <section className={`sk-block panel-video block--sk1 sk-hero-${design} media-type-${mediaType} ${videoType} ${block.section_classes}`}>
			{bgImage && (
				<div className='bg-banner-media'>
					<picture className='d-flex'><Image src={block.background_image_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block.background_image_alt} height='650' width='1280' className='media-item' /></picture>
				</div>
			)}

			{block.design != 'ae' && (
				<div className={`${containerType} prel`}>
					{design == 'ab' || design == 'ac' && (
						<div className='d-none d-mobile-block mobile-pic'>
							<picture className='d-flex'><Image src={block.background_image_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block.background_image_alt} width='1200' height='625' className='media-lander w-100' /></picture>
						</div>
					)}

					<div className={`row ${rowFlex} ${rowGap}`}>

						<div className={`column col-sm-12 ${columnClasses} col-lg-6 column-content prel z-1 py-100`}>
							<div className={innerColumn}>

								{block.content_area_content != '' && (
									<div dangerouslySetInnerHTML={{__html: formatContent(block.content_area_content)}} />
								)}

								{block.cta_text != '' && (
									<div className='mt-default'><Button type={block.external_link} text={block.cta_text} link={block.cta_link} /></div>
								)}

								{block.content_area_cta_type == 'form' && block.content_area_form_position != 'image' && (
									<div></div>
								) || (
									block.content_area_cta != '' || block.content_area_cta_cta_text != '' && (
										<div className='phone-cta mt-default'>
											{block.content_area_cta_phone_icon != '' && (
												<svg
													className='phone-icon'
													role='graphics-document'
													aria-label='phone icon'
													alt='phone icon'
													width='48'
													height='49'
													viewBox='0 0 48 49'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<g clipPath="url(#clip0_163_310)">
														<path d="M23.9925 0.65918C10.7481 0.65918 0 11.4072 0 24.6517C0 37.8962 10.7481 48.6442 23.9925 48.6442C37.237 48.6442 47.985 37.8962 47.985 24.6517C47.985 11.4072 37.2519 0.65918 23.9925 0.65918ZM36.938 33.4564C36.8782 33.5611 36.8035 33.6807 36.7287 33.8003C35.9963 34.9065 34.4416 36.5508 34.4416 36.5508C32.005 38.4194 26.7431 35.8333 26.7431 35.8333C16.6229 30.6013 11.4656 21.079 11.4656 21.079C9.52227 17.1923 12.6914 13.1114 12.6914 13.1114C14.5002 10.9438 17.2208 12.917 17.2208 12.917L20.0311 15.1444C21.8399 16.6392 19.9116 18.5975 19.9116 18.5975C17.3703 21.0192 19.0445 22.6785 19.0445 22.6785C21.0626 25.2945 26.459 29.7791 26.459 29.7791C28.4771 30.7358 29.673 28.2244 29.673 28.2244C30.6596 26.5651 32.7674 27.9852 32.7674 27.9852L35.0246 29.6445C36.8035 31.0796 37.521 32.3801 36.9231 33.4564H36.938Z" fill="#002EA6"/>
													</g>
													<defs>
														<clipPath id="clip0_163_310">
															<rect width="48" height="48" fill="white" transform="translate(0 0.65918)"/>
														</clipPath>
													</defs>
												</svg>
											)}

											{block.content_area_cta_cta_text != '' && ctaFormShortcode == false && (
												<div dangerouslySetInnerHTML={{__html: formatTextAndReplacePhone(block.content_area_cta_cta_text)}}></div>
											)}

											{block.content_area_cta_cta_text != '' && ctaFormShortcode && (
												<HubspotForm formID={`c0a53948-726c-4e3b-85f2-e4eea9564bb8`} formContainer={`panelsCTAareaFORM`} uid='14567819764' bgColour='blue' />
											)}
											
										</div>
									)
								)}
							</div>
						</div>

						{design == 'ad' && (
							<div className={`column col-sm-12 col-lg-6 ov-hidden section-video ${designADvideoClass}`} style={{backgroundImage:`url(${designADvideoBg})`}}>
								<div className='column-inner'>
									
									{block.video_area_video_type == 'vimeo' && (
										<>
											{block.video_area_play_button_thumbnail_url != '' && (
												<picture className='d-flex'><Image src={block.video_area_play_button_thumbnail_url} alt={block.video_area_play_button_thumbnail_alt} height='400' width='400' /></picture>
											)}
											<button aria-label='Play Vimeo video' data-vimeo-embed-id={block.video_area_vimeo_link} className='landing-video-btn vimeo-btn'>
												<span className='circle-core'>
													<span className='play-video-icon-landing'></span>
												</span>
												<span className='circle-inner'></span>
												<span className='circle-outer'></span>
											</button>
										</>
									)}
									{block.video_area_video_type == 'youtube' && (
										<>
											{block.video_area_play_button_thumbnail_url != '' && (
												<picture className='d-flex'><Image src={block.video_area_play_button_thumbnail_url} alt={block.video_area_play_button_thumbnail_alt} height='400' width='400' /></picture>
											)}
											<button aria-label='Play Youtube video' data-video-embed-id={block.video_area_video_link.url} className='landing-video-btn careers-video-btn'>
												<span className='circle-core'>
													<span className='play-video-icon-landing'></span>
												</span>
												<span className='circle-inner'></span>
												<span className='circle-outer'></span>
											</button>
										</>
									)}
								</div>
							</div>
						) || (
							<div className={`column col-sm-12 ${secondColumnClasses} col-lg-6 section-image`}>
								{design == 'ac' || design == 'aa' && (
									<div className='image'>
										<picture className='d-flex'><Image src={block.background_image_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block.background_image_alt} width='1200' height='625' className='media-lander w-100' /></picture>
									</div>
								)}

								<div className='column-inner'>
									{design == 'ae' && (
										<div className='image d-none d-mobile-block d-tablet-block d-desktop-block'>
											<picture className='d-flex'><Image src={block.background_image_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block.background_image_alt} width='1200' height='625' className='media-lander w-100' /></picture>
										</div>
									)}

									{block.content_area_cta_type == 'form' && block.content_area_form_position == 'image' && block.content_area_form && (
										<div className='form-cta form-float sk-sticky'>
											{block.content_area_form_heading && (
												<h3>{block.content_area_form_heading}</h3>
											)}
											{block.content_area_form_subheading && (
												<p>{block.content_area_form_subheading}</p>
											)}

											{block.content_area_form_id != '' && (
												<div className='form-block-area'>
													{block.content_area_form_id != '' && (
														<div className='form--container-big'><HubspotForm formID={block.content_area_form_id} formContainer={`contactformsectionformcontainer`} uid='199803457764' /></div>
													)}
													{block.content_area_form && block.content_area_form_id == '' && (
														<div className='form--container-big' dangerouslySetInnerHTML={{__html: block.content_area_form}}></div>
													)}
												</div>
											)}

											{block.content_area_bellow_form && (
												<div className='form-footer' dangerouslySetInnerHTML={{__html: block.content_area_bellow_form}}></div>
											)}
										</div>
									)}
								</div>
							</div>
						)}
					</div>
				</div>
			)}
			
		</section>
  )
}