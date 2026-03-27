import Link from 'next/link'

export const Button = ({type, text, link, popupID, popupHeading, popupDesc, sectionBgColour}) => {

	const bgColour = sectionBgColour ? sectionBgColour : 'white';

	switch(type){
		case 'same': {
			return (
				<Link href={link} className={`btn-default c-blue-1 btn-green-1 section-color-${bgColour} btn-offset-9`}>
					<span className='btn-bg-el'></span>
					<span className='btn-txt'>
						{text}
					</span>
				</Link>
			)
		}
		case 'yes': {
			return (
				<Link href={link} target='_blank' className={`btn-default c-blue-1 btn-green-1 section-color-${bgColour} btn-offset-9`}>
					<span className='btn-bg-el'></span>
					<span className='btn-txt'>
						{text}
					</span>
				</Link>
			)
		}
		case 'modal': {
			return (
				<Link href='#' className={`btn-default c-blue-1 btn-green-1 section-color-${bgColour} btn-offset-9`} data-popup-id={popupID} data-popup-heading={popupHeading} data-popup-desc={popupDesc}>
					<span className='btn-bg-el'></span>
					<span className='btn-txt'>
						{text}
					</span>
				</Link>
			)
		}
		case 'video': {
			return (
				<Link href='#' className={`btn-default c-blue-1 btn-green-1 section-color-${bgColour} btn-offset-9`} data-video-embed-id=''>
					<span className='btn-bg-el'></span>
					<span className='btn-txt'>
						{text}
					</span>
				</Link>
			)
		}
		case 'call': {
			return (
				<Link href={`tel:${link}`} className={`btn-default c-blue-1 btn-green-1 section-color-${bgColour} btn-offset-9`}>
					<span className='btn-bg-el'></span>
					<span className='btn-txt'>
						{text}
					</span>
				</Link>
			)
		}
	}
}