const getanswercat = require("./getanswercat"); //menginisiasi function getanswercat untuk menangkap elemen dalam jawaban
const questions = require("./db"); //menginisiasi objek pertanyaan
const expectedAnsCat = questions[0].answers[0].cat;
//Dapatkan jawaban untuk pertanyaan yang diberikan di indeks
test("Dapatkan jawaban computer assistan test(cat) untuk pertanyaan yang diberikan di indeks (questions, question_index, answer_index)", () => {
  expect(getanswercat(questions, 2, 0)).toBe(expectedAnsCat);
});
