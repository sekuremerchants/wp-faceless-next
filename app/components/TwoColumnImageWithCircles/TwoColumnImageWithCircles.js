import Image from 'next/image'
import { Button } from '@/components/Button'
import { FormatContent } from '@/components/FormatContent'
import '@/styles/blocks/two-column-image-left.css'

export const TwoColumnImageWithCircles = ({block}) => {
	//console.log('TwoColumnImageWithCircles block data: ', block)

	const IDattr = block.section_id && block.section_id != '' ? {id: block.section_id} : ''

	return (
		<section {...IDattr} className={`ov-hidden sekure-block sk-block circle-info-section-anim content-col-img image-${block.image_position} prel op-0 ${block.section_classes}`}>
			<div className='container prel'>
				<div className='row'>
					<div className='col-sm-12 col-lg-6'>
						{block.content_above_image && block.content_above_image != '' && (
							<div dangerouslySetInnerHTML={{__html: FormatContent(block.content_above_image)}}></div>
						)}

						<div className='img-wrap'>
							<div className='scale-in-circle img-width-wrap'>
								{block.column_image_url != '' && block.column_image_url != false && (
									<Image src={block.column_image_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block.column_image_alt} height='644' width='644' className='column-image' />
								)}
							</div>
							<div className='fade-in-circle circle-blue abs-cover-el'></div>
          		<div className='fade-in-circle circle-border abs-cover-el'></div>
          		<div className='fade-in-circle circle-gray abs-cover-el'></div>
						</div>
					</div>
					<div className='col-sm-12 col-lg-6'>
						{block.column_content && block.column_content != '' && (
							<div className='txt-content' dangerouslySetInnerHTML={{__html: FormatContent(block.column_content)}}></div>
						)}
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