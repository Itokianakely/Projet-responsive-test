import './scss/style.scss'

/*SECTION NAVIGATION BAR*/
const navToggle = document.querySelector('.nav-bar-toggle');
const navMenu = document.querySelector('.nav-bar-menu');
const navLinks = navMenu.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  const MenuOuvert = navMenu.classList.toggle('active');
  navToggle.classList.toggle('active', MenuOuvert);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

