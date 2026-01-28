const query = `
	query CaseStudyQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Casestudy {
				id
				title
				uri
				blocks(postTemplate: false)
			}
		}
	}
`;

const caseStudiesQuery = `
query caseStudiesQuery {
  casestudies {
    nodes {
      id
      casestudyId
      slug
      title
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
      query: caseStudiesQuery,
    }),
  });
  const { data } = await res.json();

	return data.casestudies.nodes.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({params}) {
	const slug = await params;
	const queryVariables = {
  		uri: "case-studies/" + slug.slug,
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
			<h1>dynamic case study single page file - {nodeData.title}</h1>
		</main>  
	);
}