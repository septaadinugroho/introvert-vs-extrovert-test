const getanswer = (questions, index) => {
  let answer = questions[index].answers[0].text;
  return answer;
};

module.exports = getanswer;
