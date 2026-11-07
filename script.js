// Menu mobile
const btn = document.querySelector('.menu-btn'), nav = document.querySelector('.nav');
if (btn) {
  btn.addEventListener('click', () => { const o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); }));
}
// Tahun footer
document.querySelectorAll('.year').forEach(e => e.textContent = new Date().getFullYear());
// Kotak curhat (DEMO: belum ada server, pesan TIDAK dikirim ke mana pun)
const f = document.getElementById('curhatForm');
if (f) {
  f.addEventListener('submit', e => {
    e.preventDefault();
    if (!f.pesan.value.trim()) { f.pesan.focus(); return; }
    // TODO: kirim ke backend / Google Form / Formspree di sini
    f.style.display = 'none';
    document.getElementById('thanks').style.display = 'block';
  });
}
