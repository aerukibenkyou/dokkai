// scoreboard.js
(() => {
  const list = document.getElementById('scoreList');
  const resetBtn = document.getElementById('resetBtn');
  const emptyMsg = document.getElementById('emptyMsg');

  function render() {
    const raw = localStorage.getItem('scores');
    const arr = raw ? JSON.parse(raw) : [];
    // urut berdasarkan tanggal terbaru
    arr.sort((a,b) => new Date(b.tanggal) - new Date(a.tanggal));
    list.innerHTML = '';
    if (!arr.length) {
      emptyMsg.classList.remove('hidden');
      return;
    } else {
      emptyMsg.classList.add('hidden');
    }

    arr.forEach(item => {
      const li = document.createElement('li');
      // tampilkan: Nama — Tipe — Skor — Tanggal
      const date = new Date(item.tanggal);
      const dateStr = date.toLocaleString('id-ID', {year:'numeric',month:'short',day:'numeric', hour:'2-digit',minute:'2-digit'});
      li.innerHTML = `
        <div style="font-size:1.05rem;margin-bottom:6px">${item.nama} — <strong>${item.tipe}</strong></div>
        <div style="font-size:1.15rem">${item.score}/${item.max}</div>
        <div style="margin-top:8px;font-size:0.9rem;color:rgba(0,0,0,0.45)">${dateStr}</div>
      `;
      list.appendChild(li);
    });
  }

  resetBtn.addEventListener('click', () => {
    if (!confirm('Hapus semua skor dari localStorage?')) return;
    localStorage.removeItem('scores');
    render();
  });

  // jika ada tombol home di header (id homeBtn) tunggu linknya
  const home = document.getElementById('homeBtn');
  if (home) home.addEventListener('click', (e) => {
    // nothing special; default link
  });

  render();
})();
