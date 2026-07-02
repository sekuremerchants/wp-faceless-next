import { Red_Hat_Display, Libre_Franklin } from "next/font/google";
import "../../assets/css/styles/bootstrap.css";
import "../../assets/css/styles/style.css";
import "../../assets/css/styles/pages/page-home.css";

// components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

const getBlogContent = async () => {
  const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query BlogQuery {
          nodeByUri(uri: "/blog") {
            ... on Page {
              id
              pageId
              title
              seo {
                title
                metaDesc
              }
            }
          }
        }
      `,
    }),
  });
  const { data } = await res.json();
  return data.nodeByUri;
};

export const metadata = {
  title: 'Blog - Sekure Payment Experts',
  description: 'Follow the Sekure blog to learn about company updates, new product features, latest in payment processing technology & business initiatives.',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Blog() {
  const content = await getBlogContent();
  //console.log("CONTENT: ", content);

  return (
    <html lang='en-US'>
      <body className={`${redHatDisplay.variable} ${libreFranklin.variable}`}>
        <Header />
        <main>
          <h1>{content.title}</h1>
        </main>  
        <Footer />
      </body>
    </html>
  );
}
