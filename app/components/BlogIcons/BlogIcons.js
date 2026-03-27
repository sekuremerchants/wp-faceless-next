import Link from 'next/link'
import Image from 'next/image'
import '@/styles/blocks/blog-icons.css'

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
	}
  const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: mediaItemQuery,
			variables: queryVariables,
    }),
  })
  const { data } = await res.json()

	if(data){
		return data.mediaItems.nodes[0]
	} else {
		return null
	}
}

export const BlogIcons = async ({block}) => {

	const iconsCount = block.icons > 0 ? block.icons - 1 : 0
	let icons = []
	let count = 0

	while(count <= iconsCount){

		let columnOne = await getMediaItemData(block[`icons_${count}_icon_one`])
		let columnTwo = `icons_${count}_heading`
		let columnThree = `icons_${count}_content`

		let icon = {
			icon: columnOne,
			heading: block[columnTwo],
			content: block[columnThree],
		}

		icons.push(icon);

		count++
	}

	//console.log('BLOG ICONS ARRAY: ', icons)

	return (
		<section id={block.section_id} className={`content-block-holder sk-block blog-icons block--bci icon-type-${block.icons_type} ${block.section_classes}`}>
			<div className='icons-content-block-vertical content-block row justify-content-between'>


				{/* ICONS */}
				{iconsCount > 0 && (
					block.icons_type == 'col' && (
						<div className='icon-columns justify-content-center h-lg-100 prel'>
							<div className='row gap-rows'>
								{icons.map((item, index) => (
									<div key={index} className='icons--item col-sm-12 col-md-6 col-lg-3 d-flex flex-column gap-10'>
											
											{item.icon && (
												<div className='list-image'>
													<div className='img--wrap d-flex'>
														<Image src={item.icon.sourceUrl} alt={item.icon.altText} height='100' width='100' className='object-contain'/>
													</div>
												</div>
											)}
										
											{item.heading || item.content && (
												<div className='list-content'>
													{item.heading && (
														<p className='list-title mb-0' dangerouslySetInnerHTML={{__html: item.heading}} />
													)}
													{item.content && (
														<p className='list-title mb-0' dangerouslySetInnerHTML={{__html: item.content}} />
													)}
												</div>
											)}
									</div>
								))}
							</div>
						</div>
					)
				)}

				{/* CTA */}
				{block.cta_text && block.external_link == 'yes' && (
					<div className='col-sm-12'>
						<Link href={block.cta_link} target='_blank' className='btn-default c-blue-1 btn-green-1 section-color-white sk-cta-btn btn-offset-9'>
							<span className='btn-bg-el'></span>
							<span className='btn-txt'>{block.cta_text}</span>
						</Link>
					</div>
				) || 
				block.cta_text && block.external_link != 'yes' && (
					<div className='col-sm-12'>
						<Link href={block.cta_link} className='btn-default c-blue-1 btn-green-1 section-color-white sk-cta-btn btn-offset-9'>
							<span className='btn-bg-el'></span>
							<span className='btn-txt'>{block.cta_text}</span>
						</Link>
					</div>
				)}
			</div>
		</section>
	)
}