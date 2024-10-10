/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} Post
 * @property {string} body
 * @property {number} id
 * @property {string} title
 * @property {number} userId
 */

/**
 * @typedef {Object} Question
 * @property {string} question
 * @property {string[]} answers
 * @property {number} answerIdx
 */

const mainContainer = document.querySelector(".main-container");
const loadingEl = document.querySelector(".main-container__loading");
const questionsContainerEl = document.querySelector(".questions-container");
const questionEl = document.querySelector(".question");
const answersEl = document.querySelector(".answers-container");
const questionCounterEl = document.querySelector(".questions-counter");
const answersTableEl = document.querySelector("table");

const QUESTION_COUNT = 10;
const SECS_PER_QUESTION = 30_000;
const SECS_BEFORE_ANSWERABLE = 10_000;

/** @type {Question[] | null}*/
let questions = null;
/** @type {number[]}}*/
let answers = [];
let activeQuestionIdx = 0;

window.addEventListener("load", async () => {
  await getQuestions();

  displayQuestion();
});

let questionTimeout = null;
function displayQuestion() {
  if (questionTimeout) {
    clearTimeout(questionTimeout);
    questionTimeout = null;
  }

  if (activeQuestionIdx === QUESTION_COUNT) {
    createAnswersTable();
    return;
  }

  const activeQuestion = questions[activeQuestionIdx];

  questionEl.textContent = activeQuestion?.question;
  questionCounterEl.textContent = `${activeQuestionIdx + 1} of ${questions.length}`;

  answersEl.replaceChildren(...activeQuestion.answers.map(createQuestionEl));

  questionTimeout = setTimeout(() => {
    answers.push(-1);
    activeQuestionIdx += 1;

    displayQuestion();
  }, SECS_PER_QUESTION);
}

/**
 * @param {string} answer
 * @param {number} idx
 * @returns {HTMLButtonElement}
 */
function createQuestionEl(answer, idx) {
  const questionEl = document.createElement("button");
  questionEl.classList.add("answer");
  questionEl.dataset.index = `${idx}`;
  questionEl.disabled = true;
  questionEl.textContent = answer;

  setTimeout(() => {
    questionEl.disabled = false;
  }, SECS_BEFORE_ANSWERABLE);

  questionEl.addEventListener("click", () => {
    if (questionEl.disabled) return;
    answers.push(idx);
    activeQuestionIdx += 1;

    displayQuestion();
  });

  return questionEl;
}

async function getQuestions() {
  const questionsResponse = await fetchQuestions();
  const randomlySelectedQuestions = selectRandom(
    questionsResponse,
    QUESTION_COUNT,
  );
  questions = createQuestions(randomlySelectedQuestions);

  loadingEl.classList.add("hidden");
  questionsContainerEl.classList.remove("hidden");
}

/**
 * @param {array} arr
 * @param {number} count
 * @returns {array}
 */
function selectRandom(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random());

  return shuffled.slice(0, count);
}

/** @returns {Promise<Post[]>} */
async function fetchQuestions() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}

/**
 * @param {Post[]} arr
 * @returns {Question[]}
 */
function createQuestions(arr) {
  return arr.map((item) => {
    return {
      question: item.title,
      answers: selectRandom(item.body.split(" "), 4),
      answerIdx: Math.floor(Math.random() * 4),
    };
  });
}

function createAnswersTable() {
  answersTableEl.classList.remove("hidden");
  questionsContainerEl.classList.add("hidden");

  const tbodyEl = answersTableEl.querySelector("tbody");
  const answersRow = answers.map(createAnswersRow);

  mainContainer.classList.add("main-container__table");
  tbodyEl.append(...answersRow);
}

/**
 * @param {number} userAnswerIdx
 * @param {number} idx
 * @returns {HTMLTableRowElement}
 */
function createAnswersRow(userAnswerIdx, idx) {
  const currentQuestion = questions[idx];
  const rowEl = document.createElement("tr");

  rowEl.dataset.correct = `${userAnswerIdx === currentQuestion.answerIdx}`;

  const questionCol = document.createElement("td");
  questionCol.innerText = currentQuestion.question;

  const userAnswerCol = document.createElement("td");
  userAnswerCol.innerText =
    userAnswerIdx === -1 ? "-" : currentQuestion.answers[userAnswerIdx];

  const correctAnswerCol = document.createElement("td");
  correctAnswerCol.innerText =
    currentQuestion.answers[currentQuestion.answerIdx];

  rowEl.append(questionCol, userAnswerCol, correctAnswerCol);

  return rowEl;
}
