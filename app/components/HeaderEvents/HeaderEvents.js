'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { assetSourceLocal } from "@/app/paths"

export function HeaderEvents() {
  const pathname = usePathname();
	const basePathLocal = assetSourceLocal();

  useEffect(() => {

    console.log('Route changed to:', pathname);

		// reload window at top (stays here until a general functionality file is created)
		window.onload = function() {
				window.scroll({
						top: 0, 
						left: 0, 
						behavior: 'smooth' 
				})
		}

		const htmlElement = document.getElementsByTagName('html')
		const header = document.getElementById('header')
		const logo = document.getElementById('logo')
		const mobileNavBtn = document.getElementById('mobile-menu-btn')
		const mainElement = document.getElementsByTagName('main')

		const headerLinks = document.getElementsByClassName('header-link-item')
		const dropdownMenus = document.getElementsByClassName('dropdown-item-links')

		// main nav hover functionality
		if(window.innerWidth >= 1025){
			Array.from(headerLinks).forEach(element => {
				element.addEventListener('mouseover', () => {
					const headerLinks2 = document.getElementsByClassName('header-link-item')
					Array.from(headerLinks2).forEach(element2 => {
						element2.classList.remove('opened-dropdown');
						element2.nextElementSibling.classList.remove('opened-dropdown')
					})
					htmlElement[0].classList.add('header-opened-dropdown')
					element.classList.add('opened-dropdown')
					element.nextElementSibling.classList.add('opened-dropdown')
				})
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

				element.addEventListener('mouseleave', () => {
					if(element.classList.contains("opened-dropdown")){
						htmlElement[0].classList.remove('header-opened-dropdown')
						element.classList.remove('opened-dropdown')
						element.previousElementSibling.classList.remove('opened-dropdown')
					}
				})
			})
		} else {
			Array.from(headerLinks).forEach(element => {
				element.addEventListener('click', function(){
					if(!element.parentElement.classList.contains('open')){
						element.parentElement.classList.add('open')
					} else {
						element.parentElement.classList.remove('open')
					}
					console.log(element)
				})
			})
		}

		// mobile nav
		mobileNavBtn.addEventListener('click', function(){
			console.log('mobile button clicked')
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
			}
		})

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


  }, [pathname]);

  return null; // This component doesn't render anything
}