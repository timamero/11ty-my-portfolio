const burger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links-container');
const navLinksList = document.querySelectorAll('.nav__link')
const contactNavLink = document.getElementById('contact-nav-link')
const aboutNavLink = document.getElementById('about-nav-link')
const contactForm = document.getElementById('contact-form')


burger.addEventListener('click', function () {
  burger.classList.toggle('is-active');
  navLinks.classList.toggle('show-nav-links');
});

// Need to hide nav when Contact and About link is selected while in the home page
if (contactNavLink) {
  contactNavLink.addEventListener('click', function () {
  burger.classList.toggle('is-active');
  navLinks.classList.toggle('show-nav-links');
});
}

if (aboutNavLink) {
  aboutNavLink.addEventListener('click', function () {
  burger.classList.toggle('is-active');
  navLinks.classList.toggle('show-nav-links');
});
}


// Need to clear form after it is submitted and user returns to home 
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

if (contactForm) {
  window.addEventListener('load', (event) => {
  nameField.value = ''
  emailField.value = ''
  messageField.value = ''
});
}
