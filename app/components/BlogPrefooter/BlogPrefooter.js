import Link from 'next/link'
import Image from 'next/image'
import { assetSourceLocal } from "../../paths"

const basePathLocal = assetSourceLocal();

export const BlogPrefooter = () => {

	return (
		<section className='inner-pages-contact-section contact-block prel sk-page-block block--s talk-us-block blog-social-media op-0'>
			<Image className='bg-image object-cover b-lazy b-loaded' src={`${basePathLocal}/media/images/inner/contact-section-bgr.webp`} alt="blog prefooter background image" width="1280" height="768"/>

			<div className='background-flower-path-patterns'>
				<svg viewBox='0 0 451.3 451.3' className='background-flower-path-svg'>
					<path className='st0' d='M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z'></path>
					<path className='st0' d='M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z'></path>
					<path className='st0' d='M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z'></path>
					<path className='st0' d='M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z'></path>
				</svg>
				<svg viewBox='0 0 451.3 451.3' className='background-flower-path-svg'>
					<path className='st0' d='M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z'></path>
					<path className='st0' d='M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z'></path>
					<path className='st0' d='M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z'></path>
					<path className='st0' d='M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z'></path>
				</svg>
				<svg viewBox='0 0 451.3 451.3' className='background-flower-path-svg'>
					<path className='st0' d='M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z'></path>
					<path className='st0' d='M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z'></path>
					<path className='st0' d='M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z'></path>
					<path className='st0' d='M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z'></path>
				</svg>
				<svg viewBox='0 0 451.3 451.3' className='background-flower-path-svg'>
					<path className='st0' d='M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z'></path>
					<path className='st0' d='M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z'></path>
					<path className='st0' d='M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z'></path>
					<path className='st0' d='M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z'></path>
				</svg>
			</div>

			<div className='container z-3 prel'>
				<div className='row'>

					{/* Left side */}
					<div className='single-block txt-content-block col-sm-12 col-lg-5'>
						<div className='content-wrap'>
							<p className='txt-size-12 letter-spacing upper c-white talk-left-subheading'>Social feed</p>
							<h2 className='c-white fw-700 ltr-spc-pos-0_5 talk-left-heading heading-anim'>Follow us on social media</h2>
							
							<div className='d-flex flex-column gap-20'>
								<Link href='https://www.facebook.com/SekurePaymentExperts' className='contact-section-btn c-white fw-700 hover-text-col-green' target='_blank' rel='noopener noreferrer'>
									<Image className='contact-btn-icon' alt='Facebook Logo' width='60' height='60' src={`${basePathLocal}/media/socials/facebook-green.svg`}/>
									<span className='btn-txt'>Facebook</span>
								</Link>
								<Link href='https://twitter.com/SekureExperts' className='contact-section-btn c-white fw-700 hover-text-col-green' target='_blank' rel='noopener noreferrer'>
									<Image className='contact-btn-icon' alt='X Logo' width='60' height='60' src={`${basePathLocal}/media/socials/x-green.svg`}/>
									<span className='btn-txt'>X</span>
								</Link>
								<Link href='https://www.instagram.com/SekurePaymentExperts/' className='contact-section-btn c-white fw-700 hover-text-col-green' target='_blank' rel='noopener noreferrer'>
									<Image className='contact-btn-icon' alt='Instagram Logo' width='60' height='60' src={`${basePathLocal}/media/socials/instagram-green.svg`}/>
									<span className='btn-txt'>Instagram</span>
								</Link>
								<Link href='https://www.youtube.com/channel/UCMkp6Tm70C3cQBZ_gS0G-Ow' className='contact-section-btn c-white fw-700 hover-text-col-green' target='_blank' rel='noopener noreferrer'>
									<Image className='contact-btn-icon' alt='YouTube Logo' width='60' height='60' src={`${basePathLocal}/media/socials/youtube-green.svg`}/>
									<span className='btn-txt'>YouTube</span>
								</Link>
								<Link href='https://www.linkedin.com/company/sekurepaymentexperts/' className='contact-section-btn c-white fw-700 hover-text-col-green' target='_blank' rel='noopener noreferrer'>
									<Image className='contact-btn-icon' alt='LinkedIn Logo' width='60' height='60' src={`${basePathLocal}/media/socials/linkedin-green.svg`}/>
									<span className='btn-txt'>LinkedIn</span>
								</Link>
							</div>

						</div>
					</div>

					{/* Right side */}
					<div className='single-block contact-block prel col-sm-12 col-lg-5 offset-lg-2'>
						<div className='content-wrap'>
							<p className='txt-size-12 letter-spacing talk-right-subheading c-blue-1'>Resources</p>
							<h2 className='c-blue-1 fw-700 ltr-spc-pos-0_5 talk-right-heading heading-anim'>Get set up for success</h2>
							<p className='text-highlight'>Free access to our industry leading information to help you make informed decisions for your business.</p>

							<div className='blog-external-links'>
								<div className='blog-contact-item'>
									<Link className='c-blue-1 fw-700 hover-text-decoration-underline' href='https://sekuremerchants.com/blog/content-type/guides'>
										<div className='icon'>
											<Image className='contact-btn-icon' alt='Guides icon' width='60' height='60' src={`${basePathLocal}/media/images/blog/guides.webp`}/>
										</div>
										<p className='txt-size-30 c-blue-1 fw-700 lh-1_25'>Guides</p>
									</Link>
								</div>
								<div className='blog-contact-item'>
									<Link className='c-blue-1 fw-700 hover-text-decoration-underline' href='https://sekuremerchants.com/blog/content-type/research'>
										<div className='icon'>
											<Image className='contact-btn-icon' alt='Research icon' width='60' height='60' src={`${basePathLocal}/media/images/blog/cs-hub.webp`}/>
										</div>
										<p className='txt-size-30 c-blue-1 fw-700 lh-1_25'>Research</p>
									</Link>
								</div>
								<div className='blog-contact-item'>
									<Link className='c-blue-1 fw-700 hover-text-decoration-underline' href='https://sekuremerchants.com/resources/case-studies'>
										<div className='icon'>
											<Image className='contact-btn-icon' alt='Case studies icon' width='60' height='60' src={`${basePathLocal}/media/images/blog/case-studies.webp`}/>
										</div>
										<p className='txt-size-30 c-blue-1 fw-700 lh-1_25'>Case studies</p>
									</Link>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	)
}