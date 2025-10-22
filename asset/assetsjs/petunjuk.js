// Petunjuk tiap menu
const guides = [
  {
    title: "Game",
    desc: "Mulai Dokkai. Lihat dan baca dokkai yang ditampilkan dan pilih jawaban yang benar dari pilihan yang tersedia."
  },
  {
    title: "Materi",
    desc: "Pelajari kosakata.  bahasa Jepang (beserta romaji)."
  },
  {
    title: "Score",
    desc: "Lihat skor tertinggi yang pernah kamu capai  . Papan skor akan menampilkan nama pemain dan poin."
  },
  {
    title: "Petunjuk",
    desc: "Halaman ini berisi panduan cara bermain dan penjelasan tiap menu."
  },
  {
    title: "Cara Bermain",
    desc: "1) Tekan menu Dokkai.\n2) isi nama.\n3) Baca dokkai dan selesaikan latihan dan quiz.\n4) Pilih jawaban yang benar untuk mendapatkan poin!"
  }
];

const guideList = document.getElementById("guideList");
guides.forEach(g => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${g.title}</strong><br>${g.desc.replace(/\n/g,"<br>")}`;
  guideList.appendChild(li);
});

