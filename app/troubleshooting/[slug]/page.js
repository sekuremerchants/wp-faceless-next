const AllLandersTroubleshootingQuery = `
	query AllLandersTroubleshooting {
		landings(where: {parent: 5939}) {
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
			query: AllLandersTroubleshootingQuery,
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
  	uri: "landings/troubleshooting/" + slug,
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

	//console.log("MERCHANT SERVICS DATA: ", data)

	return (
		<main>
			<h1>dynamic page file - {data.nodeByUri.title}</h1>
		</main>  
	);
}