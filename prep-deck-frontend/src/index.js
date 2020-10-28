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


// test that we can get data from the backend
const BACKEND_URL = 'http:localhost:3000';
// fetch(`${BACKEND_URL}/users`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));


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


// function postUser(url, data) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//       body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(json => {
//       console.log(json)
//       let newUser = new User(json)
//       handleUserLogin(newUser, myForm)
//     })
// }


function handleUserLogin(obj, form) {
  form.style.display = "none"
  topArea.classList.add("hide")
  startButton.classList.remove("hide")
  obj.renderUser()
  fetchQuestions(`${BACKEND_URL}/questions`) 
}

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
    
      // postUser(usersUrl, formData)
      fetch(usersUrl, {
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
          let newUser = new User(json)
          handleUserLogin(newUser, myForm)
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
    
      // postUser(loginUrl, formData)
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
        let newUser = new User(json)
        handleUserLogin(newUser, myLoginForm)
      })

})


  //get all the questions from db
function fetchQuestions(url) {
    fetch(url)
    .then(response => response.json())
    .then(parsedResponse => {
      console.log(parsedResponse)
      parsedResponse.forEach(resp => {
        let newQuestion = new Question(resp)
        // console.log(Question.all)
        questions = Question.all 
        //questions is set using Question.all from class 
      })
    });

  }

  
// Going through the deck of questions 
const startDeck = () => {
  getNewQuestion()
}
//set current question which is a random choice from questions array, add event listeners to the choices, splice off the question from questions array when it is displayed.  
let getNewQuestion = () => {
  if (questions.length > 0) {
    const questionIndex = Math.floor(Math.random() * questions.length)
    currentQuestion = questions[questionIndex]
    //.render is defined in the question.js class file
    currentQuestion.render()
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
      // console.log(selectedAnswer)
      // console.log(e.target.previousElementSibling.innerHTML)
      // console.log(answerPrefix === currentQuestion.correct_answer)
      // console.log(questions.length)
      
    }
  })
})

//when next is hit, remove the answerClass from the choices and get a new question from questions array 
nextButton.addEventListener('click', function(e) {
  choices.forEach(choice => choice.parentElement.classList.remove(answerClass))
  getNewQuestion()
   
})



// on clicking on start startButton, deck begins with first question displayed. rename deck id later 
startButton.addEventListener('click', function(e) {
  e.target.classList.add('hide')
  deck.classList.remove('hide')
  nextButton.classList.remove('hide')
  addButton.classList.remove('hide')
  removeButton.classList.remove('hide')
  startDeck();
  // load questions into cards here 
})




    
      
    
    
    
    

