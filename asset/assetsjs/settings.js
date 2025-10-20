(() => {
  const root = document.documentElement;

  const bgm = document.getElementById('bgm');
  const clickSound = document.getElementById('clickSound');
  const toggleBtn = document.getElementById('soundToggle');
  const muteBtn = document.getElementById('muteBtn');

  let soundEnabled = localStorage.getItem('soundEnabled');
  soundEnabled = soundEnabled !== 'false';

  function applySoundState() {
    if (soundEnabled) {
      toggleBtn.textContent = '🔊';
      muteBtn.textContent = 'Matikan Suara';
      bgm.play().catch(()=>{});
    } else {
      toggleBtn.textContent = '🔇';
      muteBtn.textContent = 'Nyalakan Suara';
      bgm.pause();
    }
  }

  document.addEventListener('click', ()=>{
    if(bgm.paused && soundEnabled) {
      bgm.volume = 0.4;
      bgm.play().catch(()=>{});
    }
  },{once:true});

  toggleBtn.addEventListener('click', ()=>{
    soundEnabled = !soundEnabled;
    localStorage.setItem('soundEnabled', soundEnabled);
    playClick();
    applySoundState();
  });

  muteBtn.addEventListener('click', ()=>{
    soundEnabled = !soundEnabled;
    localStorage.setItem('soundEnabled', soundEnabled);
    playClick();
    applySoundState();
  });

  function playClick() {
    if (!soundEnabled) return;
    clickSound.currentTime = 0;
    clickSound.play().catch(()=>{});
  }

  // Terapkan tema dari localStorage bila ada
  const savedTheme = localStorage.getItem('theme') || 'pink';
  setTheme(savedTheme);

  function setTheme(name) {
    if (name === 'pink') {
      root.style.setProperty('--bg', '#ffe4ec');
      root.style.setProperty('--card', '#ffffff');
      root.style.setProperty('--accent', '#ff9fc2');
      root.style.setProperty('--text', '#333');
      root.style.setProperty('--shadow', 'rgba(0,0,0,0.2)');
    } else if (name === 'green') {
      root.style.setProperty('--bg', '#e8ffe8');
      root.style.setProperty('--card', '#ffffff');
      root.style.setProperty('--accent', '#88e188');
      root.style.setProperty('--text', '#333');
      root.style.setProperty('--shadow', 'rgba(0,0,0,0.2)');
    } else if (name === 'blue') {
      root.style.setProperty('--bg', '#e0f3ff');
      root.style.setProperty('--card', '#ffffff');
      root.style.setProperty('--accent', '#72baf2');
      root.style.setProperty('--text', '#333');
      root.style.setProperty('--shadow', 'rgba(0,0,0,0.2)');
    } else if (name === 'yellow') {
      root.style.setProperty('--bg', '#fff8d1');
      root.style.setProperty('--card', '#ffffff');
      root.style.setProperty('--accent', '#ffd966');
      root.style.setProperty('--text', '#333');
      root.style.setProperty('--shadow', 'rgba(0,0,0,0.2)');
    }
    localStorage.setItem('theme', name);
  }

  // Event tema
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', ()=>{
      const themeName = btn.dataset.theme;
      setTheme(themeName);
      playClick();
    });
  });

  // Tambahkan efek klik + redirect ke semua tombol .btn yang punya href
  document.querySelectorAll('.btn[href]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      playClick();
      const href = btn.getAttribute('href');
      setTimeout(()=>{ window.location.href = href; },150);
    });
  });

  applySoundState();
})();
