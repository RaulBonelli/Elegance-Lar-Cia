/* ===================== HAMBURGER / SIDEBAR ===================== */
const hamburger   = document.getElementById('hamburger');
const sidebar     = document.getElementById('sidebar');
const overlay     = document.getElementById('overlay');
const sidebarClose = document.getElementById('sidebarClose');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('open');
  hamburger.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () =>
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar()
);
overlay.addEventListener('click', closeSidebar);
sidebarClose.addEventListener('click', closeSidebar);

/* ===================== LIGHTBOX ===================== */
document.getElementById('lightboxClose').addEventListener('click', () => {
  document.getElementById('lightbox').classList.remove('open');
});
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target.id === 'lightbox')
    document.getElementById('lightbox').classList.remove('open');
});

/* ===================== HEADER SHADOW ON SCROLL ===================== */
window.addEventListener('scroll', () => {
  document.querySelector('.header').style.boxShadow = window.scrollY > 10
    ? '0 4px 24px rgba(30,16,85,0.12)'
    : '0 2px 20px rgba(30,16,85,0.07)';
});

