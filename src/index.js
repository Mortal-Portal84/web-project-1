//  JavaScript
import example from './js/example';

//  HTML
import './index.html';

// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';

// import Swiper styles
import 'swiper/swiper-bundle.css';

// Styles
import './styles/index.scss';

//  Header
window.onscroll = () => {
  const header = document.getElementById('header')
  window.scrollY > 80
    ? header.classList.add('header--colored')
    : header.classList.remove('header--colored')
}


Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

example();
