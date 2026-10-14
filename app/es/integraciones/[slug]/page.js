import { BlockRenderer } from '@/components/BlockRenderer'

const allPagesAndLandersQuery = `
	query AllPagesAndLandersQuery {
		pages(first: 10, where: {parent: 46136}) {
			nodes {
				id
				title
				slug
			}
		}
	}
`;

const query = `
	query PageQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Page {
				id
				title
				blocks(postTemplate: false)
        postLanguage {
          contentLanguage
          englishTranslation {
            nodes {
              uri
            }
          }
          spanishTranslation {
            nodes {
              uri
            }
          }
					frenchTranslation {
						nodes {
							uri
						}
					}
        }
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

export async function generateStaticParams(){
	const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: allPagesAndLandersQuery,
		}),
	});
	const { data } = await res.json();

	return data.pages.nodes.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params, searchParams }, parent) {
	const pageParams = await params;
	const queryVariables = {
		uri: 'es/integraciones/' + pageParams.slug,
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
	console.log('INTEGRACIONES SLUG: ', slug)
	const queryVariables = {
		uri: 'es/integraciones/' + slug,
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

	return (
		<>
			<BlockRenderer blocks={data.nodeByUri.blocks} language={data.nodeByUri.postLanguage.contentLanguage[0]}/>
			{data.nodeByUri.customCSS && (
				<style dangerouslySetInnerHTML={{__html: data.nodeByUri.customCSS.customCss}}></style>
			)}
		</>
	);
}