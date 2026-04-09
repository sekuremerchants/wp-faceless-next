'use client';

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { assetSourceLocal } from "@/app/paths"

export function HeaderEvents() {
  const pathname = usePathname()
	const basePathLocal = assetSourceLocal()

  useEffect(() => {

		const htmlElement = document.getElementsByTagName('html')
		const bodyElement = document.getElementsByTagName('body')
		const header = document.getElementById('header')
		const logo = document.getElementById('logo')
		const mobileNavBtn = document.getElementById('mobile-menu-btn')
		const mainElement = document.getElementsByTagName('main')

		const headerLinks = document.getElementsByClassName('header-link-item')
		const dropdownMenus = document.getElementsByClassName('dropdown-item-links')
		const columnHeadings = document.getElementsByClassName('column-heading')

		// main nav hover functionality
		if(window.innerWidth >= 1025){
			desktopNav()
		} else {
			mobileNav()
		}

		window.addEventListener('resize', () => {
			if(window.innerWidth >= 1025){
				if(htmlElement[0].classList.contains('mobile-menu-opened')){
					htmlElement[0].classList.remove('mobile-menu-opened')
					if(htmlElement[0].classList.contains('header-toggled-state')){
						logo.src = `${basePathLocal}/logo/en/logo-white-descriptor.webp`
					} else {
						logo.src = `${basePathLocal}/logo/en/logo-white-descriptor-tagline.webp`
					}
					resetMobileDropdownItemWraps()
				}
				desktopNav()
				Array.from(headerLinks).forEach(element => {
					element.removeEventListener('click', mobileNavEvents)
				})
			} else {
				if(htmlElement[0].classList.contains('header-opened-dropdown')){
					htmlElement[0].classList.remove('header-opened-dropdown')
					Array.from(headerLinks).forEach(element => {
						if(element.classList.contains('opened-dropdown')){
							element.classList.remove('opened-dropdown')
							element.nextSibling.classList.remove('opened-dropdown')
						}
					})
				}
				mobileNav()
				Array.from(headerLinks).forEach(element => {
					element.removeEventListener('mouseover', desktopNavMouseOverEvent)
				})
				Array.from(dropdownMenus).forEach(element => {
					element.removeEventListener('mouseleave', desktopNavMouseLeaveEvent)
				})
			}
		})

		// mobile nav
		mobileNavBtn.addEventListener('click', function(){
			if(!htmlElement[0].classList.contains('mobile-menu-opened')) {
				htmlElement[0].classList.add('mobile-menu-opened')
				if(htmlElement[0].classList.contains('header-toggled-state')) {
					logo.src = `${basePathLocal}/logo/en/logo-blue-descriptor.webp`
				} else {
					logo.src = `${basePathLocal}/logo/en/logo-blue-descriptor-tagline.webp`
				}
			} else {
				htmlElement[0].classList.remove('mobile-menu-opened')
				if(htmlElement[0].classList.contains('header-toggled-state')) {
					logo.src = `${basePathLocal}/logo/en/logo-white-descriptor.webp`
				} else {
					logo.src = `${basePathLocal}/logo/en/logo-white-descriptor-tagline.webp`
				}

				resetMobileDropdownItemWraps()
			}
		})

		function desktopNavMouseOverEvent(){
			const headerLinks2 = document.getElementsByClassName('header-link-item')
			Array.from(headerLinks2).forEach(element2 => {
				element2.classList.remove('opened-dropdown');
				element2.nextElementSibling.classList.remove('opened-dropdown')
			})
			htmlElement[0].classList.add('header-opened-dropdown')
			this.classList.add('opened-dropdown')
			this.nextElementSibling.classList.add('opened-dropdown')
		}

		function desktopNavMouseLeaveEvent(){
			if(this.classList.contains("opened-dropdown")){
				htmlElement[0].classList.remove('header-opened-dropdown')
				this.classList.remove('opened-dropdown')
				this.previousElementSibling.classList.remove('opened-dropdown')
			}
		}

		function desktopNav(){
			Array.from(headerLinks).forEach(element => {
				element.addEventListener('mouseover', desktopNavMouseOverEvent)
				element.addEventListener('mouseout', (event) => {
					if(
						event['explicitOriginalTarget'].className == "nav-wrap" || 
						event['explicitOriginalTarget'].className ==  "header-links-content-wrap"){
							htmlElement[0].classList.remove('header-opened-dropdown')
							element.classList.remove('opened-dropdown')
							element.nextElementSibling.classList.remove('opened-dropdown')
					}
				})
			})

			Array.from(dropdownMenus).forEach(element => {
				// move dropdown menus to header height
				element.style.top = header.offsetHeight + "px"

				element.addEventListener('mouseleave', desktopNavMouseLeaveEvent)
			})
		}

		function mobileNavEvents(){
			const children = this.nextElementSibling.getElementsByClassName('dropdown-link-cta');

			if(this.parentElement.classList.contains('opened')){
				this.parentElement.classList.remove('opened')
				resetMobileDropdownItemWraps()
			} else {
				this.parentElement.classList.add('opened')

				const dropdownItemWraps = document.getElementsByClassName('dropdown-item-wrap')
				Array.from(dropdownItemWraps).forEach(element => {
					if(!element.classList.contains('opened')){
						element.setAttribute('style', 'display:none')
					}
				})

				if(children.length){
					children[0].classList.add('cta-parent')
					const ctaBtn = children[0].getElementsByClassName('btn-default')
					if(ctaBtn.length){
						ctaBtn[0].classList.add('clone')
						header.querySelectorAll('.content-wrap')[0].append(ctaBtn[0])
					}
				}
			}
		}

		function resetMobileDropdownItemWraps(){
			const dropdownItemWraps = document.getElementsByClassName('dropdown-item-wrap')
			Array.from(dropdownItemWraps).forEach(element => {
				element.setAttribute('style', 'display:block')
				if(element.classList.contains('opened')){
					element.classList.remove('opened')
				}
			})

			const linksColumns = header.querySelectorAll('.links-column')
			Array.from(linksColumns).forEach(element => {
				if(element.classList.contains('open-submenu')){
					element.classList.remove('open-submenu')
				}
			})

			const clonedCTAparent = header.querySelectorAll('.cta-parent')
			const clonedCTA = header.querySelectorAll('.clone')
			if(clonedCTAparent.length && clonedCTA.length){
				clonedCTAparent[0].append(clonedCTA[0])
				clonedCTAparent[0].classList.remove('cta-parent')
				clonedCTA[0].classList.remove('clone')
			}
		}

		function mobileNav(){
			Array.from(headerLinks).forEach(element => {
				element.addEventListener('click', mobileNavEvents)
			})
			Array.from(columnHeadings).forEach(element => {
				element.addEventListener('click', () => {
					element.parentElement.classList.toggle('open-submenu')
				})
			})
		}

		// language selector
		const langWrap = document.getElementById('lang-wrap')
		const langSelect = document.getElementById('lang-current')
		const langToggle = document.getElementById('lang_toggle')
		if(langWrap){
			document.getElementById('nav-extras').prepend(langWrap)
			langSelect.addEventListener('click', function() {
				const toggleHeight = langToggle.firstChild.offsetHeight * langToggle.childElementCount
				//langToggle.childElementCount, langToggle.firstChild.offsetHeight
				if(this.classList.contains('open')){
					this.classList.remove('open')
					langToggle.setAttribute('style', 'height:0px;visibility:hidden;')
				} else {
					this.classList.add('open')
					langToggle.setAttribute('style', 'height:' + toggleHeight + 'px;visibility:visible;')
				}			
			})
			bodyElement[0].addEventListener('click', function(event){
				console.log('BODY CLICK EVENT: ', event)
				if(event.target.id != 'lang-current'){
					langSelect.classList.remove('open')
					langToggle.setAttribute('style', 'height:0px;visibility:hidden;')
				}
			})
		}

		// on scroll
		const scrollThreshold = 200;
		function addClassOnScroll() {
				// Check if the vertical scroll position is greater than or equal to the threshold
				if (window.scrollY >= scrollThreshold) {
						// Add the class using the classList.add() method
						htmlElement[0].classList.add("header-toggled-state")
						logo.src = `${basePathLocal}/logo/en/logo-white-descriptor.webp`
						Array.from(dropdownMenus).forEach(element => {
							element.style.top = header.offsetHeight + "px"
						})
				} else {
						// Otherwise, remove the class
						htmlElement[0].classList.remove("header-toggled-state")
						logo.src = `${basePathLocal}/logo/en/logo-white-descriptor-tagline.webp`
						Array.from(dropdownMenus).forEach(element => {
							element.style.top = header.offsetHeight + "px"
						})
				}
		}
		window.addEventListener("scroll", addClassOnScroll)


  }, [pathname])

  return null
}