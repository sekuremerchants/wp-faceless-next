//'use client'
//import { useEffect, useState } from 'react'
import '@/styles/blocks/comparison-table.css'
import '@/styles/blocks/blocks.css'
import Image from 'next/image'
import { assetSourceLocal } from "../../paths"

const basePathLocal = assetSourceLocal();

const mediaItemQuery = `
query NewQuery($id: Int!) {
  mediaItem(id: $id, idType: DATABASE_ID) {
    id
    altText
    sourceUrl
  }
}
`;

const mediaItemQueryNoVariable = `
query NewQuery {
  mediaItem(id: "43285", idType: DATABASE_ID) {
    id
    altText
    sourceUrl
  }
}
`;

async function getMediaItemData(id){
	const queryVariables = {
		id: id,
	};
  const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: mediaItemQuery,
			variables: queryVariables,
    }),
  });
  const data = await res.json();
	return data;
}

export async function ComparisonTable({block}) {

	const queryVariables = {
		id: block.comparison_table_logo_one,
	};
  const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: mediaItemQuery,
			variables: queryVariables,
    }),
  });
  const { data } = await res.json();

	const { logoOne } = await getMediaItemData(block.comparison_table_logo_one)
	console.log("LOGO ONE: ", block.comparison_table_logo_one)
	console.log("LOGO ONE DATA: ", data)
	console.log("LOGO ONE DATA THRU FUNCTION: ", logoOne)

	const columnClass = block.left_side_content && block.comparison_table_rows > 0 ? 'col-sm-12 col-lg-6' : 'col-sm-12'
	const bgColour = block.full_width_with_background == 'Yes' ? 'full-width-bg' : ''
	const maxTableRows = block.comparison_table_rows - 1;
	let count = 0;
	
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
														"image goes here"
													)}
												</th>
												<th className='table-logo'></th>
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
							</div>
						)}

					</div>
				</div>
			</div>
		</section>
	)
}