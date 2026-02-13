import { Red_Hat_Display, Libre_Franklin } from "next/font/google";
import "../../../assets/css/styles/bootstrap.css";
import "../../../assets/css/styles/style.css";

// components
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

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

export const metadata = {
  title: 'Case Studies - Sekure Payment Experts',
  description: '',
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
