import Image from 'next/image'
import { Button } from '@/components/Button'
import '@/styles/blocks/blocks-general.css'

export const BlocksGeneral = ({block}) => {

	//console.log('BLOCKS GENERAL BLOCK DATA: ', block)

	const bgColour = block.full_width_with_background == 'Yes' ? 'full-width-bg' : ''
	const blocksCount = block.blocks - 1
	let x = 0
	let blocks = []

	while(x <= blocksCount){
		let image = `blocks_${x}_image_url`
		let imageAlt = `blocks_${x}_image_alt`
		let content = `blocks_${x}_content`

		const formattedContent = block[content].split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
			if(content.includes('[phone-icon-blue]')){
				return content.replace('[phone-icon-blue]', '<svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><g clip-path="url(#clip0_63_2933)"><path d="M23.9926 0C10.7481 0 3.05176e-05 10.7481 3.05176e-05 23.9925C3.05176e-05 37.237 10.7481 47.985 23.9926 47.985C37.237 47.985 47.9851 37.237 47.9851 23.9925C47.9851 10.7481 37.252 0 23.9926 0ZM36.9381 32.7973C36.8783 32.9019 36.8035 33.0215 36.7288 33.1411C35.9963 34.2473 34.4416 35.8916 34.4416 35.8916C32.005 37.7602 26.7431 35.1741 26.7431 35.1741C16.6229 29.9421 11.4656 20.4198 11.4656 20.4198C9.5223 16.5332 12.6914 12.4522 12.6914 12.4522C14.5002 10.2846 17.2208 12.2579 17.2208 12.2579L20.0312 14.4852C21.84 15.9801 19.9116 17.9383 19.9116 17.9383C17.3703 20.36 19.0446 22.0193 19.0446 22.0193C21.0626 24.6353 26.4591 29.1199 26.4591 29.1199C28.4771 30.0766 29.673 27.5652 29.673 27.5652C30.6596 25.9059 32.7674 27.3261 32.7674 27.3261L35.0246 28.9854C36.8035 30.4204 37.5211 31.721 36.9231 32.7973H36.9381Z" fill="#002ea6"></path></g><defs><clipPath id="clip0_63_2933"><rect width="48" height="48" fill="white"></rect></clipPath></defs></svg>')
			} else if(content.includes('[sekure_icon ')){
				const regex = /\[sekure_icon(.*?)\]/g
				const matches = [...content.matchAll(regex)]
				const urlRegex = /icon-url="([^"]+)"/g
				const urlMatches = [...matches[0][0].matchAll(urlRegex)]
				const url = urlMatches[0][0].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
				const shortcodeImage = `<img src='${url}' alt='icon' height='40' width='40' style='width:40px;height:40px;' class=''>`
				const newContent = content.replace(matches[0][0], shortcodeImage)
				
				return newContent.trim()
			} else if(content != '' && !hasHTML(content)){
				return `<p>${content}</p>`
			} else {
				return content.trim()
			}
		}).join('')

		let singleBlock = {
			image: block[image],
			imageAlt: block[imageAlt],
			content: formattedContent,
		}

		blocks.push(singleBlock)

		x++
	}	

	const formattedContent = block.content.split('\r\n').map(content => {
		const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
		if(content != '' && !hasHTML(content)){
			return `<p>${content}</p>`
		} else {
			return content.trim()
		}
	}).join('')

	const blocksFooter = block.footer.split('\r\n').map(content => {
		const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
		if(content != '' && !hasHTML(content)){
			return `<p>${content}</p>`
		} else {
			return content.trim()
		}
	}).join('')

	return (
		<section id={block.section_id} className={`content-block-holder sk-block blocks prel ov-hidden op-0 ${bgColour} ${block.section_classes}`}>
			<div className='container prel z-2'>
				<div className='row'>

					{block.content != '' && (
						<div className='col-sm-12 col-lg-8 mb-5' dangerouslySetInnerHTML={{__html: formattedContent}}></div>
					)}

					{block.blocks && block.blocks > 0 && (
						<div className={`blocks-grid blocks-grid-${block.blocks_per_row} gap-cols gap-rows blocks-type-${block.blocks_type}`}>
							{blocks.map((element, index) => (
								<div key={index} className='block'>
									{element.image && (
										<picture><Image src={element.image} alt={element.imageAlt} height='578' width='578' /></picture>
									)}

									{element.content != '' && (
										<div className='block-content' dangerouslySetInnerHTML={{__html: element.content}}></div>
									)}
								</div>
							))}
						</div>
					)}

					{block.footer && (
						<div className='col-sm-12 mt-5' dangerouslySetInnerHTML={{__html: blocksFooter}}></div>
					)}

					{block.cta_text && (
						<div className='mt-default'>
							<Button type={block.external_link} text={block.cta_text} link={block.cta_link} popupID={block.popup} popupHeading={block.popup_title} popupDesc={block.popup_description} phone={block.phone}/>
						</div>
					)}

				</div>
			</div>
		</section>
	)
}