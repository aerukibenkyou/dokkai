// latihan-tf.js
(() => {
  /* ============================
     CONFIG: soal (True/False)
     - Masukkan kalimat lengkap (bisa pakai <ruby>..</ruby>)
     - correct: true => pernyataan benar, false => pernyataan salah
  ============================ */
  const QUESTIONS = [
    {
    q: '1. 私の<ruby>趣味(しゅみ)</ruby>は テニスです。　（　）',
    correct: false
  },
  {
    q: '2. まいしゅう ともだちと サッカーを します。　（　）',
    correct: true
  }
    // Tambah soal di sini bila perlu
  ];



  /* ============================
     AUDIO / SOUND SETUP (global-safe)
     Jika elemen audio tidak ada di HTML, fungsi suara akan aman-senyap.
  ============================ */
  const bgm = document.getElementById ? document.getElementById('bgm') : null;
  const clickSound = document.getElementById ? document.getElementById('clickSound') : null;
  const toggleBtn = document.getElementById ? document.getElementById('soundToggle') : null;
  let soundEnabled = true;

  // autoplay bgm on first user interaction (if bgm exists)
  if (typeof document !== 'undefined') {
    document.addEventListener('click', () => {
      if (bgm && bgm.paused && soundEnabled) {
        try { bgm.volume = 0.4; bgm.play(); } catch (e) {}
      }
    }, { once: true });
  }

  // toggle button (if exists)
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (soundEnabled) {
        toggleBtn.textContent = '🔊';
        if (bgm) try { bgm.play(); } catch (e) {}
      } else {
        toggleBtn.textContent = '🔇';
        if (bgm) try { bgm.pause(); } catch (e) {}
      }
      playClick(); // beri feedback saat toggle
    });
  }

  // fungsi global untuk memutar click (bisa dipanggil dari soal lain)
  window.playClick = function playClick() {
    if (!soundEnabled) return;
    if (!clickSound) return;
    try {
      clickSound.currentTime = 0;
      clickSound.play();
    } catch (e) {}
  };

  /* ============================
     RENDER SOAL
  ============================ */
  const qContainer = document.getElementById('qContainer');
  if (!qContainer) {
    console.warn('latihan-tf.js: elemen #qContainer tidak ditemukan — tidak ada yang dirender.');
    return;
  }

  // poin per soal (bagi 100, sisanya ditambahkan ke soal pertama)
  const basePoint = Math.floor(100 / QUESTIONS.length);
  const remainder = 100 - basePoint * QUESTIONS.length; // tambahkan ke soal pertama

  // store selections: null = belum pilih; true = pilih benar; false = pilih salah
  const selections = new Array(QUESTIONS.length).fill(null);

  // buat setiap soal
  QUESTIONS.forEach((item, idx) => {
    const wrap = document.createElement('div');
    wrap.className = 'question';
    wrap.style.marginBottom = '12px';
    wrap.style.padding = '10px';

    // teks soal (boleh mengandung HTML seperti <ruby>..</ruby>)
    const qHtml = document.createElement('div');
    qHtml.innerHTML = `<strong>Soal ${idx + 1}.</strong> <div style="margin-top:8px">${item.q}</div>`;
    wrap.appendChild(qHtml);

    // tombol pilihan 〇 / × dengan label Jepang
    const opts = document.createElement('div');
    opts.className = 'tf-options';
    opts.style.marginTop = '8px';
    opts.style.display = 'flex';
    opts.style.gap = '8px';
    opts.style.justifyContent = 'flex-start';

    const trueBtn = document.createElement('button');
    trueBtn.type = 'button';
    trueBtn.className = 'tf-btn tf-true';
    trueBtn.innerHTML = '〇 <span style="margin-left:6px">正しい</span>';
    trueBtn.style.padding = '10px 14px';
    trueBtn.style.borderRadius = '8px';
    trueBtn.style.cursor = 'pointer';
    trueBtn.style.fontWeight = '700';
    trueBtn.dataset.value = 'true';

    const falseBtn = document.createElement('button');
    falseBtn.type = 'button';
    falseBtn.className = 'tf-btn tf-false';
    falseBtn.innerHTML = '× <span style="margin-left:6px">間違い</span>';
    falseBtn.style.padding = '10px 14px';
    falseBtn.style.borderRadius = '8px';
    falseBtn.style.cursor = 'pointer';
    falseBtn.style.fontWeight = '700';
    falseBtn.dataset.value = 'false';

    // klik handler
    function handleSelect(valueBool) {
      // mainkan klik
      if (typeof window.playClick === 'function') window.playClick();

      // simpan pilihan
      selections[idx] = valueBool;

      // styling: reset sibling buttons
      [trueBtn, falseBtn].forEach(b => {
        b.style.border = '2px solid transparent';
        b.style.background = '';
        b.style.color = '';
      });

      // tandai yang dipilih
      const chosenBtn = valueBool ? trueBtn : falseBtn;
      chosenBtn.style.border = '2px solid #f7bfd8';
      chosenBtn.style.background = '#fff';
      chosenBtn.style.color = '#000';
    }

    trueBtn.addEventListener('click', () => handleSelect(true));
    falseBtn.addEventListener('click', () => handleSelect(false));

    opts.appendChild(trueBtn);
    opts.appendChild(falseBtn);

    wrap.appendChild(opts);
    qContainer.appendChild(wrap);
  });

  /* ============================
     SUBMIT: hitung skor, simpan, tampilkan
  ============================ */
  const submitBtn = document.getElementById('submitBtn');
  if (!submitBtn) {
    console.warn('latihan-tf.js: elemen #submitBtn tidak ditemukan — tidak bisa submit.');
    return;
  }

  submitBtn.addEventListener('click', (e) => {
    // mainkan click sound untuk tombol submit
    if (typeof window.playClick === 'function') window.playClick();

    // hitung skor
    let score = 0;
    const answers = []; // simpan pilihan tiap soal: true/false/null

    for (let i = 0; i < QUESTIONS.length; i++) {
      const sel = selections[i]; // true/false/null
      answers.push(sel === null ? null : !!sel);

      // hitung poin jika dipilih
      if (sel !== null) {
        const isCorrect = (sel === !!QUESTIONS[i].correct);
        // poin untuk soal i:
        let points = basePoint;
        if (i === 0) points += remainder; // tambahkan sisa ke soal pertama
        if (isCorrect) score += points;
      }
    }

    // Jika ada soal belum dijawab, tanyakan apakah lanjut simpan
    const unanswered = answers.filter(a => a === null).length;
    if (unanswered > 0) {
      const proceed = confirm(`Ada ${unanswered} soal belum dijawab. Lanjutkan dan simpan jawaban yang ada?`);
      if (!proceed) return;
    }

    // pastikan nama pemain
    const playerName = localStorage.getItem('playerName') || '';
    if (!playerName) {
      if (confirm('Nama belum diisi. Pergi ke halaman isi nama sekarang?')) {
        // pindah ke halaman isi nama
        window.location.href = './name.html';
        return;
      }
    }

    // simpan ke localStorage (format seperti sebelumnya)
    const entry = {
      nama: playerName || 'Anonymous',
      tipe: 'Latihan Dokkai 1 (TF)',
      score: score,
      max: 100,
      detail: answers,
      tanggal: new Date().toISOString()
    };

    const raw = localStorage.getItem('scores');
    const arr = raw ? JSON.parse(raw) : [];
    arr.push(entry);
    localStorage.setItem('scores', JSON.stringify(arr));

    // tampilkan hasil ringkas
    alert(`Nama: ${entry.nama}\nSkor: ${entry.score}/${entry.max}\nHasil tersimpan di scoreboard.`);

    // redirect ke scoreboard
    window.location.href = './scoreboard.html';
  });

  /* ============================
     Tambahkan efek suara & delay untuk semua link .btn (jika ada)
  ============================ */
  document.querySelectorAll && document.querySelectorAll('a.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      if (typeof window.playClick === 'function') window.playClick();
      if (href) {
        e.preventDefault();
        setTimeout(() => { window.location.href = href; }, 150);
      }
    });
  });

  // siap
  console.log('latihan-tf.js: siap. Soal jumlah =', QUESTIONS.length, 'poin/soal (base) =', basePoint, 'remainder =', remainder);
})();
