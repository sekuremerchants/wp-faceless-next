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
import { FullWidthText } from '@/components/FullWidthText'
import { Products } from '@/components/Products'
import { Expert } from '@/components/Expert'
import { Survey } from '@/components/Survey'
import { Panels } from '@/components/Panels'
import { Awards } from '@/components/Awards'
import { CTAPhone } from '@/components/CTAPhone'
import { ContactForm } from '@/components/ContactForm'
import { TalkToUs } from '@/components/TalkToUs'
import { TwoColumnBuilder } from '@/components/TwoColumnBuilder'
import { ImageCarousel } from '@/components/ImageCarousel'
import { Infographic } from '@/components/Infographic'
import { IndustryShowcase } from '@/components/IndustryShowcase'
import { MerchantSpotlight } from '@/components/MerchantSpotlight'
import { MediaListItems } from '@/components/MediaListItems'
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

const awardsQuery = `
query NewQuery {
  nodeByUri(uri: "careers") {
    ... on Page {
      careersPage {
        awardsSection {
          singleAward {
            image {
              node {
                altText
                file
                filePath
                link
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
}
`

const industriesQuery = `
	query NewQuery {
		industries(first: 30, where: {orderby: {field: TITLE, order: ASC}}) {
			nodes {
				title
				industriesTemplateHomePageIcon {
					iconIndustry
				}
				postLanguage {
					contentLanguage
				}
			}
		}
	}
`

const postsQuery = `
query NewQuery {
  posts(
    first: 9, where: {taxQuery: {taxArray: {taxonomy: CONTENTTYPE, field: ID, terms: "282"}}}
  ) {
    nodes {
      uri
      title
      excerpt
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
    }
  }
}
`

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

export const BlockRenderer = async ({postID, blocks, language}) => {

	const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: awardsQuery,
    }),
  });
  const { data } = await res.json();
	var awards;

	if(data.nodeByUri){
		awards = data.nodeByUri.careersPage.awardsSection.singleAward
	}

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
					<OurPartners type={`our-partners`} block={block.attributes.data} />
				)
			}
			case 'acf/partners': {
				return (
					<OurPartners type={`partners`} block={block.attributes.data} />
				)
			}
			case 'acf/sk-content-testimonials': {
				return (
					<TestimonialsSlider block={block.attributes.data} />
				)
			}
			case 'acf/full-width-txt-content': {
				return (
					<FullWidthText block={block.attributes.data} />
				)
			}
			case 'acf/products': {
				return (
					<Products block={block.attributes.data} />
				)
			}
			case 'acf/expert': {
				return (
					<Expert block={block.attributes.data} />
				)
			}
			case 'acf/sk-page-survey': {
				return (
					<Survey postID={postID} block={block.attributes.data} language={language} />
				)
			}
			case 'acf/sk-panel-video': {
				return (
					<Panels postID={postID} block={block.attributes.data} />
				)
			}
			case 'acf/awards': {
				return (
					<Awards postID={postID} block={block.attributes.data} awards={awards} />
				)
			}
			case 'acf/sk-cta-phone': {
				return (
					<CTAPhone postID={postID} block={block.attributes.data} />
				)
			}
			case 'acf/cta-button': {
				return (
					<CTAPhone postID={postID} block={block.attributes.data} type='legacy' />
				)
			}
			case 'acf/contact-form-section': {
				return (
					<ContactForm postID={postID} block={block.attributes.data} />
				)
			}
			case 'acf/talk-to-us': {
				return (
					<TalkToUs postID={postID} language={language} />
				)
			}
			case 'acf/two-column-builder': {
				return (
					<TwoColumnBuilder postID={postID} block={block.attributes.data} />
				)
			}
			case 'acf/image-carousel': {
				return (
					<ImageCarousel postID={postID} block={block.attributes.data} />
				)
			}
			case 'acf/sk-infographic': {
				return (
					<Infographic postID={postID} block={block.attributes.data} />
				)
			}
			case 'acf/sk-merchant-spotlight': {
				const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						query: postsQuery,
					}),
				});
				const { data } = await res.json();
				if(data && data.posts != null) {
					var posts = data.posts.nodes
				}
				return (
					<MerchantSpotlight postID={postID} block={block.attributes.data} posts={posts} />
				)
			}
			case 'acf/sk-industries-showcase': {
				const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						query: industriesQuery,
					}),
				});
				const { data } = await res.json();
				if(data && data.industries != null) {
					var industries = data.industries.nodes
				}
				return (
					<IndustryShowcase postID={postID} block={block.attributes.data} industries={industries} />
				)
			}
			case 'acf/media-list-items' : {
				return (
					<MediaListItems postID={postID} block={block.attributes.data} industries={industries} />
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