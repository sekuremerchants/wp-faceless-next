import Link from 'next/link'
import Image from 'next/image'
import { CaseStudyContent } from '@/components/CaseStudyContent'
import { BlogPrefooter } from '@/components/BlogPrefooter'
import { LanguageSelect } from '@/components/Header/LanguageSelect'
import { assetSourceLocal } from '@/app/paths'

import "@/styles/bootstrap.css"
import "@/styles/style.css"
import "@/styles/blogs.css"
import "@/styles/case-studies.css"

const basePathLocal = assetSourceLocal();

const query = `
	query CaseStudyQuery($uri: String!) {
		nodeByUri(uri: $uri) {
      ... on Casestudy {
        id
        title
        uri
        date
        modified
        skLanguage {
					language
					englishTranslationUrl {
						url
					}
					frenchTranslationUrl {
						url
					}
					spanishTranslationUrl {
						url
					}
				}
        postSummary {
          postSummary
        }
        contentTypes {
          nodes {
            name
            uri
          }
        }
        categories {
          nodes {
            name
            uri
          }
        }
        businessTypes {
          nodes {
            name
            uri
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        content
        blocks(postTemplate: false)
        seo {
          title
          metaDesc
        }
        caseStudiesSidebar {
          sidebarContent {
            description
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
		}
	}
`;

const caseStudiesQuery = `
query caseStudies {
  casestudies {
    nodes {
      id
      casestudyId
      slug
      title
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
      query: caseStudiesQuery,
    }),
  })
  const { data } = await res.json()

	return data.casestudies.nodes.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params, searchParams }, parent) {
  const pageParams = await params

	const queryVariables = {
  		uri: "case-studies/" + pageParams.slug,
	}
  const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
			variables: queryVariables,
    }),
  })
  const { data } = await res.json()

  return {
    title: data.nodeByUri.seo.title,
    description: data.nodeByUri.seo.metaDesc,
    robots: {
			index: false,
			follow: false,
		},
  }
}

export default async function Page({params}) {
	const slug = await params
	const queryVariables = {
  	uri: "case-studies/" + slug.slug,
	}
  const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
			variables: queryVariables,
    }),
  })
  const { data } = await res.json()
  const nodeData = data.nodeByUri

  const categories = {
    name: nodeData.categories.nodes[0].name,
    link: nodeData.categories.nodes[0].uri
  }
  const businessTypes = {
    name: nodeData.businessTypes.nodes[0].name,
    link: nodeData.businessTypes.nodes[0].uri
  }
  const contentTypes = {
    name: nodeData.contentTypes.nodes[0].name,
    link: nodeData.contentTypes.nodes[0].uri
  }

  //console.log('CASE STUDIES DATA: ', nodeData)

	return (
    <main id='main-content' className='single-case-studies'>
      {(nodeData.skLanguage.englishTranslationUrl !== null || nodeData.skLanguage.frenchTranslationUrl !== null || nodeData.skLanguage.spanishTranslationUrl !== null) && (
        <LanguageSelect langData={nodeData}/>
      )}
      <article className='prel single-article-section sk-case-study sk-blog-content'>
        <div className='container'>
          <div className='article-body row'>

            {/* breadcrumbs */}
            <div className='col-sm-12'>
              <div className='breadcrumb-wrap prel single-article-breadcrumb'>
                <ul className='breadcrumb-list disclaimer'>
                  <li><Link href='/'>Home</Link></li>
                  <li><Link href='/resources/case-studies'>Case studies</Link></li>
                </ul>

                <p className='txt-size-12 upper letter-spacing current-page-breadcrumb-title'>{nodeData.title}</p>

                <Link href='/resources/case-studies' className='disclaimer'><Image src={`${basePathLocal}/media/icons/green-arrow.svg`} alt='Back arrow' width='21' height='16' className='prel'/> Back to all case studies</Link>
              </div>
            </div>

            {nodeData.caseStudiesSidebar.sidebarContent ?
              <>
                <div className='article-content col-lg-10'>
                  <CaseStudyContent caseStudy={nodeData} blocks={nodeData.blocks} categories={categories} businessTypes={businessTypes} contentTypes={contentTypes} />
                </div>

                <div className='article-aside col-lg-2'>
                  <div className='sk-sticky'>
                    <div className='posts-sidebar'>
                      <div className='d-flex flex-column gap-rows'>
                        {nodeData.caseStudiesSidebar.sidebarContent.map((item, index) => (
                          <div key={index} className='icons--item d-flex flex-column gap-10'>
                            {item.image && (
                              <div className='img--wrap'>
                                <Image src={item.image.node.sourceUrl} alt={item.image.node.altText} height='200' width='200' />
                              </div>
                            )}
                            {item.description && (
                              <div className='content-wrap'>
                                <p dangerouslySetInnerHTML={{__html:item.description}}></p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            : 
              <div className='article-content col-lg-12'>
                <CaseStudyContent caseStudy={nodeData} blocks={nodeData.blocks} categories={categories} businessTypes={businessTypes} contentTypes={contentTypes} />
              </div>
            }

          </div>
        </div>
      </article>

      <BlogPrefooter />
    </main>
    
	)
}