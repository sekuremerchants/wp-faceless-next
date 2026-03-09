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
import Image from 'next/image'

export const BlockRenderer = ({blocks}) => {
	return blocks.map((block, index) => {
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
					<Image key={index} src={block.attributes.url} alt={block.attributes.alt} width='1024' height='768' />
				)
			}
			case 'acf/blog-cta': {
				return (
					<BlogCTA key={index} sectionID={block.attributes.data.section_id} sectionClasses={block.attributes.data.section_classes} title={block.attributes.data.title} content={block.attributes.data.content} image={block.attributes.data.image ? block.attributes.data.image : false} imageStyle={block.attributes.data.image_style} showNewsletter={block.attributes.data.show_newsletter_form} newsletterSubmitText={block.attributes.data.newsletter_submit_text ? block.attributes.data.newsletter_submit_text : false} newsletterAlternateForm={block.attributes.data.alternate_newsletter_form ? block.attributes.data.alternate_newsletter_form : false} ctaText={block.attributes.data.cta_text} ctaType={block.attributes.data.external_link} ctaLink={block.attributes.data.cta_link}/>
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
				return (
					<ComparisonTable key={index} block={block.attributes.data} />
				)
			}
			default: {
				console.log("BLOCK DATA: ", block)
				return (
					<h2 key={index} className='c-red-2'>{block.name}</h2>
				)
			}
		}
	})
}