const LAST_QUESTION = 21;
var selectedIndexes = [];
var questionIndex = undefined;
var selectedAnswers = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];

const startTest = () => {
  //memunculkan 21 soal random
  selectedIndexes = [];
  let count = 0;
  while (count < 21) {
    let number = null;
    do {
      number = Math.floor(Math.random() * 21);
    } while (selectedIndexes.includes(number));
    selectedIndexes.push(number);
    count++;
  }

  //show
  questionIndex = 0;
  let questionObj = questions[selectedIndexes[questionIndex]];
  //console.log(questionObj);

  //show new question
  displayQuestion(questionObj);

  //set the question number
  document.getElementById("counter").innerHTML = questionIndex + 1;

  //disable previous button and next button
  document.getElementById("next").style.pointerEvents = "none";
  document.getElementById("next").style.color = "gray";

  document.getElementById("previous").style.pointerEvents = "none";
  document.getElementById("previous").style.color = "gray";

  //hide the intro page and show the test
  document.getElementsByClassName("welcome")[0].style.display = "none";
  document.getElementsByClassName("container")[0].style.display = "flex";

  //don't show test result
  document.getElementById("test-result").style.display = "none";

  //hide restart button
  document.getElementById("restart").style.display = "none";

  //hide the right side
  document.getElementsByClassName("your-answers")[0].style.display = "none";
};

const resetPreviousStyles = () => {
  //reset styles added previously
  document.getElementById("div-ans-a").style.border = "none";
  document.getElementById("div-ans-b").style.border = "none";
  document.getElementById("div-ans-c").style.border = "none";
  document.getElementById("div-ans-d").style.border = "none";
};

const displaySelectedAnswer = (answer) => {
  if (answer === 0) {
    document.getElementById("div-ans-a").style.border = "2px solid red";
  } else if (answer === 1) {
    document.getElementById("div-ans-b").style.border = "2px solid red";
  } else if (answer === 2) {
    document.getElementById("div-ans-c").style.border = "2px solid red";
  } else {
    document.getElementById("div-ans-d").style.border = "2px solid red";
  }
};

const displayQuestion = (questionObj) => {
  document.getElementById("question").innerHTML = questionObj.question;
  document.getElementById("ans-a").innerHTML = questionObj.answers[0].text;
  document.getElementById("ans-b").innerHTML = questionObj.answers[1].text;
  document.getElementById("ans-c").innerHTML = questionObj.answers[2].text;
  document.getElementById("ans-d").innerHTML = questionObj.answers[3].text;

  //enable previous button if there's a previous question
  if (questionIndex > 0) {
    document.getElementById("previous").style.pointerEvents = "auto";
    document.getElementById("previous").style.color = "black";
  } else {
    document.getElementById("previous").style.pointerEvents = "none";
    document.getElementById("previous").style.color = "gray";
  }

  //enable the next button only if there's an existing answer
  if (selectedAnswers[questionIndex] !== null) {
    document.getElementById("next").style.pointerEvents = "auto";
    document.getElementById("next").style.color = "black";
  } else {
    document.getElementById("next").style.pointerEvents = "none";
    document.getElementById("next").style.color = "gray";
  }

  //Selanjutnya dan selesai pas soal terakhir

  if (questionIndex === LAST_QUESTION - 1) {
    document.getElementById("next").innerHTML = "Selesai";
  } else {
    document.getElementById("next").innerHTML = "Selanjutnya >";
  }
};

const nextQuestion = () => {
  if (questionIndex < selectedIndexes.length - 1) {
    questionIndex++;
    let questionObj = questions[selectedIndexes[questionIndex]];
    //console.log(questionObj);

    //reset styles added previously
    resetPreviousStyles();

    //show new question
    displayQuestion(questionObj);

    if (selectedAnswers[questionIndex] !== null) {
      //previous answer exist
      //set the selected answer since user can change the answer
      let answer = selectedAnswers[questionIndex];
      displaySelectedAnswer(answer);
    }

    //set the question number
    document.getElementById("counter").innerHTML = questionIndex + 1;
  } else {
    showAllQuestionAndAnswer();
  }
};

const previousQuestion = () => {
  console.log(questionIndex);
  if (questionIndex > 0) {
    questionIndex--;

    let questionObj = questions[selectedIndexes[questionIndex]];
    //console.log(questionObj);

    resetPreviousStyles();

    //show new question
    displayQuestion(questionObj);

    //set the question number
    document.getElementById("counter").innerHTML = questionIndex + 1;

    //set the selected answer since user can change the answer
    let answer = selectedAnswers[questionIndex];
    displaySelectedAnswer(answer);
  }
};

const selectedAnswer = (ans) => {
  //reset styles added previously
  resetPreviousStyles();

  //setSelected answers
  displaySelectedAnswer(ans);

  //when answer is selected, enable the next button
  document.getElementById("next").style.pointerEvents = "auto";
  document.getElementById("next").style.color = "black";

  //user answer so we can display it at the end
  selectedAnswers[questionIndex] = ans;
  //console.log(selectedAnswers);
};

//function to show the chosen question and answer. For summary at the end of the test
const showElement = (questionObj, chosenAnswer, index) => {
  let element = "";

  switch (chosenAnswer) {
    case 0:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a" style="border: 2px solid blue">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c">
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="margin-bottom: 40px">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
      break;
    case 1:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b" style="pointer-events: none; border: 2px solid blue">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c" >
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="margin-bottom: 40px">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
      break;
    case 2:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c" style="border: 2px solid blue">
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="none; margin-bottom: 40px">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
      break;
    case 3:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c">
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="margin-bottom: 40px; border: 2px solid blue">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
      break;
    default:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c">
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="margin-bottom: 40px">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
  }

  return element;
};

const showAllQuestionAndAnswer = () => {
  //store the count for later comparison
  let introvertCount = 0;
  let extrovertCount = 0;

  //get the questions and selected answer in order to display the summary
  for (let i = 0; i < selectedIndexes.length; i++) {
    let questionObj = questions[selectedIndexes[i]];
    let answer = selectedAnswers[i];
    let element = showElement(questionObj, answer, i + 1);
    document.getElementById("answers").innerHTML += element;

    let cat = questionObj.answers[answer].cat;
    if (cat === "introvert") {
      introvertCount++;
    } else {
      extrovertCount++;
    }
  }

  //console.log(introvertCount);
  //console.log(extrovertCount);

  showPersonalities(introvertCount, extrovertCount);

  //hide the previous and finish button and show restart button
  document.getElementById("next").style.display = "none";
  document.getElementById("previous").style.display = "none";
};

const showPersonalities = (introvert, extrovert) => {
  if (introvert > extrovert) {
    //show image
    document.getElementById("image").src = "img/introvert.png";

    document.getElementById("trait-title").innerText = "Wah! Kamu adalah Introvert!";

    //append personality traits
    let element = `<li>Berada di Sekitar Banyak Orang Menguras Energimu</li>
    <li>Kamu menikmati kesendirian</li>
    <li>Kamu memiliki sekelompok kecil teman dekat</li>
    <li>
    Orang sering menggambarkan Kamu sebagai orang yang pendiam dan mungkin merasa sulit untuk
    didekati
    </li>
    <li>
    Terlalu banyak interaksi membuat Kamu merasa terganggu dan tidak fokus
    </li>
    <li>Kamu sangat Self-Aware (menyadari diri sendiri)</li>
    <li>Banyak cara belajar yang cocok untuk introvert, contohnya menulis</li>
    <li>Kamu tertarik pada pekerjaan yang melibatkan kemandirian</li>`;
    document.getElementById("personalities").innerHTML += element;
  } else {
    //show image
    document.getElementById("image").src = "img/extrovert.png";
    document.getElementById("trait-title").innerText = "Wah! Kamu adalah Extrovert!";

    //append personality traits
    let element = `<li>Kamu senang menjadi pusat perhatian.</li>
    <li>Kamu suka bekerja dengan sekelompok orang.</li>
    <li>Kamu merasa terisolasi ketika harus menghabiskan banyak waktu sendirian.</li>
    <li>
    Kamu lebih suka berkomunikasi dengan berbicara dibandingkan dengan sarana komunikasi lainnya.
    </li>
    <li>
    Kamu cenderung bertindak terlebih dahulu sebelum berpikir (tergantung orangnya juga sih..)
    </li>
    <li>Kamu suka mencari orang lain dan sumber luar untuk ide dan inspirasi.</li>
    <li>Kamu suka berbicara tentang pikiran dan perasaan Anda (Speak up).</li>
    <li>Kamu memiliki ketertarikan pada banyak hal.</li>`;
    document.getElementById("personalities").innerHTML += element;
  }

  //show test result
  document.getElementById("test-result").style.display = "flex";

  //show restart button
  document.getElementById("restart").style.display = "block";

  //show the right side
  document.getElementsByClassName("your-answers")[0].style.display = "block";
};

const restartQuestion = () => {
  window.location.reload();
};
