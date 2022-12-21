//menentukan hasil diagnosa dari index jawaban yang dipilih
const result = (introvert, extrovert) => {
  if (introvert > extrovert) {
    return "Kamu introvert";
  } else {
    return "Kamu extrovert";
  }
};

module.exports = result;
