const randindexes = require("./randindexes");

test("generates 5 random question indexes", () => {
  expect(randindexes()).toBe(5);
});
