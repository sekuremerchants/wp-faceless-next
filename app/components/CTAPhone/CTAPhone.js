import "@/styles/blocks/sk-cta-phone.css";
import { Button } from "@/components/Button"
import Link from 'next/link'

export const CTAPhone = ({block, type}) => {
	//console.log('CTA PHONE BLOCK DATA: ', block)

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
			if(content.includes('[sekure_icon ')){
				const shortcodeData = content.split(' ')
				const url = shortcodeData[1].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
				const classes = shortcodeData.at(-1).replace("classes='", '').replace("']",'')
				return `<img src='${url}' alt='icon' height='50' width='50' class='${classes}'>`
			} else if(content.includes('[phone]')) {
				const newContent = content.replace(/\[phone\]/g, '<a href="tel:8667107382">(866) 710-7382</a>')
				return newContent
			} else if(content != '' && !hasHTML(content)){
				return `<p>${content}</p>`
			} else {
				return content.trim()
			}
		}).join('')
		return formatted
	}

	const CTAtype = (type && type == 'legacy') ? type : false
	const bgColour = CTAtype == 'legacy' ? 'bg-blue' : ''
	const columnSize = CTAtype == 'legacy' ? 'col-sm-12 col-md-8 offset-md-2' : 'col-sm-12'

	return (
		<section id={block.section_id} className={`sk-block block--psk13 cta-phone ${bgColour} ${block.section_classes}`}>
			<div className='container'>
				<div className='text-content row'>
					<div className={columnSize}>
						{block.content && block.content != '' && (
							<div className='content-wrapper' dangerouslySetInnerHTML={{__html: formatContent(block.content)}}></div>
						)}

						{block.cta_text && block.cta_text != '' && (
							<div className='col-sm-12 mt-default'><Button type={block.external_link} text={block.cta_text} link={block.cta_link} popupID={block.popup} popupHeading={block.popup_title} popupDesc={block.popup_description} /></div>
						)}

						{CTAtype == 'legacy' && (
							<div className='text-center'>
								{block.cta_button_heading != '' && (
									<h2 className='heading-anim'>{block.cta_button_heading}</h2>
								)}

								{block.cta_button_text != '' && (
									<div className='txt-post-rtf' dangerouslySetInnerHTML={{__html: formatContent(block.cta_button_text)}}></div>
								)}

								{block.cta_button_cta_text != '' && (
									block.cta_button_external_link == 'yes' && (
										<Link href={block.cta_button_cta_link.url} target='_blank' className='btn-default size-18-txt ltr-spc-neg-0_2 c-blue-1 btn-green-1 section-color-blue btn-offset-12 fw-700 mt-default'>
											<span className='btn-bg-el'></span>
											<span className='btn-txt'>{block.cta_button_cta_text}</span>
										</Link>
									)
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}