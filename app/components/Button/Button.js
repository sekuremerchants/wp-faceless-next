import Link from 'next/link'
import { PhoneIconBlue } from '@/components/Header/Icons'

const popupDataQuery = `
	query getPopupData {
		popups(first:100) {
			nodes {
				popupId
				title
				content
				cptPopups {
					formId
				}
			}
		}
	}
`;

export const Button = async ({type, text, link, popupID, popupHeading, popupDesc, phone, sectionBgColour}) => {

	let popupData

	if(popupID){
		const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: popupDataQuery,
			}),
		})
		const { data } = await res.json()

		data.popups.nodes.map((popup, index) => {
			if(popupID === popup.popupId){
				popupData = popup
			}
		})
	}

	const bgColour = sectionBgColour ? sectionBgColour : 'white';
	let ctaText = text.includes('[phone-icon-blue]') ? text.replace('[phone-icon-blue]', '<svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><g clip-path="url(#clip0_63_2933)"><path d="M23.9926 0C10.7481 0 3.05176e-05 10.7481 3.05176e-05 23.9925C3.05176e-05 37.237 10.7481 47.985 23.9926 47.985C37.237 47.985 47.9851 37.237 47.9851 23.9925C47.9851 10.7481 37.252 0 23.9926 0ZM36.9381 32.7973C36.8783 32.9019 36.8035 33.0215 36.7288 33.1411C35.9963 34.2473 34.4416 35.8916 34.4416 35.8916C32.005 37.7602 26.7431 35.1741 26.7431 35.1741C16.6229 29.9421 11.4656 20.4198 11.4656 20.4198C9.5223 16.5332 12.6914 12.4522 12.6914 12.4522C14.5002 10.2846 17.2208 12.2579 17.2208 12.2579L20.0312 14.4852C21.84 15.9801 19.9116 17.9383 19.9116 17.9383C17.3703 20.36 19.0446 22.0193 19.0446 22.0193C21.0626 24.6353 26.4591 29.1199 26.4591 29.1199C28.4771 30.0766 29.673 27.5652 29.673 27.5652C30.6596 25.9059 32.7674 27.3261 32.7674 27.3261L35.0246 28.9854C36.8035 30.4204 37.5211 31.721 36.9231 32.7973H36.9381Z" fill="#002ea6"></path></g><defs><clipPath id="clip0_63_2933"><rect width="48" height="48" fill="white"></rect></clipPath></defs></svg>') : text
	
	if(text.includes('[calculator-icon-blue]')){
		ctaText = text.replace('[calculator-icon-blue]', '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none"><path d="M14.3497 0H1.69767C0.762218 0 0 0.763265 0 1.7V18.3C0 19.2388 0.762218 20 1.69767 20H14.3497C15.2872 20 16.0473 19.2367 16.0473 18.3V1.7C16.0473 0.761225 15.2851 0 14.3497 0ZM4.91977 17.4204C4.91977 17.7143 4.6854 17.949 4.33486 17.949H2.40078C2.05024 17.949 1.81587 17.7143 1.81587 17.4204V15.7204C1.81587 15.4265 2.05024 15.1347 2.40078 15.1347H4.33282C4.68336 15.1347 4.91773 15.4286 4.91773 15.7204V17.4204H4.91977ZM4.91977 13.6673C4.91977 14.0184 4.6854 14.2531 4.33486 14.2531H2.40078C2.05024 14.2531 1.81587 14.0184 1.81587 13.6673V12.0245C1.81587 11.7306 2.05024 11.4388 2.40078 11.4388H4.33282C4.68336 11.4388 4.91773 11.7327 4.91773 12.0245V13.6673H4.91977ZM4.91977 9.97143C4.91977 10.3224 4.6854 10.5571 4.33486 10.5571H2.40078C2.05024 10.5571 1.81587 10.3224 1.81587 9.97143V8.32857C1.81587 8.03469 2.05024 7.74286 2.40078 7.74286H4.33282C4.68336 7.74286 4.91773 8.03674 4.91773 8.32857V9.97143H4.91977ZM9.60517 17.4204C9.60517 17.7143 9.3117 17.949 9.02026 17.949H7.02912C6.73565 17.949 6.44421 17.7143 6.44421 17.4204V15.7204C6.44421 15.4265 6.73768 15.1347 7.02912 15.1347H9.02026C9.31374 15.1347 9.60517 15.4286 9.60517 15.7204V17.4204V17.4204ZM9.60517 13.6673C9.60517 14.0184 9.3117 14.2531 9.02026 14.2531H7.02912C6.73565 14.2531 6.44421 14.0184 6.44421 13.6673V12.0245C6.44421 11.7306 6.73768 11.4388 7.02912 11.4388H9.02026C9.31374 11.4388 9.60517 11.7327 9.60517 12.0245V13.6673V13.6673ZM9.60517 9.97143C9.60517 10.3224 9.3117 10.5571 9.02026 10.5571H7.02912C6.73565 10.5571 6.44421 10.3224 6.44421 9.97143V8.32857C6.44421 8.03469 6.73768 7.74286 7.02912 7.74286H9.02026C9.31374 7.74286 9.60517 8.03674 9.60517 8.32857V9.97143V9.97143ZM14.2315 17.4204C14.2315 17.7143 13.9971 17.949 13.7036 17.949H11.7125C11.419 17.949 11.1276 17.7143 11.1276 17.4204V12.0837C11.1276 11.7327 11.421 11.498 11.7125 11.498H13.7036C13.9971 11.498 14.2315 11.7327 14.2315 12.0837V17.4204ZM14.2315 9.97143C14.2315 10.3224 13.9971 10.5571 13.7036 10.5571H11.7125C11.419 10.5571 11.1276 10.3224 11.1276 9.97143V8.32857C11.1276 8.03469 11.421 7.74286 11.7125 7.74286H13.7036C13.9971 7.74286 14.2315 8.03674 14.2315 8.32857V9.97143ZM14.4067 5.16122C14.4067 5.51225 14.1133 5.74694 13.8218 5.74694H2.22551C1.93204 5.74694 1.69767 5.51225 1.69767 5.16122V2.58163C1.69767 2.28776 1.93204 2.05306 2.22551 2.05306H13.8218C14.1153 2.05306 14.4067 2.28776 14.4067 2.58163V5.16327V5.16122Z" fill="#002EA6"></path></svg>')
	}

	let ctaLink = link
	if (ctaLink !== null && typeof ctaLink === 'object'){
		ctaLink = link.url
	}

	switch(type){
		case 'same': {
			return (
				<Link href={ctaLink} className={`btn-default c-blue-1 btn-green-1 section-color-${bgColour} btn-offset-9`}>
					<span className='btn-bg-el'></span>
					<span className='btn-txt' dangerouslySetInnerHTML={{__html: ctaText}}></span>
				</Link>
			)
		}
		case 'yes': {
			return (
				<Link href={ctaLink} target='_blank' className={`btn-default c-blue-1 btn-green-1 section-color-${bgColour} btn-offset-9`}>
					<span className='btn-bg-el'></span>
					<span className='btn-txt' dangerouslySetInnerHTML={{__html: ctaText}}></span>
				</Link>
			)
		}
		case 'modal': {
			return (
				<Link href='#' className={`btn-default c-blue-1 btn-green-1 section-color-${bgColour} btn-offset-9`} data-popup-id={popupID} data-popup-heading={popupHeading} data-popup-desc={popupDesc} data-popup-form-id={popupData.cptPopups.formId} data-popup-content={popupData.content}>
					<span className='btn-bg-el'></span>
					<span className='btn-txt' dangerouslySetInnerHTML={{__html: ctaText}}></span>
				</Link>
			)
		}
		case 'video': {
			return (
				<Link href='#' className={`btn-default c-blue-1 btn-green-1 section-color-${bgColour} btn-offset-9`} data-video-embed-id=''>
					<span className='btn-bg-el'></span>
					<span className='btn-txt' dangerouslySetInnerHTML={{__html: ctaText}}></span>
				</Link>
			)
		}
		case 'call': {
			return (
				<Link href={`tel:${phone}`} className={`btn-default c-blue-1 btn-green-1 section-color-${bgColour} btn-offset-9`}>
					<span className='btn-bg-el'></span>
					<span className='btn-txt' dangerouslySetInnerHTML={{__html: ctaText}}></span>
				</Link>
			)
		}
	}
}