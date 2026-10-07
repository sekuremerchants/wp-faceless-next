import { FormatContent } from '@/components/FormatContent'
import Image from 'next/image'
import '@/styles/blocks/media-list-items.css'

export const MediaListItems = ({block}) => {
	//console.log('MEDIA LIST ITEMS BLOCK DATA: ', block)

	const bgColour = block.full_width_with_background == 'Yes' ? 'full-width-bg' : ''
	const listCount = block.list > 0 ? block.list - 1 : false

	if(listCount){
		var listData = []
		let listIndex = 0

		while(listIndex <= listCount){
			let list = {
				heading: block[`list_${listIndex}_heading`],
				content: block[`list_${listIndex}_content`]
			}

			listData.push(list)

			listIndex++
		}
	}
	
	return (
		<section id={block.section_id} className={`sk-block block--q content-block-holder prel op-0 ${bgColour} ${block.section_classes}`}>
			<div className='container'>

				{block.content && block.content != '' && (
					<div className='row gap-rows mb-5'>
						{block.image_url && block.image_url != '' && (
							<div className='img-wrap col-sm-12 d-block d-sm-block d-lg-none'>
								<div className='img-content'>
									<picture className='d-flex'><Image src={block.image_url} alt={block.image_alt} width='578' height='578' /></picture>
								</div>
							</div>	
						)}

						<div className='col-sm-12' dangerouslySetInnerHTML={{__html:FormatContent(block.content)}}></div>
					</div>
				)}

				<div className='media-list-items-block media-block media-right content-block row gap-rows row-eq-height'>
					{block.image_url && block.image_url != '' && (
						<div className='img-wrap col-sm-12 justify-content-center col-lg-6 h-100 d-none d-sm-none d-lg-flex sk-sticky'>
							<div className='img-content'>
								<picture className='d-flex'><Image src={block.image_url} alt={block.image_alt} width='578' height='578' /></picture>
							</div>
						</div>
					)}

					<div className='col-sm-12 col-lg-6'>
						{listData && (
							<div className='list-items-content'>
								{listData.map((item, index) => (
									<div key={index} data-number={index + 1} className='list-item'>
										{item.heading != '' && (
											<h3 className='list-item-title'>{item.heading}</h3>
										)}
										{item.content != '' && (
											<div className='list-item-txt' dangerouslySetInnerHTML={{__html: FormatContent(item.content)}}></div>
										)}
									</div>
								))}
							</div>
						)}
					</div>
				</div>

			</div>
		</section>
	)
}