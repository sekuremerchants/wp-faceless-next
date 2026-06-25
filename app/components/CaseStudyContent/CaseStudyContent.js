import { BlockRenderer } from '@/components/BlockRenderer'
import { Social } from '@/components/Social'
import Link from 'next/link'
import Image from 'next/image'
import readingTime from 'reading-time'

export const CaseStudyContent = ({caseStudy, blocks, categories, businessTypes, contentTypes}) => {

	//console.log('CASE STUDY BLOCKS: ', blocks)

	const timeToRead = caseStudy.content ? readingTime(caseStudy.content) : '0 mins';
  const postedDate = new Date(caseStudy.date);
  const modifiedDate = new Date(caseStudy.modified);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const postedDateFormatted = postedDate.toLocaleDateString(undefined, options);
  const modifiedDateFormatted = modifiedDate.toLocaleDateString(undefined, options);

	const stripTags = (html) => {
		return html.replace(/<[^>]*>?/gm, '');
	}

	return (
		<>
			<div className='article-meta'>
				<p className='txt-size-16 c-blue-1 upper fw-700 d-flex flex-wrap gap-10 mb-3'>
					{categories && (
						<Link href={categories.link} className='post-single-category hover-text-col-blue'>{categories.name}</Link>
					)}
					{businessTypes && (
						<Link href={businessTypes.link} className='post-single-category hover-text-col-blue'>{businessTypes.name}</Link>
					)}
					{contentTypes && (
						<Link href={contentTypes.link} className='post-single-category hover-text-col-blue'>{contentTypes.name}</Link>
					)}
				</p>

				{caseStudy.postSummary.postSummary && (
					<p className='mb-3'>{caseStudy.postSummary.postSummary}</p>
				)}

				<div className='article-time d-flex flex-wrap gap-10'>
					<p className='fw-600'>{(timeToRead != '0 mins' ? timeToRead.text : timeToRead)}</p>
					<p className='meta-separator'>|</p>
					{/*<p className='fw-600'>Posted: <time itemProp='dateCreated' dateTime={postedDateFormatted}>{postedDateFormatted}</time></p>
					<p className='meta-separator'>|</p> */}
					<p className='fw-600'>Posted: <time itemProp='dateModified' dateTime={modifiedDateFormatted}>{modifiedDateFormatted}</time></p>
				</div>
			</div>

			<div className='article-share mb-3'>
				<Social />
			</div>

			<div className='featured-img-holder case-study-image prel ov-hidden'>
				<Image src={caseStudy.featuredImage.node.sourceUrl} alt={caseStudy.featuredImage.node.altText} height='768' width='1024' className='bg-image object-cover' />
				<div className='featured-img-overlay prel z-2'>
					<div className='top-banner'>
						<p className='post-type'>Case study</p>
					</div>
					<h1 className='heading-anim'>{caseStudy.title}</h1>
				</div>
			</div>

			<div className='article-main-content row mt-50 op-0'>

				{caseStudy.caseStudiesSidebar.sidebarContent && (
					<div className='stats-mobile mb-4'>
						<div className='d-flex gap-cols gap-rows flex-column-mobile flex-even prel'>
							{caseStudy.caseStudiesSidebar.sidebarContent.map((item, index) => (
								<div key={index} className='icons--item text-center d-flex flex-column gap-10'>
									{item.image && (
										<div className='img--wrap'>
											<Image src={item.image.node.sourceUrl} alt={item.image.node.altText} height='200' width='200' />
										</div>
									)}
									{item.description && (
										<div className='content-wrap'>
											<p dangerouslySetInnerHTML={{__html:item.description}}></p>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				)}

				<div className='table-of-contents col-sm-12 col-lg-3'>
					<div className='sk-sticky'>
						<p className='toc-title title-highlight'>Jump to:</p>
						<div className='content-bullets'>
							<ol>
								{caseStudy.blocks.length > 0 && (
									caseStudy.blocks.map((item, index) => (
										item.name == 'core/heading' && item.attributes.level == '2' && (
											<li key={index} className=''><Link href={`#${stripTags(item.attributes.content.toLowerCase().replaceAll(' ','-').replaceAll('&nbsp;', ''))}`} className='c-blue-1 fw-400 anchor-link text-decoration-none hover-text-decoration-underline d-flex'>{stripTags(item.attributes.content.replaceAll('&nbsp;', ''))}</Link></li>
										)
									))
								)}
							</ol>
						</div>
					</div>
				</div>

				<div className='article-text-col-sm-12 col-lg-9'>
					<div className='blog-content'>
						<BlockRenderer blocks={blocks}/>
					</div>
				</div>
			</div>
		</>
	)
}