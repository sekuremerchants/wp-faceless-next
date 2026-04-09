import Image from 'next/image'
import { Button } from '@/components/Button'
import '@/styles/blocks/two-column-image-left.css'

export const TwoColumnImageWithCircles = ({block}) => {
	//console.log('TwoColumnImageWithCircles block data: ', block)

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span)\b))[^>]+>/i.test(str);
			if(content.includes('[sekure_icon ')){
				const shortcodeData = content.split(' ')
				const url = shortcodeData[1].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
				const classes = shortcodeData.at(-1).replace("classes='", '').replace("']",'')
				return `<img src='${url}' alt='icon' height='50' width='50' class='${classes}'>`
			} else if(content != '' && !hasHTML(content)){
				return `<p>${content}</p>`
			} else {
				return content.trim()
			}
		}).join('')
		return formatted
	}

	return (
		<section id={block.section_id} className={`ov-hidden sekure-block sk-block circle-info-section-anim content-col-img image-${block.image_position} prel op-0 ${block.section_classes}`}>
			<div className='container prel'>
				<div className='row'>
					<div className='col-sm-12 col-lg-6'>
						{block.content_above_image != '' && (
							<div dangerouslySetInnerHTML={{__html: formatContent(block.content_above_image)}}></div>
						)}

						<div className='img-wrap'>
							<div className='scale-in-circle img-width-wrap'>
								{block.column_image_url != '' && block.column_image_url != false && (
									<Image src={block.column_image_url} alt={block.column_image_alt} height='644' width='644' className='column-image' />
								)}
							</div>
							<div className='fade-in-circle circle-blue abs-cover-el'></div>
          		<div className='fade-in-circle circle-border abs-cover-el'></div>
          		<div className='fade-in-circle circle-gray abs-cover-el'></div>
						</div>
					</div>
					<div className='col-sm-12 col-lg-6'>
						<div className='txt-content' dangerouslySetInnerHTML={{__html: formatContent(block.column_content)}}>

						</div>
						{block.cta_text != '' && (
							<div className='mt-default'>
								<Button type={block.external_link} text={block.cta_text} link={block.cta_link} popupID={block.popup} popupHeading={block.popup_title} popupDesc={block.popup_description} phone={block.phone}/>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}