const topbar = document.getElementById('topbar');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const bladeLight = document.getElementById('bladeLight');
const heroImage = document.querySelector('.hero-img img');

window.addEventListener('scroll', () => {
  topbar.classList.toggle('scrolled', window.scrollY > 40);

  if (heroImage && window.innerWidth > 980) {
    heroImage.style.transform = `scale(1.06) translateY(${window.scrollY * 0.075}px)`;
  }
}, { passive: true });

menu.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

if (bladeLight) {
  window.addEventListener('pointermove', e => {
    bladeLight.style.left = e.clientX + 'px';
    bladeLight.style.top = e.clientY + 'px';
  });
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

document.querySelectorAll('.studio-card, .service-card, .review').forEach(card => {
  card.addEventListener('pointermove', e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
  });
});
