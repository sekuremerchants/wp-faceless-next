import Image from 'next/image'
import { Button } from '@/components/Button'

export const TwoColumnBuilder = ({block}) => {
	//console.log('TWO COLUMN BUILDER BLOCK DATA: ', block)

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

	const bgColour = block.full_width_with_background == '1' ? 'full-width-bg' : ''
	const leftSticky = block.left_column_sticky == '1' ? 'sk-sticky' : ''
	const rightSticky = block.right_column_sticky == '1' ? 'sk-sticky' : ''

	var leftColumnSize = 'col-lg-6'
	var rightColumnSize = 'col-lg-6'

	switch(block.column_sizing){
		case 'left-big': {
			leftColumnSize = 'col-lg-7'
			rightColumnSize = 'col-lg-5'
			break
		}
		case 'left-huge': {
			leftColumnSize = 'col-lg-8'
			rightColumnSize = 'col-lg-4'
			break
		}
		case 'right-big': {
			leftColumnSize = 'col-lg-5'
			rightColumnSize = 'col-lg-7'
			break
		}
		case 'right-huge': {
			leftColumnSize = 'col-lg-4'
			rightColumnSize = 'col-lg-8'
			break
		}
		case 'left-right-small': {
			leftColumnSize = 'col-lg-5'
			rightColumnSize = 'col-lg-6'
			break
		}
		case 'right-left-small': {
			leftColumnSize = 'col-lg-6'
			rightColumnSize = 'col-lg-5'
			break
		}
	}

	return (
		<section id={block.section_id} className={`content-block-holder sk-block builder-2 prel ov-hidden op-0 ${bgColour} ${block.section_classes}`}>

			{block.background_image_url != '' && (
				<picture className='d-flex'><Image src={block.background_image_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block.background_image_alt} width='1440' height='1080' className='b-lazy bg-image object-cover' /></picture>
			)}

			<div className='container prel z-2'>
				<div className='row gap-rows align-items-start justify-content-between'>

					{block.left_column.length > 0 && (
						<div className={`left-column col-sm-12 ${leftColumnSize} ${block.left_column_classes} ${leftSticky}`}>
							<div className='style-wrap d-flex flex-column gap-rows'>
								{block.left_column.map((element, index) => {
									switch(element){
										case 'image': {
											const url = `left_column_${index}_image_url`
											const alt = `left_column_${index}_image_alt`
											return <picture key={index} className='d-flex'><Image src={block[url].replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block[alt]} height='500' width='500' /></picture>
										}
										case 'text': {
											const text = `left_column_${index}_text`
											return <div key={index} dangerouslySetInnerHTML={{__html:formatTextAndReplacePhone(block[text])}}></div>
										}
										case 'cta': {
											const text = `left_column_${index}_cta_text`
											const type = `left_column_${index}_external_link`
											const url = `left_column_${index}_cta_link`
											const popupID = `left_column_${index}_popup`
											const popupTitle = `left_column_${index}_popup_title`
											const popupDesc = `left_column_${index}_popup_description`
											return <div key={index}><Button type={block[type]} text={block[text]} url={block[url]} popupID={block[popupID]} popupHeading={block[popupTitle]} popupDesc={block[popupDesc]} /></div>
										}
									}
								})}
							</div>
						</div>
					)}

					{block.right_column.length > 0 && (
						<div className={`right-column col-sm-12 ${rightColumnSize} ${block.right_column_classes} ${rightSticky}`}>
							<div className='style-wrap d-flex flex-column gap-rows'>
								{block.right_column.map((element, index) => {
									switch(element){
										case 'image': {
											const url = `right_column_${index}_image_url`
											const alt = `right_column_${index}_image_alt`
											const mobileURL = `right_column_${index}_image_mobile_url`
											if(block[mobileURL] == ''){
												return <picture key={index} className='d-flex'><Image src={block[url].replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block[alt]} height='500' width='500' /></picture>
											} else {
												return (
													<div key={index}>
														<span className='d-tablet-none d-desktop-none'><Image src={block[mobileURL].replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block[alt]} height='500' width='500' /></span>
														<span className='d-mobile-none'><Image src={block[url].replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block[alt]} height='500' width='500' /></span>
													</div>
												)
											}
										}
										case 'text': {
											const text = `right_column_${index}_text`
											return <div key={index} dangerouslySetInnerHTML={{__html:formatTextAndReplacePhone(block[text])}}></div>
										}
										case 'cta': {
											const text = `right_column_${index}_cta_text`
											const type = `right_column_${index}_external_link`
											const url = `right_column_${index}_cta_link`
											const popupID = `right_column_${index}_popup`
											const popupTitle = `right_column_${index}_popup_title`
											const popupDesc = `right_column_${index}_popup_description`
											return <div key={index}><Button type={block[type]} text={block[text]} url={block[url]} popupID={block[popupID]} popupHeading={block[popupTitle]} popupDesc={block[popupDesc]} /></div>
										}
									}
								})}
							</div>
						</div>
					)}

				</div>
			</div>
		</section>
	)
}