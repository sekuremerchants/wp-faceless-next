const getBlogContent = async () => {
  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query CaseStudyMainQuery {
          nodeByUri(uri: "/case-studies") {
            ... on Page {
              id
              pageId
              title
            }
          }
        }
      `,
    }),
  });
  const { data } = await res.json();
  return data.nodeByUri;
};

export default async function Blog() {
  const content = await getBlogContent();
  console.log("CONTENT: ", content);

  return (
    <main>
      <h1>main case studies page - {content.title}</h1>
    </main>  
  );
}
