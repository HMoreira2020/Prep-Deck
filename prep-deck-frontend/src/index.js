const userDisplayDiv = document.getElementById('user-display')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const addButton = document.getElementById('add-btn')
const removeButton = document.getElementById('remove-btn')
const topArea = document.querySelector('ul.top-area')



const deck = document.getElementById('deck')
const questionDiv = document.getElementById('question')
const questionContent2 = document.getElementById('question-content-2')
const choices = Array.from(document.getElementsByClassName("choice-text"))
let currentQuestion = {} 
let acceptingAnswers = false;
let questionCounter = 0
let availableQuestions = []
let questions;
let answerClass;
let user_deck_id;
let user_deck_name;



// test that we can get data from the backend
const BACKEND_URL = 'http:localhost:3000';
fetch(`${BACKEND_URL}/users`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));

  //get all the questions from db
fetch(`${BACKEND_URL}/questions`)
.then(response => response.json())
.then(parsedResponse => {
  console.log(parsedResponse)
  questions = parsedResponse
});

// handles signup/login
//this function declaration is hoisted. this is available before this definition because it's hoisted. if changed to an expression it will only be 
// available to code after 
function handleUserLogin(obj, form) {
  form.style.display = "none"
  topArea.classList.add("hide")
  startButton.classList.remove("hide")
  // localStorage.setItem("token", json.jwt)
  // loginUser(user_json)
  let newUserP = document.createElement('p')
  newUserP.innerText = `Hello, ${obj.first_name}`
  // #this gives the deck_id number 4 and "Main" that belogns to the user, find out how to access this in the add button 
  userDisplayDiv.append(newUserP)
  user_deck_id = obj.decks[0].id
  user_deck_name = obj.decks[0].name
  // figure out how to give the add button the user deck id as a value so that we have the users deck when we want to add that question to their deck
}


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

//event listener on signup form to send data to users#create and create user
//also hides sign in form and displays main prep deck 
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const usersUrl = "http://localhost:3000/users"
    
    let formData = {
        first_name: document.getElementById("user-firstName").value,
        last_name: document.getElementById("user-lastName").value,
        email: document.getElementById("user-email").value,
        password: document.getElementById("user-password").value
      }
    
    fetch(usersUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        console.log(json.decks[0].name)
        handleUserLogin(json, myForm)
      })

})

const myLoginForm = document.getElementById('myLoginForm');
myLoginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const loginUrl = "http://localhost:3000/login"
    
    let formData = {
        email: document.getElementById("login-email").value,
        password: document.getElementById("login-password").value
      }
    
    fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
      },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        handleUserLogin(json, myLoginForm)
      })

})



// Going through the deck of questions 
const startDeck = () => {
  // questionCounter = 0; don't need this unless you set a MAX_QUESTIONS 
  getNewQuestion()
}
//set current question which is a random choice from questions array, add event listeners to the choices, splice off the question from questions array when it is displayed.  
let getNewQuestion = () => {
  if (questions.length > 0) {
    // questionCounter ++ 
    const questionIndex = Math.floor(Math.random() * questions.length)
    currentQuestion = questions[questionIndex]
    // OOJS refactor for question card renderQuestionCard
    questionDiv.innerText = currentQuestion.content
    questionContent2.innerText = currentQuestion.content_2

    choices.forEach(choice => {
      let letter = choice.dataset["letter"]
      choice.innerText = currentQuestion["choice_" + letter]
    })

    questions.splice(questionIndex, 1)
    acceptingAnswers = true
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

      //keeping track of answer vs correct answer
      console.log(selectedAnswer)
      console.log(e.target.previousElementSibling.innerHTML)
      console.log(answerPrefix === currentQuestion.correct_answer)
      console.log(questions.length)
      
    }
  })
})

//when next is hit, remove the answerClass from the choices and get a new question from questions array 
nextButton.addEventListener('click', function(e) {
  choices.forEach(choice => choice.parentElement.classList.remove(answerClass))
  getNewQuestion()
   
})



// on clicking on start startButton, game begins with first question displayed. rename game id later 
startButton.addEventListener('click', function(e) {
  e.preventDefault();
  e.target.classList.add('hide')
  deck.classList.remove('hide')
  nextButton.classList.remove('hide')
  addButton.classList.remove('hide')
  removeButton.classList.remove('hide')
  
  startDeck();
  // load questions into cards here 
})




    
      
    
    
    
    

