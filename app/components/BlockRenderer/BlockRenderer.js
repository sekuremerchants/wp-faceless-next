import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { List } from '../List';
import { BlogCTA } from '../../components/BlogCTA'
import { MultiColumnTable } from '../../components/MultiColumnTable'

export const BlockRenderer = ({blocks}) => {
	return blocks.map((block, index) => {
		switch(block.name){
			case 'core/heading': {
				return <Heading key={index} content={block.attributes.content} level={block.attributes.level}/>
			}
			case 'core/paragraph' : {
				return <Paragraph key={index} content={block.attributes.content}/>
			}
			case 'core/list': {
				return (
					<List key={index} attributes={block.attributes} listItems={block.innerBlocks}/>
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
		}
	})
}