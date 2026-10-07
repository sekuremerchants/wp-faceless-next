import queryByUri from '../../../queryByUri';
import { BlockRenderer } from "@/components/BlockRenderer"

const AllLandersServiciosQuery = `
	query AllLandersServicios {
		landings(first: 30, where: {parent: 30367}) {
			nodes {
				id
				landingId
				title
				slug
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

export async function generateStaticParams(){
	const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: AllLandersServiciosQuery,
		}),
	});
	const { data } = await res.json();
	return data.landings.nodes.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params, searchParams }, parent) {
  const pageParams = await params;
	const queryVariables = {
  		uri: "landings/es/servicios-comerciales/" + pageParams.slug,
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
  	uri: "landings/es/servicios-comerciales/" + slug,
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

	//console.log('ES BLOCK DATA: ', data.nodeByUri.postLanguage.contentLanguage[0])

	return (
		<BlockRenderer blocks={data.nodeByUri.blocks} language={data.nodeByUri.postLanguage.contentLanguage[0]}/>
	);
}