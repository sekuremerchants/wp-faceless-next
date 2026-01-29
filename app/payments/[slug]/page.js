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
  landings(where: {parent: 42053}) {
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
  const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: equipmentsQuery,
    }),
  });
  const { data } = await res.json();

  const equipmentSlugs = data.equipments.nodes.map((post) => ({
		slug: post.slug,
	}));

	const landerSlugs = data.landings.nodes.map((post) => ({
		slug: post.slug,
	}));

	const allSlugs = [...equipmentSlugs, ...landerSlugs];

  return allSlugs;

  /*
  return [
    data.equipments.nodes.map((post) => ({
      slug: post.slug,
    })),
    data.landings.nodes.map((post) => ({
      slug: post.slug,
    })),
  ];
  */
}

export default async function Payment({params}) {
	const { slug } = await params;
	const queryVariables = {
  		uri: "payments/" + slug,
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
  var { data } = await res.json();

  if(!data.nodeByUri){
  	const queryLanderVariables = {
  		uri: "landings/payments/" + slug,
	  };
    const resLander = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: queryLander,
        variables: queryLanderVariables,
      }),
    });
    var { data } = await resLander.json();
  }

  console.log("PAYMENTS DATA: ", data);

	return (
		<main>
			<h1>dynamic payments single page file - {data.nodeByUri.title}</h1>
		</main>  
	);
}