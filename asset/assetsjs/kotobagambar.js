// ==== Data Buah ====
const fruits = [
  {
    src: 'asset/img/01.jpeg',
    kanji: 'がつ（月）',
    translation: 'Bulan.'
  },
  {
    src: 'asset/img/02.jpeg',
    kanji: 'とうなんアジア（東南アジア）',
    translation: 'Asia Tenggara.'
  },
  {
    src: 'asset/img/03.jpeg',
    kanji: 'ふえる',
    translation: 'Meningkatkan.'
  },
  {
    src: 'asset/img/04.jpeg',
    kanji: 'おもう',
    translation: 'Berpikir.'
  },
  {
    src: 'asset/img/05.jpeg',
    kanji: 'ひく',
    translation: 'Menarik.'
  },{
    src: 'asset/img/06.jpeg',
    kanji: '音楽',
    translation: 'Musik.'
  },{
    src: 'asset/img/07.jpeg',
    kanji: 'りょうり',
    translation: 'Masakan.'
  },{
    src: 'asset/img/08.jpeg',
    kanji: 'ひと',
    translation: 'Orang.'
  },{
    src: 'asset/img/09.jpeg',
    kanji: 'うみ',
    translation: 'Laut.'
  },{
    src: 'asset/img/10.jpeg',
    kanji: 'みせ',
    translation: 'Toko.'
  },{
    src: 'asset/img/11.jpeg',
    kanji: 'ところ',
    translation: 'Tempat.'
  },{
    src: 'asset/img/12.jpeg',
    kanji: 'まち',
    translation: 'Kota.'
  },{
    src: 'asset/img/13.jpeg',
    kanji: 'てんき',
    translation: 'Cuaca.'
  },
  {
    src: 'asset/img/14.jpeg',
    kanji: 'すこし',
    translation: 'Sedikit.'
  },
  {
    src: 'asset/img/15.jpeg',
    kanji: 'じかん',
    translation: 'Waktu.'
  },
  {
    src: 'asset/img/16.jpeg',
    kanji: 'しゅうかん',
    translation: 'Minggu.'
  },
  {
    src: 'asset/img/17.jpeg',
    kanji: 'ふね',
    translation: 'Kapal.'
  },
  {
    src: 'asset/img/18.jpeg',
    kanji: 'ともだち',
    translation: 'Teman.'
  },
  {
    src: 'asset/img/19.jpeg',
    kanji: 'ことし',
    translation: 'Tahun ini.'
  },
  {
    src: 'asset/img/20.jpeg',
    kanji: 'べんきょうする',
    translation: 'Belajar.'
  },
  {
    src: 'asset/img/21.jpeg',
    kanji: 'つかれる',
    translation: 'Lelah.'
  },
  {
    src: 'asset/img/22.jpeg',
    kanji: 'サッカー',
    translation: 'Sepak Bola.'
  },
  {
    src: 'asset/img/23.jpeg',
    kanji: 'こうこうせい',
    translation: 'Murid SMA.'
  },
  {
    src: 'asset/img/24.jpeg',
    kanji: 'バスケットボール',
    translation: 'Basket.'
  },
  {
    src: 'asset/img/25.jpeg',
    kanji: 'きく',
    translation: 'Mendengar.'
  },
  {
    src: 'asset/img/26.jpeg',
    kanji: 'りんご',
    translation: 'Apel.'
  },
  {
    src: 'asset/img/27.jpeg',
    kanji: 'みる',
    translation: 'Melihat.'
  },
  {
    src: 'asset/img/28.jpeg',
    kanji: 'かかる',
    translation: 'Memakan (Waktu).'
  }
  
];

// ==== Elemen ====
const imgEl = document.getElementById('fruitImage');
const kanjiEl = document.getElementById('kanjiText');
const translationEl = document.getElementById('translationText');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let index = 0;

// ==== Fungsi ====
function showFruit(i) {
  const f = fruits[i];
  imgEl.src = f.src;
  kanjiEl.textContent = f.kanji;
  translationEl.textContent = f.translation;
}

// ==== Navigasi ====
nextBtn.addEventListener('click', () => {
  index = (index + 1) % fruits.length;
  showFruit(index);
});
prevBtn.addEventListener('click', () => {
  index = (index - 1 + fruits.length) % fruits.length;
  showFruit(index);
});

// ==== Awal ====
showFruit(index);
