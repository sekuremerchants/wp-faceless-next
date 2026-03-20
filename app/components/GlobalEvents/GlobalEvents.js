'use client';

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { assetSourceLocal } from "@/app/paths"

export function GlobalEvents() {
	const pathname = usePathname()
	const basePathLocal = assetSourceLocal()

	useEffect(() => {

		// load pages at the top
		if ('scrollRestoration' in history) {
			history.scrollRestoration = 'manual';
		}

		window.addEventListener('load', () => {
			const top = 0 - document.getElementById('header').offsetHeight
			window.scrollTo(top, 0);
		})

		window.onbeforeunload = function() {
			const top = 0 - document.getElementById('header').offsetHeight
			window.scrollTo(top, 0);
		}

		// fade in/out sections/blocks using class op-0
		window.addEventListener('scroll', () => {
			const elements = document.querySelectorAll('.op-0')
			Array.from(elements).forEach(element => {
				const position = element.getBoundingClientRect()
				const headerPosition = document.getElementById('header').getBoundingClientRect()

				// Checking if any part of the element is visible
				if (position.top < (window.innerHeight - 200) && position.bottom >= -200 && position.bottom > (headerPosition.bottom + 100)) {
					element.setAttribute('style', 'opacity:1;')
				} else {
					element.setAttribute('style', 'opacity:0;')
				}
			})
		})

		// anchor links scrolling
		const anchorLinks = document.querySelectorAll('a[href*="#"]')
		Array.from(anchorLinks).forEach(element => {
			element.addEventListener('click', (event) => {
				element.blur()
				var targetID = element.hash.replace('#', '')
				const targetElement = document.getElementById(targetID)
				if(targetElement){
					event.preventDefault()
					const yOffset = -200;
					const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
					window.scrollTo({ top: y, behavior: 'smooth' });
					
				}
			})
		})

	}, [pathname])

	return null
}