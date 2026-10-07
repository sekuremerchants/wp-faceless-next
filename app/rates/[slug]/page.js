import { BlockRenderer } from "@/components/BlockRenderer"
import { TalkToUs } from "@/components/TalkToUs"
import { LanguageSelect } from "@/components/Header/LanguageSelect"

const query = `
	query RateQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Rate {
        id
        title
        uri
        contentTypeName
        blocks
        postLanguage {
          contentLanguage
          enTranslation {
            nodes {
              uri
              ... on Rate {
                id
                uri
              }
            }
          }
          esTranslation {
            nodes {
              uri
              ... on Rate {
                id
                uri
              }
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

const ratesQuery = `
query RatesQuery {
  rates {
    nodes {
      id
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

  if(!res.ok){
    throw new Error('Failed to fetch GraphQL data')
  }

  const { data } = await res.json();
  //const nodeData = data.nodeByUri;

  //console.log('RATES SINGLE DATA: ', data)

	return (
		<>
      {data.nodeByUri.customCSS && (
        <style dangerouslySetInnerHTML={{__html: data.nodeByUri.customCSS.customCss}}></style>
      )}
      <BlockRenderer blocks={data.nodeByUri.blocks}/>
      <TalkToUs />
    </>
	);
}