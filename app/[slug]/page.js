const allPagesAndLandersQuery = `
	query AllPagesAndLandersQuery {
		pages(first: 30, where: {parent: 0}) {
			nodes {
				id
				pageId
				title
				slug
			}
		}
		landings(first: 170, where: {parent: 0}) {
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

	console.log(data.pages.nodes);

	if(!data || data.length === 0){
		return [{ slug: 'data-empty' }];
	}

	return data.pages.nodes.map((post) => ({
		slug: post.slug,
	}));
	/*
	return [
		data.pages.nodes.map((post) => ({
			slug: post.slug,
		})),
		data.landings.nodes.map((post) => ({
			slug: post.slug,
		})),
	];
	*/
}

export default async function Page({params}) {
	const { slug } = await params;
	const queryVariables = {
  		uri: slug,
	};
	const landingQueryVariables = {
		uri: "landings/" + slug,
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
	const { data } = await res.json();

	/*
	if(!data.nodeByUri){
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
	*/

	return (
		<main>
			<h1>dynamic page file - {data.nodeByUri.title}</h1>
		</main>  
	);
}