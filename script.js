document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
  });

  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScroll(anchor.getAttribute('href'));
    });
  });
});
