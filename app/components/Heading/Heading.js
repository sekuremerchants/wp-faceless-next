import React from 'react';

export const Heading = ({content, level}) => {
	const heading = React.createElement(
		`h${level}`,
		{ id: content.toLowerCase().replaceAll(' ', '-'), dangerouslySetInnerHTML: {__html: content} },
	)

	return heading
}