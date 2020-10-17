
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
        
    
      
    
    
    
    

