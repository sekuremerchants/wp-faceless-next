import '@/styles/blocks/edge-calculator.css'
import Image from 'next/image'
import { EdgeCalculatorEvents } from './EdgeCalculatorEvents'

export const EdgeCalculator = ({block}) => {

	//console.log('EDGE CALCULATOR BLOCK DATA: ', block)

	const formattedContent = block.content.split('\r\n').map(content => {
		const hasHTML = (str) => /<(?!(\/?(strong|span)\b))[^>]+>/i.test(str);
		if(content != '' && !hasHTML(content)){
			return `<p>${content}</p>`
		} else {
			return content.trim()
		}
	}).join('')

	return (
		<section id={block.section_id} className={`content-block-holder sk-block block-edge-calc prel ov-hidden ${block.section_classes}`}>
			<EdgeCalculatorEvents />

			{block.background_image_url && (
				<Image src={block.background_image_url} alt={block.background_image_alt} height='1080' width='1440' className='bg-image object-cover' />
			)}

			<div className='container prel z-2'>
				<div className='row gap-rows'>
					<div className='col-sm-12'>

						<div className='edge-calculator d-flex flex-even gap-cols gap-rows flex-column-1024'>
							<div className='inputs choices'>

								{block.content && (
									<div className='mb-5' dangerouslySetInnerHTML={{__html: formattedContent}}></div>
								)}

								<div className='input-wrap choice mb-4'>
									<label htmlFor='avg_trans_amt'>Enter your average transaction amount: <span className="tool-tip" tabIndex="0"><svg width="15" height="15" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0C1.79069 0 0 1.79069 0 4C0 6.20931 1.79069 8 4 8C6.20931 8 8 6.20931 8 4C8 1.79069 6.20931 0 4 0ZM3.58897 1.99621C3.69257 1.89261 3.81891 1.84039 3.96799 1.84039C4.11708 1.84039 4.24342 1.89261 4.34702 1.99621C4.45062 2.09981 4.50284 2.22615 4.50284 2.37524C4.50284 2.52432 4.45062 2.65066 4.34702 2.75426C4.24342 2.85786 4.11708 2.91009 3.96799 2.91009C3.81891 2.91009 3.69762 2.85702 3.59149 2.75174C3.48537 2.64645 3.43314 2.52095 3.43314 2.37524C3.43314 2.22952 3.48537 2.09981 3.58897 1.99621ZM4.66793 6.11329C4.62834 6.11329 4.51885 6.10318 4.3386 6.08381C4.2291 6.07202 4.1036 6.06612 3.9621 6.06612C3.89135 6.06612 3.78774 6.0737 3.65045 6.0897C3.51316 6.10571 3.41124 6.11329 3.3447 6.11329C3.23858 6.11329 3.15266 6.07707 3.08612 6.00463C3.01958 5.9322 2.98589 5.83955 2.98589 5.72584C2.98589 5.50263 3.08023 5.39061 3.26806 5.39061L3.42051 5.42598C3.43567 5.4302 3.44999 5.43188 3.46178 5.43188C3.53253 5.43188 3.56791 5.32238 3.56791 5.10255V4.15077C3.56791 3.92756 3.53422 3.81554 3.46768 3.81554C3.45589 3.81554 3.42051 3.82565 3.36155 3.84502C3.32196 3.8526 3.2908 3.85681 3.26721 3.85681C3.07939 3.85681 2.98505 3.74732 2.98505 3.52748C2.98505 3.40956 3.0179 3.31522 3.08528 3.24279C3.15182 3.17035 3.24026 3.13413 3.34976 3.13413C3.39271 3.13413 3.45589 3.14003 3.53759 3.15182C3.67488 3.17119 3.78438 3.1813 3.86692 3.1813C3.93346 3.1813 4.01937 3.17372 4.1255 3.15772C4.23163 3.14256 4.28974 3.13413 4.30154 3.13413C4.41103 3.13413 4.46578 3.21078 4.46578 3.36323V5.13287C4.46578 5.33249 4.50284 5.43272 4.57781 5.43272C4.59381 5.43272 4.6216 5.42767 4.66288 5.4184C4.70415 5.4083 4.73868 5.40409 4.76564 5.40409C4.92988 5.40409 5.01242 5.506 5.01242 5.70983C5.01242 5.98021 4.89703 6.11497 4.6654 6.11497L4.66793 6.11329Z" fill="#002EA6"></path></svg><span className="tool-tip-desc">Enter the typical dollar amount of a single customer transaction.</span></span></label>
									<input type='number' id='avg_trans_amt' name='avg_trans_amt' />
								</div>
								<div className='input-wrap choice mb-5'>
									<label htmlFor='monthly_process_vol'>Enter your average monthly credit card processing volume: <span className="tool-tip" tabIndex="0"><svg width="15" height="15" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0C1.79069 0 0 1.79069 0 4C0 6.20931 1.79069 8 4 8C6.20931 8 8 6.20931 8 4C8 1.79069 6.20931 0 4 0ZM3.58897 1.99621C3.69257 1.89261 3.81891 1.84039 3.96799 1.84039C4.11708 1.84039 4.24342 1.89261 4.34702 1.99621C4.45062 2.09981 4.50284 2.22615 4.50284 2.37524C4.50284 2.52432 4.45062 2.65066 4.34702 2.75426C4.24342 2.85786 4.11708 2.91009 3.96799 2.91009C3.81891 2.91009 3.69762 2.85702 3.59149 2.75174C3.48537 2.64645 3.43314 2.52095 3.43314 2.37524C3.43314 2.22952 3.48537 2.09981 3.58897 1.99621ZM4.66793 6.11329C4.62834 6.11329 4.51885 6.10318 4.3386 6.08381C4.2291 6.07202 4.1036 6.06612 3.9621 6.06612C3.89135 6.06612 3.78774 6.0737 3.65045 6.0897C3.51316 6.10571 3.41124 6.11329 3.3447 6.11329C3.23858 6.11329 3.15266 6.07707 3.08612 6.00463C3.01958 5.9322 2.98589 5.83955 2.98589 5.72584C2.98589 5.50263 3.08023 5.39061 3.26806 5.39061L3.42051 5.42598C3.43567 5.4302 3.44999 5.43188 3.46178 5.43188C3.53253 5.43188 3.56791 5.32238 3.56791 5.10255V4.15077C3.56791 3.92756 3.53422 3.81554 3.46768 3.81554C3.45589 3.81554 3.42051 3.82565 3.36155 3.84502C3.32196 3.8526 3.2908 3.85681 3.26721 3.85681C3.07939 3.85681 2.98505 3.74732 2.98505 3.52748C2.98505 3.40956 3.0179 3.31522 3.08528 3.24279C3.15182 3.17035 3.24026 3.13413 3.34976 3.13413C3.39271 3.13413 3.45589 3.14003 3.53759 3.15182C3.67488 3.17119 3.78438 3.1813 3.86692 3.1813C3.93346 3.1813 4.01937 3.17372 4.1255 3.15772C4.23163 3.14256 4.28974 3.13413 4.30154 3.13413C4.41103 3.13413 4.46578 3.21078 4.46578 3.36323V5.13287C4.46578 5.33249 4.50284 5.43272 4.57781 5.43272C4.59381 5.43272 4.6216 5.42767 4.66288 5.4184C4.70415 5.4083 4.73868 5.40409 4.76564 5.40409C4.92988 5.40409 5.01242 5.506 5.01242 5.70983C5.01242 5.98021 4.89703 6.11497 4.6654 6.11497L4.66793 6.11329Z" fill="#002EA6"></path></svg><span className="tool-tip-desc">Estimate the total dollar amount you process in credit card payments each month.</span></span></label>
									<input type='number' id='monthly_process_vol' name='monthly_process_vol' />
								</div>

							</div>

							<div className='data'>
								<div className='data-wrap text-center'>
									<p className='data-label mb-2 fw-600'>Customer charge on average transaction</p>
									<p className='data-output avg-trans title-highlight fw-700'>$0.00</p>
								</div>
								<div className='data-wrap text-center'>
									<p className='data-label mb-2 fw-600'>Monthly cashback estimate</p>
									<p className='data-output monthly-cashback title-highlight fw-700'>$0.00</p>
								</div>
								<div className='data-wrap text-center'>
									<p className='data-label mb-2 fw-600'>Quarterly cashback estimate</p>
									<p className='data-output quarterly-cashback title-highlight fw-700'>$0.00</p>
								</div>
								<div className='data-wrap bg-green text-center'>
									<p className='data-label mb-2 fw-600'>Annual cashback estimate</p>
									<p className='data-output annual-cashback title-highlight fw-700'>$0.00</p>
								</div>

								<div className='calculator-footer mt-4'>
									<p className='fw-600'>Talk to a Sekure Payment Expert and start earning today.</p>
								</div>
							</div>

						</div>

					</div>
				</div>
			</div>
		</section>
	)
}