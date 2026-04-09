'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { assetSourceLocal } from "@/app/paths"

export const FormEvents = ({}) => {
	const pathname = usePathname()
	const basePathLocal = assetSourceLocal()

	useEffect(() => {

		let formInputs

		const getInputs = setInterval(function(){
			if(document.querySelectorAll('.home-page-form .hs-input').length > 0){
				clearInterval(getInputs)
				formInputs = document.querySelectorAll('.home-page-form .hs-input')

				Array.from(formInputs).forEach(element => {
					element.addEventListener('input', (event) => {
						console.log('INPUT: ', element.id)
						if(element.value != ''){
							element.parentElement.parentElement.children[0].classList.add('filled')
						} else {
							element.parentElement.parentElement.children[0].classList.remove('filled')
						}
					})
					element.addEventListener('change', (event) => {
						console.log('INPUT: ', element.id)
						if(element.value != ''){
							element.parentElement.parentElement.children[0].classList.add('filled')
						} else {
							element.parentElement.parentElement.children[0].classList.remove('filled')
						}
					})
				})
			}
		}, 500)

		setInterval(function(){
			if(document.querySelectorAll('.home-page-form input[name=best_day_to_call]').length){
				if(document.querySelectorAll('.home-page-form input[name=best_day_to_call]')[0].value != ''){
					document.querySelectorAll('.home-page-form input[name=best_day_to_call]')[0].parentElement.parentElement.parentElement.children[0].classList.add('filled')
				} else {
					document.querySelectorAll('.home-page-form input[name=best_day_to_call]')[0].parentElement.parentElement.parentElement.children[0].classList.remove('filled')
				}
			}
		}, 1000)

	}, [pathname])

	return null
}