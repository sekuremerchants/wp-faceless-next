'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function BlogEvents(){
	const pathname = usePathname();

  useEffect(() => {

		const blogContent = document.getElementsByClassName('blog-content')
		const childElements = blogContent[0].children
		let blogH2s = []

		const blogTOC = document.getElementsByClassName('content-bullets')
		var blogTOCs = false

		if(blogTOC.length){
			blogTOCs = blogTOC[0].children[0].children
		}

		for (let i = 0; i < childElements.length; i++) {
			if(childElements[i].tagName == "H2") {
				blogH2s.push(childElements[i])
			}
		}

		const observer = new IntersectionObserver((entries) => {
			if(blogTOC.length){
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						// table of contents links
						if(entry.target.tagName == 'H2'){
							const allTOCs = document.querySelectorAll(`.anchor-link`)
							const targetTOC = document.querySelectorAll(`.anchor-link[href="#${entry.target.id}"]`)

							Array.from(allTOCs).forEach(function (current, index) {
								current.classList.remove('active')
							});
							targetTOC[0].classList.add('active')
						}

						// desktop blog ads display
						if(entry.target.classList.contains('blog-ad')){
							const postAD = entry.target.querySelectorAll('.post-ad')
							const tocAdWrap = document.getElementById('postads')
							
							if(postAD.length && tocAdWrap){
								if(tocAdWrap.children.length){
									tocAdWrap.children[0].style.opacity = '0'
									setTimeout(function(){
										const blockAd = document.querySelectorAll(`section[data-blog-ad='${tocAdWrap.children[0].dataset.blogAd}'`)
										if(blockAd.length){
											blockAd[0].querySelectorAll('.col-sm-12')[0].appendChild(tocAdWrap.children[0])
										}
										tocAdWrap.appendChild(postAD[0])
										if(tocAdWrap.children[0].querySelectorAll('.hbspt-form').length > 1){
											tocAdWrap.children[0].querySelectorAll('.hbspt-form')[0].remove()
										}
										setTimeout(function(){
											tocAdWrap.children[0].style.opacity = '1'
										}, 200)
									}, 250)
								} else {
									tocAdWrap.appendChild(postAD[0])
									setTimeout(function(){
										tocAdWrap.children[0].style.opacity = '1'
									}, 250)
								}
							}
						}
					}
				})
			}

		}, {rootMargin: "0px 0px -50% 0px", threshold: 0})

		const postADs = document.querySelectorAll('.sk-block.blog-ad')
		document.addEventListener('scroll', (event) => {
			if(window.innerWidth >= 1025){
				if(blogH2s.length){
					Array.from(blogH2s).forEach(function (current, index) {
						observer.observe(current)
					})
				}
				
				if(postADs.length){
					Array.from(postADs).forEach(function (current, index) {
						observer.observe(current)
					})
				}
			}
		}, { passive: true })

		let stickyBarScrollTop = 0
		window.addEventListener('resize', () => {
			const toggledHeader = document.getElementById('header')
			const stickyBar = document.getElementById('sticky-bar')
			if(stickyBar.classList.contains('show')){
				stickyBar.style.top = toggledHeader.offsetHeight + 'px'
			}
		})
		window.addEventListener('scroll', () => {
			const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
			const toggledHeader = document.getElementById('header')
			
			if (currentScrollTop > stickyBarScrollTop) {
				const bullets = (document.getElementById('article-text') ? document.getElementById('article-text').getBoundingClientRect() : false)

				if(bullets){
					if (bullets.top < 0){
						const stickyBar = document.getElementById('sticky-bar')
						stickyBar.style.top = toggledHeader.offsetHeight + 'px'
						stickyBar.classList.add('show')
						const ads = document.getElementById('postads')
						if(ads){
							ads.style.opacity = '1'
						}
						
						const parent = document.getElementById('sticky-toc')
						const element = document.querySelector('#table-of-contents #content-bullets')
						if(element){
							parent.appendChild(element)
						}
					}
				}
			} else if (currentScrollTop < stickyBarScrollTop) {
				const rect = (document.getElementById('article-text') ? document.getElementById('article-text').getBoundingClientRect() : false)

				if(rect){
					if (rect.top > 110){
						const ads = document.getElementById('postads')
						if(ads){
							ads.style.opacity = '0'
							ads.scrollTop = 0
						}
						
						document.getElementById('sticky-bar').classList.remove('show')
						document.getElementById('sticky-toc').classList.remove('open')
						document.getElementById('sticky-toc-toggle').classList.remove('open')
						document.getElementById('sticky-toc').style.height = 0
						
						
						const parent = document.getElementById('table-of-contents')
						const element = document.querySelector('#sticky-toc #content-bullets')
						if(element){
							parent.prepend(element)
						}
					}
				}
			}

			stickyBarScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop
		}, { passive: true })

		const stickyTocToggle = document.getElementById('sticky-toc-toggle')
		if(stickyTocToggle){
			stickyTocToggle.addEventListener('click', function(e){
				e.preventDefault()
				const stickyToc = document.getElementById('sticky-toc')
				const stickyTocList = stickyToc.children[0]

				if(!stickyToc.classList.contains('open')) {
					this.classList.add('open')
					stickyToc.classList.add('open')
					stickyToc.style.height = (stickyTocList.offsetHeight + 20) + 'px'
					const openedStickyTocToggle = document.querySelector('#sticky-toc-toggle.open')
					if(openedStickyTocToggle){
						openedStickyTocToggle.addEventListener('click', closeStickyTocToggle)
					}
				}
			})
		}

		function closeStickyTocToggle(event){
			const stickyToc = document.getElementById('sticky-toc')
			const stickyTocList = stickyToc.children[0]
			event.target.classList.remove('open')
			stickyToc.classList.remove('open')
			stickyToc.style.height = 0
			event.target.removeEventListener('click', closeStickyTocToggle)
		}

  }, [pathname])

  return null
}