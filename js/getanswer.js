//function untuk menyimpan jawaban
const getanswer = (questions, index) => {
  let answer = questions[index].answers[0].text; //untuk menangkap index jawaban dari pertanyaan
  return answer;
};

module.exports = getanswer; //mengexport function getanswer
