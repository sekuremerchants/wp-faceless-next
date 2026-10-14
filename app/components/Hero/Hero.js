import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { FormatContent } from '@/components/FormatContent'

export const Hero = async ({block, bgImage, industryIcon, transparentIcon}) => {

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
			let hasOpen = content.includes('<span')
			let hasClose = content.includes('</span>')

			if(content.includes('[sekure_icon ')){
				const shortcodeData = content.split(' ')
				const url = shortcodeData[1].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
				const classes = shortcodeData.at(-1).replace("classes='", '').replace("']",'')
				return `<img src='${url}' alt='icon' height='50' width='50' class='${classes}'>`
			} else if(content.includes('[phone]')) {
				const newContent = content.replace(/\[phone\]/g, '<a href="tel:8667107382">(866) 710-7382</a>')
				return newContent
			} else if(content.includes('[phone-icon]')) {
				const newContent = content.replace('[phone-icon]', '<svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><g clip-path="url(#clip0_63_2933)"><path d="M23.9926 0C10.7481 0 3.05176e-05 10.7481 3.05176e-05 23.9925C3.05176e-05 37.237 10.7481 47.985 23.9926 47.985C37.237 47.985 47.9851 37.237 47.9851 23.9925C47.9851 10.7481 37.252 0 23.9926 0ZM36.9381 32.7973C36.8783 32.9019 36.8035 33.0215 36.7288 33.1411C35.9963 34.2473 34.4416 35.8916 34.4416 35.8916C32.005 37.7602 26.7431 35.1741 26.7431 35.1741C16.6229 29.9421 11.4656 20.4198 11.4656 20.4198C9.5223 16.5332 12.6914 12.4522 12.6914 12.4522C14.5002 10.2846 17.2208 12.2579 17.2208 12.2579L20.0312 14.4852C21.84 15.9801 19.9116 17.9383 19.9116 17.9383C17.3703 20.36 19.0446 22.0193 19.0446 22.0193C21.0626 24.6353 26.4591 29.1199 26.4591 29.1199C28.4771 30.0766 29.673 27.5652 29.673 27.5652C30.6596 25.9059 32.7674 27.3261 32.7674 27.3261L35.0246 28.9854C36.8035 30.4204 37.5211 31.721 36.9231 32.7973H36.9381Z" fill="#17FCC4"></path></g><defs><clipPath id="clip0_63_2933"><rect width="48" height="48" fill="white"></rect></clipPath></defs></svg>')
				return newContent
			} else if(hasOpen && hasClose) {
				return `<p>${content}</p>`
			} else if(content != '' && !hasHTML(content)){
				return `<p>${content}</p>`
			} else {
				return content.trim()
			}
		}).join('')
		return formatted
	}

	//console.log('HERO BLOCK DATA: ', block)

	const IDattr = block.section_id && block.section_id != '' ? {id: block.section_id} : ''

	return (
		<section {...IDattr} className={`sk-page-block sk-page-hero block--psk1 sk-block inner-pages-landing-section prel ov-hidden ${block.section_classes}`}>
			
			{block.background_image_url && block.background_image_url != '' && (
				<Image src={block.background_image_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={block.background_image_alt} width='1440' height='860' className='bg-image object-cover' />
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

						{block.make_pre_heading_h1 == '1' && (
							<h1 className='txt-size-12 fw-400 ff-libre upper letter-spacing current-page-breadcrumb-title'>{block.pre_heading}</h1>
						) || block.make_pre_heading_h1 == '0' && (
							<p className='txt-size-12 upper letter-spacing current-page-breadcrumb-title'>{block.pre_heading}</p>
						)}
					</div>
				)}

				<div className='content-wrap prel col-sm-12 col-md-8 col-lg-7 heading-balance'>
					<div className='txt-wrap'>
						{block.make_pre_heading_h1 == '1' && (
							<h2 className='h1 c-white heading-anim' dangerouslySetInnerHTML={{__html:block.hero_heading}}></h2>
						) || block.make_pre_heading_h1 == '0' && (
							<h1 className='c-white heading-anim' dangerouslySetInnerHTML={{__html:block.hero_heading}}></h1>
						)}

						{block.hero_subheading && block.industry_image_url && (
							<div className='text-white single-txt-block-no-title industry-icon-1 d-flex align-items-start gap-cols gap-rows'>
								{block.industry_image_url != '' && (<Image src={block.industry_image_url} alt={`icon`} height='300' width='300' className='industry-icon' />)}
								<div className='txt-wrap' dangerouslySetInnerHTML={{__html:formatContent(block.hero_subheading)}}></div>
							</div>
						) || block.hero_subheading && (
							<div className='text-white'>
								<div dangerouslySetInnerHTML={{__html:formatContent(block.hero_subheading)}}></div>
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
						<button className='section-scroll-btn scroll-to-next-btn d-block mt-default'>
              <svg className='scroll-btn-border-svg' viewBox='0 0 115 115'>
                <circle className="scroll-btn-border-circle" fill="none" cx="57.5" cy="57.5" r="56"/>
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

			{block.transparent_icon_url && block.transparent_icon_url != '' && (
				<Image src={block.transparent_icon_url.replace('sekuremerchants.com', 'wordpress-dev-appsvc.azurewebsites.net')} alt={transparentIcon.altText} height='387' width='275' className='hero-transparent-icon' />
			)}

		</section>
	)
}