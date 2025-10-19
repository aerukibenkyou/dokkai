// quiz.js
(() => {
  const QUESTIONS = [
    {
      q: "Apa tujuan tokoh utama ke perpustakaan?",
      options: ["Mencari makanan", "Membaca buku", "Bertemu teman", "Tidur siang"],
      a: 1
    },
    {
      q: "Kata '古い' (ふるい) artinya ...",
      options: ["Baru", "Tua/Kuno", "Besar", "Kecil"],
      a: 1
    },
    {
      q: "Apa yang masuk melalui jendela dalam cerita?",
      options: ["Debu", "Cahaya", "Hujan", "Barang"],
      a: 1
    },
    {
      q: "Perasaan tokoh utama setelah membaca adalah ...",
      options: ["Gembira dan berenergi", "Tenang dan damai", "Marah", "Lapar"],
      a: 1
    },
    {
      q: "Kata '図書館' (としょかん) berarti ...",
      options: ["Taman", "Perpustakaan", "Sekolah", "Klinik"],
      a: 1
    }
  ];

  const container = document.getElementById('quizContainer');

  QUESTIONS.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `<strong>Soal ${idx+1}.</strong><div style="margin-top:8px">${item.q}</div>`;
    const opts = document.createElement('div');
    opts.className = 'options';
    item.options.forEach((op, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.innerText = op;
      btn.dataset.q = idx;
      btn.dataset.opt = i;
      btn.addEventListener('click', () => {
        Array.from(opts.children).forEach(c => c.style.borderColor = 'transparent');
        btn.style.borderColor = 'var(--accent)';
        btn.style.background = 'white';
        btn.style.fontWeight = '700';
        btn.dataset.selected = '1';
      });
      opts.appendChild(btn);
    });
    div.appendChild(opts);
    container.appendChild(div);
  });

  document.getElementById('submitQuiz').addEventListener('click', () => {
    let score = 0;
    const answers = [];
    const qDivs = container.querySelectorAll('.question');
    qDivs.forEach((qd, idx) => {
      const btns = qd.querySelectorAll('button');
      let chosen = -1;
      btns.forEach(b => {
        if (b.dataset.selected === '1') chosen = Number(b.dataset.opt);
      });
      answers.push(chosen);
      if (chosen === QUESTIONS[idx].a) score+=20;
    });

    const playerName = localStorage.getItem('playerName') || '';
    if (!playerName) {
      if (!confirm('Nama belum diisi. Ke halaman isi nama sekarang?')) {
        // continue but use Anonymous
      } else {
        window.location.href = 'name.html';
        return;
      }
    }

    const entry = {
      nama: playerName || 'Anonymous',
      tipe: 'Quiz Dokkai 1',
      score,
      max: 100,
      detail: answers,
      tanggal: new Date().toISOString()
    };

    // simpan
    const raw = localStorage.getItem('scores');
    const arr = raw ? JSON.parse(raw) : [];
    arr.push(entry);
    localStorage.setItem('scores', JSON.stringify(arr));

    alert(`Nama: ${entry.nama}\nSkor: ${score}/${entry.max}\nHasil tersimpan di scoreboard.`);
    window.location.href = 'scoreboard.html';
  });
})();
