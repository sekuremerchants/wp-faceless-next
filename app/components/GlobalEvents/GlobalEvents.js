'use client';

import { createRoot } from 'react-dom/client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { assetSourceLocal } from "@/app/paths"
import { HubspotForm } from '@/components/HubspotForm'
import { Embed } from '@/components/Embed'

export function GlobalEvents() {
	const pathname = usePathname()
	const basePathLocal = assetSourceLocal()

	useEffect(() => {

		// load pages at the top
		if ('scrollRestoration' in history) {
			history.scrollRestoration = 'manual';
		}

		/*
		window.addEventListener('load', () => {
			const top = 0 - document.getElementById('header').offsetHeight
			window.scrollTo(top, 0);
		})

		window.onbeforeunload = function() {
			const top = 0 - document.getElementById('header').offsetHeight
			window.scrollTo(top, 0);
		}
		*/

		// #main-content padding top style update
		const header = document.getElementById('header')
		const main = document.getElementById('main-content')
		Object.assign(main.style, {paddingTop: header.offsetHeight + 'px'})

		// fade in/out sections/blocks using class op-0
		let firstBlock = main.children[0]
		if(!main.children[0].classList.contains('sk-block')){
			firstBlock = main.children[1]
			firstBlock.setAttribute('style', 'opacity:1;')
		}
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

		// popup functionality
		const popupBtns = document.querySelectorAll('[data-popup-id]')
		Array.from(popupBtns).forEach(element => {
			element.addEventListener('click', (event) => {
				event.preventDefault()

				let formattedContent
				if(element.dataset.popupContent){
					formattedContent = element.dataset.popupContent.split('\n').map(content => {
						const hasHTML = (str) => /<[^>]*>/i.test(str);
						if(content != '' && !hasHTML(content)){
							return `<p>${content}</p>`
						} else {
							return content.trim()
						}
					}).join('')
				}
				
				const popupContent = document.getElementById('popup-content')
				popupContent.replaceChildren()
				const root = createRoot(popupContent)
				root.render(<HubspotForm formID={`57d660f5-3628-48e3-bffe-715805ebede5`} formContainer={`testformwrap`} uid='1759935145' formContent={formattedContent} bgColour='blue' />)
				document.getElementsByTagName('html')[0].classList.add('open-popup')
			})
		})

		document.getElementById('popup-close-btn').addEventListener('click', (event) => {
			event.preventDefault()
			document.getElementsByTagName('html')[0].classList.remove('open-popup')
			document.getElementById('popup-content').replaceChildren()
		})

		// video popup functionality
		const videoPopupBtns = document.querySelectorAll('[data-video-embed-id]')
		Array.from(videoPopupBtns).forEach(element => {
			const block = {
				providerNameSlug: 'youtube',
			}

			element.addEventListener('click', (event) => {
				event.preventDefault()
				const videoPopupWrap = document.getElementById('embed-iframe-container')
				console.log('VIDEO POPUP WRAP: ', videoPopupWrap)
				const videoIframe = document.createElement('iframe')
				videoIframe.src = `https://www.youtube.com/embed/${element.dataset.videoEmbedId}?rel=0&autoplay=1`
				let iframe = `
					<iframe src="https://www.youtube.com/embed/${element.dataset.videoEmbedId}?rel=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				`

				const root = createRoot(videoPopupWrap)
				//root.render(videoIframe)
				root.render(<Embed block={block} embedURL={`https://www.youtube.com/embed/${element.dataset.videoEmbedId}?rel=0&autoplay=1`} />)
				document.getElementsByTagName('html')[0].classList.add('show-embed-popup-wrap')
			})
		})
		const videoEmbedCloseBtn = document.getElementById('embed-popup-close-btn')
		videoEmbedCloseBtn.addEventListener('click', (event) => {
			event.preventDefault()
			document.getElementsByTagName('html')[0].classList.remove('show-embed-popup-wrap')
			document.getElementById('embed-iframe-container').replaceChildren()
		})

	}, [pathname])

	return null
}