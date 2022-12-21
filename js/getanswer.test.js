const getanswer = require("./getanswer"); //menginisiasi function getanswer
const questions = require("./db"); //menginisiasi objek pertanyaan
const expectedAnswer = questions[2].answers[0].text;
//Dapatkan jawaban untuk pertanyaan yang diberikan di indeks
test("Dapatkan jawaban untuk pertanyaan yang diberikan di index (questions, question_index, answer_index)", () => {
  expect(getanswer(questions, 2, 0)).toBe(expectedAnswer);
});
