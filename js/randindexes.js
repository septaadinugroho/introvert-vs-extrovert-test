const randindexes = () => {
  //generate 21 pertanyaan acak
  let count = 0;
  let selectedIndexes = [];
  while (count < 21) {
    let number = null;
    do {
      number = Math.floor(Math.random() * 21);
    } while (selectedIndexes.includes(number));
    selectedIndexes.push(number);
    count++;
  }
  return selectedIndexes.length;
};

module.exports = randindexes;
