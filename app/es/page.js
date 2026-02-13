import "../../assets/css/styles/pages/page-home.css";

const getHomeContent = async () => {
  const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query NewQuery {
          nodeByUri(uri: "/es") {
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

export default async function Home() {
  const content = await getHomeContent();
  console.log("CONTENT: ", content);

  return (
    <main>
      <section className="sk-block ov-hidden">
        <div className="container prel">
          <div className="col-sm-12"><h1>{content.title}</h1></div>
        </div>
      </section>
    </main>  
  );
}
