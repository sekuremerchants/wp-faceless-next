export const Embed = ({block}) => {
	var embedSRC = '';
	var embedCode = '';

	if(block.providerNameSlug == 'youtube') {
		embedSRC = 'https://www.youtube.com/embed/';
	} else {

	}

	const lastSlash = block.url.lastIndexOf('/');
	if(lastSlash !== -1){
		embedCode = block.url.slice(lastSlash + 1);
	}

	const embed = embedSRC + embedCode;

	return (
		<figure className={`wp-block-embed is-type-video is-provider-${block.providerNameSlug} wp-block-embed-${block.providerNameSlug} wp-embed-aspect-16-9 wp-has-aspect-ratio`}>
			<div className="wp-block-embed__wrapper">
				<iframe width="560" height="315" src={embed} title={`${block.providerNameSlug} video player`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullcreen></iframe>
			</div>
		</figure>
	)
}
