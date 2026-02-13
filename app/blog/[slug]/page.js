import { BlockRenderer } from '../../components/BlockRenderer'
import Link from "next/link"
import Image from "next/image"
import { Social } from '../../components/Social'
import { BlogCategories } from '../../components/BlogCategories'
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

  //console.log("SINGLE POST DATA", nodeData);

	return (
    <>
      <article className="sk-blog-content container prel" itemScope="" itemType="https://schema.org/BlogPosting" itemID={nodeData.uri}>
        <div className="breadcrumb-wrap prel single-article-breadcrumb">
          <ul className="disclaimer pl-0 d-flex gap-10">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
          <p className="txt-size-12 upper letter-spacing">{nodeData.title}</p>
          <div className="back-to-all">
            <Image src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/themes/sekure/assets/media/icons/green-arrow.svg" width="21" height="16" alt="Back arrow" className="prel" />
            <a className="disclaimer" href="https://wordpress-dev-appsvc.azurewebsites.net/blog">Back to all posts</a>
          </div>
        </div>

        <div className="article-body row">
          <div className="article-content col-sm-12 col-lg-10">
            <h1>{nodeData.title}</h1>

            <div className="article-cats mb-3">
              <ul className="ul-reset px-0 mb-0 d-flex flex-wrap gap-10">
                {nodeData.categories.nodes.length > 0 && (
                  nodeData.categories.nodes.map((item, index) => (
                    <li key={index}><Link href={item.uri} className="post-single-category">{item.name}</Link></li>
                  ))
                )}
                {nodeData.businessTypes.nodes.length > 0 && (
                  nodeData.businessTypes.nodes.map((item, index) => (
                    <li key={index}><Link href={item.uri} className="post-single-category">{item.name}</Link></li>
                  ))
                )}
                {nodeData.contentTypes.nodes.length > 0 && (
                  nodeData.contentTypes.nodes.map((item, index) => (
                    <li key={index}><Link href={item.uri} className="post-single-category">{item.name}</Link></li>
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

            <div className='article-main-content row'>
              <div className='table-of-contents col-sm-12 col-lg-3'>
                <div className='sk-sticky'>
                  <p className='toc-title'>Jump to:</p>
                  <div className='content-bullets'>
                    <ol>
                      {nodeData.blocks.length > 0 && (
                        nodeData.blocks.map((item, index) => (
                          item.name == 'core/heading' && (
                            <li key={index} className=''><Link href={`#${item.attributes.content.toLowerCase().replaceAll(' ','-')}`} className='c-blue-1 anchor-link d-flex' dangerouslySetInnerHTML={{__html: item.attributes.content}}></Link></li>
                          )
                        ))
                      )}
                    </ol>
                  </div>
                </div>
              </div>

              <div className='article-text col-sm-12 col-lg-9'>
                <div className='blog-content' itemProp='articleBody'>
                  <BlockRenderer blocks={nodeData.blocks}/> 
                </div>
              </div>
            </div>
          </div>

          <div className='article-aside col-sm-12 col-lg-2 in-view'>
            <BlogCategories/>
          </div>
        </div>

        <section className='article-author row w-100' itemProp='author' itemScope itemType='https://schema.org/Person'>
          <div className='author-image col-sm-12 col-md-2'>
            <Image src={nodeData.author.node.userImage.authorImage.node.sourceUrl} alt={`${nodeData.author.node.name} profile pic`} height="130" width="130" className="author-image"/>
          </div>
          <div className='author-info col-sm-12 col-md-10'>
            <h3 className='txt-size-24 c-blue-1 fw-700 author-name heading-anim' itemProp="name">{nodeData.author.node.name}</h3>
            <p className='txt-size-18 c-blue-1 txt-post-rtf lh-1_66'>{nodeData.author.node.description}</p>
          </div>
        </section>

        <section className='newsletter-signup-wrap prel single-article-newsletter ov-hidden'>
          <Image src={`${basePathLocal}/media/images/blog/newsletter-signup.webp`} alt="newsletter signup background photo" height="150" width="1080" className="bg-image object-cover newsletter-background-img"/>
          <div className='newsletter-inner-holder'>
            <p className='txt-size-24 c-white fw-700'>Want more business insights?</p>
            <p className='txt-size-18 c-white newsletter-description'>Subscribe now to our monthly newsletter, and join over 40,000 business owners to gain access to exclusive content and insights.</p>
            <div className='subscribe-newsletter-form blog-subscribe-form'>
              <script dangerouslySetInnerHTML={{__html: "hbspt.forms.create({ region: 'na1', portalId: '4438792', formId: '3b6792fb-f3dd-4b88-bf39-d923061cc138' })"}}></script>
            </div>
          </div>
        </section>

        <section className='related-articles'>
          <h2 className='fw-700 heading-anim'>Related posts</h2>
          <div className='related-articles-wrap row gap-rows'>

            {relatedPosts.map((post, index) => (
              
              <div key={index} className='related-post-item col-sm-12 col-md-6 col-lg-4'>
                <div className='related-post-thumb mb-3'>
                  <Image src={post.relatedPost.image.node.sourceUrl} alt="" width="500" height="263" className="article-featured-img"/>
                </div>
                <div className='related-meta mb-3'>
                  <p className='reading-time'><Link href={nodeData.categories.nodes[0].uri} className='post-single-category'>{nodeData.categories.nodes[0].name}</Link></p>
                  <p className='post-date'>{post.relatedPost.date}</p>
                </div>
                <div className='related-content'>
                  <h3 className="post-title"><Link href={post.relatedPost.uri} className='text-decoration-none'>{post.relatedPost.title}</Link></h3>
                  <p>{post.relatedPost.excerpt}</p>

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

      <section className='inner-pages-contact-section contact-block prel sk-page-block block--s talk-us-block blog-social-media'>
        <Image className='bg-image object-cover b-lazy b-loaded' src={`${basePathLocal}/media/images/inner/contact-section-bgr.webp`} alt="blog prefooter background image" width="1280" height="768"/>

        <div className='background-flower-path-patterns'>
          <svg viewBox='0 0 451.3 451.3' className='background-flower-path-svg'>
            <path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
            <path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
            <path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
            <path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
          </svg>
          <svg viewBox='0 0 451.3 451.3' className='background-flower-path-svg'>
            <path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
            <path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
            <path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
            <path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
          </svg>
          <svg viewBox='0 0 451.3 451.3' className='background-flower-path-svg'>
            <path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
            <path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
            <path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
            <path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
          </svg>
          <svg viewBox='0 0 451.3 451.3' className='background-flower-path-svg'>
            <path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
            <path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
            <path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
            <path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
          </svg>
        </div>

        <div className='container z-3 prel'>
          <div className='row'>

            {/* Left side */}
            <div className='single-block txt-content-block col-sm-12 col-lg-5'>
              <div className='content-wrap'>
                <p className='txt-size-12 letter-spacing upper c-white talk-left-subheading'>Social feed</p>
                <h2 className='c-white fw-700 ltr-spc-pos-0_5 talk-left-heading heading-anim'>Follow us on social media</h2>
                
                <div className="buttons-wrap">
                  <a href="https://www.facebook.com/SekurePaymentExperts" className="contact-section-btn txt-size-24 lh-1_25 c-white fw-700" target="_blank" rel="noopener noreferrer">
                    <Image className="contact-btn-icon" alt="Facebook Logo" width="60" height="60" src={`${basePathLocal}/media/socials/Facebook-green.svg`}/>
                    <span className="btn-txt">Facebook</span>
                  </a>
                  <a href="https://twitter.com/SekureExperts" className="contact-section-btn txt-size-24 lh-1_25 c-white fw-700" target="_blank" rel="noopener noreferrer">
                    <Image className="contact-btn-icon" alt="X Logo" width="60" height="60" src={`${basePathLocal}/media/socials/X-green.svg`}/>
                    <span className="btn-txt">X</span>
                  </a>
                  <a href="https://www.instagram.com/SekurePaymentExperts/" className="contact-section-btn txt-size-24 lh-1_25 c-white fw-700" target="_blank" rel="noopener noreferrer">
                    <Image className="contact-btn-icon" alt="Instagram Logo" width="60" height="60" src={`${basePathLocal}/media/socials/Instagram-green.svg`}/>
                    <span className="btn-txt">Instagram</span>
                  </a>
                  <a href="https://www.youtube.com/channel/UCMkp6Tm70C3cQBZ_gS0G-Ow" className="contact-section-btn txt-size-24 lh-1_25 c-white fw-700" target="_blank" rel="noopener noreferrer">
                    <Image className="contact-btn-icon" alt="YouTube Logo" width="60" height="60" src={`${basePathLocal}/media/socials/YouTube-green.svg`}/>
                    <span className="btn-txt">YouTube</span>
                  </a>
                  <a href="https://www.linkedin.com/company/sekurepaymentexperts/" className="contact-section-btn txt-size-24 lh-1_25 c-white fw-700" target="_blank" rel="noopener noreferrer">
                    <Image className="contact-btn-icon" alt="LinkedIn Logo" width="60" height="60" src={`${basePathLocal}/media/socials/LinkedIn-green.svg`}/>
                    <span className="btn-txt">LinkedIn</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Right side */}
            <div className='single-block contact-block prel col-sm-12 col-lg-5 offset-lg-2'>
              <div className='content-wrap'>
                <p className='txt-size-12 letter-spacing talk-right-subheading c-blue-1'>Resources</p>
                <h2 className='c-blue-1 fw-700 ltr-spc-pos-0_5 talk-right-heading heading-anim'>Get set up for success</h2>
                <p className="text-highlight">Free access to our industry leading information to help you make informed decisions for your business.</p>

                <div className="blog-external-links">
                  <div className="blog-contact-item">
                    <a className="c-blue-1" href="https://sekuremerchants.com/blog/content-type/guides">
                      <div className="icon">
                        <Image className="contact-btn-icon" alt="Guides icon" width="60" height="60" src={`${basePathLocal}/media/images/blog/guides.webp`}/>
                      </div>
                      <p className="txt-size-30 c-blue-1 fw-700 lh-1_25">Guides</p>
                    </a>
                  </div>
                  <div className="blog-contact-item">
                    <a className="c-blue-1" href="https://sekuremerchants.com/blog/content-type/research">
                      <div className="icon">
                        <Image className="contact-btn-icon" alt="Research icon" width="60" height="60" src={`${basePathLocal}/media/images/blog/cs-hub.webp`}/>
                      </div>
                      <p className="txt-size-30 c-blue-1 fw-700 lh-1_25">Research</p>
                    </a>
                  </div>
                  <div className="blog-contact-item">
                    <a className="c-blue-1" href="https://sekuremerchants.com/resources/case-studies">
                      <div className="icon">
                        <Image className="contact-btn-icon" alt="Case studies icon" width="60" height="60" src={`${basePathLocal}/media/images/blog/case-studies.webp`}/>
                      </div>
                      <p className="txt-size-30 c-blue-1 fw-700 lh-1_25">Case studies</p>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
	);
}