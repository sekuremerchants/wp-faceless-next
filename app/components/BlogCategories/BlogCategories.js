import Link from "next/link"

export const BlogCategories = async () => {
	const allCategoriesQuery = `
	query AllCategories {
		categories {
			nodes {
				name
				uri
				posts(first:150) {
					nodes {
						title
					}
				}
			}
		}
	}
	`;

  const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: allCategoriesQuery,
    }),
  });
  const { data } = await res.json();

	return (
		<div className="sk-sticky">
			<p className="txt-size-12 letter-spacing upper">Categories</p>
			<div className="posts-categories">
				{data.categories.nodes.map((item, index) => (
					<li key={index} className=""><Link href={item.uri} className="fw-700 c-blue-1" dangerouslySetInnerHTML={{__html: `${item.name} (${item.posts.nodes.length})`}}></Link></li>
				))}
			</div>
		</div>
	)
}