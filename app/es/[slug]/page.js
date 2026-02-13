const allPagesAndLandersQuery = `
	query AllPagesAndLandersQuery {
		pages(first: 20, where: {parent: 30211}) {
			nodes {
				id
				pageId
				title
				slug
			}
		}
		landings(first: 30, where: {parent: 5593}) {
			nodes {
				id
				landingId
				title
				slug
			}
		}
	}
`;

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

export async function generateStaticParams(){
	const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: allPagesAndLandersQuery,
		}),
	});
	const { data } = await res.json();

	return data.landings.nodes.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params, searchParams }, parent) {
  const pageParams = await params;
	const queryVariables = {
  		uri: 'es/' + pageParams.slug,
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

	if(!data.nodeByUri){
		const newQueryVars = {
				uri: 'landings/es/' + pageParams.slug,
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
  
  return {
    title: data.nodeByUri.seo.title,
    description: data.nodeByUri.seo.metaDesc,
		robots: {
			index: false,
			follow: false,
		},
  }
}

export default async function Page({params}) {
	const { slug } = await params;
	const queryVariables = {
  		uri: 'es/' + slug,
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
	
	if(!data.nodeByUri){
		const landingQueryVariables = {
			uri: "landings/es/" + slug,
		};
		const resLander = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: landingQuery,
				variables: landingQueryVariables,
			}),
		});
		var { data } = await resLander.json();
	}
	

	return (
		<main>
			<h1>dynamic ES page file - {data.nodeByUri.title}</h1>
		</main>  
	);
}