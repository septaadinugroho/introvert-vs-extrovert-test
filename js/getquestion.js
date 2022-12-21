//mengambil pertanyaan yang ditampilkan agar jumlahnya sesuai
const getquestion = (questions, index) => {
  let question = questions[index];
  return question.question;
};

module.exports = getquestion;
