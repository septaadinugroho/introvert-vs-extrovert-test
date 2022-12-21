const getquestion = require("./getquestion");
const questions = require("./db");
const expectedQuestion = questions[2].question;
//untuk mengambil pertanyaan di index tertentu, karena sistem pertanyaan yang diberikan adalah acak
test("Dapatkan pertanyaan di indeks tertentu (question, question_index)", () => {
  expect(getquestion(questions, 2)).toBe(expectedQuestion);
});
