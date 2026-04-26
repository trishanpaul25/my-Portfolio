// ─── Custom Cursor ───
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

if (cursor) {
  (function loop() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();
}

// ─── Nav Scroll Effect ───
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── Theme Toggle ───
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ─── Hamburger Menu ───
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
  hamburger.classList.add('open');
  navLinks.classList.add('open');
  navOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

// ─── Scroll Reveal ───
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ─── Hero Reveals on Load ───
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero .reveal').forEach(el => {
    setTimeout(() => el.classList.add('in'), 150);
  });
});

// ─── Mobile Touch Fix for Work Cards ───
// On mobile, tapping a work card opens GitHub link
document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('click', function(e) {
    // If they clicked a button inside, let it handle itself
    if (e.target.closest('.work-btn')) return;
    // Otherwise find the GitHub button and follow it
    const githubBtn = card.querySelector('.work-btn');
    if (githubBtn && githubBtn.href && githubBtn.href !== '#') {
      window.open(githubBtn.href, '_blank');
    }
  });
});
