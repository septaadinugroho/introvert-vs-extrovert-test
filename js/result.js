const result = (introvert, extrovert) => {
  if (introvert > extrovert) {
    return "You're an Introvert";
  } else {
    return "You're an Extrovert";
  }
};

module.exports = result;
