/* LIFE FLOW — util.js
   Utilitários: aleatoriedade semeável, texto, base64url, codec deflate,
   assinatura FNV dupla, DOM, toasts, modais, caixa de código. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.VERSION = '1.0.0'; // LIFE FLOW
  DF.WHATSAPP = '5522999585058';

  // ---------- diagnóstico de boot ----------
  if (typeof window !== 'undefined') {
    window.addEventListener('error', function (e) {
      try {
        if (document.body && !document.body.dataset.boot) {
          document.body.dataset.boot = 'ERR: ' + (e.message || 'erro') + ' @' +
            String(e.filename || '').split('/').pop() + ':' + e.lineno;
        }
      } catch (_) { /* ignore */ }
    });
  }

  // ---------- aleatoriedade ----------
  DF.mulberry = function (seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  };
  DF.fnv = function (s, seed) {
    s = String(s);
    let h = (seed === undefined ? 2166136261 : seed) >>> 0;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  };
  DF.pick = function (arr, r) { return arr[Math.floor((r || Math.random)() * arr.length)]; };
  DF.pickN = function (arr, n, r) {
    const a = arr.slice(), out = [];
    while (a.length && out.length < n) out.push(a.splice(Math.floor((r || Math.random)() * a.length), 1)[0]);
    return out;
  };
  DF.shuffle = function (arr, r) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor((r || Math.random)() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };
  DF.clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

  // ---------- texto ----------
  DF.norm = function (s) {
    return String(s == null ? '' : s).toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[.,!?;:'"()¿¡’‘“”`´\-\/]/g, ' ')
      .replace(/\s+/g, ' ').trim();
  };
  DF.lev = function (a, b) {
    a = String(a); b = String(b);
    if (a === b) return 0;
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    let prev = new Array(n + 1), cur = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      cur[0] = i;
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      const t = prev; prev = cur; cur = t;
    }
    return prev[n];
  };
  DF.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  DF.fmtDate = function (d) {
    const x = d ? new Date(d) : new Date();
    return String(x.getDate()).padStart(2, '0') + '/' + String(x.getMonth() + 1).padStart(2, '0') + '/' + x.getFullYear();
  };
  DF.todayKey = function () {
    const x = new Date();
    return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
  };

  // ---------- base64url ----------
  DF.bytesB64 = function (u8) {
    let s = '';
    for (let i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i]);
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  };
  DF.b64Bytes = function (b) {
    b = String(b).replace(/-/g, '+').replace(/_/g, '/');
    while (b.length % 4) b += '=';
    const s = atob(b), u = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i);
    return u;
  };
  DF.b64e = function (s) { return DF.bytesB64(new TextEncoder().encode(s)); };
  DF.b64d = function (b) { return new TextDecoder().decode(DF.b64Bytes(b)); };

  // ---------- assinatura FNV dupla (salt exclusivo do LIFE FLOW) ----------
  const SALT = 'LF-FORLIFE//o-bairro-que-cresce//12-lugares';
  DF.sign = function (str) {
    const a = DF.fnv(str, 0x811c9dc5);
    const b = DF.fnv(str + SALT, (0x01000193 ^ 0x9e3779b9) >>> 0);
    return (a.toString(16).padStart(8, '0') + b.toString(16).padStart(8, '0')).slice(0, 12);
  };
  DF.canon = function (payload) {
    const keys = Object.keys(payload).filter(function (k) { return k !== 'sig'; }).sort();
    return keys.map(function (k) { return k + '=' + JSON.stringify(payload[k]); }).join('&');
  };

  // ---------- codec de códigos (deflate quando disponível) ----------
  DF.pack = async function (obj, prefix) {
    const json = JSON.stringify(obj);
    let body = null, mode = 'P';
    if (typeof CompressionStream !== 'undefined') {
      try {
        const cs = new CompressionStream('deflate-raw');
        const stream = new Blob([new TextEncoder().encode(json)]).stream().pipeThrough(cs);
        const buf = await new Response(stream).arrayBuffer();
        body = DF.bytesB64(new Uint8Array(buf)); mode = 'C';
      } catch (e) { body = null; }
    }
    if (!body) body = DF.b64e(json);
    return prefix + '.' + mode + '.' + body;
  };
  DF.unpack = async function (code, prefix) {
    code = String(code || '').trim().replace(/\s+/g, '');
    const parts = code.split('.');
    if (parts[0] !== prefix || parts.length < 3) throw new Error('bad-format');
    const mode = parts[1], body = parts.slice(2).join('.');
    let json;
    if (mode === 'C') {
      const ds = new DecompressionStream('deflate-raw');
      const stream = new Blob([DF.b64Bytes(body)]).stream().pipeThrough(ds);
      json = await new Response(stream).text();
    } else {
      json = DF.b64d(body);
    }
    return JSON.parse(json);
  };

  // ---------- DOM ----------
  DF.$ = function (sel, base) { return (base || document).querySelector(sel); };
  DF.$$ = function (sel, base) { return Array.prototype.slice.call((base || document).querySelectorAll(sel)); };
  DF.el = function (tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };

  // ---------- toast ----------
  DF.toast = function (msg, opts) {
    opts = opts || {};
    const box = DF.$('#toasts');
    if (!box) return;
    const t = DF.el('div', 'toast', msg);
    box.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('show'); });
    setTimeout(function () {
      t.classList.remove('show');
      setTimeout(function () { t.remove(); }, 400);
    }, opts.ms || 3400);
  };

  // ---------- modal ----------
  DF.modal = function (opts) {
    opts = opts || {};
    const back = DF.el('div', 'modal-back');
    const box = DF.el('div', 'modal-box' + (opts.cls ? ' ' + opts.cls : ''));
    if (opts.title) box.appendChild(DF.el('div', 'modal-title', opts.title));
    const body = DF.el('div', 'modal-body');
    if (typeof opts.html === 'string') body.innerHTML = opts.html;
    else if (opts.html) body.appendChild(opts.html);
    box.appendChild(body);
    const btns = DF.el('div', 'modal-btns');
    (opts.buttons || [{ label: 'OK', cls: 'primary' }]).forEach(function (b) {
      const bt = DF.el('button', 'btn ' + (b.cls || 'primary'), b.label);
      bt.onclick = function () {
        if (DF.AU) DF.AU.sfx('click');
        if (!b.keep) close();
        if (b.cb) b.cb();
      };
      btns.appendChild(bt);
    });
    box.appendChild(btns);
    back.appendChild(box);
    document.body.appendChild(back);
    function close() {
      back.classList.add('out');
      setTimeout(function () { back.remove(); }, 220);
    }
    if (!opts.locked) {
      back.addEventListener('pointerdown', function (e) { if (e.target === back) close(); });
    }
    requestAnimationFrame(function () { back.classList.add('in'); });
    return { close: close, body: body, box: box };
  };

  // ---------- copiar / caixa de código ----------
  DF.copyText = async function (txt) {
    try { await navigator.clipboard.writeText(txt); return true; } catch (e) { /* fallback */ }
    try {
      const ta = DF.el('textarea');
      ta.value = txt;
      ta.style.cssText = 'position:fixed;opacity:0;left:-999px';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch (e) { return false; }
  };
  DF.codeBox = function (code, opts) {
    opts = opts || {};
    const wrap = DF.el('div', 'code-wrap');
    const ta = DF.el('textarea', 'code-box');
    ta.value = code;
    ta.readOnly = true;
    ta.rows = opts.rows || 4;
    ta.onclick = function () { ta.select(); };
    wrap.appendChild(ta);
    const row = DF.el('div', 'row gap');
    const cb = DF.el('button', 'btn primary', '📋 Copiar');
    cb.onclick = async function () {
      const ok = await DF.copyText(code);
      cb.textContent = ok ? '✅ Copiado!' : '⚠️ Toque no código e copie';
      setTimeout(function () { cb.textContent = '📋 Copiar'; }, 2000);
    };
    row.appendChild(cb);
    if (opts.wa) {
      const wa = DF.el('a', 'btn wa', '💬 WhatsApp');
      wa.href = opts.waTo
        ? 'https://wa.me/' + opts.waTo + '?text=' + encodeURIComponent(opts.wa)
        : 'https://wa.me/?text=' + encodeURIComponent(opts.wa);
      wa.target = '_blank';
      row.appendChild(wa);
    }
    wrap.appendChild(row);
    return wrap;
  };

  DF.vibrate = function (ms) {
    try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* ignore */ }
  };
})(typeof window !== 'undefined' ? window : globalThis);
