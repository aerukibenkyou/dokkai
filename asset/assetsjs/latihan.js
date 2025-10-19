// latihan.js
(() => {
  const QUESTIONS = [
    {
      q: "Di cerita, ke mana tokoh utama pergi?",
      options: ["Sekolah", "Taman", "Perpustakaan", "Kantor"],
      a: 2
    },
    {
      q: "Apa yang membuat tokoh utama merasa tenang?",
      options: ["Hujan deras", "Cahaya dari jendela", "Suara bising", "Makanan enak"],
      a: 1
    }
  ];

  const qContainer = document.getElementById('qContainer');

  QUESTIONS.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `<strong>Soal ${idx+1}.</strong> <div style="margin-top:8px">${item.q}</div>`;
    const opts = document.createElement('div');
    opts.className = 'options';

    item.options.forEach((op, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.innerText = op;
      btn.dataset.q = idx;
      btn.dataset.opt = i;

      btn.addEventListener('click', () => {

        // ✅ MAINKAN SUARA KLIK
        if (typeof playClick === 'function') {
          playClick();
        }

        // Hapus style & selected dari semua opsi
        Array.from(opts.children).forEach(c => {
          c.style.borderColor = 'transparent';
          c.style.background = '';
          c.style.fontWeight = 'normal';
          delete c.dataset.selected;
        });

        // Style untuk opsi yang dipilih
        btn.style.borderColor = 'var(--accent)';
        btn.style.background = 'white';
        btn.style.fontWeight = '700';
        btn.dataset.selected = '1';
      });

      opts.appendChild(btn);
    });

    div.appendChild(opts);
    qContainer.appendChild(div);
  });

  document.getElementById('submitBtn').addEventListener('click', () => {
    let score = 0;
    const answers = [];

    const qDivs = qContainer.querySelectorAll('.question');
    qDivs.forEach((qd, idx) => {
      const btns = qd.querySelectorAll('button');
      let chosen = -1;
      btns.forEach(b => {
        if (b.dataset.selected === '1') chosen = Number(b.dataset.opt);
      });
      answers.push(chosen);

      // ✅ +50 poin jika benar
      if (chosen === QUESTIONS[idx].a) score += 50;
    });

    const playerName = localStorage.getItem('playerName') || '';
    if (!playerName) {
      if (!confirm('Nama belum diisi. Ke halaman isi nama sekarang?')) {
        // lanjut dengan Anonymous
      } else {
        window.location.href = 'name.html';
        return;
      }
    }

    saveScore({
      nama: playerName || 'Anonymous',
      tipe: 'Latihan Dokkai 1',
      score,
      max: 100,
      detail: answers,
      tanggal: new Date().toISOString()
    });

    alert(`Nama: ${playerName || 'Anonymous'}\nSkor: ${score}/100\nHasil tersimpan di scoreboard.`);
    window.location.href = 'scoreboard.html';
  });

  function saveScore(entry) {
    const raw = localStorage.getItem('scores');
    let arr = raw ? JSON.parse(raw) : [];
    arr.push(entry);
    localStorage.setItem('scores', JSON.stringify(arr));
  }
})();
