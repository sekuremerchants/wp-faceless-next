const query = `
	query RateQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			id
			uri
			... on Rate {
				id
				rateId
				title
				uri
				blocks
			}
		}
	}
`;

const getPageContent = async (queryVariables) => {
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
  return data.nodeByUri;
};

export default async function Page(props) {
	const { slug } = await props.params;
	const queryVariables = {
  		uri: "rates/" + slug,
	};
	const content = await getPageContent(queryVariables);
	console.log('SLUG: ', slug);
	console.log('CONTENT: ', content);

	return (
		<main>
			<h1>dynamic rates single page file - {content.title}</h1>
		</main>  
	);
}