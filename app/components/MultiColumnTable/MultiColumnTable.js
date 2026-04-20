'use client';

import { useEffect, useRef } from 'react'
import BlazeSlider from 'blaze-slider'

import Image from 'next/image'
import '@/styles/blocks/multi-columns-table.css'
//import '@/styles/blocks/blocks.css'

export const MultiColumnTable = ({block}) => {

	const bgColour = block.full_width_with_background == "1" ? "full-width-bg" : "";
	const formatContent = block.content.split('\r\n').map(content => {
		if(content.match(/<h[1-6]>.*?<\/h[1-6]>/gi)) {
			return `${content}`
		} else {
			return `<p>${content}</p>`
		}
	}).join('')
	const formatFooterContent = block.footer.split('\r\n').map(content => {
		if(content.match(/<h[1-6]>.*?<\/h[1-6]>/gi)) {
			return `${content}`
		} else {
			return `<p>${content}</p>`
		}
	}).join('')

	let count = 0
	let rowCount = 0
	let headCells = []
	let contentCells = []
	const headRows = block.rows_0_cell - 1
	const firstContentRow = block.rows_1_table_row_0_column - 1

	while(count <= headRows){

		let rowHeading = `rows_0_cell_${count}_heading`
		let rowImage = `rows_0_cell_${count}_image`

		let row = {
			rowHeading: block[rowHeading],
			rowImage: block[rowImage],
		}

		headCells.push(row)
			
		count++
	}

	count = 0

	while(rowCount <= firstContentRow){
		let rowCheck =  `rows_1_table_row_${rowCount}_column`
		let rowCells = [];

		if(block[rowCheck] > 0) {
			let cellCount = block[rowCheck] - 1

			count = 0

			while(count <= cellCount){
				
				//rows_1_table_row_0_column_0_use_stars
				let rowStars = `rows_1_table_row_${rowCount}_column_${count}_use_stars`
				let rowContent = `rows_1_table_row_${rowCount}_column_${count}_content`
				let rowCheck = `rows_1_table_row_${rowCount}_column_${count}_checkmark`
				let rowImage = `rows_1_table_row_${rowCount}_column_${count}_image`

				let row = {
					rowNumber: rowCount,
					rowStars: block[rowStars],
					rowContent: block[rowContent],
					rowCheck: block[rowCheck],
					rowImage: block[rowImage],
				}

				rowCells.push(row)

				count++
			}
		} else {
			return
		}

		contentCells.push(rowCells)

		rowCount++
	}

  const sliderRef = useRef(null)

  useEffect(() => {
    // Initialize Blaze Slider
    const slider = new BlazeSlider(sliderRef.current, {
      all: {
        loop: true,
        slideGap: '0px',
        enableAutoplay: false,
        autoplayInterval: 3000,
        draggable: false,
        stopAutoplayOnInteraction: true,
        slidesToShow: 1,
      },
      '(max-width: 1024px)': {
        slidesToShow: 5,
      },
      '(max-width: 992px)': {
        slidesToShow: 4,
      },
      '(max-width: 940px)': {
        slidesToShow: 3,
      },
      '(max-width: 820px)': {
        slidesToShow: 2,
      },
      '(max-width: 767px)': {
        slidesToShow: 1,
      },
      '(max-width: 580px)': {
        draggable: true,
        slidesToShow: 1,
      },
    })

    // Cleanup
    return () => {
      slider.destroy();
    }
  }, [])

	const styleCode = `
		.mb-table {
			align-items:unset !important
		}
		.mb-table .fixed-column-inner {
			height:calc(100% - 30px)
		}
		.mb-table .fixed-column-inner .mt-box:not(:first-of-type)::after,
		.mb-table .mt-box-inner .mt-box:not(:first-of-type)::after {
			content: "";
			background-color: #008fc4;
			width: 80%;
			height: 1px;
			display: inline-block;
			position: absolute;
			top: 0;
		}
		.mb-table .fixed-column-inner .mt-box:first-of-type::after,
		.mb-table .mt-box-inner .mt-box:first-of-type::after {
			content:none;
		}
  `;

	return (
		<section id={block.section_id} className={`content-block-holder sk-block multi-columns-table block--m op-0 ${bgColour} ${block.section_classNames}`}>
			<style>{styleCode}</style>
			<div className='container prel slider-arrows'>
				<div className='row'>

					{(block.heading || block.content) && (
						<div className='col-sm-12 col-lg-8 heading-balance'>
							{block.heading && (
								<h2>{block.heading}</h2>
							)}
							{block.content && (
								<div dangerouslySetInnerHTML={{__html: formatContent}}></div>
							)}
						</div>
					)}

					<div className='table-multi-block content-block multi-column-table col-xs-12 mt-1'>
						<div className='table-responsive'>

							<table className='table-multi-comparison table d-none d-desktop-table'>
								{block.rows[0] == 'heading_row' && headRows > 0 && (
									<thead>
										<tr className='multi-columns-heading-row'>
											{headCells.map((cell, index) => (
												<th key={index}>
													{cell.rowHeading && (
														cell.rowHeading
													)}
												</th>
											))}
										</tr>
									</thead>
								)}

								<tbody>
									{contentCells.map((row, index) => (
										<tr key={index}>
											{row.map((cell, index) => (
												<td key={index}>
													{cell.rowContent && (
														cell.rowContent
													)}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>

						</div>{/* table-responsive */}

						<div className='d-none d-tablet-block d-mobile-block'>
							{block.rows_1_table_inner_heading && (
								<p className='text-highlight'>{block.rows_1_table_inner_heading}</p>
							)}

							<div className='mb-table-container'>
								<div className='mb-table mb-multi-compare'>
									<div className='fixed-column'>
										<div className='fixed-column-inner' style={{display: 'grid', gridTemplateRows: `repeat(${block.rows_0_cell}, 1fr)`}}>
											{headCells.map((cell, index) => (
												<div key={index} className='mt-box'>
													{cell.rowHeading && (
														cell.rowHeading
													)}
												</div>
											))}
										</div>
									</div>

									<div className='scrolling-column'>
										<div ref={sliderRef} className='scrolling-column-inner blaze-container blaze-slider'>
											<div className='blaze-track-container'>
												<div className='blaze-track'>

													{contentCells.map((row, index) => (
														<div key={index} className='mt-box-inner' style={{display: 'grid', gridTemplateRows: `repeat(${block.rows_0_cell}, 1fr)`}}>
															{row.map((cell, index) => (
																<div key={index} className='mt-box mt-ctn'>
																	{cell.rowContent && (
																		<p>{cell.rowContent}</p>
																	)}
																</div>
															))}
														</div>
													))}

												</div>
											</div>

											<button className='slider-control blaze-prev d-none d-tablet-block d-mobile-block' data-btn-for=''>prev</button>
											<button className='slider-control blaze-next d-none d-tablet-block d-mobile-block' data-btn-for=''>next</button>

											<div className='pagination-wrapper'>
												<div className='blaze-pagination'></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{block.footer && (
						<div className='col-sm-12' dangerouslySetInnerHTML={{__html: formatFooterContent}}></div>
					)}
				</div>
			</div>
		</section>
	)
}