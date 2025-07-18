const nav = document.querySelector('.nav')
const burgerNav = document.querySelector('.nav__mobile__burger-btn')
const burgerBars = document.querySelectorAll('.nav__mobile__burger-btn-bars')
const mobileNav = document.querySelector('.nav__mobile__links')
const navItems = document.querySelectorAll('.nav__mobile__links-item')

const scrollNav = 148

const handleNav = () => {
	mobileNav.classList.toggle('nav__mobile__links--active')
	burgerBars.forEach(el => el.classList.toggle('nav__mobile__burger-btn-bars--active'))
	navItems.forEach(item =>
		item.addEventListener('click', () => {
			mobileNav.classList.remove('nav__mobile__links--active')
			burgerBars.forEach(el => el.classList.remove('nav__mobile__burger-btn-bars--active'))
		})
	)
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

// // burgerBars.forEach(el => el.classList.toggle('nav__mobile__burger-btn-bars--active'))
