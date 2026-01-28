const AllLandersSolucionesPagosQuery = `
	query AllLandersSolucionesPagos {
		landings(first: 30, where: {parent: 6029}) {
			nodes {
				id
				landingId
				slug
				title
				uri
			}
		}
	}
`;

const query = `
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
			query: AllLandersSolucionesPagosQuery,
		}),
	});
	const { data } = await res.json();
	return data.landings.nodes.map((post) => ({
		slug: post.slug,
	}));
}

export default async function Page({params}) {
	const { slug } = await params;
	const queryVariables = {
  	uri: "landings/es/soluciones-de-pagos/" + slug,
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

	return (
		<main>
			<h1>dynamic page file - {data.nodeByUri.title}</h1>
		</main>  
	);
}