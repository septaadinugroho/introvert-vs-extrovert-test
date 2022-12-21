const randindexes = () => {
  //generate 5 random questions indexes
  let count = 0;
  let selectedIndexes = [];
  while (count < 5) {
    let number = null;
    do {
      number = Math.floor(Math.random() * 10);
    } while (selectedIndexes.includes(number));
    selectedIndexes.push(number);
    count++;
  }
  return selectedIndexes.length;
};

module.exports = randindexes;
