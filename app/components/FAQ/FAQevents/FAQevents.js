'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function FAQevents() {
  const pathname = usePathname();

  useEffect(() => {

		const faqDropdownTitles = document.getElementsByClassName('faq-question-title')

		Array.from(faqDropdownTitles).forEach(element => {
			element.addEventListener('click', () => {
				
				Array.from(faqDropdownTitles).forEach(title => {
					title.parentElement.classList.remove('preopened-item')
					title.parentElement.classList.remove('opened')
					Object.assign(title.nextSibling.style, {height: '0px'})
				})
				
				if(element.parentElement.classList.contains('opened')){
					element.parentElement.classList.remove('opened')
					Object.assign(element.nextSibling.style, {height: '0px'})
				} else {
					element.parentElement.classList.add('opened')
					Object.assign(element.nextSibling.style, {height: element.nextSibling.children[0].offsetHeight + 'px'})
				}
				
			})
		})

  }, [pathname]);

  return null;
}