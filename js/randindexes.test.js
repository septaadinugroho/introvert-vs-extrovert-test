const randindexes = require("./randindexes");
//mengambil 21 pertanyaan acak
test("generate 21 indeks pertanyaan acak", () => {
  expect(randindexes()).toBe(5);
});
