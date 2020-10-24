const userDisplayDiv = document.getElementById('user-display')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const topArea = document.querySelector('ul.top-area')


const game = document.getElementById('game')
const questionDiv = document.getElementById('question')
const questionContent2 = document.getElementById('question-content-2')
const choices = Array.from(document.getElementsByClassName("choice-text"))
let currentQuestion = {} 
let acceptingAnswers = false;
let questionCounter = 0
let availableQuestions = []
let questions;


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
          myForm.style.display = "none"
          topArea.classList.add("hide")
          startButton.classList.remove("hide")
          let newUserP = document.createElement('para')
          newUserP.innerText = `Hello, ${json.first_name}`
          userDisplayDiv.append(newUserP)
          
        })

})


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
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(json => {
          console.log(json)
          //refactor with helper method for code below that occurs in signup and login
          myLoginForm.style.display = "none"
          topArea.classList.add("hide")
          startButton.classList.remove("hide")
          let newUserP = document.createElement('para')
          newUserP.innerText = `Hello, ${json.first_name}`
          userDisplayDiv.append(newUserP)

        })

})

startGame = () => {
  // questionCounter = 0; don't need this unless you set a MAX_QUESTIONS 
  getNewQuestion()
}

getNewQuestion = () => {
  if (questions.length > 0) {
    // questionCounter ++ 
    const questionIndex = Math.floor(Math.random() * questions.length)
    currentQuestion = questions[questionIndex]
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

      const answerClass = answerPrefix === currentQuestion.correct_answer ? "correct" : "incorrect"
      //define which class to apply if user selects correct or incorrect answer 

      //apply the class
      selectedAnswer.parentElement.classList.add(answerClass)

      nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        selectedAnswer.parentElement.classList.remove(answerClass)
        getNewQuestion()
         
      })
      
     
      // console.log(selectedAnswer)
      // console.log(e.target.previousElementSibling.innerHTML)
      // console.log(answerPrefix === currentQuestion.correct_answer)
     
    }
  })
})



// on clicking on start startButton, game begins with first question displayed. rename game id later 
startButton.addEventListener('click', function(e) {
  e.preventDefault();
  e.target.classList.add('hide')
  game.classList.remove('hide')
  nextButton.classList.remove('hide')
  startGame();
  // load questions into cards here 
})




    
      
    
    
    
    

