// Menu mobile
const btn = document.querySelector('.menu-btn'), nav = document.querySelector('.nav');
if (btn) {
  btn.addEventListener('click', () => { const o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); }));
}
// Tahun footer
document.querySelectorAll('.year').forEach(e => e.textContent = new Date().getFullYear());
