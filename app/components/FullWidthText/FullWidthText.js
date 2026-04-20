export const FullWidthText = ({block}) => {
	//console.log('FULL WIDTH TEXT BLOCK DATA: ', block)

	const bgColour = block.full_width_with_background == 'Yes' ? 'full-width-bg' : ''

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
			if(content.includes('[sekure_icon ')){
				const shortcodeData = content.split(' ')
				const url = shortcodeData[1].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
				const classes = shortcodeData.at(-1).replace("classes='", '').replace("']",'')
				return `<img src='${url}' alt='icon' height='50' width='50' class='${classes}'>`
			} else if(content != '' && !hasHTML(content)){
				return `<p>${content}</p>`
			} else {
				return content.trim()
			}
		}).join('')
		return formatted
	}

	return (
		<section id={block.section_id} className={`sk-block block--b prel ov-hidden op-0 ${bgColour} ${block.section_classes}`}>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12 col-lg-8 heading-balance' dangerouslySetInnerHTML={{__html:formatContent(block.fullwidth_content)}}></div>
				</div>
			</div>
		</section>
	)
}