import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'

export const Hero = async ({block, bgImage, industryIcon, transparentIcon}) => {

	//console.log('HERO BLOCK DATA: ', block)

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span)\b))[^>]+>/i.test(str);
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

	return (
		<section id={block.section_id} className={`page-block-holder sk-page-block sk-page-hero block--psk1 sk-block inner-pages-landing-section prel ov-hidden ${block.section_classes}`}>
			
			{block.background_image_url != '' && block.background_image_url != false && (
				<Image src={block.background_image_url} alt={block.background_image_alt} width='1440' height='860' className='bg-image object-cover' />
			)}

			<div className='container prel z-3'>
				{block.show_background_circles != 'hide' && (
					<div className='background-circles-wrap'>
            <div className='background-inner-circle green-inner-circle top-left '></div>
            <div className='background-inner-circle green-inner-circle top-right'></div>
            <div className='background-inner-circle green-inner-circle bottom-left'></div>
            <div className='background-inner-circle green-inner-circle bottom-right lighter-green-circle'></div>
          </div>
				)}

				{block.show_breadcrumbs != 'hide' && (
					<div className='breadcrumb-wrap prel'>
						<ul className='breadcrumb-list disclaimer'>
							<li><Link href='/'>Home</Link></li>
						</ul>

						{block.make_pre_heading_h1 == true && (
							<h1 className='txt-size-12 fw-400 ff-libre upper letter-spacing current-page-breadcrumb-title'>{block.pre_heading}</h1>
						) || block.make_pre_heading_h1 == false && (
							<p className='txt-size-12 upper letter-spacing current-page-breadcrumb-title'>{block.pre_heading}</p>
						)}
					</div>
				)}

				<div className='content-wrap prel col-sm-12 col-md-8 col-lg-7'>
					<div className='txt-wrap'>
						{block.make_pre_heading_h1 == true && (
							<h2 className='h1 c-white heading-anim' dangerouslySetInnerHTML={{__html:block.hero_heading}}></h2>
						) || block.make_pre_heading_h1 == false && (
							<h1 className='c-white heading-anim' dangerouslySetInnerHTML={{__html:block.hero_heading}}></h1>
						)}

						{block.hero_subheading && (
							<div className='text-white'>
								<div dangerouslySetInnerHTML={{__html:formatContent(block.hero_subheading)}}></div>
							</div>
						) || block.hero_subheading && block.industry_icon != '' && (
							<div className='text-white industry-icon-1 d-flex gap-cols gap-rows'>
								<Image src={industryIcon.sourceUrl} alt={industryIcon.altText} height='300' width='300' className='industry-icon' />
								<div className='txt-wrap'><p dangerouslySetInnerHTML={{__html:formatContent(block.hero_subheading)}}></p></div>
							</div>
						)}
					</div>

					{block.cta_text != '' && block.cta_text_2 != '' && (
						<div className='btn-group mt-default'>
							<Button type={block.external_link} text={block.cta_text} link={block.cta_link} popupID={block.popup} popupHeading={block.popup_title} popupDesc={block.popup_description} phone={block.phone}/>
							<Button type={block.external_link_2} text={block.cta_text_2} link={block.cta_link_2} popupID={block.popup_2} popupHeading={block.popup_title_2} popupDesc={block.popup_description_2} phone={block.phone_2}/>
						</div>
					) || block.cta_text != '' && (
						<div className='mt-default'>
							<Button type={block.external_link} text={block.cta_text} link={block.cta_link} popupID={block.popup} popupHeading={block.popup_title} popupDesc={block.popup_description} phone={block.phone}/>
						</div>
					)}

					{block.show_next_button != 'hide' && (
						<button class='section-scroll-btn scroll-to-next-btn d-block mt-default'>
              <svg class='scroll-btn-border-svg' viewbox='0 0 115 115'>
                <circle class="scroll-btn-border-circle" fill="none" cx="57.5" cy="57.5" r="56"/>
              </svg>
              <Image width='36' height='57' alt='' role='presentation' src='/media/images/pictograms/scroll-arrow.webp' className='scroll-btn-img' />
            </button>
					)}
				</div>

				{block.video_id != '' && block.video_type == 'youtube' && (
					<button aria-label="Play Youtube video" data-video-embed-id={block.video_id} className="landing-video-btn">
						<span className="circle-core">
								<span className="play-video-icon-landing"></span>
						</span>
						<span className="circle-inner"></span>
						<span className="circle-outer"></span>
					</button>
				) || block.video_id != '' && block.video_type == 'vimeo' && (
					<button aria-label="Play Vimeo video" data-vimeo-embed-id={block.video_id} className="landing-video-btn">
						<span className="circle-core">
								<span className="play-video-icon-landing"></span>
						</span>
						<span className="circle-inner"></span>
						<span className="circle-outer"></span>
					</button>
				)}
			</div>

			{block.transparent_icon != '' && (
				<Image src={transparentIcon.sourceUrl} alt={transparentIcon.altText} height='387' width='275' className='hero-transparent-icon' />
			)}

		</section>
	)
}