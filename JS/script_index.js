/* ════════════════════════════════════════════════════════
   CARROSSEL HERO (banner principal)

   Como funciona:
   Os slides ficam lado a lado dentro de um container flex.
   Para "trocar de slide", movemos o container inteiro para a
   esquerda usando CSS transform: translateX(-X%).
   Slide 0 → translateX(0%)
   Slide 1 → translateX(-100%)
   Slide 2 → translateX(-200%)
════════════════════════════════════════════════════════ */

// Índice do slide atual (começa no 0)
let current = 0;

// Total de slides — atualize este número se adicionar ou remover slides
const totalSlides = 3;

// Pega os elementos do HTML pelo id
const slidesEl = document.getElementById('slides'); // o container que se move
const dotsEl   = document.getElementById('dots');   // container dos pontinhos

// Atualiza a posição visual do carrossel e o ponto ativo
function updateSlide() {
  // Move o container para mostrar o slide atual
  // Ex: slide 1 → translateX(-100%), slide 2 → translateX(-200%)
  slidesEl.style.transform = `translateX(-${current * 100}%)`;

  // Atualiza os pontinhos: só o ponto do slide atual fica com classe "active"
  [...dotsEl.children].forEach((dot, index) => {
    dot.classList.toggle('active', index === current);
    // toggle('active', true) adiciona a classe
    // toggle('active', false) remove a classe
  });
}

// Avança ou volta um slide
// dir = 1 (próximo) ou -1 (anterior)
function moveSlide(dir) {
  // O % (módulo) faz o carrossel ser circular:
  // se estiver no último e clicar em "próximo", volta para o 0
  current = (current + dir + totalSlides) % totalSlides;
  updateSlide();
}

// Vai direto para um slide específico (usado pelos pontinhos)
function goSlide(index) {
  current = index;
  updateSlide();
}

// Troca de slide automaticamente a cada 4,5 segundos
setInterval(() => moveSlide(1), 4500);


/* ════════════════════════════════════════════════════════
   CARROSSEL DE AVALIAÇÕES

   Mesma lógica do hero, mas com dois cards visíveis por vez
   no desktop. Em funle mostra um de cada vez.
   O offset é calculado diferente: no desktop move 50% por slide,
   no mobile move 100%.
════════════════════════════════════════════════════════ */

// Índice do card atual de avaliação
let revCurrent = 0;

// Total de avaliações — atualize se adicionar ou remover cards
const revTotal = 3;

// Pega os elementos do HTML
const revTrack  = document.getElementById('reviewsTrack'); // trilho que se move
const revDotsEl = document.getElementById('revDots');      // pontinhos das avaliações

// Atualiza a posição do carrossel de avaliações
function updateReview() {
  // Verifica se é mobile (tela menor que 768px)
  const isMobile = window.innerWidth <= 768;

  // Em mobile: move 100% por card (1 card visível)
  // Em desktop: move 50% por card (2 cards visíveis)
  const offset = isMobile ? revCurrent * 100 : revCurrent * 50;

  revTrack.style.transform = `translateX(-${offset}%)`;

  // Atualiza os pontinhos
  [...revDotsEl.children].forEach((dot, index) => {
    dot.classList.toggle('active', index === revCurrent);
  });
}

// Avança ou volta uma avaliação
function moveReview(dir) {
  revCurrent = (revCurrent + dir + revTotal) % revTotal;
  updateReview();
}

// Vai direto para uma avaliação específica
function goReview(index) {
  revCurrent = index;
  updateReview();
}

// Recalcula o offset quando a janela é redimensionada
// (garante comportamento correto ao girar o celular, por exemplo)
window.addEventListener('resize', updateReview);


/* ════════════════════════════════════════════════════════
   MENU HAMBÚRGUER (mobile)

   Ao clicar no botão ☰:
   1. Adiciona classe "open" ao botão → CSS anima as linhas em X
   2. Adiciona classe "open" ao menu lateral → CSS desliza para dentro
   3. Adiciona classe "open" ao overlay → CSS mostra o fundo escuro
   4. Bloqueia rolagem do body (overflow: hidden) para não rolar por baixo

   Ao fechar (clicar no X, no overlay, ou num link):
   Tudo isso é revertido.
════════════════════════════════════════════════════════ */

// Pega os elementos do menu
const hamburger = document.getElementById('hamburger'); // botão ☰
const mobileNav = document.getElementById('mobileNav'); // gaveta lateral
const overlay   = document.getElementById('overlay');   // fundo escuro

// Função que ABRE o menu
function openMenu() {
  hamburger.classList.add('open'); // anima o botão em X
  mobileNav.classList.add('open'); // desliza o menu para dentro
  overlay.classList.add('open');   // mostra o fundo escuro
  document.body.style.overflow = 'hidden'; // impede rolagem da página
  hamburger.setAttribute('aria-expanded', 'true'); // acessibilidade
}

// Função que FECHA o menu
// Chamada pelo overlay, pelos links do menu, e pelo botão ao clicar de novo
function closeMenu() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = ''; // libera a rolagem novamente
  hamburger.setAttribute('aria-expanded', 'false'); // acessibilidade
}

// Ao clicar no botão hambúrguer: abre se fechado, fecha se aberto
hamburger.addEventListener('click', () => {
  // classList.contains verifica se a classe já existe
  if (hamburger.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});


/* ════════════════════════════════════════════════════════
   ANIMAÇÃO DE ENTRADA (SCROLL REVEAL)

   IntersectionObserver é uma API moderna do browser que
   "observa" elementos e avisa quando eles entram na área
   visível da tela — sem precisar ficar calculando scroll.

   Quando um elemento com class="reveal" entra na tela:
   → Adicionamos class="visible" → o CSS ativa a animação
   → Paramos de observar aquele elemento (unobserve)
     para não repetir a animação.
════════════════════════════════════════════════════════ */

// Pega todos os elementos que devem ter animação de entrada
const revEls = document.querySelectorAll('.reveal');

// Cria o observador API
const observer = new IntersectionObserver(

  // Callback: executado quando um elemento entra ou sai da tela
  (entries) => {
    entries.forEach(entry => {
      // entry.isIntersecting = true quando o elemento está na tela
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // ativa a animação no CSS
        observer.unobserve(entry.target);      // para de observar (anima só uma vez)
      }
    });
  },

  // Opções do observador
  { threshold: 0.12 } // dispara quando 12% do elemento está visível
);

// Começa a observar cada elemento com class="reveal"
revEls.forEach(el => observer.observe(el));


/* ════════════════════════════════════════════════════════
   DESTAQUE DO LINK ATIVO NO MENU

   Conforme o usuário rola a página, o link do menu
   correspondente à seção atual recebe a classe "active".
   O CSS pode usar isso para destacar visualmente o link.
   (O estilo do link ativo pode ser adicionado no style.css
   com: .desktop-nav a.active { color: var(--teal); })
════════════════════════════════════════════════════════ */

// Pega todas as seções que têm id (são os destinos dos links)
const sections = document.querySelectorAll('section[id], div[id]');

// Pega todos os links do menu (desktop e mobile)
const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav nav a');

// Cria um observador para as seções
const navObserver = new IntersectionObserver(

  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Para cada link, verifica se o href bate com o id da seção visível
        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', isActive);
        });
      }
    });
  },

  { threshold: 0.4 } // dispara quando 40% da seção está visível
);

// Começa a observar cada seção
sections.forEach(section => navObserver.observe(section));

function toggleSubCategories() {
  const subCategories = document.querySelector('.subCategorias');
  const categories = document.getElementById('categoriasLink');

  categories.style.borderBottom === 'none'
  subCategories.style.display = subCategories.style.display === 'block' ? 'none' : 'block';
}

function toggleCategories(){
  // Toggle visibility of all category cards that use the `hidden` class.
  const cards = document.querySelectorAll('.hidden');
  cards.forEach(card => {
    card.style.display = card.style.display === 'flex' ? 'none' : 'flex';
  });
}