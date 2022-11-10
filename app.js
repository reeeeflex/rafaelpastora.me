const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');

// sets active class to css allowing for animations
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach(e =>
  e.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  })
);

window.addEventListener('scroll', () => {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
});
