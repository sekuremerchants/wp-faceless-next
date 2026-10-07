import Image from 'next/image'
import Link from 'next/link'
import { HubspotForm } from '@/components/HubspotForm'
import { assetSourceLocal } from "../../paths"

const basePathLocal = assetSourceLocal();

export const TalkToUs = ({language}) => {

	//aconsole.log('TALK TO US BLOCK LANGUAGE: ', language)

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
			if(content.includes('[sekure_icon ')){
				const shortcodeData = content.split(' ')
				const url = shortcodeData[1].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
				const classes = shortcodeData.at(-1).replace("classes='", '').replace("']",'')
				return `<img src='${url}' alt='icon' height='50' width='50' class='${classes}'>`
			} else if(content != '' && !hasHTML(content)){
				return `<p>${content}</p>`
			} else {
				return content.trim()
			}
		}).join('')
		return formatted
	}

	const leftSmallHeading = language == 'en' ? "It's easy" : "Es facil"
	const leftHeading = ((language == 'en') ? "Talk to us now" : "Hablemos")
	const callButton = ((language == 'en') ? "Talk to us now" : "Hablemos")
	const scheduleCallbackButton = ((language == 'en') ? "Schedule a callback" : "Programa una devolución de llamada")
	const scheduleCallbackButtonID = ((language == 'en') ? "37274" : "37302")
	const scheduleCallbackFormID = ((language == 'en') ? "3b595ef7-8b30-4f43-9d82-2e9b1a297a74" : "d017160d-e3e6-47d9-81af-f7ce017d4409")
	const leftContent = ((language == 'en') ? "We can answer all your questions and find a custom solution that fits you perfectly." : "Podemos responder a todas tus preguntas y encontrar una solución personalizada que se adapte perfectamente a tus necesidades.")

	const rightSmallHeading = ((language == 'en') ? "The Sekure Merchant's guide" : "LA GUÍA DEL COMERCIANTE SEKURE")
	const rightHeading = ((language == 'en') ? "Not ready to talk?" : "¿No estás listo para hablar?")
	const rightContent = ((language == 'en') ? "Download our guide to find what you really need and stop paying for what you don't. Compare options for:" : "Descarga nuestra guía para encontrar lo que realmente necesitas y deja de pagar por lo que no necesitas. Compara opciones para:")

	const bulletOne = ((language == 'en') ? 'POS' : 'TPV')
	const bulletTwo = ((language == 'en') ? 'Handheld terminal' : 'Terminal portátil')
	const bulletThree = ((language == 'en') ? 'Tablet' : 'Tableta')
	const bulletFour = ((language == 'en') ? 'eCommerce' : 'Comercio electrónico')
	const bulletFive = ((language == 'en') ? 'Virtual terminal' : 'Terminal virtual')
	const bulletSix = ((language == 'en') ? 'and more!' : '¡Y más!')

	const formID = ((language == 'en') ? 'd74be8e6-676d-43a4-a3cf-5f796747705f' : '38ad7a0c-4b18-4299-86c0-6c83fb91031f')

	return (
		<section id='contact' className={`inner-pages-contact-section contact-block sk-block prel sk-content-block block--s talk-us-block op-0`}>

			<Image src={`${basePathLocal}/media/images/inner/contact-section-bgr.webp`} alt="Sekure call centre employee at their workstation talking on the phone with a customer and helping them with their account" width='1440' height='980' className="bg-image object-cover" />
			
			<div className="background-flower-path-patterns">
				<svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg">
						<path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
						<path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
						<path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
						<path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
				</svg>
				<svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg">
						<path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
						<path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
						<path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
						<path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
				</svg>
				<svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg">
						<path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
						<path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
						<path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
						<path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
				</svg>
				<svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg">
						<path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
						<path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
						<path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
						<path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
				</svg>
			</div>

			<div className='container prel z-3'>
				<div className='row'>

					<div className="single-block txt-content-block col-sm-12 col-md-12 col-lg-5">
						<div className='content-wrap'>
							<p className="txt-size-12 upper letter-spacing c-white">{language == 'es_US' && (<span>SP- </span>)}{leftSmallHeading}</p>
							<h2 className="c-white heading-anim">{leftHeading}</h2>

							<div className='d-flex flex-column gap-20 mb-4'>
								<Link href='tel:18667107382' className="contact-section-btn c-white fw-700 text-decoration-none text-decoration-underline hover-text-col-green">
									<Image src={`${basePathLocal}/media/images/pictograms/talk-to-us-icon.webp`} alt='telephone icon' width='60' height='60' className='contact-btn-icon' />
									<span className='btn-txt c-white'>{callButton}</span>
								</Link>

								<Link href='#' className="contact-section-btn c-white fw-700 text-decoration-none text-decoration-underline hover-text-col-green" data-popup-id={scheduleCallbackButtonID} data-popup-form-id={scheduleCallbackFormID} data-popup-content={`<h3>${scheduleCallbackButton}</h3>`}>
									<Image src={`${basePathLocal}/media/images/pictograms/callback-icon.webp`} alt='callback icon' width='60' height='60' className='contact-btn-icon' />
									<span className='btn-txt c-white'>{scheduleCallbackButton}</span>
								</Link>
							</div>
							<p className='c-white'>{leftContent}</p>
						</div>
					</div>

					<div className="single-block contact-block prel col-sm-12 col-md-12 col-lg-5 offset-lg-2">
						<div className="content-wrap">
							<p className="txt-size-12 upper letter-spacing c-white">{rightSmallHeading}</p>
							<h2 className="c-white heading-anim">{rightHeading}</h2>
							<div className="text-white fw-600">
								<p>{rightContent}</p>

								<ul>
									<li>{bulletOne}</li>
									<li>{bulletTwo}</li>
									<li>{bulletThree}</li>
									<li>{bulletFour}</li>
									<li>{bulletFive}</li>
									<li>{bulletSix}</li>
								</ul>
							</div>

							<div className='newletter-form mt-4'><HubspotForm formID={formID} formContainer={`talktousnewsletter`} uid='199807764'/></div>
						</div>
					</div>

				</div>
			</div>

		</section>
	)
}