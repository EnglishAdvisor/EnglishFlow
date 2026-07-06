/* A Maldição da Cuca — main.js
   Boot: carrega o save, liga os cenários, prepara o áudio no primeiro toque
   (política de autoplay) e liga os botões do título. */
(function () {
  const G = window.G;

  function boot() {
    G.load();
    G.FX.init(document.getElementById('bg'), document.getElementById('fx'));

    // áudio só pode nascer após um gesto do usuário
    let audioReady = false;
    function unlock() {
      if (audioReady) return;
      audioReady = true;
      G.AU.init();
    }
    document.addEventListener('pointerdown', unlock, { once: false });
    document.addEventListener('keydown', unlock, { once: false });

    // botões do título
    G.$('#t-play').onclick = function () {
      G.AU.sfx('click');
      G.go(G.state.storySeen ? 's-map' : 's-story');
    };
    G.$('#t-daily').onclick = function () {
      G.AU.sfx('click');
      if (!G.state.storySeen) { G.go('s-story'); return; }
      G.startDaily();
    };
    G.$('#t-missions').onclick = function () {
      G.AU.sfx('click');
      if (!G.state.name) G.state.name = 'Estudante';
      G.go('s-missions');
    };
    G.$('#t-mentor').onclick = function () {
      G.AU.sfx('click');
      G.go('s-mentor');
    };
    G.$('#t-settings').onclick = function () {
      G.AU.sfx('click');
      G.go('s-settings');
    };

    G.go('s-title');
    document.body.dataset.boot = 'ok';
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
