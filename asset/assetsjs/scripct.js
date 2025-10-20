const settingsPanel = document.getElementById('settingsPanel');
const soundToggle = document.getElementById('soundToggle');
const closeSettings = document.getElementById('closeSettings');
const muteBtn = document.getElementById('muteBtn');

const bgm = document.getElementById('bgm');
const clickSound = document.getElementById('clickSound');

let soundEnabled = true;

// Tampilkan panel pengaturan
soundToggle.addEventListener('click', () => {
  settingsPanel.classList.remove('hidden');
});

// Tutup panel
closeSettings.addEventListener('click', () => {
  settingsPanel.classList.add('hidden');
});

// Mute / Unmute
muteBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  muteBtn.textContent = soundEnabled ? "On" : "Off";
  if (soundEnabled) {
    bgm.play().catch(()=>{});
  } else {
    bgm.pause();
  }
  playClick();
});

// Play klik
function playClick() {
  if (!soundEnabled) return;
  clickSound.currentTime = 0;
  clickSound.play().catch(()=>{});
}

// Klik tombol menu dengan suara + delay
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    playClick();
    const href = btn.getAttribute('href');
    setTimeout(() => {
      window.location.href = href;
    }, 150);
  });
});

// === Ganti Tema ===
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;

    if (theme === 'pink') {
      document.documentElement.style.setProperty('--bg', '#FFE6EF');
      document.documentElement.style.setProperty('--card', '#FFD1E0');
      document.documentElement.style.setProperty('--accent', '#F7BFD8');
      document.documentElement.style.setProperty('--click', '#F59ABF');
      document.documentElement.style.setProperty('--shadow', '#F4B5C9');
    }
    else if (theme === 'green') {
      document.documentElement.style.setProperty('--bg', '#E6FFE9');
      document.documentElement.style.setProperty('--card', '#C9FFD1');
      document.documentElement.style.setProperty('--accent', '#A5F7B7');
      document.documentElement.style.setProperty('--click', '#7FEF93');
      document.documentElement.style.setProperty('--shadow', '#B2F4C2');
    }
    else if (theme === 'blue') {
      document.documentElement.style.setProperty('--bg', '#E6F5FF');
      document.documentElement.style.setProperty('--card', '#D1ECFF');
      document.documentElement.style.setProperty('--accent', '#BFE2F7');
      document.documentElement.style.setProperty('--click', '#9ACDF5');
      document.documentElement.style.setProperty('--shadow', '#B5DFF4');
    }
    else if (theme === 'yellow') {
      document.documentElement.style.setProperty('--bg', '#FFF9E6');
      document.documentElement.style.setProperty('--card', '#FFF1C9');
      document.documentElement.style.setProperty('--accent', '#F7E2A5');
      document.documentElement.style.setProperty('--click', '#F5D07F');
      document.documentElement.style.setProperty('--shadow', '#F4E1B5');
    }

    playClick();
  });
});
