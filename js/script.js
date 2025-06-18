const nav = document.querySelector('.nav')
const burgerNav = document.querySelector('.nav__mobile__burger-btn')
const burgerBars = document.querySelectorAll('.nav__mobile__burger-btn-bars')
const mobileNav = document.querySelector('.nav__mobile__links')

const scrollNav = 148

const handleNav = () => {
	mobileNav.classList.toggle('nav__mobile__links--active')
}

const addedBackgroundNav = () => {
	if (window.scrollY > scrollNav) {
		nav.classList.add('nav--active')
	} else {
		nav.classList.remove('nav--active')
	}
}

const burgerBarsAnimation = () => {
	burgerBars.forEach(el => el.classList.toggle('nav__mobile__burger-btn-bars--active'))
}

burgerNav.addEventListener('click', handleNav)
window.addEventListener('scroll', addedBackgroundNav)
burgerNav.addEventListener('click', burgerBarsAnimation)

// nav__mobile__burger-btn-bars--active
