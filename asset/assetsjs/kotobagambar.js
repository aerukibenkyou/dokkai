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
    src: 'asset/img/010.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },{
    src: 'asset/img/011.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },{
    src: 'asset/img/012.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },{
    src: 'asset/img/013.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/014.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/015.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/016.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/017.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/018.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/019.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/020.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/021.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/022.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/023.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/024.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/025.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/026.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/027.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/028.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/029.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/030.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/031.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/032.jpeg',
    kanji: 'ドリアン',
    translation: 'Durian — dikenal sebagai raja buah, beraroma kuat.'
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
