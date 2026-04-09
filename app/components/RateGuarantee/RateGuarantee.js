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

	return (
		<section id={block.section_id} className={`content-block-holder sk-block block--i op-0 ${bgColour} ${block.section_classes}`}>
			<div className='container'>
				<div className='circle-info-white-block content-block row gap-rows'>

					<div className='txt-content col-sm-12 col-lg-5'>
						{block.heading && (
							<h2 dangerouslySetInnerHTML={{__html: block.heading}}></h2>
						)}
						{block.text_content && (
							<div className='txt-wrap' dangerouslySetInnerHTML={{__html: formattedContent}}></div>
						)}
						{block.cta_text && (
							<div className='mt-default'>
								<Button type={block.external_link} text={block.cta_text} link={block.cta_link} popupID={block.popup} popupHeading={block.popup_title} popupDesc={block.popup_description} phone={block.phone}/>
							</div>
						)}
					</div>

					<div className='img-txt-col col-sm-12 col-lg-7'>
						<div className='img-wrap'>
							<picture><Image src={block.image_url} alt={block.image_alt} height='450' width='450' className='info-white-section-img' /></picture>

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