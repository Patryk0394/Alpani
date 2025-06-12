const nav = document.querySelector('.nav')
const burgerNav = document.querySelector('.nav__mobile__burger-btn')
const mobileNav = document.querySelector('.nav__mobile__links')

const scrollNav = 200

const handleNav = () => {
	mobileNav.classList.toggle('nav__mobile__links--active')

	if (mobileNav.classList.contains('nav__mobile__links--active')) {
		nav.classList.add('nav--active')
	} else {
		nav.classList.remove('nav--active')
	}
}

const addedBackgroundNav = () => {
	if (window.scrollY > scrollNav) {
		nav.classList.add('nav--active')
	} else {
		nav.classList.remove('nav--active')
	}
}

burgerNav.addEventListener('click', handleNav)
window.addEventListener('scroll', addedBackgroundNav)
