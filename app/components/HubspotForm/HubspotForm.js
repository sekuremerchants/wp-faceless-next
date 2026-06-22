'use client'
import { useEffect } from 'react';
import Script from 'next/script'

export const HubspotForm = ({formID, submitText, formContainer, uid, formContent, bgColour}) => {

	const bgColourClass = bgColour == 'blue' ? 'section-color-blue' : 'section-color-white'

	useEffect(() => {
    if (window.hbspt) {
			window.hbspt.forms.create({
				region: 'na3',
				portalId: '4438792',
				formId: `${formID}`,
				target: `#form-wrap-${formContainer}`,
				formInstanceId: `${uid}`, 
				onFormReady: function($form) {
					formReady($form)
				}
			})
		} else {
			var formCheck = setInterval(() => {
				if(window.hbspt){
					clearInterval(formCheck)
					window.hbspt.forms.create({
						region: 'na3',
						portalId: '4438792',
						formId: `${formID}`,
						target: `#form-wrap-${formContainer}`,
						formInstanceId: `${uid}`, 
						onFormReady: function($form) {
							formReady($form)
						}
					})
				}
			}, 500);
		}

		function formReady($form){
			var pageUrlInput = $form.querySelector('input[name="page_url"]')
			pageUrlInput.value = window.location.href

			if(formID != '18baf56a-8969-4644-8354-a4e6f086de71'){
				
				var submitBtn = $form.querySelector('input[type="submit"]')
				var newBtn = document.createElement('button')
				newBtn.type = 'submit'
				newBtn.value = (submitText != '' ) ? submitText : submitBtn.defaultValue
				newBtn.innerHTML = '<span class="btn-bg-el"></span><span class="btn-txt">' + submitBtn.defaultValue + '</span>'
				newBtn.classList.add('hs-button', 'primary', 'large', 'btn-default', 'size-18-txt', 'ltr-spc-pos-0_25', 'c-blue-1', 'btn-green-1', 'btn-offset-10', 'fw-700', bgColourClass)
				submitBtn.replaceWith(newBtn)
				if(formContent && $form.parentElement.parentElement.id == 'popup-content'){
					const contentWrap = document.createElement('div')
					contentWrap.innerHTML = formContent
					if(!document.getElementById('prependedcontent')){
						contentWrap.id = 'prependedcontent'
						document.getElementById('popup-content').prepend(contentWrap)
					}
				}
			}

			const downloadFormSection = document.querySelectorAll('.form-download-guide')
			if(downloadFormSection.length){
				const emailField = document.querySelectorAll('.form-download-guide input[name="email"]')
				if(emailField.length){
					emailField[0].addEventListener('input', function(){
						if(this.value != ''){
							this.parentElement.previousSibling.setAttribute('style', 'display:none;')
						} else {
							this.parentElement.previousSibling.removeAttribute('style')
						}
					})
				}
			}

			const contactLightBlue = document.querySelectorAll('.home-page-form')
			if(contactLightBlue.length){
				const formInputs = document.querySelectorAll('.home-page-form .hs-input')
				Array.from(formInputs).forEach(element => {
					element.addEventListener('input', (event) => {
						if(element.value != ''){
							element.parentElement.parentElement.children[0].classList.add('filled')
						} else {
							element.parentElement.parentElement.children[0].classList.remove('filled')
						}
					})
					element.addEventListener('change', (event) => {
						if(element.value != ''){
							element.parentElement.parentElement.children[0].classList.add('filled')
						} else {
							element.parentElement.parentElement.children[0].classList.remove('filled')
						}
					})
				})

				const dateInput = document.querySelectorAll('.home-page-form .hs-dateinput input[type=text]')
				if(dateInput.length){
					setInterval(function(){
						if(document.querySelectorAll('.home-page-form input[name=best_day_to_call]').length){
							if(document.querySelectorAll('.home-page-form input[name=best_day_to_call]')[0].value != ''){
								document.querySelectorAll('.home-page-form input[name=best_day_to_call]')[0].parentElement.parentElement.parentElement.children[0].classList.add('filled')
							} else {
								document.querySelectorAll('.home-page-form input[name=best_day_to_call]')[0].parentElement.parentElement.parentElement.children[0].classList.remove('filled')
							}
						}
					}, 500)
				}
			}
		}
  }, [formID, formContainer])

	/*
	const loadForm = () => {
		if (window.hbspt) {
			window.hbspt.forms.create({
				region: 'na3',
				portalId: '341780804',
				formId: `${formID}`,
				target: `#form-wrap-${formContainer}`,
				formInstanceId: `${uid}`, 
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
	*/

  return (
    <>
		{/* 
			<Script 
				src='https://js-na3.hsforms.net/forms/embed/v2.js'
				onLoad={loadForm} // Trigger form creation after script loads
			/>
		*/}
      <div id={`form-wrap-${formContainer}`} className='hbspt-form'></div>
    </>
  )
}