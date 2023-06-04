const startButton = document.getElementById('btn-start')
const restartButton = document.getElementById('btn-restart')
const buttonMacron = document.getElementById('btn-macron')
const buttonOSS = document.getElementById('btn-oss')
const nextButton = document.getElementById('next-btn')
const introDivElement = document.getElementById('intro-div')
const outroDivElement = document.getElementById('outro-div')
const outroAudioElement = document.getElementById('outro-audio')
const mainContainerElement = document.getElementById('main-container')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const sourceContainer = document.getElementById('source-container')
const outroText = document.getElementById('outro-text')
const outroScore = document.getElementById('outro-score')
const totalQContainer = document.getElementById('total-questions')
const currentQContainer = document.getElementById('current-questions')
const correctQContainer = document.getElementById('correct-questions')
const pointsCounterContainer = document.getElementById('points-counter')
const spanTrue = document.getElementById('span-true')
const spanFalse = document.getElementById('span-false')
var correctQuestions = 0
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


function startGame() {
  introDivElement.classList.add("hide")
  outroDivElement.classList.add("hide")
  mainContainerElement.classList.remove("hide")
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  totalQuestions = 0, correctQuestions = 0
  totalQContainer.innerText = questions.length
  currentQContainer.innerText = 1
  setNextQuestion()
  pointsCounterContainer.classList.remove("hide")
  correctQContainer.innerText = correctQuestions
}


function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
  answerButtonsElement.classList.remove("btn-grid-1")
  answerButtonsElement.classList.add("btn-grid-2")
  sourceContainer.setAttribute("href", question.Source);
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

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    mainContainerElement.classList.add('hide')
    outroDivElement.classList.remove('hide')
    if (correctQuestions == questions.length) {
      outroAudioElement.classList.add('hide')
      outroText.innerText = "Champion de la Macronie et de la blanquette"
    } else if (correctQuestions > questions.length * (2.0/3.0)) {
      outroAudioElement.classList.add('hide')
      outroText.innerText = "Habile !"
    } else {
      outroText.innerText = "T'es mauvais Jack !"
      outroAudioElement.play()
      outroAudioElement.classList.add('hide')
    }
    outroScore.innerText = "Votre score est de " + correctQuestions + " sur " + questions.length + "."
  }
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