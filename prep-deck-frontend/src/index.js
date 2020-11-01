const userDisplayDiv = document.getElementById('user-display')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const addButton = document.getElementById('add-btn')
const seeButton = document.getElementById('see-btn')
const mainButton = document.getElementById('main-btn')
const removeButton = document.getElementById('remove-btn')
const topArea = document.querySelector('ul.top-area')
const header = document.querySelector('h1')
const explanation = document.getElementById('explanation')
const explanationContainer = document.getElementById('explanation-container')



const deck = document.getElementById('deck')
const questionDiv = document.getElementById('question')
const questionContent2 = document.getElementById('question-content-2')
const choices = Array.from(document.getElementsByClassName("choice-text")).slice(0,4)
let currentQuestion = {} 
let acceptingAnswers = false;
let questionCounter = 0
let availableQuestions = []
// let questions;
let answerClass;


const BACKEND_URL = 'http:localhost:3000';


document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM is Loaded");
})

// function fetchQuestions() {
//   fetch(BACKEND_URL + '/questions')
//   .then(response => response.json())
//   .then(parsedResponse => {
//     console.log(parsedResponse)
//     parsedResponse.forEach(resp => {
//       let newQuestion = new Question(resp)
//       // console.log(Question.all)
//       questions = [...Question.all]
//     })
//   });
// }


//this function declaration is hoisted. this is available before this definition because it's hoisted. if changed to an expression it will only be 
// available to code after 

//defining variables for show/hide login/signup forms 
const lis = document.querySelectorAll("li.tab")
const tabContent = document.querySelector('.tab-content')

//helper method to get sibling elements 
let getSiblings = function(elem){
  let siblings = []
  if(!elem.parentNode) {
    return siblings
  }
  let sibling = elem.parentNode.firstChild;
  while(sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
    }
    sibling = sibling.nextSibling
  }
  return siblings;
}

//add event listener to each signup or login li to show the form the user clicks on and hide the other 
lis.forEach(li => {
  li.addEventListener('click', function(e) {
    e.preventDefault();
    let siblings = getSiblings(li)
    console.log(e.target.href.split('#')[1])
    console.log(siblings)
    this.classList.add('active')
    siblings[0].classList.remove('active')
  
    targetId = e.target.href.split('#')[1];
    
    [...tabContent.children].forEach(child => {
      console.log(child)
      if (child.id !== targetId) {
          child.style.display = "none"
      } else {
        child.style.display = "block"
      }
    })
  
  })
})



function handleUserLogin(obj, form) {
  form.style.display = "none"
  topArea.classList.add("hide")
  startButton.classList.remove("hide")
  obj.renderUser()
}


function createUser() {
    event.preventDefault();
  
    let formData = {
        first_name: document.getElementById("user-firstName").value,
        last_name: document.getElementById("user-lastName").value,
        email: document.getElementById("user-email").value,
        password: document.getElementById("user-password").value
      }
    
    const configObj = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json', 
        },
          body: JSON.stringify(formData)
    }
    
     
      fetch(BACKEND_URL + '/users', configObj)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          let newUser = new User(json)
          handleUserLogin(newUser, myForm)
        })
}

//event listener on signup form to send data to users#create and create user
//also hides sign in form and displays main prep deck 
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', createUser)


function loginUser() {
  event.preventDefault();

  let formData = {
    email: document.getElementById("login-email").value,
    password: document.getElementById("login-password").value
  }

  const configObj = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
      },
        body: JSON.stringify(formData)
  }

  fetch(BACKEND_URL + '/login', configObj)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      let newUser = new User(json)
      handleUserLogin(newUser, myLoginForm)
    })

}

const myLoginForm = document.getElementById('myLoginForm');
myLoginForm.addEventListener('submit', function(event) {
  loginUser()
})
    


function fetchMainDeck() {
  event.preventDefault()

  fetch(BACKEND_URL + '/decks/12')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    debugger
  })
}

  // fetch to add question to users deck 
function addQuestionToDeck(event) {  // processes click on add button (makes patch req. to backend to update the deck with a question deck.questions << question )
  event.preventDefault()
  const deckId = event.target.dataset.id
  const questionId = questionDiv.dataset["id"]

  const configObj = {
      method: 'PATCH',
      body: JSON.stringify({deck_id: deckId, question_id: questionId}), // have to send over question and deck data as json
      headers: { // specify what kind of data I'm sending/receiving
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
  }

  fetch(BACKEND_URL + `/decks/${deckId}`, configObj)
      .then(response => response.json())
      .then(deck_json => { 
        let userDeck = new Deck(deck_json)
          //how to let user know question was added = message display from backend 
      })
      .catch(err => console.log(err))
  
}

function removeQuestionFromDeck(event) {
  event.preventDefault()
  const deckId = event.target.dataset.id
  const questionId = questionDiv.dataset["id"]

    const configObj = {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({deck_id: deckId, question_id: questionId})
    }
    // target here is the delete button for the given question but it has a data-id: deck_id so we can delete question from the deck" 
    fetch(BACKEND_URL + `/decks/${event.target.dataset.id}`, configObj)
    .then(response => response.json())
    .then(json => { 
      let usersDeck = Deck.findById(json.id)
      // debugger - everything below this should be DRYed up with code from addtoDeck
      let deckQuestions = usersDeck.questions
      let ids = deckQuestions.map(ques => ques.id)
      function filterById(id){return Question.findById(id)}
      let userQuestions = ids.map(filterById)
      startDeck(userQuestions)
     
          //how to let user know question was removed = message display from backend 
      })
  
    
}

removeButton.addEventListener('click', function(e) {
  removeQuestionFromDeck(e)
})



addButton.addEventListener('click', function(e) {
  addQuestionToDeck(e)
})



seeButton.addEventListener('click', function(e) {
  debugger
  seeDeck()
  addButton.disabled = true
  removeButton.disabled = false
  seeButton.disabled = true 
  mainButton.disabled = false
})



mainButton.addEventListener('click', function(e){
  debugger
  //backToMain()
  seeDeck()
  addButton.disabled = false
  removeButton.disabled = true
  seeButton.disabled = false
  mainButton.disabled = true
  
})


//start deck function fetches the deck using the buttons data id(which is a deck id), creates a deck obj from response, creates q objects to pass through get new question. 
function startDeck() {
  event.preventDefault()
  const deck_id = event.target.dataset.id 

  fetch(BACKEND_URL + `/decks/${deck_id}`)
  .then(response => response.json())
  .then(json => {
      console.log(json)
      let deck = new Deck(json)
      deck.startDeck() 
      nextButton.addEventListener('click', function(e) {
        clearChoices()
        getNewQuestion(availableQuestions)
        
      })

    })
  }

  //fetches a deck but finds questions objs by id because they have already been created on frontend in startDeck
function seeDeck() {
  event.preventDefault()
  const deck_id = event.target.dataset.id 
  
  fetch(BACKEND_URL + `/decks/${deck_id}`)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    let deck = new Deck(json)
    deck.seeDeck() 
    nextButton.addEventListener('click', function(e) {
      clearChoices()
      getNewQuestion(availableQuestions)
      
    })
    
   })
}

function clearChoices(){
  choices.forEach(choice => choice.parentElement.classList.remove(answerClass))
  explanation.classList.add('hide')
  
}

function getNewQuestion(questions) {
  if (questions.length > 0) {
    const questionIndex = Math.floor(Math.random() * questions.length)
    currentQuestion = questions[questionIndex]
    currentQuestion.render()
    questions.splice(questionIndex, 1)
    acceptingAnswers = true
    availableQuestions = questions
    
  } 
}



//add event listeners to each choice to compare if answer is correct and load another answer 
choices.forEach(choice => {
  choice.addEventListener("click", function(e) {
    if (acceptingAnswers) {
      acceptingAnswers = false
      const selectedAnswer = e.target 
      const answerPrefix = selectedAnswer.previousElementSibling.innerHTML

      answerClass = answerPrefix === currentQuestion.correct_answer ? "correct" : "incorrect"
      //define which class to apply if user selects correct or incorrect answer 

      //apply the class
      selectedAnswer.parentElement.classList.add(answerClass)
  
      explanation.classList.remove('hide')
      explanation.innerHTML = currentQuestion.explanation 

      // explanationP.innerHTML = currentQuestion.explanation ? currentQuestion.explanation : ""
      //keeping track of selected answer vs correct answer
      // console.log(selectedAnswer)
      // console.log(e.target.previousElementSibling.innerHTML)
      // console.log(answerPrefix === currentQuestion.correct_answer)
      // console.log(questions.length)
      
    }
  })
})

function begin() {
  event.target.classList.add('hide')
  userDisplayDiv.classList.add('hide')
  deck.classList.remove('hide')
  nextButton.classList.remove('hide')
  addButton.classList.remove('hide')
  removeButton.classList.remove('hide')
  mainButton.classList.remove('hide')
  mainButton.disabled = true
  seeButton.classList.remove('hide')
  startDeck()
}



startButton.addEventListener('click', begin )




    
      
    
    
    
    

