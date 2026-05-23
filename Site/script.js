/* =============================================
   SCRIPT PRINCIPAL — Elegance Lar & Cia
   Módulos:
     1. Menu Hamburguer (mobile/tablet)
     2. Carrossel Hero
     3. Carrossel de Avaliações
     4. Destaque do Link Ativo na Nav
     5. Scroll Reveal (animação de entrada)
============================================= */


/* =============================================
   1. MENU HAMBURGUER
   Exibe/oculta o menu em dispositivos móveis e
   tablets. Também fecha ao clicar em um link.
============================================= */
(function () {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks     = document.getElementById('navLinks');

  /* Alterna o estado aberto/fechado do menu */
  function toggleMenu() {
    const isOpen = navLinks.classList.toggle('open');
    hamburgerBtn.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  }

  /* Clique no botão hamburguer */
  hamburgerBtn.addEventListener('click', toggleMenu);

  /* Fecha o menu ao clicar em qualquer link */
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburgerBtn.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  /* Fecha o menu ao clicar fora dele */
  document.addEventListener('click', (e) => {
    if (!hamburgerBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburgerBtn.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  });
})();


/* =============================================
   2. CARROSSEL HERO
   Navegação por setas, dots e swipe touch.
   Autoplay a cada 4 segundos.
============================================= */
(function () {
  const track   = document.getElementById('carouselTrack');
  const slides  = document.querySelectorAll('.carousel-slide');
  const dots    = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let current      = 0;
  let autoplayTimer;

  /* Vai para o slide de índice especificado */
  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;

    /* Atualiza destaque dos dots */
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  /* Inicia autoplay */
  function startAutoplay() {
    autoplayTimer = setInterval(next, 4000);
  }

  /* Reinicia autoplay após interação manual */
  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  /* Eventos das setas */
  nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });
  prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });


  /* Suporte a swipe (touch) */
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
      resetAutoplay();
    }
  });

  /* Pausa autoplay ao passar o mouse */
  track.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  track.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
})();


/* =============================================
   3. CARROSSEL DE AVALIAÇÕES
   Navegação por setas e dots.
   Recalcula posição ao redimensionar a janela.
============================================= */
(function () {
  const track   = document.getElementById('reviewsTrack');
  const rdots   = document.querySelectorAll('.rdot');
  const revPrev = document.getElementById('revPrev');
  const revNext = document.getElementById('revNext');
  const cards   = document.querySelectorAll('.review-card');

  let current = 0;

  /* Quantos cards são visíveis (1 em mobile, 2 em desktop) */
  function getVisible() {
    return window.innerWidth <= 768 ? 1 : 2;
  }

  /* Vai para o card de índice especificado */
  function goTo(index) {
    const visible   = getVisible();
    const maxIndex  = cards.length - visible;
    current = Math.max(0, Math.min(index, maxIndex));

    /* Largura de um card + gap */
    const cardWidth = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${current * cardWidth}px)`;

    /* Atualiza dots */
    rdots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  revNext.addEventListener('click', () => goTo(current + 1));
  revPrev.addEventListener('click', () => goTo(current - 1));

  rdots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  /* Recalcula ao redimensionar a janela */
  window.addEventListener('resize', () => goTo(current));
})();


/* =============================================
   4. DESTAQUE DO LINK ATIVO NA NAVEGAÇÃO
   Usa IntersectionObserver para detectar qual
   seção está visível e marcar o link correto.
============================================= */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(sec => observer.observe(sec));
})();

/* =============================================
   5. SCROLL REVEAL
   Anima elementos com fade + slide ao entrar
   na área visível durante a rolagem.
============================================= */
(function () {
  /* Seleciona os elementos que terão animação */
  const targets = document.querySelectorAll(
    '.categoria-card, .sobre-item, .review-card, .contact-info p'
  );

  /* Estado inicial: invisível e deslocado para baixo */
  targets.forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(22px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  /* Observa e anima ao entrar na tela */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target); /* anima apenas uma vez */
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
})();
