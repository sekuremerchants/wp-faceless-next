import { BlockRenderer } from "@/components/BlockRenderer"
import { TalkToUs } from "@/components/TalkToUs"

const query = `
	query EquipmentQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Equipment {
				id
				title
				uri
				blocks(postTemplate: false)
        seo {
          title
          metaDesc
        }
        customCSS {
          customCss
        }
			}
		}
	}
`;

const queryLander = `
	query PaymentsLanderQuery($uri: String!) {
		nodeByUri(uri: $uri) {
      ... on Landing {
        id
        title
        uri
        blocks
        customCSS {
          customCss
        }
        postLanguage {
          contentLanguage
        }
        seo {
          title
          metaDesc
        }
      }
		}
	}
`;

const equipmentsQuery = `
query EquipmentsQuery {
  equipments(first: 40) {
    nodes {
      id
      title
      slug
    }
  }
  landings(where: {parent: 45773}) {
    nodes {
      id
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

  //console.log('ALL PAYMENTS SLUGS: ', allSlugs)

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

export async function generateMetadata({ params, searchParams }, parent) {
  const pageParams = await params;

	const queryVariables = {
    uri: "payments/" + pageParams.slug,
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

  if(!data){
  	const queryLanderVariables = {
  		uri: "landings/payments/" + pageParams.slug,
	  }

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

  const title = (data.nodeByUri != null && data.nodeByUri.seo ? data.nodeByUri.seo.title : 'Sekure Payment Experts')
  const desc = (data.nodeByUri != null && data.nodeByUri.seo ? data.nodeByUri.seo.metaDesc : '')

  return {
    title: title,
    description: desc,
    robots: {
			index: false,
			follow: false,
		},
  }
}

export default async function Payment({params}) {
	const { slug } = await params;
  //console.log('PAYMENTS SLUG: ', slug)
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

  if(data.nodeByUri == null){
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

  //console.log('PAYMENTS DATA: ', data)

	return (
    <>
      {data.nodeByUri != null && (
        <BlockRenderer blocks={data.nodeByUri.blocks}/> 
      )}
      {data.nodeByUri != null && data.nodeByUri.customCSS && (
        <style dangerouslySetInnerHTML={{__html: data.nodeByUri.customCSS.customCss}}></style>
      )}
      {data.nodeByUri.uri != '/payments/payanywhere-smart-flex' && (
        <TalkToUs />
      )}
    </>
	);
}