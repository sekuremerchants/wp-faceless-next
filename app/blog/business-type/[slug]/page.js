const query = `
  query GetPostsByBusinessType($uri: String!) {
    posts(first: 9, where: {taxQuery: {taxArray: {taxonomy: BUSINESSTYPE, field: SLUG, operator: IN, terms: [$uri,]}}}) {
      nodes {
        date
        id
        slug
        title
        businessTypes {
          nodes {
            name
          }
        }
      }
    }
  }
`;

const blogPostsQuery = `
  query GetBusinessTypes {
    businessTypes {
      nodes {
        name
        slug
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
      query: blogPostsQuery,
    }),
  });
  const { data } = await res.json();

	return data.businessTypes.nodes.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({params}) {
	const slug = await params;
	const queryVariables = {
  		uri: slug.slug,
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
  const { data } = await res.json();

	return (
		<main>
			<h1>dynamic blog post business type archive file - {data.posts.nodes[0].businessTypes.nodes[0].name}</h1>
      <ul>
        {data.posts.nodes.map((post) => (
          <li key={post.id}>{post.title} - {post.date}</li>
        ))}
      </ul>
		</main>  
	);
}