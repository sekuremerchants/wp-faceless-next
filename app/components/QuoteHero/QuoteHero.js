import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import '@/styles/blocks/quote-hero.css'

export const QuoteHero = ({block}) => {
	//console.log('QUOTE HERO BLOCK DATA: ', block)

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<[^>]*>/i.test(str);
			if(content.includes('[sekure_icon ')){
				const shortcodeData = content.split(' ')
				const url = shortcodeData[1].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
				const classes = shortcodeData.at(-1).replace("classes='", '').replace("']",'')
				return `<img src='${url}' alt='icon' height='50' width='50' class='${classes}'>`
			}
			if(content != '' && !hasHTML(content)){
				return `<p>${content}</p>`
			} else {
				return content.trim()
			}
		}).join('')
		return formatted
	}

	const contentRight = block.content_position == 'right' ? 'd-flex justify-content-end' : ''
	const contentCenter = block.content_position == 'center' ? 'd-flex justify-content-center' : ''
	const person = '— ' + block.person + ','
	const videoCTAcount = block.videos > 0 ? block.videos - 1 : false
	let x = 0
	let videoCTAs = []

	while(x <= videoCTAcount){
		let cta = {
			type: block[`videos_${x}_video_type`],
			video_id: block[`videos_${x}_video_id`],
			text: block[`videos_${x}_button_text`],
		}

		videoCTAs.push(cta)

		x++
	}

	return (
		<section id={block.section_id} className={`sk-block sekure-block block-quote-hero prel ov-hidden op-0 ${block.section_classes}`}>
			{block.background_image_url && (
				<Image src={block.background_image_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block.background_image_alt} height='1080' width='1440' className='bg-image object-cover' />
			)}

			<div className={`container prel`}>
				<div className={`row ${contentRight} ${contentCenter}`}>
					<div className='col-sm-12 col-md-10 col-lg-7 col-xl-6'>
						{block.heading != '' && (
							<h2 className='quote-heading c-white prel mb-5'>{block.heading}</h2>
						)}

						{block.content != '' && (
							<div className='quote-content text-white prel' dangerouslySetInnerHTML={{__html: formatContent(block.content)}}></div>
						)}

						{block.person != '' && (
							<p className='quote-person fw-700 mb-0 c-white' dangerouslySetInnerHTML={{__html: person}}></p>
						)}

						{block.title != '' && (
							<p className='quote-title c-white' dangerouslySetInnerHTML={{__html: block.title}}></p>
						)}

						{videoCTAcount > 0 && videoCTAs.length > 0 && (
							<div className='btn-group d-flex flex-column gap-3'>
								{videoCTAs.map((element, index) => (
									<Link key={index} href='#' data-video-embed-id={element.video_id} className='btn-default btn-ghost-white sk-cta-btn btn-offset-9'>
										<span className="btn-bg-el"></span>
										<span className="btn-txt">{element.text}</span>
									</Link>
								))}

								{block.cta_text != '' && (
									<Button type={block.external_link} text={block.cta_text} link={block.cta_link} />
								)}
							</div>
						) || (
							<>
								{block.cta_text != '' && (
									<Button type={block.external_link} text={block.cta_text} link={block.cta_link} />
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}