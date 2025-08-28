// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const nav = document.getElementById('navbar');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Highlight nav links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 65; // nav height offset
  sections.forEach(section => {
    if (section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === section.id) {
          link.classList.add('active');
        }
      });
    }
  });
  // Show/hide back to top button
  const backToTop = document.getElementById('backToTop');
  if(window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Back to Top functionality
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Simple form submit handler (just for demo)
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message. This is a demo form and does not send emails.');
  e.target.reset();
});
