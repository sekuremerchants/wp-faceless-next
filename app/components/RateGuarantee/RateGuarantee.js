import Image from 'next/image'
import { Button } from '@/components/Button'
import '@/styles/blocks/rate-guarantee.css'

export const RateGuarantee = ({block}) => {

	//console.log('RATE GUARANTEE BLOCK DATA: ', block)

	const bgColour = block.full_width_with_background != '0' ? 'full-width-bg' : ''

	const formattedContent = block.text_content.split('\r\n').map(content => {
		const hasHTML = (str) => /<[^>]*>/i.test(str);
		if(content != '' && !hasHTML(content)){
			return `<p>${content}</p>`
		} else {
			return content.trim()
		}
	}).join('')

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

	return (
		<section id={block.section_id} className={`content-block-holder sk-block block--i op-0 ${bgColour} ${block.section_classes}`}>
			<div className='container'>
				<div className='circle-info-white-block content-block row gap-rows'>

					<div className='txt-content col-sm-12 col-lg-5'>
						{block.heading && (
							<h2 dangerouslySetInnerHTML={{__html: block.heading}}></h2>
						)}
						{block.text_content && (
							<div className='txt-wrap' dangerouslySetInnerHTML={{__html: formatTextAndReplacePhone(block.text_content)}}></div>
						)}
						{block.cta_text && (
							<div className='mt-default'>
								<Button type={block.external_link} text={block.cta_text} link={block.cta_link} popupID={block.popup} popupHeading={block.popup_title} popupDesc={block.popup_description} phone={block.phone}/>
							</div>
						)}
					</div>

					<div className='img-txt-col col-sm-12 col-lg-7'>
						<div className='img-wrap'>
							<picture><Image src={block.image_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block.image_alt} height='450' width='450' className='info-white-section-img' /></picture>

							<div className='img-txt-content'>
								<div className='inner-text'>
									<p className='img-txt-quote' dangerouslySetInnerHTML={{__html: block.quote_quote_text}}></p>

									<div className='quote-details'>
										<p className='img-txt-col-person-name' dangerouslySetInnerHTML={{__html: block.quote_quote_author}}></p>
										<p className='img-txt-col-person-position' dangerouslySetInnerHTML={{__html: block.quote_author_position}}></p>
									</div>
								</div>
							</div>

							<div className='arc-border-pink abs-cover-el'></div>
          		<div className='arc-light-pink abs-cover-el'></div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}