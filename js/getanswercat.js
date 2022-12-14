const getanswercat = (questions, index) => {
  let cat = questions[index].answers[0].cat;
  return cat;
};

module.exports = getanswercat;
