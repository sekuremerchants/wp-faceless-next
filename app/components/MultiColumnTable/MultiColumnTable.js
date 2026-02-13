export const MultiColumnTable = ({block}) => {
	//console.log("MULTI COLUMN TABLE BLOCK DATA: ", block)

	const bgColour = block.full_width_with_background == "1" ? "full-width-bg" : "";

	return (
		<section id={block.section_id} className={`content-block-holder sk-block multi-columns-table block--m ${bgColour} ${block.section_classNamees}`}>
			<div className="container prel slider-arrows">

				<h2>Multi Columns Block [M]</h2>
				
				<div className="table-multi-block content-block multi-column-table col-xs-12 mt-1">
					<div className="table-responsive">

						<table className="table-multi-comparison table d-none d-desktop-table">

						</table>

					</div>
				</div>
			</div>
		</section>
	)
}