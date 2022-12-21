const getquestionobj = require("./getquestionobj");
const questions = require("./db");
const expectedQuestionobj = questions[0];
test("get the question object at a particular index (question, question_index)", () => {
  expect(getquestionobj(questions, 0)).toBe(expectedQuestionobj);
});
