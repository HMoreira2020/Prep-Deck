class Question {
    constructor(data) {
        this.id = data.id 
        this.content = data.content 
        this.content_2 = data.content_2 
        this.choice_a = data.choice_a 
        this.choice_b = data.choice_b 
        this.choice_c = data.choice_c 
        this.choice_d = data.choice_d 
        this.correct_answer = data.correct_answer 
        this.decks = data.decks 
        this.explanation = data.explanation 
        this.topic = data.topic 
        Question.all.push(this)
    }

    
    render() {
      topic.innerHTML = `Topic: ${this.topic}`
      questionDiv.innerText = this.content
      questionDiv.dataset["id"] = this.id 
      questionContent2.innerText = this.content_2
  
      choices.forEach(choice => {
        let letter = choice.dataset["letter"]
        choice.innerText = this["choice_" + letter]
      })
    }
   
    


    static findById(id) {
      return this.all.find(question => question.id === id)
    }

}



Question.all = [] 








