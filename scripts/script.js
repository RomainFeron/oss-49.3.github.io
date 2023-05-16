const startButton = document.getElementById('btn-start')
const buttonMacron = document.getElementById('btn-macron')
const buttonOSS = document.getElementById('btn-oss')
const nextButton = document.getElementById('next-btn')
const introDivElement = document.getElementById('intro-div')
const mainContainerElement = document.getElementById('main-container')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const sourceContainer = document.getElementById('source-container')
const totalQContainer = document.getElementById('total-questions')
const currentQContainer = document.getElementById('current-questions')
const correctQContainer = document.getElementById('correct-questions')
const pointsCounterContainer = document.getElementById('points-counter')
const spanTrue = document.getElementById('span-true')
const spanFalse = document.getElementById('span-false')
var correctQuestions = 0
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


const accents = [
  /[\300-\306]/g, /[\340-\346]/g, // A, a
  /[\310-\313]/g, /[\350-\353]/g, // E, e
  /[\314-\317]/g, /[\354-\357]/g, // I, i
  /[\322-\330]/g, /[\362-\370]/g, // O, o
  /[\331-\334]/g, /[\371-\374]/g, // U, u
  /[\321]/g, /[\361]/g, // N, n
  /[\307]/g, /[\347]/g // C, c
];

const accentsOut = [
  'A', 'a',
  'E', 'e',
  'I', 'i',
  'O', 'o',
  'U', 'u',
  'N', 'n',
  'C', 'c'
];


function startGame() {
  introDivElement.classList.add("hide")
  mainContainerElement.classList.remove("hide")
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  totalQuestions = 0, correctQuestions = 0
  totalQContainer.innerText = questions.length
  currentQContainer.innerText = 1
  setNextQuestion()
  pointsCounterContainer.classList.remove("hide")
}


function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
  answerButtonsElement.classList.remove("btn-grid-1")
  answerButtonsElement.classList.add("btn-grid-2")
  sourceContainer.setAttribute("href", question.Source);
  for (let i = 0; i < accents.length; i++) {
    question.Citation = question.Citation.replace(accents[i], accentsOut[i]);
  }
  questionElement.innerHTML = question.Citation

  // Answer button for Macron
  buttonMacron.addEventListener('click', selectAnswer)

  // Answer button for OSS
  buttonOSS.addEventListener('click', selectAnswer)

  // Set correct values depending on answer
  if (question.Author == "OSS") {
    buttonOSS.dataset.correct = true
    buttonMacron.dataset.correct = false
  } else {
    buttonOSS.dataset.correct = false
    buttonMacron.dataset.correct = true
  }
  answerButtonsElement.appendChild(buttonOSS)
  answerButtonsElement.appendChild(buttonMacron)
  currentQContainer.innerText = currentQuestionIndex + 1
  spanFalse.classList.add("hide")
  spanTrue.classList.add("hide")
}


function selectAnswer(e) {
  answerButtonsElement.classList.remove("btn-grid-2")
  answerButtonsElement.classList.add("btn-grid-1")
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }

  buttonMacron.classList.add("hide")
  buttonOSS.classList.add("hide")
  selectedButton.classList.remove("hide")
  
  if (correct == "true") {
    spanTrue.classList.remove("hide")
    correctQuestions += 1
    if (selectedButton.value == "Macron") {
      selectedButton.classList.remove("macron-img")
      selectedButton.classList.add("macron-yes")
    } else {
      selectedButton.classList.remove("oss-img")
      selectedButton.classList.add("oss-yes")
    }
  } else {
    spanFalse.classList.remove("hide")
    if (selectedButton.value == "Macron") {
      selectedButton.classList.remove("macron-img")
      selectedButton.classList.add("macron-no")
    } else {
      selectedButton.classList.remove("oss-img")
      selectedButton.classList.add("oss-no")
    }
  }

  correctQContainer.innerText = correctQuestions

  selectedButton.removeEventListener('click', selectAnswer)

}


function setStatusClass(element, correct) {

  clearStatusClass(element)

  if (correct == "true") {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
  sourceContainer.classList.remove('hide')
}


function clearStatusClass(element) {

  element.classList.remove('correct')
  element.classList.remove('wrong')
  sourceContainer.classList.add('hide')
}


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  buttonMacron.classList.remove("hide")
  buttonMacron.classList.remove("macron-yes")
  buttonMacron.classList.remove("macron-no")
  buttonMacron.classList.add("macron-img")
  buttonOSS.classList.remove("hide")
  buttonOSS.classList.remove("oss-yes")
  buttonOSS.classList.remove("oss-no")
  buttonOSS.classList.add("oss-img")
}