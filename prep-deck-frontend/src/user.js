// class User {
//     constructor(user) {
//         debugger
//         this.id = user.id 



//     }
// }

// function handleUserLogin(obj, form) {
//     form.style.display = "none"
//     topArea.classList.add("hide")
//     startButton.classList.remove("hide")
//     // localStorage.setItem("token", json.jwt)
//     // loginUser(user_json)
//     let newUserP = document.createElement('p')
//     newUserP.innerText = `Hello, ${obj.first_name}`
//     // #this gives the deck_id number 4 and "Main" that belogns to the user, find out how to access this in the add button 
//     userDisplayDiv.append(newUserP)
    
//     user_deck_id = obj.decks[0].id
//     user_deck_name = obj.decks[0].name
//     addButton.dataset["id"] = user_deck_id
//     addButton.innerHTML = `Add to ${obj.first_name}'s Deck`
//     // figure out how to give the add button the user deck id as a value so that we have the users deck when we want to add that question to their deck
//   }

//   const myForm = document.getElementById('myForm');

//   myForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const usersUrl = "http://localhost:3000/users"
    
//     let formData = {
//         first_name: document.getElementById("user-firstName").value,
//         last_name: document.getElementById("user-lastName").value,
//         email: document.getElementById("user-email").value,
//         password: document.getElementById("user-password").value
//       }
    
//     fetch(usersUrl, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//         body: JSON.stringify(formData)
//       })
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         console.log(json.decks[0].name)
//         handleUserLogin(json, myForm)
//       })

// })

