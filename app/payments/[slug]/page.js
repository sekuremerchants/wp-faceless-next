const query = `
	query EquipmentQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Equipment {
				id
				equipmentId
				title
				uri
				blocks(postTemplate: false)
			}
		}
	}
`;

const queryLander = `
	query PaymentsLanderQuery($uri: String!) {
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

const equipmentsQuery = `
query EquipmentsQuery {
  equipments(first: 40) {
    nodes {
      id
      equipmentId
      title
      slug
    }
  }
  landings(where: { search: "payments" }) {
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

export async function generateStaticParams(){
  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: equipmentsQuery,
    }),
  });
  const { data } = await res.json();

  return [
    data.equipments.nodes.map((post) => ({
      slug: post.slug,
    })),
    data.landings.nodes.map((post) => ({
      slug: post.slug,
    })),
  ];
}

export default async function Payment({params}) {
	const { slug } = await params;
  console.log("SLUG: ", slug);
	const queryVariables = {
  		uri: "payments/" + slug,
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
	const queryLanderVariables = {
  		uri: "landings/" + slug,
	};
	const resLander = await fetch(process.env.WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryLander,
			variables: queryLanderVariables,
    }),
  });
  var { data } = await res.json();
  if(!data.nodeByUri){
    var { data } = await resLander.json();
  }

  console.log("PAYMENTS DATA: ", data);

	return (
		<main>
			<h1>dynamic payments single page file - {data.nodeByUri.title}</h1>
		</main>  
	);
}