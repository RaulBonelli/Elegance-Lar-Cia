const CATEGORY_LABELS = {
    todas: 'Todos os Produtos',
    banquetas: 'Banquetas',
    cadeiras: 'Cadeiras',
    conjuntos: 'Conjuntos',
    mesas: 'Mesas',
    poltronas: 'Poltronas',
    puffs: "Puff's",
    chaise: 'Chaise',
    espreguicadeiras: 'Espreguiçadeiras',
    ninhos: 'Ninhos',
    ombrelones: 'Ombrelones',
    sofas: 'Sofás',
};

// Lê a categoria ativa diretamente do botão marcado como "active" no HTML.
// Assim cada página (cadeiras.html, mesas.html…) funciona automaticamente
// sem precisar alterar este arquivo.
const activeBtnEl = document.querySelector('.cat-btn.active');
let activeCat = activeBtnEl ? activeBtnEl.getAttribute('data-cat') : 'todas';

// RENDERIZAÇÃO (Apenas Filtro de Visibilidade e Animação)
function renderProducts(cat) {
    const cards = document.querySelectorAll('.product-card');
    const emptyState = document.getElementById('emptyState');
    let visibleCount = 0;
    document.getElementById('activeTitle').textContent = CATEGORY_LABELS[cat] || cat;

    // Remove animações antigas e aplica o display flex ou none
    cards.forEach(card => {
        card.classList.remove('visible');
        if (cat === 'todas' || card.getAttribute('data-cat') === cat) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Mostra ou esconde a mensagem de "vazio"
    emptyState.style.display = visibleCount === 0 ? 'block' : 'none';

    // Aplica a animação em cascata (stagger) apenas nos visíveis
    let delayIndex = 0;
    cards.forEach(card => {
        if (card.style.display === 'flex') {
            card.style.transitionDelay = `${delayIndex * 60}ms`;
            requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
            delayIndex++;
        }
    });

    // ✅ FIX 2: Atualiza o botão "active" no menu para refletir a categoria atual.
    // Antes isso nunca acontecia, então o destaque ficava sempre no botão original do HTML.
    document.querySelectorAll('.cat-btn, .cat-all').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
    });
    document.querySelectorAll('#sidebarList a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('data-cat') === cat);
    });
}

/* ---- EVENTOS DOS CARDS (Cores e Lightbox) ---- */
function bindCardEvents() {
    // Troca de cores da imagem
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', function () {
            const card = this.closest('.product-card');
            const imgEl = card.querySelector('.card-img-wrap img');
            const zoomBtn = card.querySelector('.card-zoom');
            const newImgSrc = this.getAttribute('data-img');

            if (imgEl && newImgSrc) {
                imgEl.src = newImgSrc;
                if (zoomBtn) zoomBtn.setAttribute('data-img', newImgSrc);
            }

            // Atualiza estilo da bolinha ativa
            card.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Abrir Lightbox
    document.querySelectorAll('.card-zoom').forEach(btn => {
        btn.addEventListener('click', function () {
            document.getElementById('lightboxImg').src = this.getAttribute('data-img');
            document.getElementById('lightbox').classList.add('open');
        });
    });
}

/* ---- HAMBURGER / SIDEBAR MOBILE ---- */
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarClose = document.getElementById('sidebarClose');

function openSidebar() { sidebar.classList.add('open'); overlay.classList.add('open'); hamburger.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('open'); hamburger.classList.remove('open'); document.body.style.overflow = ''; }

hamburger.addEventListener('click', () => sidebar.classList.contains('open') ? closeSidebar() : openSidebar());
overlay.addEventListener('click', closeSidebar);
sidebarClose.addEventListener('click', closeSidebar);

/* ---- FECHAR LIGHTBOX ---- */
document.getElementById('lightboxClose').addEventListener('click', () => document.getElementById('lightbox').classList.remove('open'));
document.getElementById('lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') document.getElementById('lightbox').classList.remove('open'); });

/* ---- SOMBRA DO CABEÇALHO AO ROLAR A TELA ---- */
window.addEventListener('scroll', () => {
    document.querySelector('.header').style.boxShadow =
        window.scrollY > 10 ? '0 4px 24px rgba(30,16,85,0.12)' : '0 2px 20px rgba(30,16,85,0.07)';
});

/* ---- INICIALIZAÇÃO DA PÁGINA ---- */
bindCardEvents();       // Ativa os cliques uma única vez
renderProducts(activeCat); // Desenha a categoria lida do HTML
