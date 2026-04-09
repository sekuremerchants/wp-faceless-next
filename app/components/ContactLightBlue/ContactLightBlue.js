import { HubspotForm } from '@/components/HubspotForm'
import { FormEvents } from './FormEvents'
import '@/styles/blocks/contact-section-light-blue.css'

export const ContactLightBlue = ({block}) => {

	//console.log('LIGHT BLUE CONTACT BLOCK DATA: ', block)

	return (
		<section id={block.section_id} className={`sk-block block-cta-lb form-contact-section-home bg-blue-6 prel ov-hidden op-0 ${block.section_classes}`}>
			<FormEvents/>
			<div aria-hidden='true' className='inner-circles-wrap circle-full translate-100 pabs pointer-events-none border-radius-50'>
				<div className='inner-circle-base pabs z-1 border-radius-50 bg-green-6'></div>
				<div className='inner-circle-outer pabs z-2 bg-blue-6 border-radius-50'></div>
				<div className='inner-circle-core pabs z-3 border-radius-50 bg-green-6'></div>
			</div>

			<div className='container pre'>
				<div className='row gap-rows'>
					<div className='col-sm-12 col-lg-4 offset-lg-2'>
						<div className='txt-content text-white'>

							{block.heading && (
								<h2 className='heading-anim' dangerouslySetInnerHTML={{__html: block.heading}}></h2>
							)}

							{block.subheading && (
								<h2 className='heading-anim' dangerouslySetInnerHTML={{__html: block.subheading}}></h2>
							)}

							{block.content && (
								<div dangerouslySetInnerHTML={{__html: block.content}}></div>
							)}

						</div>
					</div>

					<div className='col-sm-12 col-lg-6'>
						<div className='form-content home-page-form'>
							<HubspotForm formID={block.form_id} formContainer={`contactlb`} uid={`0438672049874`} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}