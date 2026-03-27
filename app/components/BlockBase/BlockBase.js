export const BlockBase = ({children, id, classes}) => {
	return (
		<section id={id} className={`sk-block content-block-holder ${classes}`}>
			{children}
		</section>
	)
}