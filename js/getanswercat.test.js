const getanswercat = require("./getanswercat");
const questions = require("./db");
const expectedAnsCat = questions[0].answers[0].cat;
test("get the answer cat for a given question at index (questions, question_index, answer_index)", () => {
  expect(getanswercat(questions, 2, 0)).toBe(expectedAnsCat);
});
