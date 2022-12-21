const getquestionobj = require("./getquestionobj");
const questions = require("./db");
const expectedQuestionobj = questions[0];
////untuk mengambil pertanyaan di index tertentu, karena sistem pertanyaan yang diberikan adalah acak
test("Dapatkan pertanyaan di indeks tertentu (question, question_index)", () => {
  expect(getquestionobj(questions, 0)).toBe(expectedQuestionobj);
});
