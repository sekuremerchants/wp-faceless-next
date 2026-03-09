import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { assetSourceLocal } from "../../paths"
import { LanguageSelect } from './LanguageSelect'
import { Beauty, Ecommerce, Equipment, Fashion, Grocery, Hardware, Health, Services, Hospitality, Nonprofit, Restaurants, Retail, Wholesale, Wellness, Info, Career, Reviews, TalkToUs } from './Icons'

const componentMap = {
  beauty: Beauty,
  ecommerce: Ecommerce,
  equipment: Equipment,
  fashion: Fashion,
  grocery: Grocery,
  hardware: Hardware,
  health: Health,
  services: Services,
  hospitality: Hospitality,
  nonprofit: Nonprofit,
  restaurants: Restaurants,
  retail: Retail,
  wholesale: Wholesale,
  wellness: Wellness,
	info: Info,
	reviews: Reviews,
	talktous: TalkToUs,
	career: Career,
};

const DynamicRenderer = (type) => {
  const TargetComponent = componentMap[type];

  // Return the component if found, otherwise return null or a fallback
  return TargetComponent ? <TargetComponent /> : null;
};

const basePathLocal = assetSourceLocal();

const langQuery = `
	query NewQuery {
		nodeByUri(uri: "/about-us") {
			... on Page {
				id
				contentLanguage {
					language
					englishTranslationUrl {
						url
					}
					frenchTranslationUrl {
						url
					}
					spanishTranslationUrl {
						url
					}
				}
			}
		}
	}
`;

export const Header = async ({ pageParams }) => {
	/*
	const params = await pageParams;
	console.log("DATA params: ", params);
	
	const queryVariables = {
  	uri: '/' + params.slug,
	};
	const resLang = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: langQuery,
			//variables: queryVariables,
    }),
  });
	const { dataLang } = await resLang.json();

	console.log("DATA LANG: ", dataLang);
	*/

	const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
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
		.header .industry-row .dropdown-link-wrap a,
		.header .contact-icons .dropdown-link-wrap a {
			display: flex;
			flex-direction: row-reverse;
			justify-content: flex-end;
		}
		.header .industry-row.payments-row .dropdown-link-wrap a {
			flex-direction:row;
			justify-content: flex-start;
		}
		#logo {
			view-transition-name: logo
		}
		html.mobile-menu-opened header .line-el:first-of-type {
			transform:translate(0px, 6px) rotate(-45deg);
		}
		html.mobile-menu-opened header .line-el:nth-of-type(2){
			opacity:0;
			visibility:hidden;
		}
		html.mobile-menu-opened header .line-el:last-of-type {
			transform:translate(0px, -6px) rotate(45deg);
		}
		@media screen and (min-width:1025px){
			main {
				padding-top:11vw;
			}
			.header .contact-icons .dropdown-link-wrap a img {
				margin-left:0;
				margin-right:8px;
			}
		}
		@media screen and (max-width:1024px){
			main {
				padding-top:160px;
			}
			.dropdown-item-wrap.open .dropdown-item-links {
				opacity: 1;
				visibility: visible;
				height: auto;
				transition:all 0.3s ease;
			}
			.dropdown-item-wrap.open .dropdown-items-links-hold {
				left:0;
			}
		}
  `;

	return (
		<header id="header" className="header main-header">
			<Script src={`${basePathLocal}/assets/js/header.js`}/>
			<style>{styleCode}</style>
			<div className="container full">
				<div className="content-wrap">
					<Link href="/" className="header-logo-link prel"><Image src={`${basePathLocal}/logo/en/logo-white-descriptor-tagline.webp`} alt="Sekure Payment Experts logo" width={245} height={138} id="logo" className="header-logo" unoptimized /></Link>

					<nav role="navigation">
						<button aria-label="Toggle mobile menu button" id='mobile-menu-btn' className="mobile-menu-btn" aria-controls="menu" aria-expanded="false">
							<span className="line-el"></span>
							<span className="line-el"></span>
							<span className="line-el"></span>
						</button>

						<div className="nav-wrap">

							{/* language switch and careers link */}
							<div className="nav-extras">
								{/*<LanguageSelect/>
								<div className="lang-wrap prel">
									<Link href="#" className="lang-current">EN</Link>
									<ul id="lang_toggle" className="ul-reset prel">
										<li><Link href="#" className="block c-white current" lang="en">EN</Link></li>
										<li><Link href="#" className="block c-white" lang="es">ES</Link></li>
										<li><Link href="#" className="block c-white" lang="fr">FR</Link></li>
									</ul>
								</div>
								*/}

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

												{/* <Image src={`${basePathLocal}/media/svgs/header/${columnItem.menuItems.icon[0]}.svg`} alt={`${columnItem.menuItems.icon[0]} icon`}  height="16" width="16" />  DynamicRenderer(columnItem.menuItems.icon[0]) */}

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
																							<Image src={`${basePathLocal}/media/svgs/arrow.svg`} alt="arrow icon" height="16" width="16" className="arrow-img"/>
																						) || 
																						columnItem.menuItems.linkIcon != null && (
																							DynamicRenderer(columnItem.menuItems.icon[0].replaceAll('-', ''))
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