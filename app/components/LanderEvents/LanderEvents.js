'use client';

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { assetSourceLocal } from "@/app/paths"

export function LanderEvents() {
	const pathname = usePathname()
	const basePathLocal = assetSourceLocal()

	useEffect(() => {

		const htmlElement = document.getElementsByTagName('html')
		const bodyElement = document.getElementsByTagName('body')
		const header = document.getElementById('header')
		const logo = document.getElementById('logo')
		const mainElement = document.getElementsByTagName('main')
		const headerCTA = document.querySelector('.landing-template-btn.header-cta-btn')
		var pageLang = htmlElement[0].getAttribute('lang') == 'es-US' ? 'es' : 'en'

		// on scroll
		const scrollThreshold = 200;
		const scrollButtonThreshold = 650;
		function addClassOnScroll() {
				// Check if the vertical scroll position is greater than or equal to the threshold
				if (window.scrollY >= scrollThreshold) {
						// Add the class using the classList.add() method
						htmlElement[0].classList.add("header-toggled-state")
						logo.src = `${basePathLocal}/logo/${pageLang}/logo-white-descriptor.webp`
				} else {
						// Otherwise, remove the class
						htmlElement[0].classList.remove("header-toggled-state")
						logo.src = `${basePathLocal}/logo/${pageLang}/logo-blue-descriptor-tagline.webp`
				}

				//console.log('HEADER CTA: ', headerCTA)
				if(headerCTA){
					if(window.scrollY >= scrollButtonThreshold){
						headerCTA.classList.add('revealed')
					} else {
						headerCTA.classList.remove('revealed')
					}
				}
		}
		window.addEventListener("scroll", addClassOnScroll)

	}, [pathname])

	return null
}