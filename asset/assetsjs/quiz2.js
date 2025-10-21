// quiz.js (Benar / Salah)
(() => {
  // Soal True/False
  // correct: true = pernyataan benar, false = salah
const QUESTIONS = [
  {
    q: "1) （　　） サッカーを すると ストレスが ふえます。",
    correct: false   // biasanya olahraga mengurangi stres
  },
  {
    q: "2) （　　） 日本の ポップスを よく聞きます。",
    correct: true
  },
  {
    q: "3) （　　） 音楽を 聞くと つかれます。",
    correct: false   // biasanya musik menyegarkan / menenangkan
  },
  {
    q: "4) （　　） これから ピアノを ひきたいと 思っています。",
    correct: true
  },
  {
    q: "5) （　　） サッカーと 音楽で たくさんの 人と 出会いたいです。",
    correct: true
  }
];


  const container = document.getElementById('quizContainer');
  const selections = new Array(QUESTIONS.length).fill(null);

  QUESTIONS.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.style.marginBottom = '12px';
    div.style.padding = '10px';

    div.innerHTML = `<strong>Soal ${idx+1}.</strong><div style="margin-top:8px">${item.q}</div>`;

    const opts = document.createElement('div');
    opts.className = 'options';
    opts.style.marginTop = '8px';
    opts.style.display = 'flex';
    opts.style.gap = '8px';

    const trueBtn = document.createElement('button');
    trueBtn.type = 'button';
    trueBtn.innerHTML = '〇 正しい';
    trueBtn.style.padding = '10px 14px';
    trueBtn.style.borderRadius = '8px';
    trueBtn.dataset.val = 'true';

    const falseBtn = document.createElement('button');
    falseBtn.type = 'button';
    falseBtn.innerHTML = '× 間違い';
    falseBtn.style.padding = '10px 14px';
    falseBtn.style.borderRadius = '8px';
    falseBtn.dataset.val = 'false';

    function select(val, btn) {
      // suara klik (jika fungsi ada)
      if (typeof window.playClick === 'function') window.playClick();

      selections[idx] = val;

      // reset style
      [trueBtn, falseBtn].forEach(b => {
        b.style.border = '2px solid transparent';
        b.style.background = '';
        b.style.fontWeight = 'normal';
      });

      btn.style.border = '2px solid var(--accent)';
      btn.style.background = 'white';
      btn.style.fontWeight = '700';
    }

    trueBtn.addEventListener('click', () => select(true, trueBtn));
    falseBtn.addEventListener('click', () => select(false, falseBtn));

    opts.appendChild(trueBtn);
    opts.appendChild(falseBtn);
    div.appendChild(opts);
    container.appendChild(div);
  });

  document.getElementById('submitQuiz').addEventListener('click', () => {
    let score = 0;
    const answers = [];

    selections.forEach((sel, idx) => {
      answers.push(sel);
      if (sel === QUESTIONS[idx].correct) {
        score += 20;
      }
    });

    const playerName = localStorage.getItem('playerName') || '';
    if (!playerName) {
      if (confirm('Nama belum diisi. Ke halaman isi nama sekarang?')) {
        window.location.href = 'name.html';
        return;
      }
    }

    const entry = {
      nama: playerName || 'Anonymous',
      tipe: 'Quiz Dokkai 2 (TF)',
      score,
      max: 100,
      detail: answers,
      tanggal: new Date().toISOString()
    };

    const raw = localStorage.getItem('scores');
    const arr = raw ? JSON.parse(raw) : [];
    arr.push(entry);
    localStorage.setItem('scores', JSON.stringify(arr));

    alert(`Nama: ${entry.nama}\nSkor: ${score}/${entry.max}\nHasil tersimpan di scoreboard.`);
    window.location.href = 'scoreboard.html';
  });
})();
