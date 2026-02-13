const query = `
	query PageQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Page {
				id
				pageId
				title
				blocks(postTemplate: false)
				postLanguage {
					contentLanguage
				}
				seo {
					title
					metaDesc
				}
			}
			... on Landing {
				id
				landingId
				title
				blocks(postTemplate: false)
				postLanguage {
					contentLanguage
				}
				seo {
					title
					metaDesc
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
				landingId
				title
				blocks(postTemplate: false)
				postLanguage {
					contentLanguage
				}
				seo {
					title
					metaDesc
				}
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
	//console.log("QUERYBYURI FUNCTION DATA: ", data);

	if(!data.nodeByUri){
		//console.log('PAGE NOT FOUND, LOOKING FOR LANDERS');
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
	}

	return data;
}