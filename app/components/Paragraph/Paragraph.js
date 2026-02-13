export const Paragraph = ({content}) => {
	return (
		<p dangerouslySetInnerHTML={{__html: content}}></p>
	)
}