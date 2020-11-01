
class Deck {
    constructor(data) {
        this.id = data.id 
        this.name = data.name 
        this.questions = data.questions  
        this.user_id = data.user_id 
        Deck.all.push(this)
    }

    // createQuestions() {
    //     return this.questions.map(ques => new Question(ques))
    // }

    // findQuestions() {
    //     let ids = this.questions.map(ques => ques.id)
    //     function filterById(id){return Question.findById(id)}
    //     return ids.map(filterById)
    // }

    //deck.startDeck()
    startDeck() {
        header.innerHTML = this.name
        mainButton.dataset["id"] = this.id
        // let questions = this.createQuestions() 
        let questions = this.questions.map(ques => new Question(ques))
        debugger
        let cloneQuestions = [...questions]
        console.log(cloneQuestions)
        getNewQuestion(cloneQuestions)
    }

    seeDeck() {
        header.innerHTML = this.name
        let ids = this.questions.map(ques => ques.id)
        function filterById(id){return Question.findById(id)}
        let questions = ids.map(filterById)
        let cloneQuestions = [...questions]
        console.log(cloneQuestions)
        getNewQuestion(cloneQuestions)
    }

    static findById(id) {
      return this.all.find(deck => deck.id === id)
    }
      
}



Deck.all = [] 

// function seeDeck() {
//   event.preventDefault()
//   let deckId = event.target.dataset.id

//   fetch(BACKEND_URL + `/decks/${deckId}`)
//   .then(response => response.json())
//   .then(json => {
//     let usersDeck = new Deck(json)
//     let deckQuestions = usersDeck.questions
//     let ids = deckQuestions.map(ques => ques.id)
//     function filterById(id){return Question.findById(id)}
//     let userQuestions = ids.map(filterById)
//     header.innerHTML = usersDeck.name
//     startDeck(userQuestions)
//     })
    
//     addButton.disabled = true 
//     removeButton.disabled = false 
//     seeButton.disabled = true 
//     mainButton.disabled = false
// }