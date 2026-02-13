const query = `
  query GetPostsByCategorySlug($uri: String!) {
    posts(first: 9, where: {categoryName: $uri}) {
      nodes {
        id
        postId
        title
        date
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

const blogPostsQuery = `
  query GetBlogCategories {
    categories {
      nodes {
        name
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
      query: blogPostsQuery,
    }),
  });
  const { data } = await res.json();

	return data.categories.nodes.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({params}) {
	const slug = await params;
	const queryVariables = {
  		uri: "blog/category/" + slug.slug,
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

	//console.log("BLOG POST PARAMS: ", slug);
	//console.log("BLOG POST DATA: ", data.posts.nodes[0].categories.nodes[0].name);

	return (
		<>
			<h1>dynamic blog post category archive file - {data.posts.nodes[0].categories.nodes[0].name}</h1>
      <ul>
        {data.posts.nodes.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
		</>  
	);
}