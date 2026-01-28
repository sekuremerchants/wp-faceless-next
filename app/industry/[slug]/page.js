const query = `
	query IndustryQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Industry {
				id
				industryId
				title
				uri
				blocks(postTemplate: false)
			}
		}
	}
`;

const industriesQuery = `
query IndustriesQuery {
  industries(first: 30) {
    nodes {
      id
      industryId
      title
      slug
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
      query: industriesQuery,
    }),
  });
  const { data } = await res.json();

	return data.industries.nodes.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Industry({params}) {
	const slug = await params;
	const queryVariables = {
  		uri: "industry/" + slug.slug,
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
	const nodeData = data.nodeByUri;

	//console.log("INDUSTRY DATA: ", data);

	return (
		<main>
			<h1>dynamic industry single page file - {nodeData.title}</h1>
		</main>  
	);
}