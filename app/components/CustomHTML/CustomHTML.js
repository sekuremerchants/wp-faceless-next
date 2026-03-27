export const CustomHTML = ({block}) => {
	let html = block.custom_html
	
	if(html.includes('[anchor_link')){
		console.log('CUSTOM HTML CONTAINS ANCHOR LINK SHORTCODE')
		html = html.replace(/\[.*?\]/g, '<a href="#" id="video"></a>') // alphabet.replace(/H.*S/, 'HS')
	}

	return (
		<div className="custom-html-wrap" dangerouslySetInnerHTML={{__html: html}}></div>
	)
}