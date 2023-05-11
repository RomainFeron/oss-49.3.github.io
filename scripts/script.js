const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}


function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {

  questionElement.innerText = question.Citation

  // Answer button for Macron
  const buttonMacron = document.createElement('button')
  buttonMacron.innerText = "Macron"
  buttonMacron.classList.add('btn')
  buttonMacron.addEventListener('click', selectAnswer)

  // Answer button for OSS
  const buttonOSS = document.createElement('button')
  buttonOSS.innerText = "OSS"
  buttonOSS.classList.add('btn')
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

}


function selectAnswer(e) {

  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }

}


function setStatusClass(element, correct) {

  clearStatusClass(element)

  if (correct == "true") {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }

}


function clearStatusClass(element) {

  element.classList.remove('correct')
  element.classList.remove('wrong')

}


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}