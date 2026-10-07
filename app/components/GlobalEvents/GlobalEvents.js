'use client';

import { createRoot } from 'react-dom/client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { assetSourceLocal } from "@/app/paths"
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
		//const header = document.getElementById('header')
		const main = document.getElementById('main-content')
		//Object.assign(main.style, {paddingTop: header.offsetHeight + 'px'})

		// fade in/out sections/blocks using class op-0
		let firstBlock = main.children[0]

		if(!main.children[0].classList.contains('sk-block')){
			firstBlock = main.children[1]
			firstBlock.setAttribute('style', 'opacity:1;')
		} else {
			main.children[0].setAttribute('style', 'opacity:1;')
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

				let formID = element.dataset.formId ? element.dataset.formId : '2ef297cc-cd3d-4bef-94cf-e12cdc13a3e8'
				if(document.querySelector('html').getAttribute('lang') == 'es-US' && !element.dataset.formId){
					formID = '021180c3-1536-49f2-83f8-adcf818fdb9f'
				}

				let formattedContent = ''
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

				if(formattedContent != ''){
					const txt = document.createElement('div')
					txt.innerHTML = formattedContent
					popupContent.append(txt)
				}

				document.getElementsByTagName('html')[0].classList.add('open-popup')

				const hbsptFormWrap = document.createElement('div')
				hbsptFormWrap.id = 'hbspt-form'
				hbsptFormWrap.classList.add('hbspt-form')
				popupContent.append(hbsptFormWrap)

				if(window.hbspt){
					window.hbspt.forms.create({
						region: 'na1',
						portalId: '4438792',
						formId: `${formID}`,
						target: '#hbspt-form',
						onFormReady: function($form) {
							formReady($form)
						}
					})
				} else {
					console.log('WINDOW HBSPT NOT DETECTED')
				}

				function formReady($form){
					var pageUrlInput = $form.querySelector('input[name="page_url"]')
					pageUrlInput.value = window.location.href

					var submitBtn = $form.querySelector('input[type="submit"]')
					var newBtn = document.createElement('button')
					newBtn.type = 'submit'
					newBtn.value = submitBtn.defaultValue
					newBtn.innerHTML = '<span class="btn-bg-el"></span><span class="btn-txt">' + submitBtn.defaultValue + '</span>'
					newBtn.classList.add('hs-button', 'primary', 'large', 'btn-default', 'size-18-txt', 'ltr-spc-pos-0_25', 'c-blue-1', 'btn-green-1', 'btn-offset-10', 'fw-700', 'section-color-blue')
					submitBtn.replaceWith(newBtn)
				}
				
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
				const root = createRoot(videoPopupWrap)
				root.render(<Embed block={block} embedURL={`https://www.youtube.com/embed/${element.dataset.videoEmbedId}?rel=0&autoplay=1`} />)
				document.getElementsByTagName('html')[0].classList.add('show-embed-popup-wrap')
			})
		})

		const vimeoPopupBtns = document.querySelectorAll('[data-vimeo-embed-id]')
		Array.from(vimeoPopupBtns).forEach(element => {
			const block = {
				providerNameSlug: 'vimeo',
			}

			element.addEventListener('click', (event) => {
				event.preventDefault()
				const videoPopupWrap = document.getElementById('embed-iframe-container')
				const root = createRoot(videoPopupWrap)
				root.render(<Embed block={block} embedURL={`https://player.vimeo.com/video/${element.dataset.vimeoEmbedId}?rel=0&autoplay=1`} />)
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