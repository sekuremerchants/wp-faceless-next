'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function BlogEvents(){
	const pathname = usePathname();

  useEffect(() => {

    console.log('blog functionality loaded');

		const blogContent = document.getElementsByClassName('blog-content')
		const childElements = blogContent[0].children
		let blogH2s = []

		const blogTOC = document.getElementsByClassName('content-bullets')
		const blogTOCs = blogTOC[0].children[0].children

		for (let i = 0; i < childElements.length; i++) {
			if(childElements[i].tagName == "H2") {
				blogH2s.push(childElements[i])
			}
		}

		let lastScrollTop = 0

		document.addEventListener('scroll', (event) => {

			let activeHeading = null
			let negatives = []
			const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop

			Array.from(blogH2s).forEach(function (current, index) {
				const rect = current.getBoundingClientRect()
				const distanceFromViewportTop = rect.top
				const absoluteDistance = Math.abs(distanceFromViewportTop)
				const offsetTop = current.offsetTop

				if (currentScrollTop > lastScrollTop) {
					if(current.id && (window.scrollY >= offsetTop)) {
						activeHeading = current
						return false
					}
				} else {
					if(distanceFromViewportTop < 0){
						let h2 = {
							id: current.id,
							distance: distanceFromViewportTop,
						}
						negatives.push(h2)
					}

					if(negatives){
						let negsLength = negatives.length - 1
						let negsID = negatives[negsLength] ? negatives[negsLength].id : null

						if(negsID){
							Array.from(blogTOCs).forEach(function (current, index) {
								current.children[0].classList.remove("active")
								if((current.children[0].hash.replace('#','') == negsID) && !current.children[0].classList.contains('active')){
									current.children[0].classList.add("active")
								}
							})
						}
					}
				}

				if (activeHeading) {
					Array.from(blogTOCs).forEach(function (current, index) {
						current.children[0].classList.remove("active")
						if((current.children[0].hash.replace('#','') == activeHeading.id) && !current.children[0].classList.contains('active')){
							current.children[0].classList.add("active")
						}
					})
				}
			})

			lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 

		})

  }, [pathname]);

  return null;
}