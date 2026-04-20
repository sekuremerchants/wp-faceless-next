import { Button } from '@/components/Button'
import { HubspotForm } from '@/components/HubspotForm'
import Image from 'next/image'

export const HalfTextHalfImage = ({block, image}) => {
	//console.log('HALF TEXT HALF IMAGE BLOCK DATA: ', block)

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
		} else if(content != '' && !hasHTML(content)){
			return `<p>${content}</p>`
		} else {
			return content.trim()
		}
	}).join('')

	return (
		<section id={block.section_id} className={`sk-block content-block-holder block--p media-content-block ov-hidden op-0 ${block.section_classes} ${bgColour}`}>

			{block.background_image_url && (
				<Image src={block.background_image_url} alt={block.background_image_alt} width='1440' height='980' className='bg-image object-cover' />
			)}

			<div className='container prel z-2'>
				<div className={`media-block ${imagePosition} video-media content-block row gap-rows align-items-start justify-content-between`}>

					<div className={`txt-content col-sm-12 ${contentColSize} animated fadeIn`}>
						<div dangerouslySetInnerHTML={{__html: formattedContent}}></div>
						
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
							<HubspotForm formID={block.form_id} formContainer={`block--p-${randomNum}`} uid={randomNum} />
						)}
					</div>

					{block.section_image_url && (
						<div className='img-wrap col-sm-12 col-lg-5 d-flex justify-content-center sk-sticky'>
							<div className='img-content'>
								<picture><Image src={block.section_image_url} alt={block.section_image_alt} height='450' width='450' className='animated zoomIn'/></picture>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}