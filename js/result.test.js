const result = require("./result");

test("Dapatkan hasil akhir tergantung pada jumlah introvert / ekstrovert (introvert, extrovert", () => {
  expect(result(3, 2)).toBe("Kamu Introvert");
});
