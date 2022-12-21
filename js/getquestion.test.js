const getquestion = require("./getquestion");
const questions = require("./db");
const expectedQuestion = questions[2].question;
test("get the question at a particular index (question, question_index)", () => {
  expect(getquestion(questions, 2)).toBe(expectedQuestion);
});
