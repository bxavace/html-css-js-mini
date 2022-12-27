const questions = [
  {
    question:
      "What tuple makes Non-deterministic Finite Automaton differ from Deterministic Finite Automaton?",
    a: "Its transition state",
    b: "Its final state",
    c: "Its initial state",
    d: "Its language",
    correct: "a",
  },
  {
    question: "What best describes concatenation in regular languages?",
    a: "Concatenation is joining of x and y strings such that x is an element of language A and y is an element of language B.",
    b: "Concatenation is multiplying two strings together.",
    c: "Concatenation is simply adding two substrings together.",
    d: "Concatenation is an x string such that x is an element of A or x is an element of B.",
    correct: "a",
  },
  {
    question: "Which statement is correct?",
    a: "A deterministic finite automaton is a set of 5 properties.",
    b: "A deterministic finite automaton is a quintuple.",
    c: "A deterministic finite automaton can exist in multiple states.",
    d: "A deterministic finite automaton has a state that is chosen at random.",
    correct: "b",
  },
  {
    question:
      "What data structure can describe an NFA states better aside from state diagram?",
    a: "A list",
    b: "A linked list",
    c: "A set",
    d: "A tree",
    correct: "d",
  },
  {
    question:
      "For every nondeterministic finite automaton, there exists a/an _______ deterministic finite automaton.",
    a: "better",
    b: "greater",
    c: "equivalent",
    d: "lesser",
    correct: "c",
  },
  {
    question:
      "An example of a nonregular language is anything that requires: _______",
    a: "time",
    b: "states",
    c: "waiting states",
    d: "memory",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadQuestions();

function loadQuestions() {
  deselectAnswers();
  const currentQuizData = questions[currentQuestion];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerElements.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerElements.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submit.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === questions[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
      loadQuestions();
    } else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${questions.length} questions correctly.</h2>

            <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});
