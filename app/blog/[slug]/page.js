import { BlockRenderer } from '@/components/BlockRenderer'
import { BlogPrefooter } from '@/components/BlogPrefooter'
import { HubspotForm } from '@/components/HubspotForm'
import Link from "next/link"
import Image from "next/image"
import { Social } from '@/components/Social'
import { BlogCategories } from '@/components/BlogCategories'
import { assetSourceLocal } from "../../paths"
import readingTime from 'reading-time'

const basePathLocal = assetSourceLocal();

const query = `
	query blogPostQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Post {
				id
				postId
				title
				uri
				blocks(postTemplate: false)
        content
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
  posts(first: 400) {
    nodes {
      id
      postId
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
    slug: post.slug,
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
  		uri: "blog/" + slug,
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

  const allPosts = await getAllPosts();
  const filterPostsForRelated = allPosts.map((post) => {
    const newDate = new Date(post.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const postedDateFormatted = newDate.toLocaleDateString(undefined, options);
    const timeToRead = readingTime(post.content);
    const excerpt = post.content.replaceAll('<p>', '').substring(0, 135) + '...';

    return (post.postId != nodeData.postId && post.categories.nodes[0].name === nodeData.categories.nodes[0].name && (
      {relatedPost: {
        title: post.title,
        date: postedDateFormatted,
        uri: post.uri,
        excerpt: excerpt,
        image: post.featuredImage,
        readingTime: timeToRead.text,
      },}
    ))
  });
  const relatedPosts = filterPostsForRelated.filter(Boolean).slice(0, 3);

  const postedDate = new Date(nodeData.date);
  const modifiedDate = new Date(nodeData.modified);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const postedDateFormatted = postedDate.toLocaleDateString(undefined, options);
  const modifiedDateFormatted = modifiedDate.toLocaleDateString(undefined, options);
  const timeToRead = readingTime(nodeData.content);

  const stripTags = (html) => {
		return html.replace(/<[^>]*>?/gm, '');
	}

  let h2Count = 0;

  nodeData.blocks.map((item, index) => {
    if(item.name == 'core/heading' && item.attributes.level == '2'){
      h2Count++;
    }
  })

  const mainContentColClass = h2Count > 2 ? 'col-lg-9' : ''

	return (
    <>
      <article className='sk-blog-content container prel' itemScope='' itemType='https://schema.org/BlogPosting' itemID={nodeData.uri}>
        <div className='breadcrumb-wrap prel single-article-breadcrumb'>
          <ul className='disclaimer pl-0 d-flex gap-10'>
            <li><Link href='/' className='text-decoration-underline hover-text-col-blue-2'>Home</Link></li>
            <li><Link href='/blog' className='text-decoration-underline hover-text-col-blue-2'>Blog</Link></li>
          </ul>
          <p className='txt-size-12 upper letter-spacing'>{nodeData.title}</p>
          <div className='back-to-all'>
            <Image src={`${basePathLocal}/media/icons/green-arrow.svg`} width='21' height='16' alt='Back arrow' className='prel' />
            <Link href='/blog' className='disclaimer'>Back to all posts</Link>
          </div>
        </div>

        <div className='article-body mb-50 row'>
          <div className='article-content col-sm-12 col-lg-10'>
            <h1>{nodeData.title}</h1>

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

            <div className='article-meta d-flex flex-wrap'>
              <p className='reading-time fw-600'>{timeToRead.text}</p>
              <p className='meta-separator'>|</p>
              <p className='d-flex flex-column fw-600'>
                <time itemProp='dateCreated' dateTime={postedDateFormatted}>Posted: {postedDateFormatted}</time>
              </p>
              <p className='meta-separator'>|</p>
              <p className='d-flex flex-column fw-600'>
                <time itemProp='dateModified' dateTime={modifiedDateFormatted}>Last updated: {modifiedDateFormatted}</time>
              </p>
            </div>

            <Social/>
            
            {nodeData.featuredImage && (
              <div className='featured-img-holder'>
                <Image src={nodeData.featuredImage.node.sourceUrl} alt={nodeData.featuredImage.node.altText} className='article-featured-img wp-post-image' width='1085' height='550'/>
              </div>
            )}

            <div className='article-main-content mt-50 row op-0'>

              {nodeData.blocks.length > 0 && h2Count > 2 && (
                <div className='table-of-contents col-sm-12 col-lg-3'>
                  <div className='sk-sticky'>
                    <p className='toc-title title-highlight'>Jump to:</p>
                    <div className='content-bullets'>
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
                </div>
              )}

              <div className={`article-text col-sm-12 ${mainContentColClass}`}>
                <div className='blog-content' itemProp='articleBody'>
                  <BlockRenderer blocks={nodeData.blocks}/> 
                </div>
              </div>
            </div>
          </div>

          <div className='article-aside col-sm-12 col-lg-2'>
            <BlogCategories/>
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
              {/*<script dangerouslySetInnerHTML={{__html: "hbspt.forms.create({ region: 'na1', portalId: '4438792', formId: '3b6792fb-f3dd-4b88-bf39-d923061cc138' })"}}></script>*/}
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