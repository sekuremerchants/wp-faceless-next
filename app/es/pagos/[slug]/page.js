import { BlockRenderer } from '@/components/BlockRenderer'
import { TalkToUs } from '@/components/TalkToUs'

const ratesQuery = `
query RatesQuery {
  equipments {
    nodes {
      id
      title
      slug
    }
  }
}
`;

const query = `
	query LandingPageQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Equipment {
        id
        title
        uri
        contentTypeName
        blocks
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
        customCSS {
          customCss
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
			query: ratesQuery,
		}),
	});
	const { data } = await res.json();
	return data.equipments.nodes.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params, searchParams }, parent) {
	var pageParams = await params;

	if(pageParams.slug == 'tap-to-pay') {
		pageParams.slug = 'tap-to-pay-2'
	}
	
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
	var { slug } = await params;

	if(slug == 'tap-to-pay') {
		slug = 'tap-to-pay-2'
	}

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
	const { data } = await res.json();

	return (
		<>
			<BlockRenderer blocks={data.nodeByUri.blocks} language={data.nodeByUri.postLanguage.contentLanguage[0]}/>
			{data.nodeByUri != null && data.nodeByUri.customCSS && (
        <style dangerouslySetInnerHTML={{__html: data.nodeByUri.customCSS.customCss}}></style>
      )}
			<TalkToUs />
		</>
	);
}