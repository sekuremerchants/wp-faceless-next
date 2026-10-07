import { Button } from '@/components/Button'
import { HubspotForm } from '@/components/HubspotForm'
import Image from 'next/image'
import '@/styles/blocks/half-text-half-image.css'

export const HalfTextHalfImage = ({block, image}) => {
	//console.log('HALF TEXT HALF IMAGE BLOCK DATA: ', block)

	let newsletterForm = false
	let newsletterFormID = ''

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

		if(finalResult.includes('[sekure_icon ')){
			const regex = /\[sekure_icon(.*?)\]/g
			const matches = [...finalResult.matchAll(regex)]

			if(matches.length > 0){
				matches.map((element, index) => {
					// url check (should always pass)
					const urlRegex = /icon-url="([^"]+)"/g
					const urlMatch = [...element[0].matchAll(urlRegex)]
					const url = urlMatch[0][0].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
					const shortcodeImage = `<img src='${url}' alt='icon' height='40' width='40' style='width:40px;height:40px;' class=''>`
					// text check
					const textRegex = /icon-text="([^"]+)"/g
					const textMatch = [...element[0].matchAll(textRegex)]

					if(textMatch.length > 0){
						const newContent = `
							<p class='d-flex gap-20 align-items-center'>
								${shortcodeImage}
								<span>${textMatch[0][1]}</span>
							</p>
						`
						finalResult = finalResult.replace(urlMatch[0].input, newContent)
					} else {
						finalResult = finalResult.replace(urlMatch[0].input, shortcodeImage)
					}
				})
			}
		}

		return finalResult;
	}

	const bgColour = block.full_width_with_background != '0' ? 'full-width-bg' : ''
	const imagePosition = block.image_position == 'right' ? '' : 'flex-row-reverse'
	const contentColSize = block.column_sizing == 'image-small-column-fill' ? 'col-lg-7' : 'col-lg-6'
	const randomNum = Math.floor(Math.random() * 73)

	const formattedContent = block.text_content.split('\r\n').map(content => {
		const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
		if(content.includes('[template-output')){
			const regex = /content='(.*?)'/g
			const matches = [...content.matchAll(regex)]
			const shortcodeContent = JSON.parse(matches[0][0].replace("content='", '').replace("}'", "}"))
			const contentCount = Object.keys(shortcodeContent).length / 2
			let count = 1
			
			let html = `
				<style>
					.numbered-content {
						gap:40px;
					}
					.numbered-wrap .num {
						flex-shrink: 0;
						display:flex;
						align-items:center;
						justify-content:center;
						text-align:center;
						height:60px;
						width:60px;
						font-size: 28px;
						color: #fff;
						background-color: #FF034A;
						border-radius: 50%;
					}
				</style>
				<div class='numbered-content d-flex flex-column'>
			`

			while(count <= contentCount){
				let heading = shortcodeContent[`heading_${count}`]
				let content = shortcodeContent[`text_${count}`]

				html += `
					<div class="numbered-wrap prel d-flex gap-30">
            <span class="num fw-600">${count}</span><p></p>
						<div class="content-wrap">
							<h3>${heading}</h3>
							<p>${content}</p>
						</div>
					</div>
				`

				count++
			}

			html += `</div>`

			return html
		} else if(content.includes('[sekure_icon ')){
			const regex = /\[sekure_icon(.*?)\]/g
			const matches = [...content.matchAll(regex)]
			const urlRegex = /icon-url="([^"]+)"/g
			const urlMatches = [...matches[0][0].matchAll(urlRegex)]
			const url = urlMatches[0][0].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
			const shortcodeImage = `<img src='${url}' alt='icon' height='40' width='40' style='width:40px;height:40px;' class=''>`
			let newContent = ''

			if(content.includes('icon-text=')){
				const txtRegex = /icon-text="([^"]+)"/g
				const txtMatches = [...content.matchAll(txtRegex)]

				newContent = `
					<p class='d-flex gap-20 align-items-center'>
						<img src='${url}' alt='icon' height='40' width='40' style='width:40px;height:40px;' class=''>
						<span>${txtMatches[0][1]}</span>
					</p>
				`
			} else {
				newContent = content.replace(matches[0][0], shortcodeImage)
			}
			
			return newContent.trim()
		} else if(content != '' && !hasHTML(content)){
			return `<p>${content}</p>`
		} else {
			return content.trim()
		}
	}).join('')

	let imageCol = 'col-lg-5'
	if(block.column_sizing == 'image-small' || block.column_sizing == 'image-small-column-fill'){
		imageCol = 'col-lg-4'
	} else if(block.column_sizing == 'even') {
		imageCol = 'col-lg-6'
	}

	return (
		<section id={block.section_id} className={`sk-block content-block-holder block--p media-content-block ov-hidden op-0 ${block.section_classes} ${bgColour}`}>

			{block.background_image_url && (
				<Image src={block.background_image_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block.background_image_alt} width='1440' height='980' className='bg-image object-cover' />
			)}

			<div className='container prel z-2'>
				<div className={`media-block ${imagePosition} video-media content-block row gap-rows align-items-start justify-content-between flex-column-reverse-1024`}>

					<div className={`txt-content col-sm-12 ${contentColSize} animated fadeIn`}>
						<div dangerouslySetInnerHTML={{__html: formatTextAndReplacePhone(block.text_content)}}></div>

						{newsletterForm == true && (
							<div className='newsletter-form form-shortcode'>
								<div className='inline-form'>
									<div className='form-block-area'>
										<div className='form--container-src'>
											{newsletterFormID != '' && (
												<HubspotForm formID={newsletterFormID} submitText={`Download PDF`} formContainer={`download-pdf-${randomNum}`} uid={randomNum} />
											) || (
												<HubspotForm formID={`d74be8e6-676d-43a4-a3cf-5f796747705f`} submitText={`Download PDF`} formContainer={`download-pdf-${randomNum}`} uid={randomNum} />
											)}
										</div>
									</div>
								</div>
							</div>
						)}
						
						{block.cta_text != '' && block.cta_text_2 != '' && (
							<div className='btn-group mt-default'>
								<Button type={block.external_link} text={block.cta_text} link={block.cta_link} popupID={block.popup} popupHeading={block.popup_title} popupDesc={block.popup_description} phone={block.phone}/>
								<Button type={block.external_link_2} text={block.cta_text_2} link={block.cta_link_2} popupID={block.popup_2} popupHeading={block.popup_title_2} popupDesc={block.popup_description_2} phone={block.phone_2}/>
							</div>
						) || block.cta_text != '' && (
							<div className='mt-default'>
								<Button type={block.external_link} text={block.cta_text} link={block.cta_link} popupID={block.popup} popupHeading={block.popup_title} popupDesc={block.popup_description} phone={block.phone}/>
							</div>
						)}

						{block.form_id && (
							<div className='mt-3'>
								<HubspotForm formID={block.form_id} submitText={block.form_submit_button} formContainer={`block--p-${randomNum}`} uid={randomNum} />
							</div>
						)}
					</div>

					{block.section_image_url && (
						<div className={`img-wrap col-sm-12 ${imageCol} offset-lg-0 d-flex justify-content-center sk-sticky`}>
							<div className='img-content'>
								<picture><Image src={block.section_image_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block.section_image_alt} height='450' width='450' className='animated zoomIn'/></picture>
							</div>
						</div>
					)}

					{block.video_id && block.video_id != '' && (
						<div className={`video-wrap col-sm-12 col-md-8 offset-md-2 d-flex justify-content-center ${imageCol} offset-lg-0 sk-sticky`}>
							{block.video_preview_image_url && block.video_preview_image_url != '' && (
								<picture className='d-flex'><Image src={block.video_preview_image_url} alt={block.video_preview_image_alt} width='800' height='800' className='animated zoomIn' /></picture>
							)}

							{block.video_type == 'youtube' && (
								<button aria-label='Play Youtube video' data-video-emebed-id={block.video_id} className='landing-video-btn careers-video-btn'>
									<span className="circle-core" style={{transform: 'translate(0px, 0px)'}}>
											<span className="play-video-icon-landing"></span>
									</span>
									<span className="circle-inner" style={{transform: 'translate(-50%, -50%) translate(-0.1484px, -0.1484px)'}}></span>
									<span className="circle-outer" style={{transform: 'translate(-50%, -50%) translate(-0.07px, -0.07px)'}}></span>
								</button>
							)}
							{block.video_type == 'vimeo' && (
								<button aria-label='Play Vimeo video' data-video-emebed-id={block.video_id} className='landing-video-btn careers-video-btn'>
									<span className="circle-core" style={{transform: 'translate(0px, 0px)'}}>
											<span className="play-video-icon-landing"></span>
									</span>
									<span className="circle-inner" style={{transform: 'translate(-50%, -50%) translate(-0.1484px, -0.1484px)'}}></span>
									<span className="circle-outer" style={{transform: 'translate(-50%, -50%) translate(-0.07px, -0.07px)'}}></span>
								</button>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}