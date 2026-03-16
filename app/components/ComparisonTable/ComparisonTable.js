'use client';

import { useEffect, useRef } from 'react'
import BlazeSlider from 'blaze-slider'

import '@/styles/blocks/comparison-table.css'
//import '@/styles/blocks/blocks.css'
import Image from 'next/image'
import { assetSourceLocal } from "../../paths"

const basePathLocal = assetSourceLocal();

export const ComparisonTable = ({block, logoOne, logoTwo}) => {

	console.log("COMPARISON TABLE BLOCK DATA: ", block)

	const columnClass = block.left_side_content && block.comparison_table_rows > 0 ? 'col-sm-12 col-lg-6' : 'col-sm-12'
	const bgColour = block.full_width_with_background == 'Yes' ? 'full-width-bg' : ''
	const maxTableRows = block.comparison_table_rows - 1;
	let count = 0;

	const logoOneData = block.comparison_table_logo_one ? logoOne : '';
	const logoTwoData = block.comparison_table_logo_two ? logoTwo : '';
	
	//const [list, setList] = useState([]);
	let tableRows = [];

	while(count <= maxTableRows){

		let columnOne = `comparison_table_rows_${count}_column_one`
		let columnTwo = `comparison_table_rows_${count}_column_two`
		let columnThree = `comparison_table_rows_${count}_columns_three`

		let row = {
			columnOne: block[columnOne],
			columnTwo: block[columnTwo],
			columnThree: block[columnThree],
		}

		tableRows.push(row);
			
		count++;
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

	return (
		<section className={`content-block-holder sk-block comparison-table block--g table-comparison-simple ${bgColour}`}>
			<div className='content-block comparison-table compare'>
				<div className='container prel slider-arrows'>
					<div className='row justify-content-between'>

						{block.left_side_content && (
							<div className={columnClass}>
								{block.left_side_content}
							</div>
						)}

						{block.comparison_table_rows > 0 && (
							<div className={columnClass}>
								<div className='table-responsives'>
									<table className='table-comparison table d-none d-desktop-table'>

										<thead>
											<tr>
												<th className='table-logo'></th>
												<th className='table-logo'>
													{block.comparison_table_logo_one && (
														<Image src={logoOneData.sourceUrl} alt={logoOneData.altText} height="200" width="200" className='logo_one'/>
													)}
												</th>
												<th className='table-logo'>
													{block.comparison_table_logo_two && (
														<Image src={logoTwoData.sourceUrl} alt={logoTwoData.altText} height="200" width="200" className='logo_two'/>
													)}
												</th>
											</tr>
										</thead>

										<tbody>
											
											{tableRows.map((row, index) => (
												<tr key={index}>
													<td className='first-row'>{row.columnOne}</td>
													<td>
														{row.columnTwo == '[yes]' && (
															<Image src={`${basePathLocal}/media/icons/sk-check.svg`} alt='checkmark icon' height='25' width='25'/>
														) || 
														row.columnTwo == '[no]' && (
															<Image src={`${basePathLocal}/media/icons/sk-cross.svg`} alt='x icon' height='25' width='25'/>
														) ||
														row.columnTwo && row.columnTwo != '[yes]' && row.columnTwo != '[no]' && (
															row.columnTwo
														)}
													</td>
													<td className='accent-column'>
														{row.columnThree == '[yes]' && (
															<Image src={`${basePathLocal}/media/icons/sk-check.svg`} alt='checkmark icon' height='25' width='25'/>
														) || 
														row.columnThree == '[no]' && (
															<Image src={`${basePathLocal}/media/icons/sk-cross.svg`} alt='x icon' height='25' width='25'/>
														) ||
														row.columnThree && row.columnThree != '[yes]' && row.columnThree != '[no]' && (
															row.columnThree
														)}
													</td>
												</tr>
											))}
											
										</tbody>
									</table>
								</div>

								<div className='d-none d-tablet-block d-mobile-block'>
									<div className='mb-table-container'>
										<div className='mb-table mb-table-compare'>
											<div className='fixed-column'>
												<div className='fixed-column-inner' style={{display: 'grid', gridTemplateRows: `repeat(3, 1fr)`}}>
													
													<div className='mt-header'>Company</div>
													
													<div className='mt-box mt-logo mt-primary'>
														{block.comparison_table_logo_one && (
															<Image src={logoOneData.sourceUrl} alt={logoOneData.altText} height="200" width="200" className='logo-one'/>
														)}
													</div>
													<div className='mt-box mt-logo mt-second'>
														{block.comparison_table_logo_two && (
															<Image src={logoTwoData.sourceUrl} alt={logoTwoData.altText} height="200" width="200" className='logo-two'/>
														)}
													</div>
												</div>
											</div>
											<div className='scrolling-column'>
												<div ref={sliderRef} className='scrolling-column-inner blaze-container blaze-slider'>
													<div className='blaze-track-container'>
														<div className='blaze-track'>
															
															{tableRows.map((row, index) => (
																<div key={index} className='mt-box-inner' style={{display: 'grid', gridTemplateRows: `repeat(3, 1fr)`}}>
																	<div className='mt-header'><p>{row.columnOne}</p></div>

																	<div className='mt-box mt-ctn mt-primary'>
																		<p>
																			{row.columnTwo == '[yes]' && (
																				<Image src={`${basePathLocal}/media/icons/sk-check.svg`} alt='checkmark icon' height='25' width='25'/>
																			) || 
																			row.columnTwo == '[no]' && (
																				<Image src={`${basePathLocal}/media/icons/sk-cross.svg`} alt='x icon' height='25' width='25'/>
																			) ||
																			row.columnTwo && row.columnTwo != '[yes]' && row.columnTwo != '[no]' && (
																				row.columnTwo
																			)}
																		</p>
																	</div>

																	<div className='mt-box mt-ctn mt-second'>
																		<p>
																			{row.columnThree == '[yes]' && (
																				<Image src={`${basePathLocal}/media/icons/sk-check.svg`} alt='checkmark icon' height='25' width='25'/>
																			) || 
																			row.columnThree == '[no]' && (
																				<Image src={`${basePathLocal}/media/icons/sk-cross.svg`} alt='x icon' height='25' width='25'/>
																			) ||
																			row.columnThree && row.columnThree != '[yes]' && row.columnThree != '[no]' && (
																				row.columnThree
																			)}
																		</p>
																	</div>
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
						)}

					</div>
				</div>
			</div>
		</section>
	)
}