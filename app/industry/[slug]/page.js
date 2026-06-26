import { BlockRenderer } from "@/components/BlockRenderer"
import { TalkToUs } from "@/components/TalkToUs"

const query = `
	query IndustryQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Industry {
				id
				industryId
				title
				uri
				blocks(postTemplate: false)
        seo {
          title
          metaDesc
        }
        customCss {
          customCss
        }
			}
		}
	}
`;

const industriesQuery = `
query IndustriesQuery {
  industries(first: 30) {
    nodes {
      id
      industryId
      title
      slug
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
      query: industriesQuery,
    }),
  });
  const { data } = await res.json();

	return data.industries.nodes.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params, searchParams }, parent) {
  const pageParams = await params;

	const queryVariables = {
  		uri: "industry/" + pageParams.slug,
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

export default async function Industry({params}) {
	const slug = await params;
	const queryVariables = {
  		uri: "industry/" + slug.slug,
	}
	const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
			variables: queryVariables,
    }),
  })

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`GraphQL failed with status ${res.status}. Response sample:`, errorText.slice(0, 300));
    throw new Error(`WordPress API returned status ${res.status}`);
  }

  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    const badBody = await res.text();
    console.error("Expected JSON but received HTML/Text payload instead:", badBody.slice(0, 300));
    throw new Error("WordPress returned HTML instead of GraphQL JSON data.");
  }

  const { data } = await res.json()

	//console.log("INDUSTRY DATA: ", data.nodeByUri.customCss);

	return (
    <>
      {data.nodeByUri.customCss && (
        <style dangerouslySetInnerHTML={{__html: data.nodeByUri.customCss.customCss}}></style>
      )}
      <BlockRenderer postID={data.nodeByUri.industryId} blocks={data.nodeByUri.blocks}/>  
      <TalkToUs />
    </>
	)
}