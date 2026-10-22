/* APP.JS  -  faz a página funcionar (idiomas, lista, janela da foto).
   Não é preciso mexer neste ficheiro para mudar preços ou fotografias. */

(function () {
  /* ---------- language ---------- */
  var LANGS = ['pt', 'en', 'fr', 'es'];
  var lang = 'pt';
  try {
    var saved = localStorage.getItem('barometro-lang');
    if (saved && LANGS.indexOf(saved) > -1) lang = saved;
    else {
      var nav = ((navigator.language || 'pt') + '').slice(0, 2).toLowerCase();
      if (LANGS.indexOf(nav) > -1) lang = nav;
    }
  } catch (e) {
    var nav2 = ((navigator.language || 'pt') + '').slice(0, 2).toLowerCase();
    if (LANGS.indexOf(nav2) > -1) lang = nav2;
  }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CAM = '<svg class="cam" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function eur(p) { return p + ' €'; }

  /* ---------- photo sheet ---------- */
  var sheet = document.getElementById('sheet');
  var scrim = document.getElementById('scrim');
  var closeBtn = document.getElementById('sheet-close');
  var photoArt = document.getElementById('photo-art');
  var photoImg = document.getElementById('photo-img');
  var capEl = document.getElementById('sheet-cap');
  var lastTrigger = null;

  function openSheet(item, trigger) {
    lastTrigger = trigger || null;
    document.getElementById('sheet-title').textContent = item.n[lang];
    document.getElementById('sheet-price').textContent = eur(item.p);
    var d = document.getElementById('sheet-desc');
    if (item.d) { d.textContent = item.d[lang]; d.hidden = false; } else { d.hidden = true; }
    photoArt.innerHTML = '<svg viewBox="0 0 200 150" role="img" aria-label="' + item.n[lang].replace(/"/g, '&quot;') + '">' + item.a + '</svg>';
    capEl.textContent = UI.cap[lang];
    capEl.hidden = false;
    closeBtn.setAttribute('aria-label', UI.close[lang]);

    // real photo: drop fotos/<name>.jpg next to the page and it replaces the illustration
    photoImg.hidden = true;
    photoImg.onload = function () { photoImg.hidden = false; capEl.hidden = true; };
    photoImg.onerror = function () { photoImg.hidden = true; };
    photoImg.alt = item.n[lang];
    photoImg.src = 'fotos/' + item.k + '.jpg';

    scrim.hidden = false;
    sheet.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function closeSheet() {
    if (sheet.hidden) return;
    sheet.hidden = true;
    scrim.hidden = true;
    document.documentElement.style.overflow = '';
    photoImg.removeAttribute('src');
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  }
  closeBtn.addEventListener('click', closeSheet);
  scrim.addEventListener('click', closeSheet);
  document.addEventListener('keydown', function (e) {
    if (sheet.hidden) return;
    if (e.key === 'Escape') closeSheet();
    else if (e.key === 'Tab') { e.preventDefault(); closeBtn.focus(); }
  });

  /* ---------- render ---------- */
  function render() {
    document.documentElement.lang = lang;

    document.getElementById('tagline').textContent = UI.tagline[lang];
    document.getElementById('sub').textContent = UI.sub[lang];
    document.getElementById('hint').textContent = UI.hint[lang];
    document.getElementById('vat').textContent = UI.vat[lang];

    var buttons = document.querySelectorAll('.lang');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', buttons[i].getAttribute('data-lang') === lang ? 'true' : 'false');
    }

    var chips = document.getElementById('chips');
    chips.textContent = '';
    CATS.forEach(function (c) {
      var b = el('button', 'chip', c.t[lang]);
      b.type = 'button';
      b.addEventListener('click', function () {
        var target = document.getElementById('c-' + c.id);
        if (target) target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      });
      chips.appendChild(b);
    });

    var sp = document.getElementById('specials');
    sp.textContent = '';
    SPECIALS.forEach(function (s) {
      var card = el('button', 'special');
      card.type = 'button';
      var text = el('div', 'special-text');
      text.appendChild(el('p', 'eyebrow', UI.special[lang]));
      var h = el('h3', null, s.n[lang]);
      h.insertAdjacentHTML('beforeend', CAM);
      text.appendChild(h);
      text.appendChild(el('p', null, s.d[lang]));
      card.appendChild(text);
      card.appendChild(el('span', 'price', eur(s.p)));
      card.addEventListener('click', function () { openSheet(s, card); });
      sp.appendChild(card);
    });

    var menu = document.getElementById('menu');
    menu.textContent = '';
    CATS.forEach(function (c) {
      var sec = el('section', 'sec');
      sec.id = 'c-' + c.id;
      sec.appendChild(el('h2', null, c.t[lang]));
      var ul = el('ul', 'items');
      c.items.forEach(function (x) {
        var li = el('li');
        var row = el('button', 'row');
        row.type = 'button';
        var name = el('span', 'name', x.n[lang]);
        name.insertAdjacentHTML('beforeend', CAM);
        row.appendChild(name);
        row.appendChild(el('span', 'leader'));
        row.appendChild(el('span', 'price', eur(x.p)));
        if (x.d) row.appendChild(el('span', 'desc', x.d[lang]));
        row.addEventListener('click', function () { openSheet(x, row); });
        li.appendChild(row);
        ul.appendChild(li);
      });
      sec.appendChild(ul);
      menu.appendChild(sec);
    });
  }

  document.querySelector('.langs').addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('.lang') : null;
    if (!b) return;
    lang = b.getAttribute('data-lang');
    try { localStorage.setItem('barometro-lang', lang); } catch (err) {}
    render();
  });

  render();

  var needle = document.getElementById('needle');
  function setNeedle(a) { needle.setAttribute('transform', 'translate(200 197) rotate(' + a + ')'); }
  if (!reduce) {
    var t0 = null, FROM = -40, TO = 28, DUR = 1500;
    var step = function (ts) {
      if (t0 === null) t0 = ts;
      var k = Math.min((ts - t0) / DUR, 1);
      var e = 1 - Math.pow(1 - k, 3);
      setNeedle(FROM + (TO - FROM) * e);
      if (k < 1) requestAnimationFrame(step);
    };
    setNeedle(FROM);
    requestAnimationFrame(step);
  }
})();
