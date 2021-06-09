const burger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links-container');
const navLinksList = document.querySelectorAll('.nav__link')
const contactNavLink = document.getElementById('contact-nav-link')

burger.addEventListener('click', function () {
  burger.classList.toggle('is-active');
  navLinks.classList.toggle('show-nav-links');
});

// Need to hide nav when Contact link is selected while in the home page
contactNavLink.addEventListener('click', function () {
  burger.classList.toggle('is-active');
  navLinks.classList.toggle('show-nav-links');
});


// Need to clear form after it is submitted and user returns to home 
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

window.addEventListener('load', (event) => {
  nameField.value = ''
  emailField.value = ''
  messageField.value = ''
});