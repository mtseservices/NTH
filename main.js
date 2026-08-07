/* =================================================================
   NATURAL TASTE HAI — MAIN APP LOGIC (multi-page)
   ================================================================= */

/* ---------- Inline SVG icon library (no external image requests) ---------- */
const ICONS = {
  bottle: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M26 6h12v9l6 8v33a3 3 0 0 1-3 3H23a3 3 0 0 1-3-3V23l6-8V6Z"/><path d="M24 6h16M23 27h18M23 34h18"/></svg>`,
  jar: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="16" y="18" width="32" height="38" rx="6"/><path d="M22 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6"/><path d="M16 30h32M20 12h24"/></svg>`,
  glass: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 10h24l-3 40a4 4 0 0 1-4 4H27a4 4 0 0 1-4-4L20 10Z"/><path d="M21.6 22h20.8M32 10v-4"/></svg>`,
  pickle: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="14" y="14" width="36" height="42" rx="10"/><path d="M14 26h36M20 14V9a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v5M24 34v10M32 34v14M40 34v10"/></svg>`,
  almond: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M32 6C20 16 14 30 20 44c3 7 8 12 12 14 4-2 9-7 12-14 6-14 0-28-12-38Z"/><path d="M32 16v34"/></svg>`,
  spice: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="12" y="20" width="40" height="34" rx="4"/><path d="M12 30h40M22 20v-6h20v6"/><circle cx="24" cy="40" r="1.6" fill="currentColor" stroke="none"/><circle cx="32" cy="44" r="1.6" fill="currentColor" stroke="none"/><circle cx="40" cy="38" r="1.6" fill="currentColor" stroke="none"/><circle cx="30" cy="36" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  seedling: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22v-9M12 13c0-5-4-8-9-8 0 5 4 8 9 8Zm0 0c0-4 3-6 7-6 0 4-3 6-7 6Z"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.6 4.2 5.7 4.2 9S14.8 18.4 12 21c-2.8-2.6-4.2-5.7-4.2-9S9.2 5.6 12 3Z"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v6c0 5-3 8.5-7 9-4-.5-7-4-7-9V6l7-3Z"/><path d="M9 12l2 2 4-4"/></svg>`,
  whatsapp: `<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.02 3C9.4 3 4 8.36 4 15c0 2.4.7 4.63 1.9 6.51L4 29l7.68-1.85A11.9 11.9 0 0 0 16.02 27C22.65 27 28 21.64 28 15S22.65 3 16.02 3Zm0 21.6c-2 0-3.86-.55-5.45-1.5l-.39-.23-4.55 1.1 1.13-4.43-.25-.4a9.6 9.6 0 1 1 9.51 5.46Zm5.4-7.2c-.29-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.29-.76.96-.93 1.16-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.02c.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.75-.72 2-1.41.24-.7.24-1.29.17-1.41-.07-.13-.27-.2-.56-.35Z"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
  bot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M8.5 4h7"/><circle cx="9" cy="14" r="1.3" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.3" fill="currentColor" stroke="none"/><path d="M9 18h6"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s7-7.4 7-13a7 7 0 1 0-14 0c0 5.6 7 13 7 13Z"/><circle cx="12" cy="9" r="2.4"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5c0 8.3 6.7 15 15 15l3-4-6-3-2 2c-2-1-4-3-5-5l2-2-3-6-4 3Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m4 20 1-4.5L16 4.5 19.5 8 8.5 19 4 20Z"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8h3l2-2h6l2 2h3v11H4V8Z"/><circle cx="12" cy="13" r="3.4"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`
};

const el = (sel, root=document) => root.querySelector(sel);
const els = (sel, root=document) => Array.from(root.querySelectorAll(sel));
function escapeHtml(str=''){
  return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

/* ================================================================
   SITE CHROME: header, footer, floating actions, modals
   Injected on every page via placeholder divs so markup lives in
   one place. Active nav page comes from <body data-page="...">.
   ================================================================ */
const NAV_ITEMS = [
  { page: 'home', href: 'index.html', label: 'Home' },
  { page: 'about', href: 'about.html', label: 'About' },
  { page: 'portfolio', href: 'portfolio.html', label: 'Portfolio' },
  { page: 'products', href: 'products.html', label: 'Products' },
  { page: 'gallery', href: 'gallery.html', label: 'Gallery' },
  { page: 'contact', href: 'contact.html', label: 'Contact' }
];

function headerHTML(activePage){
  const desktopLinks = NAV_ITEMS.map(n => `<a href="${n.href}" class="${n.page===activePage?'active':''}">${n.label}</a>`).join('');
  const mobileLinks = NAV_ITEMS.map(n => `<a href="${n.href}" class="${n.page===activePage?'active':''}">${n.label}</a>`).join('');
  return `
  <div class="topbar">
    <div class="container">
      <div class="topbar-links">
        <a data-cfg-href="tel" href="#"><span data-cfg="phoneDisplay"></span></a>
        <span>|</span>
        <a data-cfg-href="mail" href="#"><span data-cfg="email"></span></a>
      </div>
      <div class="topbar-links"><span data-cfg="address"></span></div>
    </div>
  </div>
  <header class="site-header">
    <div class="container nav-row">
      <a href="index.html" class="brand">
        <img src="assets/images/logo.jpg" alt="Natural Taste Hai logo" />
        <span class="brand-text"><b>Natural Taste Hai</b><small>Premium Food Collection</small></span>
      </a>
      <nav class="main-nav">${desktopLinks}</nav>
      <div class="header-actions">
        <a href="products.html" class="btn btn-gold btn-sm">Explore Products</a>
        <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
      <div class="mobile-panel" id="mobilePanel">
        ${mobileLinks}
        <a href="contact.html" class="btn btn-gold">Get In Touch</a>
      </div>
    </div>
  </header>`;
}

function footerHTML(){
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand-text"><b>Natural Taste Hai</b><small>Premium Food Collection</small></div>
          <p>Crafting honest, premium Pakistani food — sauces, jams, juices, syrups, pickles, dry fruits &amp; spices — from Faisalabad to your table.</p>
        </div>
        <div class="footer-col">
          <h5>Explore</h5>
          <a href="about.html">About Us</a>
          <a href="portfolio.html">Portfolio</a>
          <a href="products.html">Products</a>
          <a href="gallery.html">Gallery</a>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <a href="contact.html">Contact</a>
          <a href="contact.html">Distributor Enquiry</a>
          <a href="portfolio.html">Certifications</a>
        </div>
        <div class="footer-col">
          <h5>Reach Us</h5>
          <span data-cfg="address" style="opacity:.85;"></span>
          <a data-cfg-href="mail" data-cfg="email" href="#"></a>
          <a data-cfg-href="tel" data-cfg="phoneDisplay" href="#"></a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span id="yearNow"></span> Natural Taste Hai. All rights reserved.</span>
        <span>Faisalabad, Pakistan</span>
      </div>
    </div>
  </footer>`;
}

function floatingHTML(){
  return `
  <a class="fab-wa" id="fabWa" href="#" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICONS.whatsapp}</a>
  <button class="fab-ai" id="fabAi" aria-label="Open NTH Concierge Assistant">${ICONS.bot}</button>
  <div class="chat-panel" id="chatPanel">
    <div class="chat-head">
      <span class="dot"></span>
      <div><b>NTH Concierge</b><small>Smart assistant &middot; instant answers</small></div>
      <button class="chat-close" id="chatClose">${ICONS.close}</button>
    </div>
    <div class="chat-body" id="chatBody"></div>
    <div class="chip-row" id="chipRow"></div>
    <form class="chat-input" id="chatForm">
      <input type="text" id="chatInput" placeholder="Ask about products, price, delivery..." autocomplete="off" />
      <button type="submit">${ICONS.send}</button>
    </form>
  </div>`;
}

function modalsHTML(){
  return `
  <div class="modal-overlay" id="gateOverlay">
    <div class="modal" style="max-width:380px;">
      <div class="modal-head">
        <h3>Manage Products</h3>
        <button id="gateClose">${ICONS.close}</button>
      </div>
      <form id="gateForm">
        <div class="modal-body">
          <div class="passcode-box">
            <p style="font-size:.85rem;color:var(--stone);margin-bottom:14px;">Enter the admin passcode to add, edit or remove products.</p>
            <input type="password" id="gateInput" placeholder="********" required />
            <p class="err-text" id="gateErr">Incorrect passcode. Please try again.</p>
          </div>
        </div>
        <div class="modal-foot"><button type="submit" class="btn btn-gold" style="width:100%;">Unlock</button></div>
      </form>
    </div>
  </div>

  <div class="modal-overlay" id="productModalOverlay">
    <div class="modal">
      <div class="modal-head">
        <h3 id="pm_title">Add New Product</h3>
        <button id="productModalClose">${ICONS.close}</button>
      </div>
      <form id="productForm">
        <div class="modal-body">
          <input type="hidden" id="pm_id" />
          <input type="hidden" id="pm_imageData" />
          <div class="field">
            <label>Product Photo (optional)</label>
            <div class="upload-row">
              <div class="upload-preview" id="pm_imgPreview">${ICONS.camera}</div>
              <div>
                <button type="button" class="btn btn-outline on-light btn-sm file-btn">
                  Upload Photo <input type="file" id="pm_imageFile" accept="image/*" />
                </button>
                <div style="font-size:.7rem;color:var(--stone);margin-top:6px;">JPG/PNG, ideally square, under 2MB</div>
              </div>
            </div>
          </div>
          <div class="field"><label>Product Name</label><input type="text" id="pm_name" required placeholder="e.g. Peach Nectar" /></div>
          <div class="form-row">
            <div class="field"><label>Category</label><select id="pm_category" required></select></div>
            <div class="field"><label>Price (PKR)</label><input type="number" id="pm_price" required min="0" placeholder="299" /></div>
          </div>
          <div class="field"><label>Packaging</label><input type="text" id="pm_packaging" required placeholder="e.g. 1 Litre Bottle" /></div>
          <div class="field"><label>Description</label><textarea id="pm_desc" required placeholder="Short product description..."></textarea></div>
          <div class="field"><label>Key Features (comma separated)</label><input type="text" id="pm_features" placeholder="No Preservatives, Rich in Vitamin C" /></div>
          <div class="form-row">
            <div class="field"><label>Icon (used if no photo)</label>
              <select id="pm_icon">
                <option value="bottle">Bottle</option>
                <option value="jar">Jar</option>
                <option value="glass">Glass / Juice</option>
                <option value="pickle">Pickle Jar</option>
                <option value="almond">Dry Fruit</option>
                <option value="spice">Spice Box</option>
              </select>
            </div>
            <div class="field"><label>Card Color</label>
              <select id="pm_swatch">
                <option value="oxblood">Oxblood Red</option>
                <option value="ivory">Ivory Gold</option>
                <option value="berry">Berry Maroon</option>
                <option value="amber">Amber</option>
                <option value="emerald">Emerald</option>
                <option value="olive">Olive Gold</option>
                <option value="walnut">Walnut Brown</option>
                <option value="terracotta">Terracotta</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-foot"><button type="submit" class="btn btn-gold">Save Product</button></div>
      </form>
    </div>
  </div>`;
}

function injectChrome(){
  const page = document.body.dataset.page || 'home';
  const h = el('#chrome-header'); if (h) h.innerHTML = headerHTML(page);
  const f = el('#chrome-footer'); if (f) f.innerHTML = footerHTML();
  const fl = el('#chrome-floating'); if (fl) fl.innerHTML = floatingHTML();
  const m = el('#chrome-modals'); if (m) m.innerHTML = modalsHTML();
}

/* ---------- Header / mobile nav behaviour (after injection) ---------- */
function initHeader(){
  const burger = el('#hamburger');
  const panel = el('#mobilePanel');
  if (!burger || !panel) return;
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    panel.classList.toggle('open');
  });
  els('.mobile-panel a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open'); panel.classList.remove('open');
  }));
  const onScroll = () => {
    const header = el('header.site-header');
    if (header) header.style.boxShadow = window.scrollY > 10 ? '0 10px 30px -18px rgba(0,0,0,.6)' : 'none';
  };
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
}

/* ---------- Scroll reveal ---------- */
function initReveal(){
  const items = els('.reveal');
  if (!items.length) return;
  if (typeof IntersectionObserver === 'undefined'){
    items.forEach(i => i.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold:.15 });
  items.forEach(i => io.observe(i));
}

/* ---------- Count-up stats ---------- */
function initCounters(){
  const nodes = els('.stat b[data-count]');
  if (typeof IntersectionObserver === 'undefined'){
    nodes.forEach(node => { node.textContent = node.dataset.count + (node.dataset.suffix||''); });
    return;
  }
  nodes.forEach(node => {
    const target = parseInt(node.dataset.count, 10);
    const suffix = node.dataset.suffix || '';
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const dur = 1400; const t0 = performance.now();
        function step(t){
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1-p, 3);
          node.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold:.4 });
    io.observe(node);
  });
}

/* ---------- Video local-first fallback ---------- */
function initVideoFallback(){
  els('video[data-remote]').forEach(v => {
    v.addEventListener('error', () => {
      if (v.dataset.remote && v.src.indexOf(v.dataset.remote) === -1) v.src = v.dataset.remote;
    }, true);
    setTimeout(() => { if (v.readyState === 0 && v.dataset.remote) v.src = v.dataset.remote; }, 1200);
  });
}

function wireVideo(videoEl, sourceEl, cfgEntry){
  if (!videoEl || !cfgEntry) return;
  videoEl.dataset.remote = cfgEntry.remote;
  (sourceEl || videoEl.querySelector('source')).src = cfgEntry.local;
  videoEl.load();
}

/* ================================================================
   PRODUCTS: render, filter, manage (add/edit/delete via localStorage)
   ================================================================ */
const STORAGE_KEY = 'nth_custom_products_v1';

function getCustomProducts(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch(e){ return []; }
}
function saveCustomProducts(list){ localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); }
function getAllProducts(){ return [...DEFAULT_PRODUCTS, ...getCustomProducts()]; }

let activeCategory = 'All';
let manageMode = false;

function money(n){ return 'Rs. ' + Number(n).toLocaleString('en-PK'); }

function productCard(p, isCustom){
  const swatchVar = `--sw-${p.swatch || 'oxblood'}`;
  const icon = ICONS[p.icon] || ICONS.jar;
  const photoSrc = p.imageData || p.image || '';
  const photoTag = photoSrc ? `<img class="real-photo" src="${photoSrc}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.remove()" />` : '';
  const feats = (p.features||[]).slice(0,3).map(f => `<li>${escapeHtml(f)}</li>`).join('');
  const manageBtns = manageMode ? `
    <div class="card-actions">
      ${isCustom ? `<button class="icon-btn" data-edit="${p.id}" title="Edit">${ICONS.edit}</button>
      <button class="icon-btn danger" data-del="${p.id}" title="Delete">${ICONS.trash}</button>` : `<span style="font-size:.7rem;color:var(--stone);align-self:center;">Default item</span>`}
    </div>` : '';
  const waNum = SITE_CONFIG.whatsapp[0].number;
  const waMsg = encodeURIComponent(`Assalam o Alaikum, mujhe "${p.name}" ke baare mein maloomat chahiye.`);
  return `
  <article class="product-card">
    <div class="product-media" style="--sw:var(${swatchVar})">
      <div class="ring"></div>
      ${icon}
      ${photoTag}
      <span class="cat-tag">${escapeHtml(p.category)}</span>
    </div>
    <div class="product-body">
      <h3>${escapeHtml(p.name)}</h3>
      <span class="pack">${escapeHtml(p.packaging||'')}</span>
      <p class="desc">${escapeHtml(p.description||'')}</p>
      <ul class="feat-list">${feats}</ul>
      <div class="price-row">
        <div class="price">${money(p.price)}<small>per unit</small></div>
        <a class="btn btn-wa btn-sm" href="https://wa.me/${waNum}?text=${waMsg}" target="_blank" rel="noopener">${ICONS.whatsapp} Enquire</a>
      </div>
    </div>
    ${manageBtns}
  </article>`;
}

function renderProducts(){
  const grid = el('#productGrid');
  if (!grid) return;
  const custom = getCustomProducts();
  const all = getAllProducts();
  const filtered = activeCategory === 'All' ? all : all.filter(p => p.category === activeCategory);
  if (!filtered.length){
    grid.innerHTML = `<div class="empty-note">No products in this category yet. ${manageMode ? 'Use "Add Product" to create one.' : ''}</div>`;
    return;
  }
  grid.innerHTML = filtered.map(p => productCard(p, custom.some(c => c.id === p.id))).join('');

  if (manageMode){
    els('[data-del]', grid).forEach(btn => btn.addEventListener('click', () => {
      if (!confirm('Delete this product?')) return;
      saveCustomProducts(getCustomProducts().filter(p => p.id !== btn.dataset.del));
      renderProducts();
    }));
    els('[data-edit]', grid).forEach(btn => btn.addEventListener('click', () => openProductModal(btn.dataset.edit)));
  }
}

function renderFilters(){
  const row = el('#filterRow');
  if (!row) return;
  row.innerHTML = PRODUCT_CATEGORIES.map(c =>
    `<button class="filter-pill ${c===activeCategory?'active':''}" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`
  ).join('');
  els('[data-cat]', row).forEach(btn => btn.addEventListener('click', () => {
    activeCategory = btn.dataset.cat;
    renderFilters(); renderProducts();
  }));
}

/* ---------- Featured products (Home page preview) ---------- */
function renderFeatured(){
  const grid = el('#featuredGrid');
  if (!grid) return;
  const featuredIds = ['p1','p4','p5'];
  const all = getAllProducts();
  const items = all.filter(p => featuredIds.includes(p.id));
  grid.innerHTML = items.map(p => productCard(p, false)).join('');
}

/* ---------- Manage mode gate + modal ---------- */
function initManage(){
  const manageBtn = el('#manageToggle');
  if (!manageBtn) return;
  const gateOverlay = el('#gateOverlay');
  const gateInput = el('#gateInput');
  const gateErr = el('#gateErr');
  const gateForm = el('#gateForm');
  const gateClose = el('#gateClose');

  const setManageBtnLabel = (label) => { manageBtn.innerHTML = `<span>${ICONS.lock}</span> ${label}`; };
  setManageBtnLabel('Manage Products');

  manageBtn.addEventListener('click', () => {
    if (manageMode){
      manageMode = false;
      setManageBtnLabel('Manage Products');
      renderProducts(); renderAddBtn();
      return;
    }
    gateOverlay.classList.add('open');
    gateInput.value=''; gateErr.classList.remove('show'); gateInput.focus();
  });
  gateClose.addEventListener('click', () => gateOverlay.classList.remove('open'));
  gateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (gateInput.value === SITE_CONFIG.adminPasscode){
      manageMode = true;
      setManageBtnLabel('Exit Manage Mode');
      gateOverlay.classList.remove('open');
      renderProducts(); renderAddBtn();
    } else {
      gateErr.classList.add('show');
    }
  });
}

function renderAddBtn(){
  const wrap = el('#addProductWrap');
  if (!wrap) return;
  wrap.innerHTML = manageMode ? `<button class="btn btn-outline on-light" id="addProductBtn">+ Add New Product</button>` : '';
  const b = el('#addProductBtn');
  if (b) b.addEventListener('click', () => openProductModal());
}

function openProductModal(editId){
  const overlay = el('#productModalOverlay');
  const form = el('#productForm');
  form.reset();
  el('#pm_id').value = editId || '';
  el('#pm_imageData').value = '';
  el('#pm_imgPreview').innerHTML = ICONS.camera;
  el('#pm_title').textContent = editId ? 'Edit Product' : 'Add New Product';
  if (editId){
    const p = getCustomProducts().find(x => x.id === editId);
    if (p){
      el('#pm_name').value = p.name;
      el('#pm_category').value = p.category;
      el('#pm_price').value = p.price;
      el('#pm_packaging').value = p.packaging;
      el('#pm_desc').value = p.description;
      el('#pm_features').value = (p.features||[]).join(', ');
      el('#pm_icon').value = p.icon;
      el('#pm_swatch').value = p.swatch;
      if (p.imageData){
        el('#pm_imageData').value = p.imageData;
        el('#pm_imgPreview').innerHTML = `<img src="${p.imageData}" alt="" />`;
      }
    }
  }
  overlay.classList.add('open');
}

function initProductForm(){
  const form = el('#productForm');
  if (!form) return;
  el('#productModalClose').addEventListener('click', () => el('#productModalOverlay').classList.remove('open'));

  const fileInput = el('#pm_imageFile');
  fileInput.addEventListener('change', () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024){
      alert('Please choose an image under 2MB.');
      fileInput.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      el('#pm_imageData').value = reader.result;
      el('#pm_imgPreview').innerHTML = `<img src="${reader.result}" alt="" />`;
    };
    reader.readAsDataURL(file);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = el('#pm_id').value || ('c' + Date.now());
    const product = {
      id,
      name: el('#pm_name').value.trim(),
      category: el('#pm_category').value,
      price: Number(el('#pm_price').value) || 0,
      packaging: el('#pm_packaging').value.trim(),
      description: el('#pm_desc').value.trim(),
      features: el('#pm_features').value.split(',').map(s=>s.trim()).filter(Boolean),
      icon: el('#pm_icon').value,
      swatch: el('#pm_swatch').value,
      imageData: el('#pm_imageData').value || null
    };
    let list = getCustomProducts();
    const idx = list.findIndex(p => p.id === id);
    if (idx > -1) list[idx] = product; else list.push(product);
    saveCustomProducts(list);
    el('#productModalOverlay').classList.remove('open');
    renderProducts();
  });
}

/* ================================================================
   CONTACT FORM
   ================================================================ */
function initContactForm(){
  const form = el('#contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: el('#cf_name').value,
      phone: el('#cf_phone').value,
      email: el('#cf_email').value,
      message: el('#cf_message').value,
      date: new Date().toISOString()
    };
    const list = JSON.parse(localStorage.getItem('nth_inquiries') || '[]');
    list.push(data);
    localStorage.setItem('nth_inquiries', JSON.stringify(list));
    el('#contactSuccess').classList.add('show');
    form.reset();
    const waNum = SITE_CONFIG.whatsapp[0].number;
    const msg = encodeURIComponent(`Assalam o Alaikum, mera naam ${data.name} hai.\n${data.message}`);
    el('#cf_whatsappSend').href = `https://wa.me/${waNum}?text=${msg}`;
  });
}

/* ================================================================
   CONFIG -> DOM (contact info, certifications, stats, timeline, videos)
   ================================================================ */
function applyConfigToDOM(){
  els('[data-cfg]').forEach(node => {
    const path = node.dataset.cfg.split('.');
    let v = SITE_CONFIG;
    path.forEach(k => v = v?.[k]);
    if (v !== undefined) node.textContent = v;
  });
  els('[data-cfg-href]').forEach(node => {
    const key = node.dataset.cfgHref;
    if (key === 'tel') node.href = 'tel:' + SITE_CONFIG.whatsapp[0].number;
    if (key === 'mail') node.href = 'mailto:' + SITE_CONFIG.email;
  });

  const waWrap = el('#waButtonsWrap');
  if (waWrap){
    waWrap.innerHTML = SITE_CONFIG.whatsapp.map(w => `
      <a class="wa-btn" href="https://wa.me/${w.number}" target="_blank" rel="noopener">
        ${ICONS.whatsapp}
        <span><b>${escapeHtml(w.label)}</b><span>${escapeHtml(w.display)}</span></span>
      </a>`).join('');
  }
  const fabWa = el('#fabWa');
  if (fabWa) fabWa.href = `https://wa.me/${SITE_CONFIG.whatsapp[0].number}`;
  const heroWaBtn = el('#heroWaBtn');
  if (heroWaBtn) heroWaBtn.href = `https://wa.me/${SITE_CONFIG.whatsapp[0].number}`;

  const certWrap = el('#certGrid');
  if (certWrap){
    certWrap.innerHTML = SITE_CONFIG.certifications.map(c => `
      <div class="cert-card">${ICONS.shield}<b>${escapeHtml(c.code)}</b><p>${escapeHtml(c.desc)}</p></div>`).join('');
  }
  const tickerWrap = el('#tickerTrack');
  if (tickerWrap){
    const items = SITE_CONFIG.certifications.map(c => `<span>${escapeHtml(c.code)} Certified</span>`);
    tickerWrap.innerHTML = [...items, ...items].join('');
  }
  const statWrap = el('#statGrid');
  if (statWrap){
    statWrap.innerHTML = SITE_CONFIG.stats.map(s => `
      <div class="stat"><b data-count="${s.value}" data-suffix="${s.suffix}">0</b><span>${escapeHtml(s.label)}</span></div>`).join('');
  }
  const tlWrap = el('#timelineWrap');
  if (tlWrap){
    tlWrap.innerHTML = SITE_CONFIG.timeline.map(t => `
      <div class="tl-item"><b>${escapeHtml(t.year)}</b><p>${escapeHtml(t.text)}</p></div>`).join('');
  }
  const hoursWrap = el('#hoursWrap');
  if (hoursWrap){
    hoursWrap.innerHTML = SITE_CONFIG.hours.map(h => `<div>${escapeHtml(h.days)}: <b>${escapeHtml(h.time)}</b></div>`).join('');
  }

  wireVideo(el('#heroVideo'), el('#heroVideoSrc'), SITE_CONFIG.video.hero);
  wireVideo(el('#aboutVideo'), el('#aboutVideoSrc'), SITE_CONFIG.video.about);
  const showcase = els('.showcase-video');
  const showcaseCfg = ['sauce','jam','almonds','spices'];
  showcase.forEach((v, i) => wireVideo(v, v.querySelector('source'), SITE_CONFIG.video[showcaseCfg[i]] || SITE_CONFIG.video.about));

  const mapFrame = el('#mapFrame');
  if (mapFrame) mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(SITE_CONFIG.mapQuery)}&output=embed`;

  const y = el('#yearNow'); if (y) y.textContent = new Date().getFullYear();

  const sel = el('#pm_category');
  if (sel) sel.innerHTML = PRODUCT_CATEGORIES.filter(c => c !== 'All').map(c => `<option value="${c}">${c}</option>`).join('');

  els('.seal-icon').forEach(s => s.innerHTML = ICONS.seedling);
}

/* ================================================================
   INIT
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  injectChrome();
  applyConfigToDOM();
  initHeader();
  initReveal();
  initCounters();
  initVideoFallback();
  renderFilters();
  renderProducts();
  renderFeatured();
  initManage();
  renderAddBtn();
  initProductForm();
  initContactForm();
  if (window.NTHAssistant) window.NTHAssistant.init();
});
