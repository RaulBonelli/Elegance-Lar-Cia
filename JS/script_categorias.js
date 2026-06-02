/* catalogo.js — lógica das páginas de categoria */

const CATEGORY_LABELS = {
    todas:            'Todos os Produtos',
    banquetas:        'Banquetas',
    cadeiras:         'Cadeiras',
    conjuntos:        'Conjuntos',
    mesas:            'Mesas',
    poltronas:        'Poltronas',
    puffs:            "Puff's",
    chaises:          'Chaises',
    espreguicadeiras: 'Espreguiçadeiras',
    ninhos:           'Ninhos',
    ombrelones:       'Ombrelones',
    sofas:            'Sofás',
};

/* ── Lê a categoria ativa diretamente do <a class="active-link"> no HTML.
   Cada página marca seu próprio link com active-link, então este
   arquivo funciona igual em banquetas.html, cadeiras.html, etc.     ── */
const activeLinkEl = document.querySelector('.cat-nav > a > button.active-link');
const activeCat = activeLinkEl
    ? activeLinkEl.getAttribute('data-cat')
    : 'todas';

/* ── RENDERIZAÇÃO: filtra os cards e atualiza o título da página ── */
function renderProducts(cat) {
    const cards      = document.querySelectorAll('.product-card');
    const emptyState = document.getElementById('emptyState');
    let visibleCount = 0;

    /* Atualiza o título (ex: "BANQUETAS") usando o mapa de labels.
       Se a chave não existir no mapa usa o próprio valor do data-cat. */
    document.getElementById('activeTitle').textContent =
        CATEGORY_LABELS[cat] || cat;

    /* Mostra ou esconde cada card conforme a categoria */
    cards.forEach(card => {
        card.classList.remove('visible');
        if (cat === 'todas' || card.getAttribute('data-cat') === cat) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    /* Mensagem de lista vazia */
    emptyState.style.display = visibleCount === 0 ? 'block' : 'none';

    /* Animação em cascata nos cards visíveis */
    let delayIndex = 0;
    cards.forEach(card => {
        if (card.style.display === 'flex') {
            card.style.transitionDelay = `${delayIndex * 60}ms`;
            requestAnimationFrame(() =>
                requestAnimationFrame(() => card.classList.add('visible'))
            );
            delayIndex++;
        }
    });
}


/* ── EVENTOS DOS CARDS: dots de cor e lightbox ── */
function bindCardEvents() {
    /* Troca de imagem pelos dots de cor */
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', function () {
            const card      = this.closest('.product-card');
            const imgEl     = card.querySelector('.card-img-wrap img');
            const zoomBtn   = card.querySelector('.card-zoom');
            const newImgSrc = this.getAttribute('data-img');

            if (imgEl && newImgSrc) {
                imgEl.src = newImgSrc;
                if (zoomBtn) zoomBtn.setAttribute('data-img', newImgSrc);
            }

            card.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });

    /* Abrir lightbox ao clicar no botão de zoom */
    document.querySelectorAll('.card-zoom').forEach(btn => {
        btn.addEventListener('click', function () {
            document.getElementById('lightboxImg').src = this.getAttribute('data-img');
            document.getElementById('lightbox').classList.add('open');
        });
    });
}


/* ── HAMBURGER / SIDEBAR MOBILE ── */
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


/* ── FECHAR LIGHTBOX ── */
document.getElementById('lightboxClose').addEventListener('click', () =>
    document.getElementById('lightbox').classList.remove('open')
);
document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target.id === 'lightbox')
        document.getElementById('lightbox').classList.remove('open');
});


/* ── SOMBRA DO HEADER AO ROLAR ── */
window.addEventListener('scroll', () => {
    /* Aponta para .header-principal (novo nome do wrapper do header) */
    const headerEl = document.querySelector('.header-principal');
    if (headerEl) {
        headerEl.style.boxShadow = window.scrollY > 10
            ? '0 4px 24px rgba(30,16,85,0.12)'
            : 'none';
    }
});


/* ── INICIALIZAÇÃO ── */
bindCardEvents();        /* ativa cliques nos cards */
renderProducts(activeCat); /* exibe os produtos e o título corretos */