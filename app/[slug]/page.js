const query = `
	query PageBlocksQuery($uri: String!) {
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
	query CaseStudyMainQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			id
			uri
			... on Landing {
				id
				landingId
				title
				blocks(postTemplate: false)
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

const getLandingContent = async (queryVariables) => {
  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: landingQuery,
	  variables: queryVariables,
    }),
  });
  const { data } = await res.json();
  return data.nodeByUri;
};

export default async function Page(props) {
	const { slug } = await props.params;
	const queryVariables = {
  		uri: slug,
	};
	const landingQueryVariables = {
		uri: "landings/" + slug,
	};
	
	var content = await getPageContent(queryVariables);

	if(!content){
		var content = await getLandingContent(landingQueryVariables);
	}

	console.log('SLUG: ', slug);
	console.log('CONTENT: ', content);

	return (
		<main>
			<h1>dynamic page file - {content.title}</h1>
		</main>  
	);
}