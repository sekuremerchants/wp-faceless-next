// fixed header outer height adjustment
const header = document.getElementById('header')
const mainElement = document.getElementsByTagName('main')
mainElement[0].style.paddingTop = header.offsetHeight + "px"

// main nav hover functionality
const headerLinks = document.getElementsByClassName('header-link-item')
const htmlElement = document.getElementsByTagName('html')

Array.from(headerLinks).forEach(element => {
  element.addEventListener('mouseover', () => {
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

const dropdownMenus = document.getElementsByClassName('dropdown-item-links');
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