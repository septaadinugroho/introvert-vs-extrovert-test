const result = require("./result");

test("get the final result depending on the introvert/extrovert count (introvert, extrovert", () => {
  expect(result(3, 2)).toBe("You're an Introvert");
});
