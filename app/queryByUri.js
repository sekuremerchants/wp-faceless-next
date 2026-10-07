const query = `
	query PageQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Page {
				id
				title
				contentTypeName
				blocks(postTemplate: false)
				postLanguage {
					contentLanguage
					englishTranslation {
						nodes {
							uri
						}
					}
					spanishTranslation {
						nodes {
							uri
						}
					}
					frenchTranslation {
						nodes {
							uri
						}
					}
				}
				seo {
					title
					metaDesc
				}
				customCSS {
					customCss
				}
			}
		}
	}
`;

const landingQuery = `
	query LandingPageQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Landing {
				id
				title
				contentTypeName
				blocks(postTemplate: false)
				postLanguage {
					contentLanguage
				}
				seo {
					title
					metaDesc
				}
				customCSS {
					customCss
				}
				landerCTA {
					ctaAlwaysShow
					ctaButtonInHeader
					ctaExternalLink {
						url
						target
					}
					ctaLinkType
					ctaScrollToSection
					ctaTextfield
					ctaType
					form
					formHeading
					formSubheading
					popup {
						nodes {
							... on Popup {
								popupId
								id
								content
								cptPopups {
									form
									formId
								}
							}
						}
					}
					showStickyBar
        	stickyBarPhoneNumber
				}
				headerSelect {
					header
					headerStyle
					headerLink {
						url
					}
				}
				landingPageFooterLanguage {
					landingPageFooterLanguage
				}
			}
		}
	}
`;

const ratesQuery = `
	query RateQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Rate {
				id
				title
				contentTypeName
				blocks
				postLanguage {
					contentLanguage
					englishTranslation {
						nodes {
							uri
						}
					}
					spanishTranslation {
						nodes {
							uri
						}
					}
					frenchTranslation {
						nodes {
							uri
						}
					}
				}
				customCSS {
					customCss
				}
				seo {
					title
					metaDesc
				}
			}
		}
	}
`;

const paymentsQuery = `
	query RateQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Equipment {
				id
				title
				contentTypeName
				blocks
				postLanguage {
					contentLanguage
					englishTranslation {
						nodes {
							uri
						}
					}
					spanishTranslation {
						nodes {
							uri
						}
					}
					frenchTranslation {
						nodes {
							uri
						}
					}
				}
				customCSS {
					customCss
				}
				seo {
					title
					metaDesc
				}
			}
		}
	}
`;

const industriesQuery = `
	query RateQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Industry {
				id
				title
				contentTypeName
				postLanguage {
					contentLanguage
					englishTranslation {
						nodes {
							uri
						}
					}
					spanishTranslation {
						nodes {
							uri
						}
					}
					frenchTranslation {
						nodes {
							uri
						}
					}
				}
				customCSS {
					customCss
				}
				seo {
					title
					metaDesc
				}
				blocks
			}
		}
	}
`;

export async function queryByUri(slug) {
	//console.log("QUERYBYURI FUNCTION SLUG: ", slug);
	const queryVariables = {
  		uri: slug,
	};
	const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
			variables: queryVariables,
    }),
  });
  var { data } = await res.json();
	//console.log("QUERYBYURI FUNCTION SLUG: ", slug);
	//console.log("QUERYBYURI FUNCTION PAGE DATA: ", data);

	if(!data.nodeByUri || Object.keys(data.nodeByUri).length === 0){
		//console.log('LOOKING FOR LANDERS...');
		const newQueryVars = {
				uri: 'landings/' + slug,
		};
		const resTwo = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: landingQuery,
				variables: newQueryVars,
			}),
		});
		var { data } = await resTwo.json();

		//console.log("QUERYBYURI FUNCTION LANDERS DATA: ", data);
	}

	if(!data.nodeByUri || Object.keys(data.nodeByUri).length === 0){
		//console.log('LOOKING FOR RATES...')
		//console.log('QUERYBYURI SLUG: ', slug);
		if(slug.includes('es/tarifas/interchange-plus')){
			slug = slug.replace('/es/tarifas/interchange-plus', 'interchange-plus-2')
		}
		if(slug.includes('es/tarifas')){
			slug = slug.replace('/es/tarifas/', '')
		}
		if(slug.includes('/rates/')){
			slug = slug.replace('/rates/', '')
		}
		const ratesQueryVars = {
			uri: 'rates/' + slug,
		};
		const resThree = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: ratesQuery,
				variables: ratesQueryVars,
			}),
		});
		var { data } = await resThree.json();

		//console.log("QUERYBYURI FUNCTION RATES DATA: ", data);
	}

	if(!data.nodeByUri || Object.keys(data.nodeByUri).length === 0){
		//console.log('LOOKING FOR PAYMENTS...')
		if(slug.includes('/payments/')){
			slug = slug.replace('/payments/', '')
		}
		if(slug.includes('es/pagos/tap-to-pay')){
			slug = slug.replace('/es/pagos/tap-to-pay', 'tap-to-pay-2')
		}
		if(slug.includes('es/pagos')){
			slug = slug.replace('/es/pagos/', '')
		}
		const paymentsQueryVars = {
			uri: 'payments/' + slug,
		};
		const resThree = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: paymentsQuery,
				variables: paymentsQueryVars,
			}),
		});
		var { data } = await resThree.json();

		//console.log("QUERYBYURI FUNCTION PAYMENTS DATA: ", data);
	}

	if(!data.nodeByUri || Object.keys(data.nodeByUri).length === 0){
		//console.log('LOOKING FOR INDUSTRY...')
		if(slug.includes('/industry/')){
			slug = slug.replace('/industry/', '')
		}
		if(slug.includes('es/industria')){
			slug = slug.replace('/es/industria/', '')
		}
		const industriesQueryVars = {
			uri: 'industry/' + slug,
		};
		const resThree = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: industriesQuery,
				variables: industriesQueryVars,
			}),
		});
		var { data } = await resThree.json();

		//console.log("QUERYBYURI FUNCTION INDUSTRIES DATA: ", data);
	}

	return data;
}