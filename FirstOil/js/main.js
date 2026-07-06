/* FIRST OIL — main.js
   Boot: carrega o save, liga os cenários, desbloqueia o áudio no primeiro
   gesto e conecta os botões do título. */
(function () {
  const G = window.G;

  function boot() {
    G.load();
    G.FX.init(document.getElementById('bg'), document.getElementById('fx'));

    let audioReady = false;
    function unlock() {
      if (audioReady) return;
      audioReady = true;
      G.AU.init();
    }
    document.addEventListener('pointerdown', unlock, { once: false });
    document.addEventListener('keydown', unlock, { once: false });

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
      if (!G.state.name) G.state.name = 'Profissional';
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
