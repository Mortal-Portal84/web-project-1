//  JavaScript
import swiper from './js/slider'

//  HTML
import './index.html'

// Styles
import './styles/index.scss'

document.addEventListener('DOMContentLoaded',  () => {
    //  Header with dynamic height and NavLinks
    const header = document.getElementById('header')
    const navLinks = document.querySelectorAll('.nav__nav-link')

    window.onscroll = () => {
        window.scrollY > 80
            ? header.classList.add('header--scrolled')
            : header.classList.remove('header--scrolled')

        navLinks.forEach(link => {
            const section = document.querySelector(link.hash)
            const fromTop = window.scrollY

            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
                ? link.classList.add('nav__nav-link--active')
                : link.classList.remove('nav__nav-link--active')
        })
    }

    //  Initialize Swiper
    swiper()
})