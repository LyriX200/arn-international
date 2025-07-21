// script.js

// Preloader
window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});

// AOS init
AOS.init();

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "↑ Top";
scrollBtn.className = "fixed bottom-4 right-4 bg-blue-700 text-white px-4 py-2 rounded hidden";
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form validation and status
const form = document.getElementById('queryForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formStatus').classList.remove('hidden');
  form.reset();
});

// Dynamic year
document.getElementById('currentYear').innerText = new Date().getFullYear();
