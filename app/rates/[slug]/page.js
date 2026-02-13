const query = `
	query RateQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Rate {
				id
				rateId
				title
				uri
				blocks(postTemplate: false)
        seo {
          title
          metaDesc
        }
			}
		}
	}
`;

const ratesQuery = `
query RatesQuery {
  rates {
    nodes {
      id
      rateId
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
      query: ratesQuery,
    }),
  });
  const { data } = await res.json();

	return data.rates.nodes.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params, searchParams }, parent) {
  const pageParams = await params;

	const queryVariables = {
  		uri: "rates/" + pageParams.slug,
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
  		uri: "rates/" + slug,
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

	return (
		<main>
			<h1>dynamic rates single page file - {nodeData.title}</h1>
		</main>  
	);
}