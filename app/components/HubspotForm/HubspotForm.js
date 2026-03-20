'use client'
import Script from 'next/script'

export const HubspotForm = ({formID, formContainer}) => {

	const loadForm = () => {
		if (window.hbspt) {
			window.hbspt.forms.create({
				region: 'na3',
				portalId: '341780804',
				formId: `${formID}`,
				target: `#form-wrap-${formContainer}`,
				formInstanceId: `form-wrap-${formContainer}`, 
				onFormReady: function($form) {
					var submitBtn = $form.querySelector('input[type="submit"]')
					var newBtn = document.createElement('button')
					newBtn.type = 'submit'
					newBtn.value = submitBtn.defaultValue
					newBtn.innerHTML = '<span class="btn-bg-el"></span><span class="btn-txt">' + submitBtn.defaultValue + '</span>'
					newBtn.classList.add('hs-button', 'primary', 'large', 'btn-default', 'size-18-txt', 'ltr-spc-pos-0_25', 'c-blue-1', 'btn-green-1', 'btn-offset-10', 'fw-700', 'section-color-white')
					submitBtn.replaceWith(newBtn)
				}
			})
		}
	}

  return (
    <>
			<Script 
				src='https://js-na3.hsforms.net/forms/embed/v2.js'
				onLoad={loadForm} // Trigger form creation after script loads
			/>
      <div id={`form-wrap-${formContainer}`} className='hbspt-form'></div>
    </>
  )
}