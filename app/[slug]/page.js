import { queryByUri } from '../queryByUri';
import { BlockRenderer } from "@/components/BlockRenderer"
import Image from  'next/image'
import Link from  'next/link'

const allPagesAndLandersQuery = `
	query AllPagesAndLandersQuery {
		pages(first: 30, where: {parent: 0}) {
			nodes {
				id
				pageId
				title
				slug
			}
		}
		landings(first: 170, where: {parent: 0}) {
			nodes {
				id
				landingId
				title
				slug
			}
		}
	}
`;

const query = `
	query PageQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Page {
				id
				pageId
				title
				blocks(postTemplate: false)
				postLanguage {
					contentLanguage
				}
				seo {
					title
					metaDesc
				}
				customCSS {
					customCss
				}
			}
		}
	}
`;

const landingQuery = `
	query LandingPageQuery($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Landing {
				id
				landingId
				title
				blocks(postTemplate: false)
				postLanguage {
					contentLanguage
				}
				seo {
					title
					metaDesc
				}
				customCSS {
					customCss
				}
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
			query: allPagesAndLandersQuery,
		}),
	});
	const { data } = await res.json();

	//console.log('STATIC PARAMS DATA: ', data)

	if(!data || data.length === 0){
		return [{ slug: 'data-empty' }];
	}

	const pageSlugs = data.pages.nodes.map((post) => ({
		slug: post.slug,
	}));

	const landerSlugs = data.landings.nodes.map((post) => ({
		slug: post.slug,
	}));

	const allSlugs = [...pageSlugs, ...landerSlugs];

	//console.log(allSlugs);

	return allSlugs;

	/*
	return [
		data.pages.nodes.map((post) => ({
			slug: post.slug,
		})),
		data.landings.nodes.map((post) => ({
			slug: post.slug,
		})),
	];
	*/
}

export async function generateMetadata({ params, searchParams }, parent) {
  const pageParams = await params;

	const queryVariables = {
  		uri: "/" + pageParams.slug,
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
  var { data } = await res.json();

	//console.log('PAGE PARAMS: ', pageParams)
	//console.log('PAGE DATA FROM /: ', data)

	if(!data.nodeByUri){
		const newQueryVars = {
				uri: 'landings/' + pageParams.slug,
		};
		const resTwo = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: landingQuery,
				variables: newQueryVars,
			}),
		});
		var { data } = await resTwo.json();
	}

	//console.log('LANDERS DATA FROM /: ', data)

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
	const { slug } = await params
	const pageData = await queryByUri(slug)
	if(pageData){
		var pageCSS = pageData.nodeByUri.customCSS.customCss ? pageData.nodeByUri.customCSS.customCss : false
		var pageBlocks = pageData.nodeByUri.blocks
		var lang = pageData.nodeByUri.postLanguage.contentLanguage[0]
	}
	
	return (
		<>
      <BlockRenderer blocks={pageBlocks} language={lang} />

			{pageCSS && (
				<style dangerouslySetInnerHTML={{__html: pageCSS}}></style>
			)}

			{pageData.nodeByUri.landerCTA.showStickyBar == 'yes' && (
				<div className='sticky-contact'>
					<div className='landing-sticky-block'>
						<Link href='tel:'><Image src='/media/images/pictograms/landing-phone-icon.webp' alt='call us' height='50' width='50' /></Link>
						<Link href='#' id='form-popup' data-popup-id='37274'><Image src='/media/images/pictograms/landing-mail-icon.webp' alt='call us' height='50' width='50' /></Link>
					</div>
				</div>
			)}
    </>
	);
}