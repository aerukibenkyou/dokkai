const bgm = document.getElementById('bgm');
const clickSound = document.getElementById('clickSound');
const toggleBtn = document.getElementById('soundToggle');

let soundEnabled = true;

// Autoplay musik setelah klik pertama
document.addEventListener('click', () => {
  if (bgm.paused && soundEnabled) {
    bgm.volume = 0.4;
    bgm.play().catch(() => {});
  }
}, { once: true });

// Mute/unmute
toggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    toggleBtn.textContent = '🔊';
    bgm.play().catch(() => {});
  } else {
    toggleBtn.textContent = '🔇';
    bgm.pause();
  }
  playClick();
});

// Fungsi efek klik
function playClick() {
  if (!soundEnabled) return;
  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
}

// Tambahkan efek suara + delay redirect agar suara terdengar
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
