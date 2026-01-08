import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export const Footer = async () => {
	const res = await fetch(process.env.WP_GRAPHQL_URL, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		query: `
			query footerMenusQuery {
				menus(first: 8) {
					nodes {
						name
						slug
						menuItems {
							nodes {
								label
								uri
							}
						}
					}
				}
			}
		`,
		}),
	})
	const { data } = await res.json()
	console.log("Footer: ", data.menus.nodes);

	const currentYear = new Date().getFullYear();

	const styleCode = `
		.trustpilot-widget {
				grid-row-start: 2;
				margin-top:3em;
		}
		.trustpilot-widget iframe {
				width:200px;
		}
		.tp-widget-wrapper {
				max-width:none !important;
		}
		@media screen and (min-width:1025px) {
				.footer .footer-icons-wrap {
						display: grid;
						grid-template-columns: 1fr 1fr;
				}
		}
		@media screen and (max-width:1024px) {
				.trustpilot-widget {
						width:100%;
						display:flex;
						justify-content:center;
						margin-top:24px;
				}
		}
  `;

	return (
		<footer id="footer" className="footer footer-default">
			<div className="container full prel">
				<div className="footer-top-wrap row">

					<div className="logo-col col-sm-12 col-md-12 col-lg-3">
						<Link href="/" className="footer-logo-link inline_block prel">
							<Image src={`${process.env.NEXT_PUBLIC_WP_URL}/wp-content/uploads/2022/07/Sekure-TM_White.svg`} width="216" height="72" alt="Sekure Payment Experts logo" className="footer-logo-img" />
						</Link>

						<div className="footer-info-col contact-col">
							<p className="txt-size-14 text-white">
								104 W 40th Street<br />
								5th Floor<br />
								New York, NY 10018<br />
								<Link href="mailto:sales@sekuremerchants.com">sales@sekuremerchants.com</Link><br />
								<Link href="mailto:customers@sekuremerchants.com">customers@sekuremerchants.com</Link><br />
								<Link href="mailto:careers@sekuremerchants.com">careers@sekuremerchants.com</Link><br />
							</p>
							<p className="disclaimer c-white">* All calls are recorded and monitored for training purposes.</p>
						</div>

						<div className="socials-wrap">
							<p className="fw-700 c-white">Follow us at</p>
							<div className="social-items-hold">
								<Link href="https://twitter.com/SekureExperts" target="_blank" rel="noopener noreferrer" className="social-item">
									<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/04/X.svg" width="50" height="50" alt="social media icon" className="twitter-icon"/>
								</Link>
								<Link href="https://www.facebook.com/SekurePaymentExperts" target="_blank" rel="noopener noreferrer" className="social-item">
									<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/04/Facebook.svg" width="50" height="50" alt="social media icon" className="facebook-icon"/>
								</Link>
								<Link href="https://www.linkedin.com/company/sekurepaymentexperts/" target="_blank" rel="noopener noreferrer" className="social-item">
									<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/04/Linkedin.svg" width="50" height="50" alt="social media icon" className="linkedin-icon"/>
								</Link>
								<Link href="https://www.instagram.com/SekurePaymentExperts/" target="_blank" rel="noopener noreferrer" className="social-item">
									<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/04/Instagram.svg" width="50" height="50" alt="social media icon" className="instagram-icon"/>
								</Link>
								<Link href="https://www.youtube.com/channel/UCMkp6Tm70C3cQBZ_gS0G-Ow/" target="_blank" rel="noopener noreferrer" className="social-item">
									<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/04/Youtube.svg" width="50" height="50" alt="social media icon" className="youtube-icon"/>
								</Link>
							</div>
						</div>

					</div>

					<div className="footer-links-wrap col-sm-12 col-md-12 col-lg-6">
						<div className="footer-links-hold row gap-rows">

							<div className="col-sm-12 col-md-6 col-lg-4">
								<ul className="footer-links-inner-col ul-reset list-style-none d-flex flex-column gap-10">
									<li className="footer-info-col-title txt-size-24 c-green-1">Contact us</li>
									{data.menus.nodes.map((item, index) => (
										item.slug == "en-footer-contact-us" && (
											item.menuItems.nodes.map((menuItem, menuItemIndex) => (
												<li id={menuItemIndex} key={menuItemIndex} className="footer-info-col-item txt-size-17">
													<Link href={menuItem.uri}>{menuItem.label}</Link>
												</li>
											))
										)
									))}
								</ul>
								<ul className="footer-links-inner-col ul-reset list-style-none d-flex flex-column gap-10">
									<li className="footer-info-col-title txt-size-24 c-green-1">Rate packages</li>
									{data.menus.nodes.map((item, index) => (
										item.slug == "en-footer-rate-packages" && (
											item.menuItems.nodes.map((menuItem, menuItemIndex) => (
												<li id={menuItemIndex} key={menuItemIndex} className="footer-info-col-item txt-size-17">
													<Link href={menuItem.uri}>{menuItem.label}</Link>
												</li>
											))
										)
									))}
								</ul>
							</div>	

							<div className="col-sm-12 col-md-6 col-lg-4">
								<ul className="footer-links-inner-col ul-reset list-style-none d-flex flex-column gap-10">
									<li className="footer-info-col-title txt-size-24 c-green-1">Start here</li>
									{data.menus.nodes.map((item, index) => (
										item.slug == "en-footer-start-here" && (
											item.menuItems.nodes.map((menuItem, menuItemIndex) => (
												<li id={menuItemIndex} key={menuItemIndex} className="footer-info-col-item txt-size-17">
													<Link href={menuItem.uri}>{menuItem.label}</Link>
												</li>
											))
										)
									))}
								</ul>
								<ul className="footer-links-inner-col ul-reset list-style-none d-flex flex-column gap-10">
									<li className="footer-info-col-title txt-size-24 c-green-1">Equipment</li>
									{data.menus.nodes.map((item, index) => (
										item.slug == "en-footer-equipment" && (
											item.menuItems.nodes.map((menuItem, menuItemIndex) => (
												<li id={menuItemIndex} key={menuItemIndex} className="footer-info-col-item txt-size-17">
													<Link href={menuItem.uri}>{menuItem.label}</Link>
												</li>
											))
										)
									))}
								</ul>
							</div>	

							<div className="col-sm-12 col-md-6 col-lg-4">
								<ul className="footer-links-inner-col ul-reset list-style-none d-flex flex-column gap-10">
									<li className="footer-info-col-title txt-size-24 c-green-1">Resources</li>
									{data.menus.nodes.map((item, index) => (
										item.slug == "en-footer-resources" && (
											item.menuItems.nodes.map((menuItem, menuItemIndex) => (
												<li id={menuItemIndex} key={menuItemIndex} className="footer-info-col-item txt-size-17">
													<Link href={menuItem.uri}>{menuItem.label}</Link>
												</li>
											))
										)
									))}
								</ul>
								<ul className="footer-links-inner-col ul-reset list-style-none d-flex flex-column gap-10">
									<li className="footer-info-col-title txt-size-24 c-green-1">Merchant services</li>
									{data.menus.nodes.map((item, index) => (
										item.slug == "en-footer-merchant-services" && (
											item.menuItems.nodes.map((menuItem, menuItemIndex) => (
												<li id={menuItemIndex} key={menuItemIndex} className="footer-info-col-item txt-size-17">
													<Link href={menuItem.uri}>{menuItem.label}</Link>
												</li>
											))
										)
									))}
								</ul>
							</div>	

						</div>
					</div>

					<div className="seperated-links-wrap footer-links-wrap prel col-sm-12 col-md-12 col-lg-3">
						<ul className="footer-links-col ul-reset list-style-none d-flex flex-column gap-10">
							<li className="footer-info-col-title txt-size-24 c-green-1">Find your industry</li>
							{data.menus.nodes.map((item, index) => (
								item.slug == "en-footer-find-your-industry" && (
									item.menuItems.nodes.map((menuItem, menuItemIndex) => (
										<li id={menuItemIndex} key={menuItemIndex} className="footer-info-col-item txt-size-17">
											<Link href={menuItem.uri}>{menuItem.label}</Link>
										</li>
									))
								)
							))}
						</ul>
					</div>

				</div>{/* footer-top-wrap row */}

				<div className="footer-icons-wrap offset-x-mobile-40">
					<div className="reviews-wrap">
						<p className="upper txt-size-12 c-white letter-spacing reviews-wrap-title mb-2">Reviews</p>
						<div className="reviews-hold">
							<Link href="https://www.google.com/maps/place/Sekure+Merchant+Solutions/@40.7572519,-73.9867678,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25854e6657b87:0xa757c6e5cab1dbf6!8m2!3d40.7572519!4d-73.9867678#:~:text=797-,reviews,-EFTPOS%20equipment%20supplier" target="_blank" rel="noopener noreferrer" className="review-bbb review-item inline_block prel">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2022/07/Google-1-1.svg" height="94" width="103" alt="" className="footer-review-img" />
							</Link>
							<Link href="https://www.bbb.org/us/ny/new-york/profile/credit-card-processing-services/sekure-merchant-solutions-0121-132569" target="_blank" rel="noopener noreferrer" className="review-bbb review-item inline_block prel">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2022/07/BBB-1.svg" height="94" width="103" alt="" className="footer-review-img" />
							</Link>
							<Link href="https://www.facebook.com/sekurepaymentexperts/reviews" target="_blank" rel="noopener noreferrer" className="review-bbb review-item inline_block prel">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2022/07/Facebook-1-1.svg" height="94" width="103" alt="" className="footer-review-img" />
							</Link>
						</div>
					</div>
					
					{/* Trustpilot widget */}
					<style>{styleCode}</style>
					<Script src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async defer strategy="afterInteractive" />
					<div className="trustpilot-widget" data-locale="en-US" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="60fa0bbb0ba7640001ad2e51" data-style-height="105px" data-theme="dark" data-token="c8256825-b8a6-42aa-aa1b-1d274b6d61ed">
                <a href="https://www.trustpilot.com/review/sekuremerchants.com?utm_medium=Trustbox&amp;utm_source=EmailNewsletter2" target="_blank" rel="noopener">Trustpilot</a>
					</div>

					<div className="associations-wrap">
						<p className="upper txt-size-12 c-white letter-spacing associations-wrap-title mb-2">Associations</p>
						<div className="associations-hold">
							<Link href="https://nrf.com/" target="_blank" rel="noopener noreferrer" className="associations-item inline_block prel">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2022/07/NRF-1.svg" width="133" height="34" alt="" className="footer-associations-img" />
							</Link>
							<Link href="https://www.bbb.org/us/ny/new-york/profile/credit-card-processing-services/sekure-merchant-solutions-0121-132569" target="_blank" rel="noopener noreferrer" className="associations-item inline_block prel">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2022/07/BBB-long-1.svg" width="133" height="34" alt="" className="footer-associations-img" />
							</Link>
							<Link href="https://www.ahla.com/" target="_blank" rel="noopener noreferrer" className="associations-item inline_block prel">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2022/07/AHLA-1.svg" width="133" height="34" alt="" className="footer-associations-img" />
							</Link>
							<Link href="https://restaurant.org/" target="_blank" rel="noopener noreferrer" className="associations-item inline_block prel">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2022/07/National-Restaurant-Association-1.svg" width="133" height="34" alt="" className="footer-associations-img" />
							</Link>
							<Link href="https://www.gorspa.org/rspa-home/" target="_blank" rel="noopener noreferrer" className="associations-item inline_block prel">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2022/07/RSPA-member-1.svg" width="133" height="34" alt="" className="footer-associations-img" />
							</Link>
						</div>
					</div>
				</div>

				<div className="footer-mobile-wrap">
					<div className="socials-wrap">
						<p className="fw-700 c-white">Follow us at</p>
						<div className="social-items-hold">
							<Link href="https://twitter.com/SekureExperts" target="_blank" rel="noopener noreferrer" className="social-item">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/04/X.svg" width="50" height="50" alt="social media icon" className="twitter-icon"/>
							</Link>
							<Link href="https://www.facebook.com/SekurePaymentExperts" target="_blank" rel="noopener noreferrer" className="social-item">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/04/Facebook.svg" width="50" height="50" alt="social media icon" className="facebook-icon"/>
							</Link>
							<Link href="https://www.linkedin.com/company/sekurepaymentexperts/" target="_blank" rel="noopener noreferrer" className="social-item">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/04/Linkedin.svg" width="50" height="50" alt="social media icon" className="linkedin-icon"/>
							</Link>
							<Link href="https://www.instagram.com/SekurePaymentExperts/" target="_blank" rel="noopener noreferrer" className="social-item">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/04/Instagram.svg" width="50" height="50" alt="social media icon" className="instagram-icon"/>
							</Link>
							<Link href="https://www.youtube.com/channel/UCMkp6Tm70C3cQBZ_gS0G-Ow/" target="_blank" rel="noopener noreferrer" className="social-item">
								<Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/04/Youtube.svg" width="50" height="50" alt="social media icon" className="youtube-icon"/>
							</Link>
						</div>
					</div>

					<div className="footer-contact-info contact-col">
						<p className="footer-info-col-title txt-size-24 c-green-1">Contact us</p>
						<div className="txt-size-14 text-white">
							104 W 40th Street<br />
								5th Floor<br />
								New York, NY 10018<br />
								<Link href="mailto:sales@sekuremerchants.com">sales@sekuremerchants.com</Link><br />
								<Link href="mailto:customers@sekuremerchants.com">customers@sekuremerchants.com</Link><br />
								<Link href="mailto:careers@sekuremerchants.com">careers@sekuremerchants.com</Link><br />
						</div>
						<p className="disclaimer c-white mt-3">* All calls are recorded and monitored for training purposes.</p>
					</div>
				</div>

				<div className="footer-bottom-wrap">
					<div className="link-suggs"></div>

					<p className="disclaimer c-gray-8 mb-0">&copy; {currentYear} Sekure Payment Experts. All rights reserved. <Link href="/privacy-policy" className="prel c-gray-8">Terms &amp; Privacy Policy</Link></p>
				</div>

			</div>
		</footer>
	)
}