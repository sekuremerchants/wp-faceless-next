import Image from 'next/image'
import { HubspotForm } from '@/components/HubspotForm'
import "@/styles/blocks/contact-form-section.css";

export const ContactForm = ({block}) => {
	//console.log('CONTACT FORM BLOCK DATA: ', block)

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

	const bgColour = block.full_width_with_background == '1' ? 'full-width-bg' : ''

	return (
		<section id={block.section_id} className={`contact-form-block sk-block block--a prel ov-hidden overlay- ${bgColour} ${block.section_classes}`}>
			<div className='container prel z-2'>
				<div className='row justify-content-between gap-rows'>

					{/* left column */}
					<div className='left-content col-sm-12 col-lg-6'>
						<div className='inner-content sk-sticky'>

							<div className='plain-txt-block txt-post-rtf content-block' dangerouslySetInnerHTML={{__html: formatTextAndReplacePhone(block.text_content)}}></div>

							{block.testimonial_person_name && (
								<div className='person-quote-block content-block d-flex gap-30 mt-default'>
									{block.testimonial_person_image_url != null && block.testimonial_person_image_url != '' && (
										<picture className='d-flex'><Image src={block.testimonial_person_image_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block.testimonial_person_image_alt} width='150' height='150' className='person-img-wrap' /></picture>
									)}

									<blockquote className='txt-content-inner prel'>
										<p className='quote-by-txt'>{block.testimonial_quote_text}</p>
										<p className='quote-by-info'><span className='person-name fw-600'>{block.testimonial_person_name}</span><br />{block.testimonial_person_company}</p>
									</blockquote>
								</div>
							)}

						</div>
					</div>

					{/* right column */}
					<div className='right-content-form right-form landing-page-form col-sm-12 col-lg-6 ps-lg-8'>
						<div className='right-content-form landing-page-form bg-primary sk-sticky'>
							<h3 className='c-white'>{block.form_heading}</h3>
							<p className='c-white'>{block.form_subheading}</p>

							<div className='form-block-area'>
								<div className='form--container'>
									{block.form_id != '' && (
										<HubspotForm formID={block.form_id} formContainer={`contactformsectionformcontainer`} uid='199803457764' bgColour='blue' />
									)}
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
		</section>
	)
}