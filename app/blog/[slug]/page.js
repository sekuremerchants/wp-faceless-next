import { BlockRenderer } from '@/components/BlockRenderer'
import { BlogPrefooter } from '@/components/BlogPrefooter'
import { HubspotForm } from '@/components/HubspotForm'
import Link from "next/link"
import Image from "next/image"
import { Social } from '@/components/Social'
import { BlogCategories } from '@/components/BlogCategories'
import { assetSourceLocal } from "../../paths"
import readingTime from 'reading-time'
import { rateLimitedFetch } from '@/lib/api'

const basePathLocal = assetSourceLocal();

const query = `
	query blogPostQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Post {
				id
				title
				uri
        blocks
        content
        postSummary {
          postSummary
        }
        seo {
          title
          metaDesc
        }
        categories {
          nodes {
            categoryId
            name
            uri
            slug
          }
        }
        businessTypes {
          nodes {
            name
            uri
          }
        }
        contentTypes {
          nodes {
            name
            uri
          }
        }
        author {
          node {
            name
            description
            userImage {
              authorImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
        date
        modified
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
			}
		}
	}
`;

const blogPostsQuery = `
query blogPosts {
  posts(first: 500) {
    nodes {
      id
      slug
      title
      date
      uri
      content
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
}
`;

const relatedPostsQuery = `
query GetPostsByCategorySlug($uri: String!) {
  posts(first: 3, where: {categoryName: $uri}) {
    nodes {
      id
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

const getAllPosts = async () => {
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

	return data.posts.nodes;
}

export async function generateStaticParams(){
  const allPosts = await getAllPosts();

	return allPosts.map((post) => ({
    slug: String(post.slug),
  }));
}

export async function generateMetadata({ params, searchParams }, parent) {
  const pageParams = await params;

	const queryVariables = {
  		uri: "blog/" + pageParams.slug,
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

  return {
    title: data.nodeByUri.seo.title,
    description: data.nodeByUri.seo.metaDesc,
    robots: {
			index: false,
			follow: false,
		},
  }
}

export default async function BlogPost({params}) {
	const { slug } = await params;
	const queryVariables = {
  		uri: "blog/" + String(slug),
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

  //console.log('POST DATA: ', nodeData)

  const allPosts = await getAllPosts();
  const filterPostsForRelated = allPosts.map((post) => {
    const newDate = new Date(post.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const postedDateFormatted = newDate.toLocaleDateString(undefined, options);
    const timeToRead = post.content ? readingTime(post.content) : '0 mins';
    const excerpt = post.content ? post.content.replaceAll('<p>', '').substring(0, 135) + '...' : '';

    return (post.postId != nodeData.postId && post.categories.nodes[0].name === nodeData.categories.nodes[0].name && (
      {relatedPost: {
        title: post.title,
        date: postedDateFormatted,
        uri: post.uri,
        excerpt: excerpt,
        image: post.featuredImage,
        readingTime: (timeToRead != '0 mins' ? timeToRead.text : timeToRead),
      },}
    ))
  });
  const relatedPosts = filterPostsForRelated.filter(Boolean).slice(0, 3);

  const postedDate = new Date(nodeData.date);
  const modifiedDate = new Date(nodeData.modified);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const postedDateFormatted = postedDate.toLocaleDateString(undefined, options);
  const modifiedDateFormatted = modifiedDate.toLocaleDateString(undefined, options);
  const timeToRead = nodeData.content ? readingTime(nodeData.content) : '0'

  const stripTags = (html) => {
		return html.replace(/<[^>]*>?/gm, '');
	}

  let h2Count = 0;

  {nodeData.blocks && (
    nodeData.blocks.map((item, index) => {
      if(item.name == 'core/heading' && item.attributes.level == '2'){
        h2Count++;
      }
    })
  )}


  const mainContentColClass = h2Count > 2 ? 'article-text prel mt-50 col-sm-12 col-lg-8 offset-xl-1' : 'article-text prel mt-50 col-sm-12'

	return (
    <>

      <div id='sticky-bar' className='d-flex justify-content-center align-items-center'>
        
        <div className='toc-wrap'>
          <Link href='#' id='sticky-toc-toggle' className='prel disclaimer'>Table of contents <button aria-label="Open or close the table of contents" className="dropdown-arrow-btn js-faq-dropdown-btn"></button></Link>
          <div id='sticky-toc'></div>
        </div>

        <p className='disclaimer fw-500 mb-0'>{nodeData.title}</p>

        <div className='sticky-extras pabs d-flex justify-content-between'>
          <div className='article-share d-flex align-items-center gap-10'>
            <a href='#' rel='noopener noreferrer' className='social-item d-flex justify-content-center align-items-center prel fb-share' arial-label='Share on facebook' title='Share on facebook'>
              <svg width='56' height='56' className='share-fb' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M28 56C20.5739 56 13.452 53.05 8.20101 47.799C2.94999 42.548 0 35.4261 0 28C0 20.5739 2.94999 13.452 8.20101 8.20101C13.452 2.94999 20.5739 0 28 0C35.4261 0 42.548 2.94999 47.799 8.20101C53.05 13.452 56 20.5739 56 28C56 35.4261 53.05 42.548 47.799 47.799C42.548 53.05 35.4261 56 28 56Z' fill='none'/>
                <path className='fb--logo' d='M30.7426 31.3257V48.4129H22.8846V31.3239H16.3633V24.398H22.8846V21.8689C22.8846 12.5061 26.7901 7.58712 35.0655 7.58712C36.6181 7.57077 38.1621 7.82066 39.6304 8.32596V15.1742C38.4464 14.8947 37.234 14.7541 36.0175 14.7551C35.2899 14.6902 34.5574 14.8027 33.8828 15.083C33.2082 15.3634 32.6117 15.8031 32.1444 16.3647C31.0487 18.0078 30.5542 19.979 30.7444 21.9448V24.3925H39.6394L37.2495 31.3185L30.7426 31.3257Z' fill='#002FA7'/>
              </svg>
            </a>
            <a href='#' rel='noopener noreferrer' className='social-item d-flex justify-content-center align-items-center prel x-share' arial-label='Share on X/twitter' title='Share on X/twitter'>
              <svg width='57' height='57' className='share-x' viewBox='0 0 57 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M28.5004 56.0455C23.0065 56.0455 17.636 54.414 13.0679 51.3573C8.49991 48.3006 4.93956 43.956 2.83713 38.8729C0.734692 33.7898 0.184599 28.1965 1.25641 22.8003C2.32822 17.4041 4.9738 12.4473 8.85859 8.55689C12.7434 4.66645 17.6929 2.01702 23.0813 0.94365C28.4696 -0.129721 34.0548 0.421172 39.1305 2.52666C44.2063 4.63216 48.5446 8.19768 51.5968 12.7724C54.6491 17.347 56.2782 22.7254 56.2782 28.2273C56.2782 35.6052 53.3517 42.6808 48.1423 47.8977C42.933 53.1147 35.8676 56.0455 28.5004 56.0455Z' fill='none'/>
                <path className='x--logo' d='M31.2963 26.0834L41.49 14.2273H39.0744L30.2232 24.5218L23.1538 14.2273H15L25.6904 29.7944L15 42.2273H17.4157L26.7629 31.356L34.2287 42.2273H42.3825L31.2957 26.0834H31.2963ZM27.9876 29.9315L26.9045 28.3814L18.2861 16.0468H21.9966L28.9516 26.0012L30.0348 27.5513L39.0756 40.4905H35.3652L27.9876 29.9321V29.9315Z' fill='#002EA6'/>
              </svg>
            </a>
            <a href='#' rel='noopener noreferrer' className='social-item d-flex justify-content-center align-items-center prel ln-share' arial-label='Share on linkedin' title='Share on linkedin'>
              <svg width='56' height='57' className='share-linkedin' viewBox='0 0 56 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M28 56.4091C20.5739 56.4091 13.452 53.4591 8.20101 48.2081C2.94999 42.9571 0 35.8352 0 28.4091C0 20.9831 2.94999 13.8611 8.20101 8.61013C13.452 3.35911 20.5739 0.409119 28 0.409119C35.4261 0.409119 42.548 3.35911 47.799 8.61013C53.05 13.8611 56 20.9831 56 28.4091C56 35.8352 53.05 42.9571 47.799 48.2081C42.548 53.4591 35.4261 56.4091 28 56.4091Z' fill='none'/>
                <path className='linkedin--logo' d='M19.4034 23.0419H12.8496V43.9369H19.4034V23.0419Z' fill='#002EA6'/>
                <path className='linkedin--logo' d='M37.1184 22.5781C36.8711 22.5501 36.6179 22.5308 36.3589 22.5203C35.1234 22.4536 33.8903 22.6877 32.7652 23.2026C31.6401 23.7174 30.6568 24.4976 29.8997 25.4761C29.7973 25.6074 29.7021 25.7441 29.6144 25.8856V23.0856H23.3477V43.9841H29.9014V34.1666C29.7404 32.7316 29.9463 31.2793 30.4999 29.9456C30.7878 29.4307 31.2125 29.0055 31.7271 28.717C32.2416 28.4286 32.826 28.2881 33.4154 28.3111C33.9002 28.2785 34.3865 28.348 34.8428 28.515C35.2991 28.6821 35.7152 28.943 36.0644 29.2809C36.4135 29.6189 36.6879 30.0263 36.8698 30.4769C37.0516 30.9275 37.1369 31.4112 37.1202 31.8968V44.0786H43.6739V30.4513C43.6739 25.7876 41.3027 23.0296 37.1202 22.5763' fill='#002EA6'/>
                <path className='linkedin--logo' d='M19.9266 16.5371C19.9266 17.2885 19.7038 18.0231 19.2863 18.6479C18.8689 19.2726 18.2755 19.7596 17.5813 20.0472C16.8871 20.3347 16.1232 20.4099 15.3862 20.2634C14.6492 20.1168 13.9722 19.7549 13.4409 19.2236C12.9096 18.6922 12.5477 18.0153 12.4011 17.2783C12.2545 16.5413 12.3298 15.7774 12.6173 15.0832C12.9049 14.389 13.3918 13.7956 14.0166 13.3781C14.6414 12.9607 15.376 12.7379 16.1274 12.7379C17.135 12.7379 18.1014 13.1381 18.8139 13.8506C19.5263 14.5631 19.9266 15.5295 19.9266 16.5371Z' fill='#002EA6'/>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
      

      <article className='sk-blog-content container prel' itemScope='' itemType='https://schema.org/BlogPosting' itemID={nodeData.uri}>
        <div className='breadcrumb-wrap prel single-article-breadcrumb mb-4'>
          <ul className='disclaimer pl-0 d-flex gap-10'>
            <li><Link href='/' className='text-decoration-underline hover-text-col-blue-2'>Home</Link></li>
            <li><Link href='/blog' className='text-decoration-underline hover-text-col-blue-2'>Blog</Link></li>
          </ul>
        </div>

        <div className='article-body mb-50'>
          <div className='article-content'>

            <div className='row mb-5'>
              <div className='col-sm-12 col-lg-9'>
                <h1>{nodeData.title}</h1>
              </div>
            </div>

            <div className='row gap-rows mb-5 prel divider-bottom'>
              <div className='col-sm-12 col-lg-6'>
                {nodeData.featuredImage && (
                  <div className='featured-img-holder'>
                    <Image src={nodeData.featuredImage.node.sourceUrl} alt={nodeData.featuredImage.node.altText} className='article-featured-img wp-post-image' width='1085' height='550'/>
                  </div>
                )}
              </div>

              <div className='col-sm-12 col-lg-6'>

                <div className='article-cats mb-3'>
                  <ul className='ul-reset px-0 mb-0 d-flex flex-wrap gap-10'>
                    {nodeData.categories.nodes.length > 0 && (
                      nodeData.categories.nodes.map((item, index) => (
                        <li key={index}><Link href={item.uri} className='post-single-category text-decoration-underline hover-text-col-blue'>{item.name}</Link></li>
                      ))
                    )}
                    {nodeData.businessTypes.nodes.length > 0 && (
                      nodeData.businessTypes.nodes.map((item, index) => (
                        <li key={index}><Link href={item.uri} className='post-single-category text-decoration-underline hover-text-col-blue'>{item.name}</Link></li>
                      ))
                    )}
                    {nodeData.contentTypes.nodes.length > 0 && (
                      nodeData.contentTypes.nodes.map((item, index) => (
                        <li key={index}><Link href={item.uri} className='post-single-category text-decoration-underline hover-text-col-blue'>{item.name}</Link></li>
                      ))
                    )}
                  </ul>
                </div>

                {nodeData.postSummary.postSummary && (
                  <div className='summary mb-5'>
                    <p>{nodeData.postSummary.postSummary}</p>
                  </div>
                )}

                <div className='d-flex flex-wrap gap-10 mb-3'>
                  <p className='reading-time fw-600 mb-0'>{timeToRead.text}</p>
                  <p className='meta-separator mb-0'>|</p>
                  <p className='d-flex flex-column fw-600 mb-0'>
                    <time itemProp='dateModified' dateTime={modifiedDateFormatted}>Last updated: {modifiedDateFormatted}</time>
                  </p>
                </div>

                <Social/>

              </div>
            </div>

            <div className='article-main-content row'>

              {nodeData.blocks && h2Count > 2 && (
                <div id='table-of-contents' className='table-of-contents sk-sticky mt-50 col-sm-12 col-lg-4 col-xl-3 prel'>
                  <div id='content-bullets' className='content-bullets'>
                    <p id='toc-title' className='toc-title title-highlight'>Jump to:</p>
                    <ol>
                      {nodeData.blocks.map((item, index) => (
                          item.name == 'core/heading' && item.attributes.level == '2' && (
                            <li key={index} className=''><Link href={`#${stripTags(item.attributes.content.toLowerCase().replaceAll(' ','-').replaceAll('&nbsp;', ''))}`} className='c-blue-1 fw-400 anchor-link text-decoration-none hover-text-decoration-underline d-flex'>{stripTags(item.attributes.content.replaceAll('&nbsp;', '').replaceAll('&amp;', '&'))}</Link></li>
                          )
                        ))
                      }
                    </ol>
                  </div>
                </div>
              )}

              <div id='article-text' className={`article-text col-sm-12 ${mainContentColClass}`}>
                <div className='blog-content' itemProp='articleBody'>
                  {nodeData.blocks && (
                    <BlockRenderer blocks={nodeData.blocks}/>
                  )}
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <section className='article-author row w-100 op-0' itemProp='author' itemScope itemType='https://schema.org/Person'>
          <div className='author-image col-sm-12 col-md-2'>
            <Image src={nodeData.author.node.userImage.authorImage.node.sourceUrl} alt={`${nodeData.author.node.name} profile pic`} height="130" width="130" className="author-image"/>
          </div>
          <div className='author-info col-sm-12 col-md-10'>
            <h3 className='txt-size-24 c-blue-1 fw-700 author-name heading-anim' itemProp="name">{nodeData.author.node.name}</h3>
            <p className='txt-size-18 c-blue-1 txt-post-rtf lh-1_66'>{nodeData.author.node.description}</p>
          </div>
        </section>

        <section className='newsletter-signup-wrap prel single-article-newsletter ov-hidden op-0'>
          <Image src={`${basePathLocal}/media/images/blog/newsletter-signup.webp`} alt="newsletter signup background photo" height="150" width="1080" className="bg-image object-cover newsletter-background-img"/>
          <div className='newsletter-inner-holder'>
            <p className='txt-size-24 c-white fw-700'>Want more business insights?</p>
            <p className='txt-size-18 c-white newsletter-description'>Subscribe now to our monthly newsletter, and join over 40,000 business owners to gain access to exclusive content and insights.</p>
            <div className='subscribe-newsletter-form blog-subscribe-form'>
              <HubspotForm formID='edbc41d3-9034-41ac-b4e2-99da5f02cfa0' formContainer='blognewsletter' uid='987452043' />
            </div>
          </div>
        </section>

        <section className='related-articles op-0'>
          <h2 className='fw-700 heading-anim'>Related posts</h2>
          <div className='related-articles-wrap row gap-rows'>

            {relatedPosts.map((post, index) => (
              
              <div key={index} className='related-post-item col-sm-12 col-md-6 col-lg-4'>
                <div className='related-post-thumb mb-3'>
                  <Image src={post.relatedPost.image.node.sourceUrl} alt="" width="500" height="263" className="article-featured-img"/>
                </div>
                <div className='related-meta mb-3'>
                  <p className='reading-time'><Link href={nodeData.categories.nodes[0].uri} className='post-single-category text-decoration-underline hover-text-col-blue'>{nodeData.categories.nodes[0].name}</Link></p>
                  <p className='post-date'>{post.relatedPost.date}</p>
                </div>
                <div className='related-content'>
                  <h3 className="post-title"><Link href={post.relatedPost.uri} className='text-decoration-none hover-text-decoration-underline'>{post.relatedPost.title}</Link></h3>
                  <p dangerouslySetInnerHTML={{__html: post.relatedPost.excerpt}}></p>

                  <div className='row w-100 align-items-center'>
                    <div className='col-sm-12 mb-3'>
                      <p className='anim-translate-x txt-size-16 related-reading-time'>{post.relatedPost.readingTime}</p>
                    </div>
                    <div className='col-sm-12 col-lg-6'>
                      <Link href={post.relatedPost.uri} className='anim-translate-x btn-default size-18-txt c-blue-1 btn-green-1 section-color-white btn-offset-9 read-more-button'>
                          <span className='btn-bg-el'></span>
                          <span className='btn-txt'>Read more</span>
                      </Link>
                    </div>
                  </div>
                </div>
                
              </div>
            ))}

          </div>
        </section>

      </article>

      <BlogPrefooter />
    </>
	);
}