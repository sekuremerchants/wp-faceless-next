import "../assets/css/styles/pages/page-home.css";

const getHomeContent = async () => {
  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query NewQuery {
          nodeByUri(uri: "/") {
            ... on Page {
              id
              pageId
              title
              pageHome {
                heroSection {
                  content
                  ctaText
                  heading
                  ctaLink {
                    url
                  }
                }
                acceptPaymentsSection {
                  content
                  heading
                  subheading
                }
                findYourIndustry {
                  heading
                  rightContent
                  smallHeading
                }
                testimonials {
                  heading
                  singleTestimonial {
                    testimonialAuthor
                    testimonialContent
                  }
                }
                contactUs {
                  chatWithUsText
                  content
                  ctaText
                  externalLink
                  heading
                  name
                  position
                  sayHiPhoneNumber
                  sayHiText
                  smallHeading
                  writeToUsText
                }
                statementAnalysis {
                  content
                  ctaText
                  heading
                  smallHeading
                }
                partnersSection {
                  heading
                  smallHeading
                }
                resourcesSection
                letsTalkSection {
                  content
                  form
                  heading
                  subheading
                }
              }
            }
          }
        }
      `,
    }),
  });
  const { data } = await res.json();
  return data.nodeByUri.pageHome;
};

export default async function Home() {
  const content = await getHomeContent();
  const paragraphs = content.heroSection.content.split(/(\r\n|\n){2,}/g);
  //console.log("CONTENT: ", content);

  return (
    <main>
      <section className="bg-blue prel">
        <div className="container">
          <div className="prel z-2 col-sm-8 col-md-6 col-lg-7 col-xl-6 mb-3">
            <h1>{content.heroSection.heading}</h1>
          </div>
          <div className="prel z-2 col-xs-12 col-sm-8 col-md-6 col-lg-6 col-xl-5">
            {paragraphs.map((paragraph, index) => {
              // Trim each paragraph to remove leading/trailing whitespace
              const trimmedParagraph = paragraph.trim();

              // Avoid rendering empty paragraphs that might result from the split
              if (!trimmedParagraph) return null;

              return (
                // Use a unique key for each element in the list
                <p key={index} dangerouslySetInnerHTML={{__html: trimmedParagraph}} />
              );
            })}
          </div>
        </div>
      </section>
    </main>  
  );
}
