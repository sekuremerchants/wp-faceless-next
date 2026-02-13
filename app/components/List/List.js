import React from 'react'
import Link from 'next/link'

export const List = ({attributes, listItems}) => {

	const ListTag = attributes && attributes.ordered ? 'ol' : 'ul';

	return (
		<ListTag className="wp-block-list">
			{listItems.length > 0 && (
				listItems.map((item, index) => (
					<li key={index} dangerouslySetInnerHTML={{__html: item.attributes.content}}></li>
				))
			)}
		</ListTag>
	)
}