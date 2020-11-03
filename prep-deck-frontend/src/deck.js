
class Deck {
    constructor(data) {
        this.id = data.id 
        this.name = data.name 
        this.questions = data.questions  
        this.user_id = data.user_id 
        Deck.all.push(this)
    }

    //deck.startDeck()
    startDeck() {
        header.innerHTML = this.name
        mainButton.dataset["id"] = this.id
        let questions = this.questions.map(ques => new Question(ques))
        cloneQuestions = [...questions]
        console.log(cloneQuestions)
        getNewQuestion(cloneQuestions)
    }


    seeDeck() {
        header.innerHTML = this.name
        let ids = this.questions.map(ques => ques.id)
        function filterById(id){return Question.findById(id)}
        let questions = ids.map(filterById)
        cloneQuestions = [...questions]
        console.log(cloneQuestions)
        getNewQuestion(cloneQuestions)
    }

    static findById(id) {
      return this.all.find(deck => deck.id === id)
    }
      
}



Deck.all = [] 

