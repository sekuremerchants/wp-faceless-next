export const CustomHTML = ({block}) => {
	return (
		<div className="custom-html-wrap" dangerouslySetInnerHTML={{__html: block.custom_html}}></div>
	)
}