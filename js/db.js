const questions = [
  {
    id: 1,
    question: "Saya lebih menyukai percakapan berhadapan satu lawan satu dalam sebuah kegiatan berkelompok.",
    answers: [
      {
        text: "Benar sekali",
        cat: "introvert",
      },
      {
        text: "Benar",
        cat: "introvert",
      },
      {
        text: "Salah",
        cat: "extrovert",
      },
      {
        text: "Sangat salah",
        cat: "extrovert",
      },
    ],
  },
  {
    id: 2,
    question: "Saya lebih menyukai mengekspresikan diri sendiri melalui tulisan/gambar.",
    answers: [
      {
        text: "Benar sekali",
        cat: "introvert",
      },
      {
        text: "Benar",
        cat: "introvert",
      },
      {
        text: "Salah",
        cat: "extrovert",
      },
      {
        text: "Sangat salah",
        cat: "extrovert",
      },
    ],
  },
  {
    id: 3,
    question: "Saya menikmati kesendirian.",
    answers: [
      {
        text: "Benar sekali",
        cat: "introvert",
      },
      {
        text: "Benar",
        cat: "introvert",
      },
      {
        text: "Salah",
        cat: "extrovert",
      },
      {
        text: "Sangat salah",
        cat: "extrovert",
      },
    ],
  },
  {
    id: 4,
    question: "Saya tidak suka berbasa-basi, tetapi saya senang berbicara secara mendalam tentang topik yang penting bagi saya.",
    answers: [
      {
        text: "Benar sekali",
        cat: "introvert",
      },
      {
        text: "Benar",
        cat: "introvert",
      },
      {
        text: "Salah",
        cat: "extrovert",
      },
      {
        text: "Sangat salah",
        cat: "extrovert",
      },
    ],
  },
  {
    id: 5,
    question: "Orang lain menganggap saya sebagai pendengar yang baik.",
    answers: [
      {
        text: "Benar sekali",
        cat: "introvert",
      },
      {
        text: "Benar",
        cat: "introvert",
      },
      {
        text: "Salah",
        cat: "extrovert",
      },
      {
        text: "Sangat salah",
        cat: "extrovert",
      },
    ],
  },
  {
    id: 6,
    question: "Saya menikmati pekerjaan yang memungkinkan saya untuk banyak bertemu orang baru.",
    answers: [
      {
        text: "Benar sekali",
        cat: "extrovert",
      },
      {
        text: "Benar",
        cat: "extrovert",
      },
      {
        text: "Salah",
        cat: "introvert",
      },
      {
        text: "Sangat salah",
        cat: "introvert",
      },
    ],
  },
  {
    id: 7,
    question: "Saya menyukai pesta ulang tahun kecil dengan beberapa orang dan anggota keluarga saja.",
    answers: [
      {
        text: "Benar sekali",
        cat: "introvert",
      },
      {
        text: "Benar",
        cat: "introvert",
      },
      {
        text: "Salah",
        cat: "extrovert",
      },
      {
        text: "Sangat salah",
        cat: "extrovert",
      },
    ],
  },
  {
    id: 8,
    question: "Orang-orang menggambarkan diri saya sebagai orang yang suka menyendiri.",
    answers: [
      {
        text: "Benar sekali",
        cat: "introvert",
      },
      {
        text: "Benar",
        cat: "introvert",
      },
      {
        text: "Salah",
        cat: "extrovert",
      },
      {
        text: "Sangat salah",
        cat: "extrovert",
      },
    ],
  },
  {
    id: 9,
    question: "Saya tidak menyukai mengobrol lama-lama.",
    answers: [
      {
        text: "Benar sekali",
        cat: "introvert",
      },
      {
        text: "Benar",
        cat: "introvert",
      },
      {
        text: "Salah",
        cat: "extrovert",
      },
      {
        text: "Sangat salah",
        cat: "extrovert",
      },
    ],
  },
  {
    id: 10,
    question: "Energi saya merasa terkuras setelah melakukan sesuatu, bahkan ketika menikmati diri sendiri.",
    answers: [
      {
        text: "Benar sekali",
        cat: "introvert",
      },
      {
        text: "Benar",
        cat: "introvert",
      },
      {
        text: "Salah",
        cat: "extrovert",
      },
      {
        text: "Sangat salah",
        cat: "extrovert",
      },
    ],
  },
  {
    id: 11,
    question: "Saya bisa akrab dengan seseorang hanya dengan hitungan jam.",
    answers: [
      {
        text: "Benar sekali",
        cat: "extrovert",
      },
      {
        text: "Benar",
        cat: "extrovert",
      },
      {
        text: "Salah",
        cat: "introvert",
      },
      {
        text: "Sangat salah",
        cat: "introvert",
      },
    ],
  },
  {
    id: 12,
    question: "Saya tidak keberatan menjadi pusat perhatian di tempat umum.",
    answers: [
      {
        text: "Benar sekali",
        cat: "extrovert",
      },
      {
        text: "Benar",
        cat: "extrovert",
      },
      {
        text: "Salah",
        cat: "introvert",
      },
      {
        text: "Sangat salah",
        cat: "introvert",
      },
    ],
  },
  {
    id: 13,
    question: " Jika harus memilih, saya lebih suka menikmati akhir pekan dengan hangout dari pada hanya diam di rumah.",
    answers: [
      {
        text: "Benar sekali",
        cat: "extrovert",
      },
      {
        text: "Benar",
        cat: "extrovert",
      },
      {
        text: "Salah",
        cat: "introvert",
      },
      {
        text: "Sangat salah",
        cat: "introvert",
      },
    ],
  },
  {
    id: 14,
    question: "Saya suka membantu orang tak dikenal secara acak",
    answers: [
      {
        text: "Benar sekali",
        cat: "extrovert",
      },
      {
        text: "Benar",
        cat: "extrovert",
      },
      {
        text: "Salah",
        cat: "introvert",
      },
      {
        text: "Sangat salah",
        cat: "introvert",
      },
    ],
  },
  {
    id: 15,
    question: "Saya merasa santai apabila berada di tempat baru",
    answers: [
      {
        text: "Benar sekali",
        cat: "extrovert",
      },
      {
        text: "Benar",
        cat: "extrovert",
      },
      {
        text: "Salah",
        cat: "introvert",
      },
      {
        text: "Sangat salah",
        cat: "introvert",
      },
    ],
  },
  {
    id: 16,
    question: "Saya tidak keberatan jika ditunjuk sebagai pengurus organisasi sekitar",
    answers: [
      {
        text: "Benar sekali",
        cat: "extrovert",
      },
      {
        text: "Benar",
        cat: "extrovert",
      },
      {
        text: "Salah",
        cat: "introvert",
      },
      {
        text: "Sangat salah",
        cat: "introvert",
      },
    ],
  },
  {
    id: 17,
    question: "Saya merasa bersemangat setelah menghabiskan waktu dengan beberapa orang",
    answers: [
      {
        text: "Benar sekali",
        cat: "extrovert",
      },
      {
        text: "Benar",
        cat: "extrovert",
      },
      {
        text: "Salah",
        cat: "introvert",
      },
      {
        text: "Sangat salah",
        cat: "introvert",
      },
    ],
  },
  {
    id: 18,
    question: "Ketika berada di suatu ruangan, saya cenderung mengambil kursi yang dekat dengan dinding.",
    answers: [
      {
        text: "Benar sekali",
        cat: "introvert",
      },
      {
        text: "Benar",
        cat: "introvert",
      },
      {
        text: "Salah",
        cat: "extrovert",
      },
      {
        text: "Sangat salah",
        cat: "extrovert",
      },
    ],
  },
  {
    id: 19,
    question: "Saya sering berinisiatif membantu orang di jalan yang saya lalui.",
    answers: [
      {
        text: "Benar sekali",
        cat: "extrovert",
      },
      {
        text: "Benar",
        cat: "extrovert",
      },
      {
        text: "Salah",
        cat: "introvert",
      },
      {
        text: "Sangat salah",
        cat: "introvert",
      },
    ],
  },
  {
    id: 20,
    question: "Saya ingin menjadi orang yang terkenal",
    answers: [
      {
        text: "Benar sekali",
        cat: "extrovert",
      },
      {
        text: "Benar",
        cat: "extrovert",
      },
      {
        text: "Salah",
        cat: "introvert",
      },
      {
        text: "Sangat salah",
        cat: "introvert",
      },
    ],
  },
  {
    id: 21,
    question: "Saya lebih menikmati buku dari pada acara sosial",
    answers: [
      {
        text: "Benar sekali",
        cat: "introvert",
      },
      {
        text: "Benar",
        cat: "introvert",
      },
      {
        text: "Salah",
        cat: "extrovert",
      },
      {
        text: "Sangat salah",
        cat: "extrovert",
      },
    ],
  },
];

module.exports = questions;
