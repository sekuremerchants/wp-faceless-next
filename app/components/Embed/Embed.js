export const Embed = ({block, embedURL}) => {
	let embedSRC = ''
	let embedCode = ''
	let embed = ''

	//console.log('EMBED BLOCK DATA: ', block)

	if(block.providerNameSlug == 'youtube' || block.providerNameSlug == 'embed-handler') {
		embedSRC = 'https://www.youtube.com/embed/';
	}

	if(embedURL){
		embed = embedURL
	} else {
		if(block.providerNameSlug == 'vimeo'){
			embedSRC = block.url
		}

		const lastSlash = block.url.lastIndexOf('/');
		if(lastSlash !== -1){
			embedCode = block.url.slice(lastSlash + 1).replace('watch?v=', '')
		}

		embed = embedSRC + embedCode
	}

	//https://www.youtube.com/embed/xw2o9SuhytU?rel=0&autoplay=1

	return (
		<iframe width="560" height="315" src={embed} title={`${block.providerNameSlug} video player`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullcreen='true'></iframe>
	)
}
