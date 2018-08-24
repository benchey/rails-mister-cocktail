import $ from 'jquery';

const UpdateNavbarOnScoll = () => {
  const navbar = $('.navbar-wagon');
  navbar.addEventListener('scoll', () => {
    if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-wagon');
      } else {
        navbar.classList.remove('navbar-wagon');
      }
    });
}



export { UpdateNavbarOnScoll };
