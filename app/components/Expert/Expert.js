import Link from 'next/link'
import Image from 'next/image'

export const Expert = ({block}) => {
	//console.log('EXPERT BLOCK DATA: ', block)

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
			if(content.includes('[sekure_icon ')){
				const shortcodeData = content.split(' ')
				const url = shortcodeData[1].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
				const classes = shortcodeData.at(-1).replace("classes='", '').replace("']",'')
				return `<img src='${url}' alt='icon' height='50' width='50' class='${classes}'>`
			} else if(content != '' && !hasHTML(content)){
				return `<p>${content}</p>`
			} else {
				return content.trim()
			}
		}).join('')
		return formatted
	}

	const bgColour = block.full_width_with_background == '1' ? 'full-width-bg' : ''

	return (
		<section id={block.section_id} className={`sk-block industry-analysis-section block-style-${block.block_style} prel ov-hidden op-0 ${bgColour} ${block.section_classes}`}>
			<div className='container prel'>
				<div className='row gap-rows'>
					<div className='col-sm-12 col-lg-6'>

						{block.heading && (
							<h2 className='heading-anim' dangerouslySetInnerHTML={{__html:block.heading}}></h2>
						)}

						{block.left_side_text_content && (
							<div dangerouslySetInnerHTML={{__html:formatContent(block.left_side_text_content)}}></div>
						)}

						{block.cta_text && (
							<div className='mt-default fade-in-last'>
								<Link href='#survey' className="btn-default c-blue-1 btn-green-1 section-color-white">
									<span className="btn-bg-el"></span>
									<span className="btn-txt">{block.cta_text}</span>
								</Link>
							</div>
						)}
					</div>

					<div className='col-sm-12 col-lg-6 analysis-person-wrap'>
						{block.block_style == 'a' && (
							<>
								{block.expert_image_url && (
									<div className="img-wrap fade-in-last">
										<picture><Image src={block.expert_image_url} alt={block.expert_image_alt} width='243' height='243' /></picture>
									</div>
								)}
								
								<div className="analysis-person-wrap-txt-content fade-in-last">
										<h3 className="analysis-person-title">{block.expert_name}</h3>
										<p className="analysis-person-subtitle c-blue-5">{block.expert_experience}</p>
										<p className="analysis-person-position">{block.expert_title}</p>
										<p className="analysis-person-txt txt-post-rtf">{block.expert_bio}</p>
								</div>

								{block.video_text && (
									<div className="analysis-person-btn-wrap fade-in-last">
										<button className="btn-play-video-plain c-blue-1 fw-700" data-video-embed-id="xw2o9SuhytU">
											<span className="play-video-plain-icon"></span>
											<span className="btn-txt industry-video text-highlight">{block.video_text}</span>
										</button>
									</div>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}