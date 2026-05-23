/* =====================================================
   Elegance Lar & Cia — Catálogo de Produtos
   script.js
   ===================================================== */

/* ===================== DATA: PRODUTOS =====================
   Como personalizar:
   - Substitua as URLs em "img" e "colors[].img" pelas fotos reais dos produtos
   - Atualize "whatsapp" e "shopee" com os links reais de cada produto
   - Adicione ou remova objetos do array conforme necessário
   ========================================================== */
const PRODUCTS = [

  // ---- BANQUETAS ----
  {
    id: 1, cat: 'banquetas', name: 'Banqueta Corda',
    img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop',
    colors: [
      { hex: '#3a5a40', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop' },
      { hex: '#b5838d', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
      { hex: '#6d6875', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop' },
      { hex: '#c9a84c', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 450,00', promoPrice: 'R$ 327,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Banqueta%20Corda',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },
  {
    id: 2, cat: 'banquetas', name: 'Banqueta',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
    colors: [
      { hex: '#d4a574', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
      { hex: '#2c3e50', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop' },
      { hex: '#8b7355', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop' },
      { hex: '#c0c0c0', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 450,00', promoPrice: 'R$ 327,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Banqueta',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },
  {
    id: 3, cat: 'banquetas', name: 'Banqueta Quadrada',
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop',
    colors: [
      { hex: '#1a1a2e', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop' },
      { hex: '#6b8cba', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop' },
      { hex: '#a0522d', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
      { hex: '#2d5a27', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 450,00', promoPrice: 'R$ 327,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Banqueta%20Quadrada',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },
  {
    id: 4, cat: 'banquetas', name: 'Banqueta Quadrada',
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop',
    colors: [
      { hex: '#2c2c2c', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop' },
      { hex: '#8b7355', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
      { hex: '#c9a84c', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop' },
      { hex: '#3a5a40', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 450,00', promoPrice: 'R$ 380,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Banqueta%20Quadrada',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },
  {
    id: 5, cat: 'banquetas', name: 'Banqueta',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop',
    colors: [
      { hex: '#5c3d2e', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop' },
      { hex: '#d4a574', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
      { hex: '#2c3e50', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop' },
      { hex: '#c0c0c0', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 450,00', promoPrice: 'R$ 327,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Banqueta',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },
  {
    id: 6, cat: 'banquetas', name: 'Banqueta',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    colors: [
      { hex: '#4a2c2a', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop' },
      { hex: '#8b7355', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop' },
      { hex: '#c9a84c', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
      { hex: '#1a1a2e', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 450,00', promoPrice: 'R$ 327,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Banqueta',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },
  {
    id: 7, cat: 'banquetas', name: 'Banqueta Itália',
    img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop',
    colors: [
      { hex: '#c0392b', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop' },
      { hex: '#2c3e50', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop' },
      { hex: '#c9a84c', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop' },
      { hex: '#3a5a40', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 450,00', promoPrice: 'R$ 450,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Banqueta%20It%C3%A1lia',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },
  {
    id: 8, cat: 'banquetas', name: 'Banqueta Itália',
    img: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop',
    colors: [
      { hex: '#1a1a2e', img: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop' },
      { hex: '#c0392b', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop' },
      { hex: '#8b7355', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop' },
      { hex: '#d4a574', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 450,00', promoPrice: 'R$ 400,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Banqueta%20It%C3%A1lia',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },

  // ---- CADEIRAS ----
  {
    id: 9, cat: 'cadeiras', name: 'Cadeira Alumínio',
    img: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=400&h=400&fit=crop',
    colors: [
      { hex: '#c0c0c0', img: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=400&h=400&fit=crop' },
      { hex: '#1a1a2e', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop' },
      { hex: '#c9a84c', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
      { hex: '#3a5a40', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 520,00', promoPrice: 'R$ 389,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Cadeira%20Alum%C3%ADnio',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },
  {
    id: 10, cat: 'cadeiras', name: 'Cadeira Luxo',
    img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=400&fit=crop',
    colors: [
      { hex: '#8b7355', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=400&fit=crop' },
      { hex: '#2c3e50', img: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=400&h=400&fit=crop' },
      { hex: '#c9a84c', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
      { hex: '#3a5a40', img: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 580,00', promoPrice: 'R$ 420,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Cadeira%20Luxo',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },

  // ---- CONJUNTOS ----
  {
    id: 11, cat: 'conjuntos', name: 'Conjunto Garden',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=400&fit=crop',
    colors: [
      { hex: '#3a5a40', img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=400&fit=crop' },
      { hex: '#1a1a2e', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop' },
      { hex: '#c9a84c', img: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 1.800,00', promoPrice: 'R$ 1.350,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20no%20Conjunto%20Garden',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },

  // ---- MESAS ----
  {
    id: 12, cat: 'mesas', name: 'Mesa de Centro',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
    colors: [
      { hex: '#c0c0c0', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
      { hex: '#1a1a2e', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop' },
      { hex: '#c9a84c', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 850,00', promoPrice: 'R$ 620,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Mesa%20de%20Centro',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },

  // ---- POLTRONAS ----
  {
    id: 13, cat: 'poltronas', name: 'Poltrona Elegance',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    colors: [
      { hex: '#c0392b', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop' },
      { hex: '#2c3e50', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop' },
      { hex: '#c9a84c', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 750,00', promoPrice: 'R$ 549,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Poltrona%20Elegance',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },

  // ---- PUFF'S ----
  {
    id: 14, cat: 'puffs', name: "Puff Redondo",
    img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop',
    colors: [
      { hex: '#c0392b', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop' },
      { hex: '#1a1a2e', img: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 350,00', promoPrice: 'R$ 249,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20no%20Puff%20Redondo',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },

  // ---- CHAISE ----
  {
    id: 15, cat: 'chaise', name: 'Chaise Longue',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=400&fit=crop',
    colors: [
      { hex: '#8b7355', img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=400&fit=crop' },
      { hex: '#c0392b', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 980,00', promoPrice: 'R$ 749,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20no%20Chaise%20Longue',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },

  // ---- ESPREGUIÇADEIRAS ----
  {
    id: 16, cat: 'espreguicadeiras', name: 'Espreguiçadeira Pool',
    img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop',
    colors: [
      { hex: '#1a1a2e', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop' },
      { hex: '#c0c0c0', img: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=400&h=400&fit=crop' },
    ],
    originalPrice: 'R$ 680,00', promoPrice: 'R$ 499,00',
    whatsapp: 'https://wa.me/5519997742852?text=Tenho%20interesse%20na%20Espreguicadeira%20Pool',
    shopee: 'https://shopee.com.br/SEU_PERFIL',
  },
];

/* ===================== CATEGORY LABELS ===================== */
const CATEGORY_LABELS = {
  todas:           'Todos os Produtos',
  banquetas:       'Banquetas',
  cadeiras:        'Cadeiras',
  conjuntos:       'Conjuntos',
  mesas:           'Mesas',
  poltronas:       'Poltronas',
  puffs:           "Puff's",
  chaise:          'Chaise',
  espreguicadeiras:'Espreguiçadeiras',
};

/* ===================== STATE ===================== */
let activeCat = 'banquetas';

/* ===================== BUILD CARD HTML ===================== */
function buildCard(p) {
  const dots = p.colors.map((c, i) =>
    `<span class="dot${i === 0 ? ' active' : ''}"
      style="background:${c.hex}"
      data-idx="${i}"
      data-pid="${p.id}"></span>`
  ).join('');

  return `
    <div class="product-card" data-cat="${p.cat}" data-pid="${p.id}">
      <div class="card-name">${p.name}</div>
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.name}" id="img-${p.id}" loading="lazy"/>
        <button class="card-zoom" data-img="${p.img}" data-pid="${p.id}" aria-label="Ampliar">
          <i class="fa fa-expand-alt"></i>
        </button>
      </div>
      <div class="card-body">
        <div class="color-dots">${dots}</div>
        <div class="price-wrap">
          <span class="price-original">${p.originalPrice}</span>
          <div class="price-promo">
            <i class="fa fa-scissors scissors"></i>
            <span class="value">${p.promoPrice}</span>
          </div>
          <span class="price-unit">cada</span>
        </div>
        <div class="card-actions">
          <button class="btn-buy">
            <i class="fa fa-shopping-cart"></i>
            <span>Compre Agora</span>
          </button>
          <a href="${p.whatsapp}" target="_blank" rel="noopener" class="btn-wa">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="${p.shopee}" target="_blank" rel="noopener" class="btn-shopee">
            <i class="fas fa-shopping-bag"></i> Shopee
          </a>
        </div>
      </div>
    </div>`;
}

/* ===================== RENDER PRODUCTS ===================== */
function renderProducts(cat) {
  const grid     = document.getElementById('productGrid');
  const filtered = cat === 'todas' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);

  document.getElementById('activeTitle').textContent = CATEGORY_LABELS[cat] || cat;

  grid.innerHTML = filtered.length
    ? filtered.map(buildCard).join('')
    : `<div class="empty-state">
         <i class="fa fa-couch"></i>
         <p>Nenhum produto nesta categoria ainda.</p>
       </div>`;

  /* Stagger fade-in animation */
  const cards = grid.querySelectorAll('.product-card');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 60}ms`;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => card.classList.add('visible'))
    );
  });

  bindCardEvents();
}

/* ===================== CARD EVENTS ===================== */
function bindCardEvents() {

  /* Color dots — troca imagem exibida */
  document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const pid     = +dot.dataset.pid;
      const idx     = +dot.dataset.idx;
      const product = PRODUCTS.find(p => p.id === pid);
      if (!product) return;

      const imgEl  = document.getElementById('img-' + pid);
      if (imgEl) imgEl.src = product.colors[idx].img;

      /* Atualiza botão de zoom */
      const zoomBtn = document.querySelector(`.card-zoom[data-pid="${pid}"]`);
      if (zoomBtn) zoomBtn.dataset.img = product.colors[idx].img;

      /* Marca dot ativo */
      dot.closest('.color-dots')
         .querySelectorAll('.dot')
         .forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  /* Zoom — abre lightbox */
  document.querySelectorAll('.card-zoom').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('lightboxImg').src = btn.dataset.img;
      document.getElementById('lightbox').classList.add('open');
    });
  });
}

/* ===================== CATEGORY SWITCH ===================== */
function setCategory(cat) {
  activeCat = cat;

  /* Atualiza abas do desktop */
  document.querySelectorAll('.cat-btn, .cat-all').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`[data-cat="${cat}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  /* Atualiza sidebar mobile */
  document.querySelectorAll('#sidebarList a').forEach(a => {
    a.classList.toggle('active', a.dataset.cat === cat);
  });

  renderProducts(cat);
}

/* ===================== NAV LISTENERS ===================== */
document.querySelectorAll('.cat-btn, .cat-all').forEach(btn => {
  btn.addEventListener('click', () => setCategory(btn.dataset.cat));
});

document.querySelectorAll('#sidebarList a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    setCategory(a.dataset.cat);
    closeSidebar();
  });
});

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

/* ===================== INIT ===================== */
renderProducts(activeCat);
