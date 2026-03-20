import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import { Heading } from '../Heading'
import '@/styles/blocks/blog-cta.css'
import { HubspotForm } from '@/components/HubspotForm'

export const BlogCTA = async ({block, sectionID, sectionClasses, title, content, image, imageStyle, showNewsletter, ctaText, ctaType, ctaLink, newsletterSubmitText, newsletterAlternateForm}) => {
	var data;

	if(image){
		const getImageDataQuery = `
			query getImageData($imageID: Int!) {
				mediaItems(where: {id: $imageID}) {
					nodes {
						altText
						sourceUrl
					}
				}
			}
		`;
		const queryVariables = {
			imageID: image,
		};

		const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: getImageDataQuery,
				variables: queryVariables,
			}),
		});
		var { data } = await res.json();
	}

	const formattedContent = content.split('\r\n').map(content => {
		const hasHTML = (str) => /<[^>]*>/i.test(str);
		if(content != '' && !hasHTML(content)){
			return `<p>${content}</p>`
		} else {
			return content.trim()
		}
	}).join('')

	let imageClass = image ? 'w-image': 'w-svg'
	imageClass = showNewsletter ? imageClass + ' w-form' : imageClass
	const customSubmitText = newsletterSubmitText ? 'btn-custom-text' : ''
	const scriptHTML = `hbspt.forms.create({
											region: 'na3',
											portalId: '4438792',
											formId: 'd74be8e6-676d-43a4-a3cf-5f796747705f',
										});`

	return (
		<section id={sectionID} className={`content-block-holder sk-block blog-cta block--bsk8 py-0 op-0 ${sectionClasses}`}>
			<div className={`sk-blog-block blog-cta col-xs-12 bg-blue d-inline-block w-100 ${imageClass} ${imageStyle}`}>
				{image && (
					<div className='image-block'>
						<picture className='d-flex'><Image src={data.mediaItems.nodes[0].sourceUrl} alt={data.mediaItems.nodes[0].altText} width="100" height="100" className="cta-img flex-fill"/></picture>
					</div>
				)}
				<div className="inner-wrapper">
					<div className="col-xs-12 col-md-10 col-lg-8 cta-content">
						{title && (
							<Heading content={title} level='2'/>
						)}
						{content && (
							<div className="text-white" dangerouslySetInnerHTML={{__html: formattedContent}}></div>
						)}
						{ctaText && (
							ctaType != 'form' && (
								<Link href={ctaLink.url} className="btn btn-download">{ctaText}</Link>
							) ||
							ctaType == 'form' && (
								<Link href='#' data-popup-id={block.popup} className='btn btn-download'>{ctaText}</Link>
							)
						)}
					</div>
					{showNewsletter != 0 && (
						<div className={`col-xs-12 col-md-10 col-lg-8 cta-form ${customSubmitText}`} data-custom-text={newsletterSubmitText}>
							<div className="newsletter-form">
								{newsletterAlternateForm == false && (
									<HubspotForm formID={`af53f05c-0de7-4d0e-84e7-3808b18819d0`} formContainer={`blogcta`}/>
								)} 
								{newsletterAlternateForm && (
									newsletterAlternateForm
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}