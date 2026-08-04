/* BUSINESS FLOW — whatsapp.js
   Botões wa.me e modal de tarefas escritas (padrão das Capsules EnglishFlow). */
(function (root) {
  const DF = root.DF = root.DF || {};
  const WA = DF.WA = {};

  WA.link = function (text) {
    return 'https://wa.me/' + DF.WHATSAPP + '?text=' + encodeURIComponent(text);
  };

  WA.btn = function (label, text, cls) {
    const a = DF.el('a', 'btn wa ' + (cls || ''), label || '💬 Enviar no WhatsApp');
    a.href = WA.link(text);
    a.target = '_blank';
    return a;
  };

  // Compartilhar (padrão das cápsulas): abre o seletor nativo do aparelho —
  // quem manda escolhe o app (WhatsApp) E o destino (grupo, contato).
  // Diferente de WA.btn, que manda pra um número FIXO — serve pro aluno
  // enviar áudio pro mentor, não pro professor mandar link pro grupo de
  // um aluno específico. Sem suporte a share (desktop, navegador antigo),
  // cai no seletor de contato do próprio WhatsApp Web.
  WA.shareBtn = function (label, text, opts) {
    opts = opts || {};
    const b = DF.el('button', 'btn wa ' + (opts.cls || ''), label || '📤 Compartilhar');
    b.type = 'button';
    b.onclick = function () {
      if (navigator.share) {
        navigator.share({ text: text, title: opts.title || '' }).catch(function () { /* aluno cancelou */ });
      } else {
        window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
      }
    };
    return b;
  };

  // header padrão das mensagens do jogo
  WA.header = function (secName, unit) {
    const meta = DF.UNITS[unit];
    return '🏢 BUSINESS FLOW · ' + secName + ' ✅ Unit ' + unit + ' — ' + (meta ? meta.name : '');
  };

  // Modal com campos por atividade → envia tudo numa mensagem
  // fields: [{ label, ph, rows? }]
  WA.writingModal = function (opts, onSent) {
    const wrap = DF.el('div');
    if (opts.brief) wrap.appendChild(DF.el('p', 'muted', opts.brief));
    const inputs = [];
    (opts.fields || []).forEach(function (f) {
      wrap.appendChild(DF.el('label', 'lbl', f.label));
      let inp;
      if (f.rows && f.rows > 1) { inp = DF.el('textarea', 'inp'); inp.rows = f.rows; }
      else inp = DF.el('input', 'inp');
      inp.placeholder = f.ph || '';
      inputs.push({ f: f, inp: inp });
      wrap.appendChild(inp);
    });
    wrap.appendChild(DF.el('p', 'wa-note', '🎙️ Após enviar, grave seu áudio e envie aqui também.'));

    const send = DF.el('a', 'btn wa wide', '💬 Enviar para o mentor');
    send.target = '_blank';
    send.href = '#';
    send.onclick = function () {
      const empty = inputs.filter(function (x) { return !x.inp.value.trim(); });
      if (empty.length) {
        DF.toast('Preencha todos os campos antes de enviar. ✍️');
        return false;
      }
      let msg = WA.header(opts.secName, opts.unit) + '\nAluno: ' + (DF.state.name || '—') + '\n';
      inputs.forEach(function (x) {
        msg += '\n▸ ' + x.f.label + '\n' + x.inp.value.trim() + '\n';
      });
      send.href = WA.link(msg);
      if (onSent) setTimeout(onSent, 400);
      return true;
    };
    wrap.appendChild(send);

    return DF.modal({
      title: opts.title || '✍️ Tarefa escrita',
      html: wrap,
      buttons: [{ label: 'Fechar', cls: 'ghost' }]
    });
  };
})(typeof window !== 'undefined' ? window : globalThis);
