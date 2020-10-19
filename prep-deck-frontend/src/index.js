
// const startButton = document.getElementById('start-btn')
// test that we can get data from the backend
const BACKEND_URL = 'http:localhost:3000';
fetch(`${BACKEND_URL}/users`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));

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
        .then(json => console.log(json))

})



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
  
  // $(target).fadeIn(600);
  
  })
})
        // .then(function(newUserObj) {
        //     console.log(newUserObj)
        //     let newUserP = document.createElement('para')
        //     newUserP.innerText = `Hello, ${newUserObj.first_name}`
        //     myForm.append(newUserP)
        // //  let userEmail = json.email
        // // "skfj@gmail.com"
        // // let userName= json.name
        //   // let userId = json.id 
        // // "Chris "  append these to a div to display user name 
        // //   myForm.classList.add("hide");
        // //   startButton.classList.remove("hide")
    
        // })
        
    
      
    
    
    
    

