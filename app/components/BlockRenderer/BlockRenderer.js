import { Heading } from '@/components/Heading'
import { Paragraph } from '@/components/Paragraph'
import { List } from '@/components/List'
import { BlogCTA } from '@/components/BlogCTA'
import { MultiColumnTable } from '@/components/MultiColumnTable'
import { Embed } from '@/components/Embed'
import { CustomHTML } from '@/components/CustomHTML'
import { BlogQuote } from '@/components/BlogQuote'
import { FAQ } from '@/components/FAQ'
import { ComparisonTable } from '@/components/ComparisonTable'
import { BlogIcons } from '@/components/BlogIcons'
import { SKbutton } from '@/components/SKbutton'
import { Hero } from '@/components/Hero'
import { HalfTextHalfImage } from '@/components/HalfTextHalfImage'
import { BlocksGeneral } from '@/components/BlocksGeneral'
import { RateGuarantee } from '@/components/RateGuarantee'
import { ContactLightBlue } from '@/components/ContactLightBlue'
import { EdgeCalculator } from '@/components/EdgeCalculator'
import { TwoColumnImageWithCircles } from '@/components/TwoColumnImageWithCircles'
import { QuoteHero } from '@/components/QuoteHero'
import { OurPartners } from '@/components/OurPartners'
import { TestimonialsSlider } from '@/components/TestimonialsSlider'
import Image from 'next/image'

const mediaItemQuery = `
	query getImageData($imageID: Int!) {
		mediaItems(where: {id: $imageID}) {
			nodes {
				altText
				sourceUrl
			}
		}
	}
`;

async function getMediaItemData(id){
	const queryVariables = {
		imageID: id,
	};
  const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: mediaItemQuery,
			variables: queryVariables,
    }),
  });
  const { data } = await res.json();

	if(data){
		return data.mediaItems.nodes[0]
	} else {
		return null
	}
}

export const BlockRenderer = ({blocks}) => {
	return blocks.map(async (block, index) => {
		switch(block.name){
			case 'core/heading': {
				return (<Heading key={index} content={block.attributes.content} level={block.attributes.level}/>)
			}
			case 'core/paragraph' : {
				return (<Paragraph key={index} content={block.attributes.content}/>)
			}
			case 'core/list': {
				return (
					<List key={index} attributes={block.attributes} listItems={block.innerBlocks}/>
				)
			}
			case 'core/embed': {
				return (
					<Embed key={index} block={block.attributes} />
				)
			}
			case 'core/image': {
				return (
					<Image key={index} src={block.attributes.url} alt={block.attributes.alt} width='1024' height='768' className='op-0 mb-4'/>
				)
			}
			case 'acf/blog-cta': {
				return (
					<BlogCTA key={index} uid={index} block={block.attributes.data} sectionID={block.attributes.data.section_id} sectionClasses={block.attributes.data.section_classes} title={block.attributes.data.title} content={block.attributes.data.content} image={block.attributes.data.image ? block.attributes.data.image : false} imageStyle={block.attributes.data.image_style} showNewsletter={block.attributes.data.show_newsletter_form} newsletterSubmitText={block.attributes.data.newsletter_submit_text ? block.attributes.data.newsletter_submit_text : false} newsletterAlternateForm={block.attributes.data.alternate_newsletter_form ? block.attributes.data.alternate_newsletter_form : false} ctaText={block.attributes.data.cta_text} ctaType={block.attributes.data.external_link} ctaLink={block.attributes.data.cta_link}/>
				)
			}
			case 'acf/multi-columns-table': {
				return (
					<MultiColumnTable key={index} block={block.attributes.data}/>
				)
			}
			case 'acf/custom-html': {
				return (
					<CustomHTML key={index} block={block.attributes.data} />
				)
			}
			case 'acf/blog-quote': {
				return (
					<BlogQuote key={index} block={block.attributes.data} />
				)
			}
			case 'acf/faq': {
				return (
					<FAQ key={index} block={block.attributes.data} />
				)
			}
			case 'acf/comparison-table': {
				const logoOne = block.attributes.data.comparison_table_logo_one ? await getMediaItemData(block.attributes.data.comparison_table_logo_one) : '';
				const logoTwo = block.attributes.data.comparison_table_logo_two ? await getMediaItemData(block.attributes.data.comparison_table_logo_two) : '';
				return (
					<ComparisonTable key={index} block={block.attributes.data} logoOne={logoOne} logoTwo={logoTwo} />
				)
			}
			case 'acf/blog-icons': {
				return (
					<BlogIcons block={block.attributes.data} />
				)
			}
			case 'acf/sk-button': {
				return (
					<SKbutton block={block.attributes.data} />
				)
			}
			case 'acf/sk-page-hero': {
				const bgImage = block.attributes.data.hero_background_image ? await getMediaItemData(block.attributes.data.hero_background_image) : '';
				const industryIcon = block.attributes.data.industry_icon ? await getMediaItemData(block.attributes.data.industry_icon) : '';
				const transparentIcon = block.attributes.data.transparent_icon ? await getMediaItemData(block.attributes.data.transparent_icon) : '';
				return (
					<Hero block={block.attributes.data} bgImage={bgImage} industryIcon={industryIcon} transparentIcon={transparentIcon} />
				)
			}
			case 'acf/half-text-half-image': {
				const image = block.attributes.data.image != '' ? await getMediaItemData(block.attributes.data.image) : ''
				return (
					<HalfTextHalfImage block={block.attributes.data} image={image}/>
				)
			}
			case 'acf/blocks-general': {
				return (
					<BlocksGeneral block={block.attributes.data} />
				)
			}
			case 'acf/rate-guarantee': {
				return (
					<RateGuarantee block={block.attributes.data} />
				)
			}
			case 'acf/contact-section-light-blue': {
				return (
					<ContactLightBlue block={block.attributes.data} />
				)
			}
			case 'acf/edge-calculator': {
				return (
					<EdgeCalculator block={block.attributes.data} />
				)
			}
			case 'acf/two-column-image-left': {
				return (
					<TwoColumnImageWithCircles block={block.attributes.data} />
				)
			}
			case 'acf/quote-hero': {
				return (
					<QuoteHero block={block.attributes.data} />
				)
			}
			case 'acf/sk-our-partners': {
				return (
					<OurPartners block={block.attributes.data} />
				)
			}
			case 'acf/sk-content-testimonials': {
				return (
					<TestimonialsSlider block={block.attributes.data} />
				)
			}
			case 'core/more': {
				return null
			}
			default: {
				//console.log("BLOCK DATA: ", block)
				return (
					<h2 key={index} className='c-red-2'>{block.name}</h2>
				)
			}
		}
	})
}