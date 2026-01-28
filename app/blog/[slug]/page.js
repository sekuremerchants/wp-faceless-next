const query = `
	query blogPostQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Post {
				id
				postId
				title
				uri
				blocks(postTemplate: false)
			}
		}
	}
`;

const blogPostsQuery = `
query blogPostsQuery {
  posts(first: 400) {
    nodes {
      id
      postId
      slug
      title
      blocks(postTemplate: false)
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

	return data.posts.nodes.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({params}) {
	const slug = await params;
	const queryVariables = {
  		uri: "blog/" + slug.slug,
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
  const nodeData = data.nodeByUri;

	console.log("BLOG POST PARAMS: ", slug);
	console.log("BLOG POST DATA: ", data);

	return (
		<main>
			<h1>dynamic blog post file - {nodeData.title}</h1>
		</main>  
	);
}