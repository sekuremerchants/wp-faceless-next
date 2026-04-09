import Image from 'next/image'
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

	const person = '— ' + block.person + ','

	return (
		<section id={block.section_id} className={`sk-block sekure-block block-quote-hero prel ov-hidden op-0 ${block.section_classes}`}>
			{block.background_image_url && (
				<Image src={block.background_image_url} alt={block.background_image_alt} height='1080' width='1440' className='bg-image object-cover' />
			)}

			<div className='container prel'>
				<div className='row'>
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
					</div>
				</div>
			</div>
		</section>
	)
}