// Mobile Menu Toggle
const toggleBtn = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const closeBtn = document.getElementById('close-btn');

toggleBtn.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

// Read More Modal
const readMoreBtn = document.getElementById('read-more-btn');
const modal = document.getElementById('read-more-modal');
const modalClose = document.getElementById('modal-close');

readMoreBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});
toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Optional: Close mobile menu when link is clicked
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Optional: Close menu if resizing to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.classList.remove('open');
  }
});