import { Button } from '@/components/Button'
import { HubspotForm } from '@/components/HubspotForm'
import Image from 'next/image'

export const HalfTextHalfImage = ({block, image}) => {
	console.log('HALF TEXT HALF IMAGE BLOCK DATA: ', block)

	const bgColour = block.full_width_with_background != '0' ? 'full-width-bg' : ''
	const imagePosition = block.image_position == 'right' ? '' : 'flex-row-reverse'
	const contentColSize = block.column_sizing == 'image-small-column-fill' ? 'col-lg-8' : 'col-lg-6'
	const randomNum = Math.floor(Math.random() * 73)

	const formattedContent = block.text_content.split('\r\n').map(content => {
		const hasHTML = (str) => /<(?!(\/?(strong|span)\b))[^>]+>/i.test(str);
		if(content != '' && !hasHTML(content)){
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

					{block.section_image_url != '' && (
						<div className='img-wrap col-sm-12 col-md-8 col-lg-5 offset-md-2 offset-lg-0 d-flex justify-content-center sk-sticky'>
							<div className='img-content'>
								<Image src={block.section_image_url} alt={block.section_image_alt} height='450' width='450' className='animated zoomIn'/>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}