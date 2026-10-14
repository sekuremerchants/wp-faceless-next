import "@/styles/pages/page-home.css";

export const metadata = {
  title: 'Sekure Payment Experts',
  description: '',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function SpanishHome() {
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

  console.log("SPANISH HOME PAGE CONTENT: ", data);

  return (
    <h1>spanish home page</h1>
  );
}
