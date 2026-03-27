import "@/styles/blocks/blog-quote.css";

export const BlogQuote = ({block}) => {

	const bgMode = block.background == 1 ? 'bg-blue' : 'bg-white';
	const textMode = block.background == 1 ? 'text-white' : 'text-blue';

	return (
		<section className='content-block-holder sk-block blog-quote block--bcq op-0'>
			<div className={`case-quote ${bgMode}`}>
				<div className={`inner-quote ${textMode}`}>
					<div className='quote-content'>
						<div className='quote-text'>
							{ block.quote }
						</div>
						<div className='author'>
								<span className='person'>{ block.author }</span>
								<span className='company'>{ block.company }</span>
							</div>
					</div>
				</div>
			</div>
		</section>
	)
}