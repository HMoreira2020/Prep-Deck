
class Deck {
    debugger
    constructor(data) {
        this.id = data.id 
        this.name = data.name 
        this.questions = data.questions
        this.user_id = data.user_id 
        Deck.all.push(this)
    }

    
    render() {
        //set questions = this.questions then use startDeck and getNewQuestion methods 
    }

    static findById(id) {
      return this.all.find(deck => deck.id === id)
    }
      
}



Deck.all = [] 

