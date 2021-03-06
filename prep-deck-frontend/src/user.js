class User {
    constructor(data) {
        this.id = data.id 
        this.first_name = data.first_name 
        this.last_name = data.last_name 
        this.email = data.email
        this.decks = data.decks
        this.deck_id = data.decks[0].id
        this.deck_name = data.decks[0].name
        User.all.push(this)
    }

    
    renderUser() {
        let newUserP = document.createElement('p')
        newUserP.innerText = `Welcome ${this.first_name}, let's see what you know.`
        seeButton.dataset["id"] = this.deck_id
        removeButton.dataset["id"] = this.deck_id
        addButton.dataset["id"] = this.deck_id
        addButton.innerHTML = `Add to ${this.deck_name}`
        userDisplayDiv.append(newUserP)
    }

    static findById(id) {
        return this.all.find(user => user.id === id)
      }
    
    
      
}



User.all = [] 


  