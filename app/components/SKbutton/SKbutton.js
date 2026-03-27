import { BlockBase } from '@/components/BlockBase'
import { Button } from '@/components/Button'

export const SKbutton = ({block}) => {
	return (
		<BlockBase classes='sk-button block--skbtn'>
			<Button type={block.external_link} text={block.cta_text} link={block.cta_link} />
		</BlockBase>
	)
}