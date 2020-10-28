class User {
    constructor(data) {
        this.id = data.id 
        this.first_name = data.first_name 
        this.last_name = data.last_name 
        this.email = data.email
        this.deck_id = data.decks[0].id
        this.deck_name = data.decks[0].name
        User.all.push(this)
    }

    
    renderUser() {
        let newUserP = document.createElement('p')
        newUserP.innerText = `Hello, ${this.first_name}`
        addButton.dataset["id"] = this.deck_id
        addButton.innerHTML = `Add to ${this.first_name}'s Deck`
        userDisplayDiv.append(newUserP)
    }
      
}



User.all = [] 


  