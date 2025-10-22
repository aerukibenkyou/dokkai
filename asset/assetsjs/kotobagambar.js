// ==== Data Buah ====
const fruits = [
  {
    src: 'asset/img/01.jpeg',
    kanji: 'いちご（苺）',
    translation: 'Strawberry — buah merah kecil, manis asam segar.'
  },
  {
    src: 'asset/img/02.jpeg',
    kanji: 'マンゴスチン（Mangosteen）',
    translation: 'Manggis — ratu buah dengan kulit ungu dan daging putih.'
  },
  {
    src: 'asset/img/03.jpeg',
    kanji: 'レモン（檸檬）',
    translation: 'Lemon — buah sitrus kuning dengan rasa asam segar.'
  },
  {
    src: 'asset/img/04.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },
  {
    src: 'asset/img/05.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },{
    src: 'asset/img/06.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },{
    src: 'asset/img/07.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },{
    src: 'asset/img/08.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
  },{
    src: 'asset/img/09.jpeg',
    kanji: 'スイカ（西瓜）',
    translation: 'Semangka — buah besar hijau, daging merah berair.'
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
