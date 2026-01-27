const AllLandersQuery = `
	query AllPagesAndLandersQuery {
		landings(first: 50, where: { search: "troubleshooting" }) {
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
	const res = await fetch(process.env.WP_GRAPHQL_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: AllLandersQuery,
		}),
	});
	const { data } = await res.json();
	return data.landings.nodes.map((post) => ({
		slug: post.slug,
	}));
}

export default async function Page({params}) {
	const { slug } = await params;
	console.log("LANDINGS MERCHANT SERVICS SLUG: ", slug);
	const queryVariables = {
  	uri: "landings/troubleshooting/" + slug,
	};
	const res = await fetch(process.env.WP_GRAPHQL_URL, {
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

	console.log("MERCHANT SERVICS DATA: ", data)

	return (
		<main>
			<h1>dynamic page file - {data.nodeByUri.title}</h1>
		</main>  
	);
}