const query = `
  query GetPostsByContentType($uri: String!) {
    posts(first: 9, where: {taxQuery: {taxArray: {taxonomy: CONTENTTYPE, field: SLUG, operator: IN, terms: [$uri,]}}}) {
      nodes {
        date
        id
        slug
        title
        contentTypes {
          nodes {
            name
          }
        }
      }
    }
  }
`;

const blogPostsQuery = `
  query GetContentTypes {
    contentTypes {
      nodes {
        name
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
      query: blogPostsQuery,
    }),
  });
  const { data } = await res.json();

	return data.contentTypes.nodes.map((post) => ({
    slug: post.uri.replace('/blog/content-type/', ''),
  }));
}

export default async function BlogPost({params}) {
	const slug = await params;
	const queryVariables = {
  		uri: slug.slug,
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
		<main>
			<h1>dynamic blog post content type archive file - {data.posts.nodes[0].contentTypes.nodes[0].name}</h1>
      <ul>
        {data.posts.nodes.map((post) => (
          <li key={post.id}>{post.title} - {post.date}</li>
        ))}
      </ul>
		</main>  
	);
}