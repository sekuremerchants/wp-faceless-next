import Link from "next/link"
import Image from "next/image"
import Script from "next/script"

export const Header = async () => {
	const res = await fetch(process.env.WP_GRAPHQL_URL, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		query: `
			query mainNavQuery {
			menu(id: "en-header-primary-menu-v2", idType: SLUG) {
				menuItems(first: 90) {
				nodes {
					id
					title
					uri
					parentId
					label
					description
					linkRelationship
					cssClasses
					menuItems {
					buttonLink {
            edges {
              node {
                uri
                link
              }
            }
					}
					buttonType
					buttonText
					ctaContent
					form
					icon
					linkArrow
					linkIcon
					linkType
					buttonClasses
					rowMaxColumns
					}
				}
				}
			}
			}
		`,
		}),
	});
	const { data } = await res.json();

	const styleCode = `
		.header .dropdown-item-links {
			background:#fff;
			border-radius:30px;
		}
		.header .dropdown-item-links.opened-dropdown {
			height:auto;
			z-index:99999;
			opacity:1;
			visibility:visible;
		}
		.header .dropdown-item-links.opened-dropdown .dropdown-links-wrap {
			opacity:1;
			visibility:visible;
		}
  `;

	return (
		<header id="header" className="header main-header">
			<Script src="/assets/js/header.js"/>
			<style>{styleCode}</style>
			<div className="container full">
				<div className="content-wrap">
					<Link href="/" className="header-logo-link prel"><Image src="/logo/en/logo-white-descriptor-tagline.webp" alt="Sekure Payment Experts logo" width="245" height="138" className="header-logo" /></Link>

					<nav role="navigation">
						<button aria-label="Toggle mobile menu button" className="mobile-menu-btn" aria-controls="menu" aria-expanded="false">
							<span className="line-el"></span>
							<span className="line-el"></span>
							<span className="line-el"></span>
						</button>

						<div className="nav-wrap">

							{/* language switch and careers link */}
							<div className="nav-extras">
								<div className="lang-wrap prel">
									<Link href="#" className="lang-current">EN</Link>
									<ul id="lang_toggle" className="ul-reset prel">
										<li><Link href="#" className="block c-white current" lang="en">EN</Link></li>
										<li><Link href="#" className="block c-white" lang="es">ES</Link></li>
										<li><Link href="#" className="block c-white" lang="fr">FR</Link></li>
									</ul>
								</div>

								<Link href="/careers" className="careers-link">Careers</Link>
							</div>

							{/* main nav */}
							<div className="header-links-wrap">
								<div className="header-links-content-wrap">

									{data.menu.menuItems.nodes.map((menuItem, index) => (
										menuItem.menuItems.linkType == "row" && (
											<div id={index} key={index} className="dropdown-item-wrap">

												{/* mobile menu button (<=1024px)*/}
												<Link href="#" className="header-link-item fw-700 c-white has-dropdown prel inline_block">
													{menuItem.label}
													<button aria-hidden="true" className="dropdown-arrow-btn js-header-dropdown-btn"></button>
												</Link>

												<div className="dropdown-item-links">
													<div className="dropdown-items-links-hold dropdown-content prel">
														<div className={`dropdown-links-wrap ${menuItem.cssClasses.join(' ')} ${menuItem.menuItems.rowMaxColumns}`}>
															{data.menu.menuItems.nodes.map((childMenuItem, childIndex) => (
																childMenuItem.parentId == menuItem.id &&
																menuItem.parentId == null && (
																	<div id={childIndex} key={childIndex} className={`links-column ${childMenuItem.cssClasses.join(' ')}`}>
																		{data.menu.menuItems.nodes.map((columnItem, columnItemIndex) => (
																			columnItem.parentId == childMenuItem.id &&
																			columnItem.menuItems.linkType == "heading" && (
																				<h3 id={columnItemIndex} key={columnItemIndex} className="c-red-2 prel column-heading">{columnItem.label}</h3>
																			) ||
																			columnItem.parentId == childMenuItem.id &&
																			columnItem.menuItems.linkType == "link" && (
																				<div id={columnItemIndex} key={columnItemIndex} className="dropdown-link-wrap">
																					<Link href={columnItem.uri} className="dropdown-items-link c-blue-1">
																						{columnItem.label}
																						{columnItem.menuItems.linkArrow && (
																							<Image src="/media/svgs/arrow.svg" alt="arrow icon" height="16" width="16" className="arrow-img"/>
																						) || 
																						columnItem.menuItems.linkIcon != null && (
																							<Image src={`/media/svgs/header/${columnItem.menuItems.icon[0]}.svg`} alt={`${columnItem.menuItems.icon[0]} icon`}  height="16" width="16" />
																						)}
																					</Link>
																					<p className="column-desc c-blue-1">{columnItem.description}</p>
																				</div>
																			) ||
																			columnItem.parentId == childMenuItem.id &&
																			columnItem.menuItems.linkType == "cta" && (
																				<div id={columnItemIndex} key={columnItemIndex} className={`dropdown-link-cta ${columnItem.cssClasses.join(' ')}`}>
																					<div dangerouslySetInnerHTML={{ __html: columnItem.menuItems.ctaContent }} />
																					{columnItem.menuItems.buttonLink != null && (
																						<Link href={columnItem.menuItems.buttonLink.edges[0].node.uri} className="btn-default c-blue-1 btn-green-1 section-color-white btn-offset-8 fw-700 mt-default">
																							<span className="btn-bg-el"></span>
																							<span className="btn-txt">{columnItem.menuItems.buttonText}</span>
																						</Link>
																					)}
																				</div>
																			)
																		))}
																	</div>
																)
															))}
														</div>
													</div>
												</div>
											</div>
										)
									))}

								</div>
							</div>

							<Link href="/savings-calculator" className="d-none d-desktop-block statement-analysis-btn btn-default c-blue-1 section-color-blue btn-white btn-offset-8 fw-700">
								<span className="btn-bg-el"></span>
								<span className="btn-txt">Start saving</span>
							</Link>
						</div> {/* mav wrap */}

							<Link href="/savings-calculator" className="statement-analysis-btn mobile-btn btn-default c-blue-1 btn-green-1 section-color-white btn-offset-8 fw-700">
								<span className="btn-bg-el"></span>
								<span className="btn-txt">Start saving</span>
							</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}