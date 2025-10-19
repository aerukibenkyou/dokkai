// name.js
(() => {
  const input = document.getElementById('playerName');
  const saveBtn = document.getElementById('saveBtn');
  const skipBtn = document.getElementById('skipBtn');

  // isi input jika sudah ada nama
  const stored = localStorage.getItem('playerName');
  if (stored) input.value = stored;

  saveBtn.addEventListener('click', () => {
    const name = input.value.trim();
    if (!name) {
      alert('Masukkan nama terlebih dahulu (atau klik Lewati).');
      return;
    }
    localStorage.setItem('playerName', name);
    alert('Nama disimpan: ' + name);
    //window.location.href = 'index.html';
  });

  skipBtn.addEventListener('click', () => {
    // Lewati tanpa menyimpan, kembali ke menu utama
    window.location.href = 'index.html';
  });
})();
