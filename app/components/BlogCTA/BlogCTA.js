import Image from 'next/image'
import { Heading } from '../Heading'

export const BlogCTA = async ({sectionID, sectionClasses, title, content, image, imageStyle, showNewsletter, ctaText, ctaType, ctaLink, newsletterSubmitText, newsletterAlternateForm}) => {
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

	const imageClass = image ? 'w-image': 'w-svg';
	const customSubmitText = newsletterSubmitText ? 'btn-custom-text' : '';
	const scriptHTML = `hbspt.forms.create({
											region: 'na1',
											portalId: '4438792',
											formId: 'd74be8e6-676d-43a4-a3cf-5f796747705f',
										});`;

	return (
		<section id={sectionID} className={`content-block-holder sk-block blog-cta block--bsk8 py-0 ${sectionClasses}`}>
			<div className={`sk-blog-block blog-cta col-xs-12 bg-blue d-inline-block w-100 ${imageClass} ${imageStyle}`}>
				{image && (
					<div className='image-block'>
						<Image src={data.mediaItems.nodes[0].sourceUrl} alt={data.mediaItems.nodes[0].altText} width="100" height="100" className="cta-img"/>
					</div>
				)}
				<div className="inner-wrapper">
					<div className="col-xs-12 col-md-10 col-lg-8 cta-content">
						{title && (
							<Heading content={title} level='2'/>
						)}
						{content && (
							<p className="text-white" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{__html: content}}></p>
						)}
						{ctaText && (
							<a href={ctaLink.url} className="btn btn-download">{ctaText}</a>
						)}
					</div>
					{showNewsletter != 0 && (
						<div className={`col-xs-12 col-md-10 col-lg-8 cta-form ${customSubmitText}`} data-custom-text={newsletterSubmitText}>
							<div className="newsletter-form">
								{newsletterAlternateForm == false && (
									<script dangerouslySetInnerHTML={{__html: scriptHTML}}></script>
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