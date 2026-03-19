'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function FAQevents() {
  const pathname = usePathname();

  useEffect(() => {

		const faqDropdownTitles = document.getElementsByClassName('faq-question-title')

		Array.from(faqDropdownTitles).forEach(element => {
			element.addEventListener('click', () => {
				element.parentElement.classList.toggle('opened')
			})
		})

  }, [pathname]);

  return null;
}