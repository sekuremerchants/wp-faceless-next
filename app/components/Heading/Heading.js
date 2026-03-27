import React from 'react'

const stripTags = (html) => {
	return html.replace(/<[^>]*>?/gm, '');
}

export const Heading = ({content, level}) => {
	const heading = React.createElement(
		`h${level}`,
		{ id: stripTags(content.toLowerCase().replaceAll(' ', '-').replaceAll('&nbsp;', '')), dangerouslySetInnerHTML: {__html: content} },
	)

	return heading
}