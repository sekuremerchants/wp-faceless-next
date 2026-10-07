'use client';

import { useEffect, useRef } from 'react'
import BlazeSlider from 'blaze-slider'

import Image from 'next/image'
import { FormatContent } from '@/components/FormatContent'
import '@/styles/blocks/multi-columns-table.css'
//import '@/styles/blocks/blocks.css'

export const MultiColumnTable = ({block}) => {

	//console.log('MULTI COLUMN TABLE DATA: ', block)

	const bgColour = block.full_width_with_background == "1" ? "full-width-bg" : "";

	const rows = block.rows
	let newHeadCells = []
	let newContentCells = []

	if(rows.length > 0){
		rows.forEach((current, index) => {
			if(current == 'heading_row'){
				let cellCount = block[`rows_${index}_cell`] - 1
				let cellIndex = 0

				while(cellIndex <= cellCount){
					let row = {
						rowHeading: block[`rows_${index}_cell_${cellIndex}_heading`],
						rowImage: block[`rows_${index}_cell_${cellIndex}_image`],
					}

					newHeadCells.push(row)

					cellIndex++
				}

			}
			if(current == 'table_content'){
				let rowCount = block[`rows_${index}_table_row`].length - 1
				let rowIndex = 0

				while(rowIndex <= rowCount){
					let rowCellIndex = 0
					let cellCount = block[`rows_${index}_table_row_${rowIndex}_column`] - 1
					let rowContent = []

					while(rowCellIndex <= cellCount){
						let row = {
							rowStars: block[`rows_${index}_table_row_${rowIndex}_column_${rowCellIndex}_use_stars`],
							rowContent: block[`rows_${index}_table_row_${rowIndex}_column_${rowCellIndex}_content`],
							rowCheck: block[`rows_${index}_table_row_${rowIndex}_column_${rowCellIndex}_checkmark`],
							rowImage: block[`rows_${index}_table_row_${rowIndex}_column_${rowCellIndex}_image`],
						}

						rowContent.push(row)

						rowCellIndex++
					}

					newContentCells.push(rowContent)

					rowIndex++
				}
			}
		})
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
							{block.heading && block.heading != '' && (
								<h2>{block.heading}</h2>
							)}
							{block.content && block.content != '' && (
								<div dangerouslySetInnerHTML={{__html: FormatContent(block.content)}}></div>
							)}
						</div>
					)}

					<div className='table-multi-block content-block multi-column-table col-xs-12 mt-1'>
						<div className='table-responsive'>

							<table className='table-multi-comparison table d-none d-desktop-table'>
								{rows.length > 0 && (
									<thead>
										<tr className='multi-columns-heading-row'>
											{newHeadCells.map((cell, index) => (
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

									{newContentCells.map((row, index) => (
										<tr key={index}>
											{row.map((cell, index) => (
												<td key={index}>
													{cell.rowContent && cell.rowContent != '' && (
														cell.rowContent
													)}

													{cell.rowCheck && cell.rowCheck != '' && (
														cell.rowCheck == 'Yes' && (
															<Image src='https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/07/Check.svg' alt='yes' width='20' height='20' />
														) ||
														cell.rowCheck == 'No' && (
															<Image src='https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/08/Cross.svg' alt='yes' width='20' height='20' />
														)
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
											{newHeadCells.map((cell, index) => (
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

													{newContentCells.map((row, index) => (
														<div key={index} className='mt-box-inner' style={{display: 'grid', gridTemplateRows: `repeat(${block.rows_0_cell}, 1fr)`}}>
															{row.map((cell, index) => (
																<div key={index} className='mt-box mt-ctn'>
																	{cell.rowContent && cell.rowContent != '' && (
																		<p>{cell.rowContent}</p>
																	)}

																	{cell.rowCheck && cell.rowCheck != '' && (
																		cell.rowCheck == 'Yes' && (
																			<Image src='https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/07/Check.svg' alt='yes' width='20' height='20' />
																		) ||
																		cell.rowCheck == 'No' && (
																			<Image src='https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2023/08/Cross.svg' alt='yes' width='20' height='20' />
																		)
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

					{block.footer && block.footer != '' && (
						<div className='col-sm-12' dangerouslySetInnerHTML={{__html: FormatContent(block.footer)}}></div>
					)}
				</div>
			</div>
		</section>
	)
}